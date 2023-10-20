import React from 'react';
import Swal from 'sweetalert2'

const AddProduct = () => {
    const handleAddProduct = event => {
        event.preventDefault()

        const form = event.target
        const name = form.name.value
        const brand = form.brand.value
        const type = form.type.value
        const price = form.price.value
        const photo_url = form.photo_url.value
        const ratings = form.ratings.value
        const description = form.description.value

        const newProduct = { name, brand, type, price, photo_url, description,ratings }
        console.log(newProduct)

        fetch('https://agn10-server-site-73gurqgye-masum9100.vercel.app/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'OKAY'
                    })
                }
            })
    }



    return (
        <div className='bg-[#017BFF] mx-auto py-10'>
            <h1 className='text-5xl font-bold text-white'>Add a Product</h1>
            <div className='my-4 h-2 bg-sky-950 w-3/4 mx-auto'></div>
            <form onSubmit={handleAddProduct}>
                <div className='grid gap-7'>
                    <div className='w-full md:w-3/4 mx-auto'>
                        <div className='grid justify-center md:flex lg:justify-between gap-3'>
                            <div className='w-full'>
                                <p className='text-left font-semibold text-white text-xl mb-2'>Name</p>
                                <input type="text" name='name' placeholder="i Phone 13/Samsung A30s/Dell 4D4WD3 Laptop" className="input input-bordered w-full" />
                            </div>
                            <div className='w-full'>
                                <p className='text-left font-semibold text-white text-xl mb-2'>Brand</p>
                                <select className="select select-bordered w-full" name='brand'>
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
                                <input type="text" name='type' placeholder="Phone/Laptop/Headset ect" className="input input-bordered w-full" />
                            </div>
                            <div className='w-full'>
                                <p className='text-left font-semibold text-white text-xl mb-2'>Price</p>
                                <input type="number" name='price' placeholder="Price" className="input input-bordered w-full" />
                            </div>
                        </div>
                    </div>
                    <div className='w-3/4 mx-auto'>
                        <div className='grid md:flex justify-center lg:justify-between gap-3'>
                            <div className='w-full'>
                                <p className='text-left font-semibold text-white text-xl mb-2'>Photo</p>
                                <input type="text" name='photo_url' placeholder="http://apple.com/photo.png" className="input input-bordered w-full" />
                            </div>
                            <div className='w-full'>
                                <p className='text-left font-semibold text-white text-xl mb-2'>Short description</p>
                                <input type="text" name='description' placeholder="Write few details about the product" className="input input-bordered w-full" />
                            </div>
                        </div>
                    </div>
                    <div className='mx-auto'>
                        <p className='text-left font-semibold text-white text-xl mb-2'>Rating</p>
                        <input type="text" name='ratings' placeholder="out of 10" className="input input-bordered" />
                    </div>
                </div>

                <input type="submit" value="Add Product" className='w-1/2 bg-white text-[#017BFF] text-xl font-bold py-3 rounded-lg mt-5 hover:bg-[#4EA2FF] hover:text-white' />
            </form>
        </div>
    );
};

export default AddProduct;