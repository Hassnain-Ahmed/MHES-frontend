import { useState } from "react";
import { Link } from "react-router-dom";

import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Login } from "../components/Login.jsx";
import { Signup } from "../components/Signup";

import LoginBackgroundImage from "/LoginBackgroundImage1.png";
import Login650px from "/Login650px.png";
import ProfileNavMobile from "../components/ProfileNavMobile.jsx";
import ProfileNav from "../components/ProfileNav.jsx";

export default function LoginSignupLayout() {

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
      <Navbar user={userAuth} componentMobile={ProfileNavMobile} component={ProfileNav} />
      <main>
        <div>
          <picture>
            <source media="(max-width: 769px)" srcSet={Login650px} />
            <img
              src={LoginBackgroundImage}
              className="aspect-[8/16] md:aspect-[3/3.5] lg:aspect-[16/9] lg:h-[90vh] object-cover blur-[2px] w-full"
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
