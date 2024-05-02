import { LuBell, LuMail, LuSettings } from "react-icons/lu"


const ProfileNav = (props) => {
    return (
        <div className="bg-gradient-to-r from-[#fff] via-[#7e8dd283] to-[#5470ecae] flex gap-2 items-center justify-evenly p-2 rounded-lg">
            <div>
                <LuBell size={22} className="cursor-pointer" />
            </div>

            <div>
                <LuMail size={22} className="cursor-pointer" />
            </div>

            <span className="truncate w-[90px] text-right">{props.name}</span>
            <img src="" alt="" className="w-[30px] h-[30px] rounded-[100%] border-2" />
        </div>
    )
}

export default ProfileNav;