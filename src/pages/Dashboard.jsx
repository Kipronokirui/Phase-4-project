import React, {useState, useEffect} from 'react'
// import PatientDashboard from '../components/dashboard/PatientDashboard'
import DoctorDashboard from '../components/dashboard/DoctorDashboard'
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([])
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if(user){
      const fetchAppointments = async () => {
        try {
          const response = await fetch('http://127.0.0.1:5000/services');
          if (!response.ok) {
            throw new Error('Failed to fetch services');
          }
          const appointmentsData = await response.json();
          setAppointments(appointmentsData);
        } catch (error) {
          console.error('Error fetching services:', error);
        }
      };

      fetchAppointments();
    }else{
      navigate('/login')
    }
  }, [navigate, user]);
  return (
    <div>
        {/* <div>
            <PatientDashboard />
        </div> */}
        <div>
            <DoctorDashboard appointments={appointments}/>
        </div>
    </div>
  )
}
