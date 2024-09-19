import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const PatientAppointments = () => {

    const [myAppointments, setMyAppointments] = useState()
    const getTherapistAppointments = async () => {
        try {
            const docId = JSON.parse(localStorage.getItem("credentials")).response.docId
            const { data } = await axios.post("http://localhost:5000/api/users/getPatientAppointments", { docId })
            setMyAppointments(data.message)
            console.log(data.message[0]);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getTherapistAppointments()
    }, [])

    return (
        <div className="p-5 rounded-lg bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-100">

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
                            </tr>
                        </thead>

                        <tbody className="text-center">
                            {
                                myAppointments &&
                                myAppointments.map((appointment, index) => (
                                    <tr key={index} className="bg-zinc-200 dark:bg-zinc-600 border-t border-neutral-400">
                                        <td className="p-2">{appointment.id}</td>
                                        <td className="p-2">{appointment.therapist?.therapistFullName || "Therapist Name"}</td>
                                        <td className="p-2">{new Date(appointment.dateTime).toLocaleString()}</td>
                                        <td className="p-2">{appointment.duration} Minute(s)</td>
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
