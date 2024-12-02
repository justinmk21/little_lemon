import { Container, Flex, Heading, Text } from "@chakra-ui/react"
import { LuArrowBigLeft } from "react-icons/lu";
import { Outlet, Link } from "react-router-dom";


function ConfirmedBooking(){

    return (
    <Flex
        flexDirection={'column'}
        textAlign={'center'}
        margin={'30px auto'}
        >
        <Container
            backgroundColor={'#EDEFEE'}
            width={'6%'}
            >
            <Flex
                justifyContent={'center'}
                alignItems={'center'}
                borderRadius={'8px'}
                padding={'4px 6px'}
                gap={'2'}
                >
                <LuArrowBigLeft/>
                <Link
                    to={'/booking'}
                    >
                    Back
                </Link>
            </Flex>
        </Container>
        <Heading>
            Your booking has been confirmed!
        </Heading>
        <Text>
            Thank you for booking with Little Lemon.
            We look forward to seeing you!
        </Text>
        <Outlet/>
    </Flex>

    )
}

export default ConfirmedBooking