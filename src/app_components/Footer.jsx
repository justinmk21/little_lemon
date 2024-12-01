import { Flex, Text, Link, Image, Box } from "@chakra-ui/react"
import { LuPhoneIncoming, LuMail,LuLocateOff } from "react-icons/lu"
import { LuFacebook, LuInstagram, LuYoutube } from "react-icons/lu"
import Logo from './images/LittleLemonLogo.jpg'
import './css/Footer.css'

function Footer() {

    return (
        <footer>
            <Flex justifyContent={'space-between'} margin={'0 360px'}
            className="footer">
                <Box width={'20%'}>
                    <Image src={Logo} color={'white'}/>
                </Box>
                <table>
                    <td>
                        <tr>
                            <Link padding={'6px 0'} color={'silver'} href="/">
                                About
                            </Link>
                        </tr>
                        <tr>
                            <Link padding={'6px 0'} color={'silver'} href="/">
                                Menu
                            </Link>
                        </tr>
                        <tr>
                            <Link padding={'6px 0'} color={'silver'} href="/">
                                Reservations
                            </Link>
                        </tr>
                        <tr>
                            <Link padding={'6px 0'} color={'silver'} href="/">
                                Order Online
                            </Link>
                        </tr>
                    </td>
                    <td>
                        <tr>
                            <Flex alignItems={'center'} gap={2} padding={'6px 0'}>
                                <LuPhoneIncoming/>
                                <Text color={'silver'}>+27 (78) 345 5435</Text>
                            </Flex>
                        </tr>
                        <tr>
                            <Flex alignItems={'center'} gap={2} padding={'6px 0'}>
                                <LuMail/>
                                <Link color={'silver'} >LittleLemon@gmail.com</Link>
                            </Flex>
                        </tr>
                        <tr>
                            <Flex alignItems={'center'} gap={2} padding={'6px 0'}>
                                <LuLocateOff/>
                                <Link color={'silver'} >Adress</Link>
                            </Flex>
                        </tr>
                    </td>
                    <td>
                        <tr>
                            <Flex alignItems={'center'} gap={2} padding={'6px 0'}>
                                <LuFacebook/>
                                <Link color={'silver'}>Facebook</Link>
                            </Flex>
                        </tr>
                        <tr>
                            <Flex alignItems={'center'} gap={2} padding={'6px 0'}>
                                <LuInstagram/>
                                <Link color={'silver'}>Instagram</Link>
                            </Flex>
                        </tr>
                        <tr>
                            <Flex alignItems={'center'} gap={2} padding={'6px 0'}>
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