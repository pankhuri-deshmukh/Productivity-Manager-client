import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate()

    const handleAddUser = async (event) => {
        event.preventDefault();
    
        try {
    
          //register
    
          const prevLocation = window.history.state?.from || "/";
              navigate(prevLocation); 
          
    
        } catch (error) {
          console.error("Registration error:", error);
        }
      };

  return (
    <div className="flex justify-center p-10 min-h-screen">
      <div className="w-full max-w-md bg-white rounded-lg">
      <h2 className=" text-center text-3xl leading-9 font-bold text-gray-900"> User Registration</h2>
        <form className="space-y-4" onSubmit={handleAddUser}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-3xl"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-3xl"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-3xl"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-3xl"
            />
          </div>
          
          <button type="submit" className="group relative w-full flex justify-center py-2 px-4 text-sm leading-5 font-medium text-black border-2 rounded-full border-black hover:shadow-2xl">
                      Register
                    </button>
                    <div className="mt-4 text-center">
                  <p className="text-sm text-gray-600">
                    Have an account?{" "}
                    <Link to="/login" className="font-medium text-blue-500 hover:underline">
                      Click to login
                    </Link>
                  </p>
                </div>
        </form>
      </div>
    </div>
  )
}

export default Register


