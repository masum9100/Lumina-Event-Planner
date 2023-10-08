import React from 'react';

const HomeAdvantage = () => {
    return (
        <div className='mt-10 '>
            <div>
                <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-24 px-5 -z-1'>
                    <div className='flex justify-center'>
                        <img className='w-full' src="./section.png" alt="" />
                    </div>
                    <div className='w-full md:w-3/4'>
                        <h1 className='text-xl font-extrabold bg-gradient-to-r from-[#9D3D0B] to-[#49A766] bg-clip-text text-transparent text-left mb-5'>ADVANTAGES</h1>
                        <h3 className='text-4xl font-semibold text-left mb-5'>Celebrate With Us</h3>
                        <p className='font-light text-xl text-left mb-3'>We are a group of seasoned event planners and coordinators committed to crafting extraordinary moments for our clients.</p>
                        <p className='font-light text-xl text-left'>No matter the occasion — be it a corporate event or a unique celebration—we possess the knowledge to ensure its resounding success.</p>
                        
                    </div>
                </div>

                <div className='bg-gradient-to-r from-[#4FA45A] to-[#02D8E1] mt-10'>
                    <div className=' flex justify-between px-3 md:px-10 lg:px-24 py-10'>
                        <div className='text-white'>
                            <h1 className='text-3xl md:text-5xl lg:text-7xl font-extrabold'>12</h1>
                            <h3 className='font-light text-lg md:text-xl'>Years Experience</h3>
                        </div>
                        <div className='text-white'>
                            <h1 className='text-3xl md:text-5xl lg:text-7xl font-extrabold'>1350</h1>
                            <h3 className='font-light text-lg md:text-xl'>Projects Done</h3>
                        </div>
                        <div className='text-white'>
                            <h1 className='text-3xl md:text-5xl lg:text-7xl font-extrabold'>18</h1>
                            <h3 className='font-light text-lg md:text-xl'>Experts in Team</h3>
                        </div>
                        <div className='text-white'>
                            <h1 className='text-3xl md:text-5xl lg:text-7xl font-extrabold'>86</h1>
                            <h3 className='font-light text-lg md:text-xl'>Partners</h3>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default HomeAdvantage;