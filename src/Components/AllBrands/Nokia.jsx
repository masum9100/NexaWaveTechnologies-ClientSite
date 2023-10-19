import React from 'react';
import NokiaCard from './NokiaCard';
import { useLoaderData } from 'react-router-dom';

const Nokia = () => {
    const products = useLoaderData()



    return (
        <div className='bg-[#017BFF]'>
            <h1 className='text-5xl font-bold text-white py-10' >Our Nokia Products</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 p-5'>
                {
                    products.map(product => <NokiaCard key={product._id} product={product}></NokiaCard>)
                }
            </div>

        </div>
    );
};

export default Nokia;