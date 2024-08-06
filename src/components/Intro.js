import React from 'react';
import { Link } from 'react-router-dom';
import img from '../images/home2.jpeg'; // Update with an image relevant to your NGO
import teamMember1 from '../images/Founder1.jpg'; // Add actual images
import teamMember2 from '../images/Founder2.jpg';
import teamMember3 from '../images/Founder3.jpg';

const Intro = () => {
    return (
        <>
            <div className="relative w-full min-h-screen p-2 md:p-12" id='about' style={{ background: 'linear-gradient(to bottom, #e0f7fa, #ffffff)' }}>
                {/* SVG Path Overlays */}
                <svg className="absolute inset-0 z-0" viewBox="0 0 1200 600" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#e0f7fa" d="M0,0 C600,200 800,100 1200,300 L1200,600 L0,600 Z" opacity="0.5" />
                    <path fill="#ffffff" d="M0,300 C400,500 800,300 1200,500 L1200,600 L0,600 Z" opacity="0.3" />
                </svg>

                <div className="relative z-10">
                    <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="fade-up">
                        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            <img alt="Introduction_image" className="rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300" src={img} />
                        </div>
                        <div className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8" data-aos="zoom-in" data-aos-delay="500">
                            <h3 className="text-3xl text-green-900 font-bold">
                                Empowering Communities Through Education and Support
                            </h3>
                            <div>
                                <p className='my-3 text-xl text-gray-600 font-semibold'>
                                    Our mission is to provide educational resources and support to underprivileged communities, fostering sustainable development and growth.
                                </p>
                            </div>
                            <div>
                                <p className='my-3 text-xl text-gray-600 font-semibold'>
                                    We are dedicated to making a positive impact through various initiatives aimed at improving lives and creating opportunities for those in need.
                                </p>
                            </div>
                            <Link to="/get-involved" className="text-white bg-green-900 hover:bg-green-800 inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group transition-transform transform hover:scale-105 duration-300">
                                Get Involved
                                <svg className="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    
                    {/* History Section */}
                    <div className="my-8 px-8 py-8" data-aos="fade-up">
                        <h3 className="text-2xl text-green-900 font-bold mb-4">Our History</h3>
                        <p className="text-lg text-gray-700 font-bold">
                            Founded in [Year], our NGO has been dedicated to supporting underprivileged communities through education and various social initiatives. Our journey began with a small group of passionate individuals who wanted to make a difference, and over the years, we have grown into a reputable organization making a significant impact in the lives of many.
                        </p>
                    </div>
                    
                    {/* Team Members Section */}
                    <div className="my-8 p-8 bg-white shadow-xl rounded-xl" data-aos="fade-up">
                        <h3 className="text-2xl text-green-900 font-bold mb-4">Our Team Members</h3>
                        <div className="grid gap-8 md:grid-cols-3">
                            <div className="text-center">
                                <img alt="Team Member 1" className="rounded-full mx-auto w-48 h-48 object-cover shadow-lg transition-transform transform hover:scale-105 duration-300" src={teamMember1} />
                                <h3 className="mt-4 text-2xl text-green-900 font-semibold">John Doe</h3>
                                <p className="text-md font-medium text-gray-700">Founder</p>
                                <a href="https://www.linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">LinkedIn</a>
                            </div>
                            <div className="text-center">
                                <img alt="Team Member 2" className="rounded-full mx-auto w-48 h-48 object-cover shadow-lg transition-transform transform hover:scale-105 duration-300" src={teamMember2} />
                                <h3 className="mt-4 text-2xl text-green-900 font-semibold">Jawaharlal Nehru</h3>
                                <p className="text-md font-medium text-gray-700">Co-founder</p>
                                <a href="https://www.linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">LinkedIn</a>
                            </div>
                            <div className="text-center">
                                <img alt="Team Member 3" className="rounded-full mx-auto w-48 h-48 object-cover shadow-lg transition-transform transform hover:scale-105 duration-300" src={teamMember3} />
                                <h3 className="mt-4 text-2xl text-green-900 font-semibold">Malala Yousafzai</h3>
                                <p className="text-md font-medium text-gray-700">Co- Founder</p>
                                <a href="https://www.linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">LinkedIn</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Intro;
