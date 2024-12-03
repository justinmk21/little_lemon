import BookingForm from "./BookingForm";
import { Flex } from "@chakra-ui/react";
import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from './api.js';



function Booking() {
    const initializeTimes = () => {
        const today = new Date();
        return fetchAPI(today);
    };

    const updateTimes = (state, action) => {
        switch (action.type) {
            case "UPDATE_TIMES":
                { const selectedDate = new Date(action.date);
                return fetchAPI(selectedDate); }
            default:
                return state;
        }
    };

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

    const navigate = useNavigate();

    const submitForm = (formData) => {
        const success = submitAPI(formData);
        if (success) {
            navigate("/confirmation");
        } else {
            alert("Reservation failed. Please try again.");
        }
    };

    return (
        <Flex>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
        </Flex>
    );
}

export default Booking;

