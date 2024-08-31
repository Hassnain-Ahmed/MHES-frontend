import { FaBullseye, FaChalkboardUser, FaScroll, FaUserGroup } from "react-icons/fa6"

const Aboutus = () => {
    return (
        <div className={`flex justify-center bg-[url('aboutusMobile.png')] lg:bg-[url('aboutus.svg')] bg-cover text-neutral-800 dark:text-neutral-100`}>


            <div className="grid grid-cols-2 gap-5 p-5 lg:p-20 w-[80%]">
                <h1 className="col-span-2 w-full text-2xl font-bold text-center">ABOUT US</h1>

                <div className="col-span-2 lg:col-span-1 border border-neutral-400 dark:bg-neutral-700 bg-neutral-400/60 dark:bg-neutral-800/80 backdrop-blur-md p-5 rounded-lg w-full">
                    <h1 className="font-bold text-xl my-1 border-b-2 flex items-center gap-1"> <FaBullseye /> Mission Statement</h1>
                    <div className="flex flex-col gap-2">
                        <p>
                            Our mission is to provide comprehensive mental health support through innovative technology solutions, fostering a healthier and happier community.
                        </p>
                        <p>
                            We are committed to breaking down barriers to mental health care, offering accessible, user-friendly platforms that cater to diverse needs. By integrating cutting-edge technology with compassionate care.
                        </p>
                        <p>
                            Our goal is to create a supportive environment where individuals can find the help they need to lead fulfilling, balanced lives.
                        </p>
                    </div>
                </div>

                <div className=" col-span-2 lg:col-span-1 border border-neutral-400 dark:bg-neutral-700 bg-neutral-400/60 dark:bg-neutral-800/80 backdrop-blur-md p-5 rounded-lg w-full">
                    <h1 className="font-bold text-xl my-1 border-b-2 flex items-center gap-1"><FaScroll /> Vision Statement</h1>
                    <div className="flex flex-col gap-2">
                        <p>
                            We envision a world where mental well-being is prioritized and accessible to all, empowering individuals to live their lives to the fullest.
                        </p>
                        <p>
                            In this world, mental health is recognized as a fundamental aspect of overall health, and the stigma surrounding it is a thing of the past.
                        </p>
                        <p>
                            Our vision is to lead the way in creating an inclusive society where everyone has the tools and resources to manage their mental health effectively.
                        </p>
                        <p>
                            We aim to inspire a global movement that promotes mental wellness as an integral part of a healthy and vibrant life.
                        </p>
                    </div>
                </div>

                <div className=" col-span-2 lg:col-span-1 border border-neutral-800 dark:bg-neutral-700 bg-neutral-400/60 dark:bg-neutral-800/80 backdrop-blur-md p-5 rounded-lg w-full">
                    <h1 className="font-bold text-xl my-3 md:my-1 border-b-2 flex items-center gap-1"><FaUserGroup /> Team</h1>
                    <p>
                        Meet the dedicated team behind our platform: <span className="font-bold">FYP students</span>
                    </p>
                    <p className="mt-2">
                        A Team united by a shared passion for mental health and technological innovation. Together, we bring a diverse range of skills and perspectives to the table, all focused on one goal: improving mental health care through technology.
                    </p>
                    <ul className="ml-2 my-2">
                        <li className="mb-2">
                            <span className="font-bold text-lg">Hassnain Ahmed</span>: passionate advocate for mental health, Hassnain is driven by a desire to combine his love for technology with his commitment to making a positive impact on the lives of others.
                        </li>
                        <li>
                            <span className="font-bold text-lg">M Tariq Babar</span>: With a strong dedication to driving innovation in mental health solutions, Tariq brings a wealth of knowledge and creativity to the team. His focus is on developing cutting-edge features that enhance the user experience.
                        </li>
                    </ul>
                </div>

                <div className=" col-span-2 lg:col-span-1 border border-neutral-400 dark:bg-neutral-700 bg-neutral-400/60 dark:bg-neutral-800/80 backdrop-blur-md p-5 rounded-lg w-full">
                    <h1 className="font-bold text-xl my-3 md:my-1 border-b-2 flex items-center gap-1"><FaChalkboardUser /> Project Coordinator & Supervisor</h1>
                    <ul className="flex flex-col gap-2">
                        <p className="text-lg">Meet the Coxordinator behind our platform: <span className="font-bold">Ms. Sana</span></p>
                        <li>
                            As the project coordinator and supervisor, Ms. Sana plays a pivotal role in guiding the team towards success.
                        </li>
                        <li>
                            Her leadership ensures that the project stays on track and that the team remains focused on their mission to improve mental health care.
                        </li>
                        <li>
                            Ms. Sana’s dedication to the cause is a driving force behind the project, inspiring the team to reach their full potential.
                        </li>
                    </ul>
                </div>

            </div>

        </div>
    )
}

export default Aboutus