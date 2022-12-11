import Head from 'next/head';
import React from 'react';
import Footer from '../Components/Footer/Footer';
import NavBar from '../Components/NavBar/NavBar';

const blogs = () => {
    return (
        <div>
            <Head>
                <title>Blogs</title>
            </Head>
            <NavBar></NavBar>
            <div className='w-11/12 mx-auto min-h-[90vh]'>
                <h1 className='text-2xl font-semibold text-center mt-8 text-primary'>My Blogs</h1>
                <h3 className='text-xl font-semibold text-center mt-8 text-accent'>Coming soon...</h3>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default blogs;