import { Heading, Image, Text, Flex, Box } from "@chakra-ui/react"
import FoodChef from './images/FoodChef.jpg'
import Button from "./Button"
import { useNavigate } from "react-router-dom"


function LandingPage() {

    const navToBooking = useNavigate();

    const handleClick = () => {
        navToBooking('/booking')
    }

    return (
        <>
        <Flex maxWidth={'280px'}>
            <Box maxWidth={'400px'} minHeight={'220px'}>
                <Heading size={'5xl'} color={'#F4CE14'}>Little Lemon</Heading>
                <Heading size={'2xl'} color={'white'}>Chicago</Heading>
                <Text color={'white'} padding={'20px 0 10px 0'} fontSize={'large'}>
                    We are a family owned Maditerranean restaurant, focused on
                    traditional recipes served with a modern twist.
                </Text>
                <Button onClick={handleClick} value={'Reserve a Table'}/>
            </Box>
        </Flex>
        <Image
            src={FoodChef}
            width={{ base: "130px", md: "260px", lg: "330px" }}
            height={'320px'} alt="Chef with food" loading="lazy"
            borderRadius={'16px'}
            />
        </>
    )
}

export default LandingPage