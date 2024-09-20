import axios from "axios";
import { useEffect, useState } from "react";
import { FaRegStar, FaStar, FaUser } from "react-icons/fa6"

const Testimonials = ({ fireFetch, therapistId }) => {

    const [testimonialsData, setTestimonialsData] = useState([])
    const getTestimonials = async (therapistID) => {
        try {
            const { data } = await axios.post("http://localhost:5000/api/users/getTestimonials", { id: therapistID })
            setTestimonialsData(data.message)
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getTestimonials(therapistId)
    }, [fireFetch])


    const printRatings = (rate) => {
        let rating = [];
        for (let index = 1; index <= 5; index++) {
            if (index <= parseFloat(rate)) {
                rating.push(<FaStar color="gold" key={index} />);
            } else {
                rating.push(
                    <FaRegStar
                        color="gold"
                        stroke="1"
                        strokeWidth={1}
                        key={index}
                    />
                );
            }
        }
        return rating;
    };

    return (
        <div className="flex mt-5 flex-wrap md:flex-nowrap gap-2 p-2">
            {
                testimonialsData.map(testimonial => (
                    <div key={testimonial.id} className="bg-[#888] text-white flex p-2 gap-x-2 rounded-lg">
                        <div>
                            <img src={testimonial.user.profileUrl} className="w-12 h-12 rounded-full aspect-square object-cover " alt="" />
                        </div>
                        <div>
                            <div className="flex justify-evenly items-baseline gap-2">
                                <h2 className="text-xl truncate w-32">{testimonial.user.fullname}</h2>
                                <div className="flex gap-1">{printRatings(testimonial.rating)}</div>
                            </div>
                            <p className=""> {testimonial.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Testimonials