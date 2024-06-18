import { FaChartSimple, FaUser, FaUserDoctor, FaClapperboard, FaRightFromBracket } from "react-icons/fa6"
import { BsStars } from "react-icons/bs"
import { TherapistBannar } from "./TherapistBanner"
import { TherapistCard } from "./TherapistCard"
import { Footer } from "./Footer"
import useTheme from "../context/ThemeContext"

const UserDashboardHero = (props) => {

    const { themeMode } = useTheme()

    const userDashboardItems = [
        {
            id: 1,
            item: "Dashboard",
            route: "/",
            icon: <FaChartSimple fill="transparent" className="userDashboard-fa6" stroke={themeMode === "dark" ? "#ccc" : "#555"} strokeWidth={55} />
        },
        {
            id: 2,
            item: "Profile",
            route: "/",
            icon: <FaUser fill="transparent" className="userDashboard-fa6" stroke={themeMode === "dark" ? "#ccc" : "#555"} strokeWidth={55} />
        },
        {
            id: 3,
            item: "My Therapist",
            route: "/",
            icon: <FaUserDoctor fill="transparent" className="userDashboard-fa6" stroke={themeMode === "dark" ? "#ccc" : "#555"} strokeWidth={55} />
        },
        {
            id: 4,
            item: "Sessions",
            route: "/",
            icon: <FaClapperboard fill="transparent" className="userDashboard-fa6" stroke={themeMode === "dark" ? "#ccc" : "#555"} strokeWidth={30} />
        }
    ];


    return (
        <>
            <div className="flex flex-col md:flex-row items-start justify-between px-4 py-2 gap-5">

                <div className="bg-neutral-300 dark:bg-neutral-800 rounded-lg w-full md:w-[60%] h-[50vh] md:h-[80vh] lg:w-[30%] py-2 px-2 relative">

                    {/* <div
                        className="bg-gradient-to-r from-[#55BC97] to-[#275645] text-white rounded-md p-2 w-[120px]">
                        <span className="flex gap-2 items-baseline">
                            Trial Plan <BsStars />
                        </span>
                    </div> */}

                    <div className="flex items-center flex-col my-5 border-b-2 border-neutral-900">
                        <img src={props.data.profilePic} className="w-[30%] rounded-[100%]" alt="" />
                        <h1 className="text-xl font-bold text-neutral-800 dark:text-neutral-300">{props.data.name}</h1>
                        <p className="text-neutral-600 italic dark:text-neutral-400">Trial Member</p>
                    </div>

                    <ul>
                        {
                            userDashboardItems.map(item => (
                                <li key={item.id} className="flex items-baseline gap-2 bg-[#eee] hover:bg-[#555] hover:text-white w-[60%] p-2 my-2 rounded-md cursor-pointer userDashboard dark:bg-neutral-600 dark:hover:bg-neutral-700 dark:text-gray-300 dark:hover:text-white">
                                    {item.icon}
                                    {item.item}
                                </li>
                            ))
                        }
                    </ul>

                    <div className="absolute bottom-3 hidden lg:flex right-3 items-center gap-2 py-2 px-4 bg-gradient-to-r from-[#bc5555] to-[#7f3939] text-white rounded-md cursor-pointer">
                        Logout <FaRightFromBracket />
                    </div>

                </div>

                <div className="w-full">
                    <TherapistBannar heading="Recommended Therapists" class="" />
                </div>


            </div>
            <Footer />
        </>
    )
}

export default UserDashboardHero