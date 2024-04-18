import React, {useState, useEffect} from 'react'
import SpecialistsList from '../components/specialists/SpecialistsList'

export default function FindSpecialist() {
  const [fetchedProviders, setFetchedProviders] = useState([]);

  useEffect(() => {
    console.log("Fetching providers")
    const fetchData = async () => {
      try {
          const response = await fetch('http://127.0.0.1:5000/healthcare_providers');
          const data = await response.json();
          setFetchedProviders(data);
      } catch (error) {
          console.error('Error fetching healthcare providers:', error);
      }
    };
    fetchData();
    console.log("Fetching providers already done")
  }, [])
  return (
    <div>
      {fetchedProviders.length === 0 ? (
        <p>Please Wait....</p>
      ) : (
        <section className='p-12'>
            <SpecialistsList providers={fetchedProviders}/>
        </section>
      )}
        
    </div>
  )
}
