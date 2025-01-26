import { useEffect, useState } from "react"
import { FaPrint } from "react-icons/fa6"
import { LineChart } from "../chartsGraphs/LineChart"
import axios from "axios"


const AdminRevenue = () => {

    const [premiumUsers, setPremiumUsers] = useState([])

    const getUsers = async () => {
        try {
            const { data } = await axios.post("https://mhes-backend.vercel.app/api/admin/premiumUser")
            // console.log(data);
            setPremiumUsers(data.message)
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getUsers()
    }, [])

    const [toggleChartRecord, setToggleChartRecord] = useState(false)

    const handleToggleChartRecord = (e) => {
        e.currentTarget.value == "record" ? setToggleChartRecord(prev => !prev) : setToggleChartRecord(prev => !prev)
    }

    return (
        <div className="w-100 lg:w-[90%] p-5 bg-zinc-100 rounded-lg dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">
            <h1 className="text-lg border-b my-2 pb-2">Revenue Records & graphs</h1>

            <div>
                <div className="flex justify-between px-2 py-5">
                    <select name="" id="" onChange={handleToggleChartRecord} className="rounded-md py-2 px-4 text-neutral-800">
                        <option value="record">Records</option>
                        <option value="chart">Chart</option>
                    </select>
                    <div className="p-2">
                        <button onClick={window.print} className="py-1 px-2 bg-cyan-700 text-white rounded inline-flex items-center gap-2"><FaPrint /> Print</button>
                    </div>
                </div>

                {
                    toggleChartRecord ?
                        <div className="p-2">
                            <LineChart chartHeading="Generated revenue this month" />
                        </div>
                        :
                        <div className="p-2 bg-neutral-200 dark:bg-neutral-700 rounded-lg max-h-[500px] overflow-auto">

                            <table className="w-full">
                                <thead className="text-left sticky top-[-8px] pt-2 bg-neutral-200 dark:bg-neutral-700">
                                    <tr>
                                        <th className="p-2">ID</th>
                                        <th className="p-2">Name</th>
                                        <th className="p-2">Email</th>
                                        <th className="p-2">Item</th>
                                        <th className="p-2">Price</th>
                                        <th className="p-2">Date & Time</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        premiumUsers && premiumUsers.map((user) => (
                                            <tr className="border-t border-neutral-400" key={user.id}>
                                                <td className="p-2">{user.id}</td>
                                                <td className="p-2">{user.name}</td>
                                                <td className="p-2">{user.email}</td>
                                                <td className="p-2">{user.planSubscriber.plan} Plan</td>
                                                <td className="p-2">Rs.{user.planSubscriber.price}</td>
                                                <td className="p-2">{new Date(user.planSubscriber.created_at).toLocaleString()}</td>
                                            </tr>
                                        ))
                                    }
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