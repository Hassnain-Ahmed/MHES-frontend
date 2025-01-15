import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaClock, FaUser, FaUserDoctor, FaClapperboard, FaRightFromBracket, FaFileInvoiceDollar, FaList, FaDumbbell, FaMusic } from "react-icons/fa6";
import useTheme from "../../context/ThemeContext";
import ChatbotIcon from "/ChatbotIcon.svg";

export default function PatientMobileSidebar() {
    const [credentials, setCredentials] = useState(null);
    const navigate = useNavigate();
    const { themeMode } = useTheme();
    const [routeState, setRouteState] = useState("/patient/Profile");

    useEffect(() => {
        try {
            const storedCredentials = JSON.parse(localStorage.getItem("credentials"));
            setCredentials(storedCredentials);
        } catch (error) {
            console.error("Failed to parse credentials from localStorage", error);
        }
    }, []);

    const userAuth = {
        id: credentials?.response?.docId,
        name: credentials?.response?.userData?.fullname,
        contact: credentials?.response?.userData?.contact,
        email: credentials?.response?.userData?.email,
        password: credentials?.response?.userData?.password,
        profilePic: credentials?.response?.userData?.profileUrl,
        plan: credentials?.response?.subscriptionData?.plan || "Trail",
        created_at: credentials?.response?.userData?.createdAt || "Error",
    };

    const patientPlan = credentials?.response?.subscriptionData?.plan || false;

    const handleRoute = (route) => {
        setRouteState(route);
    };

    const isActiveRoute = (route) => {
        return routeState === route ? "bg-neutral-600 text-neutral-100 dark:bg-neutral-700 dark:text-neutral-100 " : "";
    };

    const userDashboardItems = [
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
        },
        {
            id: 7,
            item: "Appointments",
            route: "/patient/appointments",
            icon: <FaClock fill="transparent" className={`${routeState == "/patient/appointments" ? "fill-[#fff] dark:fill-[] stroke-[#f9f9f9] stroke-[10]" : "fill-[transparent] dark:fill-[]"} userDashboard-fa6`} stroke={themeMode === "dark" ? "#ccc" : "#555"} strokeWidth={55} />
        },

    ];

    return (
        <div className="bg-neutral-300 dark:bg-neutral-800 rounded-lg w-full h-[75dvh] p-4 relative overflow-auto mt-2">

            <div className="flex flex-col my-5 border-b-2 dark:border-neutral-900">
                {/* <img src={userAuth.profilePic} className="w-[30%] rounded-[100%]" alt="" /> */}
                <h1 className="text-xl font-bold text-neutral-800 dark:text-neutral-300">{userAuth?.name}</h1>
                <p className="text-neutral-600 dark:text-neutral-400">User Since: {new Date(userAuth?.created_at).toLocaleString().split(",")[0]}</p>
                <p className="text-neutral-600 dark:text-neutral-400">{userAuth?.plan} Member</p>
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
                {
                    patientPlan && (
                        <>
                            <Link to="exercise">
                                <li
                                    onClick={() => (handleRoute("/patient/exercise"))}
                                    className={`flex items-center gap-2 bg-[#eee] hover:bg-[#555] hover:text-gray-100 p-3 my-2 rounded-md cursor-pointer userDashboard dark:bg-neutral-600 dark:hover:bg-neutral-700 dark:text-gray-300 dark:hover:text-white ${isActiveRoute("/patient/exercise")}`}
                                >
                                    <FaDumbbell fill="transparent" className={`${routeState == "/patient/exercise" ? "fill-[#fff] dark:fill-[] stroke-[#f9f9f9] stroke-[10]" : "fill-[transparent] dark:fill-[]"} userDashboard-fa6`} stroke={themeMode === "dark" ? "#ccc" : "#555"} strokeWidth={55} />
                                    Mindfull Exercises
                                </li>
                            </Link>
                            <Link to="music">
                                <li
                                    onClick={() => (handleRoute("/patient/music"))}
                                    className={`flex items-center gap-2 bg-[#eee] hover:bg-[#555] hover:text-gray-100 p-3 my-2 rounded-md cursor-pointer userDashboard dark:bg-neutral-600 dark:hover:bg-neutral-700 dark:text-gray-300 dark:hover:text-white ${isActiveRoute("/patient/music")}`}
                                >
                                    <FaMusic fill="transparent" className={`${routeState == "/patient/music" ? "fill-[#fff] dark:fill-[] stroke-[#f9f9f9] stroke-[10]" : "fill-[transparent] dark:fill-[]"} userDashboard-fa6`} stroke={themeMode === "dark" ? "#ccc" : "#555"} strokeWidth={55} />
                                    Feel Good Music
                                </li>
                            </Link>
                        </>
                    )
                }


                <Link to="chatbot" onClick={() => handleRoute("")}>
                    <li className="flex rounded-lg bg-gradient-to-r from-[#6355BC] to-[#2D2756]">
                        <button className="flex gap-2 items-center w-full h-full p-2 font-bold text-lg text-white">
                            <div>
                                <img src={ChatbotIcon} className="w-[30px]" alt="" />
                            </div>
                            <p className="">Chat With Bloom</p>
                        </button>
                    </li>
                </Link>
            </ul>

        </div>
    )
}
