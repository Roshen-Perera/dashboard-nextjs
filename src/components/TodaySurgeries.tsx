import React from 'react'
import { Card } from './ui/card'

const TodaySurgeries = () => {
  return (
    <>
      <Card className="w-[662px] h-[252px] flex flex-col justify-between p-4">
        <div className="-mt-2 flex flex-row justify-between">
          <p className="text-xl">Today&apos;s Surgeries</p>
          <a href="#" className="text-green-500 text-sm">
            View All Sugeries{">"}
          </a>
        </div>
      </Card>
    </>
  ); 
}

export default TodaySurgeries
