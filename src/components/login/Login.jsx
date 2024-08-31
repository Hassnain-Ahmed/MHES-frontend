import { useState } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import { Link } from "react-router-dom";

export function Login({ toggle }) {

  const [loginData, setLoginData] = useState({ username: "", password: "" })
  const handleLoginInput = (e) => {
    const { name, value } = e.target
    setLoginData(
      {
        ...loginData,
        [name]: value
      }
    )
  }
  const validate = (username, password) => {
    if (username === "hassnain" && password === "123") {
      window.location.href = "/patient"
    }
    else {
      console.log("err")
    }
  }

  return (
    // <div className="absolute bottom-0 left-0 flex justify-center items-center w-full h-[90%]">
    <div className="flex justify-center items-center w-full h-[90%] my-10">
      <div className="w-[80%] md:w-[70%] lg:w-[55%] h-auto rounded-lg py-10 bg-neutral-800 bg-opacity-85 text-[#f9f9f9] text-center backdrop-blur-lg">

        <h1 className="w-full h-auto text-3xl font-bold">LOGIN</h1>
        <p>Enter your Credentails to Signin</p>
        <form autoComplete="off">
          <div className="flex justify-center flex-col lg:px-20 my-10">
            <Input
              key={1}
              type="text"
              placeholder="Username"
              name="username"
              label="Username"
              class="my-5"
              value={loginData.username}
              onChange={handleLoginInput}
            />

            <Input
              key={2}
              type="password"
              placeholder="Password"
              name="password"
              label="Password"
              class="my-5"
              value={loginData.password}
              onChange={handleLoginInput}
            />

            <Button text="Login" type="button" class="my-6" onClick={() => validate(loginData.username, loginData.password)} />

            <div>
              <p>
                Don't have an account?{" "}
                <span className="underline font-bold hover:cursor-pointer" onClick={toggle}>Signup.</span>
              </p>
            </div>

          </div>

        </form>

      </div>

    </div>
  );
}
