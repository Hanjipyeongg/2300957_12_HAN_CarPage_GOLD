import LandingPage from '../../module/landingPage'
import CartPage from '../../module/cart'
import UserPage from '../../module/userData'
import { createBrowserRouter } from 'react-router-dom'

const routerlist = createBrowserRouter ([
    {
        path: '/',
        element: <LandingPage/>,

    }, 
    {
        path : 'cart',
        element: <CartPage/>
    },
    {
        path: 'userData',
        element: <UserPage/>
    }
])

export default routerlist;