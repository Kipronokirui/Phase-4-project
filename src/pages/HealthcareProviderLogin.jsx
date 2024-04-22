import React, {useEffect} from 'react'
import LoginForm from '../components/authentication/LoginForm'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import HealthcareProviderLoginForm from '../components/authentication/HealthcareProviderLoginForm';

export default function HealthcareProviderLogin() {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        if (user){
          console.log("User already logged in")
          toast.info("You are already logged in!")
    
          navigate('/')
        }
    })

    const handleLogin = async (data) => {
        localStorage.removeItem("user");
        try {
          const response = await fetch('https://medi-scheduler-app.onrender.com/Healthcare_provider/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: data
          });
          const responseData = await response.json();
          console.log("Response data length is:", Array.isArray(responseData))
    
          if (Array.isArray(responseData)) {
            console.log("An error occured")
            toast.info("An error occured")
            console.log("The setUser in local storage is: ", JSON.parse(localStorage.getItem('user')))
          }else{
            // console.log("Login was succesful")
            localStorage.setItem("user", JSON.stringify(responseData));
            console.log("The setUser in local storage is: ", JSON.parse(localStorage.getItem('user')))
            toast.info("Login succesful")
            navigate('/')
            console.log("It ius now verified")
          }
      
          
          console.log("Response status is:", response.status)
          
          // navigate('/')
          // You can handle the response data here
      
        } catch (error) {
          console.error('Error logging in:', error.message);
          toast.info(`Error logging in`)
          // Handle errors here
        }
    };
  return (
    <div>
        {/* <LoginForm handleLogin={handleLogin}/> */}
        <HealthcareProviderLoginForm handleLogin={handleLogin}/>
    </div>
  )
}
