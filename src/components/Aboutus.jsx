import aboutUs from "/aboutus.svg"
import aboutUsMobile from "/aboutusMobile.png"

const Aboutus = (props) => {
    return (
        <div className={`relative ${props.class}`}>
            <div className="">
                <picture>
                    <source media="(max-width: 769px)" srcSet={aboutUsMobile} />
                    <img src={aboutUs} alt="" className="w-full aspect-[10/18] md:aspect-[12/14] lg:aspect-[16/7] object-cover" />
                </picture>
            </div>

            <div className="absolute top-0 md:top-[-10%] left-0 w-full h-full p-5 flex justify-center items-center">
                <div className="relative md:flex justify-around gap-10 w-full md:w-[80%] bg-[#cccccc81] backdrop-blur-md p-5 rounded-lg pt-10">
                    <h1 className="absolute top-2 text-xl">ABOUT US</h1>
                    <div>
                        <h1 className="font-bold text-xl my-1">Mission Statement</h1>
                        <p className="text-lg">Our mission is to provide comprehensive mental health support through innovative technology solutions, fostering a healthier and happier community.</p>
                        <br />
                        <h1 className="font-bold text-xl my-1">Vision Statement</h1>
                        <p className="text-lg">We envision a world where mental well-being is prioritized and accessible to all, empowering individuals to live their lives to the fullest.</p>
                    </div>
                    <div className="">
                        <h1 className="font-bold text-xl my-3 md:my-1">Team</h1>
                        <p className="text-lg">Meet the dedicated team behind our platform: <span className="font-bold">FYP students</span></p>
                        <ul className="my-2">
                            <li className="text-lg"><span className="font-bold">Hassnain Ahmed</span>: Passionate about mental health advocacy and technology.</li>
                            <li className="text-lg"><span className="font-bold">M Tariq Babar</span>: Dedicated to driving innovation in mental health solutions.</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Aboutus