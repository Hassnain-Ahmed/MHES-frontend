import { LuBell, LuMail, LuUser } from "react-icons/lu"

const ProfileNavMobile = (props) => {
    // console.log(props)
    return (
        <div className="bg-[#eee] rounded-lg p-5 border-2">
            <div>
                <img src={props.profilePic} alt="Profile" className={`border-2 w-[80px] h-[80px] rounded-[100%] ${props.imgClass}`} />
            </div>
            <div>
                <h2 className="text-lg font-bold my-2 cursor-pointer">{props.name}</h2>

                <div className="flex gap-2 mb-2 relative cursor-pointer">
                    <LuUser size={22} />
                    Profile Settings
                </div>

                <div className="flex gap-2 mb-2 relative cursor-pointer">
                    <LuBell size={22} />
                    Notifications
                </div>

                <div className="flex gap-2 cursor-pointer">
                    <LuMail size={22} />
                    Messages
                </div>
            </div>
        </div>
    )
}

export default ProfileNavMobile