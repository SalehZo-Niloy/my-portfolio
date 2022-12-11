import Link from 'next/link';
import React from 'react';

const Projects = () => {
    return (
        <div className='w-11/12 mx-auto mt-12'>
            <h1 className='text-3xl font-bold text-primary'>My Projects</h1>
            <div className='mt-4 grid grid-cols-1 lg:grid-cols-2 gap-8'>
                {/* project 1  */}
                <div className="hero rounded-xl overflow-hidden shadow-xl" style={{ backgroundImage: `url("/projects-images/project1.PNG")` }}>
                    <div className="hero-overlay bg-opacity-80"></div>
                    <div className="card glass mt-8 mb-6 w-3/4">
                        <figure><img src="/projects-images/project1.PNG" alt="car!" /></figure>
                        <div className="card-body p-4">
                            <h2 className="card-title text-primary text-2xl font-bold">Guitar Square</h2>
                            <p>A second-hand guitar reselling site</p>
                            <Link href='/projects/project1' className="btn btn-primary text-black mt-2">View project details</Link>
                        </div>
                    </div>
                </div>
                {/* project 2  */}
                <div className="hero rounded-xl overflow-hidden shadow-xl" style={{ backgroundImage: `url("/projects-images/project2.PNG")` }}>
                    <div className="hero-overlay bg-opacity-80"></div>
                    <div className="card glass mt-8 mb-6 w-3/4">
                        <figure><img src="/projects-images/project2.PNG" alt="car!" /></figure>
                        <div className="card-body p-4">
                            <h2 className="card-title text-primary text-2xl font-bold">NVIS</h2>
                            <p>A visa and immigration services site</p>
                            <Link href='/projects/project2' className="btn btn-primary text-black mt-2">View project details</Link>
                        </div>
                    </div>
                </div>
                {/* project 3  */}
                <div className="hero rounded-xl overflow-hidden shadow-xl" style={{ backgroundImage: `url("/projects-images/project3.PNG")` }}>
                    <div className="hero-overlay bg-opacity-80"></div>
                    <div className="card glass mt-8 mb-6 w-3/4">
                        <figure><img src="/projects-images/project3.PNG" alt="car!" /></figure>
                        <div className="card-body p-4">
                            <h2 className="card-title text-primary text-2xl font-bold">Into-Dev</h2>
                            <p>An online educational course's site</p>
                            <Link href='/projects/project3' className="btn btn-primary text-black mt-2">View project details</Link >
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Projects;