import Link from 'next/link';
import React from 'react';

const AboutMe = () => {
    return (
        <div className="hero mt-12 bg-base-300 w-11/12 mx-auto rounded-lg shadow-2xl">
            <div className="hero-content">
                <div className='px-4 md:px-10 py-3 md:py-8'>
                    <h1 className="text-3xl font-bold text-primary">About me</h1>
                    <p className="py-6">I have completed B.Sc. Engineering in Computer Science and Telecommunication Engineering from NSTU. I am a Front-End/MERN Stack Developer, interested in building well structured web applications/softwares. I am looking for an opportunity to show my ability in Web Developer's / Software Engineer's position...<Link href='/aboutMe' alt='' className='link link-accent'>See More</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;