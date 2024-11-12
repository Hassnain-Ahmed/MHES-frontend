import React from "react";
import { Link } from "react-router-dom";

const footerNav = [
  { id: "FN1", item: "Home", route: "/" },
  { id: "FN2", item: "Therapists", route: "/Therapists" },
  { id: "FN3", item: "About Us", route: "/AboutUs" },
  { id: "FN4", item: "Contact Us", route: "/ContactUs" },
];

const footerServices = [
  // { id: "FS1", item: "Therapists", route: "#" },
  { id: "FS2", item: "Video Chating", route: "/VideoChatting" },
  { id: "FS3", item: "Chat With Bloom", route: "/ChatWithBloom" },
  { id: "FS4", item: "View Subscriptions Packages", route: "/SubscriptionPackages" },
];

const footerAbout = [
  { id: "FA1", item: "Contact", route: "/ContactUs" },
  // { id: "FA2", item: "Address", route: "#" },
  { id: "FA3", item: "Terms & Conditions", route: "/termsConditions" },
  // { id: "FA4", item: "Account A", route: "#" },
  { id: "FA5", item: "Sitemap", route: "/sitemap" },
];

export function Footer() {
  return (
    <div className="text-2xl bg-zinc-200 dark:bg-gray-800 dark:text-gray-200 block lg:flex lg:flex-wrap lg:gap-4 lg:justify-around px-5 py-8">
      <div>
        <h1 className=" text-2xl font-extrabold">
          MENTAL HEALTH <br />
          EVALUATOR SYSTSEM
        </h1>
      </div>

      <div className="m-5 lg:m-0">
        <h1 className="text-2xl">Nav Links</h1>
        <ul>
          {footerNav.map((item) => (
            <li key={item.id}>
              <Link
                to={item.route}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:cursor-pointer focus:font-bold text-[1.1rem]"
              >
                {item.item}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="m-5 lg:m-0">
        <h1 className="text-2xl">Our Servicess</h1>
        <ul>
          {footerServices.map((service) => (
            <li key={service.id}>
              <Link
                to={service.route}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:cursor-pointer focus:font-bold text-[1.1rem]"
              >
                {service.item}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="m-5 lg:m-0">
        <h1>About Us</h1>
        <ul>
          {footerAbout.map((about) => (
            <li key={about.id}>
              <Link
                to={about.route}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:cursor-pointer focus:font-bold text-[1.1rem]"
              >
                {about.item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
