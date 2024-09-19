import { ripples } from "ldrs"
import chatbotIcon from "/ChatbotIcon.svg"
ripples.register()
const ChatMessageBannarReciever = (props) => {
    return (
        <div className="flex">
            <img src={chatbotIcon} alt="" className="m-2 rounded-[100%] border-2 w-[50px] h-[50px] md:w-[60px] lg:h-[60px]" />
            <div className="bg-gradient-to-r from-[#55BC97] to-[#275645] p-2 m-2 rounded-xl text-white relative">
                {
                    !props.message != "" &&
                    <l-ripples color="#eee" size={24} />
                }
                {props.message}
            </div>
        </div>
    )
}

export default ChatMessageBannarReciever