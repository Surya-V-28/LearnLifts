import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import Notiflix from 'notiflix';
import MapComponent from '../components/MapComponent'; // Import MapComponent

const Contact = () => {
  useDocTitle('MLD | Molad e Konsult - Send us a message');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

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

  const sendEmail = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Clear form and errors
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setErrors({});
      Notiflix.Notify.success('Your message has been sent successfully!', {
        timeout: 3000
      });
    } else {
      Notiflix.Notify.failure('Please fix the errors in the form.', {
        timeout: 3000
      });
    }
  };

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div id='contact' className="flex flex-col items-center mt-8 w-full bg-white py-12 lg:py-24">
        <div className="container mx-auto px-4 lg:px-20">
          {/* Heading with underline */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-green-900 uppercase">Contact Us</h1>
            <div className="flex justify-center mt-2">
              <div className="w-32 border-b-4 border-green-900"></div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between gap-8 mt-12">
            <div className="w-full lg:w-1/2 bg-green-900 rounded-2xl p-6 text-white">
              <h2 className="text-2xl font-bold mb-4">Contact Details</h2>
              <div className="flex items-start mb-4">
                <i className="fas fa-map-marker-alt mr-3" />
                <div>
                  <h3 className="text-xl">Office Address</h3>
                  <p className="text-gray-300">VIT Vellore, Vellore District, Tamil Nadu, India - 632014</p>
                </div>
              </div>
              <div className="flex items-start mb-4">
                <i className="fas fa-phone-alt mr-3" />
                <div>
                  <h3 className="text-xl">Call Us</h3>
                  <p className="text-gray-300">Tel: 0809344406</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="fas fa-envelope mr-3" />
                <div>
                  <h3 className="text-xl">Send an E-mail</h3>
                  <p className="text-gray-300">info@vit.ac.in</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <MapComponent /> {/* Add the Google Map component */}
            </div>
          </div>
          <form onSubmit={sendEmail} className='w-full lg:w-1/2 mx-auto'>
            <div className='bg-white p-8 my-4 rounded-2xl shadow-2xl'>
              <div className='flex justify-center'>
                <h1 className='font-bold text-center text-green-900 uppercase text-4xl'>
                  Send us a message
                </h1>
              </div>
              <div className='grid grid-cols-1 gap-5 md:grid-cols-2 mt-5'>
                <div>
                  <input
                    name='first_name'
                    className='w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline'
                    type='text'
                    placeholder='First Name*'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    onKeyUp={() => setErrors(prevErrors => ({ ...prevErrors, firstName: '' }))}
                  />
                  {errors.firstName && <p className='text-red-500 text-sm'>{errors.firstName}</p>}
                </div>
                <div>
                  <input
                    name='last_name'
                    className='w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline'
                    type='text'
                    placeholder='Last Name*'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    onKeyUp={() => setErrors(prevErrors => ({ ...prevErrors, lastName: '' }))}
                  />
                  {errors.lastName && <p className='text-red-500 text-sm'>{errors.lastName}</p>}
                </div>
                <div>
                  <input
                    name='email'
                    className='w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline'
                    type='email'
                    placeholder='Email*'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyUp={() => setErrors(prevErrors => ({ ...prevErrors, email: '' }))}
                  />
                  {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
                </div>
                <div>
                  <input
                    name='phone_number'
                    className='w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline'
                    type='number'
                    placeholder='Phone*'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    onKeyUp={() => setErrors(prevErrors => ({ ...prevErrors, phone: '' }))}
                  />
                  {errors.phone && <p className='text-red-500 text-sm'>{errors.phone}</p>}
                </div>
              </div>
              <div className='my-4'>
                <textarea
                  name='message'
                  placeholder='Message*'
                  className='w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyUp={() => setErrors(prevErrors => ({ ...prevErrors, message: '' }))}
                ></textarea>
                {errors.message && <p className='text-red-500 text-sm'>{errors.message}</p>}
              </div>
              <div className='my-2'>
                <button
                  type='submit'
                  id='submitBtn'
                  className='uppercase text-sm font-bold tracking-wide bg-gray-500 hover:bg-green-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline'
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
