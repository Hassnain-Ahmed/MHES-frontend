import AdminStatCard from "./AdminStatCard"
import { LineChart } from "./LineChart"
import { BarChart } from "./BarChart"

const AdminStatBannar = () => {

    const statInfo = [
        {
            id: 1,
            title: "Registered Accounts",
            number: 598,
            route: "Users",
            class: "text-green-700 dark:text-green-600"
        },
        {
            id: 2,
            title: "Therapist Requests",
            number: 10,
            route: "Therapists",
            class: "text-red-700 dark:text-red-600"
        },
        {
            id: 3,
            title: "Total Revenue",
            number: 9999,
            route: "Revenue",
            class: "text-[#333] dark:text-[#ccc]"
        },
        {
            id: 4,
            title: "New Users",
            number: 22,
            route: "Users",
            class: "text-[#333] dark:text-[#ccc]"
        },
    ]

    return (
        <div className="w-100 lg:w-[90%] p-5 bg-zinc-100 rounded-lg dark:bg-neutral-800">
            {/* <div className="block md:flex justify-around lg:justify-start flex-wrap gap-5 rounded-lg"> */}
            <div className="flex justify-between flex-col lg:flex-row gap-x-4">
                {
                    statInfo.map(info => (
                        <AdminStatCard key={info.id} title={info.title} number={info.number} route={info.route} class={info.class} />
                    ))
                }
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {/* <div className="flex gap-5 flex-col lg:flex-row justify-center"> */}
                <div className="bg-[#fff] rounded-md p-2 w-full h-full dark:bg-neutral-900 dark:text-white col-span-2">
                    <LineChart chartHeading="Generated revenue this month" />
                </div>

                <div className="bg-[#fff] rounded-md p-2 dark:bg-neutral-900 dark:text-white ">
                    <BarChart />
                </div>
            </div>

        </div>
    )
}

export default AdminStatBannar