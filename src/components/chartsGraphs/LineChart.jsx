import React, { useRef, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Legend, Tooltip, Colors } from 'chart.js/auto';
import useTheme from '../../context/ThemeContext';

Chart.register(
    CategoryScale, LinearScale, PointElement, LineElement, Title, Legend, Tooltip
);

export const LineChart = (props) => {
    const { themeMode } = useTheme();
    const chartRef = useRef(null);

    useEffect(() => {
        const chart = chartRef.current;
        if (chart) {
            const ctx = chart.ctx;
            const gradientStroke = ctx.createLinearGradient(0, 0, 0, 400);
            gradientStroke.addColorStop(1, themeMode === "dark" ? 'rgba(94, 114, 228, 0.2)' : 'rgba(94, 114, 228, 0.2)');
            gradientStroke.addColorStop(0.2, themeMode === "dark" ? 'rgba(94, 114, 228, 0.0)' : 'rgba(94, 114, 228, 0.0)');
            gradientStroke.addColorStop(0, themeMode === "dark" ? 'rgba(94, 114, 228, 0)' : 'rgba(94, 114, 228, 0)');

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
    }, [themeMode]);

    const options = {
        plugins: {
            legend: {
                labels: {
                    color: themeMode === "dark" ? "#fff" : "#333"
                }
            },
            title: {
                color: themeMode === "dark" ? '#FFFFFF' : '#333',
            }
        },
        scales: {
            x: {
                ticks: {
                    color: themeMode === "dark" ? '#FFFFFF' : '#333'
                },
                grid: {
                    color: themeMode === "dark" ? '#444' : '#ddd'
                }
            },
            y: {
                ticks: {
                    color: themeMode === "dark" ? '#FFFFFF' : '#333'
                },
                grid: {
                    color: themeMode === "dark" ? '#444' : '#ddd'
                }
            }
        }
    };

    const data = {
        labels: [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ],
        datasets: [
            {
                label: props.chartHeading,
                data: [1, 50, 3, 40, 5, 6, 20, 8, 9, 10, 11, 80],
                borderRadius: 4,
                tension: 0.4,
                borderColor: 'rgba(94, 114, 228, 0.5)',
                fill: true,
                pointRadius: 10,             // Add this line to set the point radius
                pointHoverRadius: 15,        // Add this line to set the point hover radius
            }
        ]
    };

    return <Line ref={chartRef} options={options} data={data} className={`${props.class} dark:bg-gray-800`} />;
};
