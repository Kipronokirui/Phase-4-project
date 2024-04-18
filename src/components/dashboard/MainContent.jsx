import React from 'react'
import Table from './Table'

export default function MainContent({appointments}) {
  return (
    <div className='p-4'>
        <Table appointments={appointments}/>
    </div>
  )
}
