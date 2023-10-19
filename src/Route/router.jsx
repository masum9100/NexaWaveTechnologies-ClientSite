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
                element: <Huawei></Huawei>
            },
            {
                path: "/microsoft",
                element: <Microfoft></Microfoft>
            },
            {
                path: "/apple",
                element: <Apple></Apple>
            },
            {
                path: "/dell",
                element: <Dell></Dell>
            },
            {
                path: "/nokia",
                element: <Nokia></Nokia>
            },
            {
                path: "/samsung",
                element: <Samsung></Samsung>
            },
            
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