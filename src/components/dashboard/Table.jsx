import React from 'react'
import { appointments } from './tableData'

export default function Table() {
  return (
    <div>
        <div className="flex flex-wrap -mx-3 mb-5">
            <div className="w-full max-w-full px-3 mb-6  mx-auto">
                <div 
                    className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border 
                    rounded-[.95rem] bg-white m-2"
                >
                    <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
                        {/* <!-- card header --> */}
                        <div className="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
                            <h3 className="flex flex-col items-start justify-center m-2 ml-0 font-medium text-xl/tight text-dark">
                                <span className="mr-3 font-semibold text-dark">
                                    Good Morning, Team Member
                                </span>
                                <span className="mt-1 font-medium text-gray-400 text-sm/normal">
                                    How are you feeling today?
                                </span>
                            </h3>
                            {/* <div className="relative flex flex-wrap items-center my-2">
                                <a 
                                    href='/#' 
                                    className="inline-block text-[.925rem] font-medium leading-normal 
                                    text-center align-middle cursor-pointer rounded-2xl 
                                    transition-colors duration-150 ease-in-out text-light-inverse 
                                    bg-light-dark border-light shadow-none border-0 py-2 px-5 
                                    hover:bg-secondary active:bg-light focus:bg-light"> 
                                    See other projects 
                                </a>
                            </div> */}
                        </div>
                        {/* <!-- end card header --> */}
                        {/* <!-- card body  --> */}
                        <div className="flex-auto block py-8 pt-6 px-9">
                            <div className='mb-2'>
                                <h1 className="flex flex-col items-start justify-center font-medium text-lg/tight text-dark">
                                    Appointments
                                </h1>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full my-0 align-middle text-dark border-neutral-200">
                                    <thead className="align-bottom">
                                        <tr className="font-semibold text-[0.95rem] text-secondary-dark">
                                            <th className="pb-3 text-start min-w-[175px]">
                                                Patient
                                            </th>
                                            <th className="pb-3 text-end min-w-[100px]">
                                                Specification
                                            </th>
                                            <th className="pb-3 text-end min-w-[100px]">
                                                Date
                                            </th>
                                            <th className="pb-3 pr-12 text-end min-w-[175px]">
                                                Status
                                            </th>
                                            <th className="pb-3 pr-12 text-end min-w-[100px]">
                                                DEADLINE
                                            </th>
                                            <th className="pb-3 text-end min-w-[50px]">
                                                DETAILS
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {appointments?.map((appointment, index) => {
                                            return(
                                                <tr key={index} className="border-b border-dashed last:border-b-0">
                                                    <td className="p-3 pl-0">
                                                        <div className="flex items-center">
                                                        <div className="relative inline-block shrink-0 rounded-2xl me-3">
                                                            <img 
                                                                src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/img-49-new.jpg" 
                                                                className="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl" 
                                                                alt="" 
                                                            />
                                                        </div>
                                                        <div className="flex flex-col justify-start">
                                                            <a 
                                                                href='/#' 
                                                                className="mb-1 transition-colors duration-200 ease-in-out
                                                                hover:text-primary font-semibold text-light-inverse text-md/normal"
                                                            > 
                                                                {appointment.patient_name}
                                                            </a>
                                                        </div>
                                                        </div>
                                                    </td>
                                                    <td className="p-3 pr-0 text-end">
                                                        <span className="font-semibold text-light-inverse text-md/normal">
                                                            {appointment.specification}
                                                        </span>
                                                    </td>
                                                    <td className="p-3 pr-0 text-end">
                                                        <span className="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none text-success bg-success-light rounded-lg">
                                                            {appointment.date}
                                                        </span>
                                                    </td>
                                                    <td className="p-3 pr-12 text-end">
                                                        <span 
                                                            className={`text-center align-baseline inline-flex px-4 py-3 mr-auto 
                                                            items-center font-semibold text-[.95rem] leading-none rounded-lg
                                                            ${
                                                                appointment.status === 'Completed' ? 'text-black bg-green-200' : 
                                                                appointment.status === 'Upcoming' ? 'text-black bg-blue-300' : 
                                                                appointment.status === 'In Progress' ? 'text-black bg-green-400' :
                                                                appointment.status === 'Cancelled' ? 'text-black bg-red-400' :
                                                                'text-gray-800 bg-gray-300'
                                                            } `}
                                                        > 
                                                            {appointment.status}
                                                        </span>
                                                    </td>
                                                    <td className="pr-0 text-start">
                                                        <span className="font-semibold text-light-inverse text-md/normal">
                                                            2023-08-23
                                                        </span>
                                                    </td>
                                                    <td className="p-3 pr-0 text-end">
                                                        <button 
                                                            className="ml-auto relative text-secondary-dark 
                                                            bg-light-dark hover:text-primary flex items-center h-[25px] 
                                                            w-[25px] text-base font-medium leading-normal text-center 
                                                            align-middle cursor-pointer rounded-2xl transition-colors 
                                                            duration-200 ease-in-out shadow-none border-0 justify-center"
                                                        >
                                                            <span className="flex items-center justify-center p-0 m-0 leading-none shrink-0 ">
                                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                                                </svg>
                                                            </span>
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
