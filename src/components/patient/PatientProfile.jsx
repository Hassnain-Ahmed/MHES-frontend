import { useState, useRef, useEffect } from "react"
import { lineSpinner } from 'ldrs'
import axios from "axios"
import { handlePicture } from "../logic/handlePicture"
import placeholderImage from "/placeholderProfileImg.png"
import { FaCheck, FaXmark } from "react-icons/fa6"


import sanitizeString from "../../lib/sanitizeString"
import sanitizeNumber from "../../lib/sanitizeNumber"
import sanitizeEmail from "../../lib/sanitizeEmail"
import sanitizePassword from "../../lib/sanitizePassword"


const PatientProfile = ({ userData }) => {

    lineSpinner.register()

    const errorRef = useRef(null)
    const displayRef = useRef(null)
    const submitButton = useRef(null)

    const [patientProfileForm, setPatientProfileForm] = useState({
        fullname: "",
        contact: "",
        email: "",
        password: "",
        gender: "",
        profile: "",
        profileUrl: "",
    });

    // State to manage error messages and form submission status
    const [formStatus, setFormStatus] = useState(null);

    // Handling form inputs
    const handleForm = (e) => {
        const { name, value, files } = e.target;

        let sanitizedValue
        switch (name) {
            case "fullname":
                sanitizedValue = sanitizeString(value)
                break;

            case "contact":
                sanitizedValue = sanitizeNumber(value)
                break;

            case "email":
                sanitizedValue = sanitizeEmail(value)
                break;

            case "password":
                sanitizedValue = sanitizePassword(value)
                break;

            case "gender":
                sanitizedValue = sanitizeString(value)
                break;

            default:
                break;
        }

        setPatientProfileForm({
            ...patientProfileForm,
            [name]: files ? files[0] : sanitizedValue
        });
    };


    const handleUserProfile = (e) => {
        const picture = handlePicture(e, ["jpg", "png,", "jpeg"], 2097152, errorRef, displayRef)
        if (picture) {
            setPatientProfileForm((prev) => ({
                ...prev,
                profile: picture
            }))
        }
    }

    const getProfileData = async () => {
        try {
            const userId = JSON.parse(localStorage.getItem("credentials")).response.user.uid;
            // Wrap the userId inside an object as the payload
            const { data } = await axios.post("http://localhost:5000/api/users/getProfile", { userId });
            setPatientProfileForm(data.message)
        } catch (error) {
            console.error("Error fetching profile data:", error);
        }
    }

    useEffect(() => {
        getProfileData();
    }, []);


    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        document.getElementById("submitText").classList.add("hidden")
        document.getElementById("submitLoader").classList.remove("hidden")


        const formData = new FormData();
        const userId = JSON.parse(localStorage.getItem("credentials"));
        // Append form fields to FormData
        formData.append("userId", userId.response.user.uid);
        formData.append("fullname", patientProfileForm.fullname);
        formData.append("contact", patientProfileForm.contact);
        formData.append("email", patientProfileForm.email);
        formData.append("password", patientProfileForm.password);
        formData.append("gender", patientProfileForm.gender);

        // Append image file only if available
        if (patientProfileForm.profile) {
            formData.append("profile", patientProfileForm.profile);
        }

        try {
            // API request to update profile
            const { data } = await axios.post(`http://localhost:5000/api/users/profile`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            });

            if (data?.message != "User updated successfully") {
                setFormStatus(data.message);
                return;
            } else {
                console.log("Profile updated successfully", data);
                setFormStatus(data.message);
            }
            document.getElementById("submitLoader").classList.add("hidden")
            document.getElementById("submitCheck").classList.remove("hidden")


        } catch (error) {
            console.error("Profile Update Error:", error);
            setFormStatus("Something went wrong, please try again.");
        } finally {
            if (submitButton.current) {
                submitButton.current.disabled = false;
                setTimeout(() => {
                    document.getElementById("submitText").classList.remove("hidden")
                    document.getElementById("submitLoader").classList.add("hidden")
                    document.getElementById("submitError").classList.add("hidden")
                    document.getElementById("submitCheck").classList.add("hidden")
                    setFormStatus(false);
                }, 2000);
            }
        }
    }



    return (
        <div className="rounded-md p-5 bg-stone-200 dark:bg-stone-800">
            <h1 className="text-neutral-700 dark:text-neutral-200 text-2xl border-b-2 dark:border-neutral-400  border-neutral-400">Profile</h1>


            <form method="post" onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="flex flex-col lg:flex-row gap-x-5 bg-stone-300 dark:bg-stone-700 my-2 px-4 py-3 rounded-lg">

                    <div className="w-auto ">

                        <div className="flex flex-col">

                            <div>
                                <div className="flex flex-col items-center justify-center">
                                    <img ref={displayRef} className="rounded-full w-60 h-60 my-2" alt="" src={patientProfileForm?.profileUrl
                                        ? patientProfileForm.profileUrl
                                        : patientProfileForm?.profile
                                            ? URL.createObjectURL(patientProfileForm.profile)
                                            : placeholderImage} />
                                </div>
                                <p ref={errorRef} className="text-red-400"></p>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input
                                ">Upload Profile</label>
                                <input
                                    className="block w-full text-sm text-gray-900 border border-gray-300 p-1 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                    id="file_input"
                                    name="profile"
                                    type="file"
                                    accept=".jpg,.pnd,.jpeg"
                                    onChange={handleUserProfile}
                                />
                            </div>

                            <div className="my-4 text-gray-100 bg-gray-600 p-2 rounded-md">
                                <h1 className="text-md">Subscription Status: </h1>
                                <ul className="mx-2">
                                    <li className="text-emerald-400 p-1 px-3 rounded-xl">{userData?.plan} Member</li>
                                </ul>
                            </div>

                        </div>
                    </div>

                    <div className="flex flex-col gap-y-5 w-full">

                        <div className="flex flex-col">
                            <label className="text-neutral-800 dark:text-neutral-100" htmlFor="PatientName">Name: </label>
                            <input
                                name="fullname"
                                key={"inp" + 2}
                                type="text"
                                placeholder="Eg: Jhon Doe"
                                value={patientProfileForm.fullname}
                                onChange={handleForm}
                                id="PatientName"
                                className="rounded-md p-2 text-neutral-800 dark:text-neutral-900 bg-neutral-100 dark:bg-neutral-300 focus:bg-white focus:dark:bg-white"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-neutral-800 dark:text-neutral-100" htmlFor="PatientUsername">Contact: </label>
                            <input
                                name="contact"
                                key={"inp" + 3}
                                type="text"
                                placeholder="Eg: doejhon123"
                                value={patientProfileForm.contact}
                                onChange={handleForm}
                                id="PatientContact"
                                className="rounded-md p-2 text-neutral-800 dark:text-neutral-900 bg-neutral-100 dark:bg-neutral-300 focus:bg-white focus:dark:bg-white"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-neutral-800 dark:text-neutral-100" htmlFor="PatientEmail">Email: </label>
                            <input
                                name="email"
                                key={"inp" + 4}
                                type="text"
                                placeholder="Eg: yourmail@mail.com"
                                value={patientProfileForm.email}
                                onChange={handleForm}
                                id="PatientEmail"
                                className="rounded-md p-2 text-neutral-800 dark:text-neutral-900 bg-neutral-100 dark:bg-neutral-300 focus:bg-white focus:dark:bg-white"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-neutral-800 dark:text-neutral-100" htmlFor="PatientPassword">Password: </label>
                            <input
                                name="password"
                                key={"inp" + 5}
                                type="password"
                                placeholder="Should contaim at least 8 unique characters"
                                value={patientProfileForm.password}
                                onChange={handleForm}
                                id="PatientPassword"
                                className="rounded-md p-2 text-neutral-800 dark:text-neutral-900 bg-neutral-100 dark:bg-neutral-300 focus:bg-white focus:dark:bg-white"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-neutral-800 dark:text-neutral-100" htmlFor="PatientGender">Gender: </label>
                            <select name="gender" onChange={handleForm} id="PatientGender" className="rounded-md p-2 text-neutral-800 dark:text-neutral-900 bg-neutral-100 dark:bg-neutral-300 focus:bg-white focus:dark:bg-white">
                                {
                                    patientProfileForm.gender === "" && (
                                        <option value="">Select Gender</option>
                                    )
                                }

                                {
                                    patientProfileForm.gender === "Male" ? (
                                        <>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Other">Other</option>
                                        </>
                                    ) : patientProfileForm.gender === "Female" ? (
                                        <>
                                            <option value="Female">Female</option>
                                            <option value="Male">Male</option>
                                            <option value="Other">Other</option>
                                        </>
                                    ) : (
                                        <>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Other">Other</option>
                                        </>
                                    )
                                }
                            </select>

                        </div>

                        {
                            formStatus && <p className="dark:text-white">{formStatus}</p>
                        }

                        <div className="my-2">
                            <button type="submit" ref={submitButton} className="flex justify-center shadow-md bg-slate-300 hover:bg-gray-800 hover:text-gray-300 transition-colors duration-300 text-gray-600 font-bold px-5 py-2 rounded-3xl w-full">
                                <span id="submitText"> Update Profile</span>
                                <span id="submitLoader" className="hidden"><l-line-spinner size={16} /></span>
                                <span id="submitCheck" className="hidden"> <FaCheck /> </span>
                                <span id="submitError" className="hidden"> <FaXmark /> </span>
                            </button>
                        </div>
                    </div>
                </div>
            </form>


        </div >
    )
}

export default PatientProfile