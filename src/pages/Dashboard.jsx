import React from 'react'
import PatientDashboard from '../components/dashboard/PatientDashboard'
import DoctorDashboard from '../components/dashboard/DoctorDashboard'

export default function Dashboard() {
  return (
    <div>
        {/* <div>
            <PatientDashboard />
        </div> */}
        <div>
            <DoctorDashboard />
        </div>
    </div>
  )
}
