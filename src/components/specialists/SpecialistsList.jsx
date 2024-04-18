import React from 'react'
// import { specialists } from './specialists'
import { useNavigate } from 'react-router-dom';
// import AppointmentBookingModal from './AppointmentBookingModal'

export default function SpecialistsList({providers}) {
    const navigate = useNavigate();
  return (
    <div>
        <section className='grid grid-cols-4 gap-2'>
            {providers?.map((provider, index) => {
                const toAppointmentBooking=()=>{
                    navigate('/book-appointment',{state:{provider}});
                }

                return(
                    <div 
                        key={index}
                        className="w-full max-w-sm bg-white border border-gray-200 rounded-lg 
                        shadow dark:bg-gray-800 dark:border-gray-700"
                    >
                        <div className="flex flex-col items-center pb-10 pt-2">
                            {/* <img 
                                className="w-28 h-28 mb-3 rounded-full shadow-lg" 
                                src={provider.profile_picture} 
                                alt="Bonnie"
                            /> */}
                            <h5 
                                className="mb-1 text-xl font-medium text-gray-900 dark:text-white"
                            >
                                {provider.name}
                            </h5>
                            <span 
                                className="text-sm text-gray-500 dark:text-gray-400"
                            >
                                Location: {provider.location}
                            </span>
                            <span 
                                className="text-sm text-gray-500 dark:text-gray-400"
                            >
                                Contact: {provider.contact}
                            </span>
                            <div className="flex mt-4 md:mt-6">
                                <button 
                                    onClick={()=>{toAppointmentBooking()}}
                                    className="inline-flex items-center px-4 py-2 text-sm 
                                    font-medium text-center text-white bg-blue-700 rounded-lg 
                                    hover:bg-blue-800 focus:ring-4 focus:outline-none 
                                    focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 
                                    dark:focus:ring-blue-800"
                                >
                                    Book This Provider
                                </button>
                                {/* <a 
                                    href="/#" 
                                    className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 
                                    focus:outline-none bg-white rounded-lg border border-gray-200 
                                    hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 
                                    focus:ring-gray-100 dark:focus:ring-gray-700 
                                    dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 
                                    dark:hover:text-white dark:hover:bg-gray-700"
                                >
                                    Message
                                </a> */}
                            </div>
                        </div>
                    </div>
                )
            })}
        </section>
    </div>
  )
}
