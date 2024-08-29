import { useEffect, useRef, useState } from "react"
import { FaGraduationCap, FaUserDoctor } from "react-icons/fa6"

const TherapistRegistrationStepEducation = () => {

    const specializationOthersInput = useRef(null)
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
        console.table(therapistEducationForm)
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
        localStorageEducationFormData.therpistSpecializationSelect == "Other" && setIsShowSpecializationOtherInput(true)

        localStorage.setItem("therapistEducationForm", JSON.stringify(therapistEducationForm))
    }, [therapistEducationForm])

    return (
        <form action="" method="post" className="w-full">
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
                            required
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
                                    required
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
                                required
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
                                required
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
                                required
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
                            required
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
                        />
                    </div>

                    <div className="col-span-2 lg:col-span-1">
                        <label htmlFor="therapistPHDDegree" className="text-sm font-medium text-gray-900 dark:text-white">Upload your PHD Degree: </label>
                        <input
                            type="file"
                            id="therapistPHDDegree"
                            name="therapistPHDDegree"
                            accept=".jpg,.jpeg.png"
                            className="w-full border border-neutral-400 p-2 mb-2 rounded-md overflow-hidden"
                            required
                        />
                    </div>
                </div>
            </div>
        </form>
    )
}


export default TherapistRegistrationStepEducation