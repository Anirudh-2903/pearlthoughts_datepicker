import {create} from 'zustand';

export const useDatePickerStore = create((set) => ({
  startDate: null,
  endDate: null,
  recurrenceType: 'daily',
  recurrenceDetails: {},
  setStartDate: (date) => set({ startDate: date }),
  setEndDate: (date) => set({ endDate: date }),
  setRecurrenceType: (type) => set({ recurrenceType: type }),
  setRecurrenceDetails: (details) => set({ recurrenceDetails: details }),
}));
