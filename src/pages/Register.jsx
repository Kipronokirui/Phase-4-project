import React, {useState} from 'react'
import PatientSignup from '../components/authentication/PatientSignup'
import HealthCareProviderSignup from '../components/authentication/HealthCareProviderSignup';

export default function Register() {
    const [userType, setUserType] = useState('patient');
  return (
    <div>
        <div className="py-16">
            <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
              <div 
                className="hidden lg:block lg:w-1/2 bg-cover"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80')"
                }}
              >
              </div>
              <div className="w-full p-8 lg:w-1/2">
                    {userType === 'patient' ? 
                        <>
                            <h2 className="text-2xl font-semibold text-gray-700 text-center">
                                Sign Up as Patient
                            </h2>
                            <p 
                                className="text-xl text-gray-600 text-center cursor-pointer"
                                onClick={() => setUserType('doctor')}
                            >
                                Are you a doctor?
                            </p>
                        </>
                    : 
                        <>
                            <h2 className="text-2xl font-semibold text-gray-700 text-center">
                                Sign Up as Doctor
                            </h2>
                            <p 
                                className="text-xl text-gray-600 text-center cursor-pointer"
                                onClick={() => setUserType('patient')}
                            >
                                Register as a Client
                            </p>
                        </>
                    }
                    
                    
                    {/* <div className='flex items-center justify-between'>
                        <div>
                            <h1>
                                Sign Up as patient
                            </h1>
                        </div>
                        <div>
                            <h1>
                                Sign Up as Doctor
                            </h1>
                        </div>
                    </div> */}
                    <div className="mt-4 flex items-center justify-between">
                      <span className="border-b w-1/5 lg:w-1/4"></span>
                      <a href="/#" className="text-xs text-center text-gray-500 uppercase">
                        or login with email
                      </a>
                      <span className="border-b w-1/5 lg:w-1/4"></span>
                  </div>
                  {/* Form starts */}
                  {userType === 'patient' ? 
                    <PatientSignup /> 
                    : 
                    <HealthCareProviderSignup />
                    }
                  
                  {/* Form ends  */}
              </div>
            </div>
        </div>
    </div>
  )
}
