import React from 'react';

const MapComponent = () => {
  return (
    <div className="map-container rounded-lg border-2 border-gray-300 shadow-md">
      {/* Google Maps iframe pointing to VIT Vellore College */}
      <iframe
        title="VIT Vellore College Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.712598485722!2d79.1741045151994!3d12.98866159085963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52769f13b8a015%3A0xd6ff393b844b716c!2sVIT%20University%2C%20Vellore%2C%20Tamil%20Nadu%20416214!5e0!3m2!1sen!2sin!4v1692321771461!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default MapComponent;
