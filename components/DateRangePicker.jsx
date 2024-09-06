// components/DateRangePicker.js
import { useDatePickerStore } from '@/store/store';
import { DatePicker as BaseDatePicker } from 'react-date-picker'; // You can use any date picker library

const DateRangePicker = () => {
  const { startDate, setStartDate, endDate, setEndDate } = useDatePickerStore();

  return (
    <div className="mt-4">
    <label className="block mb-2 text-sm font-medium text-primary">Select Date Range</label>
    <div className="flex space-x-4">
      <input
        type="date"
        value={startDate ? startDate.toISOString().split('T')[0]: ''}
        onChange={(e) => setStartDate(new Date(e.target.value))}
        className="p-2 border rounded-md border-gray-300 focus:ring-2 focus:ring-accent text-text"
      />
      <input
        type="date"
        value={endDate ? endDate.toISOString().split('T')[0] : ''}
        onChange={(e) => setEndDate(e.target.value ? new Date(e.target.value) : null)}
        className="p-2 border rounded-md border-gray-300 focus:ring-2 focus:ring-accent text-text"
      />
    </div>
  </div>
  );
};

export default DateRangePicker;
