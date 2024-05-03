import { LuBell, LuMail, LuUser } from "react-icons/lu"

const ProfileNavMobile = (props) => {

    return (
        <div className="bg-[#eee] rounded-lg p-5 border-2">
            <div>
                <img src={props.userInfo.profilePic} alt="Profile" className="border-2 w-[80px] h-[80px] rounded-[100%]" />
            </div>
            <div>
                <h2 className="text-lg font-bold my-2">{props.userInfo.name}</h2>

                <div className="flex gap-2 mb-2 relative">
                    <LuUser size={22} />
                    Profile Settings
                </div>

                <div className="flex gap-2 mb-2 relative">
                    <LuBell size={22} />
                    Notifications
                </div>

                <div className="flex gap-2">
                    <LuMail size={22} />
                    Messages
                </div>
            </div>
        </div>
    )
}

export default ProfileNavMobile