import ChatMessageBannarSender from './ChatMessageBannarSender';
import ChatMessageBannarReciever from './ChatMessageBannarReciever';
import { useEffect, useRef } from 'react';

export const ChatHistory = ({ myQueries }) => {
    const messagesEndRef = useRef(null);
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [myQueries]);

    return (
        <>
            {
                myQueries
                    .sort((a, b) => {
                        if (a.timestamp && b.timestamp) {
                            const timeA = a.timestamp.seconds * 1000 + a.timestamp.nanoseconds / 1000000;
                            const timeB = b.timestamp.seconds * 1000 + b.timestamp.nanoseconds / 1000000;
                            return timeA - timeB;
                        } else if (a.timestamp) {
                            return -1;
                        } else if (b.timestamp) {
                            return 1;
                        }
                        return 0;
                    })
                    .map((message, index) => (
                        <div key={index}>
                            {message.type === "user" ? (
                                <ChatMessageBannarSender index={index} message={message.message} />
                            ) : (
                                <ChatMessageBannarReciever message={message.message} />
                            )}
                        </div>
                    ))

            }
            <div ref={messagesEndRef} />
        </>
    );
};
