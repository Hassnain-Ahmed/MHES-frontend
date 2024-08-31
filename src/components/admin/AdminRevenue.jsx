import { useState } from "react"
import { FaPrint } from "react-icons/fa6"
import { LineChart } from "../chartsGraphs/LineChart"


const AdminRevenue = () => {

    const [toggleChartRecord, setToggleChartRecord] = useState(false)

    const handleToggleChartRecord = () => {
        setToggleChartRecord(prev => !prev)
    }

    return (
        <div className="w-100 lg:w-[90%] p-5 bg-zinc-100 rounded-lg dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">
            <h1 className="text-lg border-b my-2 pb-2">Revenue Records & graphs</h1>

            <div>
                <div className="px-2 py-5">
                    <select name="" id="" onChange={handleToggleChartRecord} className="rounded-md py-2 px-4 text-neutral-800">
                        <option value="">Chart</option>
                        <option value="">Records</option>
                    </select>
                </div>

                {
                    toggleChartRecord ?
                        <div className="p-2">
                            <LineChart chartHeading="Generated revenue this month" />
                        </div>
                        :
                        <div className="p-2 bg-neutral-200 dark:bg-neutral-700 rounded-lg max-h-[500px] overflow-auto">


                            {/* <a href="#" class="group block max-w-sm p-6 bg-gradient-to-br from-slate-100/80 to-slate-200 border border-gray-200 shadow hover:from-slate-100 hover:to-slate-300 dark:from-gray-800/50 dark:to-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 rounded-tl-[50px] rounded-br-[50px] transition-colors">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                <button class="mt-4 bg-slate-400/80 py-1 px-4 rounded-full group-hover:bg-slate-400">Respond</button>
                            </a> */}

                            {/* 

                            <div className="border border-neutral-300 rounded-tl-[50px] rounded-br-[50px] p-4 w-[350px] flex flex-col justify-start gap-4 bg-gray-200">
                                <h2 className="text-lg font-semibold">Heading</h2>
                                <p className="line-clamp-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta reiciendis laudantium totam, commodi quae atque! Earum voluptatem aperiam voluptates incidunt.</p>
                                <button className="border py-1 px-2 bg-fuchsia-200 rounded-md w-auto">Respond</button>
                            </div> */}

                            <table className="w-full">
                                <thead className="text-left sticky top-[-8px] pt-2 bg-neutral-200">
                                    <tr>
                                        <th className="p-2">ID</th>
                                        <th className="p-2">Invoice</th>
                                        <th className="p-2">Name</th>
                                        <th className="p-2">Purchased</th>
                                        <th className="p-2">Date & Time</th>
                                        <th className="p-2">Action</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr className="border-t border-neutral-400">
                                        <td className="p-2">P-001</td>
                                        <td className="p-2">In-004</td>
                                        <td className="p-2">Hassnain Ahmed</td>
                                        <td className="p-2">Premium Subscription</td>
                                        <td className="p-2">8/24/2024 4:56:21 Pm</td>
                                        <td className="p-2">
                                            <button onClick={window.print} className="py-1 px-2 bg-cyan-700 text-white rounded inline-flex items-center gap-2"><FaPrint /> Print</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                }

                <div></div>

            </div>

        </div >
    )
}

export default AdminRevenue