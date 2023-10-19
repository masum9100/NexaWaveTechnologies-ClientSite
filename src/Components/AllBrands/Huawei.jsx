import React from 'react';
import HuaweiCard from './HuaweiCard';
import { useLoaderData } from 'react-router-dom';

const Huawei = () => {
    const products = useLoaderData()



    return (
        <div className='bg-[#017BFF]'>
            <h1 className='text-5xl font-bold text-white py-10' >Our Huawei Products</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 p-5'>
                {
                    products.map(product => <HuaweiCard key={product._id} product={product}></HuaweiCard>)
                }
            </div>

        </div>
    );
};

export default Huawei;