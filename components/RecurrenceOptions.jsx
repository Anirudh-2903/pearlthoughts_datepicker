// components/RecurrenceOptions.js
import { useDatePickerStore } from '@/store/store';

const RecurrenceOptions = () => {
  const { recurrenceType, setRecurrenceType } = useDatePickerStore();

  return (
    <div className="mt-4">
      <label htmlFor="recurrence-select" className="block mb-2 text-sm font-medium">Recurrence Pattern</label>
      <select
        value={recurrenceType}
        id="recurrence-select"
        onChange={(e) => setRecurrenceType(e.target.value)}
        className="block w-full p-2 border rounded-md"
      >
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
    </div>
  );
};

export default RecurrenceOptions;
