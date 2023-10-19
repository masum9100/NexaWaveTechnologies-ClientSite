import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AppleCard from './AppleCard';

const Apple = () => {
    const products = useLoaderData()



    return (
        <div className='bg-[#017BFF]'>
            <h1 className='text-5xl font-bold text-white py-10' >Our Apple Products</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 p-5'>
                {
                    products.map(product => <AppleCard key={product._id} product={product}></AppleCard>)
                }
            </div>

        </div>
    );
};

export default Apple;