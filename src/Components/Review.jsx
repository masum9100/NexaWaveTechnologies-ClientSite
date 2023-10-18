import React from 'react';

const Review = () => {
    return (
        <div className='bg-[#017BFF] px-2 py-5'>
            <h1 className='text-5xl font-extrabold text-white py-5'>WHAT OUR CLIENT THINKS ABOUT US</h1>
            <div className='my-4 h-2 bg-sky-950 w-3/4 mx-auto'></div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 pt-5'>
                <div className='w-88 text-left bg-[#4da3ff] text-black p-5 rounded-md shadow-xl'>
                    <div>
                        <p>NexaWave Technologies's laptop surpassed my expectations. The sleek design and powerful performance impressed me from the start. Highly recommended!</p>
                    </div>
                    <div className='flex gap-4 mt-4'>
                        <img className='rounded-full w-12 h-12' src="https://i.ibb.co/VtYFtRN/putin-square.jpg" alt="" />
                        <div>
                            <p className='font-bold'>Vladimir Putin</p>
                            <p className='text-sm'>President of Russia</p>
                        </div>
                    </div>
                </div>
                <div className='w-88 text-left bg-[#4da3ff] text-black p-5 rounded-md shadow-xl'>
                    <div>
                        <p>Their exceptional customer service made the experience even better. I also appreciate their commitment to sustainability. Highly recommended!</p>
                    </div>
                    <div className='flex gap-4 mt-4'>
                        <img className='rounded-full w-12 h-12' src="https://i.ibb.co/7t8HZJV/Screen-Shot-2020-08-21-at-12-44-43-PM.jpg" alt="" />
                        <div>
                            <p className='font-bold'>Joe Biden</p>
                            <p className='text-sm'>U.S. President</p>
                        </div>
                    </div>
                </div>
                <div className='w-88 text-left bg-[#4da3ff] text-black p-5 rounded-md shadow-xl'>
                    <div>
                        <p>NexaWave Technologies's laptop surpassed my expectations. The sleek design and powerful performance impressed me from the start. Highly recommended!</p>
                    </div>
                    <div className='flex gap-4 mt-4'>
                        <img className='rounded-full w-12 h-12' src="https://i.ibb.co/5F3nJZN/download.jpg" alt="" />
                        <div>
                            <p className='font-bold'>Kim Jong Un</p>
                            <p className='text-sm'>Supreme Leader of North Korea</p>
                        </div>
                    </div>
                </div>
                <div className='w-88 text-left bg-[#4da3ff] text-black p-5 rounded-md shadow-xl'>
                    <div>
                        <p>Their exceptional customer service made the experience even better. I also appreciate their commitment to sustainability. Highly recommended!</p>
                    </div>
                    <div className='flex gap-4 mt-4'>
                        <img className='rounded-full w-12 h-12' src="https://i.ibb.co/VtYFtRN/putin-square.jpg" alt="" />
                        <div>
                            <p className='font-bold'>Vladimir Putin</p>
                            <p className='text-sm'>President of Russia</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Review;