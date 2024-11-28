import { Heading, Image, Text, Flex, Box } from "@chakra-ui/react"
import Food from './images/restauranfood.jpg'
import Button from "./Button"


function LandingPage() {

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
                <Button value={'Reserve a Table'}/>
            </Box>
        </Flex>
        <Image src={Food} width={'330px'} height={'320px'} borderRadius={'16px'}/>
        </>
    )
}

export default LandingPage