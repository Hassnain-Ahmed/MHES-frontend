import { Outlet, Routes, Route } from 'react-router-dom';
import { useRef, useState, useEffect } from "react"


import { Navbar } from '../components/home/Navbar';

import { TherapistBannar } from "../components/therapist/TherapistBanner"

import PatientDashboardProfileBannar from "../components/patient/PatientDashboardProfileBannar"
import PatientProfile from '../components/patient/PatientProfile';
import PatientTherapist from '../components/patient/PatientTherapist';
import PatientSubscription from '../components/patient/PatientSubscription';
import PatientListings from '../components/patient/PatientListings';
import { PatientChatbot } from '../components/patient/PatientChatbot';

import { initializeApp } from 'firebase/app';
import { collection, getFirestore, doc, onSnapshot, getDoc, updateDoc, addDoc, deleteDoc } from 'firebase/firestore';
import { FaPhone, FaPhoneSlash } from 'react-icons/fa6';
import { PatientAppointments } from '../components/patient/PatientAppointments';

import axios from 'axios';
import PatientExercise from '../components/patient/PatientExercise';
import PatientMusic from '../components/patient/PatientMusic';

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


const PatientLayout = () => {

    const [myAppointments, setMyAppointments] = useState(null);
    const [startVideoChat, setStartVideoChat] = useState(false);
    const [callInput, setCallInput] = useState("");
    const [isCallActive, setIsCallActive] = useState(false);
    const [incomingCall, setIncomingCall] = useState(false);

    const localVideoRef = useRef(null);
    const remoteVideoRef = useRef(null);

    const pc = useRef(new RTCPeerConnection(servers));
    let localStream = useRef();
    let remoteStream = useRef();

    const getTherapistAppointments = async () => {
        try {
            const docId = JSON.parse(localStorage.getItem("credentials"))?.response?.docId;
            const { data } = await axios.post("https://mhes-backend.vercel.app/api/users/getPatientAppointments", { docId });
            setMyAppointments(data?.message[0]?.id || null);
        } catch (error) {
            console.error("Error fetching therapist appointments:", error);
        }
    };

    useEffect(() => {
        getTherapistAppointments();
    }, []);

    useEffect(() => {
        const listenForIncomingCalls = () => {
            const callsRef = collection(db, "calls");

            onSnapshot(callsRef, (snapshot) => {
                snapshot.docChanges().forEach((change) => {
                    if (change.type === "added") {
                        const callData = change.doc.data();

                        const currentPatientAppointmentId = myAppointments;
                        if (change.doc.id === currentPatientAppointmentId) {
                            setIncomingCall(true);
                            setCallInput(change.doc.id);
                        }
                    }
                });
            });
        };

        listenForIncomingCalls();
    }, [myAppointments]);

    const setupMedia = async () => {
        try {
            localStream.current = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
            remoteStream.current = new MediaStream();

            localStream.current.getTracks().forEach((track) => pc.current.addTrack(track, localStream.current));

            pc.current.ontrack = (event) => {
                event.streams[0].getTracks().forEach((track) => {
                    remoteStream.current.addTrack(track);
                });
            };

            localVideoRef.current.srcObject = localStream.current;
            remoteVideoRef.current.srcObject = remoteStream.current;
        } catch (error) {
            console.error("Error setting up media:", error);
        }
    };

    const answerCall = async () => {
        if (!isCallActive) {
            setStartVideoChat(true);
            await setupMedia();

            const callDocRef = doc(db, "calls", callInput);
            const answerCandidatesRef = collection(callDocRef, "answerCandidates");
            const offerCandidatesRef = collection(callDocRef, "offerCandidates");

            pc.current.onicecandidate = async (event) => {
                event.candidate && await addDoc(answerCandidatesRef, event.candidate.toJSON());
            };

            try {
                const callData = (await getDoc(callDocRef)).data();
                await pc.current.setRemoteDescription(new RTCSessionDescription(callData.offer));

                const answerDescription = await pc.current.createAnswer();
                await pc.current.setLocalDescription(answerDescription);
                await updateDoc(callDocRef, { answer: { type: answerDescription.type, sdp: answerDescription.sdp } });

                setIsCallActive(true);
                setIncomingCall(false);

                onSnapshot(offerCandidatesRef, (snapshot) => {
                    snapshot.docChanges().forEach((change) => {
                        if (change.type === "added") {
                            pc.current.addIceCandidate(new RTCIceCandidate(change.doc.data()));
                        }
                    });
                });
            } catch (error) {
                console.error("Error answering call:", error);
            }
        }
    };

    const hangUp = async () => {
        if (localStream.current) localStream.current.getTracks().forEach((track) => track.stop());
        if (remoteStream.current) remoteStream.current.getTracks().forEach((track) => track.stop());

        if (pc.current) {
            pc.current.getSenders().forEach((sender) => pc.current.removeTrack(sender));
            pc.current.close();
        }

        if (callInput) {
            await deleteDoc(doc(db, "calls", callInput));
            await deleteDoc(doc(db, "appointments", myAppointments));
        }

        setCallInput("");
        setIsCallActive(false);
        setStartVideoChat(false);
        localVideoRef.current.srcObject = null;
        remoteVideoRef.current.srcObject = null;

    };

    const userData = JSON.parse(localStorage.getItem("credentials"));
    const userAuth = {
        id: userData?.response?.docId,
        name: userData?.response?.userData?.fullname,
        contact: userData?.response?.userData?.contact,
        email: userData?.response?.userData?.email,
        profilePic: userData?.response?.userData?.profileUrl,
        plan: userData?.response?.subscriptionData?.plan || "Trial",
        created_at: userData?.response?.userData?.createdAt || "Error",
        role: userData?.response?.role || "Error",
    };


    return (
        <>
            <Navbar user={userAuth} />
            <div className="flex flex-col md:flex-row items-start justify-between px-4 py-2 gap-5">
                <PatientDashboardProfileBannar data={userAuth} />
                <div className="w-full">
                    <Outlet />
                </div>
                <div className=''>

                    {incomingCall && !isCallActive && (
                        <div className='absolute z-40 top-4 right-4 bg-neutral-900/20 backdrop-blur-md p-5 rounded-lg'>
                            <div className="flex flex-col">
                                <h3 className='text-lg font-semibold text-white'>Incoming Call from Therapist</h3>
                                <div>
                                    <button onClick={answerCall} className='p-2 rounded-full bg-green-200'><FaPhone size={22} /></button>
                                    <button onClick={() => setIncomingCall(false)} className='ml-2 p-2 rounded-full bg-red-200'><FaPhoneSlash size={24} /></button>
                                </div>
                            </div>
                        </div>
                    )}

                    {
                        startVideoChat && (
                            <div className="fixed top-0 left-0 flex justify-center items-center w-full h-full">
                                <div className="relative bg-neutral-800/70 backdrop-blur-lg w-[90%] h-[90%] p-5 rounded-xl">
                                    <div className="w-full h-full bg-red-500/20 rounded-lg aspect-[16/9] overflow-hidden">
                                        <video ref={remoteVideoRef} autoPlay playsInline className='w-full' />
                                    </div>

                                    <div className="absolute left-8 right-8 bottom-7 flex md:flex-row-reverse flex-col justify-center md:justify-between items-center md:items-baseline gap-3">
                                        <div className="bg-slate-400/20 w-[200px] sm:w-[300px] md:w-[400px] aspect-[16/9] rounded-md overflow-hidden">
                                            <video ref={localVideoRef} autoPlay playsInline className='w-full' />
                                        </div>

                                        <span className="p-4 rotate-180 bg-red-400 rounded-full hover:animate-pulse cursor-pointer" onClick={hangUp}>
                                            <FaPhone size={32} />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>
            {/* <Footer /> */}
        </>
    );
};

const PatientDashboard = () => {

    const userData = JSON.parse(localStorage.getItem("credentials"))
    const userAuth = {
        id: userData?.response?.docId,
        name: userData?.response?.userData?.fullname,
        contact: userData?.response?.userData?.contact,
        email: userData?.response?.userData?.email,
        password: userData?.response?.userData?.password,
        profilePic: userData?.response?.userData?.profileUrl,
        plan: userData?.response?.subscriptionData?.plan || "Trail",
        created_at: userData?.response?.userData?.createdAt || "Error",
    }

    return (
        <Routes>
            <Route path='/' element={<PatientLayout />}>
                <Route path='/' element={<PatientProfile userData={userAuth} />} />
                {/* <Route path='/dashboard' element={<TherapistBannar heading="Recommended Therapists" />} /> */}
                <Route path='/profile' element={<PatientProfile userData={userAuth} />} />
                <Route path='/mytherapist' element={<PatientTherapist subscribed={false} />} />
                {/* <Route path='/sessions' element={<PatientSessions />} /> */}
                <Route path='/subscription' element={<PatientSubscription />} />
                <Route path='/listings' element={<PatientListings />} />
                <Route path='/chatbot' element={<PatientChatbot />} />
                <Route path='/appointments' element={<PatientAppointments />} />
                <Route path='/exercise' element={<PatientExercise />} />
                <Route path='/music' element={<PatientMusic />} />
                <Route path='*' element={<TherapistBannar heading="Recommended Therapists" />} />
            </Route>
        </Routes>
    );
};

export default PatientDashboard