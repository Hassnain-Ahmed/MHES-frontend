import { useState, useRef } from "react"
import { lineSpinner } from "ldrs"
import axios from "axios"
import { Link } from "react-router-dom"

export const UserLogin = () => {

    lineSpinner.register()

    const [error, setErros] = useState("")

    const [loginForm, setLoginForm] = useState({
        email: "",
        password: ""
    })

    const submitBtn = useRef(null)

    const handleLoginForm = (event) => {
        const { name, value } = event.currentTarget

        setLoginForm((prev) => ({
            ...prev,
            [name]: value
        }))
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        submitBtn.current.disabled = true

        document.getElementById("submitText").classList.add("hidden")
        document.getElementById("submitLoader").classList.remove("hidden")

        const formData = new FormData()

        formData.append("email", loginForm.email)
        formData.append("password", loginForm.password)

        try {
            const { data } = await axios.post("http://localhost:5000/api/users/login", formData, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            console.log(data);
        } catch (error) {
            console.error(error);
        } finally {
            submitBtn.current.disabled = false
        }
    }


    return (
        <div className='p-5 md:p-10 rounded-l-lg border w-full bg-gradient-to-br from-gray-200 to-gray-50 dark:from-neutral-800 dark:to-neutral-700/20 dark:text-neutral-100 dark:border-neutral-800'>
            <div className='text-center my-4 text-stone-700 dark:text-stone-200'>
                <h1 className='font-extrabold text-3xl font-sans'>Sign In</h1>
                <p className='font-sans font-semibold text-lg'>Fill in the form to Login in Platform</p>
            </div>
            <form method="post" onSubmit={handleSubmit} >
                <div className='flex flex-col gap-5 p-5 '>
                    <div>
                        <label htmlFor="">Enter Your Email</label>
                        <input
                            type="email"
                            className='p-4 rounded-md bg-neutral-600 dark:bg-neutral-600 text-neutral-100 border focus:outline-neutral-400 w-full'
                            placeholder='doeJohn7@example.com'
                            name="email"
                            onChange={handleLoginForm}
                            value={loginForm.email}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="">Enter Your Password</label>
                        <input
                            type="password"
                            className='p-4 rounded-md bg-neutral-600 dark:bg-neutral-600  text-neutral-100 border focus:outline-neutral-400 w-full'
                            placeholder='abc123'
                            name="password"
                            onChange={handleLoginForm}
                            value={loginForm.password}
                            required
                        />
                    </div>
                    {/* {
                        errorRef && <p>{errorRef}</p>
                    } */}
                    <div className='mt-4'>
                        <button ref={submitBtn} type='submit' className='bg-stone-400/70 hover:bg-stone-400 w-full p-2 rounded-full'>
                            <span id="submitText">Login</span>
                            <span id="submitLoader" className="hidden"><l-line-spinner size={16} /></span>
                        </button>
                    </div>
                </div>
            </form>
            <p className='mb-4 text-center'>Don't have an Account? <Link className="font-semibold" to="/loginV2/register">Register</Link></p>

        </div>
    )
}
