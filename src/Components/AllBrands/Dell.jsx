import React from 'react';
import DellCard from './DellCard';
import { useLoaderData } from 'react-router-dom';

const Dell = () => {
    const products = useLoaderData()



    return (
        <div className='bg-[#017BFF]'>
            <h1 className='text-5xl font-bold text-white py-10' >Our Dell Products</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 p-5'>
                {
                    products.map(product => <DellCard key={product._id} product={product}></DellCard>)
                }
            </div>

        </div>
    );
};

export default Dell;