import { Link } from "react-router-dom"

export const UserLogin = () => {
    return (
        <div className='p-5 md:p-10 rounded-l-lg border w-full bg-gradient-to-br from-gray-200 to-gray-50 dark:from-neutral-800 dark:to-neutral-700/20 dark:text-neutral-100 dark:border-neutral-800'>
            <div className='text-center my-4 text-stone-700 dark:text-stone-200'>
                <h1 className='font-extrabold text-3xl font-sans'>Sign In</h1>
                <p className='font-sans font-semibold text-lg'>Fill in the form to Login in Platform</p>
            </div>
            <form action="">
                <div className='flex flex-col gap-5 p-5 '>
                    <div>
                        <label htmlFor="">Enter Your Username</label>
                        <input
                            type="text"
                            className='p-4 rounded-md bg-neutral-600 dark:bg-neutral-600 text-neutral-100 border focus:outline-neutral-400 w-full'
                            placeholder='doeJohn7'
                        />
                    </div>
                    <div>
                        <label htmlFor="">Enter Your Password</label>
                        <input
                            type="text"
                            className='p-4 rounded-md bg-neutral-600 dark:bg-neutral-600  text-neutral-100 border focus:outline-neutral-400 w-full'
                            placeholder='Email'
                        />
                    </div>

                    <div className='mt-4'>
                        <button type='submit' className='bg-stone-400/70 hover:bg-stone-400 w-full p-2 rounded-full'>Login</button>
                    </div>
                </div>
            </form>
            <p className='mb-4 text-center'>Don't have an Account? <Link className="font-semibold" to="/loginV2/register">Register</Link></p>

        </div>
    )
}
