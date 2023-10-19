import React from 'react';
import SamsungCard from './SamsungCard';
import { useLoaderData } from 'react-router-dom';

const Samsung = () => {
    const products = useLoaderData()



    return (
        <div className='bg-[#017BFF]'>
            <h1 className='text-5xl font-bold text-white py-10' >Our Samsung Products</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 p-5'>
                {
                    products.map(product => <SamsungCard key={product._id} product={product}></SamsungCard>)
                }
            </div>

        </div>
    );
};

export default Samsung;