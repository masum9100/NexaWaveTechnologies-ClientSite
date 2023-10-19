import React from 'react';
import { NavLink } from 'react-router-dom';

const Registration = () => {
    return (
        <div className='bg-[#017BFF] py-10'>
            <div className="bg-[#4793E7] w-full md:w-3/4 lg:w-1/3 mx-auto p-10">
                <h1 className="text-3xl text-white font-extrabold mb-5">Create New Account</h1>
                <form >
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="photo url" name="photo_url" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                    </div>
                    {/* <p className="text-red-500">{error}</p> */}
                    <div className="form-control mt-6">
                        <button type="submit" className="py-2 rounded-md bg-[#017BFF] text-white">Sign Up</button>
                    </div>
                </form>
                <p className="text-xl mt-10">Already have an account? <NavLink to={"/login"}><span className="text-gray-300 font-extrabold">Log In here</span></NavLink></p>

            </div>
        </div>
    );
};

export default Registration;