import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { FaPhone, FaPlay, FaTrash } from "react-icons/fa6"


import { initializeApp } from 'firebase/app';
import { collection, getFirestore, doc, onSnapshot, setDoc, addDoc, deleteDoc } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBSEPpPP2BTag2kt12-_q0_u5cneF7kKkE",
    authDomain: "mhes-4cd62.firebaseapp.com",
    projectId: "mhes-4cd62",
    storageBucket: "mhes-4cd62.appspot.com",
    messagingSenderId: "586634390215",
    appId: "1:586634390215:web:3653d2a62132e733706ce2",
    measurementId: "G-MBL19ER1QQ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const servers = {
    iceServers: [
        {
            urls: ["stun:stun1.l.google.com:19302", "stun:stun2.l.google.com:19302"],
        },
    ],
    iceCandidatePoolSize: 10,
};

const TherapistAppointments = () => {
    const [startVideoChat, setStartVideoChat] = useState(false);
    const [callId, setCallId] = useState("");

    // Using useRef for persistent streams across renders
    const localStreamRef = useRef(null);
    const remoteStreamRef = useRef(null);
    const pc = useRef(new RTCPeerConnection(servers)); // Use useRef for peer connection too

    const localVideoRef = useRef();
    const remoteVideoRef = useRef();

    // Function to set up media sources and start the video chat
    const setupMedia = async () => {
        localStreamRef.current = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        remoteStreamRef.current = new MediaStream();

        localStreamRef.current.getTracks().forEach((track) => {
            pc.current.addTrack(track, localStreamRef.current);
        });

        // Pull tracks from remote stream, add to video stream
        pc.current.ontrack = (event) => {
            event.streams[0].getTracks().forEach((track) => {
                remoteStreamRef.current.addTrack(track);
            });
        };

        localVideoRef.current.srcObject = localStreamRef.current;
        remoteVideoRef.current.srcObject = remoteStreamRef.current;
    };

    // Function to start the call and create the offer
    const startCall = async (appointment) => {
        setStartVideoChat(true);
        await setupMedia();

        const callDoc = doc(collection(db, "calls"), appointment.appointmentId);
        const offerCandidates = collection(callDoc, "offerCandidates");
        const answerCandidates = collection(callDoc, "answerCandidates");

        setCallId(callDoc.id); // Save the call ID for patient use

        pc.current.onicecandidate = async (event) => {
            if (event.candidate) {
                await addDoc(offerCandidates, event.candidate.toJSON());
            }
        };

        // Create the offer
        const offerDescription = await pc.current.createOffer();
        await pc.current.setLocalDescription(offerDescription);

        const offer = {
            sdp: offerDescription.sdp,
            type: offerDescription.type,
        };

        await setDoc(callDoc, { offer });

        // Listen for remote answer
        onSnapshot(callDoc, (snapshot) => {
            const data = snapshot.data();
            if (!pc.current.currentRemoteDescription && data?.answer) {
                const answerDescription = new RTCSessionDescription(data.answer);
                pc.current.setRemoteDescription(answerDescription);
            }
        });

        // Listen for remote ICE candidates
        onSnapshot(answerCandidates, (snapshot) => {
            snapshot.docChanges().forEach((change) => {
                if (change.type === 'added') {
                    const candidate = new RTCIceCandidate(change.doc.data());
                    pc.current.addIceCandidate(candidate);
                }
            });
        });
    };

    // Function to hang up the call
    const hangUp = async () => {
        // Stop all local stream tracks (turn off camera and microphone)
        if (localStreamRef.current) {
            localStreamRef.current.getTracks().forEach((track) => {
                if (track.readyState === 'live') {
                    track.stop(); // Ensure that all tracks are properly stopped
                }
            });
        }

        // Stop all remote stream tracks (although usually not necessary)
        if (remoteStreamRef.current) {
            remoteStreamRef.current.getTracks().forEach((track) => {
                if (track.readyState === 'live') {
                    track.stop(); // Stop remote tracks just to be thorough
                }
            });
        }

        // Close the peer connection
        if (pc.current) {
            pc.current.getSenders().forEach((sender) => pc.current.removeTrack(sender)); // Remove tracks from peer connection
            pc.current.close();
        }

        // Delete the Firestore call document
        if (callId) {
            const callDocRef = doc(db, "calls", callId);
            await deleteDoc(callDocRef);
        }

        // Reset UI state and other variables
        setCallId("");
        setStartVideoChat(false);

        // Clean up video element references
        if (localVideoRef.current) {
            localVideoRef.current.srcObject = null;
        }
        if (remoteVideoRef.current) {
            remoteVideoRef.current.srcObject = null;
        }

        console.log("Call ended, resources cleaned up, and camera turned off.");
    };






    const submitBtn = useRef(null)
    const dateTimeInputRef = useRef(null)


    const [submitStatus, setSubmitStatus] = useState({
        pending: "",
        success: "",
        error: ""
    })

    const [subscribers, setSubscribers] = useState([])
    const getPatients = async () => {
        try {
            const therapistDocId = JSON.parse(localStorage.getItem("credentials")).response.docId
            const { data } = await axios.post("http://localhost:5000/api/therapists/getPatients", { therapistDocId })
            console.log(data.message);
            setSubscribers(data.message)
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getPatients()
    }, [])



    const [appointment, setAppointment] = useState({
        userId: "",
        dateTime: "",
        duration: 60
    })

    const [myAppointments, setMyAppointments] = useState([])

    const handleAppointment = (e) => {
        const { name, value } = e.currentTarget
        setAppointment((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const deleteAppointment = async (appointmentId) => {
        try {
            await axios.delete(`http://localhost:5000/api/therapists/appointments/${appointmentId}`);
            setMyAppointments((prevAppointments) =>
                prevAppointments.filter((appointment) => appointment.appointmentId !== appointmentId)
            );
        } catch (error) {
            console.error("Failed to delete appointment", error);
        }
    };

    const getTherapistAppointments = async () => {
        try {
            const docId = JSON.parse(localStorage.getItem("credentials")).response.docId
            const { data } = await axios.post("http://localhost:5000/api/therapists/getAppointments", { docId })
            setMyAppointments(data.message)
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getTherapistAppointments()
    }, [submitStatus.success])


    useEffect(() => {
        const now = new Date()
        const formatedDate = now.toISOString().slice(0, 16)
        dateTimeInputRef.current.min = formatedDate
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        submitBtn.current.disabled = true
        setSubmitStatus({
            success: "",
            pending: "Uploading...",
            error: ""
        })
        try {
            const docId = JSON.parse(localStorage.getItem("credentials")).response.docId

            const formData = new FormData()

            formData.append("therapistId", docId)
            formData.append("userId", appointment.userId)
            formData.append("dateTime", new Date(appointment.dateTime).toISOString())
            formData.append("duration", appointment.duration)

            const { data } = await axios.post("http://localhost:5000/api/therapists/appointment", formData, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            setSubmitStatus({
                success: data.message.status && "Successfully Created",
                pending: "",
                error: ""
            })
            console.log(data);
        } catch (error) {
            console.error(error);
            setSubmitStatus({
                success: "",
                pending: "",
                error: error
            })
        } finally {
            setTimeout(() => {
                submitBtn.current.disabled = false
                setSubmitStatus({
                    success: "",
                    pending: "",
                    error: ""
                })
            }, 3500)
        }
    }

    return (
        <div className="p-5 rounded-lg bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-100">

            <div className="bg-neutral-100 dark:bg-neutral-700 rounded-md p-4 my-4">
                <h1 className="text-lg my-1 py-2 border-b">Create Meeting Appointment</h1>

                <form method="post" onSubmit={handleSubmit}>
                    <div className="flex flex-col md:flex-row flex-wrap gap-5 mt-4">

                        <div>
                            <label htmlFor="setPatientMeeting">Meeting with: </label>
                            <select required name="userId" onChange={handleAppointment} id="setPatientMeeting" className="dark:bg-neutral-800 p-2 rounded-md w-full">
                                <option value="" >Choose Patient</option>
                                {
                                    subscribers && subscribers.map((subscriber) => (
                                        <option key={subscriber.userId} value={subscriber.userId} className="px-2">{subscriber.userData.name}</option>
                                    ))
                                }
                                {/* <option value="WXwcyJurUkaDBWBBletGwHLUPNj2" className="px-2">P-132 Hassnain Ahmed</option> */}
                            </select>
                        </div>

                        <div>
                            <label htmlFor="setDateTimeMeeting">Date & Time: </label>
                            <input required ref={dateTimeInputRef} name="dateTime" onChange={handleAppointment} type="datetime-local" id="setDateTimeMeeting" className="dark:bg-neutral-800 p-2 rounded-md w-full" />
                        </div>

                        <div>
                            <label htmlFor="setDurationMeeting">Meeting Duration: </label>
                            <input required type="number" name="duration" onChange={handleAppointment} id="setDurationMeeting" placeholder="Eg: 1 means one Hour" min={1} value={60} disabled className="disabled:bg-neutral-300 dark:disabled:bg-neutral-600 dark:bg-neutral-800 p-2 rounded-md w-full" />
                        </div>
                        <div className="">
                            {
                                submitStatus.success && <p>{submitStatus.success}</p>
                            }
                            {
                                submitStatus.pending && <p>{submitStatus.pending}</p>
                            }
                            {
                                submitStatus.error && <p>{submitStatus.error}</p>
                            }
                        </div>
                        <div className="flex justify-center w-full">
                            <button className="px-4 py-2 rounded-md bg-emerald-300 hover:bg-emerald-400 text-neutral-800 transition-colors" ref={submitBtn}>Create Appointment</button>
                        </div>
                    </div>
                </form>

            </div>

            <div className="bg-neutral-100 dark:bg-neutral-700 rounded-md p-4 my-4">
                <h1 className="text-lg">Booked Sessions Meetings.</h1>
                <div className="overflow-auto max-h-[400px]">
                    <table className="w-full rounded-md overflow-hidden">
                        <thead>
                            <tr className="bg-zinc-300 dark:bg-zinc-800/80">
                                <th className="p-2">No.</th>
                                <th className="p-2">Meeting with</th>
                                <th className="p-2">Date Time</th>
                                <th className="p-2">Duration</th>
                                <th className="p-2">Action</th>
                            </tr>
                        </thead>

                        <tbody className="text-center">
                            {
                                myAppointments &&
                                myAppointments.map((appointment, index) => (
                                    <tr key={index} className="bg-zinc-200 dark:bg-zinc-600 border-t border-neutral-400">
                                        <td className="p-2">{appointment.appointmentId}</td>
                                        <td className="p-2">{appointment.user?.name || "Patient Name"}</td>
                                        <td className="p-2">{new Date(appointment.data.dateTime).toLocaleString()}</td>
                                        <td className="p-2">{appointment.data.duration} Minute(s)</td>
                                        <td className="p-2 flex gap-4 justify-center">
                                            <button onClick={() => startCall(appointment)}><FaPlay /></button>
                                            <button onClick={() => deleteAppointment(appointment.appointmentId)}>
                                                <FaTrash />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            {startVideoChat && (
                <div className="fixed top-0 left-0 flex justify-center items-center w-full h-full">
                    <div className="relative bg-neutral-800/70 backdrop-blur-lg w-[90%] h-[90%] p-5 rounded-xl">
                        <div className="w-full h-full bg-red-500/20 rounded-lg">
                            <video ref={remoteVideoRef} autoPlay playsInline></video>
                        </div>

                        <div className="absolute left-8 right-8 bottom-7 flex md:flex-row-reverse flex-col justify-center md:justify-between items-center md:items-baseline gap-3">
                            <div className="bg-slate-400/20 w-[200px] sm:w-[300px] md:w-[400px] aspect-[16/9] rounded-md overflow-hidden">
                                <video ref={localVideoRef} autoPlay playsInline muted></video>
                            </div>

                            <span className="p-4 rotate-180 bg-red-400 rounded-full hover:animate-pulse cursor-pointer" onClick={hangUp}>
                                <FaPhone size={32} />
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default TherapistAppointments