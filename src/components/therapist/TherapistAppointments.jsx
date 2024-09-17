import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { FaPlay, FaTrash } from "react-icons/fa6"


const TherapistAppointments = () => {

    const submitBtn = useRef(null)
    const dateTimeInputRef = useRef(null)

    const [submitStatus, setSubmitStatus] = useState({
        pending: "",
        success: "",
        error: ""
    })

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
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-4">
                        <div>
                            <label htmlFor="setPatientMeeting">Meeting with: </label>
                            <select required name="userId" onChange={handleAppointment} id="setPatientMeeting" className="dark:bg-neutral-800 p-2 rounded-md w-full">
                                <option value="" >Choose Patient</option>
                                <option value="WXwcyJurUkaDBWBBletGwHLUPNj2" className="px-2">P-132 Hassnain Ahmed</option>
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
                        <div className="col-span-3">
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
                        <div className="col-span-3 flex justify-center">
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
                                            <button><FaPlay /></button>
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
        </div>
    )
}

export default TherapistAppointments