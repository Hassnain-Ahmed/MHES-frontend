import { FaRightFromBracket } from "react-icons/fa6"
import { Link } from "react-router-dom"

const AdminStatCard = (props) => {
    return (
        // <div className="flex flex-col bg-[#fff] w-100 my-4 md:my-0 md:w-[47%] lg:w-[22%] lg:h-[38%] p-3 gap-y-5 justify-around rounded-lg">
        <div className="flex flex-col bg-[#fff] my-4 py-5 px-6 gap-y-5 rounded-lg dark:bg-neutral-900 dark:text-white w-[100%]">
            <p className="line-clamp-2">{props.title}</p>
            <div className="text-center relative">
                {
                    props.title == "Total Revenue" ? <sup className="ml-[-80px] absolute">PRK</sup> : ""
                }
                <p className={`text-center line-clamp-1 ${props.number > 9999 ? "text-5xl" : "text-6xl md:text-7xl"} font-bold text-[#555] ${props.class}`}>{props.number}</p>
            </div>
            <p><Link to={props.route} className="text-end flex justify-end gap-2"><span>View All</span> <FaRightFromBracket size={20} fill="#555" /></Link></p>
        </div>
    )
}


export default AdminStatCard