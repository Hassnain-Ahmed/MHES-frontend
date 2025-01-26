import axios from "axios";
import { useEffect, useRef, useState } from "react"
import { FaBan, FaTrash } from "react-icons/fa6";
import { Link } from "react-router-dom";


const AdminUsers = () => {

    const [showTherapistDeleteModal, setShowTherapistDeleteModal] = useState(false)
    const [showUserDeleteModal, setShowUserDeleteModal] = useState(false)

    const [patients, setPatients] = useState([])
    const [therapists, setTherapists] = useState([])
    const [isShowTherapistCount, setIsShowTherapistCount] = useState(false)

    const [isShowTherapist, setIsShowTherapist] = useState(false)

    const [userId, setUserId] = useState("")
    const [therapistId, setTherapistId] = useState("")

    const [patientSuccessStatus, setPatientSuccessStatus] = useState(false)
    const [therapistSuccessStatus, setTherapistSuccessStatus] = useState(false)

    const selectUserbaseInputRef = useRef(null)

    const therapistDeleteBtnRef = useRef(null)
    const userDeleteBtnRef = useRef(null)



    const getPatients = async () => {
        try {
            const { data } = await axios.post("https://mhes-backend.vercel.app/api/admin/patients")
            console.log(data.message);
            setPatients(data.message)
        } catch (error) {
            console.error(error);
        }

    }

    const getTherapists = async () => {
        try {
            const { data } = await axios.post("https://mhes-backend.vercel.app/api/admin/therapists")
            console.log(data.message);
            setTherapists(data.message)
        } catch (error) {
            console.error(error);
        }

    }

    const deletePatient = async () => {
        try {
            userDeleteBtnRef.current.disabled = true
            const { data } = await axios.post("https://mhes-backend.vercel.app/api/admin/deletePatient", { id: userId })
            console.log(data);
        } catch (error) {
            console.error(error);
        } finally {
            userDeleteBtnRef.current.disabled = false
            setPatientSuccessStatus(prev => !prev)
            setShowUserDeleteModal(false)
        }
    }

    useEffect(() => {
        getPatients()
    }, [patientSuccessStatus])


    const deleteTherapist = async () => {
        try {
            therapistDeleteBtnRef.current.disabled = true
            const { data } = await axios.post("https://mhes-backend.vercel.app/api/admin/deleteTherapist", { id: therapistId })
            console.log(data);
        } catch (error) {
            console.error(error);
        } finally {
            therapistDeleteBtnRef.current.disabled = false
            setTherapistSuccessStatus(prev => !prev)
            setShowTherapistDeleteModal(false)
        }
    }

    useEffect(() => {
        getTherapists()
    }, [therapistSuccessStatus])







    const handleShowTherapistDeleteModal = (therapistId) => {
        setTherapistId(therapistId)
        console.log("therapist:", therapistId);
        setShowTherapistDeleteModal(true)
    }

    const handleShowUserDeleteModal = (userId) => {
        setUserId(userId)
        console.log("user: ", userId);
        setShowUserDeleteModal(true)
    }

    const handleSelectUserbaseInputRef = () => {
        if (selectUserbaseInputRef.current.value == "Therapists") {
            setIsShowTherapist(true)
            setIsShowTherapistCount(true)
        }
        else {
            setIsShowTherapist(false)
            setIsShowTherapistCount(false)
        }
    }

    return (
        <div className="w-100 lg:w-[90%] p-5 bg-zinc-100 rounded-lg dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100">
            <div>
                <h1 className="text-lg border-b py-2 font-semibold">Userbase</h1>

                <div className="my-2 mx-2">
                    <label htmlFor="selectInputUserbase">Select userbase: </label>
                    <select
                        name=""
                        id="selectInputUserbase"
                        className="p-2 rounded-md w-[200px] dark:bg-neutral-600"
                        onChange={handleSelectUserbaseInputRef}
                        ref={selectUserbaseInputRef}
                    >
                        <option value="Patinets">Patinets</option>
                        <option value="Therapists">Therapists</option>
                    </select>
                    <span className="mx-2 text-sm block md:inline">Total Users: {isShowTherapistCount ? therapists.length : patients.length}</span>
                </div>
            </div>

            {
                !isShowTherapist &&
                <div className="min-h-[500px] overflow-auto p-4 bg-zinc-300 dark:bg-neutral-700/80 rounded-lg">
                    <table className="w-full text-left" id="userbaseTable">
                        <thead>
                            <tr>
                                <th className="p-2">Id.</th>
                                <th className="p-2">Full Name</th>
                                <th className="p-2">Email</th>
                                <th className="p-2">Contact</th>
                                <th className="p-2">Joined</th>
                                <th className="p-2">Plan</th>
                                <th className="p-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                patients && patients.map(patient => (
                                    <tr className="border-t" key={patient.id}>
                                        <td className="p-2">{patient.id}</td>
                                        <td className="p-2 capitalize">{patient.fullname}</td>
                                        <td className="p-2 ">{patient.email}</td>
                                        <td className="p-2 ">{patient.contact}</td>
                                        <td className="p-2">{new Date(patient.createdAt).toLocaleString()}</td>
                                        <td className="p-2">{patient?.subscription?.plan || "Trail"}</td>
                                        <td className="p-2">
                                            <div className="flex gap-2">
                                                {/* <div
                                                    aria-valuetext="yesBan"
                                                    className="p-2 cursor-pointer group"
                                                    ref={userBanBtnRef}
                                                    onClick={handleShowUserBanModal}
                                                >
                                                    <FaBan title="Ban User" className="text-neutral-600 group-hover:text-neutral-900 dark:text-neutral-300 dark:group-hover:text-neutral-100" />
                                                </div> */}

                                                <div
                                                    className="p-2 cursor-pointer group"
                                                    onClick={() => handleShowUserDeleteModal(patient.id)}
                                                >
                                                    <FaTrash title="Delete User" className="text-red-400 group-hover:text-red-500" />
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            }

            {
                isShowTherapist && (
                    <div className="min-h-[500px] overflow-auto p-4 bg-zinc-300 dark:bg-neutral-700/80 rounded-lg">
                        <table className="w-full text-left" id="userbaseTable">
                            <thead>
                                <tr>
                                    <th className="p-2">ID</th>
                                    <th className="p-2">Full Name</th>
                                    <th className="p-2">Email</th>
                                    <th className="p-2">Phone</th>
                                    <th className="p-2">Resume</th>
                                    <th className="p-2">Cover Letter</th>
                                    <th className="p-2">Patients</th>
                                    <th className="p-2">Address</th>
                                    <th className="p-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    therapists && therapists.map(therapist => (
                                        <tr className="border-t" key={therapist.id}>
                                            <td className="p-2">{therapist.id}</td>
                                            <td className="p-2 capitalize">{therapist.therapistFullName}</td>
                                            {/* <td className="p-2">{new Date(therapist.createdAt).toLocaleString()}</td> */}
                                            <td className="p-2">{therapist.therapistEmail}</td>
                                            <td className="p-2">{therapist.therapistPhone}</td>
                                            <td className="p-2"><a href={therapist.resumeFileURL} className="text-blue-400" target="_blank">Document</a> </td>
                                            <td className="p-2"><a href={therapist.coverLetterURL} className="text-blue-400" target="_blank">Document</a></td>
                                            <td className="p-2">{therapist?.subscribers?.length || 0}</td>
                                            <td className="p-2">{`${therapist.therapistAddressAppartment}, ${therapist.therapistAddressStreet}, ${therapist.therapistAddressCity}`}</td>
                                            <td className="p-2">
                                                <div className="flex gap-2">
                                                    {/* <div
                                                        aria-valuetext="yesBan"
                                                        className="p-2 cursor-pointer group"
                                                        ref={userBanBtnRef}
                                                        onClick={handleShowUserBanModal}
                                                    >
                                                        <FaBan title="Ban User" className="text-neutral-600 group-hover:text-neutral-900 dark:text-neutral-300 dark:group-hover:text-neutral-100" />
                                                    </div> */}

                                                    <div
                                                        aria-valuetext="yesDelete"
                                                        className="p-2 cursor-pointer group"
                                                        onClick={() => handleShowTherapistDeleteModal(therapist.id)}
                                                    >
                                                        <FaTrash title="Delete User" className="text-red-400 group-hover:text-red-500" />
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                )
            }



            {/* {
                showUserBanModal &&
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                    <div className="dark:bg-neutral-700 bg-neutral-400 rounded-lg p-4 m-4">
                        <p className="text-lg my-2">Are you Sure you want to <b>ban</b> this User?</p>
                        <button className="mx-2 p-2 rounded-md bg-red-400 hover:bg-red-500 transition-colors">Yes</button>
                        <button className="mx-2 p-2 rounded-md bg-neutral-200 hover:bg-neutral-300 transition-colors text-neutral-900" onClick={() => { setShowUserModal(false) }}>Cancel</button>
                    </div>
                </div>
            } */}

            {
                showTherapistDeleteModal &&
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                    <div className="dark:bg-neutral-700 bg-neutral-400 rounded-lg p-4 m-4">
                        <p className="text-lg my-2">Are you Sure you want to <b>Delete</b> this Therapist?</p>
                        <button className="mx-2 p-2 rounded-md bg-red-400 hover:bg-red-500 transition-colors disabled:bg-red-400 disabled:hover:bg-red-400 disabled:text-neutral-400" ref={therapistDeleteBtnRef} onClick={deleteTherapist}>Yes</button>
                        <button className="mx-2 p-2 rounded-md bg-neutral-200 hover:bg-neutral-300 transition-colors text-neutral-900" onClick={() => { setShowTherapistDeleteModal(false) }}>Cancel</button>
                    </div>
                </div>
            }
            {
                showUserDeleteModal &&
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                    <div className="dark:bg-neutral-700 bg-neutral-400 rounded-lg p-4 m-4">
                        <p className="text-lg my-2">Are you Sure you want to <b>Delete</b> this User?</p>
                        <button className="mx-2 p-2 rounded-md bg-red-400 hover:bg-red-500 transition-colors disabled:bg-red-400 disabled:hover:bg-red-400 disabled:text-neutral-400" ref={userDeleteBtnRef} onClick={deletePatient}>Yes</button>
                        <button className="mx-2 p-2 rounded-md bg-neutral-200 hover:bg-neutral-300 transition-colors text-neutral-900" onClick={() => { setShowUserDeleteModal(false) }}>Cancel</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default AdminUsers