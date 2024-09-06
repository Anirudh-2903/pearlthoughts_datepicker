// tests/DatePickerIntegration.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import DatePicker from '../components/DatePicker';
import { addDays } from 'date-fns';

describe('DatePicker Integration Test', () => {
  test('updates recurring dates on interaction', () => {
    render(<DatePicker />);
    
    // Select recurrence pattern
    fireEvent.change(screen.getByLabelText(/Recurrence Pattern/i), { target: { value: 'weekly' } });

    // Check if custom recurrence input is updated
    fireEvent.change(screen.getByPlaceholderText(/Every X days\/weeks\/months/i), { target: { value: '7' } });
  });
});
