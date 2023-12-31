import React from 'react'
import { useState, useNavigate } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
            //login


            const prevLocation = window.history.state?.from || "/";
            navigate(prevLocation); 
        } 
        catch (error) {
          console.error("Login error:", error);
        }
      };  

  return (
    <div className="flex flex-col items-center h-screen bg-[] py-16 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full">
        <div>
        <h2 className="mt-6 text-center text-3xl leading-9 font-bold text-gray-900">
            Sign in to your account
        </h2>
        </div>
        <form className="mt-8" onSubmit={handleSubmit}>
        <div className="rounded-md shadow-sm">
            <div>
            <input
                aria-label="Email address"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-black focus:z-10 sm:text-sm sm:leading-5"
                placeholder="Email address"
            />
            </div>
            <div className="-mt-px">
            <input
                aria-label="Password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-black focus:z-10 sm:text-sm sm:leading-5"
                placeholder="Password"
            />
            </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center">
            </div>

            {/* <div className="text-sm leading-5">
            <a href="/" className="font-medium text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                Forgot your password?
            </a>
            </div> */}
        </div>

        <div className="mt-6">
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 text-sm leading-5 font-medium text-black border-2 rounded-full border-black hover:shadow-2xl">
            Sign in
            </button>
        </div>
        </form>

        <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
            New user?{" "}
            <Link to="/register" className="font-medium text-blue-500 hover:underline">
            Create an account
            </Link>
        </p>
        </div>
    </div>
    </div>
  )
}

export default Login
  
    