import React, {useState} from 'react'

export default function HealthCareProviderSignup({handleFormSubmit}) {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [contact,setContact]=useState(""); 
    const [location,setLocation]=useState("");

    const handleHealthcareProviderSubmit = (e) => {
      e.preventDefault();

      const formData = {
        name:name,
        email:email,
        password:password,
        contact:contact,
        location:location
      }

      const jsonData = JSON.stringify(formData);

      // console.log('Healthcare provider datya are:', jsonData)
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
