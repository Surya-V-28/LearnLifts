import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Notiflix from 'notiflix'; // Import Notiflix
import './Portfolio.css';  // Import the CSS file for custom scrollbar styles
import img1 from '../images/teaching.jpeg'; // Import actual images for the projects
import img2 from '../images/teaching.jpeg';
import img3 from '../images/teaching.jpeg';
import img4 from '../images/teaching.jpeg';
import img5 from '../images/teaching.jpeg';

const Portfolio = () => {
    // Sample projects data
    const [projects] = useState([
        {
            id: 1,
            title: 'Educational Support',
            description: 'Provides resources, tutoring, and scholarships to underprivileged students.',
            status: 'Ongoing',
            image: img1,
        },
        {
            id: 2,
            title: 'Community Outreach',
            description: 'Supports local volunteers and organizes community events.',
            status: 'Completed',
            image: img2,
        },
        {
            id: 3,
            title: 'Health and Wellness',
            description: 'Provides medical care and health education to underserved communities.',
            status: 'Ongoing',
            image: img3,
        },
        {
            id: 4,
            title: 'Environmental Sustainability',
            description: 'Promotes eco-friendly practices and organizes clean-up events.',
            status: 'Upcoming',
            image: img4,
            registerDeadline: '2024-08-30',
        },
        {
            id: 5,
            title: 'Additional Project',
            description: 'Description for additional project.',
            status: 'Upcoming',
            image: img5,
            registerDeadline: '2024-08-20',
        }
    ]);

    // State for selected category
    const [selectedCategory, setSelectedCategory] = useState('Upcoming');

    // Filter projects based on category
    const filteredProjects = selectedCategory === 'All'
        ? projects
        : projects.filter(project => project.status === selectedCategory);

    // Calculate time left to register
    const calculateTimeLeft = (deadline) => {
        const now = new Date();
        const eventDate = new Date(deadline);
        const timeLeft = eventDate - now;

        if (timeLeft < 0) return 'Registration closed';

        const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        return `${daysLeft} days left`;
    };

    // Handle view details button click
    const handleViewDetails = () => {
        Notiflix.Notify.info('This feature is under implementation.');
    };

    // Handle register button click
    const handleRegister = () => {
        window.open('https://forms.gle/YOUR_GOOGLE_FORM_ID', '_blank');
    };

    return (
        <>
            <div className="my-4 py-4 bg-transparent" id='projects-all'>
                <h2 className="my-2 text-center text-3xl text-green-900 uppercase font-bold">Our Initiatives Events</h2>
                <div className='flex justify-center'>
                    <div className='w-24 border-b-4 border-green-900 mb-8'></div>
                </div>

                {/* Filters */}
                <div className="flex justify-center mb-8">
                    <button
                        className={`px-4 py-2 mr-2 rounded ${selectedCategory === 'All' ? 'bg-green-900 text-white' : 'bg-gray-200 text-gray-900'}`}
                        onClick={() => setSelectedCategory('All')}
                    >
                        All
                    </button>
                    <button
                        className={`px-4 py-2 mr-2 rounded ${selectedCategory === 'Ongoing' ? 'bg-green-900 text-white' : 'bg-gray-200 text-gray-900'}`}
                        onClick={() => setSelectedCategory('Ongoing')}
                    >
                        Ongoing
                    </button>
                    <button
                        className={`px-4 py-2 mr-2 rounded ${selectedCategory === 'Completed' ? 'bg-green-900 text-white' : 'bg-gray-200 text-gray-900'}`}
                        onClick={() => setSelectedCategory('Completed')}
                    >
                        Completed
                    </button>
                    <button
                        className={`px-4 py-2 mr-2 rounded ${selectedCategory === 'Upcoming' ? 'bg-green-900 text-white' : 'bg-gray-200 text-gray-900'}`}
                        onClick={() => setSelectedCategory('Upcoming')}
                    >
                        Upcoming
                    </button>
                </div>

                <div className="px-4" data-aos="fade-down" data-aos-delay="600">
                    <div className="cards-container no-scrollbar">
                        {filteredProjects.map(project => (
                            <div key={project.id} className="card">
                                <img src={project.image} alt={project.title} className="card-image" />
                                <div className="card-content">
                                    <h4 className="card-title">{project.title}</h4>
                                    <p className="card-description">{project.description}</p>
                                    {project.status === 'Upcoming' ? (
                                        <div className="register-section">
                                            <span className="time-left">{calculateTimeLeft(project.registerDeadline)}</span>
                                            <button onClick={handleRegister} className="card-button register-button">
                                                Register
                                                <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                            </button>
                                        </div>
                                    ) : (
                                        <button onClick={handleViewDetails} className="card-button">
                                            View Details
                                            <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Portfolio;
