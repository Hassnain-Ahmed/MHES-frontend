import { useState } from "react"
import { FaArrowUpRightFromSquare, FaFileCircleExclamation } from "react-icons/fa6"

const PatientSessions = () => {

    const [isSessions, setIsSessions] = useState(false)

    return (
        <div className="rounded-md md:p-5">

            <div className="w-full p-2 rounded-md bg-zinc-200 dark:bg-zinc-800 overflow-y-auto h-[80vh] md:h-[70vh] lg:h-[60-vh]">

                {
                    isSessions
                        ?
                        <div className="flex gap-2 justify-center items-center w-full h-full text-2xl font-bold text-neutral-400">
                            <FaFileCircleExclamation />
                            <h1>No Sessions Yet</h1>
                        </div>
                        :
                        <table className="w-full text-[13px] md:text-base lg:text-md">

                            <thead className="sticky top-[-10px] bg-zinc-300 dark:bg-zinc-700 dark:text-gray-200">
                                <tr className="border-b-2 border-zinc-100 dark:border-zinc-400 rounded">
                                    <th className="py-2">ID</th>
                                    <th className="py-2">Session Name</th>
                                    <th className="py-2">Therapist</th>
                                    <th className="py-2">Date Time</th>
                                    <th className="py-2">View Recording</th>
                                </tr>
                            </thead>

                            <tbody className="text-center">
                                <tr className="even:bg-gray-300 rounded dark:text-gray-200">
                                    <td className="py-2">S-1</td>
                                    <td className="py-2">Patient Requested</td>
                                    <td className="py-2">Dr. Hina</td>
                                    <td className="py-2">4-5-2024 8:15:00 pm</td>
                                    <td className="py-2">
                                        <a href="#" className="flex justify-center items-center gap-x-2">
                                            View
                                            <FaArrowUpRightFromSquare />
                                        </a>
                                    </td>
                                </tr>
                                <tr className="even:bg-gray-300 rounded dark:bg-gray-600 dark:text-gray-300">
                                    <td className="py-2">S-2</td>
                                    <td className="py-2">Emotions Expression</td>
                                    <td className="py-2">Dr. Mirza K</td>
                                    <td className="py-2">4-5-2024 8:15:00 pm</td>
                                    <td className="py-2">
                                        <a href="#" className="flex justify-center items-center gap-x-2">
                                            View
                                            <FaArrowUpRightFromSquare />
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                }

            </div>
        </div>
    )
}

export default PatientSessions