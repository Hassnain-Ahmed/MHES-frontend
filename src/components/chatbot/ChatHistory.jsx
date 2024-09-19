import ChatMessageBannarSender from './ChatMessageBannarSender';
import ChatMessageBannarReciever from './ChatMessageBannarReciever';
import { useEffect, useRef } from 'react';

export const ChatHistory = ({ myQueries }) => {
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();  // Scrolls to the bottom when myQueries changes
    }, [myQueries]);

    return (
        <>
            {myQueries.map((message, index) => (
                <div key={index}>
                    {message.type === "user" ? (
                        <ChatMessageBannarSender index={index} message={message.message} />
                    ) : (
                        <ChatMessageBannarReciever message={message.message} />
                    )}
                </div>
            ))}
            <div ref={messagesEndRef} />
        </>
    );
};
