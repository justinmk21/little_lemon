import { createContext } from "react";
import './App.css'
import Header from './app_components/Header'
import Footer from './app_components/Footer'
import Home from './app_components/Home'
import { Route, Routes } from 'react-router-dom'
import Menu from './app_components/Menu'
import Reservations from './app_components/Reservations'
import OrderOnline from './app_components/OrderOnline'
import Login from "./app_components/Login";
import Booking from "./app_components/Booking";
import ConfirmedBooking from "./app_components/ConfirmedBooking";


// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext();

const foodMenu = [
  {
      foodImage: 1,
      item: 'Greek Salad',
      price: "12.99",
      description: 'The famous greek salad of crispy of lettuce, peppers, \
                    olivesand our chicago style feta cheese, garnished with\
                    crunchygarlic and rosemary croutons.',
  },
  {
      foodImage: 1,
      item: 'Bruchetta',
      price: "5.00",
      description: 'Our Bruchetta is made from grilled bread that has been \
                    seasoned with garlic and seasoned with sald and olive oil.'
  },
  {
      foodImage: 1,
      item: 'Lemon Dessert',
      price: "5.00",
      description: "This comes straight from grandma's recipe book, every last \
                    ingredient has been sourced and is as autheentic as it can be\
                    imagined."
  }
]

function App() {

  return (
    <UserContext.Provider value={foodMenu}>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path="booking" element={<Booking/>}></Route>
        <Route path="/confirmation" element={<ConfirmedBooking/>}></Route>
        <Route path='/menu' element={<Menu/>}></Route>
        <Route path='/reservations' element={<Reservations/>}></Route>
        <Route path='/order' element={<OrderOnline/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
      <Footer/>
    </UserContext.Provider>
  )
}

export default App
