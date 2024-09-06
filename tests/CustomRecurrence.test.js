import { render, screen, fireEvent } from '@testing-library/react';
import CustomRecurrence from '../components/CustomRecurrence';
import { create } from 'zustand';

// Mock Zustand store setup
const useStoreMock = create((set) => ({
  recurrenceDetails: { interval: '1' },
  setRecurrenceDetails: jest.fn((details) => set({ recurrenceDetails: details })),
}));

// Mock the `useDatePickerStore` hook
jest.mock('../store/store', () => ({
  useDatePickerStore: () => useStoreMock(),
}));

describe('CustomRecurrence Component', () => {
  test('updates input value', () => {
    render(<CustomRecurrence />);
    
    // Get the mock function from the store
    const setRecurrenceDetails = useStoreMock.getState().setRecurrenceDetails;
    
    // Simulate user input
    fireEvent.change(screen.getByPlaceholderText(/Every X days/i), { target: { value: '5' } });
    
    // Verify the mock function was called with the correct argument
    expect(setRecurrenceDetails).toHaveBeenCalledWith({ interval: '5' });
  });
});
