import React from 'react';

import partner1 from '../images/unicef.jpg';
import partner2 from '../images/save.jpg';
import partner3 from '../images/ford.jpg';

const partnerImage = {
    height: '10rem',
    width: 'auto',
    mixBlendMode: 'colorBurn',
    borderRadius: '0.75rem', // Adjust the border radius to your preference
};

const Partners = () => {
    return (
        <div className="mt-8 bg-gray-100">
            <section data-aos="fade-up">
                <div className="my-4 py-4">
                    <h2 className="my-2 text-center text-3xl text-green-900 uppercase font-bold">Our Partners</h2>
                    <div className='flex justify-center'>
                        <div className='w-24 border-b-4 border-green-900'></div>
                    </div>
                    <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-green-900">
                        We are proud to collaborate with these amazing partners.
                    </h2>
                </div>

                <div className="p-16" data-aos="fade-in" data-aos-delay="600">
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div style={partnerImage} className="overflow-hidden flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <img src={partner1} alt="Partner 1 - Description" className="w-full h-full object-cover rounded-lg" />
                        </div>

                        <div style={partnerImage} className="overflow-hidden flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <img src={partner2} alt="Partner 2 - Description" className="w-full h-full object-cover rounded-lg" />
                        </div>

                        <div style={partnerImage} className="overflow-hidden flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <img src={partner3} alt="Partner 3 - Description" className="w-full h-full object-cover rounded-lg" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Partners;
