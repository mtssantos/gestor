import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home/index";
import Login from "../pages/Login";
import Vendas from "../pages/Vendas";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/vendas",
        element: <Vendas />
    },
    {
        path: "/login",
        element: <Login />
    }
])

export default function AppRoutes(){
    return(
        <RouterProvider router={
            router
        } />
    )
}