import { useEffect, useState } from "react"
import { PatientTherapistBanner } from "./PatientTherapistBanner"

const PatientListings = () => {


    const data = JSON.parse(localStorage.getItem("credentials"))

    const [therapistData, setTherapistData] = useState(data)
    const [showGig, setShowGig] = useState(false)
    const [therapistId, setTherapistId] = useState("")

    const handleGigToggle = (e) => {
        setTherapistId(e.currentTarget.getAttribute("aria-valuetext"))
        setShowGig(prev => !prev)
        console.log(therapistData);
    }

    return (
        <div className="p-5 relative">

            <PatientTherapistBanner heading="Therapist Listings" />

        </div>
    )
}

export default PatientListings