import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineLogout } from "react-icons/ai";
import { FaHouse, FaUserDoctor, FaCircleInfo, FaPhone } from "react-icons/fa6";

export function Navbar(props) {

  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  const navItems = [
    { id: 1, item: "Home", route: "#", icon: <FaHouse size={16} fill="transparent" stroke="#333" strokeWidth={50} /> },
    { id: 2, item: "Therapists", route: "#", icon: <FaUserDoctor size={16} fill="transparent" stroke="#333" strokeWidth={50} /> },
    { id: 3, item: "About Us", route: "#", icon: <FaCircleInfo size={16} fill="transparent" stroke="#333" strokeWidth={50} /> },
    { id: 4, item: "Contact Us", route: "#", icon: <FaPhone size={16} fill="transparent" stroke="#333" strokeWidth={50} /> },
  ];

  const ProfileNavbar = <props.component userInfo={props.user} />
  const ProfileNavbarMobile = <props.componentMobile userInfo={props.user} />

  return (
    <nav className="flex justify-between items-center py-3 px-4 shadow">
      <h1 className="text-2xl font-extrabold text-[#333]">
        Mental Health <br />
        Evaluator System
      </h1>

      <ul className="lg:flex md:gap-3 lg:gap-5 hidden">
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
      <div className="hidden lg:flex">
        {props.user.id ? ProfileNavbar : ""}
      </div>

      {/* Mobile View */}
      <div
        onClick={handleNav}
        className="block lg:hidden cursor-pointer"
      >
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          nav
            ? `lg:hidden fixed w-[60%] h-full left-0 top-0 ease-in-out duration-500 px-5 py-4 bg-gradient-to-r from-[#fff] to-[#e3e3e3] z-10`
            : `ease-in-out duration-500 fixed top-0 bottom-0 left-[-100%] w-[60%] h-full px-5 py-4 bg-gradient-to-r from-[#fff] to-[#e3e3e3] z-10`
        }
      >

        <h1 className="text-2xl font-bold text-gray-700">
          Mental Health <br /> Evaluator System
        </h1>{" "}
        <br />


        {props.user.id ? ProfileNavbarMobile : ""}

        <ul className="mt-4">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.route}
                key={item.id}
                className="text-gray-700 hover:cursor-pointer py-2 my-1 flex items-baseline gap-1"
              >
                {item.icon}
                {item.item}
              </a>
            </li>
          ))}
        </ul>

        <div className="fixed bottom-[5%] w-[50%] md:w-[55%]">

          {
            props.user.id == 0
              ? <div className="p-3 bg-gradient-to-r from-[#55BC97] to-[#275645] rounded-xl text-white hover:cursor-pointer text-center">
                <p>Login or Sign up</p>
              </div>
              : <div className="flex items-center gap-2 flex-row-reverse p-3 bg-gradient-to-r from-[#55BC97] to-[#275645] rounded-xl text-white hover:cursor-pointer text-center"> <AiOutlineLogout /> Logout</div>
          }

        </div>

      </div>

    </nav>
  );
}
