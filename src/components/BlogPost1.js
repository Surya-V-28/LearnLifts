import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './Navbar/NavBar';
import Footer from './Footer';

const BlogPost1 = () => {
  return (
    <>
    <NavBar />
    <div className="header">
      <Link to="/blog" className="back">
        Back
      </Link>
      <div className="main container">
        <h5>Design</h5>
        <h1>Lorem ipsum dolor sit amet, consectetur</h1>
        <a href="www.ahmetaksungur.com" className="authorlink">
          Ahmet Aksungur
        </a>
        <figure>
          <img src="https://mir-s3-cdn-cf.behance.net/projects/404/396f5591178321.Y3JvcCwxMjk0LDEwMTIsMCwzODQ.png" alt="Blog post" />
        </figure>
        <div className="pl-0 col-md-12 pt-2">
          {/* Blog content */}
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default BlogPost1;
