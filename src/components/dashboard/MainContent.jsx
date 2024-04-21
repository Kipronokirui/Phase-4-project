import React from 'react'
import Table from './Table'

export default function MainContent({appointments, user}) {
  return (
    <div className='p-4'>
        <Table user={user} appointments={appointments}/>
    </div>
  )
}
