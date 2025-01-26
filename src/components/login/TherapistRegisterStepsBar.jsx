import { FaChevronRight } from 'react-icons/fa6'

export const TherapistRegisterStepsBar = ({ therepistRegisterStep }) => {
    return (
        <div className="flex justify-between items-center my-2 px-0 md:px-10">

            <div className="px-2 pt-2 pb-6 relative">
                <div className={`${therepistRegisterStep == 1 && "bg-gradient-to-br from-emerald-500 to-emerald-700"} border-2 p-5 rounded-full dark:text-white`}>
                    <FaChevronRight size={22} />
                </div>
                <div className="absolute left-0 bottom-0">
                    <span className={`uppercase font-extrabold text-sm text-neutral-400 ${therepistRegisterStep == 1 && ""}`}>Information</span>
                </div>
            </div>

            <div className="w-full h-2 bg-gray-300 rounded-md"></div>

            <div className="px-2 pt-2 pb-6 relative">
                <div className={`${therepistRegisterStep == 2 && "bg-gradient-to-br from-emerald-500 to-emerald-700"} border-2 p-5 rounded-full`}>
                    <FaChevronRight size={22} />
                </div>
                <div className="absolute left-0 bottom-0">
                    <span className={`uppercase font-extrabold text-sm text-neutral-400 ${therepistRegisterStep == 2 && ""}`}>Education</span>
                </div>
            </div>

            <div className="w-full h-2 bg-gray-300 rounded-md"></div>

            <div className="px-2 pt-2 pb-6 relative">
                <div className={`${therepistRegisterStep == 3 && "bg-gradient-to-br from-emerald-500 to-emerald-700"} border-2 p-5 rounded-full`}>
                    <FaChevronRight size={22} />
                </div>
                <div className="absolute left-0 bottom-0">
                    <span className={`uppercase font-extrabold text-sm text-neutral-400 ${therepistRegisterStep == 3 && ""}`}>Experience</span>
                </div>

            </div>
        </div>
    )
}
