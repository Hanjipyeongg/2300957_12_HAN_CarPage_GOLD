import LandingPage from '../../module/landingPage'
import CartPage from '../../module/cart'
import { createBrowserRouter } from 'react-router-dom'

const routerlist = createBrowserRouter ([
    {
        path: '/',
        Element: <LandingPage/>,

    }, 
    {
        path : 'cart',
        element: <CartPage/>
    }
])

export default routerlist;