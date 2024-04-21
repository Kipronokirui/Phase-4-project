import React, {useState} from 'react'
import { toast } from 'react-toastify';

export default function PatientSignup({handleFormSubmit}) {
  const [username,setUsername]=useState("");
  const [email,setEmail]=useState("");
  const [password, setPassword]=useState("");
  // const [birthDate,setBirthDate]=useState(""); 

  const handlePatientSubmit = (e) => {
    e.preventDefault();

    if(!username){
      toast.error("Username is required", {
        autoClose: 2000
      })
      return username;
    }else if(!email){
      toast.error("Email is required", {
        autoClose: 2000
      })
      return email;
    }else if(!password){
      toast.error("Your password is required", {
        autoClose: 2000
      })
      return password;
    }

    const formData = {
      username:username,
      email:email,
      password:password,
      // birthDate:birthDate
    }

    const jsonData = JSON.stringify(formData);

    // console.log("Patient Submitted data is:", jsonData)
    handleFormSubmit(jsonData)
  }
  return (
    <div>
      <form onSubmit={handlePatientSubmit}>
        {/* Form starts  */}
        <div className="mt-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Username
          </label>
          <input 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="bg-gray-200 text-gray-700 focus:outline-none 
            focus:shadow-outline border border-gray-300 rounded py-2 px-4 block 
            w-full appearance-none" 
            type="username" 
          />
        </div>
        <div className="mt-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email Address
          </label>
          <input 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-200 text-gray-700 focus:outline-none 
            focus:shadow-outline border border-gray-300 rounded py-2 px-4 block 
            w-full appearance-none" 
            type="email" 
          />
        </div>

        {/* <div className="mt-4">
          <div className="flex justify-between">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Date of Birth
            </label>
          </div>
          <input 
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className="bg-gray-200 text-gray-700 focus:outline-none 
            focus:shadow-outline border border-gray-300 rounded py-2 px-4 block 
            w-full appearance-none" 
            type="date" 
          />
        </div> */}

        <div className="mt-4">
          <div className="flex justify-between">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
          </div>
          <input 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-200 text-gray-700 focus:outline-none 
            focus:shadow-outline border border-gray-300 rounded py-2 px-4 block 
            w-full appearance-none" 
            type="password" 
          />
        </div>
        <div className="mt-8">
          <button 
            type='submit'
            className="bg-gray-700 text-white font-bold py-2 px-4 w-full 
            rounded hover:bg-gray-600"
          >
            Sign Up
          </button>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="border-b w-1/5 md:w-1/4"></span>
          <a href="/login" className="text-xs text-gray-500">
            Already have an account? Login
          </a>
          <span className="border-b w-1/5 md:w-1/4"></span>
        </div>
        {/* Form ends  */}
      </form>
    </div>
  )
}
