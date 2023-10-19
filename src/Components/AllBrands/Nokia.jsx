import React from 'react';
import NokiaCard from './NokiaCard';
import { useLoaderData } from 'react-router-dom';

const Nokia = () => {
    const products = useLoaderData()



    return (
        <div className='bg-[#017BFF]'>
            <div className="carousel w-full h-96">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/ykWpwpR/nb1.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/C0yZsS5/nb2.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/XYDw0nY/nb3.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/TrR5PdF/nb4.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
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