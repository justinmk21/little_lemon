/* eslint-disable react/prop-types */
import { Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import Button from "./Button";
import './css/BookingForm.css';

function BookingForm({ dispatch, availableTimes, submitForm }) {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState('');
    const [occasion, setOccasion] = useState('');
    const [seats, setSeats] = useState('');

    const occasions = ['Birthday', 'Anniversary', 'Engagement'];

    const handleDateChange = (event) => {
        setDate(event.target.value);
        dispatch({ type: "UPDATE_TIMES", date: event.target.value });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formData = { date, time, guests, occasion, seats };
        submitForm(formData);
    };

    return (
        <form className="form" onSubmit={handleFormSubmit}>
            <Flex
                justifyContent={'space-between'}
                alignItems={'center'}
                gap={'2'}
                >
                <label htmlFor="seats">Seating:</label>
                <Flex
                    alignItems={'center'}
                    gap={'2'}
                    >
                    <Text>Outdoor</Text>
                    <input
                        style={{ width: '16px' }}
                        value={'outdoor'}
                        checked={seats === 'outdoor'}
                        type="radio"
                        id="seats"
                        onChange={(e) => setSeats(e.target.value)}
                        required
                    />
                </Flex>
                <Flex
                    alignItems={'center'}
                    gap={'2'}
                    >
                    <Text>Indoor</Text>
                    <input
                        style={{ width: '16px' }}
                        value={'indoor'}
                        checked={seats === 'indoor'}
                        type="radio"
                        id="seats"
                        onChange={(e) => setSeats(e.target.value)}
                        required
                    />
                </Flex>
            </Flex>
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
                    <option className="dropdown" key={index} value={time}>{time}</option>
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
                    <option className="dropdown" key={i} value={oc}>{oc}</option>
                ))}
            </select>

            <Button
                type="submit"
                value="Make Your Reservations"
                disabled={!date || !time || !guests || !occasion || !seats}
            />
        </form>
    );
}

export default BookingForm;
