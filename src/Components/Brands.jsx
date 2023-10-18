import React from 'react';
import { NavLink } from 'react-router-dom';

const Brands = () => {
    return (
        <div className='bg-[#4EA2FF]'>
            <h1 className='text-5xl font-extrabold text-white pt-10'>OUR TRUSTED BRANDS</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-2 py-10'>
                <NavLink to="/microsoft"><div className='w-88 bg-[#017BFF] rounded-md shadow-xl p-8'>
                    <img className='bg-white w-60 mx-auto rounded-2xl' src="https://i.ibb.co/J5s84Sr/Microsoft.png" alt="" />
                    <h1 className='text-white text-3xl font-extrabold mt-5'>Microsoft</h1>
                </div></NavLink>
                <NavLink to="/apple"><div className='w-88 bg-[#017BFF] rounded-md shadow-xl p-8'>
                    <img className='bg-white w-60 mx-auto rounded-2xl' src="https://i.ibb.co/L9Sny0Q/Apple.png" alt="" />
                    <h1 className='text-white text-3xl font-extrabold mt-5'>Apple</h1>
                </div></NavLink>
                <NavLink to="/dell"><div className='w-88 bg-[#017BFF] rounded-md shadow-xl p-8'>
                    <img className='bg-white w-60 mx-auto rounded-2xl' src="https://i.ibb.co/jwWZRd9/Dell.png" alt="" />
                    <h1 className='text-white text-3xl font-extrabold mt-5'>Dell</h1>
                </div></NavLink>
                <NavLink to="/nokia"><div className='w-88 bg-[#017BFF] rounded-md shadow-xl p-8'>
                    <img className='bg-white w-60 h-60 mx-auto rounded-2xl' src="https://i.ibb.co/d4FqQxL/2599.jpg" alt="" />
                    <h1 className='text-white text-3xl font-extrabold mt-5'>Nokia</h1>
                </div></NavLink>
                <NavLink to="/samsung"><div className='w-88 bg-[#017BFF] rounded-md shadow-xl p-8'>
                    <img className='bg-white w-60 mx-auto rounded-2xl' src="https://i.ibb.co/5LcCLb8/samsung-logo-square.jpg" alt="" />
                    <h1 className='text-white text-3xl font-extrabold mt-5'>Samsung</h1>
                </div></NavLink>
                <NavLink to="/huawei"><div className='w-88 bg-[#017BFF] rounded-md shadow-xl p-8'>
                    <img className='bg-white w-60 mx-auto rounded-2xl' src="https://i.ibb.co/ZhpjVBs/huawei-1-logo-png-transparent.png" alt="" />
                    <h1 className='text-white text-3xl font-extrabold mt-5'>Huawei</h1>
                </div></NavLink>
            </div>
        </div>
    );
};

export default Brands;