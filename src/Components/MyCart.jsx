import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CartCard from './CartCard';

const MyCart = () => {

    const carts = useLoaderData()


    return (
        <div className='bg-[#017BFF]'>
            <h1 className='text-5xl font-bold text-white py-10' >My Cart Products</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 p-5'>
                {
                    carts.map(cart => <CartCard key={cart._id} cart={cart}></CartCard>)
                }
            </div>
        </div>
    );
};

export default MyCart;