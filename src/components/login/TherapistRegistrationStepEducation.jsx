import { useEffect, useRef, useState } from "react"
import axios from "axios"
import { FaGraduationCap, FaUserDoctor } from "react-icons/fa6"

const TherapistRegistrationStepEducation = ({ handleSetTherapistStep }) => {

    const specializationOthersInput = useRef(null)

    const therapistPHDFile = useRef(null)
    const therapistMastersFile = useRef(null)
    const therapistBachelorsFile = useRef(null)


    const [isShowSpecializationOtherInput, setIsShowSpecializationOtherInput] = useState(false)

    const localStorageEducationFormData = JSON.parse(localStorage.getItem("therapistEducationForm"))

    const [therapistEducationForm, setTherapistEducationForm] = useState(localStorageEducationFormData || {
        therpistSpecializationSelect: "",
        therpistSpecializationInput: "",
        therapistBachelors: "",
        therapistMasters: "",
        therapistPHD: ""
    })

    const handleTherapistEducationFrom = (e) => {
        const { name, value } = e.currentTarget
        setTherapistEducationForm(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleShowSpecializationOtherInput = (e) => {
        const selectValue = e.currentTarget.value
        if (selectValue == "Other") {
            setIsShowSpecializationOtherInput(true)
        } else {
            setIsShowSpecializationOtherInput(false)
        }
        isShowSpecializationOtherInput && specializationOthersInput.current.focus()
    }

    useEffect(() => {
        localStorageEducationFormData?.therpistSpecializationSelect == "Other" && setIsShowSpecializationOtherInput(true)

        localStorage.setItem("therapistEducationForm", JSON.stringify(therapistEducationForm))
    }, [therapistEducationForm])

    const onSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append("therpistSpecializationSelect", therapistEducationForm.therpistSpecializationSelect)
        formData.append("therpistSpecializationInput", therapistEducationForm.therpistSpecializationInput)
        formData.append("therapistBachelors", therapistEducationForm.therapistBachelors)
        formData.append("therapistMasters", therapistEducationForm.therapistMasters)
        formData.append("therapistPHD", therapistEducationForm.therapistPHD)


        if (therapistPHDFile.current.files[0]) {
            formData.append("therapistPHDFile", therapistPHDFile.current.files[0])
        }
        if (therapistMastersFile.current.files[0]) {
            formData.append("therapistMastersFile", therapistMastersFile.current.files[0])
        }
        if (therapistBachelorsFile.current.files[0]) {
            formData.append("therapistBachelorsFile", therapistBachelorsFile.current.files[0])
        }

        try {
            const res = await axios.post("http://localhost:5000/api/therapists/register/education", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            console.log(res.data)
        } catch (error) {
            console.error("Error submitting form", error)
        }


    }


    return (
        <form onSubmit={onSubmit} method="post" className="w-full">
            <div className="rounded-lg grid grid-cols-2 gap-y-4 gap-x-3 mx-5 mt-4">
                <h2 className="col-span-2 border-b pb-1 text-md font-semibold text-neutral-600 dark:text-neutral-200 flex gap-2 items-center"> <FaGraduationCap /> Enter your Education information</h2>

                <div className={`col-span-2 ${isShowSpecializationOtherInput && "md:col-span-1"} `}>
                    <label htmlFor="therpistSpecializationSelect" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Your Specialization</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <FaUserDoctor className="text-neutral-500" />
                        </div>
                        <select
                            id="therpistSpecializationSelect"
                            name="therpistSpecializationSelect"
                            onChange={(e) => {
                                handleShowSpecializationOtherInput(e);
                                handleTherapistEducationFrom(e);
                            }}
                            value={therapistEducationForm.therpistSpecializationSelect}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5 dark:bg-neutral-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                        >
                            <option value="Default" disabled>Choose One</option>
                            <option value="Mindfulness-Based Therapy">Mindfulness-Based Therapy</option>
                            <option value="Trauma Therapy">Trauma Therapy</option>
                            <option value="Cognitive Behavioral Therapy (CBT)">Cognitive Behavioral Therapy (CBT)</option>
                            <option value="Marriage and Family Therapy">Marriage and Family Therapy</option>
                            <option value="Eating Disorders Therapy">Eating Disorders Therapy</option>
                            <option value="Grief Counseling">Grief Counseling</option>
                            <option value="Addiction Counseling">Addiction Counseling</option>
                            <option value="Anxiety and Depression Management">Anxiety and Depression Management</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>

                {
                    isShowSpecializationOtherInput && (
                        <div className="col-span-2 md:col-span-1">
                            <label htmlFor="therpistSpecializationInput" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter your specialization</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                    <FaUserDoctor className="text-neutral-500" />
                                </div>
                                <input
                                    type="text"
                                    ref={specializationOthersInput}
                                    id="therpistSpecializationInput"
                                    name="therpistSpecializationInput"
                                    onChange={handleTherapistEducationFrom}
                                    value={therapistEducationForm.therpistSpecializationInput}
                                    placeholder="Eg: Therapist Title"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5 dark:bg-neutral-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"

                                />
                            </div>
                        </div>

                    )
                }

                <div className="grid grid-cols-3 gap-2 col-span-2 relative">
                    <div className="col-span-3 md:col-span-1 ml-2 md:ml-0">
                        <label htmlFor="therapistBachelors" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">I completed my Bachelors from</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                <FaGraduationCap className="text-neutral-500" />
                            </div>
                            <input
                                type="text"
                                id="therapistBachelors"
                                name="therapistBachelors"
                                placeholder="Eg: SZABIST, LUMS"
                                onChange={handleTherapistEducationFrom}
                                value={therapistEducationForm.therapistBachelors}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5  dark:bg-neutral-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "

                            />
                        </div>
                    </div>
                    <div className="col-span-3 md:col-span-1 ml-2 md:ml-0">
                        <label htmlFor="therapistMasters" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">I completed my Masters from</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                <FaGraduationCap className="text-neutral-500" />
                            </div>
                            <input
                                type="text"
                                id="therapistMasters"
                                name="therapistMasters"
                                onChange={handleTherapistEducationFrom}
                                value={therapistEducationForm.therapistMasters}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5  dark:bg-neutral-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                                placeholder="Eg: SZABIST, LUMS"

                            />
                        </div>
                    </div>
                    <div className="col-span-3 md:col-span-1 ml-2 md:ml-0">
                        <label htmlFor="therapistPHD" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">I completed my PHD From</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                <FaGraduationCap className="text-neutral-500" />
                            </div>
                            <input
                                type="text"
                                id="therapistPHD"
                                name="therapistPHD"
                                onChange={handleTherapistEducationFrom}
                                value={therapistEducationForm.therapistPHD}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5  dark:bg-neutral-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                                placeholder="Eg: SZABIST, LUMS"

                            />
                        </div>
                    </div>
                    <div className="col-span-2 lg:col-span-1">
                        <label htmlFor="therapistBachelorsDegree" className="text-sm font-medium text-gray-900 dark:text-white">Upload your Bachelors Degree: </label>
                        <input
                            type="file"
                            id="therapistBachelorsDegree"
                            name="therapistBachelorsDegree"
                            accept=".pdf,.docx,.doc"
                            className="w-full border border-neutral-400 p-2 mb-2 rounded-md overflow-hidden"
                            ref={therapistBachelorsFile}


                        />
                    </div>

                    <div className="col-span-2 lg:col-span-1">
                        <label htmlFor="therapistMastersDegree" className="text-sm font-medium text-gray-900 dark:text-white">Upload your Masters Degree: </label>
                        <input
                            type="file"
                            id="therapistMastersDegree"
                            name="therapistMastersDegree"
                            accept=".pdf,.docx,.doc"
                            className="w-full border border-neutral-400 p-2 mb-2 rounded-md overflow-hidden"
                            ref={therapistMastersFile}
                        />
                    </div>

                    <div className="col-span-2 lg:col-span-1">
                        <label htmlFor="therapistPHDDegree" className="text-sm font-medium text-gray-900 dark:text-white">Upload your PHD Degree: </label>
                        <input
                            type="file"
                            id="therapistPHDDegree"
                            name="therapistPHDDegree"
                            ref={therapistPHDFile}
                            accept=".jpg,.jpeg,.png,.pdf,.docx,.doc"
                            className="w-full border border-neutral-400 p-2 mb-2 rounded-md overflow-hidden"

                        />
                    </div>

                </div>
                <div className="col-span-2 flex items-center justify-center gap-2 mt-3">
                    <button type="submit" className="py-2 px-5 rounded-lg bg-gradient-to-br from-emerald-300 to-emerald-600 text-white">Save</button>
                    <button type="button" className="py-2 px-5 rounded-lg bg-gradient-to-br from-sky-300 to-sky-600 text-white" onClick={() => handleSetTherapistStep(3)}>Save & Continue</button>
                </div>
            </div>
        </form>
    )
}


export default TherapistRegistrationStepEducation