import { useRef, useState, useEffect } from "react";
import axios from "axios";
import { FaCheck, FaRegStar, FaStar } from "react-icons/fa6";
import { tailChase } from "ldrs"


tailChase.register()

const TherapistHero = ({ user, userTherapistIDs, setFireFetch }) => {

    const unSubscribeBtnRef = useRef(null);

    const respondsInputRef = useRef(null)
    const submitButtonRef = useRef(null)
    const loaderRef = useRef(null)
    const textRef = useRef(null)
    const iconRef = useRef(null)

    const [respondInput, setRespondInput] = useState({
        response: "",
        rate: 0
    })

    const handleRespondInput = (e) => {
        const { name, value } = e.currentTarget
        setRespondInput(prev => ({
            ...prev,
            [name]: value
        }))
        console.log(respondInput);
    }

    const [showModal, setShowModel] = useState(false);

    const handleShowModel = () => {
        setShowModel((prev) => !prev);
    };

    const [showTestimonialModal, setShowTestimonialModal] = useState(false);
    const handleShowTestimonialModal = () => {
        setShowTestimonialModal(prev => !prev)
    }
    const addTestimonial = async (e) => {
        try {
            e.preventDefault()

            submitButtonRef.current.disabled = true
            textRef.current.className = "hidden"
            iconRef.current.className = "hidden"
            loaderRef.current.className = ""

            const userId = JSON.parse(localStorage.getItem("credentials")).response.docId

            const formData = new FormData()
            formData.append("userId", userId)
            formData.append("therapistId", user.therapistId)
            formData.append("description", respondInput.response)
            formData.append("rating", respondInput.rate)


            const { data } = await axios.post("https://mhes-backend.vercel.app/api/users/testimonials", formData, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            console.log(data);
            if (data.success) {
                loaderRef.current.className = "hidden"
                iconRef.current.className = ""
                setRespondInput({})
                setFireFetch(prev => !prev)
            }
        } catch (error) {
            console.error(error);
        } finally {
            setTimeout(() => {
                textRef.current.className = ""
                loaderRef.current.className = "hidden"
                iconRef.current.className = "hidden"
                handleShowTestimonialModal()
            }, 3000);
        }
    }

    console.log(user);


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
            unSubscribeBtnRef.current.disabled = true;
            setStatus({ uploading: true, success: false, error: "" });

            const { data } = await axios.put("https://mhes-backend.vercel.app/api/users/unSubscribeTherapist", {
                therapistId: userTherapistIDs.therapistId,
                userId: userTherapistIDs.userId,
            });

            setStatus({ uploading: false, success: true, error: "" });


            let credentials = JSON.parse(localStorage.getItem("credentials"));
            credentials.response.userData.isSubscribed = false;
            localStorage.setItem("credentials", JSON.stringify(credentials));

            setFireFetch((prev) => prev + 1);
        } catch (error) {
            setStatus({ uploading: false, success: false, error: error.message });
            console.error(error);
        } finally {
            setTimeout(() => {
                unSubscribeBtnRef.current.disabled = false;
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
                            <div className="flex items-baseline">{printRatings(user?.rating?.formattedRating?.split('/')[0]) || 0} &nbsp; {user.rating.formattedRating}</div>
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

                    <button className="ml-2 border-2 border-neutral-400 bg-neutral-400 hover:bg-neutral-800 hover:text-neutral-300 text-neutral-900 px-4 py-1 rounded-md transition-colors"
                        onClick={handleShowTestimonialModal}
                    >
                        Write an testimonials
                    </button>
                </div>
            </div>


            {showTestimonialModal && (
                <form method="post" onSubmit={addTestimonial} >
                    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                        <div className="dark:bg-neutral-800 bg-neutral-400 rounded-lg p-4 m-4 w-full md:w-[70%] lg:w-[35%]">

                            <div className="my-5">
                                <label htmlFor="responseInput">Write your Testimonial...</label>
                                <input
                                    id='responseInput'
                                    type="text"
                                    className="rounded-md w-full my-1 p-2 dark:text-black"
                                    placeholder="Response"
                                    name="response"
                                    value={respondInput.response}
                                    onChange={handleRespondInput}
                                    required
                                />

                                <div className="flex">
                                    <div className="rating">
                                        <input type="radio" onChange={handleRespondInput} id="star5" name="rate" value={5} />
                                        <label htmlFor="star5" title="text"
                                        ><svg
                                            viewBox="0 0 576 512"
                                            height=".8em"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="star-solid"
                                        >
                                                <path
                                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                                ></path>
                                            </svg>
                                        </label>
                                        <input type="radio" onChange={handleRespondInput} id="star4" name="rate" value={4} />
                                        <label htmlFor="star4" title="text"
                                        ><svg
                                            viewBox="0 0 576 512"
                                            height=".8em"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="star-solid"
                                        >
                                                <path
                                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                                ></path>
                                            </svg>
                                        </label>
                                        <input type="radio" onChange={handleRespondInput} id="star3" name="rate" value={3} />
                                        <label htmlFor="star3" title="text"
                                        ><svg
                                            viewBox="0 0 576 512"
                                            height=".8em"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="star-solid"
                                        >
                                                <path
                                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                                ></path>
                                            </svg>
                                        </label>
                                        <input type="radio" onChange={handleRespondInput} id="star2" name="rate" value={2} />
                                        <label htmlFor="star2" title="text"
                                        ><svg
                                            viewBox="0 0 576 512"
                                            height=".8em"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="star-solid"
                                        >
                                                <path
                                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                                ></path>
                                            </svg>
                                        </label>
                                        <input type="radio" onChange={handleRespondInput} id="star1" name="rate" value={1} />
                                        <label htmlFor="star1" title="text"
                                        ><svg
                                            viewBox="0 0 576 512"
                                            height=".8em"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="star-solid"
                                        >
                                                <path
                                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                                                ></path>
                                            </svg>
                                        </label>
                                    </div>
                                </div>

                            </div>

                            <button ref={submitButtonRef} className="mx-2 p-2 rounded-md bg-emerald-200 hover:bg-green-400 transition-colors text-neutral-900" type="submit">
                                <span ref={textRef} className="">Submit</span>
                                <span className="hidden" ref={loaderRef}><l-tail-chase size={18} /></span>
                                <span className="hidden" ref={iconRef}><FaCheck /></span>
                            </button>
                            <button className="mx-2 p-2 rounded-md bg-red-400 hover:bg-red-500 transition-colors" onClick={handleShowTestimonialModal}>Close</button>
                        </div>
                    </div>
                </form>
            )}
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
