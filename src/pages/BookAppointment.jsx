import React, {useState, useEffect} from 'react'
import AppointmentBookingForm from '../components/appointment/AppointmentBookingForm'
import { useLocation, useNavigate } from 'react-router-dom';

export default function BookAppointment() {
  const [fetchedServices, setFetchedServices] = useState([])
  const location = useLocation();
  const wantedSpecialist = location.state.provider
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('user'));
  // console.log('Specialist is:', wantedSpecialist)
  useEffect(() => {
    if(!user){
      console.log("You must be logged in before booking an appointment")
      navigate('/login')
    }else{
      console.log('User Id is:', user.user_id)
      const fetchServices = async () => {
        try {
          const response = await fetch('http://127.0.0.1:5000/services');
          if (!response.ok) {
            throw new Error('Failed to fetch services');
          }
          const servicesData = await response.json();
          setFetchedServices(servicesData);
        } catch (error) {
          console.error('Error fetching services:', error);
        }
      };
  
      fetchServices();
    }
    
  }, []);

  const handleAppointmentFormSubmitted = async(data) => {
    console.log("Appointment form submitted", data)
    try {
      const response = await fetch('http://127.0.0.1:5000/appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: data
        // body:data
      });

      if (!response.ok) {
        throw new Error('Failed to book the appointment');
      }
  
      const responseData = await response.json();
      console.log('Appointment succesfully booked', responseData);
      // You can handle the response data here
    } catch (error) {
      console.error('Error booking appointment:', error.message);
    }
  }
  return (
    <div>
      {/* <h1>Book an appointment with: {wantedSpecialist.name}</h1> */}
        <section>
            <AppointmentBookingForm 
              specialist={wantedSpecialist} 
              availableServices={fetchedServices}
              handleAppointmentFormSubmitted={handleAppointmentFormSubmitted}
              user={user}
            />
        </section>
    </div>
  )
}
