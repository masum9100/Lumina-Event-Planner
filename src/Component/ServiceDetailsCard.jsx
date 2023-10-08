import React from 'react';

const ServiceDetailsCard = ({ card }) => {


    const { id, service_name, short_description, color, description_one, description_two, description_three, banner_image, detail_image_one, detail_image_two, detail_image_three } = card || {}


    const fontcolor = {
        color: color
    };


    return (
        <div>
            <div className="bg-cover bg-center relative" style={{ backgroundImage: `url(${banner_image})` }}>
                <div className="bg-white bg-opacity-40 py-20">
                    <h1 className="text-5xl lg:text-7xl font-extrabold max-w-sm md:max-w-xl lg:max-w-5xl mx-auto">{service_name}</h1>
                </div>
            </div>
            <p className='my-5 font-bold text-xl px-5'>{short_description}</p>
            <div className='bg-gray-500 h-2 w-1/2 mx-auto'></div>


            <div className='grid lg:flex gap-5 mt-5'>
                <div className='w-3/4 mx-auto lg:pr-10'>
                    <p className='text-left mt-2 mx-auto' style={fontcolor}>{description_one}</p>
                    <p className='text-left mt-5' style={fontcolor}>{description_two}</p>
                </div>
                <div className='bg-[#EEFFEF] border-2 border-green-600 w-96 py-10 mx-auto'>
                    <h1 className='text-2xl font-medium'>Have Additional Questions?</h1>
                    <h1 className='text-2xl font-medium'>Feel Free to Ask</h1>
                    <div className='mt-5'>
                        <div className='flex justify-center'>
                            <div><svg width="21" height="32" viewBox="0 0 21 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.5 15.0941C9.50544 15.0941 8.55161 14.69 7.84835 13.9708C7.14509 13.2515 6.75 12.2761 6.75 11.2589C6.75 10.2418 7.14509 9.26631 7.84835 8.54708C8.55161 7.82786 9.50544 7.4238 10.5 7.4238C11.4946 7.4238 12.4484 7.82786 13.1517 8.54708C13.8549 9.26631 14.25 10.2418 14.25 11.2589C14.25 11.7626 14.153 12.2613 13.9645 12.7266C13.7761 13.1919 13.4999 13.6147 13.1517 13.9708C12.8034 14.3269 12.39 14.6094 11.9351 14.8021C11.4801 14.9949 10.9925 15.0941 10.5 15.0941ZM10.5 0.520569C7.71523 0.520569 5.04451 1.65193 3.07538 3.66576C1.10625 5.67959 0 8.41094 0 11.2589C0 19.3127 10.5 31.2016 10.5 31.2016C10.5 31.2016 21 19.3127 21 11.2589C21 8.41094 19.8938 5.67959 17.9246 3.66576C15.9555 1.65193 13.2848 0.520569 10.5 0.520569Z" fill="url(#paint0_linear_45_32)" />
                                <defs>
                                    <linearGradient id="paint0_linear_45_32" x1="0" y1="15.8611" x2="21" y2="15.8611" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#4FA35B" />
                                        <stop offset="1" stop-color="#05DAE7" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            </div>
                            <p className='font-normal text-lg ml-2'>169 Rocky River Dr. Fresno, CA 93727</p>
                        </div>
                        <div className='flex justify-center'>
                            <div><svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24.9415 19.4984C24.6502 19.181 23.6217 18.2428 21.731 17.0015C19.8264 15.7493 18.4218 14.9686 18.0189 14.7865C17.9833 14.7704 17.9442 14.7645 17.9057 14.7694C17.8671 14.7743 17.8306 14.7899 17.8001 14.8145C17.1511 15.3321 16.0584 16.2829 15.9998 16.3343C15.6215 16.6659 15.6215 16.6659 15.3117 16.5626C14.7671 16.3799 13.0751 15.4611 11.6007 13.9498C10.1263 12.4386 9.18156 10.6653 9.00299 10.1089C8.90086 9.79157 8.90086 9.79157 9.22621 9.40462C9.27643 9.3447 10.2067 8.22723 10.7129 7.56406C10.7369 7.53283 10.7521 7.4955 10.7569 7.45608C10.7617 7.41666 10.7559 7.37665 10.7402 7.34033C10.5622 6.9277 9.79877 5.49178 8.5744 3.54391C7.35897 1.61089 6.44265 0.559053 6.13237 0.261138C6.1039 0.23366 6.06871 0.214544 6.03051 0.205806C5.9923 0.197067 5.9525 0.199029 5.91529 0.211486C4.83071 0.59266 3.78425 1.07903 2.79021 1.66396C1.8306 2.23447 0.922102 2.89049 0.0752948 3.62438C0.0457348 3.65009 0.0235729 3.68353 0.0111857 3.72113C-0.0012014 3.75874 -0.00334644 3.79908 0.00498052 3.83783C0.121613 4.39371 0.679105 6.71426 2.40906 9.92854C4.17418 13.209 5.39742 14.8898 7.98957 17.5317C10.5817 20.1735 12.2771 21.4999 15.4881 23.3051C18.631 25.0743 20.9012 25.645 21.4436 25.7631C21.4816 25.7716 21.5211 25.7693 21.5579 25.7567C21.5948 25.744 21.6276 25.7214 21.6529 25.6912C22.3703 24.8252 23.0116 23.8961 23.5692 22.9147C24.1411 21.898 24.6166 20.8278 24.9895 19.7187C25.0014 19.6809 25.0032 19.6406 24.9948 19.6018C24.9864 19.5631 24.9679 19.5274 24.9415 19.4984Z" fill="url(#paint0_linear_45_34)" />
                                <defs>
                                    <linearGradient id="paint0_linear_45_34" x1="0" y1="12.9843" x2="25" y2="12.9843" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#4FA35B" />
                                        <stop offset="1" stop-color="#05DAE7" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            </div>
                            <p className='font-normal text-lg ml-2'>+880-1713-789-711</p>
                        </div>
                        <div className='flex justify-center'>
                            <div><svg width="27" height="22" viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.625 0.44928H2.625C1.18125 0.44928 0.013125 1.65735 0.013125 3.13387L0 19.2414C0 20.7179 1.18125 21.926 2.625 21.926H23.625C25.0688 21.926 26.25 20.7179 26.25 19.2414V3.13387C26.25 1.65735 25.0688 0.44928 23.625 0.44928ZM23.1 6.15403L13.8206 12.087C13.4006 12.3554 12.8494 12.3554 12.4294 12.087L3.15 6.15403C3.01839 6.07848 2.90314 5.9764 2.81123 5.85397C2.71931 5.73154 2.65264 5.59131 2.61526 5.44177C2.57787 5.29223 2.57053 5.13649 2.59371 4.98396C2.61688 4.83144 2.67007 4.68531 2.75006 4.55442C2.83005 4.42353 2.93518 4.3106 3.05908 4.22247C3.18298 4.13433 3.32308 4.07282 3.4709 4.04166C3.61872 4.0105 3.77118 4.01034 3.91907 4.04119C4.06695 4.07204 4.20717 4.13325 4.33125 4.22113L13.125 9.84535L21.9188 4.22113C22.0428 4.13325 22.1831 4.07204 22.3309 4.04119C22.4788 4.01034 22.6313 4.0105 22.7791 4.04166C22.9269 4.07282 23.067 4.13433 23.1909 4.22247C23.3148 4.3106 23.42 4.42353 23.4999 4.55442C23.5799 4.68531 23.6331 4.83144 23.6563 4.98396C23.6795 5.13649 23.6721 5.29223 23.6347 5.44177C23.5974 5.59131 23.5307 5.73154 23.4388 5.85397C23.3469 5.9764 23.2316 6.07848 23.1 6.15403Z" fill="url(#paint0_linear_45_36)" />
                                <defs>
                                    <linearGradient id="paint0_linear_45_36" x1="0" y1="11.1876" x2="26.25" y2="11.1876" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#4FA35B" />
                                        <stop offset="1" stop-color="#05DAE7" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            </div>
                            <p className='font-normal text-lg ml-2'>masum@virgenius.com</p>
                        </div>
                    </div>
                    <button className="border-2 border-green-500 rounded-full px-4 py-2 font-semibold mt-5">Book an Appointment</button>
                </div>

            </div>
            <div>
                <p className='text-left mt-5 mx-auto px-5 lg:px-0' style={fontcolor}>{description_three}</p>
            </div>
            <div className='grid grid-cols-3 mt-5'>
                <img src={detail_image_one} alt="" />
                <img src={detail_image_two} alt="" />
                <img src={detail_image_three} alt="" />
            </div>

        </div>
    );
};

export default ServiceDetailsCard;
