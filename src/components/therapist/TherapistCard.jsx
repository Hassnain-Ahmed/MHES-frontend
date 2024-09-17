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

  if (!props.img) {
    return <p className="dark:text-white">Loading...</p>
  }

  return (
    <div
      className="group border-2 dark:border-neutral-800 rounded-xl m-2 relative hover:cursor-pointer overflow-hidden bg-gray-50 dark:bg-neutral-600"
      key={props?.id}
    >
      <div>
        <img className="aspect-square object-cover" src={props.img || profilePlaceholder} alt="" />
      </div>

      <div className="mb-[-40px] group-hover:mb-0 transition-all md:px-4 p-2 absolute rounded-md bottom-0 bg-[#fff] dark:bg-zinc-700 w-full">

        <div className="flex justify-between flex-col lg:flex-row">
          <h2 className="text-lg font-bold truncate dark:text-gray-50">{props.name}</h2>
          <div className="ratings flex items-center">
            {printRatings(props.rating)}
          </div>
        </div>

        <p title={props.slogan} className="line-clamp-1 md:line-clamp-1 lg:line-clamp-2 dark:text-gray-300 text-gray-700">{props.slogan}</p>
        <p title={props.about} className="line-clamp-2 md:line-clamp-1 lg:line-clamp-2 dark:text-gray-300 text-gray-700 text-sm">{props.about}</p>

        <button onClick={props.handleShowModel} disabled={Boolean(props.isSubscribed)} className="w-full mt-2 px-4 py-1 bg-gradient-to-br from-slate-400 bg-slate-500 hover:from-slate-400/80 hover:bg-slate-500/80 rounded-md hover:text-white transition-all disabled:bg-gray-500 disabled:text-gray-400">Subscribe</button>
        {/* <button onClick={props.handleShowModel} className="w-full mt-2 px-4 py-1 bg-gradient-to-br from-slate-400 bg-slate-500 hover:from-slate-400/80 hover:bg-slate-500/80 rounded-md hover:text-white transition-all disabled:bg-gray-500 disabled:text-gray-400">Subscribe</button> */}
      </div>
    </div>
  );
}
