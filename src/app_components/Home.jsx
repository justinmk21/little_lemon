import { Flex, Grid, Heading } from "@chakra-ui/react"
import LandingPage from "./Landing_Page"
import MenuCard from "./Menu_Card"
import Button from "./Button"
import foodImg from './images/greek salad.jpg'
import lemonDessert from './images/lemon dessert.jpg'
import { useNavigate } from "react-router-dom"


const foodMenu = [
    {
        foodImage: foodImg,
        item: 'Greek Salad',
        price: "12.99",
        description: 'The famous greek salad of crispy of lettuce, peppers, \
                      olivesand our chicago style feta cheese, garnished with\
                      crunchygarlic and rosemary croutons.',
    },
    {
        foodImage: foodImg,
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
            <Flex justifyContent={'space-between'} backgroundColor={'#495E57'}
            minHeight={'220px'}
            padding={'32px 300px'}
            >
                <LandingPage/>
            </Flex>
            <Flex flexDirection={'column'} margin={'0 300px'}>
                <article>
                    <Flex justifyContent={'space-between'} margin={'32px 0'}>
                        <Heading size={'2xl'}>This Week&apos;s Specials!</Heading>
                        <Button onClick={handleButtonClick} value={'Online Menu'}>Online Menu</Button>
                    </Flex>
                    <Grid
                    gridTemplateColumns={"repeat(3,minmax(0,1fr))"}
                    gridGap={10}
                    justifyContent={'space-between'}
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
            </article>
            </Flex>
        </main>
    )
}

export default Home