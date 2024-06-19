import { FaChartSimple, FaUser, FaUserDoctor, FaClapperboard, FaRightFromBracket } from "react-icons/fa6"
import useTheme from "../context/ThemeContext"
import { Link } from "react-router-dom";


const PatientDashboardProfileBannar = (props) => {

    const { themeMode } = useTheme()

    const userDashboardItems = [
        {
            id: 1,
            item: "Dashboard",
            route: "/patient/",
            icon: <FaChartSimple fill="transparent" className="userDashboard-fa6" stroke={themeMode === "dark" ? "#ccc" : "#555"} strokeWidth={55} />
        },
        {
            id: 2,
            item: "Profile",
            route: "/patient/Profile",
            icon: <FaUser fill="transparent" className="userDashboard-fa6" stroke={themeMode === "dark" ? "#ccc" : "#555"} strokeWidth={55} />
        },
        {
            id: 3,
            item: "My Therapist",
            route: "/patient/MyTherapist",
            icon: <FaUserDoctor fill="transparent" className="userDashboard-fa6" stroke={themeMode === "dark" ? "#ccc" : "#555"} strokeWidth={55} />
        },
        {
            id: 4,
            item: "Sessions",
            route: "/patient/Sessions",
            icon: <FaClapperboard fill="transparent" className="userDashboard-fa6" stroke={themeMode === "dark" ? "#ccc" : "#555"} strokeWidth={30} />
        }
    ];

    return (
        <div className="bg-neutral-300 dark:bg-neutral-800 rounded-lg w-full md:w-[60%] h-[50vh] md:h-[80vh] lg:w-[30%] py-2 px-2 relative">

            <div className="flex items-center flex-col my-5 border-b-2 dark:border-neutral-900">
                <img src={props.data.profilePic} className="w-[30%] rounded-[100%]" alt="" />
                <h1 className="text-xl font-bold text-neutral-800 dark:text-neutral-300">{props.data.name}</h1>
                <p className="text-neutral-600 italic dark:text-neutral-400">Trial Member</p>
            </div>

            <ul>
                {
                    userDashboardItems.map(item => (
                        <Link to={item.route}>
                            <li key={item.id} className="flex items-baseline gap-2 bg-[#eee] hover:bg-[#555] hover:text-white w-[60%] p-2 my-2 rounded-md cursor-pointer userDashboard dark:bg-neutral-600 dark:hover:bg-neutral-700 dark:text-gray-300 dark:hover:text-white">
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

export default PatientDashboardProfileBannar