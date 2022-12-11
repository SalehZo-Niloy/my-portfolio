import Head from 'next/head';
import React from 'react';
import Footer from '../../Components/Footer/Footer';
import NavBar from '../../Components/NavBar/NavBar';

const project1 = () => {
    return (
        <div>
            <Head>
                <title>Guitar Square-MSN</title>
            </Head>
            <NavBar></NavBar>
            <h1 className='text-2xl font-semibold text-center mt-8 text-primary'>Project Name: <span className='text-accent'>Guitar Square - A Guitar Reselling Site</span></h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 w-11/12 mx-auto'>
                <div>
                    <h2 className='text-xl font-semibold text-primary'>Visit: <a href='https://guitar-square.web.app/' className='link link-accent text-lg' target='blank'>Live Site</a> || <a href="https://github.com/SalehZo-Niloy/Guitar-Square-Guitar-reselling-site-client-side" className='link link-accent text-lg' target='blank'>GitHub Client-Side Repo</a> || <a href="https://github.com/SalehZo-Niloy/Guitar-Square-Guitar-reselling-site-server-side" className='link link-accent text-lg' target='blank'>GitHub Server-Side Repo</a></h2>
                    <h3 className='text-xl font-semibold text-primary mt-8'>Project Details:</h3>
                    <div>
                        <ul className='list-disc list-inside mt-2'>
                            <li>This is a second-hand guitar reselling site, in home page you will find,
                                <ul className='list-decimal list-inside ml-6 mt-2'>
                                    <li className='mb-1'>Categories of guitar. By clicking the view products you can see the guitars available for sell under that category. But you need to log in for that.

                                    </li>
                                    <li className='mb-1'>There is a section for product that has been advertised by the seller.

                                    </li>
                                    <li className='mb-1'>You can also send feedbacks to us through the feed back section.

                                    </li>
                                </ul>
                            </li>
                            <li className='mt-2'>Login as a buyer,


                                <ul className='list-decimal list-inside ml-6 mt-2'>
                                    <li className='mb-1'>You can book the products, also buy the guitar by completing payment


                                    </li>
                                    <li className='mb-1'>In Dashboard you will find my orders, where you can see the products booked by you.


                                    </li>

                                </ul>
                            </li>
                            <li className='mt-2'>Login as a seller,
                                <ul className='list-decimal list-inside ml-6 mt-2'>
                                    <li className='mb-1'>You can add products for sell in dashboards add product route.
                                    </li>
                                    <li className='mb-1'>Can see all the products added by you in the My products route, can advertise any product from there or even delete the product. You can see products sales status.
                                    </li>

                                </ul>
                            </li>
                            <li className='mt-2'>Login as a admin,
                                <ul className='list-decimal list-inside ml-6 mt-2'>
                                    <li className='mb-1'>If you have admin access in Dashboard you can go to Sellers and Buyers route where you can see all the sellers and buyers, can verify sellers, or delete any seller or buyer
                                    </li>
                                    <li className='mb-1'>If any seller or buyer is deleted, they can not login again to the site, seller's all products would be deleted too.
                                    </li>
                                    <li className='mb-1'>In reported item route admin will see the products that has been reported. Those product can be deleted by him.


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

                    <img src="/project1-images/img1.PNG" alt="" className='w-full rounded-lg shadow-primary shadow-lg' />
                    <img src="/project1-images/img2.PNG" alt="" className='w-full rounded-lg shadow-primary shadow-lg' />
                    <img src="/project1-images/img3.PNG" alt="" className='w-full rounded-lg shadow-primary shadow-lg' />

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default project1;