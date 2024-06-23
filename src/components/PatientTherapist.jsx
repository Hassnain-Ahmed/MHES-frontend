import { FaMessage, FaPenToSquare, FaShareFromSquare } from "react-icons/fa6"
import TherapistHero from "./TherapistHero"


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

                        <div className="p-2 my-2 bg-zinc-100 shadow rounded-md">
                            {/* <ul className="flex flex-col lg:flex-row justify-evenly gap-2"> */}
                            <ul className="flex overflow-x-auto gap-2 justify-evenly py-2">
                                <li key={1} className="flex items-center gap-2 bg-slate-200 py-2 px-4 rounded-3xl w-30">
                                    <FaMessage fill="#555" size={20} />
                                    <span>Message</span>
                                </li>
                                <li key={2} className="flex items-center gap-2 bg-slate-200 py-2 px-4 rounded-3xl w-30">
                                    <FaMessage fill="#555" size={20} />
                                    <span>Sessions</span>
                                </li>
                                <li key={3} className="flex items-center gap-2 bg-slate-200 py-2 px-4 rounded-3xl w-30">
                                    <FaPenToSquare fill="#555" size={20} />
                                    <span>Review</span>
                                </li>
                                <li key={4} className="flex items-center gap-2 bg-slate-200 py-2 px-4 rounded-3xl w-30">
                                    <FaShareFromSquare fill="#555" size={20} />
                                    <span>Recommend</span>
                                </li>
                            </ul>

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