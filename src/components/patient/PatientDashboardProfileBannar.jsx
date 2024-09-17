import { FaChartSimple, FaUser, FaUserDoctor, FaClapperboard, FaRightFromBracket, FaFileInvoiceDollar, FaList } from "react-icons/fa6"
import useTheme from "../../context/ThemeContext"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { authService } from "../../service/authService";
import ChatbotIcon from "/ChatbotIcon.svg";


const PatientDashboardProfileBannar = (props) => {

    const navigate = useNavigate();

    const { themeMode } = useTheme()
    const [routeState, setRouteState] = useState("/patient/")

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
            route: "/patient/",
            icon: <FaChartSimple fill="transparent" className={`${routeState === "/patient/" ? "fill-[#fff] dark:fill-[] stroke-[#f9f9f9] stroke-[10]" : "fill-[transparent] dark:fill-[]"} userDashboard-fa6`} stroke={themeMode === "dark" ? "#ccc" : "#555"} strokeWidth={55} />
        },
        {
            id: 2,
            item: "Profile",
            route: "/patient/Profile",
            icon: <FaUser fill="transparent" className={`${routeState === "/patient/Profile" ? "fill-[#fff] dark:fill-[] stroke-[#f9f9f9] stroke-[10]" : "fill-[transparent] dark:fill-[]"} userDashboard-fa6`} stroke={themeMode === "dark" ? "#ccc" : "#555"} strokeWidth={55} />
        },
        {
            id: 3,
            item: "My Therapist",
            route: "/patient/MyTherapist",
            icon: <FaUserDoctor fill="transparent" className={`${routeState === "/patient/MyTherapist" ? "fill-[#fff] dark:fill-[] stroke-[#f9f9f9] stroke-[10]" : "fill-[transparent] dark:fill-[]"} userDashboard-fa6`} stroke={themeMode === "dark" ? "#ccc" : "#555"} strokeWidth={55} />
        },
        {
            id: 4,
            item: "Sessions",
            route: "/patient/Sessions",
            icon: <FaClapperboard fill="transparent" className={`${routeState == "/patient/Sessions" ? "fill-[#fff] dark:fill-[] stroke-[#f9f9f9] stroke-[10]" : "fill-[transparent] dark:fill-[]"} userDashboard-fa6`} stroke={themeMode === "dark" ? "#ccc" : "#555"} strokeWidth={55} />
        },
        {
            id: 5,
            item: "My Subscriptions",
            route: "/patient/subscription",
            icon: <FaFileInvoiceDollar fill="transparent" className={`${routeState == "/patient/subscription" ? "fill-[#fff] dark:fill-[] stroke-[#f9f9f9] stroke-[10]" : "fill-[transparent] dark:fill-[]"} userDashboard-fa6`} stroke={themeMode === "dark" ? "#ccc" : "#555"} strokeWidth={55} />
        },
        {
            id: 6,
            item: "Listings",
            route: "/patient/listings",
            icon: <FaList fill="transparent" className={`${routeState == "/patient/listings" ? "fill-[#fff] dark:fill-[] stroke-[#f9f9f9] stroke-[10]" : "fill-[transparent] dark:fill-[]"} userDashboard-fa6`} stroke={themeMode === "dark" ? "#ccc" : "#555"} strokeWidth={55} />
        }
    ];

    return (

        <div className="bg-neutral-300 dark:bg-neutral-800 rounded-lg w-full md:w-[60%] h-[50vh] md:h-[80vh] lg:w-[30%] p-4 relative overflow-auto">

            <div className="flex flex-col my-5 border-b-2 dark:border-neutral-900">
                {/* <img src={props.data.profilePic} className="w-[30%] rounded-[100%]" alt="" /> */}
                <h1 className="text-xl font-bold text-neutral-800 dark:text-neutral-300">{props.data.name}</h1>
                <p className="text-neutral-600 dark:text-neutral-400">User Since: {new Date(props.data.created_at).toLocaleString().split(",")[0]}</p>
                <p className="text-neutral-600 dark:text-neutral-400">{props.data.plan} Member</p>
            </div>

            <ul>
                {
                    userDashboardItems.map(item => (
                        <Link to={item.route} key={item.id}>
                            <li
                                onClick={() => (handleRoute(item.route))}
                                className={`flex items-center gap-2 bg-[#eee] hover:bg-[#555] hover:text-gray-100 p-3 my-2 rounded-md cursor-pointer userDashboard dark:bg-neutral-600 dark:hover:bg-neutral-700 dark:text-gray-300 dark:hover:text-white ${isActiveRoute(item.route)}`}
                            >
                                {item.icon}
                                {item.item}
                            </li>
                        </Link>
                    ))
                }
                <Link to="chatbot">
                    <li className="flex rounded-lg md:bg-gradient-to-r md:from-[#6355BC] md:to-[#2D2756]">
                        <button className="flex gap-2 items-center w-full h-full p-2 font-bold text-lg text-white">
                            <div>
                                <img src={ChatbotIcon} className="sm:w-[60px] md:w-[30px]" alt="" />
                            </div>
                            <p className="hidden md:block">Chat With Bloom</p>
                        </button>
                    </li>
                </Link>
            </ul>

            <div onClick={() => authService.logout(navigate)} className="absolute bottom-3 hidden lg:flex right-3 items-center gap-2 py-2 px-4 bg-gradient-to-r from-[#bc5555] to-[#7f3939] text-white rounded-md cursor-pointer">
                Logout <FaRightFromBracket />
            </div>

        </div>

    )
}

export default PatientDashboardProfileBannar