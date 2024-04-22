import React, {useState, useEffect} from 'react'
import AppointmentBookingForm from '../components/appointment/AppointmentBookingForm'
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function BookAppointment() {
  const [fetchedServices, setFetchedServices] = useState([])
  const [loading, setLoading] = useState(false)
  const location = useLocation();
  const wantedSpecialist = location.state.provider
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('user'));
  
  // console.log('Specialist is:', wantedSpecialist)
  useEffect(() => {
    if(!user){
      // console.log("You must be logged in before booking an appointment")
      toast.info("You must be logged in before booking an appointment")
      navigate('/login')
    }else{
      console.log('User Id is:', user.user_id)
      const fetchServices = async () => {
        try {
          const response = await fetch('https://medi-scheduler-app.onrender.com/services');
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
      setLoading(true)
      const response = await fetch('https://medi-scheduler-app.onrender.com/appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: data
      });

      if (!response.ok) {
        setLoading(false)
        throw new Error('Failed to book the appointment');
      }
  
      const responseData = await response.json();

      console.log('Appointment succesfully booked', responseData);

      toast.success('Appointment succesfully booked', {
        autoClose: 2000
      })

      setLoading(false)

      navigate('/dashboard')
      // You can handle the response data here
    } catch (error) {
      setLoading(false)
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
              loading={loading}
            />
        </section>
    </div>
  )
}
