import React from 'react'
import CurrentVitals from './CurrentVitals'
import Biometrics from './Biometrics'

const MedicalHistory = () => {
  return (
    <div className='flex flex-row justify-between'>
      <CurrentVitals/>
      <Biometrics/>
    </div>
  )
}

export default MedicalHistory
