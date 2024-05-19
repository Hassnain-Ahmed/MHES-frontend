import React, { useRef, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Legend, Tooltip } from 'chart.js/auto';

Chart.register(
    CategoryScale, LinearScale, PointElement, LineElement, Title, Legend, Tooltip
);

export const LineChart = (props) => {
    const chartRef = useRef(null);

    useEffect(() => {
        const chart = chartRef.current;
        if (chart) {
            const ctx = chart.ctx;
            const gradientStroke = ctx.createLinearGradient(0, 0, 0, 400);
            gradientStroke.addColorStop(1, 'rgba(94, 114, 228, 0.2)');
            gradientStroke.addColorStop(0.2, 'rgba(94, 114, 228, 0.0)');
            gradientStroke.addColorStop(0, 'rgba(94, 114, 228, 0)');

            const updatedData = {
                ...data,
                datasets: data.datasets.map(dataset => ({
                    ...dataset,
                    backgroundColor: gradientStroke
                }))
            };

            chart.config.data = updatedData;
            chart.update();
        }
    }, []);

    const options = {};

    const data = {
        labels: [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ],
        datasets: [
            {
                label: "Yearly Traffic Data",
                data: [1, 50, 3, 40, 5, 6, 20, 8, 9, 10, 11, 80],
                borderRadius: 4,
                tension: 0.4,
                borderColor: 'rgba(94, 114, 228, 0.5)',
                fill: true
            }
        ]
    };

    return <Line ref={chartRef} options={options} data={data} width={500} className={`${props.class}`} />;
};
