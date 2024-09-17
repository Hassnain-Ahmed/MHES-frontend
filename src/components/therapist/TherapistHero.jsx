import { useRef, useState, useEffect } from "react";
import axios from "axios";
import { FaRegStar, FaStar } from "react-icons/fa6";

const TherapistHero = ({ user, userTherapistIDs, setFireFetch }) => {
    const unSubscribeBtnRef = useRef(null);
    const [showModal, setShowModel] = useState(false);

    const handleShowModel = () => {
        setShowModel((prev) => !prev);
    };

    const printRatings = (rate) => {
        let rating = [];
        for (let index = 1; index <= 5; index++) {
            if (index <= rate) {
                rating.push(<FaStar color="gold" key={index} />);
            } else {
                rating.push(<FaRegStar color="gold" stroke="1" strokeWidth={1} key={index} />);
            }
        }
        return rating;
    };

    const [status, setStatus] = useState({
        uploading: false,
        success: false,
        error: "",
    });

    const unSubscribeTherapist = async () => {
        try {
            unSubscribeBtnRef.currentTarget.disabled = true;
            setStatus({ uploading: true, success: false, error: "" });

            const { data } = await axios.put("http://localhost:5000/api/users/unSubscribeTherapist", {
                therapistId: userTherapistIDs.therapistId,
                userId: userTherapistIDs.userId,
            });

            setStatus({ uploading: false, success: true, error: "" });

            // Update localStorage credentials after unsubscribing
            let credentials = JSON.parse(localStorage.getItem("credentials"));
            credentials.response.userData.isSubscribed = false;
            localStorage.setItem("credentials", JSON.stringify(credentials));

            setFireFetch((prev) => prev + 1);
        } catch (error) {
            setStatus({ uploading: false, success: false, error: error.message });
            console.error(error);
        } finally {
            setTimeout(() => {
                unSubscribeBtnRef.currentTarget.disabled = false;
                setStatus({ uploading: false, success: false, error: "" });
            }, 3000);
        }
    };

    useEffect(() => {
        if (status.success) {
            setShowModel(false); // Close modal after success
        }
    }, [status.success]);

    return (
        <div className="flex gap-5 flex-col items-center md:flex-col md:justify-evenly lg:items-start lg:flex-row p-5 border-b-2 dark:border-b-neutral-500 dark:text-[#eee] text-[#333] transition-all duration-500 relative">
            <div>
                <img src={user.therapistData.profilePictureURL} className="w-96 aspect-square object-cover rounded-lg" alt="" />
            </div>

            <div className="w-[100%] lg:w-[50%] relative">
                <div className="w-full border-2 dark:border-neutral-500 p-5 rounded-lg ">
                    <div className="therapist-heading my-5 lg:mb-5">
                        <div className="flex justify-between">
                            <h2 className="font-bold text-xl text-[#333] dark:text-[#f9f9f9]">{user.therapistData.therapistFullName}</h2>
                            <div className="flex items-baseline">{printRatings(4)} &nbsp; 4/5</div>
                        </div>
                        <span className="text-neutral-500 dark:text-neutral-400">{user.listingsData.specialization}</span>
                    </div>

                    <div className="therapist-body lg:mt-4">
                        <ul>
                            <li className="my-2">{user.listingsData.slogan}</li>
                            <li className="my-2">{user.listingsData.description}</li>
                        </ul>
                    </div>

                    <button className="border-2 border-red-500 hover:bg-red-500 px-4 py-1 rounded-md transition-colors" onClick={handleShowModel}>
                        Unsubscribe
                    </button>
                </div>
            </div>

            {showModal && (
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                    <div className="bg-neutral-300/30 backdrop-blur-md dark:bg-neutral-600 p-4 rounded-lg">
                        <p className="absolute -top-6 font-bold bg-slate-300 px-4 rounded-full animate-bounce">
                            {status.success && "Successfully unsubscribed"}
                            {status.uploading && "Unsubscribing..."}
                            {status.error && status.error}
                        </p>
                        <p className="text-xl mb-4">Are you sure you want to Unsubscribe?</p>

                        <button ref={unSubscribeBtnRef} className="px-4 py-2 rounded-full bg-red-400/80 hover:bg-red-400 transition-colors" onClick={unSubscribeTherapist}>
                            Yes, Unsubscribe
                        </button>
                        <button
                            className="px-4 py-2 rounded-full border-2 border-neutral-700 hover:bg-neutral-700 hover:text-white ml-2 transition-colors"
                            onClick={handleShowModel}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TherapistHero;
