import React from 'react';

const Banner = () => {
    return (
        <div className="hero" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfDB8MHx8fDA%3D)' }}>
            <div className="hero-overlay bg-[#017BFF] bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md py-16">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Pioneering Innovation in Technology and Electronics: Discover the Future with NexaWave Technologies's Cutting-Edge Products and Solutions!</p>
                    <button className="btn bg-[#007BFF] text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;