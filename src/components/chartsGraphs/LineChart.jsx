import React, { useRef, useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Legend, Tooltip } from 'chart.js/auto';
import useTheme from '../../context/ThemeContext';
import axios from 'axios';

Chart.register(
    CategoryScale, LinearScale, PointElement, LineElement, Title, Legend, Tooltip
);

export const LineChart = (props) => {
    const { themeMode } = useTheme();
    const chartRef = useRef(null);
    const [chartData, setChartData] = useState({ labels: [], datasets: [] });

    const getWeeklyRevenue = async () => {
        try {
            const { data } = await axios.post(`https://mhes-backend.vercel.app/api/admin/monthlySubscriptions`);

            // Process the data
            const labels = data.message.map(item => item.weekYear);
            const revenueData = data.message.map(item => item.revenue);

            // Update the chart data
            setChartData({
                labels,
                datasets: [
                    {
                        label: props.chartHeading,
                        data: revenueData,
                        borderRadius: 4,
                        tension: 0.4,
                        borderColor: 'rgba(94, 114, 228, 0.5)',
                        fill: true,
                        pointRadius: 10,             // Set the point radius
                        pointHoverRadius: 15,        // Set the point hover radius
                    }
                ]
            });
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getWeeklyRevenue();
    }, []);

    useEffect(() => {
        const chart = chartRef.current;
        if (chart) {
            const ctx = chart.ctx;
            const gradientStroke = ctx.createLinearGradient(0, 0, 0, 400);
            gradientStroke.addColorStop(1, themeMode === "dark" ? 'rgba(94, 114, 228, 0.2)' : 'rgba(94, 114, 228, 0.2)');
            gradientStroke.addColorStop(0.2, themeMode === "dark" ? 'rgba(94, 114, 228, 0.0)' : 'rgba(94, 114, 228, 0.0)');
            gradientStroke.addColorStop(0, themeMode === "dark" ? 'rgba(94, 114, 228, 0)' : 'rgba(94, 114, 228, 0)');

            const updatedData = {
                ...chart.config.data,
                datasets: chart.config.data.datasets.map(dataset => ({
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

    return <Line ref={chartRef} options={options} data={chartData} className={`${props.class} dark:bg-gray-800`} />;
};
