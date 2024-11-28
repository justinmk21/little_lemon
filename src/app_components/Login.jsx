import { Heading, Text } from "@chakra-ui/react"
import { useContext } from "react"
import { UserContext } from "../App"

function Login(){

    const foodMenu = useContext(UserContext);

    return (
        <>
        <Heading>Login to order</Heading>
        <Text>{foodMenu[0].item}</Text>
        </>
    )
}

export default Login