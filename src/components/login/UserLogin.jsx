import { useState, useRef } from "react"
import { Link, useNavigate } from "react-router-dom"

import { lineSpinner } from "ldrs"

import axios from "axios"
import { authService } from "../../service/authService"

import sanitizeEmail from "../../lib/sanitizeEmail"
import sanitizePassword from "../../lib/sanitizePassword"

export const UserLogin = () => {

    const navigate = useNavigate();
    lineSpinner.register()

    const [error, setErrors] = useState("")

    const [loginForm, setLoginForm] = useState({
        email: "",
        password: ""
    })

    const submitBtn = useRef(null)

    const handleLoginForm = (event) => {
        const { name, value } = event.currentTarget

        let sanitizedValue

        switch (name) {
            case "email":
                sanitizedValue = sanitizeEmail(value)
                break;

            case "password":
                sanitizedValue = sanitizePassword(value)
                break;
        }

        setLoginForm((prev) => ({
            ...prev,
            [name]: sanitizedValue
        }))
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        // Disable submit button and show loader
        toggleSubmitState(true);

        const formData = new FormData();
        formData.append("email", loginForm.email);
        formData.append("password", loginForm.password);

        try {
            // Use environment variable for API URL
            const { data } = await axios.post(`http://localhost:5000/api/users/login`, formData, {
                headers: {
                    "Content-Type": "application/json"
                }
            });

            console.log(data.response);

            // Check for errors in response code
            if (data?.response?.message) {
                handleError(data.response.message);
                toggleSubmitState(false);
                return;
            }

            // Handle successful login based on user role
            await handleRoleBasedNavigation(data.response.role, data);
            data?.response?.userData && localStorage.setItem("userData", JSON.stringify(data.response.userData))
            data?.response?.adminData && localStorage.setItem("userData", JSON.stringify(data.response.adminData))
            data?.response?.therapistData && localStorage.setItem("userData", JSON.stringify(data.response.therapistData))

        } catch (error) {
            console.error("Login Error:", error);
            setErrors("Something went wrong, please try again.");

        } finally {
            toggleSubmitState(false);
        }
    };

    // Helper to toggle submit button and loader
    const toggleSubmitState = (isSubmitting) => {
        submitBtn.current.disabled = isSubmitting;
        document.getElementById("submitText").classList.toggle("hidden", isSubmitting);
        document.getElementById("submitLoader").classList.toggle("hidden", !isSubmitting);
    };

    // Handle login errors (e.g., display them to the user)
    const handleError = (errorCode) => {
        setErrors(errorCode);
    };

    // Handle navigation based on the user role
    const handleRoleBasedNavigation = async (role, data) => {
        authService.saveLoginInfo(data);
        await authService.isLoggedIn();
        authService.getUserRole();

        switch (role) {
            case "admin":
                navigate("/admin");
                break;
            case "therapist":
                navigate("/therapist");
                break;
            case "user":
                navigate("/patient");
                break;
            case "!approved":
                setErrors("Your therapist account is still pending approval. Please contact support for assistance.");
                break;
            default:
                setErrors("Unknown role");
                break;
        }
    };



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
                    {
                        error && <p>{error}</p>
                    }
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
