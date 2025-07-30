import React from 'react';
import bannerImg from '../../assets/pngwing 1.png';

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={
                        bannerImg
                    } />
                <div>
                    <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
                    <button className="btn btn-primary mt-4 bg-[#23BE0A] border-0">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;