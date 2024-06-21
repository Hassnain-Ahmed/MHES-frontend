import { useState } from "react"
import profile from "/img1.jpg"

const PatientProfile = (props) => {

    const [patientProfileForm, setPatientProfileForm] = useState({ name: "", username: "", email: "", password: "" })
    const handleForm = (e) => {
        const { name, value } = e.target
        setPatientProfileForm({
            ...patientProfileForm,
            [name]: value
        })
    }

    return (
        <div className="rounded-md p-5 bg-stone-200 dark:bg-stone-800">
            <h1 className="text-neutral-700 dark:text-neutral-200 text-2xl border-b-2 dark:border-neutral-400  border-neutral-400">Profile</h1>

            <div className="flex gap-x-5 bg-stone-300 dark:bg-stone-700 my-2 px-4 py-3 rounded-lg">

                <div className="w-auto">
                    <div className="flex flex-col w-60">

                        <div>
                            <img src={profile} className="rounded-full w-full my-2" alt=""
                            />
                            {/* <input

                            key={"inp" + 1} 
                            type="file" 
                            name="" id="" className="text-neutral-700 dark:text-neutral-100" 
                            /> */}

                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input
                                ">Upload Profile</label>
                            <input
                                className="block w-full text-sm text-gray-900 border border-gray-300 p-1 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input
                                " type="file" accept=".jpg,.pnd,.jpeg"
                            />
                        </div>

                        <div className="my-4 dark:text-gray-100">
                            <h1 className="text-md">Subscription Status: </h1>
                            <ul className="mx-2">
                                <li className="text-emerald-400">Trail Member</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <form className="w-full" action="">
                    <div className="flex flex-col gap-y-5 w-full">

                        <div className="flex flex-col">
                            <label className="text-neutral-800 dark:text-neutral-100" htmlFor="PatientName">Name: </label>
                            <input
                                name="name"
                                key={"inp" + 2}
                                type="text"
                                placeholder="Eg: Jhon Doe"
                                value={patientProfileForm.name}
                                onChange={handleForm}
                                id="PatientName"
                                className="rounded-md p-2 text-neutral-800 dark:text-neutral-900 bg-neutral-100 dark:bg-neutral-300 focus:bg-white focus:dark:bg-white"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-neutral-800 dark:text-neutral-100" htmlFor="PatientUsername">Username: </label>
                            <input
                                name="username"
                                key={"inp" + 3}
                                type="text"
                                placeholder="Eg: doejhon123"
                                value={patientProfileForm.username}
                                onChange={handleForm}
                                id="PatientUsername"
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
                            <select name="" defaultValue={"select"} id="PatientGender" className="rounded-md p-2 text-neutral-800 dark:text-neutral-900 bg-neutral-100 dark:bg-neutral-300 focus:bg-white focus:dark:bg-white">
                                <option value="select" disabled>Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div className="my-2">
                            <button className="shadow-md bg-slate-300 hover:bg-gray-800 hover:text-gray-300 transition-colors duration-300 text-gray-600 font-bold px-5 py-2 rounded-3xl w-full">Update Profile</button>
                        </div>
                    </div>
                </form>

            </div>

        </div >
    )
}

export default PatientProfile