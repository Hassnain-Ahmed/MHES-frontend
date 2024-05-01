import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  const navItems = [
    { id: 1, item: "Home", route: "#" },
    { id: 2, item: "Therapists", route: "#" },
    { id: 3, item: "About Us", route: "#" },
    { id: 4, item: "Contact Us", route: "#" },
  ];
  const signInRoute = "/login";

  return (
    <nav className="flex justify-between items-center py-3 px-4 shadow">
      <h1 className="text-2xl font-extrabold text-[#333]">
        Mental Health <br />
        Evaluator System
      </h1>

      <ul className="md:flex md:gap-3 lg:gap-5 hidden">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={item.route}
              key={item.id}
              className="text-gray-700 hover:cursor-pointer active:font-bold text-md"
            >
              {item.item}
            </a>
          </li>
        ))}
      </ul>
      <div className="hidden md:flex">
        <a href={signInRoute}>Login/Signup</a>
      </div>

      {/* Mobile View */}
      <div
        onClick={handleNav}
        className="block md:hidden lg:hidden cursor-pointer"
      >
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          nav
            ? `md:hidden lg:hidden fixed w-[60%] h-full left-0 top-0 ease-in-out duration-500 px-5 py-4 bg-gradient-to-r from-[#fff] to-[#fff] z-10`
            : `ease-in-out duration-500 fixed top-0 bottom-0 left-[-100%] w-[60%] px-5 py-4 bg-gradient-to-r from-[#fff] to-[#fff] z-10`
        }
      >
        <h1 className="text-2xl font-bold text-gray-700">
          Mental Health <br /> Evaluator System
        </h1>{" "}
        <br />
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.route}
                key={item.id}
                className="text-gray-700 hover:cursor-pointer py-2 block my-1"
              >
                {item.item}
              </a>
            </li>
          ))}
        </ul>
        <div className="fixed bottom-[5%]">
          <div className="p-3 bg-gradient-to-r from-[#55BC97] to-[#275645] rounded-xl text-white hover:cursor-pointer">
            <p>Login or Sign up</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
