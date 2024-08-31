import { Doughnut } from "react-chartjs-2"
import { Chart, CategoryScale, LinearScale, Title, Legend, Tooltip, Colors } from 'chart.js/auto'
import useTheme from "../../context/ThemeContext"

Chart.register(
    CategoryScale, LinearScale, Title, Legend, Tooltip
)

export const BarChart = (props) => {

    const { themeMode } = useTheme()

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
                data: [500, 150],
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