import { LuLeaf } from "react-icons/lu"
import { Text, Flex} from "@chakra-ui/react"
import { NavLink } from 'react-router-dom'
import './css/Header.css'

function Header() {

    return (
        <>
        <Flex justifyContent={'space-between'} padding={'0 300px'} margin={'20px 0'}>
            <div className="logo">
                <div className="icon"><LuLeaf size={'20'}/></div>
                <div className="little-logo"><Text>LittleLemon</Text></div>
            </div>
            <nav>
                <ul>
                    <li><NavLink to={'/'} className="link" >Home</NavLink></li>
                    <li><NavLink to={'/menu'} className="link" >Menu</NavLink></li>
                    <li><NavLink to={'/reservations'} className="link" >Reservations</NavLink></li>
                    <li><NavLink to={'/order'} className="link" >Order Online</NavLink></li>
                    <li><NavLink to={'/login'} className="link" >Login</NavLink></li>
                </ul>
            </nav>
        </Flex>
        </>
    )
}

export default Header