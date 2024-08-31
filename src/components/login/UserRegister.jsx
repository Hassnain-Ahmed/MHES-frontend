import { Link } from "react-router-dom"

export const UserRegister = () => {
    return (
        <div className='p-5 md:p-10 rounded-l-lg border w-full bg-gradient-to-br from-gray-200 to-gray-50 dark:from-neutral-800 dark:to-neutral-700/20 dark:text-neutral-100 dark:border-neutral-800'>
            <div className='text-center my-4 text-stone-700 dark:text-stone-200'>
                <h1 className='font-extrabold text-3xl font-sans'>Sign Up</h1>
                <p className='font-sans font-semibold text-lg'>Fill in the form to create your personal profile</p>
            </div>
            <form action="">
                <div className='grid grid-cols-2 gap-x-2 gap-y-5 p-2 md:p-5 md:gap-5'>

                    <div className="col-span-2 md:col-span-1">
                        <p className="w-full">What should we call you?</p>
                        <input
                            type="text"
                            className='p-4 rounded-md bg-neutral-600 text-neutral-100 border focus:outline-neutral-200 w-full'
                            placeholder='John Smith Doe'
                        />
                    </div>

                    <div className="col-span-2 md:col-span-1">
                        <p>What should be your Username?</p>
                        <input
                            type="text"
                            className='p-4 rounded-md bg-neutral-600 text-neutral-100 border focus:outline-neutral-200 w-full'
                            placeholder='doeJohn7'
                        />
                    </div>

                    <div className="col-span-2">
                        <p>How can we Contact you?</p>
                        <input
                            type="text"
                            className='p-4 rounded-md bg-neutral-600 text-neutral-100 border focus:outline-neutral-200 w-full'
                            placeholder='031234567891 | doejohn@example.com'
                        />
                    </div>

                    <div className="col-span-2 md:col-span-1">
                        <p>Write your password...</p>
                        <input
                            type="text"
                            className='p-4 rounded-md bg-neutral-600 text-neutral-100 border focus:outline-neutral-200 w-full'
                            placeholder='At least 8 characters'
                        />
                    </div>

                    <div className="col-span-2 md:col-span-1">
                        <p>Confirm your password</p>
                        <input
                            type="text"
                            className='p-4 rounded-md bg-neutral-600 text-neutral-100 border focus:outline-neutral-200 w-full'
                            placeholder='Match the initial password'
                        />
                    </div>

                    <div className='col-span-2 mt-4'>
                        <button type='submit' className='bg-stone-400/70 hover:bg-stone-400 w-full p-2 rounded-full'>Create Account</button>
                    </div>

                </div>
            </form>
            <p className='mb-4 text-center'>Already Have an Account? <Link className="font-semibold" to="/loginV2/login">Login</Link></p>

        </div>
    )
}
