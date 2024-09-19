const ChatMessageBannarSender = (props) => {

    const profilePicture = JSON.parse(localStorage.getItem("credentials")).response.userData.profileUrl

    return (
        <div className="flex flex-row-reverse my-2" key={props.index}>
            <img src={profilePicture} alt="" className="m-2 rounded-[100%] border-2 w-[50px] h-[50px] md:w-[60px] lg:h-[60px]" />

            <div className="bg-gradient-to-r from-neutral-600 to-neutral-800 px-2 pt-2 pb-4 m-2 rounded-xl text-white relative">
                {props.message}
            </div>
        </div>
    )
}

export default ChatMessageBannarSender