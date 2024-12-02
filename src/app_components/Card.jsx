import { Box, Card, Image } from "@chakra-ui/react"
import Chris from './images/Chris.jpg'
import { LuStar } from "react-icons/lu"

function CardHorizontal() {

    return (
        <Card.Root flexDirection="row" overflow="hidden" maxW="xl">
        <Image
          objectFit="cover"
          maxW="200px"
          src={Chris}
          alt="Customer Review"
          marginRight={'6px'}
        />
        <Box>
          <Card.Body>
            <Card.Title mb="2">Chris</Card.Title>
            <Card.Description>
              Caffè latte is a coffee beverage of Italian origin made with espresso
              and steamed milk.
            </Card.Description>
          </Card.Body>
          <Card.Footer
            margin={'8px 0'}
            >
            <LuStar color="gold" size={'25'}/>
            <LuStar color="gold" size={'25'}/>
            <LuStar color="gold" size={'25'}/>
            <LuStar color="gold" size={'25'}/>
          </Card.Footer>
        </Box>
      </Card.Root>
    )
}

export default CardHorizontal
