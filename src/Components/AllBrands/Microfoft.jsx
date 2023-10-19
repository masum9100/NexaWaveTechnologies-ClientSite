import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MicrosoftCard from './MicrosoftCard';

const Microfoft = () => {
    const products = useLoaderData()



    return (
        <div className='bg-[#017BFF]'>
            <h1 className='text-5xl font-bold text-white py-10' >Our Microsoft Products</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 p-5'>
                {
                    products.map(product => <MicrosoftCard key={product._id} product={product}></MicrosoftCard>)
                }
            </div>

        </div>
    );
};

export default Microfoft;