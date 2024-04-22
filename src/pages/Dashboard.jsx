import React, {useState, useEffect} from 'react'
// import PatientDashboard from '../components/dashboard/PatientDashboard'
import DoctorDashboard from '../components/dashboard/DoctorDashboard'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import PatientDasboard from '../components/dashboard/PatientDasboard';
// import { fetchUserAppointments, fetchHealthcareProviderAppointments } from '../components/utils/dashboard';

export default function Dashboard() {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([])
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if(user){
      if(user.user_type === 'Patient'){
        // toast.info("User is patient")
        // fetchUserAppointments()
        const fetchUserAppointments = async () => {
          try {
            const response = await fetch(`https://medi-scheduler-app.onrender.com/appointments/${user.user_id}`);
            if (!response.ok) {
              throw new Error('Failed to fetch services');
            }
            const appointmentsData = await response.json();
            setAppointments(appointmentsData);
          } catch (error) {
            console.error('Error fetching services:', error);
          }
        };
  
        fetchUserAppointments();
      }else if(user.user_type === 'HealthcareProvider'){
        toast.info("User is healthcare provider")
        // fetchHealthcareProviderAppointments()
        const fetchHealthcareProviderAppointments = async () => {
          try {
            const response = await fetch(`https://medi-scheduler-app.onrender.com/appointments/healthcare/${user.user_id}`);
            if (!response.ok) {
              throw new Error('Failed to fetch services');
            }
            const appointmentsData = await response.json();
            setAppointments(appointmentsData);
          } catch (error) {
            console.error('Error fetching services:', error);
          }
        };
  
        fetchHealthcareProviderAppointments();
      }

      // const fetchAppointments = async () => {
      //   try {
      //     const response = await fetch(`http://127.0.0.1:5000/appointments/${user.user_id}`);
      //     if (!response.ok) {
      //       throw new Error('Failed to fetch services');
      //     }
      //     const appointmentsData = await response.json();
      //     setAppointments(appointmentsData);
      //   } catch (error) {
      //     console.error('Error fetching services:', error);
      //   }
      // };

      // fetchAppointments();
    }else{
      toast.info("Please login first")
      navigate('/login')
    }
  }, []);

  return (
    <div>
      {user&& (
        <>
          {user.user_type === 'Patient' ? (
            <div>
                <PatientDasboard user={user} appointments={appointments}/>
            </div>
          ) : (
            <div>
              <DoctorDashboard user={user} appointments={appointments}/>
            </div>
          )}
        </>
      )}
    </div>
  )
}
