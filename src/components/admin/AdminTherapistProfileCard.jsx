import axios from "axios"
import { useRef } from "react"
import { FaBriefcase, FaFolder, FaRegFolderOpen, FaUser, FaUserGraduate } from "react-icons/fa6"
import { Link } from "react-router-dom"


const AdminTherapistProfileCard = ({ setShowTherapist, showThatTherapist, setChanges }) => {

    const acceptBtnRef = useRef(null)
    const rejectBtnRef = useRef(null)

    const approveTherapist = async () => {
        try {
            acceptBtnRef.current.disabled = true
            const { data } = await axios.post("http://localhost:5000/api/admin/acceptTherapist", { therapistId: showThatTherapist.id })
            console.log(data);
            setShowTherapist(false)

        } catch (error) {
            console.error(error);
        } finally {
            acceptBtnRef.current.disabled = false
            setShowTherapist(false)
        }
    }

    const rejectTherapist = async () => {
        try {
            rejectBtnRef.current.disabled = true
            const { data } = await axios.post("http://localhost:5000/api/admin/rejectTherapist", { therapistId: showThatTherapist.id })
            console.log(data);
            setShowTherapist(false)
        } catch (error) {
            console.error(error);
        } finally {
            rejectBtnRef.current.disabled = false
            setShowTherapist(false)
        }
    }


    return (
        <div className="dark:bg-neutral-800/70 bg-neutral-400/70 backdrop-blur-md rounded-lg p-4 m-4 w-[90%] md:w-[70%] lg:w-[50%] border overflow-auto cursor-default h-[700px]">

            <div className="w-full">
                <div className="flex flex-col lg:flex-row justify-start items-center gap-y-2 gap-x-4 border-b p-2">
                    <img src={showThatTherapist.profilePictureURL || "/ProfileImage.png"} alt="" className="w-[150px] h-[150px] aspect-square object-cover rounded-lg" />

                    <div className="my-2">
                        <h1 className="text-lg font-semibold">{showThatTherapist.therapistFullName}</h1>
                        <h2 className="text-neutral-800 dark:text-neutral-400 mb-2">Request Timing: {new Date(showThatTherapist.createdAt).toLocaleString()}</h2>
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum sit iusto inventore facere animi possimus quidem iure atque quaerat pariatur!</p> */}
                    </div>
                </div>

                <div className="flex gap-2 flex-col m-5">
                    <div className="p-2 my-1 w-full">
                        <h1 className="text-xl text-stone-800/90 dark:text-stone-100 font-semibold inline-flex items-baseline gap-1"><FaUser /> Personal Information</h1>
                        <div className="ml-2 py-1 px-4 border-l-2 border-neutral-500/60 dark:border-neutral-300/60">
                            <div>
                                <span className="text-sm">Name: </span>
                                <span className="text-lg">{showThatTherapist.therapistFullName}</span>
                            </div>
                            <div>
                                <span className="text-sm">Location: </span>
                                <span className="text-lg">{`${showThatTherapist.therapistAddressAppartment}, ${showThatTherapist.therapistAddressStreet}, ${showThatTherapist.therapistAddressCity}`}</span>
                            </div>
                            {/* <div>
                                <span className="text-sm">Qualification: </span>
                                <span className="text-md">PHD</span>
                            </div>
                            <div>
                                <span className="text-sm">Specialization: </span>
                                <span className="text-md">Psychology</span>
                            </div> */}
                            <div>
                                <span className="text-sm">Email Address: </span>
                                <span className="text-lg">{showThatTherapist.therapistEmail}</span>
                            </div>
                            <div>
                                <span className="text-sm">Contact: </span>
                                <span className="text-lg">{showThatTherapist.therapistPhone}</span>
                            </div>
                            <div>
                                <span className="text-sm">Contact (Emergency): </span>
                                <span className="text-lg">{showThatTherapist.therapistEmergency}</span>
                            </div>
                        </div>

                        {/* <h1 className="text-md text-stone-800/90 dark:text-stone-100 font-semibold inline-flex items-baseline gap-1 my-2"><FaUserGraduate /> Education Information</h1>
                        <div className="ml-2 py-1 px-4 border-l-2 border-neutral-500/60 dark:border-neutral-300/60">
                            <div>
                                <span className="text-sm">Bachelors: </span>
                                <span className="text-md">Psychology | SZABIST</span>
                            </div>
                            <div>
                                <span className="text-sm">Masters: </span>
                                <span className="text-md">Psychology | LUMS</span>
                            </div>
                            <div>
                                <span className="text-sm">PHD: </span>
                                <span className="text-md">Psychology | LUMS</span>
                            </div>
                        </div> */}

                        {/* <h1 className="text-md text-stone-800/90 dark:text-stone-100 font-semibold inline-flex items-baseline gap-1 my-2"><FaBriefcase /> Work Experience</h1>
                        <ul className="ml-2 py-1 px-4 border-l-2 border-neutral-500/60 dark:border-neutral-300/60">
                            <li className="my-2">
                                <p>
                                    Clinical Therapist at Counseling Center
                                </p>
                                <span className="text-sm">2024-2024</span>
                                <p className="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, debitis!</p>
                            </li>
                            <li className="my-2">
                                <p>
                                    Mental Health Counselor at Mental Health Services
                                </p>
                                <span className="text-sm">2024-2024</span>
                                <p className="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, debitis!</p>
                            </li>
                        </ul> */}
                    </div>

                    <div className="w-full">
                        <h1 className="text-xl text-stone-800/90 dark:text-stone-100 font-semibold inline-flex items-baseline gap-1 my-2"><FaFolder /> Documents</h1>
                        <ul className="ml-2 p-4 border-l-2 border-neutral-500/60 dark:border-neutral-300/60">
                            <li>
                                <h1 className="text-lg text-stone-800/90 dark:text-stone-100 font-semibold inline-flex items-baseline gap-1"><FaRegFolderOpen /> Personal</h1>
                                <ul className="ml-2 py-1 px-4 border-l-2 border-neutral-500/60 dark:border-neutral-300/60">
                                    {/* <li>
                                        <span className="text-sm">Identification Card: </span>
                                        <Link className="text-blue-700 dark:text-sky-500">
                                            Cnic.pdf
                                        </Link>
                                    </li> */}
                                    <li>
                                        <span className="text-sm">Resume / Cv: </span>
                                        <Link to={showThatTherapist.resumeFileURL} target="_blank" className="text-blue-700 dark:text-sky-500">
                                            Resume.pdf
                                        </Link>
                                    </li>
                                    <li>
                                        <span className="text-sm">Cover Letter: </span>
                                        <Link to={showThatTherapist.coverLetterPath} target="_blank" className="text-blue-700 dark:text-sky-500">
                                            CoverLetter.docx
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            {/* <li>
                                <h1 className="text-md text-stone-800/90 dark:text-stone-100 font-semibold inline-flex items-baseline gap-1 my-2"><FaRegFolderOpen /> Education</h1>
                                <ul className="ml-2 py-1 px-4 border-l-2 border-neutral-500/60 dark:border-neutral-300/60">
                                    <li>
                                        <span className="text-sm">Bachelors: </span>
                                        <Link className="text-blue-700 dark:text-sky-500">
                                            degree.pdf
                                        </Link>
                                    </li>
                                    <li>
                                        <span className="text-sm">Masters: </span>
                                        <Link className="text-blue-700 dark:text-sky-500">
                                            degree.pdf
                                        </Link>
                                    </li>
                                    <li>
                                        <span className="text-sm">PHD: </span>
                                        <Link className="text-blue-700 dark:text-sky-500">
                                            degree.docx
                                        </Link>
                                    </li>
                                </ul>
                            </li> */}
                            {/* <li>
                                <h1 className="text-md text-stone-800/90 dark:text-stone-100 font-semibold inline-flex items-baseline gap-1 my-2"><FaRegFolderOpen /> Work</h1>
                                <ul className="ml-2 py-1 px-4 border-l-2 border-neutral-500/60 dark:border-neutral-300/60">
                                    <li className="mb-2">
                                        <p>
                                            <span className="text-sm">Reference: </span>
                                            <span>Clinical Therapist at Counseling Center</span>
                                        </p>
                                        <p>
                                            <span className="text-sm">Contact: </span>
                                            <span className="text-blue-700 dark:text-sky-500">03103583219</span>
                                        </p>
                                    </li>
                                    <li className="mb-2">
                                        <p>
                                            <span className="text-sm">Reference: </span>
                                            <span>Mental Health Counselor at Mental Health</span>
                                        </p>
                                        <p>
                                            <span className="text-sm">Contact: </span>
                                            <span className="text-blue-700 dark:text-sky-500">03103583219</span>
                                        </p>
                                    </li>
                                </ul>
                            </li> */}
                        </ul>
                    </div>
                </div>

            </div>

            <div className="flex justify-end gap-2 mt-5">
                <button ref={acceptBtnRef} onClick={approveTherapist}
                    className="bg-emerald-400 hover:bg-emerald-500/70 focus:bg-emerald-500 p-2 rounded-md disabled:bg-emerald-400 disabled:hover:bg-emerald-400 disabled:text-gray-400"
                >Approve</button>

                <button ref={rejectBtnRef}
                    className="bg-rose-400 hover:bg-rose-500/70 p-2 focus:bg-rose-500 rounded-md mx-1 disabled:bg-rose-400 disabled:hover:bg-rose-400 disabled:text-gray-400"
                    onClick={rejectTherapist}
                >Reject</button>

                <button
                    className="bg-neutral-400 hover:bg-neutral-400/70 p-2 focus:bg-neutral-500 border border-neutral-800 rounded-md"
                    onClick={() => { setShowTherapist(false) }}
                >Close</button>
            </div>

        </div>
    )
}

export default AdminTherapistProfileCard