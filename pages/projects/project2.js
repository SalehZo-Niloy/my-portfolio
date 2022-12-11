import Head from 'next/head';
import React from 'react';
import Footer from '../../Components/Footer/Footer';
import NavBar from '../../Components/NavBar/NavBar';

const project2 = () => {
    return (
        <div>
            <Head>
                <title>NVIS-MSN</title>
            </Head>
            <NavBar></NavBar>
            <h1 className='text-2xl font-semibold text-center mt-8 text-primary'>Project Name: <span className='text-accent'>NVIS - Visa and Immigration Services</span></h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 w-11/12 mx-auto'>
                <div>
                    <h2 className='text-xl font-semibold text-primary'>Visit: <a href='https://visa-immigration-service-as-11.web.app/' className='link link-accent text-lg' target='blank'>Live Site</a> || <a href="https://github.com/SalehZo-Niloy/Visa-and-Immigration-Services-Client-Side" className='link link-accent text-lg' target='blank'>GitHub Client-Side Repo</a> || <a href="https://github.com/SalehZo-Niloy/Visa-and-Immigration-Services-Server-Side" className='link link-accent text-lg' target='blank'>GitHub Server-Side Repo</a></h2>
                    <h3 className='text-xl font-semibold text-primary mt-8'>Project Details:</h3>
                    <div>
                        <ul className='list-disc list-inside mt-2'>
                            <li>This website provides visa and immigration services. In home page you will find,


                                <ul className='list-decimal list-inside ml-6 mt-2'>
                                    <li className='mb-1'>Three of our most recent services, by clicking see all you can see all the services available in the site.
                                    </li>
                                    <li className='mb-1'>Two sections, one about our happy clients, other is of upcoming services.
                                    </li>
                                </ul>
                            </li>
                            <li className='mt-2'>Services page,
                                <ul className='list-decimal list-inside ml-6 mt-2'>
                                    <li className='mb-1'>Here every provided services are shown.
                                    </li>
                                    <li className='mb-1'>Clicking view details would take you to the service details page.
                                    </li>

                                </ul>
                            </li>
                            <li className='mt-2'>Service details page,
                                <ul className='list-decimal list-inside ml-6 mt-2'>
                                    <li className='mb-1'>Here you will find the detailed description of the service.
                                    </li>
                                    <li className='mb-1'>Review of other clients are also shown here. -If you are logged in you can give your own review.
                                    </li>

                                </ul>
                            </li>
                            <li className='mt-2'>My Reviews
                                <ul className='list-decimal list-inside ml-6 mt-2'>
                                    <li className='mb-1'>If you are logged in then you can go to My Reviews page and see every reviews you have given so far.
                                    </li>
                                    <li className='mb-1'>Review update and delete can be done here.
                                    </li>
                                </ul>
                            </li>
                            <li className='mt-2'>Add Service
                                <ul className='list-decimal list-inside ml-6 mt-2'>
                                    <li className='mb-1'>Here a new service can be added to the website. User login also required for this route.
                                    </li>
                                </ul>
                            </li>
                            <li className='mt-2'>Blog
                                <ul className='list-decimal list-inside ml-6 mt-2'>
                                    <li className='mb-1'>There are some Web Development related questions which are answered in the Blog page.
                                    </li>
                                    <li className='mb-1'>Google login is also available.
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

                    <img src="/project2-images/img1.png" alt="" className='w-full rounded-lg shadow-primary shadow-lg' />
                    <img src="/project2-images/img2.png" alt="" className='w-full rounded-lg shadow-primary shadow-lg' />
                    <img src="/project2-images/img3.png" alt="" className='w-full rounded-lg shadow-primary shadow-lg' />

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default project2;