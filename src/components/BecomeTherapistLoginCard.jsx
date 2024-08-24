import { Link } from "react-router-dom"

import { FaChevronRight } from "react-icons/fa6"

export const BecomeTherapistLoginCard = ({ }) => {

    console.log("Rendered: BecomeTherapistLoginCard");

    return (
        <div className='p-5 md:p-10 w-full h-[620px] bg-gradient-to-br from-cyan-500 via-rose-400 to-orange-300 flex items-center justify-center rounded-r-lg'>
            <div className='bg-gray-200/20 p-10 rounded-2xl backdrop-blur-xl border'>
                <h2 className='font-semibold text-neutral-800'>Mental Health Evaluator System</h2>
                <h1 className='text-3xl md:text-4xl font-extrabold tracking-wide my-4'>Start the journey of mind to a better wellbeing</h1>
                <div className='flex flex-col gap-2'>
                    <p>
                        Take a moment for yourself. Our Mental Health Evaluator is here to help you understand what’s really going on inside—without judgment, just care.
                    </p>
                    <p>
                        Let’s walk this path together, one step at a time, toward a calmer, more balanced you.
                    </p>
                    <p className='font-semibold'>
                        Your mental wellbeing is worth it.
                    </p>
                </div>

                <div className='mt-6'>
                    <Link to="/loginV2/therapist">
                        <button className='border rounded-full px-4 py-2 bg-neutral-100/50 flex items-center gap-2'>
                            Become a Therapist
                            <div className='bg-neutral-100 p-1 rounded-full'>
                                <FaChevronRight size={18} />
                            </div>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
