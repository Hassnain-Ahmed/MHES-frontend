import { useState } from "react";
import { LuBell, LuMail, LuUser } from "react-icons/lu"
import { FaCaretUp } from "react-icons/fa6"


const ProfileNav = (props) => {

    const [isBell, setIsBell] = useState(false)
    const [isMessage, setIsMessage] = useState(false)

    const togglBell = () => {
        setIsBell(prev => !prev)
        isMessage && setIsMessage(prev => false)
    }

    const toggleMessage = () => {
        setIsMessage(prev => !prev)
        isBell && setIsBell(prev => false)
    }

    const mData = [
        {
            key: "n1",
            title: "Notification A",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nemo repudiandae eveniet, dicta veritatis corporis mollitia consequuntur! Nemo, nisi. Magni!"
        },
        {
            key: "n2",
            title: "Notification B",
            description: "dicta veritatis corporis mollitia consequuntur! Nemo, nisi. Magni!"
        },
    ]

    const MessageData = [
        {
            key: "m1",
            from: "Mr. John K",
            message: "Let's Set up meeting."
        },
        {
            key: "m2",
            from: "Humera Shaikh",
            message: "Wishing you a happy journey!"
        },
    ]

    return (
        <div className="bg-gradient-to-l from-[#fff] via-[#7e8dd283] to-[#6573aee3] flex gap-3 items-center justify-evenly p-2 rounded-lg">

            <div className="relative">
                <LuBell size={22} className="cursor-pointer" onClick={togglBell} />
                <div className={`absolute w-[200px] right-[0px] z-10 ${isBell ? `block` : `hidden`}`}>
                    <FaCaretUp size={20} className={`absolute right-0 top-[0px]`} />
                    <ul className="bg-[#ccc] p-2 rounded flex flex-col gap-2 mt-3">
                        {
                            mData && mData.map(nData => (
                                <li key={nData.key}>
                                    <div className="w-full bg-[#f9f9f9] p-2 rounded hover:bg-[#efefef]" key={nData.key}>
                                        <p className="font-bold">{nData.title}</p>
                                        <p className="line-clamp-2">{nData.description}</p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>

                </div>
            </div>


            <div className="relative">
                <LuMail size={22} className="cursor-pointer" onClick={toggleMessage} />
                <div className={`absolute w-[200px] right-[0px] z-10 ${isMessage ? `block` : `hidden`}`}>
                    <FaCaretUp size={20} className={`absolute right-0 top-[0px]`} />
                    <ul className="bg-[#ccc] p-2 rounded flex flex-col gap-2 mt-3">
                        {
                            MessageData && MessageData.map(mData => (
                                <li key={mData.key}>
                                    <div className="w-full bg-[#f9f9f9] p-2 rounded hover:bg-[#efefef]" key={mData.key}>
                                        <p className="font-bold">{mData.from}</p>
                                        <p className="line-clamp-2">{mData.message}</p>
                                    </div>
                                </li>

                            ))
                        }
                    </ul>
                </div>
            </div>

            <div>
                <LuUser size={22} className="cursor-pointer" />
            </div>

            <span className="truncate w-[90px] text-right">{props.userInfo.name}</span>
            <img src={props.userInfo.profilePic} alt="" className={`w-[40px] h-[40px] rounded-[100%] ${props.imgClass}`} />

        </div>
    )
}

export default ProfileNav;