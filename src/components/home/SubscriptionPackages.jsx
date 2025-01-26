import { FaCheck, FaXmark } from 'react-icons/fa6'

const SubscriptionPackages = () => {

    return (
        <div className="p-5">

            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 lg:mt-10 mx-10 my-12">

                <div className="border p-3 rounded-md mx-4 dark:text-gray-300 dark:border-gray-500">
                    <h4 className="text-lg">Free</h4>
                    <h1 className="text-2xl">0.00$ <span className="text-lg">/ Month</span></h1>

                    <p className='my-2'>The Free Plan offers essential mental health support with limited AI chatbot interactions, one video chat session per month, and basic access to soothing music and exercises. Ideal for initial support without any cost.</p>

                    <ul className="flex flex-col gap-y-2 mt-4">
                        <li className='flex items-center gap-2'><FaCheck /> Limited Access to Chatbot</li>
                        <li className='flex items-center gap-2'><FaCheck /> Limited Sessions per Month</li>
                        <li className='flex items-center gap-2'><FaCheck /> Limited Meeting Scheduling</li>
                        <li className='flex items-center gap-2'><FaXmark /> Full Selection to Music</li>
                        <li className='flex items-center gap-2'><FaXmark /> Full Access to Exercises</li>
                        <li className='flex items-center gap-2'><FaXmark /> Access to Session Recordings</li>
                        <li className='flex items-center gap-2'><FaXmark /> Personalized Therapy Plans</li>
                    </ul>
                    <div className="flex justify-center mt-4">
                        <button className="border border-neutral-500 p-2 rounded w-full" onClick={() => { javascript: void (0) }}>Purchased</button>
                    </div>
                </div>

                <div className="bg-gradient-to-l from-sky-500 to-sky-300 p-3 rounded-md mx-4 scale-110">
                    <h4 className="text-lg">Premium</h4>
                    <h1 className="text-2xl">9.99$ <span className="text-lg">/ Month</span></h1>

                    <p className='my-2'>The Premium Plan provides unlimited AI chatbot access, unlimited video sessions, full access to music and exercises, personalized therapy plans. Perfect for comprehensive mental health support.</p>

                    <ul className="flex flex-col gap-y-2 mt-4">
                        <li className='flex items-center gap-2'><FaCheck /> Unlimited Access to Chatbot</li>
                        <li className='flex items-center gap-2'><FaCheck /> Unlimited Sessions per Month</li>
                        <li className='flex items-center gap-2'><FaCheck /> Unlimited Meeting Scheduling</li>
                        <li className='flex items-center gap-2'><FaCheck /> Full Selection to Music</li>
                        <li className='flex items-center gap-2'><FaCheck /> Full Access to Exercises</li>
                        <li className='flex items-center gap-2'><FaCheck /> Access to Session Recordings</li>
                        <li className='flex items-center gap-2'><FaCheck /> Personalized Therapy Plans</li>
                    </ul>
                    <div className="flex justify-center mt-4">
                        <button className="p-2 rounded w-full bg-gray-200 hover:bg-gray-50 transition-colors disabled:bg-neutral-300 disabled:hover:bg-neutral-300 disabled:text-neutral-600">Subscribe</button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default SubscriptionPackages
