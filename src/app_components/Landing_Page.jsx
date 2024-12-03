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
        <Box>
            <Flex
                className="landingPage"
                justifyContent={'space-between'}
                minHeight={'220px'}
                >
                <Box
                    maxWidth={'330px'}
                    >
                    <Heading
                        fontSize={['3xl', '4xl', '5xl', '5xl']}
                        color={'#F4CE14'}
                        >
                            Little Lemon
                    </Heading>
                    <Heading
                        fontSize={['xl', '2xl', '2xl']}
                        color={'white'}
                        marginTop={'16px'}
                        >
                            Chicago
                    </Heading>
                    <Text
                        color={'white'}
                        padding={'20px 0 10px 0'}
                        fontSize={['md', 'lg', 'large']}
                        >
                        We are a family owned Maditerranean restaurant, focused on
                        traditional recipes served with a modern twist.
                    </Text>
                    <Button onClick={handleClick} value={'Reserve a Table'}/>
                </Box>
                <Image
                    className="img"
                    src={FoodChef}
                    width={{ base: "160px", md: "260px", lg: "330px" }}
                    height={{ base: "150px" , md: "240px", lg: '320px' }}
                    alt="Chef with food"
                    loading="lazy"
                    borderRadius={'16px'}
                />
            </Flex>
        </Box>
    )
}

export default LandingPage