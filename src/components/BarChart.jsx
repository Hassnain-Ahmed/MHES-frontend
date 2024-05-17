import { Doughnut } from "react-chartjs-2"
import { Chart, CategoryScale, LinearScale, Title, Legend, Tooltip } from 'chart.js/auto'

Chart.register(
    CategoryScale, LinearScale, Title, Legend, Tooltip
)

export const BarChart = (props) => {
    const options = {}
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
                borderColor: "#fff"
            }
        ]
    }

    return <Doughnut options={options} data={data} className={` ${props.class}`} />
}