import axios from "axios"
import { useRef, useState, useEffect } from "react"
import AdminTherapistProfileCard from "./AdminTherapistProfileCard"


const AdminTherapists = () => {

    const [therapistData, setTherapistData] = useState([])
    const [showThatTherapist, setShowThatTherapist] = useState({})

    const [showTherapist, setShowTherapist] = useState(false)
    const viewTherapistProfileRef = useRef(null)

    const handleShowTherapist = (therapist) => {
        setShowTherapist(prev => !prev)
        setShowThatTherapist(therapist)
    }

    const getTherapists = async () => {
        try {
            const { data } = await axios.post("http://localhost:5000/api/admin/therapistRequests")
            setTherapistData(data.message)
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getTherapists()
    }, [showTherapist])




    return (
        <div className="w-100 lg:w-[90%] p-5 bg-zinc-100 rounded-lg dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100">
            <h1 className="text-lg border-b py-2">Therapist Approval</h1>

            <div className="min-h-[500px] overflow-auto p-4 bg-zinc-300 dark:bg-neutral-700/80 rounded-lg my-2">
                <table className="w-full text-left" id="userbaseTable">
                    <thead>
                        <tr>
                            <th className="p-2">ID</th>
                            <th className="p-2">Full Name</th>
                            <th className="p-2">Joined</th>
                            <th className="p-2">Documents</th>
                            <th className="p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            therapistData && therapistData.map((therapist, index) => (
                                <tr className="border-t" key={therapist.id}>
                                    <td className="p-2">{therapist.id}</td>
                                    <td className="p-2">{therapist.therapistFullName}</td>
                                    <td className="p-2">Complete</td>
                                    <td className="p-2">Unapproved</td>
                                    <td className="p-2">
                                        <span
                                            className="font-semibold cursor-pointer"
                                            ref={viewTherapistProfileRef}
                                            onClick={() => handleShowTherapist(therapist, index)}
                                        >
                                            View Request
                                        </span>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

            {
                showTherapist &&
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                    <AdminTherapistProfileCard setShowTherapist={setShowTherapist} showThatTherapist={showThatTherapist} />
                </div>
            }
        </div>
    )
}

export default AdminTherapists