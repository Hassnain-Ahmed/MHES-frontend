import profileIcon from "/ProfileImage.png"

const ChatMessageBannarSender = () => {
    return (
        <div className="flex flex-row-reverse my-2">
            <img src={profileIcon} alt="" className="m-2 rounded-[100%] border-2 w-[50px] h-[50px] md:w-[60px] lg:h-[60px]" />

            <div className="bg-gradient-to-r from-neutral-600 to-neutral-800 px-2 pt-2 pb-4 m-2 rounded-xl text-white relative">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, non minima cupiditate velit earum.
                <span className="absolute bottom-0 right-2 text-sm text-neutral-300">5:00pm</span>
            </div>
        </div>
    )
}

export default ChatMessageBannarSender