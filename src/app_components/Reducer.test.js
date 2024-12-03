/* eslint-disable no-undef */
// reducer.test.js
import { initializeTimes, updateTimes } from './Booking';

describe('initializeTimes', () => {
  test('should return the correct initial available times', () => {
    const expectedTimes = ['17:00', '18:00', '19:00', '20:00'];
    const result = initializeTimes();
    expect(result).toEqual(expectedTimes);
  });
});

describe('updateTimes', () => {
  test('should return the same state when action is dispatched', () => {
    const initialState = ['17:00', '18:00', '19:00', '20:00'];
    const action = { type: 'UPDATE_TIMES', date: '2023-12-01' };

    const newState = updateTimes(initialState, action);

    // Assert that the state hasn't changed for now
    expect(newState).toEqual(initialState);
  });
});
