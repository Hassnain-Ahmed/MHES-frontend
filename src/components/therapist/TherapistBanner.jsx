import { useEffect, useState } from "react";
import { TherapistCard } from "./TherapistCard";
import axios from "axios";
import { Link } from "react-router-dom";

export function TherapistBannar({ handleGigToggle, heading, id }) {

  const [therapists, setTherapists] = useState(null);

  const therapistJsonFetch = async () => {
    try {
      const { data } = await axios.post("http://localhost:5000/api/users/listings");
      setTherapists(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching therapist data:", error);
    }
  };

  useEffect(() => {
    therapistJsonFetch();
  }, [0]);

  if (!therapists) {
    return <p className="dark:text-white">Loading...</p>;
  }

  return (
    <div className="bg-neutral-300 dark:bg-neutral-800 rounded-lg p-5" id={`#${id}`}>
      <h1 className="text-center font-bold text-[#555] dark:text-neutral-200 text-2xl md:text-2xl border-b mb-4">
        {heading}
      </h1>

      <div className={`grid md:grid-cols-3 lg:grid-cols-4 w-full`}>

        {therapists.message.map((info) => (
          <div key={info.listingId} >
            <div aria-valuetext={info.therapistId} onClick={handleGigToggle}>
              <TherapistCard
                key={info.listingId}
                name={info.therapistDetails.therapistFullName}
                img={info.therapistDetails.profilePictureURL}
                slogan={info.slogan}
                about={info.description}
              />
            </div>
          </div>
        ))}

      </div>

    </div>
  );
}
