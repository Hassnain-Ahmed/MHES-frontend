import { useEffect, useState } from "react"
import { FaAlignLeft, FaBriefcase, FaBriefcaseMedical, FaClock, FaUser } from "react-icons/fa6"

const TherapistRegistrationStepExperience = () => {

    const [therapistExperienceForm, setTherapistExperienceForm] = useState(JSON.parse(localStorage.getItem("therapistExperienceForm")) || {
        therapistExperienceOneInput: "",
        therapistExperienceOneSelectYears: "",
        therapistExperienceOneDesctiption: "",
        therapistExperienceTwoInput: "",
        therapistExperienceTwoDesctiption: ""
    })

    const handleTherapistExperienceForm = (e) => {
        const { name, value } = e.currentTarget
        setTherapistExperienceForm(prev => ({
            ...prev,
            [name]: value
        }))
    }

    useEffect(() => {
        localStorage.setItem("therapistExperienceForm", JSON.stringify(therapistExperienceForm))
    }, [therapistExperienceForm])

    return (
        <form action="" method="post" className="w-full">
            <div className="rounded-lg grid grid-cols-2 gap-x-3 mx-5 mt-4">

                <h2 className="col-span-2 border-b pb-1 text-md font-semibold text-neutral-600 dark:text-neutral-200 flex gap-2 items-center">
                    <FaBriefcaseMedical />
                    Enter your Experience information
                </h2>

                <p className="col-span-2 my-4">
                    <span className="bg-yellow-200/50 p-1 rounded">Enter your two most accomplished work Experiences</span>
                </p>


                <div className="col-span-2 lg:col-span-1 grid grid-cols-2 gap-1">
                    <label htmlFor="therapistExperienceOneInput" className="col-span-2 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Work Experience: </label>
                    <div className="relative">
                        <div className="absolute top-3 start-0 flex items-center ps-3.5 pointer-events-none">
                            <FaBriefcase className="text-neutral-500" />
                        </div>
                        <input
                            type="text"
                            id="therapistExperienceOneInput"
                            name="therapistExperienceOneInput"
                            className="bg-gray-50 border border-neutral-200 text-gray-900 text-sm rounded-lg  block w-full ps-10 p-2.5  dark:bg-neutral-800 dark:border-neutral-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="Eg: Job Title"
                            pattern="[A-Za-z\s]{3,10}"
                            required
                            onChange={handleTherapistExperienceForm}
                            value={therapistExperienceForm.therapistExperienceOneInput}
                        />
                    </div>
                    <div className="relative">
                        <div className="absolute top-3 start-0 flex items-center ps-3.5 pointer-events-none">
                            <FaClock className="text-neutral-500" />
                        </div>
                        <select
                            id="therapistExperienceOneSelectYears"
                            name="therapistExperienceOneSelectYears"
                            className="bg-gray-50 border border-neutral-200 text-gray-900 text-sm rounded-lg  block w-full ps-8 p-2.5  dark:bg-neutral-800 dark:border-neutral-500 dark:placeholder-gray-400 dark:text-white"
                            onChange={handleTherapistExperienceForm}
                            value={therapistExperienceForm.therapistExperienceOneSelectYears}
                        >
                            <option value="Choose Years of experience">Years of experience</option>
                            <option value="Entry 0-3 Years">Entry 0-3 Years</option>
                            <option value="Experienced 3-7 Years">Experienced 3-7 Years</option>
                            <option value="Senior 7+ Years">Senior 7+ Years</option>
                        </select>
                    </div>
                    <div className="relative col-span-2">
                        <div className="absolute top-3 start-0 flex items-center ps-3.5 pointer-events-none">
                            <FaAlignLeft className="text-neutral-500" />
                        </div>
                        <textarea
                            id="therapistExperienceOneDesctiption"
                            name="therapistExperienceOneDesctiption"
                            rows={4}
                            placeholder="job Description"
                            className="bg-gray-50 border border-neutral-200 text-gray-900 text-sm rounded-lg  block w-full ps-10 p-2.5  dark:bg-neutral-800 dark:border-neutral-500 dark:placeholder-gray-400 dark:text-white"
                            onChange={handleTherapistExperienceForm}
                            value={therapistExperienceForm.therapistExperienceOneDesctiption}
                        ></textarea>
                    </div>
                    <div className="col-span-2">
                        <label htmlFor="therapistExperienceOneDocument" className="text-sm font-medium text-gray-900 dark:text-white">Upload supporting Documents: </label>
                        <input
                            type="file"
                            id="therapistExperienceOneDocument"
                            name="therapistExperienceOneDocument"
                            accept=".jpg,.jpeg.png"
                            className="w-full border border-dashed border-neutral-400 p-2 mb-2 rounded-md overflow-hidden"
                        />
                    </div>
                </div>

                <div className="col-span-2 lg:col-span-1 grid grid-cols-2 gap-1">
                    <label htmlFor="therapistExperienceTwoInput" className="col-span-2 block mb-2 text-sm font-medium text-gray-900 dark:text-white opacity-100 lg:opacity-0">Work Experience: </label>
                    <div className="relative col-span-2">
                        <div className="absolute top-3 start-0 flex items-center ps-3.5 pointer-events-none">
                            <FaBriefcase className="text-neutral-500" />
                        </div>
                        <input
                            type="text"
                            id="therapistExperienceTwoInput"
                            name="therapistExperienceTwoInput"
                            pattern="[A-Za-z\s]{3,10}"
                            required
                            placeholder="Eg: Job Title"
                            className="bg-gray-50 border border-neutral-200 text-gray-900 text-sm rounded-lg  block w-full ps-10 p-2.5  dark:bg-neutral-800 dark:border-neutral-500 dark:placeholder-gray-400 dark:text-white"
                            onChange={handleTherapistExperienceForm}
                            value={therapistExperienceForm.therapistExperienceTwoInput}
                        />
                    </div>

                    <div className="relative col-span-2">
                        <div className="absolute top-3 start-0 flex items-center ps-3.5 pointer-events-none">
                            <FaAlignLeft className="text-neutral-500" />
                        </div>
                        <textarea
                            name="therapistExperienceTwoDescription"
                            id="therapistExperienceTwoDescription"
                            rows={4}
                            placeholder="job Description"
                            className="bg-gray-50 border border-neutral-200 text-gray-900 text-sm rounded-lg  block w-full ps-10 p-2.5  dark:bg-neutral-800 dark:border-neutral-500 dark:placeholder-gray-400 dark:text-white"
                            onChange={handleTherapistExperienceForm}
                            value={therapistExperienceForm.therapistExperienceTwoDesctiption}
                        ></textarea>
                    </div>
                    <div className="col-span-2">
                        <label htmlFor="therapistExperienceTwoDocument" className="text-sm font-medium text-gray-900 dark:text-white">Upload supporting Documents: </label>
                        <input
                            type="file"
                            id="therapistExperienceTwoDocument"
                            name="therapistExperienceTwoDocument"
                            accept=".jpg,.jpeg.png"
                            className="w-full border border-dashed border-neutral-400 p-2 mb-2 rounded-md overflow-hidden"
                        />
                    </div>
                </div>

            </div>
        </form>
    )
}

export default TherapistRegistrationStepExperience