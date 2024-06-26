import aboutUs from "/aboutus.svg"
import aboutUsMobile from "/aboutusMobile.png"

const Aboutus = (props) => {
    return (
        <div className={`relative ${props.class}`}>
            <div className="">
                <picture>
                    <source media="(max-width: 769px)" srcSet={aboutUsMobile} />
                    <img src={aboutUs} alt="" className="w-full object-cover blur-sm" />
                </picture>
            </div>
            <h1 className="absolute w-full top-2 text-2xl font-bold text-center">ABOUT US</h1>

            <div className="absolute top-0 left-0 w-full p-5 flex justify-center items-center">
                {/* <div className="relative md:flex justify-around gap-10 w-full md:w-[80%]"> */}
                <div className="relative md:grid grid-cols-2 gap-20 lg:w-[80%] pt-10">

                    <div className="my-2 md:my-0 bg-[#ccccccc7] backdrop-blur-md p-5 rounded-lg w-full">
                        <h1 className="font-bold text-xl my-1 border-b-2">Mission Statement</h1>
                        <p className="text-lg">Our mission is to provide comprehensive mental health support through innovative technology solutions, fostering a healthier and happier community.</p>
                    </div>

                    <div className=" my-2 md:my-0 bg-[#ccccccc7] backdrop-blur-md p-5 rounded-lg w-full">
                        <h1 className="font-bold text-xl my-1 border-b-2">Vision Statement</h1>
                        <p className="text-lg">We envision a world where mental well-being is prioritized and accessible to all, empowering individuals to live their lives to the fullest.</p>
                    </div>

                    <div className=" my-2 md:my-0 bg-[#ccccccc7] backdrop-blur-md p-5 rounded-lg w-full">
                        <h1 className="font-bold text-xl my-3 md:my-1 border-b-2">Team</h1>
                        <p className="text-lg">Meet the dedicated team behind our platform: <span className="font-bold">FYP students</span></p>
                        <ul className="my-2">
                            <li className="text-lg"><span className="font-bold">Hassnain Ahmed</span>: Passionate about mental health advocacy and technology.</li>
                            <li className="text-lg"><span className="font-bold">M Tariq Babar</span>: Dedicated to driving innovation in mental health solutions.</li>
                        </ul>
                    </div>

                    <div className=" my-2 md:my-0 bg-[#ccccccc7] backdrop-blur-md p-5 rounded-lg w-full">
                        <h1 className="font-bold text-xl my-3 md:my-1 border-b-2">Project Coordinator & Supervisor</h1>
                        <p className="text-lg">Meet the Coordinator behind our platform: <span className="font-bold">Ms. Sana</span></p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Aboutus