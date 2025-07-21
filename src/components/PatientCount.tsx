import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

const PatientCount = () => {
  return (
    <>
      <Card className="flex w-[210px] h-[100px]">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
      </Card>
    </>
  );
}

export default PatientCount
