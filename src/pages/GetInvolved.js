import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import Notiflix from 'notiflix';
import img from '../images/goodone.jpg';

const GetInvolved = () => {
    useDocTitle('LearnLift NGO | Get Involved');

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [volunteerOptions, setVolunteerOptions] = useState([]);
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const value = e.target.value;
        const checked = e.target.checked;
        if (checked) {
            setVolunteerOptions([...volunteerOptions, value]);
        } else {
            setVolunteerOptions(volunteerOptions.filter(e => e !== value));
        }
    };

    const clearInput = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setVolunteerOptions([]);
    };

    const validateForm = () => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]{10}$/;

        if (!firstName) newErrors.firstName = 'First Name is required';
        if (!lastName) newErrors.lastName = 'Last Name is required';
        if (!email) newErrors.email = 'Email is required';
        else if (!emailRegex.test(email)) newErrors.email = 'Invalid Email';
        if (!phone) newErrors.phone = 'Phone is required';
        else if (!phoneRegex.test(phone)) newErrors.phone = 'Invalid Phone Number';
        if (!message) newErrors.message = 'Message is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const sendForm = (e) => {
        e.preventDefault();
        if (validateForm()) {
            clearInput();
            Notiflix.Notify.success('You have submitted a form and will get emails about the further process.', {
                timeout: 5000
            });
        } else {
            Notiflix.Notify.failure('Please fix the errors in the form.', {
                timeout: 5000
            });
        }
    };

    const openPaymentPortal = () => {
        setShowPaymentModal(true);
    };

    const closePaymentPortal = () => {
        setShowPaymentModal(false);
    };


    return (
        <>
            <div>
                <NavBar />
            </div>
            <div id='get-involved' className="flex flex-col items-center mt-8 w-full bg-white py-12 lg:py-24">
                <div className="container mx-auto flex flex-col items-center px-4 lg:px-20">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center w-full lg:w-auto mb-8 lg:mb-16">
                        <div className="lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
                            <h1 className="font-bold text-green-900 uppercase text-4xl mb-4">How You Can Contribute</h1>
                            <p className="text-lg text-gray-700">
                                You can make a significant impact in our community by getting involved with our various initiatives. 
                                <br/><br/>
                                Join us at our upcoming events to meet the students and provide hands-on support through teaching. 
                                If you are unable to attend, consider making a monetary donation. Your contribution will help us 
                                provide essential resources and support to those in need. Every bit helps us get closer to our goal of 
                                enhancing educational opportunities for underprivileged students.
                            </p>
                        </div>
                        <div className="lg:w-1/2">
                            <img src={img} alt="How to Contribute" className="w-full h-auto rounded-lg shadow-lg border-2 border-gray-300 hover:border-green-900 transition duration-300 ease-in-out"/>
                        </div>
                    </div>

                    <div className="w-full lg:w-9/12 bg-white p-8 my-8 lg:my-16 rounded-2xl shadow-2xl">
                        <form onSubmit={sendForm} id="volunteerForm">
                            <h2 className="font-bold text-center text-green-900 uppercase text-4xl mb-8">Get Involved with LearnLift</h2>
                            <div className="flex flex-col lg:flex-row lg:space-x-4">
                                <div className="flex-1 mb-4">
                                    <input 
                                        name="first_name" 
                                        className="w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text" 
                                        placeholder="First Name*" 
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </div>
                                
                                <div className="flex-1 mb-4">
                                    <input 
                                        name="last_name" 
                                        className="w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text" 
                                        placeholder="Last Name*"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row lg:space-x-4">
                                <div className="flex-1 mb-4">
                                    <input 
                                        name="email"
                                        className="w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="email" 
                                        placeholder="Email*"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div className="flex-1 mb-4">
                                    <input 
                                        name="phone_number" 
                                        className="w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="number" 
                                        placeholder="Phone*"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="mb-4">
                                <textarea 
                                    name="message" 
                                    placeholder="Message*" 
                                    className="w-full h-32 bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                ></textarea>
                            </div>
                            <div className="mb-4">
                                <h3 className="text-gray-700 mb-2">Volunteer Options:</h3>
                                <label className="flex items-center mb-2">
                                    <input 
                                        type="checkbox" 
                                        value="teaching" 
                                        onChange={handleChange} 
                                    />
                                    <span className="ml-2">Teaching</span>
                                </label>
                                <label className="flex items-center mb-2">
                                    <input 
                                        type="checkbox" 
                                        value="fundraising" 
                                        onChange={handleChange} 
                                    />
                                    <span className="ml-2">Fundraising</span>
                                </label>
                                <label className="flex items-center mb-2">
                                    <input 
                                        type="checkbox" 
                                        value="event_organization" 
                                        onChange={handleChange} 
                                    />
                                    <span className="ml-2">Event Organization</span>
                                </label>
                            </div>
                            <div className="text-center">
                                <button type="submit" id="submitBtn" className="uppercase text-sm font-bold tracking-wide bg-gray-500 hover:bg-green-900 text-gray-100 p-3 rounded-lg w-full lg:w-auto">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="w-full lg:w-9/12 bg-white p-8 my-8 lg:my-16 rounded-2xl shadow-2xl">
                        <h2 className="font-bold text-center text-green-900 uppercase text-4xl mb-8">Make a Donation</h2>
                        <p className="text-lg text-gray-700 text-center mb-8">
                            Your donations help us provide essential resources and support to underprivileged students. Every contribution, big or small, makes a significant impact.
                        </p>
                        <div className="text-center">
                            <button 
                                className="uppercase text-sm font-bold tracking-wide bg-gray-500 hover:bg-green-900 text-gray-100 p-3 rounded-lg w-full lg:w-auto"
                                onClick={openPaymentPortal}
                            >
                                Donate Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

            {showPaymentModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
                    <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/3">
                        <h2 className="text-2xl font-bold mb-4">Payment Portal</h2>
                        <p className="mb-4">Scan the QR code or proceed with the payment portal below.</p>
                        {/* Replace with actual payment portal or QR code */}
                        <div className="flex justify-center">
                            <img src="https://via.placeholder.com/150" alt="QR Code" className="mb-4"/>
                        </div>
                        <button onClick={closePaymentPortal} className="bg-green-900 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default GetInvolved;
