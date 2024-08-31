import { FaMessage, FaPenToSquare, FaPersonCircleQuestion, FaShareFromSquare, FaUserDoctor } from "react-icons/fa6"
import TherapistHero from "../therapist/TherapistHero"


const PatientTherapist = (props) => {
    const userAuth = {
        id: 1,
        name: "DR. Mirza K",
        profilePic: "/ProfileImage.png",
        token: "abc123",
    }

    return (
        <div className="rounded-md md:p-5">

            {
                props.subscribed
                    ?
                    <div>

                        <div className="p-2 my-2 bg-zinc-100 dark:bg-neutral-600 dark:text-gray-300 shadow-md rounded-md">
                            {/* <ul className="flex flex-col lg:flex-row justify-evenly gap-2"> */}
                            <div className="overflow-auto md:w-[400px] lg:w-full">
                                <ul className="flex overflow-x-auto gap-2 justify-evenly py-2">
                                    <li key={1} title="Request Meeting" className="flex flex-row items-center gap-2 bg-neutral-200 dark:bg-zinc-800 py-2 px-4 rounded-3xl w-30 cursor-pointer shadow hover:shadow-gray-400 hover:shadow-md hover:bg-zinc-300 dark:hover:shadow-neutral-800 dark:hover:shadow-md dark:hover:bg-zinc-700 transition-shadow duration-300 min-w-[195px] md:min-w-[195px]">
                                        <FaPersonCircleQuestion fill="#555" size={20} className="fill-gray-600 dark:fill-gray-200" />
                                        <span>Request Meeting</span>
                                    </li>
                                    {/* <li key={1} className="flex items-center gap-2 bg-neutral-200 dark:bg-zinc-800 py-2 px-4 rounded-3xl w-30 cursor-pointer shadow hover:shadow-gray-400 hover:shadow-md hover:bg-zinc-300 dark:hover:shadow-neutral-800 dark:hover:shadow-md dark:hover:bg-zinc-700 transition-shadow duration-300">
                                    <FaUserDoctor size={20} className="fill-gray-600 dark:fill-gray-200" />
                                    <span>Profile</span>
                                </li> */}
                                    <li key={2} className="flex items-center gap-2 bg-neutral-200 dark:bg-zinc-800 py-2 px-4 rounded-3xl w-30 cursor-pointer shadow hover:shadow-gray-400 hover:shadow-md hover:bg-zinc-300 dark:hover:shadow-neutral-800 dark:hover:shadow-md dark:hover:bg-zinc-700 transition-shadow duration-300">
                                        <FaMessage fill="#555" size={20} className="fill-gray-600 dark:fill-gray-200" />
                                        <span>Message</span>
                                    </li>
                                    <li key={3} className="flex items-center gap-2 bg-neutral-200 dark:bg-zinc-800 py-2 px-4 rounded-3xl w-30 cursor-pointer shadow hover:shadow-gray-400 hover:shadow-md hover:bg-zinc-300 dark:hover:shadow-neutral-800 dark:hover:shadow-md dark:hover:bg-zinc-700 transition-shadow duration-300">
                                        <FaPenToSquare fill="#555" size={20} className="fill-gray-600 dark:fill-gray-200" />
                                        <span>Review</span>
                                    </li>
                                    <li key={5} className="flex items-center gap-2 bg-neutral-200 dark:bg-zinc-800 py-2 px-4 rounded-3xl w-30 cursor-pointer shadow hover:shadow-gray-400 hover:shadow-md hover:bg-zinc-300 dark:hover:shadow-neutral-800 dark:hover:shadow-md dark:hover:bg-zinc-700 transition-shadow duration-300">
                                        <FaShareFromSquare fill="#555" size={20} className="fill-gray-600 dark:fill-gray-200" />
                                        <span>Recommend</span>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <TherapistHero user={userAuth} />

                        <div className="my-4">
                            <a href="#" className="text-blue-600">
                                View Previously Subscribed Therapists
                            </a>
                        </div>
                    </div>
                    :
                    <div className="p-2 text-lg">
                        <p>No Therapist is Subscribed Yet.</p>
                        <p>Click <a href="" className="text-sky-500">View Therpists</a> to subscribe</p>
                    </div>
            }


        </div>
    )
}

export default PatientTherapist