import { Flex, Image } from "@chakra-ui/react"
import { NavLink } from 'react-router-dom'
import Logo from './images/LittleLemonLogo.jpg'
import './css/Header.css'

function Header() {

    return (
        <>
        <Flex justifyContent={'space-between'} padding={'0 300px'} margin={'20px 0'} alignItems={'center'}>
            <div className="icon"><Image src={Logo}/></div>
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