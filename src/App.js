import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route, 
  Navigate
} from 'react-router-dom';
// All pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import DemoProduct from './pages/DemoProduct';
import {useDocTitle} from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';
import GetInvolved from './pages/GetInvolved';
import BlogHome from './components/BlogHome';
import BlogPost1 from './components/BlogPost1';
import BlogPost2 from './components/BlogPost2';

function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    }

    window.addEventListener('load', () => {
      aos_init();
    });
  }, []);

  useDocTitle("LearnLift Home | NGO");

  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-donate" element={<DemoProduct />} /> 
            <Route path="/get-involved" element={<GetInvolved/>} />
            <Route exact path="/blog" element={<BlogHome />} />
          <Route path="/blog/1" element={<BlogPost1 />} />
          <Route path="/blog/2" element={<BlogPost2 />} />
          <Route path="*" element={<Navigate to="/" />} />
          
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}


export default App;
