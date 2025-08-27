import React from 'react'
import CurrentVitals from './CurrentVitals'
import Biometrics from './Biometrics'
import SurgerySchedule from './SurgerySchedule'
import Medications from './Medications'

const MedicalHistory = () => {
  return (
    <>
      <div>
        <div className="flex flex-row justify-between">
          <CurrentVitals />
          <Biometrics />
        </div>
        <div className="mt-4">
          <SurgerySchedule />
        </div>
        <div className="mt-4">
          <Medications />
        </div>
      </div>
    </>
  );
}

export default MedicalHistory
