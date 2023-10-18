import React from 'react';
import Banner from './Banner';
import Review from './Review';
import Suscribe from './Suscribe';
import Brands from './Brands';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Brands></Brands>
            <Review></Review>
            <Suscribe></Suscribe>
        </div>
    );
};

export default Home;