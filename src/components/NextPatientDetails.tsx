import React from 'react'
import { Card } from './ui/card';

const NextPatientDetails = () => {
  return (
    <>
      <Card className="w-[662px] h-[252px] flex flex-col justify-between p-4">
        <div className="-mt-2 flex flex-row justify-between">
          <p className='text-xl'>Next Patient Details</p>
          <a href="#" className='text-green-500 text-sm'>View All  {'>'}</a>
        </div>
      </Card>
    </>
  );
}

export default NextPatientDetails