import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"


import sanitizeString from "../../lib/sanitizeString"
import sanitizeNumber from "../../lib/sanitizeNumber"
import sanitizeEmail from "../../lib/sanitizeEmail"
import sanitizePassword from "../../lib/sanitizePassword"

export const UserRegister = () => {

    const [errors, setErrors] = useState("")

    const [registerForm, setRegisterForm] = useState({
        fullname: "",
        contact: "",
        email: "",
        password: ""
    })

    const submitBtn = useRef(null)

    const handleRegisterForm = (event) => {
        const { name, value } = event.currentTarget

        let sanitizedValue
        switch (name) {
            case "fullname":
                sanitizedValue = sanitizeString(value)
                break;

            case "contact":
                sanitizedValue = sanitizeNumber(value)
                break;

            case "email":
                sanitizedValue = sanitizeEmail(value)
                break;

            case "password":
                sanitizedValue = sanitizePassword(value)
                break;

            default:
                break;
        }

        setRegisterForm((prev) => ({
            ...prev,
            [name]: sanitizedValue
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        submitBtn.current.disabled = true

        const formData = new FormData()

        formData.append("fullname", registerForm.fullname)
        formData.append("contact", registerForm.contact)
        formData.append("email", registerForm.email)
        formData.append("password", registerForm.password)
        formData.append("role", "user")

        try {
            const { data } = await axios.post("http://localhost:5000/api/users/register", formData, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            setErrors(data.message);
            console.log(data.message);
        } catch (error) {
            setErrors(error?.data?.response);
            console.error(error);
        } finally {
            submitBtn.current.disabled = false
        }
    }



    return (
        <div className='p-5 md:p-10 rounded-l-lg border w-full bg-gradient-to-br from-gray-200 to-gray-50 dark:from-neutral-800 dark:to-neutral-700/20 dark:text-neutral-100 dark:border-neutral-800'>
            <div className='text-center my-4 text-stone-700 dark:text-stone-200'>
                <h1 className='font-extrabold text-3xl font-sans'>Sign Up</h1>
                <p className='font-sans font-semibold text-lg'>Fill in the form to create your personal profile</p>
            </div>
            <form method="post" onSubmit={handleSubmit}>
                <div className='grid grid-cols-2 gap-x-2 gap-y-5 p-2 md:p-5 md:gap-5'>

                    <div className="col-span-2">
                        <p className="w-full">What should we call you?</p>
                        <input
                            type="text"
                            className='p-4 rounded-md bg-neutral-600 text-neutral-100 border focus:outline-neutral-200 w-full'
                            placeholder='John Smith Doe'
                            onChange={handleRegisterForm}
                            value={registerForm.fullname}
                            name="fullname"
                            required
                        />
                    </div>


                    <div className="col-span-2">
                        <p>How can we Contact you?</p>
                        <input
                            type="text"
                            className='p-4 rounded-md bg-neutral-600 text-neutral-100 border focus:outline-neutral-200 w-full'
                            placeholder='031234567891'
                            onChange={handleRegisterForm}
                            value={registerForm.contact}
                            name="contact"
                            required
                        />
                    </div>

                    <div className="col-span-2 md:col-span-1">
                        <p>How can we Email you?</p>
                        <input
                            type="email"
                            className='p-4 rounded-md bg-neutral-600 text-neutral-100 border focus:outline-neutral-200 w-full'
                            placeholder='doejohn@example.com'
                            onChange={handleRegisterForm}
                            value={registerForm.email}
                            name="email"
                            required
                        />
                    </div>

                    <div className="col-span-2 md:col-span-1">
                        <p>Write your password...</p>
                        <input
                            type="password"
                            className='p-4 rounded-md bg-neutral-600 text-neutral-100 border focus:outline-neutral-200 w-full'
                            placeholder='At least 8 characters'
                            onChange={handleRegisterForm}
                            value={registerForm.password}
                            name="password"
                            required
                        />
                    </div>

                    <div>
                        {
                            errors
                        }
                    </div>

                    <div className='col-span-2 mt-4'>
                        <button type='submit' ref={submitBtn} className='bg-stone-400/70 hover:bg-stone-400 w-full p-2 rounded-full disabled:bg-stone-300/50 disabled:text-gray-400'>Create Account</button>
                    </div>

                </div>
            </form>
            <p className='mb-4 text-center'>Already Have an Account? <Link className="font-semibold" to="/loginV2/login">Login</Link></p>

        </div>
    )
}
