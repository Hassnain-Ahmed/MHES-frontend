import React from "react";
import { TherapistCard } from "./TherapistCard";
export function TherapistBannar(props) {
  const userData = [
    {
      id: 1,
      name: "Dr. Abbas",
      about:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, ducimus.",
      rating: 4,
    },
    {
      id: 2,
      name: "Dr. Humera",
      about:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, ducimus.",
      rating: 5,
    },
    {
      id: 3,
      name: "Dr. Hassnain",
      about:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, ducimus.",
      rating: 4,
    },
    {
      id: 4,
      name: "Dr. Hina",
      about:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, ducimus.",
      rating: 4,
    },
  ];

  return (
    <>
      <h1 className="text-center my-4 font-bold text-[#555] text-2xl md:text-3xl">
        {props.heading}
      </h1>
      <div className={`flex flex-wrap justify-center ${props.class}`}>
        {userData.map((info) => (
          <TherapistCard
            key={info.id}
            name={info.name}
            about={info.about}
            rating={info.rating}
          ></TherapistCard>
        ))}
      </div>
    </>
  );
}
