import React from 'react';
import Clients from '../components/Clients';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import BlogHome from '../components/BlogHome';
import Contact from './Contact';
import { useDocTitle } from '../components/CustomHook';

const Home = () => {
    useDocTitle('LearnLift NGO');
    
    return (
        <>
            <Hero />
            <Intro />
            <Services  />
            <Portfolio />
            <Clients />
            <BlogHome />
            <Cta/>
            <Contact />
            <Footer />
        </>

    )
}

export default Home;

