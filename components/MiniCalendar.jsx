import { useMemo } from 'react';
import { format, addDays, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay } from 'date-fns';

export default function MiniCalendar({ startDate, endDate, recurrenceType, recurrenceDetails }) {
  const monthStart = startOfMonth(startDate || new Date());
  const monthEnd = endOfMonth(startDate || new Date());

  const calendarDays = useMemo(() => eachDayOfInterval({ start: monthStart, end: monthEnd }), [monthStart, monthEnd]);

  const recurringDates = useMemo(() => {
    const dates = [];
    let currentDate = startDate;

    while (currentDate <= endDate) {
      dates.push(currentDate);

      switch (recurrenceType) {
        case 'daily':
          currentDate = addDays(currentDate, 1);
          break;
        case 'weekly':
          currentDate = addDays(currentDate, 7);
          break;
        case 'monthly':
          currentDate = addDays(currentDate, 30);
          break;
        case 'yearly':
          currentDate = addDays(currentDate, 365);
          break;
        default:
          break;
      }
    }
    return dates;
  }, [startDate, endDate, recurrenceType, recurrenceDetails]);

  const isRecurringDate = (date) => recurringDates.some((recurringDate) => isSameDay(recurringDate, date));

  return (
    <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold text-primary mb-4">Recurring Dates Preview</h3>
      <div className="grid grid-cols-7 gap-2 text-center">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
          <div key={index} className="text-sm font-bold text-gray-500">
            {day}
          </div>
        ))}
        {calendarDays.map((day, index) => (
          <div
            key={index}
            className={`p-2 rounded-md border ${
              isRecurringDate(day) ? 'bg-accent text-white' : 'bg-background text-text'
            } hover:bg-hoverAccent transition-all`}
          >
            {format(day, 'd')}
          </div>
        ))}
      </div>
    </div>
  );
}
