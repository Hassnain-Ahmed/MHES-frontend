import { useEffect, useRef, useState } from "react"
// import profile from "/img1.jpg"
import axios from "axios"

const TherapistListing = () => {

    const submitBtn = useRef(null)

    const [operationStatus, setOperationStatus] = useState({
        getStatus: false,
        createStatus: false,
        updateStatus: false,
    })

    const [listingsForm, setListingsForm] = useState({
        specialization: "",
        slogan: "",
        description: "",
        therapistId: "",
        listingId: ""
    })

    const handleForm = (e) => {
        const { name, value } = e.target
        setListingsForm({
            ...listingsForm,
            [name]: value
        })
    }

    const getListing = async () => {
        const therapistId = JSON.parse(localStorage.getItem("credentials")).response.user.uid
        try {
            const { data } = await axios.post("http://localhost:5000/api/therapists/getListing", { therapistId }, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            setListingsForm({
                specialization: data.message[0].data.specialization,
                slogan: data.message[0].data.slogan,
                description: data.message[0].data.description,
                therapistId: data.message[0].data.therapistId,
                listingId: data.message[0].listingId
            })
            setOperationStatus(prev => ({
                ...prev,
                getStatus: true
            }))
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getListing()
    }, [])

    const updateListing = async (listingId) => {
        submitBtn.current.disabled = true

        const formData = new FormData()

        formData.append("listingId", listingId)
        formData.append("slogan", listingsForm.slogan)
        formData.append("specialization", listingsForm.specialization)
        formData.append("description", listingsForm.description)

        try {
            const { data } = axios.put("http://localhost:5000/api/therapists/updateListing", formData, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            setOperationStatus(prev => ({
                ...prev,
                updateStatus: true
            }))

        } catch (error) {
            console.error(error);

        } finally {
            submitBtn.current.disabled = false
        }
    }

    const createListing = async (therapistId) => {
        submitBtn.current.disabled = true

        const formData = new FormData()

        formData.append("therapistId", therapistId)
        formData.append("slogan", listingsForm.slogan)
        formData.append("specialization", listingsForm.specialization)
        formData.append("description", listingsForm.description)

        try {
            const { data } = axios.post("http://localhost:5000/api/therapists/createListing", formData, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            setOperationStatus(prev => ({
                ...prev,
                createStatus: true
            }))

        } catch (error) {
            console.error(error);

        } finally {
            submitBtn.current.disabled = false
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const therapistId = JSON.parse(localStorage.getItem("credentials")).response.user.uid

        listingsForm.therapistId != "" ? await updateListing(listingsForm.listingId) : await createListing(therapistId)

    }

    return (
        <div className="rounded-md p-5 bg-stone-200 dark:bg-stone-800 w-full">
            <h1 className="text-neutral-700 dark:text-neutral-200 text-lg border-b-2 dark:border-neutral-400  border-neutral-400">List Your Services</h1>

            <form method="post" onSubmit={handleSubmit}>
                <div className="p-5 flex flex-col gap-4">
                    <div>
                        <label className="text-neutral-900 dark:text-white" htmlFor="">Enter Your Specialization</label>
                        <input type="text" className="px-4 py-2 rounded-md w-full" placeholder="Specialization" required name="specialization" onChange={handleForm} value={listingsForm.specialization} />
                    </div>
                    <div>
                        <label className="text-neutral-900 dark:text-white" htmlFor="">Enter Your Slogan</label>
                        <input type="text" className="px-4 py-2 rounded-md w-full" placeholder="Slogan" required name="slogan" onChange={handleForm} value={listingsForm.slogan} />
                    </div>
                    <div>
                        <label className="text-neutral-900 dark:text-white" htmlFor="">Enter Your Services</label>
                        <textarea type="text" className="px-4 py-2 rounded-md w-full" placeholder="Description" rows={4} required name="description" onChange={handleForm} value={listingsForm.description} ></textarea>
                    </div>
                </div>
                {
                    operationStatus.createStatus ? <p className="text-neutral-900 dark:text-white">Sucessfully Created Listing</p> : operationStatus.updateStatus ? <p className="text-neutral-900 dark:text-white">Sucessfully Updated</p> : ""
                }

                <div className="flex justify-center">
                    <button type="submit" ref={submitBtn} className="px-4 py-2 rounded-full bg-cyan-600 hover:bg-cyan-700 text-white transition-colors disabled:text-gray-400 disabled:hover:bg-cyan-600">
                        {
                            listingsForm.therapistId != "" ? "Update Listing" : "Create Listing"
                        }
                    </button>
                </div>
            </form>

        </div >
    )
}

export default TherapistListing