import { useEffect, useRef, useState } from "react"
import { FaCircleInfo, FaEnvelope, FaGlobe, FaHouse, FaPhone, FaRoad, FaUser } from "react-icons/fa6"
import { handlePicture } from "./logic/handlePicture"

import placeholderImgae from "/placeholderProfileImg.png"

const TherapistRegistrationStepInformation = () => {

    const therapistProfileDisplayRef = useRef(null)
    const errorRef = useRef(null)

    const [therapistPersonalForm, setTherapistPersonalForm] = useState(JSON.parse(localStorage.getItem("therapistPersonalForm")) || {
        therapistProfilePicture: "",
        therapistFullName: "",
        therapistEmail: "",
        therapistPhone: "",
        therapistEmergency: "",
        therapistAddressStreet: "",
        therapistAddressAppartment: "",
        therapistAddressCity: ""
    })

    const handleTherapistPersonalForm = (e) => {
        const { name, value } = e.currentTarget
        setTherapistPersonalForm((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    useEffect(() => {
        localStorage.setItem("therapistPersonalForm", JSON.stringify(therapistPersonalForm))
    }, [therapistPersonalForm])


    return (
        <div className="p-4 pb-0 rounded-lg w-full">
            <h2 className="border-b mb-4 pb-2 text-md font-semibold text-neutral-600 dark:text-neutral-200 flex gap-2 items-center">
                <FaCircleInfo />
                Enter your Personal information
            </h2>


            {/* <form action="" method="post"> */}
            <div className="grid grid-cols-2 gap-2 lg:gap-x-10 lg:gap-y-5">

                <div className="col-span-2">
                    <label>Upload Profile Picture</label>
                    <div className="w-[250px] border-2 border-dashed border-neutral-500 rounded-md">
                        <img
                            src={placeholderImgae}
                            ref={therapistProfileDisplayRef}
                            alt="Profile Picture"
                            className="w-full h-full aspect-square object-cover"
                        />
                    </div>
                    <p ref={errorRef} className="mt-2 text-red-500"></p>
                    <input
                        type="file"
                        id=""
                        name=""
                        accept=".jpg,.jpeg.png"
                        onChange={(e) => handlePicture(e, ["jpg", "png,", "jpeg"], 2097152, errorRef, therapistProfileDisplayRef)}
                        className="w-[250px] border border-neutral-400 p-2 mt-2 rounded-md overflow-hidden"
                    />
                </div>

                <div className="col-span-2 lg:col-span-1">
                    <label htmlFor="therapistFullname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <FaUser className="text-neutral-500" />
                        </div>
                        <input
                            type="text"
                            id="therapistFullname"
                            className="bg-gray-50 border border-neutral-200 text-gray-900 text-sm rounded-lg  block w-full ps-10 p-2.5  dark:bg-neutral-800 dark:border-neutral-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="Eg: John Doe"
                            name="therapistFullName"
                            onChange={handleTherapistPersonalForm}
                            value={therapistPersonalForm.therapistFullName}
                            pattern="[A-Za-z\s]{3,10}"
                            required
                        />
                    </div>
                </div>

                <div className="col-span-2 lg:col-span-1">
                    <label htmlFor="therapistEmail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <FaEnvelope className="text-neutral-500" />
                        </div>
                        <input
                            type="email"
                            id="therapistEmail"
                            className="bg-gray-50 border border-neutral-200 text-gray-900 text-sm rounded-lg  block w-full ps-10 p-2.5  dark:bg-neutral-800 dark:border-neutral-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="name@flowbite.com"
                            name="therapistEmail"
                            onChange={handleTherapistPersonalForm}
                            value={therapistPersonalForm.therapistEmail}
                        />
                    </div>
                </div>

                <div className="col-span-2 lg:col-span-1">
                    <label htmlFor="therapistPhone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Phone</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <FaPhone className="text-neutral-500" />
                        </div>
                        <input
                            type="tel"
                            id="therapistPhone"
                            className="bg-gray-50 border border-neutral-200 text-gray-900 text-sm rounded-lg  block w-full ps-10 p-2.5  dark:bg-neutral-800 dark:border-neutral-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="Eg: xx-xxxx-xxx"
                            name="therapistPhone"
                            onChange={handleTherapistPersonalForm}
                            value={therapistPersonalForm.therapistPhone}
                        />
                    </div>
                </div>

                <div className="col-span-2 lg:col-span-1">
                    <label htmlFor="therapistPhoneEmergency" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Emergency Phone</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <FaPhone className="text-neutral-500" />
                        </div>
                        <input
                            type="tel"
                            id="therapistPhoneEmergency"
                            className="bg-gray-50 border border-neutral-200 text-gray-900 text-sm rounded-lg  block w-full ps-10 p-2.5  dark:bg-neutral-800 dark:border-neutral-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="Eg: xx-xxxx-xxx"
                            name="therapistEmergency"
                            onChange={handleTherapistPersonalForm}
                            value={therapistPersonalForm.therapistEmergency}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-2 col-span-2 relative pt-6">
                    <span className="absolute top-0 left-0 z-10 text-sm font-medium text-gray-900 dark:text-white">Your Address</span>
                    <div className="col-span-3 md:col-span-1 ml-2 md:ml-0">
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                <FaRoad className="text-neutral-500" />
                            </div>
                            <input
                                type="text"
                                id="therapistAddressStreet"
                                className="bg-gray-50 border border-neutral-200 text-gray-900 text-sm rounded-lg  block w-full ps-10 p-2.5  dark:bg-neutral-800 dark:border-neutral-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="Street No."
                                name="therapistAddressStreet"
                                onChange={handleTherapistPersonalForm}
                                value={therapistPersonalForm.therapistAddressStreet}
                            />
                        </div>
                    </div>
                    <div className="col-span-3 md:col-span-1 ml-2 md:ml-0">
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                <FaHouse className="text-neutral-500" />
                            </div>
                            <input
                                type="text"
                                id="therapistAddressAppartment"
                                className="bg-gray-50 border border-neutral-200 text-gray-900 text-sm rounded-lg  block w-full ps-10 p-2.5  dark:bg-neutral-800 dark:border-neutral-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="Appartment No."
                                name="therapistAddressAppartment"
                                onChange={handleTherapistPersonalForm}
                                value={therapistPersonalForm.therapistAddressAppartment}
                            />
                        </div>
                    </div>
                    <div className="col-span-3 md:col-span-1 ml-2 md:ml-0">
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                <FaGlobe className="text-neutral-500" />
                            </div>
                            <input
                                type="text"
                                id="therapistAddressCity"
                                className="bg-gray-50 border border-neutral-200 text-gray-900 text-sm rounded-lg  block w-full ps-10 p-2.5  dark:bg-neutral-800 dark:border-neutral-500 dark:placeholder-gray-400 dark:text-white"
                                placeholder="City, State, Country"
                                name="therapistAddressCity"
                                onChange={handleTherapistPersonalForm}
                                value={therapistPersonalForm.therapistAddressCity}
                            />
                        </div>
                    </div>
                </div>

                <div className="col-span-2 lg:col-span-1">
                    <label htmlFor="therapistResumeCV" className="text-sm font-medium text-gray-900 dark:text-white">Upload your Reseume or CV: </label>
                    <input type="file" className="w-full border border-neutral-400 p-2 mb-2 rounded-md overflow-hidden" name="" id="therapistResumeCV" accept=".pdf,.docx,.doc" />
                </div>

                <div className="col-span-2 lg:col-span-1">
                    <label htmlFor="therapistCoverLetter" className="text-sm font-medium text-gray-900 dark:text-white">Upload your Cover Letter: </label>
                    <input type="file" className="w-full border border-neutral-400 p-2 mb-2 rounded-md overflow-hidden" name="" id="therapistResumeCV" accept=".jpg,.jpeg.png" />
                </div>

            </div>
            {/* </form > */}
        </div >
    )
}


export default TherapistRegistrationStepInformation