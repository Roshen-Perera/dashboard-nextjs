import React from 'react'
import { Card } from './ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';

const TodaySurgeries = () => {
  return (
    <>
      <Card className="bg-#f5fffa  w-full max-w-[662px] h-[252px] flex flex-col p-4">
        <div className="-mt-2 flex flex-row justify-between">
          <p className="text-xl">Today&apos;s Surgeries</p>
          <a
            href="/surgeries"
            className="text-green-500 text-sm hover:underline"
          >
            View All Surgeries &gt;
          </a>
        </div>

        <div className="flex flex-col gap-4 overflow-x-auto">
          <Table className="min-w-full table-fixed">
            <TableHeader>
              <TableRow className="border-b border-gray-300">
                <TableHead className="w-1/3 text-left">Time</TableHead>
                <TableHead className="w-1/3 text-left">Patient name</TableHead>
                <TableHead className="w-1/3 text-right">Surgery Type</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-muted border-0 cursor-pointer">
                <TableCell className="w-1/3 text-left">09:00 AM</TableCell>
                <TableCell className="w-1/3 text-left">Major Miranda</TableCell>
                <TableCell className="w-1/3 text-right">Lorem Ipsum</TableCell>
              </TableRow>
              <TableRow className="hover:bg-muted border-0 cursor-pointer">
                <TableCell className="w-1/3 text-left">10:30 AM</TableCell>
                <TableCell className="w-1/3 text-left">Dr. John Doe</TableCell>
                <TableCell className="w-1/3 text-right">
                  Dolor Sit Amet
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </Card>
    </>
  ); 
}

export default TodaySurgeries
