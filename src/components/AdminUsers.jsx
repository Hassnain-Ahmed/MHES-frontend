import { useRef, useState } from "react"
import { FaBan, FaTrash } from "react-icons/fa6";
import { Link } from "react-router-dom";


const AdminUsers = () => {

    const [showUserBanModal, setShowUserModal] = useState(false)
    const [showUserDeleteModal, setShowUserDeleteModal] = useState(false)

    const selectUserbaseInputRef = useRef(null)
    const userBanBtnRef = useRef(null)
    const userDeleteBtnRef = useRef(null)

    const handleShowUserBanModal = () => {
        console.log(userBanBtnRef.current.getAttribute("aria-valueText"));
    }
    const handleShowUserDeleteModal = () => {
        console.log(userDeleteBtnRef.current.getAttribute("aria-valueText"));
    }

    const handleSelectUserbaseInputRef = () => {
        console.log(selectUserbaseInputRef.current.value);
    }

    return (
        <div className="w-100 lg:w-[90%] p-5 bg-zinc-100 rounded-lg dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100">
            <div>
                <h1 className="text-lg border-b py-2">Userbase</h1>

                <div className="my-2 mx-2">
                    <label htmlFor="selectInputUserbase">Select userbase: </label>
                    <select
                        name=""
                        id="selectInputUserbase"
                        className="p-2 rounded-md w-[200px] dark:bg-neutral-600"
                        onChange={handleSelectUserbaseInputRef}
                        ref={selectUserbaseInputRef}
                    >
                        <option value="Patinets">Patinets</option>
                        <option value="Therapists">Therapists</option>
                    </select>
                    <span className="mx-2 text-sm block md:inline">Total Users: 200</span>
                </div>
            </div>

            <div className="min-h-[500px] overflow-auto p-4 bg-zinc-300 dark:bg-neutral-700/80 rounded-lg">
                <table className="w-full text-left" id="userbaseTable">
                    <thead>
                        <tr>
                            <th className="p-2">Id.</th>
                            <th className="p-2">Full Name</th>
                            <th className="p-2">Joined</th>
                            <th className="p-2">Therapist</th>
                            <th className="p-2">Plan</th>
                            <th className="p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-t">
                            <td className="p-2">P-001</td>
                            <td className="p-2">Hassnain Ahmed</td>
                            <td className="p-2">8/20/2024</td>
                            <td className="p-2">None</td>
                            <td className="p-2">Free</td>
                            <td className="p-2">
                                <div className="flex gap-2">
                                    <div
                                        aria-valuetext="yesBan"
                                        ref={userBanBtnRef}
                                        onClick={handleShowUserBanModal}
                                    >
                                        <FaBan title="Ban User" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100" />
                                    </div>

                                    <div
                                        aria-valuetext="yesDelete"
                                        ref={userDeleteBtnRef}
                                        onClick={handleShowUserDeleteModal}
                                    >
                                        <FaTrash title="Delete User" className="text-red-400 hover:text-red-500" />
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {
                showUserBanModal ?
                    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                        <div>

                        </div>
                    </div>
                    :
                    <div>
                    </div>

            }
        </div>
    )
}

export default AdminUsers