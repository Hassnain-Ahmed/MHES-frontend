import AdminStatCard from "./AdminStatCard"
import { LineChart } from "./LineChart"
import { BarChart } from "./BarChart"

const AdminStatBannar = () => {

    const statInfo = [
        {
            id: 1,
            title: "Total Registered Accounts",
            number: 598,
            route: "",
            class: "text-[green]"
        },
        {
            id: 2,
            title: "Therapist Requests",
            number: 10,
            route: "",
            class: "text-[red]"
        },
        {
            id: 3,
            title: "Total Revenue",
            number: 9999,
            route: "",
            class: ""
        },
        {
            id: 4,
            title: "Therapist Requests",
            number: 10,
            route: "",
            class: ""
        },
    ]

    return (
        <div className="w-100 lg:w-[90%] p-5 bg-zinc-100 rounded-lg">
            <div className="block md:flex justify-around lg:justify-start flex-wrap gap-5 rounded-lg">
                {
                    statInfo.map(info => (
                        <AdminStatCard key={info.id} title={info.title} number={info.number} route={info.route} class={info.class} />
                    ))
                }
            </div>
            <div className="flex lg:flex-row flex-col items-center justify-center gap-10 my-5">
                <div className="bg-[#fff] rounded-md p-2 w-full h-full">
                    <LineChart class="w-full h-full" />
                </div>

                <div className="bg-[#fff] rounded-md p-2 ">
                    <BarChart class="w-full h-[250px]" />
                </div>
            </div>

        </div>
    )
}

export default AdminStatBannar