import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Root from "../Root/Root";
import About from "../Pages/About";
import Career from "../Pages/Career";
import NewsDetails from "../NewsDetails/NewsDetails";
import CategoryNews from "../CategoryNews/CategoryNews";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/career',
                element: <Career></Career>
            },
            {
                path: 'details/:id',
                element: <NewsDetails></NewsDetails>

            },
            {
                path: '/categories/:id',
                element: <CategoryNews></CategoryNews>,
                loader: () => fetch('../categories.json')

            }
        ]
    }

])
export default router;