import AdminStatCard from "./AdminStatCard"
import { LineChart } from "../chartsGraphs/LineChart"
import { BarChart } from "../chartsGraphs/BarChart"
import axios from "axios"
import { useEffect, useState } from "react"

const AdminStatBannar = () => {

    const [stats, setStats] = useState({
        registeredAccounts: 0,
        therapistsRequest: 0,
        totalRevenue: 0,
    })

    const getAccountsCount = async () => {
        try {
            const { data } = await axios.post(`https://mhes-backend.vercel.app/api/admin/totalAccounts`)
            setStats(prev => ({
                ...prev,
                registeredAccounts: data.message
            }))
        } catch (error) {
            console.error(error);
        }
    }

    const getTherapistRequestCount = async () => {
        try {
            const { data } = await axios.post(`https://mhes-backend.vercel.app/api/admin/totalTherapistRequest`)
            setStats(prev => ({
                ...prev,
                therapistsRequest: data.message
            }))
        } catch (error) {
            console.error(error);
        }
    }

    const getRevenueCount = async () => {
        try {
            const { data } = await axios.post(`https://mhes-backend.vercel.app/api/admin/totalRevenue`)
            setStats(prev => ({
                ...prev,
                totalRevenue: data.message
            }))
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getAccountsCount()
        getRevenueCount()
        getTherapistRequestCount()
    }, [])


    const statInfo = [
        {
            id: 1,
            title: "Registered Accounts",
            number: stats.registeredAccounts,
            route: "Users",
            class: "text-green-700 dark:text-green-600"
        },
        {
            id: 2,
            title: "Therapist Requests",
            number: stats.therapistsRequest,
            route: "Therapists",
            class: "text-red-700 dark:text-red-600"
        },
        {
            id: 3,
            title: "Total Revenue",
            number: stats.totalRevenue,
            route: "Revenue",
            class: "text-[#333] dark:text-[#ccc]"
        },
        // {
        //     id: 4,
        //     title: "New Users",
        //     number: 22,
        //     route: "Users",
        //     class: "text-[#333] dark:text-[#ccc]"
        // },
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