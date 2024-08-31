import Button from "../UI/Button"
import Input from "../UI/Input"
import Textarea from "../UI/Textarea"
import contactImage from "/contactus.svg"
import contactImageMobile from "/contactusmobile.svg"

const ContactUs = (props) => {

    return (
        <div className={`relative ${props.class}`}>
            <div>
                <picture>
                    <source media="(max-width: 769px)" srcSet={contactImageMobile} sizes="" />
                    <img src={contactImage} className="w-full aspect-[14/20] md:aspect-[16/14] lg:aspect-[16/9] object-cover blur-sm" alt="" />
                </picture>
            </div>

            <div className="flex absolute top-0 w-full h-full justify-center items-center">

                <div className="w-[90%]  md:w-[60%] h-auto bg-neutral-800 bg-opacity-85 rounded-3xl p-2 backdrop-blur-sm px-5">

                    <h1 className="text-center text-xl font-bold text-[#f3f3f3] py-2">Contat Us</h1>
                    <form action="/" className="md:*:my-8 lg:*:my-6">
                        <Input
                            type="text"
                            placeholder="Name"
                            label="Enter your Name"
                        />

                        <Input
                            type="email"
                            placeholder="Email"
                            label="Enter your Email"
                        />

                        <div className="flex justify-center">
                            <Textarea class='text-white focus:outline-0' />
                        </div>

                        <div className="flex justify-center my-6">
                            <Button text="Submit" class="lg:my-5" />
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUs