import React from 'react'
import CurrentVitals from './CurrentVitals'
import Biometrics from './Biometrics'
import SurgerySchedule from './SurgerySchedule'

const MedicalHistory = () => {
  return (
    <>
      <div>
        <div className="flex flex-row justify-between">
          <CurrentVitals />
          <Biometrics />
        </div>
        <div className='mt-4'>
          <SurgerySchedule />
        </div>
      </div>
    </>
  );
}

export default MedicalHistory
