import { Link } from "react-router-dom"

const TherapistPatients = () => {
    return (
        <div className="p-5">

            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                <li className="border-2 p-4 rounded-md shadow-md hover:scale-105 transition-all overflow-auto">
                    <p>ID: 41231</p>
                    <h1 className="font-bold">Personal Info</h1>
                    <div className="ml-2">
                        <p>Hassnain Ahmed</p>
                        <p>dev.hassnain77@gmail.com</p>
                        <p>03103582990</p>
                    </div>
                    <h1 className="font-bold">Educational Info</h1>
                    <div className="ml-2">
                        <p>BSCS</p>
                        <p>Classes: 12</p>
                        <p>Attendance: 15</p>
                        <p>Leaves: 2</p>
                    </div>
                    <Link to="report" className="block text-center mt-4 bg-amber-200 hover:bg-amber-300 transition-colors px-2 py-1 rounded">View Report</Link>
                </li>

            </ul>

        </div>
    )
}

export default TherapistPatients