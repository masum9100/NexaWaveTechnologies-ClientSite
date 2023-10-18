import React from 'react';

const Suscribe = () => {
    return (
        <div>
            <div className='grid md:flex justify-between bg-[#4EA2FF] p-5'>
                <div className='flex justify-center items-center'>
                    <div className=''>
                        <h1 className='text-white text-3xl font-semibold '>Real Insights</h1>
                        <p className='text-white my-5 text-xl'>The content series amplifying unique visions on the hottest topics</p>
                        <button className='px-3 py-3 rounded-md bg-white text-[#017BFF]'>Subscribe to Real Insights</button>
                    </div>
                </div>
                <div>
                    <img className='h-96' src="https://i.ibb.co/LCpbSLq/s-l1200-removebg-preview.png" alt="" />
                </div>
            </div>







            <div className='bg-[#017BFF]'>
                <div className=' flex justify-between px-3 md:px-10 lg:px-24 py-10'>
                    <div className='text-white'>
                        <h1 className='text-3xl md:text-5xl lg:text-7xl font-extrabold'>12</h1>
                        <h3 className='font-light text-lg md:text-xl'>Years Experience</h3>
                    </div>
                    <div className='text-white'>
                        <h1 className='text-3xl md:text-5xl lg:text-7xl font-extrabold'>15K+</h1>
                        <h3 className='font-light text-lg md:text-xl'>Product Sell</h3>
                    </div>
                    <div className='text-white'>
                        <h1 className='text-3xl md:text-5xl lg:text-7xl font-extrabold'>18</h1>
                        <h3 className='font-light text-lg md:text-xl'>Experts in Team</h3>
                    </div>
                    <div className='text-white'>
                        <h1 className='text-3xl md:text-5xl lg:text-7xl font-extrabold'>6</h1>
                        <h3 className='font-light text-lg md:text-xl'>Brands</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Suscribe;