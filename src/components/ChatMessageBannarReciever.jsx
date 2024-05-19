import chatbotIcon from "/ChatbotIcon.svg"

const ChatMessageBannarReciever = () => {
    return (
        <div className="flex">
            <img src={chatbotIcon} alt="" className="m-2 rounded-[100%] border-2 w-[50px] h-[50px] md:w-[60px] lg:h-[60px]" />
            <div className="bg-gradient-to-r from-[#55BC97] to-[#275645] px-2 pt-2 pb-4 m-2 rounded-xl text-white relative">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, non minima cupiditate velit earum.
                <span className="absolute bottom-0 right-2 text-sm text-neutral-300">5:01pm</span>
            </div>
        </div>
    )
}

export default ChatMessageBannarReciever