import React from 'react';
import { Link } from 'react-router-dom';

const BlogPost2 = () => {
  return (
    <div className="header">
      <Link to="/blog" className="back">
        Back
      </Link>
      <div className="main container">
        <h5>Design</h5>
        <h1>Life Of Architecture Blog Detail</h1>
        <Link to="#" className="authorlink">
          Ahmet Aksungur
        </Link>
        <figure>
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/ad9cb894970549.5e8f28eecdea8.jpg" alt="Blog post" />
        </figure>
        <div className="pl-0 col-md-12 pt-2">
          {/* Blog content */}
        </div>
      </div>
    </div>
  );
};

export default BlogPost2;
