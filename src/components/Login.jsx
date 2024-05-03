import Button from "./UI/Button";
import Input from "./UI/Input";
import { Link } from "react-router-dom";

export function Login({ toggle }) {
  return (
    <div className="absolute bottom-0 left-0 flex justify-center items-center w-full h-[90%]">

      <div className="w-[80%] md:w-[70%] lg:w-[55%] h-auto rounded-lg py-10 bg-[#3333339f] text-[#f9f9f9] text-center ">

        <h1 className="w-full h-auto text-3xl font-bold">LOGIN</h1>


        <p>Enter your Credentails to Signin</p>
        <form action="" method="post">
          <div className="flex justify-center flex-col lg:px-20 my-10">
            <Input
              key={1}
              type="text"
              placeholder="Username"
              name="username"
              label="Username"
              class="my-5"
            />

            <Input
              key={2}
              type="password"
              placeholder="Password"
              name="Password"
              label="Password"
              class="my-5"
            />


            <Button text="Login" type="submit" class="my-6" />

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
