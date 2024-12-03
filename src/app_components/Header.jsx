import { Flex, Image } from "@chakra-ui/react"
import { NavLink } from 'react-router-dom'
import Logo from './images/LittleLemonLogo.jpg'
import { LuMenu } from "react-icons/lu"
import './css/Header.css'

function Header() {

    return (
        <>
        <Flex
            className="header"
            justifyContent={'space-between'}
            alignItems={'center'}
            >
            <div className="icon"><Image src={Logo}/></div>
            <LuMenu
                className="menu"
                size={'40'}
                />
            <nav className="nav-list">
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