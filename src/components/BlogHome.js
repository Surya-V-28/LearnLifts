import React from "react";
import { Link } from "react-router-dom";
import Notiflix from "notiflix"; // Import Notiflix
import blogImage1 from "../images/b1.jpg"; // Replace with your blog images
import blogImage2 from "../images/b2.jpg";
import blogImage3 from "../images/b3.jpg";
import blogImage4 from "../images/b4.jpg";
import blogImage5 from "../images/b5.jpg";
import "./BlogHome.css";

const BlogHome = () => {
  // Handle read more button click
  const handleReadMore = () => {
    Notiflix.Notify.info("This feature is under implementation.");
  };

  return (
    <>
      <div className="bg-green-100 py-12" id="blogs">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-green-900 uppercase">
              OUR LASTEST BLOGS
            </h1>
            <div className="flex justify-center mt-2">
              <div className="w-32 border-b-4 border-green-900"></div>
            </div>
          </div>
          <div className="relative">
            <div className="flex overflow-x-auto space-x-6 pb-8 hide-scrollbar">
              <div className="min-w-[300px] bg-white rounded-lg shadow-lg flex flex-col transition-transform transform hover:scale-105 hover:shadow-2xl">
                <img
                  className="rounded-t-lg w-full h-48 object-cover"
                  src={blogImage1}
                  alt="Blog 1"
                />
                <div className="p-4 flex flex-col flex-grow">
                  <h2 className="text-xl font-bold blog-title">Blog Title 1</h2>
                  <p className="mt-2 text-gray-600">
                    Short description of the blog. This provides a brief
                    overview of the content.
                  </p>
                  <button
                    onClick={handleReadMore}
                    className="mt-auto text-blue-600 hover:text-blue-800"
                  >
                    Read more
                  </button>
                </div>
              </div>
              <div className="min-w-[300px] bg-white rounded-lg shadow-lg flex flex-col transition-transform transform hover:scale-105 hover:shadow-2xl">
                <img
                  className="rounded-t-lg w-full h-48 object-cover"
                  src={blogImage2}
                  alt="Blog 2"
                />
                <div className="p-4 flex flex-col flex-grow">
                  <h2 className="text-xl font-bold blog-title">Blog Title 2</h2>
                  <p className="mt-2 text-gray-600">
                    Short description of the blog. This provides a brief
                    overview of the content.
                  </p>
                  <button
                    onClick={handleReadMore}
                    className="mt-auto text-blue-600 hover:text-blue-800"
                  >
                    Read more
                  </button>
                </div>
              </div>

              <div className="min-w-[300px] bg-white rounded-lg shadow-lg flex flex-col transition-transform transform hover:scale-105 hover:shadow-2xl">
                <img
                  className="rounded-t-lg w-full h-48 object-cover"
                  src={blogImage3}
                  alt="Blog 3"
                />
                <div className="p-4 flex flex-col flex-grow">
                  <h2 className="text-xl font-bold blog-title">Blog Title 3</h2>
                  <p className="mt-2 text-gray-600">
                    Short description of the blog. This provides a brief
                    overview of the content.
                  </p>
                  <button
                    onClick={handleReadMore}
                    className="mt-auto text-blue-600 hover:text-blue-800"
                  >
                    Read more
                  </button>
                </div>
              </div>

              <div className="min-w-[300px] bg-white rounded-lg shadow-lg flex flex-col transition-transform transform hover:scale-105 hover:shadow-2xl">
                <img
                  className="rounded-t-lg w-full h-48 object-cover"
                  src={blogImage4}
                  alt="Blog 4"
                />
                <div className="p-4 flex flex-col flex-grow">
                  <h2 className="text-xl font-bold blog-title">Blog Title 4</h2>
                  <p className="mt-2 text-gray-600">
                    Short description of the blog. This provides a brief
                    overview of the content.
                  </p>
                  <button
                    onClick={handleReadMore}
                    className="mt-auto text-blue-600 hover:text-blue-800"
                  >
                    Read more
                  </button>
                </div>
              </div>

              <div className="min-w-[300px] bg-white rounded-lg shadow-lg flex flex-col transition-transform transform hover:scale-105 hover:shadow-2xl">
                <img
                  className="rounded-t-lg w-full h-48 object-cover"
                  src={blogImage5}
                  alt="Blog 5"
                />
                <div className="p-4 flex flex-col flex-grow">
                  <h2 className="text-xl font-bold blog-title">Blog Title 5</h2>
                  <p className="mt-2 text-gray-600">
                    Short description of the blog. This provides a brief
                    overview of the content.
                  </p>
                  <button
                    onClick={handleReadMore}
                    className="mt-auto text-blue-600 hover:text-blue-800"
                  >
                    Read more
                  </button>
                </div>
              </div>
              {/* Add more blog items here */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogHome;
