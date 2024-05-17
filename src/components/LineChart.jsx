import { Line } from "react-chartjs-2"
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Legend, Tooltip } from 'chart.js/auto'

Chart.register(
    CategoryScale, LinearScale, PointElement, LineElement, Title, Legend, Tooltip
)


export const LineChart = (props) => {

    const options = {}
    const data = {
        labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        datasets: [
            {
                label: "Yearly Traffic Data",
                data: [1, 50, 3, 40, 5, 6, 20, 8, 9, 10, 11, 80],
                borderColor: "rgb(75, 192, 192)"
            }
        ]
    }

    return <Line options={options} data={data} width={500} className={`${props.class}`} />
}