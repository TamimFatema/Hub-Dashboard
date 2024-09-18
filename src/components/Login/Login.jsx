"use client";

import Image from "next/image";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const baseapi = process.env.API_KEY;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(
        `${baseapi}/api/login`,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      sessionStorage.setItem("token", response.data.token);
      toast.success("Login Successful!");
      setTimeout(() => {
        router.push("/hub/hub_dashboard");
      }, 1500);
    } catch (error) {
      console.error(error);
      toast.error("Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <ToastContainer />
      <Image
        src="/Images/background_login.png"
        alt="Login Background"
        layout="fill"
        objectFit="cover"
        quality={75}
        priority
        className="z-0"
      />
      <div className="relative z-10 w-full flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:p-y0">
        <form
          className="w-80 bg-white bg-opacity-90 rounded-lg shadow-lg p-6 space-y-4 md:space-y-6 relative"
          onSubmit={handleSubmit}
        >
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Phone/Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              placeholder="Please enter your phone no/email"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Please type your Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              required
            />
          </div>
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  className="w-4 h-4 border border-[#5709BB]  rounded bg-gray-50"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="remember" className="text-[#5709BB] ">
                  Remember me
                </label>
              </div>
            </div>
            <a
              href="#"
              className="text-sm font-medium text-[#5709BB]  hover:font-semibold"
            >
              Forgot password?
            </a>
          </div>
          <div className="flex flex-col items-center gap-2">
            <button
              type="submit"
              className="w-1/2 text-white bg-[#5709BB]  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
            <span>OR</span>
            <button
              type="button"
              className="w-3/4 text-black bg-white border border-[#5709BB]  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Login as guest
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
