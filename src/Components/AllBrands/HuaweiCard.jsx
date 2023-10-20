import React from 'react';
import { NavLink } from 'react-router-dom';

const HuaweiCard = ({ product }) => {
    const { name, brand, type, price, photo_url, description, ratings, _id } = product
    if (brand.toLowerCase() !== 'huawei') {
        return (
            <div className='bg-[#4EA2FF] p-10 rounded-lg shadow-2xl'>
                <div className='text-white text-center font-semibold'>
                    Will update product soon
                </div>
            </div>
        );
    }

    return (
        
            <div className='bg-[#4EA2FF] p-10 rounded-lg shadow-2xl'>
                <div className='flex w-full justify-center items-center'>
                    <div className='w-1/2'>
                        <h1 className='text-white text-left font-semibold mb-2'>Name: {name}</h1>
                        <h1 className='text-white text-left font-semibold mb-2'>Brand Name: {brand}</h1>
                        <h1 className='text-white text-left font-semibold mb-2'>Product Type: {type}</h1>
                        <h1 className='text-white text-left font-semibold mb-2'>Price: ${price}</h1>
                        <h1 className='text-white text-left font-semibold'>Ratings: {ratings}/10</h1>
                    </div>
                    <div className='w-1/2'>
                        <img src={photo_url} alt="" />
                    </div>
                </div>
                <div className='flex justify-between mt-5 gap-3'>
                <NavLink to={`/${_id}`} className='bg-[#007BFF] text-white w-1/2 py-2 rounded-lg hover:bg-white hover:text-[#007BFF]'>
                    <button >Details</button>
                    </NavLink>
                    <NavLink to={`updateproduct/${_id}`} className='bg-[#007BFF] text-white w-1/2 py-2 rounded-lg hover:bg-white hover:text-[#007BFF]'>
                    <button >Update</button>
                    </NavLink>
                </div>
            </div>
        
    );
};

export default HuaweiCard;