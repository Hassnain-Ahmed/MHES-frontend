import axios from "axios";
import { useEffect } from "react";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const PatientTherapistGig = ({ handleGigToggle }) => {

    // const { setIdParams } = props

    // const getThatTherapist = async (req, res) => {
    //     try {
    //         const { data } = await axios.post("http://localhost:5000/api/users/getThatTherapist", { therapistId })

    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    // useEffect(() => {
    //     getThatTherapist()
    // }, [0])

    return (
        <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center">

            <div className="p-5 rounded-lg bg-neutral-300/70 backdrop-blur-md relative">
                <span onClick={handleGigToggle} className="absolute right-2 top-2 cursor-pointer"><FaXmark /></span>
                some Data
            </div>
        </div>
    )
}
