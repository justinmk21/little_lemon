import { Box, Flex, Grid, Heading } from "@chakra-ui/react"
import LandingPage from "./Landing_Page"
import MenuCard from "./Menu_Card"
import Button from "./Button"
import GreekSalad from './images/GreekSalad(H).jpg'
import lemonDessert from './images/lemon dessert.jpg'
import Bruchetta from './images/Bruchetta(H).jpg'
import { useNavigate } from "react-router-dom"
import Testimony from "./Testimonials"
import './css/LandingPage.css'


const foodMenu = [
    {
        foodImage: GreekSalad,
        item: 'Greek Salad',
        price: "12.99",
        description: 'The famous greek salad of crispy of lettuce, peppers, \
                      olivesand our chicago style feta cheese, garnished with\
                      crunchygarlic and rosemary croutons.',
    },
    {
        foodImage: Bruchetta,
        item: 'Bruchetta',
        price: "5.00",
        description: 'Our Bruchetta is made from grilled bread that has been \
                      seasoned with garlic and seasoned with sald and olive oil.'
    },
    {
        foodImage: lemonDessert,
        item: 'Lemon Dessert',
        price: "5.00",
        description: "This comes straight from grandma's recipe book, every last \
                      ingredient has been sourced and is as autheentic as it can be\
                      imagined."
    }
]

function Home() {

    const navigateToMenu = useNavigate();

    const handleButtonClick = () => {
        navigateToMenu('/menu');
    }

    return (
        <main>
            <Box
                backgroundColor={'#495E57'}
                minHeight={'220px'}
                alignItems={'center'}
                >
                <LandingPage/>
            </Box>
            <Flex
                flexDirection={'column'}
                >
                <article>
                    <Flex
                        justifyContent={'space-around'}
                        alignItems={'center'}
                        margin={'32px 0'}
                        gap={2}
                        >
                        <Heading
                            size={'2xl'}
                            >
                            This Week&apos;s Specials!
                        </Heading>
                        <Button
                            onClick={handleButtonClick}
                            value={'Online Menu'}
                            >
                            Online Menu
                        </Button>
                    </Flex>
                    <Flex
                        justifyContent={'center'}
                        >
                        <Grid
                            templateColumns={{
                            base:"repeat(1, 1fr)",
                            md:"repeat(2, 1fr)",
                            lg:"repeat(3, 1fr)"
                            }}
                            gridGap={12}
                            >
                            {foodMenu.map((food, i) => (
                                <MenuCard
                                    key={i}
                                    item={food.item}
                                    price={food.price}
                                    img={food.foodImage}
                                    description={food.description}
                                    />
                            ))}
                        </Grid>
                    </Flex>
                </article>
                <Flex
                    justifyContent={'center'}
                    >
                    <Testimony/>
                </Flex>
            </Flex>
        </main>
    )
}

export default Home