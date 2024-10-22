import { useState } from "react"
import { FaUserDoctor } from "react-icons/fa6"
import { LuHome, LuUser, LuBadgeInfo, LuCamera, LuLogOut, LuDollarSign } from "react-icons/lu"
import { Link, useNavigate } from "react-router-dom"
import { authService } from "../../service/authService"

const AdminMobileSideBar = () => {

    const navigate = useNavigate()

    const [activeSidebarItem, setActiveSidebatItem] = useState("/admin")

    const isActiveRoute = (route) => {
        return activeSidebarItem == route ? "bg-zinc-300/80 dark:bg-neutral-700" : "bg-zinc-200/40 dark:bg-neutral-800"
    }

    const sidebarItems = [
        {
            id: 1,
            icon: <LuHome size={22} />,
            title: "Home",
            route: "/admin"
        },
        {
            id: 2,
            icon: <LuUser size={22} />,
            title: "Users",
            route: "/admin/Users"
        },
        {
            id: 3,
            icon: <LuBadgeInfo size={22} />,
            title: "Query",
            route: "/admin/Query"
        },
        {
            id: 4,
            icon: <FaUserDoctor size={22} />,
            title: "Therapist",
            route: "/admin/Therapists"
        },
        {
            id: 5,
            icon: <LuDollarSign size={22} />,
            title: "Revenue",
            route: "/admin/Revenue"
        }
    ]

    return (
        <div className="bg-zinc-100 p-5 rounded-lg justify-around lg:justify-start relative dark:bg-neutral-800 dark:text-white lg:min-h-[650px]">
            {
                sidebarItems.map(item => (
                    <Link
                        to={item.route}
                        key={item.id}
                    >
                        <div
                            onClick={() => setActiveSidebatItem(item.route)}
                            className={`flex items-center gap-3 my-5 px-2 md:px-5 lg:px-1 pb-3 pt-4 rounded-xl hover:bg-zinc-300 dark:hover:bg-neutral-700 cursor-pointer transition-colors ${isActiveRoute(item.route)}`}
                        >
                            <span>{item.icon}</span>
                            <span>{item.title}</span>
                        </div>
                    </Link>
                ))
            }

            <div onClick={() => authService.logout(navigate)} className="mt-16 hidden lg:flex flex-col items-center transition ease-in-out duration-300 bg-red-500 hover:bg-red-600 px-2 py-4 rounded-lg text-white cursor-pointer  bottom-2">
                <span><LuLogOut size={22} /></span>
                <span>Logout</span>
            </div>
        </div>

    )
}

export default AdminMobileSideBar