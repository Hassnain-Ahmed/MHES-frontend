import { useRef, useState, lazy, Suspense } from "react"

const AdminTherapistProfileCard = lazy(() => import("./AdminTherapistProfileCard"))

const AdminTherapists = () => {

    const [showTherapist, setShowTherapist] = useState(false)
    const viewTherapistProfileRef = useRef(null)

    const handleShowTherapist = () => {
        setShowTherapist(prev => !prev)
        console.log(viewTherapistProfileRef.current.getAttribute("aria-valueText"));

    }

    return (
        <div className="w-100 lg:w-[90%] p-5 bg-zinc-100 rounded-lg dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100">
            <h1 className="text-lg border-b py-2">Therapist Approval</h1>

            <div className="min-h-[500px] overflow-auto p-4 bg-zinc-300 dark:bg-neutral-700/80 rounded-lg my-2">
                <table className="w-full text-left" id="userbaseTable">
                    <thead>
                        <tr>
                            <th className="p-2">ID</th>
                            <th className="p-2">Full Name</th>
                            <th className="p-2">Joined</th>
                            <th className="p-2">Documents</th>
                            <th className="p-2">Status</th>
                            <th className="p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-t">
                            <td className="p-2">T-002</td>
                            <td className="p-2">Dr. Mirza K</td>
                            <td className="p-2">Pending...</td>
                            <td className="p-2">Complete</td>
                            <td className="p-2">Unapproved</td>
                            <td className="p-2">
                                <span
                                    className="font-semibold cursor-pointer"
                                    aria-valuetext="id"
                                    ref={viewTherapistProfileRef}
                                    onClick={handleShowTherapist}
                                >
                                    View Request
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {
                showTherapist && (
                    <Suspense
                        fallback={
                            <div className="absolute top-0 left-0 w-full h-full flex justify-center">
                                Loading...
                            </div>
                        }
                    >
                        <div className="absolute top-0 left-0 w-full h-full flex justify-center">
                            <AdminTherapistProfileCard setShowTherapist={setShowTherapist} />
                        </div>
                    </Suspense>
                )
            }

        </div>
    )
}

export default AdminTherapists