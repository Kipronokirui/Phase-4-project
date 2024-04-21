import React, {useState} from 'react'
import { format } from 'date-fns';
// import { services } from './services';
import { toast } from 'react-toastify';

export default function AppointmentBookingForm({loading, user, specialist, handleAppointmentFormSubmitted, availableServices}) {
  const [date,setDate]=useState(""); 
  const [time, setTime]=useState("");
  const [service, setService]=useState("");

  const handleAppointmentForm = (e) => {
    e.preventDefault();

    // toast.info(`Username is ${user.user_name}`)
    if(!date){
      toast.error("Please select date", {
        autoClose: 2000
      })
      return date;
    }else if(!time){
      toast.error("Please select time", {
        autoClose: 2000
      })
      return time;
    }else if (!service) {
      toast.error("Service is required", {
        autoClose: 2000
      })
      return service
    }

    const formattedDate = format(new Date(date), 'dd-MM-yyyy');
    const formData = {
      username:user.user_name,
      date:formattedDate,
      time: time,
      service_name:service,
      healthcare_provider_name: specialist.name
    };
    const jsonData = JSON.stringify(formData);
    // console.log("Submitted data is:", jsonData)
    handleAppointmentFormSubmitted(jsonData)
  }
  return (
    <div>
        <section>
          <div className="flex items-center justify-center p-12">
            {/* <!-- Author: FormBold Team --> */}
            <div className="mx-auto w-full max-w-[550px] bg-white">
              <div 
                className="text-xl py-4 px-4 bg-gray-900 text-white text-center 
                font-bold rounded mb-2"
              >
                  Book an Appointment With {specialist.name}
              </div>
                <form onSubmit={handleAppointmentForm}>
                  <div className="mb-5">
                      <label 
                        htmlFor="service" 
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                          Service
                      </label>
                      <select 
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        name="service" 
                        id="service" 
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 
                        text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] 
                        focus:shadow-md cursor-pointer" 
                      >
                        {availableServices?.map((service, index) => {
                          return(
                            <option 
                              key={index}
                              value={service.service_name}
                            >
                              {service.service_name}
                            </option>
                          )
                        })}
                      </select>
                  </div>
                  
                    <div className="-mx-3 flex flex-wrap">
                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label 
                                  htmlFor="date" 
                                  className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Date
                                </label>
                                <input 
                                  value={date}
                                  onChange={(e) => setDate(e.target.value)}
                                  type="date" 
                                  name="date" id="date"
                                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                            </div>
                        </div>

                        <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label 
                                  htmlFor="time" 
                                  className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Time
                                </label>
                                <input 
                                  value={time}
                                  onChange={(e) => setTime(e.target.value)}
                                  type="time" 
                                  name="time" id="time"
                                  className="w-full rounded-md border border-[#e0e0e0] bg-white 
                                  py-3 px-6 text-base font-medium text-[#6B7280] outline-none 
                                  focus:border-[#6A64F1] focus:shadow-md" 
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <button
                          type='submit'
                          className={`hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 
                          text-center text-base font-semibold text-white outline-none`}
                        >
                          {loading ? (
                            <>
                              Please wait....
                            </>
                          ) : (
                            <>
                              Book Appointment
                            </>
                          )}
                            
                        </button>
                    </div>
                </form>
            </div>
          </div>
        </section>
    </div>
  )
}
