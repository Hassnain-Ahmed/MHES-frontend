import AdminStatCard from "./AdminStatCard"
import { LineChart } from "./LineChart"
import { BarChart } from "./BarChart"

const AdminStatBannar = () => {

    const statInfo = [
        {
            id: 1,
            title: "Registered Accounts",
            number: 598,
            route: "",
            class: "text-green-700 dark:text-green-600"
        },
        {
            id: 2,
            title: "Therapist Requests",
            number: 10,
            route: "",
            class: "text-red-700 dark:text-red-600"
        },
        {
            id: 3,
            title: "Total Revenue",
            number: 9999,
            route: "",
            class: "text-[#333] dark:text-[#ccc]"
        },
        {
            id: 4,
            title: "Therapist Requests",
            number: 10,
            route: "",
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
            {/* <div className="flex lg:flex-row flex-col items-center justify-center gap-5 my-5"> */}
            <div className="flex gap-5 flex-col lg:flex-row justify-center">
                <div className="bg-[#fff] rounded-md p-2 w-full h-full dark:bg-neutral-900 dark:text-white">
                    <LineChart class="w-full h-full dark:text-white" />
                </div>

                <div className="bg-[#fff] rounded-md p-2 dark:bg-neutral-900 dark:text-white">
                    <BarChart class="w-full h-[250px] dark:text-white" />
                </div>
            </div>

        </div>
    )
}

export default AdminStatBannar