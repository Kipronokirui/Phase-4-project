import React from 'react'
import Sidebar from './Sidebar'
import MainContent from './MainContent'

export default function PatientDasboard({appointments, user}) {
  return (
    <div>
        <section className='grid grid-cols-10 py-4'>
            <div className='col-span-2'>
                <Sidebar />
            </div>
            <div className='col-span-8'>
                <MainContent user={user} appointments={appointments}/>
            </div>
        </section>
    </div>
  )
}
