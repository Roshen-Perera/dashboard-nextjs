import React from 'react'
import CurrentVitals from './CurrentVitals'
import Biometrics from './Biometrics'
import SurgerySchedule from './SurgerySchedule'
import Medications from './Medications'
import MedicalConditions from './MedicalConditions'
import RecentNotes from './RecentNotes'
import VisitHistory from './VisitHistory'
import AdmissionHistory from './AdmissionHistory'

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
        <div className="flex mt-4 justify-between">
          <MedicalConditions />
          <RecentNotes />
        </div>
        <div className="mt-4">
          <VisitHistory />
        </div>
        <div className="mt-4">
          <AdmissionHistory />
        </div>
      </div>
    </>
  );
}

export default MedicalHistory
