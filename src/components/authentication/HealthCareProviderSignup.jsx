import React, {useState} from 'react'
import { toast } from 'react-toastify';

export default function HealthCareProviderSignup({handleFormSubmit}) {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [contact,setContact]=useState(""); 
    const [location,setLocation]=useState("");

    const handleHealthcareProviderSubmit = (e) => {
      e.preventDefault();

      if(!name){
        toast.error("Name is required", {
          autoClose: 2000
        })
        return name;
      }else if(!email){
        toast.error("Email is required", {
          autoClose: 2000
        })
        return email;
      }else if(!contact){
        toast.error("Your contact is required", {
          autoClose: 2000
        })
        return contact;
      }else if(!location){
        toast.error("Location is required", {
          autoClose: 2000
        })
        return location;
      }else if(!password){
        toast.error("Password is required", {
          autoClose: 2000
        })
        return password;
      }

      const formData = {
        name:name,
        email:email,
        password:password,
        contact:contact,
        location:location
      }

      const jsonData = JSON.stringify(formData);

      handleFormSubmit(jsonData)
    }

  return (
    <div>
      <form onSubmit={handleHealthcareProviderSubmit}>
        {/* Form starts  */}
        <div className="mt-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input 
            value={name}
            onChange={(e) => setName(e.target.value)}
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

        <div className="mt-4">
          <div className="flex justify-between">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Contact
            </label>
          </div>
          <input 
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="bg-gray-200 text-gray-700 focus:outline-none 
            focus:shadow-outline border border-gray-300 rounded py-2 px-4 block 
            w-full appearance-none" 
            type="contact" 
          />
        </div>

        <div className="mt-4">
          <div className="flex justify-between">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Location
            </label>
          </div>
          <input 
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="bg-gray-200 text-gray-700 focus:outline-none 
            focus:shadow-outline border border-gray-300 rounded py-2 px-4 block 
            w-full appearance-none" 
            type="contact" 
          />
        </div>

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
