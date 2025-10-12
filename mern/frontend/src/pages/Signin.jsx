import React from "react";
import login from "../assets/login.jpg";
import { Link } from "react-router-dom";

function Signin() {
    return (
        <div className="flex flex-col lg:flex-row-reverse px-32 py-10">
            {/* Left Side - Image */}
            <div className="hidden lg:flex w-1/2  items-center justify-center">
                <img
                    src={login}
                    alt="Login"
                    className="w-full h-[500px] object-cover rounded-3xl shadow-lg"
                />
            </div>

            {/* Right Side - Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center bg-white px-8 sm:px-16 lg:px-24">
                <div className="w-full max-w-md space-y-6">
                    <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
                        Sign In
                    </h2>

                    <form className="space-y-5">

                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="johndoe@gmail.com"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">
                                Password
                            </label>
                            <input
                                type="password"
                                placeholder="*********"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-all duration-200"
                        >
                            Sign In
                        </button>
                    </form>

                    <p className="text-center text-sm text-gray-500">
                        Don’t have an account?{" "}
                        <Link to="/signup" className="text-blue-600 hover:underline">
                            Create one
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Signin;
