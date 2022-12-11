import React from 'react';
import Footer from '../Components/Footer/Footer';
import NavBar from '../Components/NavBar/NavBar';

const aboutMe = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className='w-11/12 mx-auto min-h-[90vh]'>
                <h1 className='text-2xl font-semibold text-center mt-8 text-primary'>About Me</h1>
                <p className="py-6">I have completed B.Sc. Engineering in Computer Science and Telecommunication Engineering from NSTU. I am a Front-End/MERN Stack Developer, interested in building well structured web applications/softwares. I am looking for an opportunity to show my ability in Web Developer's / Software Engineer's position.
                </p>
                <p className="pb-6">I have expertise in, ReactJS, JavaScript, Node.js, Express.js, ES6, HTML, CSS. <br />
                    I am also comfortable with, MongoDb, JWT, DSA, OOP, C++</p>
                <p>Contact me through: <br />
                    Email: msnniloy7@gmail.com <br />
                    Phone: +8801615533636 <br />
                    LinkedIn: <a href="https://www.linkedin.com/in/md-saleh-zohur-bhuiyan-941332237/" target='blank' className='link link-accent'>https://www.linkedin.com/in/md-saleh-zohur-bhuiyan-941332237/</a> <br />
                    GitHub: <a href="https://github.com/SalehZo-Niloy?tab=repositories" target='blank' className='link link-accent'>https://github.com/SalehZo-Niloy?tab=repositories</a>
                </p>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default aboutMe;