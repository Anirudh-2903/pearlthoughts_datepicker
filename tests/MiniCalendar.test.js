// tests/MiniCalendar.test.js
import { render, screen } from '@testing-library/react';
import MiniCalendar from '../components/MiniCalendar';
import { addDays } from 'date-fns';

const startDate = new Date();
const endDate = addDays(startDate, 30);
const recurringDates = [startDate, addDays(startDate, 7), addDays(startDate, 14)]; // Weekly recurrence

describe('MiniCalendar Component', () => {
  test('renders calendar grid', () => {
    render(<MiniCalendar startDate={startDate} endDate={endDate} recurrenceType="weekly" recurrenceDetails={{ interval: 7 }} />);
    
    // Check if calendar days are rendered
    expect(screen.getByText(new Date().getDate())).toBeInTheDocument();
  });

  test('highlights recurring dates', () => {
    render(<MiniCalendar startDate={startDate} endDate={endDate} recurrenceType="weekly" recurrenceDetails={{ interval: 7 }} />);
    
    // Check if recurring dates are highlighted
    recurringDates.forEach(date => {
      expect(screen.getByText(date.getDate())).toHaveClass('bg-accent');
    });
  });
});
