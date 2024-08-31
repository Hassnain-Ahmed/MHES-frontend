import { useEffect, useRef } from "react"


const TherapistAppointments = () => {

    const dateTimeInputRef = useRef(null)

    useEffect(() => {
        const now = new Date()
        const formatedDate = now.toISOString().slice(0, 16)
        dateTimeInputRef.current.min = formatedDate

        // const nextFormatedMonth = new Date(now.setMonth(now.getMonth() + 1)).toISOString().slice(0, 16)
        // dateTimeInputRef.current.max = nextFormatedMonth

        // console.log(nextFormatedMonth);

    }, [])

    return (
        <div className="p-5 rounded-lg bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-100">

            <div className="bg-neutral-100 dark:bg-neutral-700 rounded-md p-4 my-4">
                <h1 className="text-lg my-1 py-2 border-b">Create Meeting Appointment</h1>

                <div className="flex flex-wrap gap-5 mt-4">
                    <div>
                        <label htmlFor="setPatientMeeting">Meeting with: </label>
                        <select name="" defaultValue="Default" id="setPatientMeeting" className="dark:bg-neutral-800 p-2 rounded-md">
                            <option value="Default" >Choose Patient</option>
                            <option value="Hassnain Ahmed" className="px-2">P-132 Hassnain Ahmed</option>
                            <option value="Umeed Ali" className="px-2">P-121 Umeed Ali</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="setDateTimeMeeting">Date & Time: </label>
                        <input ref={dateTimeInputRef} type="datetime-local" id="setDateTimeMeeting" className="dark:bg-neutral-800 p-2 rounded-md" />
                    </div>

                    <div>
                        <label htmlFor="setDurationMeeting">Meeting Duration: </label>
                        <input type="number" id="setDurationMeeting" placeholder="Eg: 1 means 1 Hour" min={1} className="dark:bg-neutral-800 p-2 rounded-md" />
                    </div>
                </div>

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
                                <th className="p-2">Expires in</th>
                                <th className="p-2">Action</th>
                            </tr>
                        </thead>

                        <tbody className="text-center">
                            <tr className="bg-zinc-200 dark:bg-zinc-600 border-t border-neutral-400 ">
                                <td className="p-2">M-132</td>
                                <td className="p-2">Patient Name</td>
                                <td className="p-2">8/20/2024 4:20:12 Pm</td>
                                <td className="p-2">1 Hour(s)</td>
                                <td className="p-2">13 Days</td>
                                <td className="p-2">
                                    <button>Start</button>
                                </td>
                            </tr>
                            <tr className="bg-zinc-200 dark:bg-zinc-600 border-t border-neutral-400 ">
                                <td className="p-2">M-132</td>
                                <td className="p-2">Patient Name</td>
                                <td className="p-2">8/20/2024 5:25:00 Pm</td>
                                <td className="p-2">1 Hour(s)</td>
                                <td className="p-2">13 Days</td>
                                <td className="p-2">
                                    <button>Start</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default TherapistAppointments