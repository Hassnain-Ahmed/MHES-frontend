import { FaRegStar, FaStar, FaUser } from "react-icons/fa6"

const Testimonials = () => {

    const printRatings = (rate) => {
        let rating = [];
        for (let index = 1; index <= 5; index++) {
            if (index <= rate) {
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

    const data = [
        {
            id: 1,
            name: "Mr. Asadullah",
            img: <FaUser size={32} color="black" />,
            commnet: "I highly recommend John Doe. They are a skilled and knowledgeable therapist who truly listens and cares about their clients' well-being",
            rating: 5
        },
        {
            id: 2,
            name: "Mr. Usman Ahmed",
            img: <FaUser size={32} color="black" />,
            commnet: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolor dignissimos molestiae voluptatem quia? Laboriosam quam molestias esse saepe quaerat.",
            rating: 5
        },
        {
            id: 3,
            name: "Mr. Ajay Kumar",
            img: <FaUser size={32} color="black" />,
            commnet: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At dolor dignissimos molestiae voluptatem quia? Laboriosam quam molestias esse saepe quaerat.",
            rating: 4
        },
    ]

    return (
        <div className="flex mt-5 flex-wrap md:flex-nowrap gap-2 p-2">
            {
                data.map(card => (
                    <div key={card.id} className="bg-[#888] text-white flex p-2 gap-x-2 rounded-lg">
                        <div>
                            {card.img}
                        </div>
                        <div>
                            <div className="relative mb-2">
                                <h2 className="text-xl">{card.name}</h2>
                                <div className="absolute md:relative lg:absolute right-0 top-1 flex gap-1">{printRatings(card.rating)}</div>
                            </div>
                            <p className=""> {card.commnet}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Testimonials