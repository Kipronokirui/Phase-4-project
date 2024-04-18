import React from 'react'
import LoginForm from '../components/authentication/LoginForm'

export default function Login() {
  const handleLogin = async (data) => {
    try {
      const response = await fetch('http://127.0.0.1:5000/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: data
        // body:data
      });
  
      if (!response.ok) {
        throw new Error('Failed to log in');
      }
  
      const responseData = await response.json();
      console.log('Login successful', responseData);
      // You can handle the response data here
  
    } catch (error) {
      console.error('Error logging in:', error.message);
      // Handle errors here
    }
  };
  
  return (
    <div>
        <LoginForm handleLogin={handleLogin}/>
    </div>
  )
}
