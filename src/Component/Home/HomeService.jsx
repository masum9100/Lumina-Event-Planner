import React from 'react';
import SingleServiceCard from './SingleServiceCard';

const HomeService = ({ cards }) => {
    return (
        <div className='mt-10'>
            <h1 className='text-5xl font-extrabold bg-gradient-to-r from-[#9D3D0B] to-[#49A766] bg-clip-text text-transparent'>Our Services</h1>

            <p className="text-gray-600 font-medium my-4 max-w-sm md:max-w-xl lg:max-w-5xl mx-auto">We specialize in creating unforgettable moments for a variety of events, including weddings, birthdays, baby showers, engagements, and more. Each event is meticulously planned and executed to ensure it reflects the unique vision and style of our clients. Explore our services below to learn more about how we can make your special occasion truly exceptional.</p>
            
            <div className='flex justify-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-4 lg:px-0'>
                    {Array.isArray(cards) && cards.length > 0 && cards.map(card => (
                        <SingleServiceCard key={card.id} card={card} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomeService;
