import { useState } from "react";
import useTheme from "../context/ThemeContext.jsx";
import { Link } from "react-router-dom";

import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Login } from "../components/Login.jsx";
import { Signup } from "../components/Signup";

import Twofactorauthentication from '/Twofactorauthentication-bro.svg'

export default function LoginSignupLayout() {

  const { themeMode } = useTheme()

  const [showLogin, setShowLogin] = useState(true);
  const changeState = () => setShowLogin((prevState) => !prevState);

  const userAuth = {
    id: 0,
    name: "Hassnain Ahmed",
    profilePic: "/img1.jpg",
    token: "abc123",
  }

  // This the login Signup page
  return (
    <>
      <Navbar user={userAuth} />
      <main>
        <div className="absolute -z-10 w-full">
          <picture>
            <source media="(max-width: 769px)" srcSet={Twofactorauthentication} />
            <img
              src={Twofactorauthentication}
              className="aspect-[8/16] md:aspect-[3/3.5] lg:aspect-[16/9] lg:h-[90vh] object-cover blur-[5px] w-full"
              alt=""
            />
          </picture>
        </div>

        {showLogin ? <Login toggle={changeState} /> : <Signup toggle={changeState} />}

      </main>
      <Footer />
    </>
  );
}
