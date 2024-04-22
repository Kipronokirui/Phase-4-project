import React, {useState} from 'react'
import PatientSignup from '../components/authentication/PatientSignup'
import HealthCareProviderSignup from '../components/authentication/HealthCareProviderSignup';
import cartoon from '../assets/cartoon.png'

export default function Register() {
    const [userType, setUserType] = useState('patient');

    const handleFormSubmit = async (data) =>{

        if (userType === 'patient') {
            try {
                const response = await fetch('https://medi-scheduler-app.onrender.com/users/signup', {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json'
                    },
                    body: data
                });

                if (!response.ok) {
                    throw new Error('Sign Up failed');
                }

                const responseData = await response.json();
                console.log('Registration successful', responseData);
            } catch (error) {
                console.error('Error logging in:', error.message);
            }
        } else if (userType === 'doctor'){
            console.log('Doctor has submitted his data', data)
            try {
                const response = await fetch('https://medi-scheduler-app.onrender.com/healthcare_provider/signup', {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json'
                    },
                    body: data
                });

                if (!response.ok) {
                    throw new Error('Sign Up failed');
                }

                const responseData = await response.json();
                console.log('Registration successful', responseData);
            } catch (error) {
                console.error('Error logging in:', error.message);
            }
        }
    }
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
              <div className="w-full p-8 lg:w-1/2">
                    {userType === 'patient' ? 
                        <>
                            <h2 className="text-2xl font-semibold text-gray-700 text-center">
                                Sign Up as Patient
                            </h2>
                            <p 
                                className="mt-2 text-xl text-blue-600 text-center cursor-pointer hover:text-blue-800"
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
                                className="mt-2 text-xl text-blue-600 text-center cursor-pointer hover:text-blue-800"
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

                    {/* <div className="mt-4 flex items-center justify-between">
                      <span className="border-b w-1/5 lg:w-1/4"></span>
                      <a href="/#" className="text-xs text-center text-gray-500 uppercase">
                        or login with email
                      </a>
                      <span className="border-b w-1/5 lg:w-1/4"></span>
                    </div> */}

                  {/* Form starts */}
                  {userType === 'patient' ? 
                    <PatientSignup handleFormSubmit={handleFormSubmit}/> 
                    : 
                    <HealthCareProviderSignup handleFormSubmit={handleFormSubmit}/>
                    }
                  
                  {/* Form ends  */}
              </div>
            </div>
        </div>
    </div>
  )
}
