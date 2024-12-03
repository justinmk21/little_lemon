import { Flex, Text, Link } from "@chakra-ui/react"
import { LuPhoneIncoming, LuMail,LuLocateOff } from "react-icons/lu"
import { LuFacebook, LuInstagram, LuYoutube } from "react-icons/lu"
import './css/Footer.css'

function Footer() {

    return (
        <footer>
            <Flex
                className="footer"
                justifyContent={'center'}
                >
                <table>
                    <td className="data-2">
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
                    <td className="data-table-b">
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