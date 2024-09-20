import { useRef, useState } from "react"
import { tailChase } from "ldrs"
import contactImage from "/contactus.svg"
import contactImageMobile from "/contactusmobile.svg"
import axios from "axios"
import { FaCheck } from "react-icons/fa6"
import "../UI/Input.css";

tailChase.register()

const ContactUs = (props) => {

    const submitButtonRef = useRef(null)
    const loaderRef = useRef(null)
    const textRef = useRef(null)
    const iconRef = useRef(null)

    const [contactForm, setContactForm] = useState({
        fullname: "",
        email: "",
        subject: "",
        description: ""
    })

    const handleContactForm = (e) => {
        const { name, value } = e.currentTarget
        setContactForm(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            submitButtonRef.current.disabled = true
            textRef.current.className = "hidden"
            iconRef.current.className = "hidden"
            loaderRef.current.className = ""

            const formData = new FormData()

            formData.append("fullname", contactForm.fullname)
            formData.append("email", contactForm.email)
            formData.append("description", contactForm.description)
            formData.append("subject", contactForm.subject)

            const { data } = await axios.post("http://localhost:5000/api/admin/contactUs", formData, {
                headers: {
                    "Content-Type": "application/json"
                }
            })

            if (data.success) {
                loaderRef.current.className = "hidden"
                iconRef.current.className = ""
                setContactForm({
                    fullname: "",
                    subject: "",
                    email: "",
                    description: ""
                })
            }

        } catch (error) {
            console.error(error);
        }
        finally {
            setTimeout(() => {
                submitButtonRef.current.disabled = false
                textRef.current.className = ""
                loaderRef.current.className = "hidden"
                iconRef.current.className = "hidden"
            }, 3000);
        }

    }

    return (
        <div className={`relative ${props.class}`}>
            <div>
                <picture>
                    <source media="(max-width: 769px)" srcSet={contactImageMobile} sizes="" />
                    <img src={contactImage} className="w-full aspect-[14/20] md:aspect-[16/14] lg:aspect-[16/9] object-cover" alt="" />
                </picture>
            </div>

            <div className="flex flex-col absolute top-0 w-full h-full justify-center items-center">
                <div className="w-[90%]  md:w-[60%] h-auto bg-neutral-800/80 rounded-3xl p-2 backdrop-blur-md px-5">

                    <h1 className="text-center text-xl font-bold text-[#f3f3f3] py-2">Contat Us</h1>
                    <form method="post" onSubmit={handleSubmit}>

                        <div className="input-container">
                            <input
                                placeholder="Fullname"
                                className="input-field"
                                type="text"
                                name="fullname"
                                value={contactForm.fullname}
                                required
                                onChange={handleContactForm}
                            />
                            <label htmlFor="input-field" className="input-label">
                                Full Name
                            </label>
                            <span className={`input-highlight`}></span>
                        </div>

                        <div className="input-container">
                            <input
                                placeholder="Subject"
                                className="input-field"
                                type="text"
                                name="subject"
                                value={contactForm.subject}
                                required
                                onChange={handleContactForm}
                            />
                            <label htmlFor="input-field" className="input-label">
                                Subject For Mail
                            </label>
                            <span className={`input-highlight`}></span>
                        </div>


                        <div className="input-container">
                            <input
                                placeholder="Email"
                                className="input-field"
                                type="text"
                                name="email"
                                value={contactForm.email}
                                onChange={handleContactForm}
                                required
                            />
                            <label htmlFor="input-field" className="input-label">
                                Email
                            </label>
                            <span className={`input-highlight`}></span>
                        </div>

                        <div className="flex justify-center">
                            <textarea onChange={handleContactForm} value={contactForm.description} name="description" required id="" cols="30" rows="3" placeholder="Write Query Here" className={`p-2 rounded-md w-[90%] lg:w-[95%] h-[10%] bg-transparent border-2 text-white focus:outline-0`}></textarea>

                        </div>

                        <div className="flex justify-center my-6">
                            <button type="submit" ref={submitButtonRef} className={` bg-[#e3e3e3] rounded-3xl py-2 h-10 text-[#333] w-[35%] md:w-[25%] flex justify-center items-center`}>
                                <span ref={textRef} className="">Submit</span>
                                <span className="hidden" ref={loaderRef}><l-tail-chase size={18} /></span>
                                <span className="hidden" ref={iconRef}><FaCheck /></span>
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUs