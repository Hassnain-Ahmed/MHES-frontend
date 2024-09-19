import axios from "axios"
import { Chart, CategoryScale, LinearScale, Title, Legend, Tooltip, Colors } from 'chart.js/auto'
import { Doughnut } from "react-chartjs-2"

import useTheme from "../../context/ThemeContext"
import { useEffect, useState } from "react"

Chart.register(
    CategoryScale, LinearScale, Title, Legend, Tooltip
)

export const BarChart = (props) => {

    const { themeMode } = useTheme()

    const [userType, setUserType] = useState({
        trailUser: 0,
        premiumUser: 0
    })

    const getUserByPlan = async () => {
        try {
            const { data } = await axios.post(`http://localhost:5000/api/admin/usersByPlan`)
            // console.log(data.message);
            setUserType({
                trailUser: data.message.usersNotInPlan.length,
                premiumUser: data.message.usersInPlan.length,
            })
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getUserByPlan()
    }, [])


    const options = {
        plugins: {
            legend: {
                labels: {
                    color: themeMode == "dark" ? '#FFFFFF' : '#333',
                }
            },
            title: {
                display: true,
                text: 'User Subscriptions',
                color: themeMode == "dark" ? '#FFFFFF' : '#333',
            }
        }
    }
    const data = {
        labels: [
            "Trail Users",
            "Premium Users",
        ],
        datasets: [
            {
                label: "Subscription Based Users",
                data: [userType.trailUser, userType.premiumUser],
                backgroundColor: [
                    "#A3333D",
                    "#FFCDBC",
                ],
                borderColor: "rgba(0,0,0,0)",
            }
        ]
    }

    return <Doughnut options={options} data={data} className={` ${props.class}`} />
}