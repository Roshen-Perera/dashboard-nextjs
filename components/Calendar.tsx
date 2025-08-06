"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => (
  <div className={className}>{children}</div>
);

export function Calendar() {
  const [currentDate, setCurrentDate] = React.useState(new Date());

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const navigateMonth = (direction: number) => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + direction);
      return newDate;
    });
  };

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const today = new Date();

    const days = [];

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-6 w-6"></div>);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const isToday =
        today.getDate() === day &&
        today.getMonth() === currentDate.getMonth() &&
        today.getFullYear() === currentDate.getFullYear();

      days.push(
        <div
          key={day}
          className={`h-6 w-6 flex items-center justify-center text-xs cursor-pointer rounded-full hover:bg-green-100 transition-colors ${
            isToday
              ? "bg-green-200 font-semibold text-green-800"
              : "text-gray-700"
          }`}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  return (
    <Card className="w-[348px] h-[227px] bg-[#f5fffa] p-3 border border-green-100 rounded-lg shadow-sm">
      <div className="h-full flex flex-col">
        {/* Header with navigation */}
        <div className="flex items-center justify-between mb-2">
          <button
            onClick={() => navigateMonth(-1)}
            className="p-1 hover:bg-green-100 rounded-full transition-colors"
          >
            <ChevronLeft className="h-3 w-3 text-gray-600" />
          </button>

          <h2 className="text-sm font-semibold text-gray-800">
            {months[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>

          <button
            onClick={() => navigateMonth(1)}
            className="p-1 hover:bg-green-100 rounded-full transition-colors"
          >
            <ChevronRight className="h-3 w-3 text-gray-600" />
          </button>
        </div>

        {/* Days of week header */}
        <div className="grid grid-cols-7 gap-1 mb-1">
          {daysOfWeek.map((day, index) => (
            <div
              key={index}
              className="h-5 flex items-center justify-start pl-1"
            >
              <span className="text-xs font-medium text-gray-500">{day}</span>
            </div>
          ))}
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-1 flex-1 mb-2">
          {renderCalendarDays()}
        </div>
      </div>
    </Card>
  );
}
