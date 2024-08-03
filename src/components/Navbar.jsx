import { Link } from "react-router-dom";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineLogout } from "react-icons/ai";
import { FaHouse, FaUserDoctor, FaCircleInfo, FaPhone } from "react-icons/fa6";
import ProfileNav from "./ProfileNav";
import ProfileNavMobile from "./ProfileNavMobile";
import useTheme from "../context/ThemeContext";

export function Navbar(props) {

  const { themeMode, lightTheme, darkTheme } = useTheme()
  const themeOnChange = (e) => {
    const themeStatus = e.currentTarget.checked
    themeMode == 'dark' ? lightTheme() : darkTheme()
  }
  const { id, name, profilePic } = props.user
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  const navItems = [
    // { id: 1, item: "Home", route: "/", icon: <FaHouse size={16} fill="transparent" stroke={themeMode == "dark" ? "#ccc" : "#333"} strokeWidth={50} /> },
    // { id: 2, item: "Therapists", route: "/therapist", icon: <FaUserDoctor size={16} fill="transparent" stroke={themeMode == "dark" ? "#ccc" : "#333"} strokeWidth={50} /> },
    // { id: 3, item: "About Us", route: "/aboutus", icon: <FaCircleInfo size={16} fill="transparent" stroke={themeMode == "dark" ? "#ccc" : "#333"} strokeWidth={50} /> },
    // { id: 4, item: "Contact Us", route: "/contact_us", icon: <FaPhone size={16} fill="transparent" stroke={themeMode == "dark" ? "#ccc" : "#333"} strokeWidth={50} /> },
    { id: 1, item: "Home", route: "/", icon: <FaHouse size={16} fill="transparent" stroke={themeMode == "dark" ? "#ccc" : "#333"} strokeWidth={50} /> },
    { id: 2, item: "Patient", route: "/patient", icon: <FaUserDoctor size={16} fill="transparent" stroke={themeMode == "dark" ? "#ccc" : "#333"} strokeWidth={50} /> },
    { id: 3, item: "Therapist", route: "/therapist", icon: <FaCircleInfo size={16} fill="transparent" stroke={themeMode == "dark" ? "#ccc" : "#333"} strokeWidth={50} /> },
    { id: 4, item: "Admin", route: "/admin", icon: <FaPhone size={16} fill="transparent" stroke={themeMode == "dark" ? "#ccc" : "#333"} strokeWidth={50} /> },
  ];

  const ProfileNavbar = <ProfileNav id={id} name={name} profilePic={profilePic} imgClass="" />
  const ProfileNavbarMobile = <ProfileNavMobile id={id} name={name} profilePic={profilePic} imgClass="" />

  return (
    <nav className={`flex justify-between items-center py-3 px-4 shadow dark:bg-gray-800 transition-all duration-300`}>
      <h1 className="text-2xl font-extrabold text-[#333] dark:text-[#f9f9f9]">
        Mental Health <br />
        Evaluator System
      </h1>

      <ul className="lg:flex md:gap-3 lg:gap-5 hidden text-gray-700 dark:text-[#f9f9f9]">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={item.route}
              key={item.id}
              className="hover:cursor-pointer active:font-bold text-md"
            >
              {item.item}
            </a>
          </li>
        ))}
      </ul>
      <div className="hidden lg:flex">
        {
          id
            ? ProfileNavbar
            : <div className="flex items-center gap-x-2">
              <Link to='/login' className=""> Login or Signup </Link>
              <div className="relative ml-[-10px]">
                <label className="switch scale-[.7]">
                  <span className="sun"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="#ffd43b"><circle r="5" cy="12" cx="12"></circle><path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path></g></svg></span>
                  <span className="moon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path></svg></span>
                  <input type="checkbox" className="input" value={"light"} onChange={themeOnChange} />
                  <span className="slider"></span>
                </label>
              </div>
            </div>
        }
      </div>

      {/* Mobile View */}
      <div
        onClick={handleNav}
        className="block lg:hidden cursor-pointer"
      >
        {nav ? <AiOutlineClose size={20} className="text-zinc-800 dark:text-zinc-100" /> : <AiOutlineMenu size={20} className="text-zinc-800 dark:text-zinc-100" />}
      </div>

      <div onClick={handleNav} className={` ${nav ? "block" : "hidden"} h-screen w-screen fixed top-0 right-0 z-10`} ></div>

      <div
        className={
          nav
            ? `lg:hidden fixed w-[60%] h-full left-0 top-0 ease-in-out duration-500 px-5 py-4 bg-[#e3e3e3] dark:bg-neutral-700 dark:text-[#eee] z-10`
            : `ease-in-out duration-500 fixed top-0 bottom-0 left-[-100%] w-[60%] h-full px-5 py-4 bg-[#e3e3e3] dark:bg-neutral-700 dark:text-[#eee] z-10`
        }
      >

        <h1 className="text-2xl font-bold relative">
          Mental Health <br /> Evaluator System
          <div className="absolute right-0 top-0">
            <label className="switch scale-[.7]">
              <span className="sun"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="#ffd43b"><circle r="5" cy="12" cx="12"></circle><path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path></g></svg></span>
              <span className="moon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path></svg></span>
              <input type="checkbox" className="input" value={"light"} onChange={themeOnChange} />
              <span className="slider"></span>
            </label>
          </div>
        </h1>{" "}
        <br />


        {id ? ProfileNavbarMobile : ""}

        <ul className="mt-4 dark:text-[#f9f9f9]">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.route}
                key={item.id}
                className="hover:cursor-pointer py-2 my-1 flex items-baseline gap-1"
              >
                {item.icon}
                {item.item}
              </a>
            </li>
          ))}
        </ul>

        <div className="fixed bottom-[5%] w-[50%] md:w-[55%] dark:text-[#f9f9f9]">

          {
            id == 0
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
