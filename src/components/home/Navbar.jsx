import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AiOutlineClose, AiOutlineMenu, AiOutlineLogout } from "react-icons/ai";
import { FaHouse, FaUserDoctor, FaCircleInfo, FaPhone } from "react-icons/fa6";

import useTheme from "../../context/ThemeContext";
import { authService } from "../../service/authService";

import ProfileNav from "./ProfileNav";
// import ProfileNavMobile from "./ProfileNavMobile";
import PatientMobileSidebar from "../patient/PatientMobileSidebar";
import TherapistMobileSidebar from "../therapist/TherapistMobileSidebar";
import AdminMobileSideBar from "../admin/AdminMobileSidebar";

export function Navbar(props) {

  const navigate = useNavigate()

  const { themeMode, lightTheme, darkTheme } = useTheme()
  const themeOnChange = (e) => {
    themeMode == 'dark' ? lightTheme() : darkTheme()
  }
  const { id, name, profilePic } = props.user
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  const navItems = [
    { id: 1, item: "Home", route: "/", icon: <FaHouse size={16} fill="transparent" stroke={themeMode == "dark" ? "#ccc" : "#333"} strokeWidth={50} /> },
    { id: 2, item: "Patient", route: "/patient", icon: <FaUserDoctor size={16} fill="transparent" stroke={themeMode == "dark" ? "#ccc" : "#333"} strokeWidth={50} /> },
    { id: 3, item: "Therapist", route: "/therapist", icon: <FaCircleInfo size={16} fill="transparent" stroke={themeMode == "dark" ? "#ccc" : "#333"} strokeWidth={50} /> },
    { id: 4, item: "Admin", route: "/admin", icon: <FaPhone size={16} fill="transparent" stroke={themeMode == "dark" ? "#ccc" : "#333"} strokeWidth={50} /> },
  ];

  const ProfileNavbar = <ProfileNav id={id} name={name} profilePic={profilePic} imgClass="" />
  // const ProfileNavbarMobile = <ProfileNavMobile id={id} name={name} profilePic={profilePic} imgClass="" />

  return (
    <nav className={`flex justify-between items-center py-3 px-4 shadow dark:bg-gray-800 transition-all duration-300 bg-zinc-200`}>
      <Link to="/" className="text-2xl font-extrabold text-[#333] dark:text-[#f9f9f9]">
        Mental Health <br />
        Evaluator System
      </Link>

      <div className="hidden lg:flex">
        {
          props.user.role == "admin" && ProfileNavbar
        }
      </div>

      {/* Mobile View */}

      {
        (props.user.role == "admin" || props.user.role == "therapist" || props.user.role == "user") ? (
          <div onClick={handleNav} className="block lg:hidden cursor-pointer">
            {
              nav ?
                <AiOutlineClose size={20} className="text-zinc-800 dark:text-zinc-100" />
                :
                <AiOutlineMenu size={20} className="text-zinc-800 dark:text-zinc-100" />}
          </div>
        ) : (
          <Link to="/loginV2">
            <div className="p-3 bg-gradient-to-r from-[#55BC97] to-[#275645] rounded-xl text-white hover:cursor-pointer text-center">
              <p>Login or Sign up</p>
            </div>
          </Link>
        )
      }


      <div onClick={handleNav} className={` ${nav ? "block" : "hidden"} h-screen w-screen fixed top-0 right-0 z-10`} ></div>

      <div
        className={
          nav ?
            `lg:hidden fixed w-[80%] h-full left-0 top-0 ease-in-out duration-500 px-5 py-4 bg-[#e3e3e3] dark:bg-neutral-700 dark:text-[#eee] z-10`
            :
            `ease-in-out duration-500 fixed top-0 bottom-0 left-[-100%] w-[80%] h-full px-5 py-4 bg-[#e3e3e3] dark:bg-neutral-700 dark:text-[#eee] z-10`
        }
      >

        <h1 className="text-2xl font-bold relative">
          Mental Health <br /> Evaluator System
        </h1>

        <br />


        {/* {!id ? ProfileNavbarMobile : ""} */}
        {/* {
          console.log(props)
        } */}
        {/* <PatientMobileSidebar /> */}

        {
          props.user.role == "user" && (
            <PatientMobileSidebar />
          )
        }
        {
          props.user.role == "therapist" && (
            <TherapistMobileSidebar data={props.user} />
          )
        }
        {
          props.user.role == "admin" && (
            <AdminMobileSideBar />
          )
        }

        {/* {
          (props.user.role == "admin" && props.user.role == "therapist" && props.user.role == "user") && (
            <ul className="text-gray-700 dark:text-[#f9f9f9]">
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
          )
        } */}



        <div className="fixed bottom-[5%] w-[60%] md:w-[55%] dark:text-[#f9f9f9]">

          {
            id == 0
              ?
              <Link to="/loginV2">
                <div className="p-3 bg-gradient-to-r from-[#55BC97] to-[#275645] rounded-xl text-white hover:cursor-pointer text-center">
                  <p>Login or Sign up</p>
                </div>
              </Link>
              : (
                <div
                  onClick={() =>
                    authService.logout(navigate)}
                  className="flex items-center gap-2 flex-row-reverse p-3 bg-gradient-to-r from-[#55BC97] to-[#275645] rounded-xl text-white hover:cursor-pointer text-center ">
                  <AiOutlineLogout /> Logout
                </div>
              )
          }

        </div>

      </div>

    </nav>
  );
}
