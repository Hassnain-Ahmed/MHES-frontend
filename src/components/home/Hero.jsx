import React from "react";
import heroImage from "/HeroImage.svg";

export function Hero() {
  return (
    <main className="md:flex items-center justify-between bg-gradient-to-r from-[#C7CBDC] from-10% via-[#999CA9] via-100% to-[#C7CBDC] to-100% p-10">
      <div className="lg:text-6xl md:mx-[10%] sm:flex sm:justify-center md:block md:text-left text-center text-4xl font-extrabold w-full">
        <p>START YOUR JOURNEY TO</p>
        <span className="text-stroke-3 md:text-6xl lg:text-6xl">
          MENTAL CLARITY
        </span>
      </div>
      <div className="my-2 md:my-0 lg:my-0 w-[100%]">
        <img src={heroImage} className="w-full" alt="" />
      </div>
    </main>
  );
}
