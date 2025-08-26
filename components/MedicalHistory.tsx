import React from 'react'
import CurrentVitals from './CurrentVitals'

const MedicalHistory = () => {
  return (
    <div className='flex flex-row justify-between'>
      <CurrentVitals/>
      <CurrentVitals/>
    </div>
  )
}

export default MedicalHistory
