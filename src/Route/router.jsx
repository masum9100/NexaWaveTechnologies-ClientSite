import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainRoute from './MainRoute';
import AddProduct from '../Components/AddProduct';
import MyCart from '../Components/MyCart';
import Home from '../Components/Home';
import Huawei from '../Components/AllBrands/Huawei';
import Microfoft from '../Components/AllBrands/Microfoft';
import Apple from '../Components/AllBrands/Apple';
import Dell from '../Components/AllBrands/Dell';
import Nokia from '../Components/AllBrands/Nokia';
import Samsung from '../Components/AllBrands/Samsung';
import ProductDetails from '../Components/ProductDetails';
import Login from '../Components/Login';
import Registration from '../Components/Registration';
import PrivateRoute from '../Components/Hook/PrivateRoute';




const route = createBrowserRouter([
    {
        path: "/",
        element: <MainRoute></MainRoute>,
        children: [
            {
                path: "/",
                element: <Home></Home>,

            },
            {
                path: "/add-product",
                element: <PrivateRoute>
                    <AddProduct></AddProduct>
                </PrivateRoute>,
            },
            {
                path: "/my-cart",
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
                loader: () => fetch('https://agn10-server-site-73gurqgye-masum9100.vercel.app/cart')

            },
            {
                path: "/huawei",
                element: <PrivateRoute><Huawei></Huawei></PrivateRoute>,
                loader: () => fetch('https://agn10-server-site-73gurqgye-masum9100.vercel.app/product')
            },
            {
                path: "/microsoft",
                element: <PrivateRoute><Microfoft></Microfoft></PrivateRoute>,
                loader: () => fetch('https://agn10-server-site-73gurqgye-masum9100.vercel.app/product'),
            },
            {
                path: "/apple",
                element: <PrivateRoute><Apple></Apple></PrivateRoute>,
                loader: () => fetch('https://agn10-server-site-73gurqgye-masum9100.vercel.app/product'),
            },
            {
                path: "/dell",
                element: <Dell></Dell>,
                loader: () => fetch('https://agn10-server-site-73gurqgye-masum9100.vercel.app/product'),
            },
            {
                path: "/nokia",
                element: <PrivateRoute><Nokia></Nokia></PrivateRoute>,
                loader: () => fetch('https://agn10-server-site-73gurqgye-masum9100.vercel.app/product'),
            },
            {
                path: "/samsung",
                element: <PrivateRoute><Samsung></Samsung></PrivateRoute>,
                loader: () => fetch('https://agn10-server-site-73gurqgye-masum9100.vercel.app/product'),
            },
            {
                path: "/:_id",
                element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
                loader: () => fetch('https://agn10-server-site-73gurqgye-masum9100.vercel.app/product'),
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/registration",
                element: <Registration></Registration>
            },
        ]
    }
])

export default route;