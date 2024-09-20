import axios from "axios"
import { useState, useRef, useEffect } from "react"
import { FaCheck } from "react-icons/fa6"
import { tailChase } from "ldrs"

tailChase.register()

const AdminQuery = () => {


    const submitButtonRef = useRef(null)
    const loaderRef = useRef(null)
    const textRef = useRef(null)
    const iconRef = useRef(null)

    const respondsInputRef = useRef(null)
    const [respondInput, setRespondInput] = useState("")

    const handleRespondInput = () => {
        setRespondInput(respondsInputRef.current.value)
    }

    const [showRespondForm, setShowRespondForm] = useState(false)
    const [contactData, setContactData] = useState({})

    const handleShowRespondForm = (data) => {
        setContactData(data)
        setShowRespondForm(prev => !prev)
    }

    const [responseStatus, setResponseStatus] = useState(false)

    const sendResponse = async (e) => {
        try {
            e.preventDefault()

            submitButtonRef.current.disabled = true
            textRef.current.className = "hidden"
            iconRef.current.className = "hidden"
            loaderRef.current.className = ""

            const formData = new FormData()

            formData.append("userName", contactData.fullname)
            formData.append("userEmail", contactData.email)
            formData.append("response", respondInput)
            formData.append("userQuery", contactData.description)
            formData.append("userSubject", contactData.subject)
            formData.append("contactDocId", contactData.id)

            const { data } = await axios.post("http://localhost:5000/api/admin/sendEmail", formData, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            console.log(data);
            if (data.success) {
                loaderRef.current.className = "hidden"
                iconRef.current.className = ""
                setContactData({})
                setResponseStatus(prev => !prev)
                setRespondInput("")
            }
        } catch (error) {
            console.error(error);
        } finally {
            setTimeout(() => {
                submitButtonRef.current.disabled = false
                textRef.current.className = ""
                loaderRef.current.className = "hidden"
                iconRef.current.className = "hidden"
                setShowRespondForm(false)
            }, 3000);
        }
    }


    const [queries, setQueries] = useState([])
    const getQueries = async () => {
        try {
            const { data } = await axios.post("http://localhost:5000/api/admin/getQueries")
            // console.log(data);
            setQueries(data.message)
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getQueries()
    }, [responseStatus])


    const [queryWithResponse, setQueryWithResponse] = useState([])
    const getQueryWithResponse = async () => {
        try {
            const { data } = await axios.post("http://localhost:5000/api/admin/queryWithResponse")
            setQueryWithResponse(data?.message)
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getQueryWithResponse()
    }, [responseStatus])



    return (
        <div className="w-100 lg:w-[90%] p-5 bg-zinc-100 rounded-lg dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100">
            <div>
                <h1 className="text-lg border-b py-2">Queries / Complaints</h1>
            </div>

            <div className="min-h-[500px] overflow-auto rounded-lg my-2">

                <div className="bg-neutral-300 dark:bg-neutral-700 rounded-lg p-4 my-4">
                    <h1 className="text-md border-b py-2 font-semibold">Recent</h1>
                    <div className="my-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 max-h-[500px] overflow-auto">

                        {
                            queries && queries.map((query) => (
                                <div className="border p-2 rounded-md bg-neutral-200 dark:bg-neutral-800/70" key={query.id}>
                                    <h1 className="text-lg">{query.fullname} | <span className="text-neutral-600 dark:text-neutral-400">{query.subject}</span></h1>
                                    <p>{query.email}</p>
                                    <p className="text-sm line-clamp-2">{query.description}</p>
                                    <button
                                        onClick={() => handleShowRespondForm(query)}
                                        className="bg-emerald-400 hover:bg-emerald-500 transition-colors text-neutral-900 border rounded-md p-1 px-4 mt-2"
                                    >
                                        Respond
                                    </button>
                                </div>
                            ))
                        }
                        {
                            queries.length == 0 && "No Queries Yet"
                        }

                    </div>
                </div>

                <div className="bg-neutral-300 dark:bg-stone-700 rounded-lg p-4 my-4">
                    <h1 className="text-md border-b py-2 font-semibold">Responded</h1>
                    <div className="my-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 max-h-[500px] overflow-auto">

                        {
                            queryWithResponse && queryWithResponse.map((queryResponse) => (
                                <div className="border p-2 rounded-md bg-neutral-200 dark:bg-neutral-800/70" key={queryResponse.id}>
                                    <h1>{queryResponse.fullname} | <span className="text-neutral-600 dark:text-neutral-400">{queryResponse.subject}</span></h1>
                                    <h2 className="mt-1">Query:</h2>
                                    <p className="text-sm line-clamp-2">{queryResponse.description}</p>
                                    <h2 className="mt-2">Response:</h2>
                                    <p className="text-sm line-clamp-2">
                                        {queryResponse.responses[0].response}
                                    </p>
                                </div>
                            ))
                        }
                        {
                            queryWithResponse.length == 0 && "No Response Yet"
                        }


                    </div>
                </div>

            </div>
            {
                showRespondForm && (
                    <form onSubmit={sendResponse}>
                        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                            <div className="dark:bg-neutral-800 bg-neutral-400 rounded-lg p-4 m-4 w-[30%]">
                                <div className="my-5">
                                    <label htmlFor="responseInput">Write your response...</label>
                                    <input
                                        id='responseInput'
                                        type="text"
                                        className="rounded-md w-full my-1 p-2 dark:text-black"
                                        placeholder="Response"
                                        ref={respondsInputRef}
                                        onChange={handleRespondInput}
                                        required
                                    />
                                </div>
                                <button ref={submitButtonRef} className="mx-2 p-2 rounded-md bg-emerald-200 hover:bg-green-400 transition-colors text-neutral-900" type="submit">
                                    <span ref={textRef} className="">Submit</span>
                                    <span className="hidden" ref={loaderRef}><l-tail-chase size={18} /></span>
                                    <span className="hidden" ref={iconRef}><FaCheck /></span>
                                </button>
                                <button className="mx-2 p-2 rounded-md bg-red-400 hover:bg-red-500 transition-colors" onClick={() => { setShowRespondForm(false) }}>Close</button>
                            </div>
                        </div>
                    </form>
                    // <AdminQueryRespondInput setShowRespondForm={setShowRespondForm} />
                )
            }
        </div>
    )
}

export default AdminQuery