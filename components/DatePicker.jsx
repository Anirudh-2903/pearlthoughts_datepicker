// components/DatePicker.js
"use client"

import { useDatePickerStore } from '@/store/store';
import RecurrenceOptions from './RecurrenceOptions';
import MiniCalendar from './MiniCalendar';
import DateRangePicker from './DateRangePicker';
import CustomRecurrence from './CustomRecurrence';

const DatePicker = () => {
  const { startDate, endDate, recurrenceType, recurrenceDetails } = useDatePickerStore();

  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">Select Recurring Dates</h2>
      <DateRangePicker />
      <RecurrenceOptions />
      <CustomRecurrence />
      <MiniCalendar startDate={startDate} endDate={endDate} recurrenceType={recurrenceType} recurrenceDetails={recurrenceDetails} />
    </div>
  );
};

export default DatePicker;
