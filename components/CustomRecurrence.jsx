// components/CustomRecurrence.js
import { useDatePickerStore } from '@/store/store';

const CustomRecurrence = () => {
  const { recurrenceDetails, setRecurrenceDetails } = useDatePickerStore();

  const handleChange = (event) => {
    setRecurrenceDetails({ interval: event.target.value });
  };

  return (
    <div className="mt-4">
      <label htmlFor="recurrence-select" className="block mb-2 text-sm font-medium">Customize Recurrence</label>
      <input
        type="number"
        placeholder="Every X days/weeks/months/years"
        id="recurrence-select"
        value={recurrenceDetails.interval || ''}
        onChange={handleChange}
        className="block w-full p-2 border rounded-md"
      />
    </div>
  );
};

export default CustomRecurrence;
