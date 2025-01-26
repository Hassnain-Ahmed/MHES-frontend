import { ripples } from "ldrs";
import chatbotIcon from "/ChatbotIcon.svg";
import { marked } from "marked";
import DOMPurify from "dompurify"; // Sanitize the parsed HTML content

ripples.register();

const ChatMessageBannarReciever = (props) => {
    // Parse the message using marked and sanitize it with DOMPurify
    const safeHTML = DOMPurify.sanitize(marked.parse(props.message));

    return (
        <div className="flex">
            <img
                src={chatbotIcon}
                alt="Chatbot Icon"
                className="m-2 rounded-[100%] border-2 w-[50px] h-[50px] md:w-[60px] lg:h-[60px]"
            />
            <div className="bg-gradient-to-r from-[#55BC97] to-[#275645] p-2 m-2 rounded-xl text-white relative max-w-lg">
                {
                    !props.message != "" &&
                    <l-ripples color="#eee" size={24} />
                }
                {/* Use dangerouslySetInnerHTML to safely render the parsed HTML */}
                <div
                    className="whitespace-pre-wrap break-words"
                    dangerouslySetInnerHTML={{ __html: safeHTML }}
                />
            </div>
        </div>
    );
};

export default ChatMessageBannarReciever;
