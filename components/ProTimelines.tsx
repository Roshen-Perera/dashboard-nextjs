import React from 'react'
import { Card } from './ui/card';

const ProTimeline = () => {
    const timelineData = [
      {
        period: "2020 - Present",
        position: "Chief of Cardiology",
        organization: "Central Hospital",
      },
      {
        period: "2020 - Present",
        position: "Chief of Cardiology",
        organization: "Central Hospital",
      },
      {
        period: "2020 - Present",
        position: "Chief of Cardiology",
        organization: "Central Hospital",
      },
    ];
  return (
    <Card className="w-[469px] h-[350px] bg-[#f5fffa] rounded-lg p-4">
      <p className="text-xl -mb-1">Professional Timeline</p>

      <div className="space-y-6">
        {timelineData.map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            {/* Timeline dot */}
            <div className="flex flex-col items-center">
              <div className="w-3 h-3 bg-gray-800 rounded-full mt-1"></div>
              {index < timelineData.length  && (
                <div className="w-0.5 bg-gray-300 h-12"></div>
              )}
            </div>

            {/* Timeline content */}
            <div className="flex-1">
              <p className="text-sm text-gray-600 mb-1">{item.period}</p>
              <h3 className="text-base text-gray-900 mb-1">
                {item.position}
              </h3>
              <p className="text-sm text-gray-500">{item.organization}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ProTimeline;
