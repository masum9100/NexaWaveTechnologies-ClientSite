import React from 'react';

const AddProduct = () => {
    return (
        <div className='bg-[#017BFF] mx-auto py-10'>
            <h1 className='text-5xl font-bold text-white'>Add a Product</h1>
            <div className='my-4 h-2 bg-sky-950 w-3/4 mx-auto'></div>
            <div className='grid gap-7'>
                <div className='w-full md:w-3/4 mx-auto'>
                    <div className='grid justify-center md:flex lg:justify-between gap-3'>
                        <div className='w-full'>
                            <p className='text-left font-semibold text-white text-xl mb-2'>Name</p>
                            <input type="text" placeholder="i Phone 13/Samsung A30s/Dell 4D4WD3 Laptop" className="input input-bordered w-full" />
                        </div>
                        <div className='w-full'>
                            <p className='text-left font-semibold text-white text-xl mb-2'>Brand</p>
                            <select className="select select-bordered w-full">
                                <option disabled selected>Select Brand Name</option>
                                <option>Microsoft</option>
                                <option>Apple</option>
                                <option>Dell</option>
                                <option>Nokia</option>
                                <option>Samsung</option>
                                <option>Huawei</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='w-3/4 mx-auto'>
                    <div className='grid md:flex justify-center lg:justify-between gap-3'>
                        <div className='w-full'>
                            <p className='text-left font-semibold text-white text-xl mb-2'>Type</p>
                            <input type="text" placeholder="Phone/Laptop/Headset ect" className="input input-bordered w-full" />
                        </div>
                        <div className='w-full'>
                            <p className='text-left font-semibold text-white text-xl mb-2'>Price</p>
                            <input type="number" placeholder="Price" className="input input-bordered w-full" />
                        </div>
                    </div>
                </div>
                <div className='w-3/4 mx-auto'>
                    <div className='grid md:flex justify-center lg:justify-between gap-3'>
                        <div className='w-full'>
                            <p className='text-left font-semibold text-white text-xl mb-2'>Photo</p>
                            <input type="text" placeholder="http://apple.com/photo.png" className="input input-bordered w-full" />
                        </div>
                        <div className='w-full'>
                            <p className='text-left font-semibold text-white text-xl mb-2'>Short description</p>
                            <input type="text" placeholder="Write few details about the product" className="input input-bordered w-full" />
                        </div>
                    </div>
                </div>
            </div>
            <button className='w-1/2 bg-white text-[#017BFF] text-xl font-bold py-3 rounded-lg mt-5 hover:bg-[#4EA2FF] hover:text-white'>Add Product</button>
        </div>
    );
};

export default AddProduct;