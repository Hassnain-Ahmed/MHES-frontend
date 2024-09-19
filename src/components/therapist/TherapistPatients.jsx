import axios from "axios"
import { useEffect, useState } from "react"

const imgPlaceholder = "/placeholderProfileImg.png"

const TherapistPatients = () => {
    // JSON.parse(localStorage.getItem("myPatients"))
    const [paitnets, setPatients] = useState([])

    const getPatinets = async () => {
        try {
            const therapistDocId = JSON.parse(localStorage.getItem("credentials")).response.docId
            const { data } = await axios.post("http://localhost:5000/api/therapists/getPatients", { therapistDocId })
            console.log(data);
            setPatients(data.message == " " && data.message)
            localStorage.setItem("myPatients", JSON.stringify(data.message))
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getPatinets()
    }, [])

    return (
        <div className="p-5 dark:bg-neutral-800 rounded">
            <h1 className="text-2xl dark:text-neutral-300 border-b-2">My Patients</h1>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 my-4">
                {
                    paitnets &&
                    paitnets.map((patient) =>
                    (<li key={patient.userId} className="dark:bg-neutral-700 p-4 rounded-md shadow-lg overflow-auto dark:text-neutral-50 flex flex-col lg:flex-row gap-2">
                        <div>
                            <img src={patient.userData.profileUrl || imgPlaceholder} alt="" className="w-24 aspect-square object-cover rounded-lg" />
                        </div>

                        <div className="flex flex-col justify-between">
                            <div>
                                <p className="text-lg font-semibold">{patient.userData.name}</p>
                                <p className="text-gray-400 capitalize">{patient.planData.plan} plan User</p>
                                <p className="text-md ">{patient.userData.email}</p>
                            </div>
                            <p>
                                <span className="bg-gradient-to-br from-emerald-500 to-emerald-700 py-1 px-2 rounded-lg text-sm">Active Subscriber</span>
                            </p>
                        </div>
                    </li>
                    ))
                }

            </ul>

        </div>
    )
}

export default TherapistPatients