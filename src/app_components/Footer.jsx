import { Flex, Heading, Text, Link } from "@chakra-ui/react"
import { LuPhoneIncoming, LuMailOpen } from "react-icons/lu"
import { LuFacebook, LuInstagram, LuYoutube } from "react-icons/lu"
import './css/Footer.css'

function Footer() {

    return (
        <footer>
            <Flex justifyContent={'space-between'} margin={'0 360px'}
            className="footer">
                <Heading>Little Lemon</Heading>
                <table>
                    <td>
                        <tr><Link color={'silver'} href="/">About</Link></tr>
                        <tr><Link color={'silver'} href="/">Menu</Link></tr>
                        <tr><Link color={'silver'} href="/">Reservations</Link></tr>
                        <tr><Link color={'silver'} href="/">Order Online</Link></tr>
                    </td>
                    <td>
                        <tr>
                            <Flex alignItems={'center'} gap={2}>
                                <LuPhoneIncoming/>
                                <Text color={'silver'}>+27 (78) 345 5435</Text>
                            </Flex>
                        </tr>
                        <tr>
                            <Flex alignItems={'center'} gap={2}>
                                <LuMailOpen/>
                                <Link color={'silver'} >LittleLemon@gmail.com</Link>
                            </Flex>
                        </tr>
                    </td>
                    <td>
                        <tr>
                            <Flex alignItems={'center'} gap={2}>
                                <LuFacebook/>
                                <Link color={'silver'}>Facebook</Link>
                            </Flex>
                        </tr>
                        <tr>
                            <Flex alignItems={'center'} gap={2}>
                                <LuInstagram/>
                                <Link color={'silver'}>Instagram</Link>
                            </Flex>
                        </tr>
                        <tr>
                            <Flex alignItems={'center'} gap={2}>
                                <LuYoutube/>
                                <Link color={'silver'}>Youtube</Link>
                            </Flex>
                        </tr>
                    </td>
                </table>
            </Flex>
        </footer>
    )
}

export default Footer