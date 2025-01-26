import { useEffect, useRef, useState } from "react"
import axios from "axios"

import { FaCheck, FaCircleInfo, FaEnvelope, FaGlobe, FaHouse, FaKey, FaPhone, FaRoad, FaUser, FaXmark } from "react-icons/fa6"

import { lineSpinner } from 'ldrs'
import { handlePicture } from "../logic/handlePicture"
import placeholderImgae from "/placeholderProfileImg.png"


import sanitizeString from "../../lib/sanitizeString"
import sanitizeNumber from "../../lib/sanitizeNumber"
import sanitizeEmail from "../../lib/sanitizeEmail"
import sanitizePassword from "../../lib/sanitizePassword"


const TherapistRegistrationStepInformation = () => {

    lineSpinner.register()

    const therapistProfileDisplayRef = useRef(null)
    const therapistResumeRef = useRef(null)
    const therapistCoverLetterRef = useRef(null)
    const errorRef = useRef(null)
    const submitSaveNextbtn = useRef(null)


    const [formError, setFormError] = useState("");

    const [therapistPersonalForm, setTherapistPersonalForm] = useState(JSON.parse(localStorage.getItem("therapistPersonalForm")) || {
        therapistProfilePicture: "",
        therapistFullName: "",
        therapistEmail: "",
        therapistPassword: "",
        therapistPhone: "",
        therapistEmergency: "",
        therapistAddressStreet: "",
        therapistAddressAppartment: "",
        therapistAddressCity: "",
        role: "therapist"
    })

    const handleTherapistPersonalForm = (e) => {
        const { name, value } = e.currentTarget
        let sanitizedValue
        switch (name) {
            case "therapistFullName":
                sanitizedValue = sanitizeString(value)
                break;

            case "therapistPhone":
                sanitizedValue = sanitizeNumber(value)
                break;

            case "therapistEmail":
                sanitizedValue = sanitizeEmail(value)
                break;

            case "therapistPassword":
                sanitizedValue = sanitizePassword(value)
                break;

            case "therapistEmergency":
                sanitizedValue = sanitizeNumber(value)
                break;

            case "therapistAddressStreet":
                sanitizedValue = sanitizePassword(value)
                break;

            case "therapistAddressAppartment":
                sanitizedValue = sanitizePassword(value)
                break;

            case "therapistAddressCity":
                sanitizedValue = sanitizePassword(value)
                break;

            default:
                break;
        }
        setTherapistPersonalForm((prev) => ({
            ...prev,
            [name]: sanitizedValue
        }))
    }

    const handleThrapistProfileFile = (e) => {
        const picture = handlePicture(e, ["jpg", "png,", "jpeg"], 2097152, errorRef, therapistProfileDisplayRef)
        if (picture) {
            setTherapistPersonalForm((prev) => ({
                ...prev,
                therapistProfilePicture: picture
            }))
        }
    }

    useEffect(() => {
        localStorage.setItem("therapistPersonalForm", JSON.stringify(therapistPersonalForm))
    }, [therapistPersonalForm])

    const onSubmit = async (e) => {
        e.preventDefault()
        submitSaveNextbtn.current.disabled = true

        document.getElementById("submitText").classList.add("hidden")
        document.getElementById("submitLoader").classList.remove("hidden")


        // Create FormData to append all fields, including files
        const formData = new FormData()
        formData.append("therapistProfilePicture", therapistPersonalForm.therapistProfilePicture)
        formData.append("therapistFullName", therapistPersonalForm.therapistFullName)
        formData.append("therapistEmail", therapistPersonalForm.therapistEmail)
        formData.append("therapistPassword", therapistPersonalForm.therapistPassword)
        formData.append("therapistPhone", therapistPersonalForm.therapistPhone)
        formData.append("therapistEmergency", therapistPersonalForm.therapistEmergency)
        formData.append("therapistAddressStreet", therapistPersonalForm.therapistAddressStreet)
        formData.append("therapistAddressAppartment", therapistPersonalForm.therapistAddressAppartment)
        formData.append("therapistAddressCity", therapistPersonalForm.therapistAddressCity)
        formData.append("role", therapistPersonalForm.role)

        // Append files using refs
        if (therapistResumeRef.current.files[0]) {
            formData.append("therapistResumeCV", therapistResumeRef.current.files[0])
        }
        if (therapistCoverLetterRef.current.files[0]) {
            formData.append("therapistCoverLetter", therapistCoverLetterRef.current.files[0])
        }

        try {
            const { data } = await axios.post("https://mhes-backend.vercel.app/api/therapists/register/information", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            const therapistUID = data?.data?.uid;

            if (therapistUID) {
                localStorage.setItem("uid", therapistUID);
                setFormError("Success: Data Saved Successfully");
                document.getElementById("submitLoader").classList.add("hidden")
                document.getElementById("submitCheck").classList.remove("hidden")
            } else {
                setFormError("Error: Failed to save data");
                document.getElementById("submitLoader").classList.add("hidden")
                document.getElementById("submitError").classList.remove("hidden")
            }
        } catch (error) {
            const errorMsg = error?.response?.data?.error || "An unexpected error occurred";
            setFormError(`Error: ${errorMsg}`);
            console.error("Error submitting form:", errorMsg);
        } finally {
            submitSaveNextbtn.current.disabled = false;
            setTimeout(() => {
                document.getElementById("submitText").classList.remove("hidden")
                document.getElementById("submitLoader").classList.add("hidden")
                document.getElementById("submitError").classList.add("hidden")
                document.getElementById("submitCheck").classList.add("hidden")
            }, 2000);
        }

    }


    return (
        <div className="p-4 pb-0 rounded-lg w-full">
            <h2 className="border-b mb-4 pb-2 text-md font-semibold text-neutral-600 dark:text-neutral-200 flex gap-2 items-center">
                <FaCircleInfo />
                Enter your Personal information
            </h2>


            <form onSubmit={onSubmit} method="post">
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
                            name="therapistProfilePicture"
                            id=""
                            accept=".jpg,.jpeg.png"
                            onChange={handleThrapistProfileFile}
                            className="w-[250px] border border-neutral-400 p-2 mt-2 rounded-md overflow-hidden"
                            required
                        />
                    </div>

                    <div className="col-span-2 grid grid-cols-1 lg:grid-cols-3 gap-2">
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
                                    // pattern="[A-Za-z\s]{3,10}"
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
                                    required
                                />
                            </div>
                        </div>

                        <div className="col-span-2 lg:col-span-1">
                            <label htmlFor="therapistEmail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Password</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                    <FaKey className="text-neutral-500" />
                                </div>
                                <input
                                    type="password"
                                    id="therapistPassword"
                                    className="bg-gray-50 border border-neutral-200 text-gray-900 text-sm rounded-lg  block w-full ps-10 p-2.5  dark:bg-neutral-800 dark:border-neutral-500 dark:placeholder-gray-400 dark:text-white"
                                    placeholder="At least 6 Characters"
                                    name="therapistPassword"
                                    onChange={handleTherapistPersonalForm}
                                    value={therapistPersonalForm.therapistPassword}
                                    required
                                />
                            </div>
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
                                required
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
                                required
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
                                    required
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
                                    required
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
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-span-2 lg:col-span-1">
                        <label htmlFor="therapistResumeCV" className="text-sm font-medium text-gray-900 dark:text-white">Upload your Reseume or CV: </label>
                        <input type="file" className="w-full border border-neutral-400 p-2 mb-2 rounded-md overflow-hidden" name="" ref={therapistResumeRef} id="therapistResumeCV" accept=".pdf,.docx,.doc" required />
                    </div>

                    <div className="col-span-2 lg:col-span-1">
                        <label htmlFor="therapistCoverLetter" className="text-sm font-medium text-gray-900 dark:text-white">Upload your Cover Letter: </label>
                        <input type="file" className="w-full border border-neutral-400 p-2 mb-2 rounded-md overflow-hidden" name="" ref={therapistCoverLetterRef} id="therapistCoverLetter" accept=".pdf,.docx,.doc,.jpg,.jpeg.png" required />
                    </div>

                </div>
                {
                    formError && <p className="text-center">{formError}</p>
                }
                <div className="col-span-2 flex items-center justify-center gap-2 mt-3">
                    {/* <button type="button" onClick={() => handleSetTherapistStep(2)} className="py-2 px-5 rounded-lg border-2 border-emerald-400 hover:bg-emerald-400 disabled:border-emerald-300 disabled:text-stone-500 transition-colors text-black ">Save</button> */}
                    <button type="submit" ref={submitSaveNextbtn} className="flex justify-center items-center py-2 px-5 rounded-lg bg-gradient-to-br from-sky-300 to-sky-600 hover:from-sky-400 hover:to-sky-700 disabled:from-sky-200 disabled:to-sky-500 disabled:text-stone-200 text-white">
                        <span id="submitText">Create Profile</span>
                        <span id="submitLoader" className="hidden"><l-line-spinner size={16} /></span>
                        <span id="submitCheck" className="hidden"> <FaCheck /> </span>
                        <span id="submitError" className="hidden"> <FaXmark /> </span>
                    </button>
                </div>
            </form >
        </div >
    )
}


export default TherapistRegistrationStepInformation