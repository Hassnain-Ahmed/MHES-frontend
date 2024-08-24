import Input from "./UI/Input";
import Button from "./UI/Button";
import { Link } from "react-router-dom";

export function Signup({ toggle }) {
  return (
    <div className="flex justify-center items-center w-full h-[90%] my-10">
      <div className="w-[80%] md:w-[70%] lg:w-[55%] h-auto rounded-lg py-5 my-5 bg-neutral-800 bg-opacity-85 text-[#f9f9f9] text-center backdrop-blur-lg">
        <h1 className="w-full h-auto text-3xl font-bold">Sign Up</h1>
        <p className="">Enter your Credentails to Signup</p>
        <form action="" method="post">
          <div className="flex justify-center flex-col lg:px-20 my-2">

            <Input
              Key={"K" + 1}
              type="text"
              placeholder="Name"
              name="username"
              label="eg: John Doe"
            />

            <Input
              Key={"K" + 2}
              type="text"
              placeholder="Username"
              name="username"
              label="eg: doejohn123"
            />

            <Input
              Key={"K" + 3}
              type="email"
              placeholder="Email"
              label="doejohn@exapmle.com"
            />

            <Input
              Key={"K" + 4}
              type="password"
              placeholder="Password"
              name="Password"
              label="At Least 8 Characters"
            />

            <Input
              Key={"K" + 5}
              type="password"
              placeholder="Confirm Password"
              name="Password"
              label="Enter same as Before"
            />

            {/* <div className="flex items-center mx-5">
              <input
                id="link-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="link-checkbox"
                className="ms-2 text-sm font-medium text-gray-100"
              >
                Sign up as a Therapist
              </label>
            </div> */}

            <Button text="Register" type="submit" class="my-6" />
          </div>
        </form>

        <div>
          <p>
            Already have an Account?{" "}
            <span className="underline font-bold hover:cursor-pointer" onClick={toggle}>Signin</span>
          </p>
        </div>

        <p className="">
          <span>Want to Become a Virtual Therapist? </span>
          <Link className="text-green-300 animate-pulse">
            Click Here.
          </Link>
        </p>

      </div>
    </div>
  );
}
