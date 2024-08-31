import { FaChartSimple, FaUser, FaUserDoctor, FaClapperboard, FaRightFromBracket, FaFileInvoiceDollar, FaCalendarDays } from "react-icons/fa6"
import useTheme from "../../context/ThemeContext"
import { Link } from "react-router-dom";
import { useState } from "react";


const TherapistDashboardSidebar = (props) => {

    const { themeMode } = useTheme()
    const [routeState, setRouteState] = useState("/therapist/")

    const handleRoute = (route) => {
        setRouteState(route)
    }
    const isActiveRoute = (route) => {
        return routeState === route ? "bg-neutral-600 text-neutral-100 dark:bg-neutral-700 dark:text-neutral-100 " : ""
    }

    const userDashboardItems = [
        {
            id: 1,
            item: "Dashboard",
            route: "/therapist/",
            icon: <FaChartSimple
                fill="transparent"
                className={`${routeState === "/therapist/" ? "fill-[#fff] dark:fill-[] stroke-[#f9f9f9] stroke-[10]" : "fill-[transparent] dark:fill-[]"} userDashboard-fa6`}
                stroke={themeMode === "dark" ? "#ccc" : "#555"}
                strokeWidth={55}
            />
        },
        {
            id: 2,
            item: "Profile",
            route: "/therapist/Profile",
            icon: <FaUser
                fill="transparent"
                className={`${routeState === "/therapist/Profile" ? "fill-[#fff] dark:fill-[] stroke-[#f9f9f9] stroke-[10]" : "fill-[transparent] dark:fill-[]"} userDashboard-fa6`}
                stroke={themeMode === "dark" ? "#ccc" : "#555"}
                strokeWidth={55}
            />
        },
        {
            id: 3,
            item: "Patients",
            route: "/therapist/MyPatients",
            icon: <FaUserDoctor
                fill="transparent"
                className={`${routeState === "/therapist/MyPatients" ? "fill-[#fff] dark:fill-[] stroke-[#f9f9f9] stroke-[10]" : "fill-[transparent] dark:fill-[]"} userDashboard-fa6`} stroke={themeMode === "dark" ? "#ccc" : "#555"}
                strokeWidth={55}
            />
        },
        {
            id: 4,
            item: "Sessions",
            route: "/therapist/Sessions",
            icon: <FaClapperboard fill="transparent" className={`${routeState == "/therapist/Sessions" ? "fill-[#fff] dark:fill-[] stroke-[#f9f9f9] stroke-[10]" : "fill-[transparent] dark:fill-[]"} userDashboard-fa6`}
                stroke={themeMode === "dark" ? "#ccc" : "#555"}
                strokeWidth={55}
            />
        },
        {
            id: 5,
            item: "Appointments",
            route: "/therapist/Appointments",
            icon: <FaCalendarDays fill="transparent" className={`${routeState == "/therapist/Appointments" ? "fill-[#fff] dark:fill-[] stroke-[#f9f9f9] stroke-[10]" : "fill-[transparent] dark:fill-[]"} userDashboard-fa6`}
                stroke={themeMode === "dark" ? "#ccc" : "#555"}
                strokeWidth={55}
            />
        },
        // {
        //     id: 5,
        //     item: "My Subscriptions",
        //     route: "/patient/subscription",
        //     icon: <FaFileInvoiceDollar fill="transparent"
        //         className={`${routeState == "/patient/subscription" ? "fill-[#fff] dark:fill-[] stroke-[#f9f9f9] stroke-[10]" : "fill-[transparent] dark:fill-[]"} userDashboard-fa6`}
        //         stroke={themeMode === "dark" ? "#ccc" : "#555"}
        //         strokeWidth={55}
        //     />
        // }
    ];

    return (

        <div className="bg-neutral-300 dark:bg-neutral-800 rounded-lg w-full md:w-[60%] h-[50vh] md:h-[80vh] lg:w-[30%] p-4 relative overflow-auto">

            <div className="flex flex-col my-5 border-b-2 dark:border-neutral-900">
                {/* <img src={props.data.profilePic} className="w-[30%] rounded-[100%]" alt="" /> */}
                <h1 className="text-xl font-bold text-neutral-800 dark:text-neutral-300">{props.data.name}</h1>
                <p className="text-neutral-600 dark:text-neutral-400">Platform User for: 22 Months</p>
                <p className="text-neutral-600 dark:text-neutral-400">Trial Member</p>
            </div>

            <ul>
                {
                    userDashboardItems.map(item => (
                        <Link to={item.route} key={item.id}>
                            <li
                                onClick={() => (handleRoute(item.route))}
                                className={`flex items-baseline gap-2 bg-[#eee] hover:bg-[#555] hover:text-gray-100 p-3 my-2 rounded-md cursor-pointer userDashboard dark:bg-neutral-600 dark:hover:bg-neutral-700 dark:text-gray-300 dark:hover:text-white ${isActiveRoute(item.route)}`}
                            >
                                {item.icon}
                                {item.item}
                            </li>
                        </Link>
                    ))
                }
            </ul>

            <div className="absolute bottom-3 hidden lg:flex right-3 items-center gap-2 py-2 px-4 bg-gradient-to-r from-[#bc5555] to-[#7f3939] text-white rounded-md cursor-pointer">
                Logout <FaRightFromBracket />
            </div>

        </div>

    )
}

export default TherapistDashboardSidebar