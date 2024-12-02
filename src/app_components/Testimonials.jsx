import { Grid,Box, Heading } from "@chakra-ui/react"
import CardHorizontal from "./Card"


function Testimony() {

    return (
        <Box>
            <Heading
                textAlign={'center'}
                marginTop={'100px'}
                size={'2xl'}
                >
                Testimonials
            </Heading>
            <Grid
                templateColumns={{
                    base:"repeat(1, 1fr)",
                    md:"repeat(1, 1fr)",
                    lg:"repeat(2, 1fr)"
                    }}
                gap={'4'}
                margin={'100px auto'}
                >
                <CardHorizontal/>
                <CardHorizontal/>
            </Grid>
        </Box>
    )
}

export default Testimony