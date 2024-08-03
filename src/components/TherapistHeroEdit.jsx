import { FaPen, FaRegStar, FaShareFromSquare, FaStar } from "react-icons/fa6";

const TherapistHeroEdit = (props) => {

    const printRatings = (rate) => {
        let rating = [];
        for (let index = 1; index <= 5; index++) {
            if (index <= rate) {
                rating.push(<FaStar color="gold" key={index}></FaStar>);
            } else {
                rating.push(
                    <FaRegStar
                        color="gold"
                        stroke="1"
                        strokeWidth={1}
                        key={index}
                    ></FaRegStar>
                );
            }
        }
        return rating;
    };
    return (
        <div className="flex gap-5 flex-col items-center md:items-start md:flex-row md:justify-evenly p-5 border-b-2 dark:border-b-neutral-500 dark:text-[#eee] text-[#333] transition-all duration-500">

            <div>
                <img src={props.user.profilePic} className="w-96" alt="" />
                <div className="flex justify-center p-2">
                    <input type="file" name="" id="" className="w-full bg-neutral-200 dark:bg-zinc-800 dark:text-zinc-100 p-2 rounded-lg text-neutral-900" />
                </div>
            </div>

            <div className="md:w-[60%] lg:w-[50%] relative">
                <div className="w-full border-2 dark:border-neutral-500 p-5 rounded-lg ">
                    <div className="therapist-heading my-5 lg:mb-5">
                        <div className="flex justify-between">
                            <h2 className="font-bold text-xl text-[#333] dark:text-[#f9f9f9]">{props.user.name}</h2>
                            <div className="flex items-baseline">{printRatings(4)} &nbsp; 4/5</div>
                        </div>
                        <span className="text-neutral-500 dark:text-neutral-400">PHD in Therapy</span>
                    </div>

                    <div className="therapist-body lg:mt-4">
                        <ul>
                            <li className="my-2">I am a licensed therapist with experience in helping individuals (or specialize: couples, families, etc.) manage a variety of mental health concerns. I provide a safe and confidential space for clients to explore their thoughts, feelings, and develop healthy coping mechanisms. </li>
                            <li className="my-2">I'm a therapist, here to listen and support you on your journey towards emotional health</li>
                            <li className="my-2">My approach is warm, compassionate, and I strive to create a space where you feel comfortable being your authentic self." (Be sure this aligns with your therapeutic style)</li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-start p-2 w-full gap-2">
                    <button className="flex items-center gap-2 py-2 px-4 bg-neutral-200 dark:bg-zinc-800 dark:text-zinc-100 text-neutral-700 rounded-lg">
                        <FaPen />
                        Edit
                    </button>

                    <button className="flex items-center gap-2 py-2 px-4 bg-neutral-200 dark:bg-zinc-800 dark:text-zinc-100 rounded-lg text-neutral-700">
                        <FaShareFromSquare />
                        Share
                    </button>
                </div>
            </div>

        </div>
    )
}

export default TherapistHeroEdit