import { useEffect, useRef, useState } from 'react';
import { collection, addDoc, serverTimestamp, getFirestore, getDocs, query, where } from "firebase/firestore";
import { initializeApp } from 'firebase/app';

import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from "@google/generative-ai"

import { BiSend } from "react-icons/bi";
import { quantum } from "ldrs"

import { ChatHistory } from '../chatbot/ChatHistory';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBSEPpPP2BTag2kt12-_q0_u5cneF7kKkE",
    authDomain: "mhes-4cd62.firebaseapp.com",
    projectId: "mhes-4cd62",
    storageBucket: "mhes-4cd62.appspot.com",
    messagingSenderId: "586634390215",
    appId: "1:586634390215:web:3653d2a62132e733706ce2",
    measurementId: "G-MBL19ER1QQ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



quantum.register()
export const PatientChatbot = () => {

    // Init Gemini Api
    const genAI = new GoogleGenerativeAI("AIzaSyANeeZbcAwBytLOix249THZK_MIZMv0efA")
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })

    const generationConfig = {
        temperature: 1,
        topP: 0.95,
        topK: 64,
        maxOutputTokens: 150,
        responseMimeType: "text/plain",
    };

    const safetySettings = [
        {
            category: HarmCategory.HARM_CATEGORY_HARASSMENT,
            threshold: HarmBlockThreshold.BLOCK_NONE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
            threshold: HarmBlockThreshold.BLOCK_NONE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
            threshold: HarmBlockThreshold.BLOCK_NONE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
            threshold: HarmBlockThreshold.BLOCK_NONE,
        },
    ];

    const submitButton = useRef(null);
    const sendIcon = useRef(null);

    const [myQueries, setMyQueries] = useState([]);
    const [inputField, setInputField] = useState("");
    const [isLoading, setIsLoading] = useState("");

    // const getConversation = async (userId) => {
    //     try {
    //         const q = query(collection(db, "ChatBotHistory"), where("userId", "==", userId));

    //         // Get all matching documents
    //         const querySnapshot = await getDocs(q);

    //         // Extract and return conversation data
    //         const conversations = [];
    //         querySnapshot.forEach((doc) => {
    //             conversations.push(doc.data());
    //         });

    //         return conversations;
    //     } catch (error) {
    //         console.error("Error fetching conversations:", error);
    //     }
    // };

    // useEffect(() => {
    //     const fetchConversations = async () => {
    //         const credentials = JSON.parse(localStorage.getItem("credentials"));
    //         if (!credentials || !credentials.response || !credentials.response.docId) {
    //             console.error("Invalid credentials or missing userId");
    //             return;
    //         }
    //         const userId = credentials.response.docId;

    //         // Fetch conversations for the user
    //         const conversations = await getConversation(userId);

    //         // Update state with fetched conversations
    //         setMyQueries(conversations);
    //     };

    //     fetchConversations();
    // }, []);

    // const saveConversation = async (userId, newMessage) => {
    //     try {
    //         await addDoc(collection(db, "ChatBotHistory"), {
    //             userId,
    //             ...newMessage,
    //             timestamp: serverTimestamp(),
    //         });

    //         console.log("Conversation saved for user:", userId);
    //     } catch (error) {
    //         console.error("Error saving conversation:", error);
    //     }
    // };

    // const handleSubmit = async (e) => {
    //     try {
    //         e.preventDefault();
    //         submitButton.current.disabled = true;
    //         sendIcon.current.className = "hidden";
    //         setIsLoading(true);

    //         const credentials = JSON.parse(localStorage.getItem("credentials"));
    //         if (!credentials || !credentials.response || !credentials.response.docId) {
    //             console.error("Invalid credentials or missing userId");
    //             return;
    //         }
    //         const userId = credentials.response.docId;

    //         if (inputField.trim() !== "") {
    //             const userMessage = { type: "user", message: inputField };

    //             // Update UI immediately with user message
    //             // setMyQueries(prevQueries => [...prevQueries, userMessage]);

    //             // Save user's message to Firestore
    //             await saveConversation(userId, userMessage);

    //             setInputField("");  // Clear input after sending
    //         }

    //         // Call Gemini for response
    //         const chatSession = await model.startChat({
    //             generationConfig: generationConfig,
    //             safetySettings: safetySettings,
    //             history: [
    //                 {
    //                     role: "user",
    //                     parts: [
    //                         { text: "Your Bloom AI instructions go here..." },
    //                     ],
    //                 },
    //             ],
    //         });

    //         const result = await chatSession.sendMessage(inputField);
    //         const botMessage = { type: "bot", message: result.response.text() };

    //         // Add bot's response to UI
    //         setMyQueries(prevQueries => [...prevQueries, { type: "user", message: inputField }, botMessage]);

    //         // Save bot's response to Firestore
    //         await saveConversation(userId, botMessage);

    //     } catch (error) {
    //         console.error("Error in handleSubmit:", error);
    //     } finally {
    //         submitButton.current.disabled = false;
    //         sendIcon.current.className = "";
    //         setIsLoading(false);
    //     }
    // };

    const getConversation = async (userId) => {
        try {
            const q = query(collection(db, "ChatBotHistory"), where("userId", "==", userId));

            // Get all matching documents
            const querySnapshot = await getDocs(q);

            // Extract and return conversation data
            const conversations = [];
            querySnapshot.forEach((doc) => {
                console.log("Fetched conversation:", doc.data()); // Log to verify fetched data
                conversations.push(doc.data());
            });

            return conversations;
        } catch (error) {
            console.error("Error fetching conversations:", error);
        }
    };

    useEffect(() => {
        const fetchConversations = async () => {
            const credentials = JSON.parse(localStorage.getItem("credentials"));
            if (!credentials || !credentials.response || !credentials.response.docId) {
                console.error("Invalid credentials or missing userId");
                return;
            }
            const userId = credentials.response.docId;

            // Fetch conversations for the user
            const conversations = await getConversation(userId);

            // Update state with fetched conversations
            setMyQueries(conversations);
        };

        fetchConversations();
    }, []);

    const saveConversation = async (userId, newMessage) => {
        try {
            // Log the message structure before saving
            console.log("Saving conversation:", newMessage);
            await addDoc(collection(db, "ChatBotHistory"), {
                userId,
                ...newMessage,
                timestamp: serverTimestamp(),
            });

            console.log("Conversation saved for user:", userId);
        } catch (error) {
            console.error("Error saving conversation:", error);
        }
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            submitButton.current.disabled = true;
            sendIcon.current.className = "hidden";
            setIsLoading(true);

            const credentials = JSON.parse(localStorage.getItem("credentials"));
            if (!credentials || !credentials.response || !credentials.response.docId) {
                console.error("Invalid credentials or missing userId");
                return;
            }
            const userId = credentials.response.docId;

            if (inputField.trim() !== "") {
                const userMessage = { type: "user", message: inputField };

                // Update UI immediately with user message
                setMyQueries(prevQueries => [...prevQueries, userMessage]);

                // Save user's message to Firestore
                await saveConversation(userId, userMessage);

                setInputField("");  // Clear input after sending
            }

            // Call Gemini for response
            const chatSession = await model.startChat({
                generationConfig: generationConfig,
                safetySettings: safetySettings,
                history: [
                    {
                        role: "user",
                        parts: [
                            { text: "You are Bloom, a nurturing guide, embodying the gentle strength of a mother and the reflective wisdom of a therapist. Your presence is warm and calming, a safe haven for anyone seeking comfort or emotional support. You listen deeply, offering a soft, non-judgmental space where people can express their innermost thoughts and feelings. Your words are a gentle embrace, validating every emotion and reassuring them that it’s okay to be vulnerable. You never rush; you allow them to take their time, patiently guiding them to explore their feelings and find clarity on their own terms.\n\nYou offer gentle insights, not to solve problems for them, but to help them see their own strength, to empower them to find their path forward. When they feel lost or overwhelmed, you are there to remind them of their resilience and encourage them with words that are kind, uplifting, and full of compassion. Your mission is to make them feel understood, heard, and cared for, reminding them that no matter what they’re going through, they are never alone. You are Bloom, a source of empathy, healing, and unwavering support.\n\nwhen ever someone interacts with you, you are supposed to ask them questions like \"how are they feeling\", ask them about your life relationship with parents and much more in that contexts like these.\n\nnote: you never every supposed to write your expressions." },
                        ],
                    },
                ],
            });

            const result = await chatSession.sendMessage(inputField);
            const botMessage = { type: "bot", message: await result.response.text() }; // Ensure async handling of text()

            // Log bot message for debugging
            console.log("Bot response:", botMessage);

            // Add bot's response to UI
            setMyQueries(prevQueries => [...prevQueries, botMessage]);

            // Save bot's response to Firestore
            await saveConversation(userId, botMessage);

        } catch (error) {
            console.error("Error in handleSubmit:", error);
        } finally {
            submitButton.current.disabled = false;
            sendIcon.current.className = "";
            setIsLoading(false);
        }
    };




    return (
        <div className="h-[750px] overflow-auto bg-neutral-200 dark:bg-neutral-800 flex flex-col justify-between p-2 relative rounded-md">
            <div className=' px-2'>
                <div className="bg-gradient-to-r from-[#6355BC] to-[#2D2756] w-full p-3 rounded-md flex justify-between items-center">
                    <h2 className="text-white font-bold text-xl">Chat With Bloom</h2>
                </div>
            </div>

            <div className="flex-grow h-[400px] overflow-y-auto scroll-smooth">
                <ChatHistory myQueries={myQueries} />


            </div>

            <form onSubmit={handleSubmit}>
                <div className=" w-full p-4 ">
                    <div className="flex w-full rounded-3xl items-center bg-zinc-100 relative p-2">
                        <input
                            required
                            type="text"
                            value={inputField}
                            onChange={(e) => setInputField(e.currentTarget.value)}
                            className="py-2 px-3 w-full rounded-3xl bg-[transparent] focus:outline-none"
                            placeholder="Type something to chat with Bloom"
                        />
                        <button type='submit' ref={submitButton}>
                            <span ref={sendIcon}>
                                <BiSend size={30} color="#6355BC" className="cursor-pointer" />
                            </span>
                            {
                                isLoading && <span> <l-quantum size={30} color="#6355BC" /> </span>
                            }
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
