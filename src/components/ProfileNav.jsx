import { useEffect, useState } from "react";
import { LuBell, LuMail, LuUser } from "react-icons/lu"
import { FaCaretUp } from "react-icons/fa6"
import useTheme from "../context/ThemeContext";


const ProfileNav = (props) => {

    const { themeMode, lightTheme, darkTheme } = useTheme()
    const themeOnChange = (e) => {
        const themeStatus = e.currentTarget.checked
        if (themeMode == "dark") {
            lightTheme()
            localStorage.setItem("themeMode", 'light')
        } else {
            darkTheme()
            localStorage.setItem("themeMode", "dark")
        }
    }

    useEffect(() => {
        const localThemeState = localStorage.getItem("themeMode")
        localThemeState == "light" ? lightTheme() : darkTheme()
    }, [])

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
        <div className={`bg-gradient-to-l from-[#28464B]  to-[#326771] flex gap-3 items-center justify-evenly p-2 rounded-lg selection:bg-none `}>

            <div className="relative">
                <LuBell size={22} className="cursor-pointer text-white" onClick={togglBell} />
                <div className={`absolute w-[200px] right-[0px] z-10  ${isBell ? `transition-transform ease-in-out scale-100` : `transition-transform ease-in-out translate-y-[-50%] translate-x-[50%] scale-0`}`}>
                    <FaCaretUp size={20} fill="#ccc" className={`absolute right-0 top-[0px]`} />
                    <ul className="bg-[#ccc] text-[#333] p-2 rounded flex flex-col gap-2 mt-3">
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
                <LuMail size={22} className="cursor-pointer text-white" onClick={toggleMessage} />
                <div className={`absolute w-[200px] right-[0px] z-10 ${isMessage ? `transition-transform ease-in-out scale-100` : `transition-transform ease-in-out translate-y-[-50%] translate-x-[50%] scale-0`}`}>
                    <FaCaretUp size={20} fill="#ccc" className={`absolute right-0 top-[0px]`} />
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

            <div className="relative">
                <LuUser size={22} className="cursor-pointer text-white" />
            </div>

            <div className="relative ml-[-10px]">
                <label className="switch scale-[.7]">
                    <span className="sun"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="#ffd43b"><circle r="5" cy="12" cx="12"></circle><path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path></g></svg></span>
                    <span className="moon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path></svg></span>
                    <input type="checkbox" className="input" value={"light"} onChange={themeOnChange} />
                    <span className="slider"></span>
                </label>
            </div>

            <div className="cursor-pointer flex items-center text-white">
                <span className="truncate w-[90px] text-right">{props.name}</span>
                <img src={props.profilePic} alt="" className={`w-[40px] h-[40px] rounded-[100%] ${props.imgClass}`} />
            </div>

        </div>
    )
}

export default ProfileNav;