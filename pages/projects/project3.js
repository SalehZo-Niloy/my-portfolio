import Head from 'next/head';
import React from 'react';
import Footer from '../../Components/Footer/Footer';
import NavBar from '../../Components/NavBar/NavBar';

const project3 = () => {
    return (
        <div>
            <Head>
                <title>Into Dev-MSN</title>
            </Head>
            <NavBar></NavBar>
            <h1 className='text-2xl font-semibold text-center mt-8 text-primary'>Project Name: <span className='text-accent'>Into Dev - An Online Web Development Course's Site</span></h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 w-11/12 mx-auto'>
                <div>
                    <h2 className='text-xl font-semibold text-primary'>Visit: <a href='https://dev-courses-assignment-10.web.app/' className='link link-accent text-lg' target='blank'>Live Site</a> || <a href="https://github.com/SalehZo-Niloy/Into-Dev-Online-Courses-Client-Side" className='link link-accent text-lg' target='blank'>GitHub Client-Side Repo</a> || <a href="https://github.com/SalehZo-Niloy/Into-Dev-Online-Courses-Server-Side" className='link link-accent text-lg' target='blank'>GitHub Server-Side Repo</a></h2>
                    <h3 className='text-xl font-semibold text-primary mt-8'>Project Details:</h3>
                    <div>
                        <ul className='list-disc list-inside mt-2'>
                            <li>Courses
                                <ul className='list-decimal list-inside ml-6 mt-2'>
                                    <li className='mb-1'>Three of our most recent services, by clicking see all you can see all the services available in the site.
                                    </li>
                                    <li className='mb-1'>By clicking course details or any course in the right side nav you can see the course details.
                                    </li>
                                    <li>Clicking on pdf icon would download the course details in pdf format.

                                    </li>
                                    <li>Clicking get premium access would take you to check out page.
                                    </li>
                                </ul>
                            </li>
                            <li className='mt-2'>Protected route
                                <ul className='list-decimal list-inside ml-6 mt-2'>
                                    <li className='mb-1'>Check out page is a protected route. So you need to be logged in for getting access to the page.
                                    </li>
                                </ul>
                            </li>
                            <li className='mt-2'>FAQ
                                <ul className='list-decimal list-inside ml-6 mt-2'>
                                    <li className='mb-1'>Some FAQs are answered about the site.
                                    </li>
                                </ul>
                            </li>
                            <li className='mt-2'>Blog
                                <ul className='list-decimal list-inside ml-6 mt-2'>
                                    <li className='mb-1'>There are some Web Development related questions which are answered in the Blog page.
                                    </li>
                                </ul>
                            </li>
                            <li className='mt-2'>Login
                                <ul className='list-decimal list-inside ml-6 mt-2'>
                                    <li className='mb-1'>Here you can login with email and password, for that you need to register first.
                                    </li>
                                    <li className='mb-1'>Google login is also available.
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col gap-8'>
                    <h3 className='text-xl font-semibold text-primary'>Site's Screenshots:</h3>

                    <img src="/project3-images/img1.png" alt="" className='w-full rounded-lg shadow-primary shadow-lg' />
                    <img src="/project3-images/img2.png" alt="" className='w-full rounded-lg shadow-primary shadow-lg' />
                    <img src="/project3-images/img3.png" alt="" className='w-full rounded-lg shadow-primary shadow-lg' />

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default project3;