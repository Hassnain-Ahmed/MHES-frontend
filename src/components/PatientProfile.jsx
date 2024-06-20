import profile from "/img1.jpg"

const PatientProfile = (props) => {
    return (
        <div className="border-2 border-dashed border-neutral-400 dark:border-zinc-500 rounded-md p-5 bg-stone-200 dark:bg-stone-800">
            <h1 className="text-neutral-700 dark:text-neutral-200 text-2xl border-b-2 dark:border-neutral-400  border-neutral-400">Profile</h1>
            <div className="bg-stone-300 dark:bg-stone-700 my-2 px-4 py-3 rounded-lg">
                <div className="flex justify-center">
                    <div className="w-28 ">
                        <img src={profile} className="rounded-full w-full my-2" alt="" />
                        <input key={"inp" + 1} type="file" name="" id="" className="text-neutral-700 dark:text-neutral-100" />
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col">
                        <label className="text-neutral-800 dark:text-neutral-100" htmlFor="PatientName">Name: </label>
                        <input key={"inp" + 2} type="text" placeholder="Hassnain Ahmed" id="PatientName" className="rounded-md p-2 text-neutral-800 dark:text-neutral-900 bg-neutral-100 dark:bg-neutral-300 focus:bg-white focus:dark:bg-white" />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-neutral-800 dark:text-neutral-100" htmlFor="PatientUsername">Username: </label>
                        <input key={"inp" + 3} type="text" placeholder="hasnain123" id="PatientUsername" className="rounded-md p-2 text-neutral-800 dark:text-neutral-900 bg-neutral-100 dark:bg-neutral-300 focus:bg-white focus:dark:bg-white" />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-neutral-800 dark:text-neutral-100" htmlFor="PatientEmail">Email: </label>
                        <input key={"inp" + 4} type="text" placeholder="dev.hassnain77@gmail.com" id="PatientEmail" className="rounded-md p-2 text-neutral-800 dark:text-neutral-900 bg-neutral-100 dark:bg-neutral-300 focus:bg-white focus:dark:bg-white" />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-neutral-800 dark:text-neutral-100" htmlFor="PatientPassword">Password: </label>
                        <input key={"inp" + 5} type="password" placeholder="Hassnain Ahmed" id="PatientPassword" className="rounded-md p-2 text-neutral-800 dark:text-neutral-900 bg-neutral-100 dark:bg-neutral-300 focus:bg-white focus:dark:bg-white" />
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
                </div>
            </div>

        </div>
    )
}

export default PatientProfile