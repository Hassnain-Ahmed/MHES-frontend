import { useEffect, useRef } from 'react';
import { BiSend } from "react-icons/bi";
import { FaXmark } from "react-icons/fa6";
import ChatMessageBannarSender from "../components/chatbot/ChatMessageBannarSender";
import ChatMessageBannarReciever from "../components/chatbot/ChatMessageBannarReciever";

const ChatWithBloom = (props) => {
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, []);
    // This is the Chat with bloom interface component
    return (
        <div className='fixed top-0 left-0 z-20 w-screen h-screen'>
            <div className="bg-[#cccccc82] backdrop-blur-sm h-screen flex flex-col justify-between p-2 relative">

                <div className='fixed left-0 top-2 z-10 w-full px-2'>
                    <div className="bg-gradient-to-r from-[#6355BC] to-[#2D2756] w-full p-3 rounded-md flex justify-between items-center">
                        <h2 className="text-white font-bold text-xl">Chat With Bloom</h2>
                        <FaXmark size={25} color='#fff' className='cursor-pointer' onClick={props.toggle} />
                    </div>
                </div>

                <div className="flex-grow overflow-y-auto mb-[80px] mt-[50px] scroll-smooth">
                    <ChatMessageBannarReciever />
                    <ChatMessageBannarSender />
                    <ChatMessageBannarReciever />
                    <ChatMessageBannarSender />
                    <ChatMessageBannarReciever />
                    <ChatMessageBannarSender />
                    <ChatMessageBannarReciever />
                    <ChatMessageBannarSender />
                    <ChatMessageBannarReciever />
                    <ChatMessageBannarSender />
                    <div ref={messagesEndRef} />
                </div>

                <div className="fixed bottom-0 w-full p-4 ">
                    <div className="flex w-full rounded-3xl items-center bg-zinc-100 relative p-2">
                        <input type="text" className="py-2 px-3 w-full rounded-3xl bg-[transparent] focus:outline-none" placeholder="Type Something to chat with bloom" />
                        <BiSend size={30} color="#6355BC" className="cursor-pointer absolute right-4" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatWithBloom;
