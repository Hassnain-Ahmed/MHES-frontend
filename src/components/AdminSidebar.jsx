import { LuHome, LuUser, LuBadgeInfo, LuCamera, LuLogOut } from "react-icons/lu"
import { Link } from "react-router-dom"

const AdminSideBar = () => {

    const sidebarItems = [
        {
            id: 1,
            icon: <LuHome size={22} />,
            title: "Home",
            route: ""
        },
        {
            id: 2,
            icon: <LuUser size={22} />,
            title: "Users",
            route: "Users"
        },
        {
            id: 3,
            icon: <LuBadgeInfo size={22} />,
            title: "Query",
            route: "Query"
        },
        {
            id: 4,
            icon: <LuCamera size={22} />,
            title: "DB-Rec",
            route: "DB-Rec"
        },
    ]

    return (
        <div className="bg-zinc-100 px-1 lg:px-3 py-0 lg:py-5 rounded-lg flex lg:flex-col justify-around lg:justify-start relative dark:bg-neutral-800 dark:text-white">
            {
                sidebarItems.map(item => (
                    <Link to={item.route} key={item.id} className="flex lg:flex-col items-center gap-1 my-5 px-2 md:px-5 lg:px-1 pb-3 pt-4 rounded-xl bg-zinc-300 hover:bg-zinc-400 cursor-pointer dark:bg-neutral-900 dark:hover:bg-neutral-700">
                        <span>{item.icon}</span>
                        <span>{item.title}</span>
                    </Link>
                ))
            }
            <div className="mt-16 hidden lg:flex flex-col items-center transition ease-in-out duration-300 bg-red-500 hover:bg-red-600 px-2 py-4 rounded-lg text-white cursor-pointer absolute bottom-2">
                <span><LuLogOut size={22} /></span>
                <span>Logout</span>
            </div>
        </div>

    )
}

export default AdminSideBar