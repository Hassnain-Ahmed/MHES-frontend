import { useState } from "react";
import { Link } from "react-router-dom";

import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Login } from "../components/Login.jsx";
import { Signup } from "../components/Signup";

import LoginBackgroundImage from "/LoginBackgroundImage1.png";
import Login650px from "/Login650px.png";

export default function LoginSignupLayout() {
  const [showLogin, setShowLogin] = useState(false);
  const changeState = () => setShowLogin((prevState) => !prevState);

  return (
    <>
      <Navbar />
      <main>
        <div>
          <picture>
            <source media="(max-width: 769px)" srcSet={Login650px} />
            <img
              src={LoginBackgroundImage}
              className="aspect-[8/16] md:aspect-[3/3.5] lg:aspect-[16/9] object-cover blur-[2px] w-full"
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
