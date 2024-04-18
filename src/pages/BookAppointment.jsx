import React, {useState, useEffect} from 'react'
import AppointmentBookingForm from '../components/appointment/AppointmentBookingForm'
import { useLocation } from 'react-router-dom';

export default function BookAppointment() {
  const [fetchedServices, setFetchedServices] = useState([])
  const location = useLocation();
  const wantedSpecialist = location.state.provider
  // console.log('Specialist is:', wantedSpecialist)
  useEffect(() => {
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
  }, []);

  const handleAppointmentFormSubmitted = async(data) => {
    console.log("Appointment form submitted", data)
  }
  return (
    <div>
      {/* <h1>Book an appointment with: {wantedSpecialist.name}</h1> */}
        <section>
            <AppointmentBookingForm 
              specialist={wantedSpecialist} 
              availableServices={fetchedServices}
              handleAppointmentFormSubmitted={handleAppointmentFormSubmitted}
            />
        </section>
    </div>
  )
}
