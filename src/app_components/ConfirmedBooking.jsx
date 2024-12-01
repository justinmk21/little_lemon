import { Flex, Heading, Text } from "@chakra-ui/react"
import { Outlet, Link } from "react-router-dom";


function ConfirmedBooking(){

    return (
    <Flex justifyContent={'center'}>
        <Link to={'/booking'}>Book</Link>
        <Heading>Your booking has been confirmed!</Heading>
        <Text>Thank you for booking with Little Lemon. We look forward to seeing you!</Text>
        <Outlet/>
    </Flex>

    )
}

export default ConfirmedBooking