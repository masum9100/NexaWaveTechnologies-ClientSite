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
                element: <AddProduct></AddProduct>,
            },
            {
                path: "/my-cart",
                element:  <MyCart></MyCart>,
                
            },
            {
                path: "/huawei",
                element: <Huawei></Huawei>,
                loader : ()=> fetch('http://localhost:5001/product')
            },
            {
                path: "/microsoft",
                element: <Microfoft></Microfoft>,
                loader : ()=> fetch('http://localhost:5001/product'),
            },
            {
                path: "/apple",
                element: <Apple></Apple>,
                loader : ()=> fetch('http://localhost:5001/product'),
            },
            {
                path: "/dell",
                element: <Dell></Dell>,
                loader : ()=> fetch('http://localhost:5001/product'),
            },
            {
                path: "/nokia",
                element: <Nokia></Nokia>,
                loader : ()=> fetch('http://localhost:5001/product'),
            },
            {
                path: "/samsung",
                element: <Samsung></Samsung>,
                loader : ()=> fetch('http://localhost:5001/product'),
            },
            {
                path: "/:_id",
                element: <ProductDetails></ProductDetails>,
                loader : ()=> fetch('http://localhost:5001/product'),
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/registration",
                element: <Registration></Registration>
            }
            
            // {
            //     path: "/sign-in",
            //     element: <SignIn></SignIn>
            // },
            // {
            //     path: "/sign-up",
            //     element: <SignUp></SignUp>
            // },
            // {
            //     path: "/:id",
            //     element: <PrivateRoute>
            //         <ServiceDetails></ServiceDetails>
            //     </PrivateRoute>,
            //     loader: () => fetch('/data.json')
            // },


        ]
    }
])

export default route;