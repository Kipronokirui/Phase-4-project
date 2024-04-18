import React from 'react'
import AppointmentBookingForm from '../components/appointment/AppointmentBookingForm'
import { useLocation } from 'react-router-dom';

export default function BookAppointment() {
  const location = useLocation();
  const wantedSpecialist = location.state.specialist
  console.log('Specialist is:', wantedSpecialist)
  return (
    <div>
      <h1>Book an appointment with: {wantedSpecialist.name}</h1>
        <section>
            <AppointmentBookingForm />
        </section>
    </div>
  )
}
