import { useState } from "react"
import { AdminQueryRespondInput } from "./AdminQueryRespondInput"

const AdminQuery = () => {

    const [showRespondForm, setShowRespondForm] = useState(false)

    const handleShowRespondForm = () => {
        setShowRespondForm(prev => !prev)
    }

    return (
        <div className="w-100 lg:w-[90%] p-5 bg-zinc-100 rounded-lg dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100">
            <div>
                <h1 className="text-lg border-b py-2">Queries / Complaints</h1>
            </div>

            <div className="min-h-[500px] overflow-auto rounded-lg my-2">

                <div className="bg-neutral-300 dark:bg-neutral-700 rounded-lg p-4 my-4">
                    <h1 className="text-md border-b py-2 font-semibold">Recent</h1>
                    <div className="my-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 max-h-[500px] overflow-auto">

                        <div className="border p-2 rounded-md bg-neutral-200 dark:bg-neutral-800/70">
                            <h1>Hassnain Ahmed | <span className="text-neutral-600 dark:text-neutral-400">Poor Response</span></h1>
                            <p className="text-sm line-clamp-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium commodi excepturi molestiae qui similique exercitationem. Atque, earum nesciunt. Cum, dolor?</p>
                            <button
                                onClick={handleShowRespondForm}
                                className="bg-emerald-400 hover:bg-emerald-500 transition-colors text-neutral-900 border rounded-md p-1 px-4 mt-2"
                            >
                                Respond
                            </button>
                        </div>

                    </div>
                </div>

                <div className="bg-neutral-300 dark:bg-stone-700 rounded-lg p-4 my-4">
                    <h1 className="text-md border-b py-2 font-semibold">Responded</h1>
                    <div className="my-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 max-h-[500px] overflow-auto">

                        <div className="border p-2 rounded-md bg-neutral-200 dark:bg-neutral-800/70">
                            <h1>Hassnain Ahmed | <span className="text-neutral-600 dark:text-neutral-400">Poor Response</span></h1>
                            <h2 className="mt-1">Query:</h2>
                            <p className="text-sm line-clamp-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium commodi excepturi molestiae qui similique exercitationem. Atque, earum nesciunt. Cum, dolor?</p>
                            <h2 className="mt-2">Response:</h2>
                            <p className="text-sm line-clamp-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum sapiente, atque ipsum labore obcaecati expedita modi aliquam a vero mollitia.</p>
                        </div>

                    </div>
                </div>

            </div>
            {
                showRespondForm && (
                    <AdminQueryRespondInput setShowRespondForm={setShowRespondForm} />
                )
            }
        </div>
    )
}

export default AdminQuery