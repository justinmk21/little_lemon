/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "./Button";
import './css/BookingForm.css';

function BookingForm({ dispatch, availableTimes, submitForm }) {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState('');
    const [occasion, setOccasion] = useState('');

    const occasions = ['Birthday', 'Anniversary', 'Engagement'];

    const handleDateChange = (event) => {
        setDate(event.target.value);
        dispatch({ type: "UPDATE_TIMES", date: event.target.value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formData = { date, time, guests, occasion };
        submitForm(formData);
    };

    return (
        <form className="forms" onSubmit={handleFormSubmit}>
            <label htmlFor="res-date">Choose Date</label>
            <input
                value={date}
                type="date"
                id="res-date"
                onChange={handleDateChange}
                required
            />

            <label htmlFor="res-time">Choose Time</label>
            <select
                value={time}
                id="res-time"
                className="dropdown"
                onChange={(e) => setTime(e.target.value)}
                required
            >
                <option value="">Select Time</option>
                {availableTimes.map((time, index) => (
                    <option key={index} value={time}>{time}</option>
                ))}
            </select>

            <label htmlFor="guests">Number of Guests</label>
            <input
                value={guests}
                type="number"
                id="guests"
                placeholder="1"
                min="1"
                max="10"
                onChange={(e) => setGuests(e.target.value)}
                required
            />

            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                required
            >
                <option value="">Occasion</option>
                {occasions.map((oc, i) => (
                    <option key={i} value={oc}>{oc}</option>
                ))}
            </select>

            <Button
                type="submit"
                value="Make Your Reservations"
                disabled={!date || !time || !guests || !occasion}
            />
        </form>
    );
}

export default BookingForm;
