import React from 'react'

export default function Modal({isOpen, setIsOpen, data}) {
  return (
    // <!-- Main modal -->
    <div className={`${isOpen ? '' : 'hidden'} flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 
        justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
    >
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="relative p-4 w-full max-w-2xl max-h-full">
            {/* <!-- Modal content --> */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                {/* <!-- Modal header --> */}
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        Appointment Details
                    </h3>
                    <button 
                        onClick={() => setIsOpen(false)}
                        type="button" 
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>
                {/* <!-- Modal body --> */}
                <div className="p-4 md:p-5 space-y-4">
                    <div>
                        <p className='flex items-center space-x-2 mb-2'>
                            <span className='font-semibold text-lg'>Healthcare Provider:</span> 
                            <span className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
                                {data.healthcare_provider_name}
                            </span>
                        </p>
                        <p className='flex items-center space-x-2 mb-2'>
                            <span className='font-semibold text-lg'>Date:</span> 
                            <span className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
                                {data.date}
                            </span>
                        </p>
                        <p className='flex items-center space-x-2 mb-2'>
                            <span className='font-semibold text-lg'>Time: </span>
                            <span className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
                                {data.time}
                            </span>
                        </p>
                        <p className='flex items-center space-x-2 mb-2'>
                            <span className='font-semibold text-lg'>Service: </span>
                            <span className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
                                {data.service_name}
                            </span>
                        </p>
                    </div>
                </div>
                {/* <!-- Modal footer --> */}
                <div 
                    className="flex items-center justify-end p-4 md:p-5 border-t border-gray-200 
                    rounded-b dark:border-gray-600"
                >
                    <button 
                        onClick={() => setIsOpen(false)}
                        type="button" 
                        className={`text-white bg-blue-700 hover:bg-blue-800 
                        font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
                    >
                        Close
                    </button>
                    
                </div>
            </div>
        </div>
    </div>
  )
}
