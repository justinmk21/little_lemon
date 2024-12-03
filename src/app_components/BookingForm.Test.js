/* eslint-disable no-undef */
// BookingForm.test.js
import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';
import '@testing-library/jest-dom/extend-expect';

describe('BookingForm', () => {
  test('renders static text elements in the form', () => {
    const mockDispatch = jest.fn();
    const mockSubmitForm = jest.fn();
    const availableTimes = ['18:00', '19:00'];

    render(<BookingForm dispatch={mockDispatch} availableTimes={availableTimes}
      submitForm={mockSubmitForm} />);


    expect(screen.getByText('Seating:')).toBeInTheDocument();
    expect(screen.getByText('Outdoor')).toBeInTheDocument();
    expect(screen.getByText('Indoor')).toBeInTheDocument();
    expect(screen.getByLabelText('Choose Date')).toBeInTheDocument();
    expect(screen.getByLabelText('Choose Time')).toBeInTheDocument();
    expect(screen.getByLabelText('Number of Guests')).toBeInTheDocument();
    expect(screen.getByLabelText('Occasion')).toBeInTheDocument();
  });
});
