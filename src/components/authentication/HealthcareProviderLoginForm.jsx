import React, {useState} from 'react'
import { toast } from 'react-toastify';
import cartoon from '../../assets/cartoon.png'

export default function HealthcareProviderLoginForm({handleLogin}) {
    const [name,setName]=useState(""); 
    const [password, setPassword]=useState(""); 

    const handleLoginSubmit = (e) => {
        e.preventDefault();
    
        if(!name){
          toast.error("Username is required", {
            autoClose: 2000
          })
          return name;
        }else if(!password){
          toast.error("Password is required", {
            autoClose: 2000
          })
          return password;
        }
        
        const formData = {
            provider_name: name,
          password: password
        };
    
        const jsonData = JSON.stringify(formData);
    
        // console.log('Submitted data is:', jsonData)
        handleLogin(jsonData)
    
        // setEmail("");
        // setPassword("");
    };
  return (
    <div>
        <div className="py-16">
          <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
              <div 
                className="hidden lg:block lg:w-1/2 bg-cover"
                style={{
                  backgroundImage: `url(${cartoon})`
                }}
              >
              </div>
              <form className="w-full p-8 lg:w-1/2" onSubmit={handleLoginSubmit}>
                  <h2 className="text-2xl font-semibold text-gray-700 text-center">
                    Sign In as Healthcare Provider
                  </h2>
                  <p className="text-xl text-gray-600 text-center">
                    Welcome back!
                  </p>
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
                      <div className="flex justify-between">
                          <label className="block text-gray-700 text-sm font-bold mb-2">
                            Password
                          </label>
                          {/* <a href="/#" className="text-xs text-gray-500">
                            Forgot Password?
                          </a> */}
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
                          Login
                      </button>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                      <span className="border-b w-1/5 md:w-1/4"></span>
                      <a href="/register" className="text-xs text-gray-500 uppercase">
                        or sign up
                      </a>
                      <span className="border-b w-1/5 md:w-1/4"></span>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                      <span className="border-b w-1/5 md:w-1/4"></span>
                      <a href="/login" className="text-xs text-gray-500 uppercase">
                        Sign In as Client
                      </a>
                      <span className="border-b w-1/5 md:w-1/4"></span>
                  </div>
              </form>
          </div>
        </div>
    </div>
  )
}
