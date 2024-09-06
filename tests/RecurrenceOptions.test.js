import { render, screen, fireEvent } from '@testing-library/react';
import RecurrenceOptions from '../components/RecurrenceOptions';
import { create } from 'zustand';
import { useDatePickerStore } from '../store/store';

// Mock the Zustand store
const useStoreMock = create((set) => ({
  recurrenceType: 'daily',
  setRecurrenceType: jest.fn((type) => set({ recurrenceType: type })),
}));

// Mock the `useDatePickerStore` hook
jest.mock('../store/store', () => ({
  useDatePickerStore: () => useStoreMock(),
}));

describe('RecurrenceOptions Component', () => {
  test('renders with default value', () => {
    render(<RecurrenceOptions />);
    
    // Check if the select element is rendered with default value
    expect(screen.getByLabelText(/Recurrence Pattern/i)).toHaveValue('daily');
  });

  test('changes value when select option is changed', () => {
    // Render the component
    render(<RecurrenceOptions />);
    
    // Change the select option
    fireEvent.change(screen.getByLabelText(/Recurrence Pattern/i), { target: { value: 'weekly' } });

    // Check if the mock function was called with the correct value
    const setRecurrenceType = useStoreMock.getState().setRecurrenceType;
    expect(setRecurrenceType).toHaveBeenCalledWith('weekly');
  });
});