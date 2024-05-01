import React from "react";

const footerNav = [
  { id: "FN1", item: "Home", route: "#" },
  { id: "FN2", item: "Therapists", route: "#" },
  { id: "FN3", item: "About Us", route: "#" },
  { id: "FN4", item: "Contact Us", route: "#" },
];

const footerServices = [
  { id: "FS1", item: "Therapists", route: "#" },
  { id: "FS2", item: "Video Chating", route: "#" },
  { id: "FS3", item: "Chat With Bloom", route: "#" },
  { id: "FS4", item: "View Subscriptions Packages", route: "#" },
];

const footerAbout = [
  { id: "FA1", item: "Contact", route: "#" },
  { id: "FA2", item: "Address", route: "#" },
  { id: "FA3", item: "Terms & Conditions", route: "#" },
  { id: "FA4", item: "Account A", route: "#" },
  { id: "FA5", item: "Sitemap", route: "#" },
];

export function Footer() {
  return (
    <div className="text-2xl bg-[#eee] block lg:flex lg:flex-wrap lg:gap-4 lg:justify-around px-5 py-8 my-2">
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
              <a
                href={item.route}
                key={item.id}
                className="text-gray-700 hover:cursor-pointer focus:font-bold text-[1.1rem]"
              >
                {item.item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="m-5 lg:m-0">
        <h1 className="text-2xl">Our Servicess</h1>
        <ul>
          {footerServices.map((service) => (
            <li key={service.id}>
              <a
                href={service.route}
                key={service.id}
                className="text-gray-700 hover:cursor-pointer focus:font-bold text-[1.1rem]"
              >
                {service.item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="m-5 lg:m-0">
        <h1>About Us</h1>
        <ul>
          {footerAbout.map((about) => (
            <li key={about.id}>
              <a
                href={about.route}
                className="text-gray-700 hover:cursor-pointer focus:font-bold text-[1.1rem]"
                key={about.id}
              >
                {about.item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
