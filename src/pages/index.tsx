import React from 'react';
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import AboutMe from '../components/aboutme';
import ExperienceSection from '../components/experience';
import Projects from '../components/projects';
import Contact from '../components/contact';
import Footer from '../components/footer';

const HomePage: React.FC = () => {
    return (
        <div className="bg-gray-900 min-h-screen">
            <Navbar />
            <main>
                <Hero />
                <AboutMe />
                <ExperienceSection />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;