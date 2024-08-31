import React from "react";
import profilePlaceholder from "/Medicine-bro.svg";
import { FaStar, FaRegStar } from "react-icons/fa6";

export function TherapistCard(props) {
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
    <div
      className="border-2 dark:border-neutral-800 rounded-xl m-2 relative lg:w-[22%] md:w-[45%] w-[100%] hover:cursor-pointer overflow-hidden bg-gray-50 dark:bg-neutral-600"
      key={props.id}
    >
      <div>
        <img className="saturate-50" src={profilePlaceholder} alt="" />
      </div>

      <div className="md:px-4 p-2 absolute rounded-md bottom-0 bg-[#fff] dark:bg-zinc-700 w-full">

        <div className="flex justify-between flex-col lg:flex-row">
          <h2 className="text-lg font-bold truncate dark:text-gray-50">{props.name}</h2>
          <div className="ratings flex items-center">
            {printRatings(props.rating)}
          </div>
        </div>

        <p className="line-clamp-2 md:line-clamp-1 lg:line-clamp-2 dark:text-gray-300 text-gray-700 text-sm">{props.about}</p>
      </div>

    </div>
  );
}
