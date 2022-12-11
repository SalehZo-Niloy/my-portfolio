import React from 'react';
import { FaFacebook, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-neutral text-base-content rounded mt-12">

            <div>
                <div className="grid grid-flow-col gap-4">
                    <a href='https://www.facebook.com/msnniloy' target='blank' className='text-primary text-xl md:text-2xl lg:text-3xl'><FaFacebook /></a>
                    <a href='https://www.linkedin.com/in/md-saleh-zohur-bhuiyan-941332237/' target='blank' className='text-primary text-xl md:text-2xl lg:text-3xl'><FaLinkedinIn /></a>
                    <a href='https://github.com/SalehZo-Niloy?tab=repositories' target='blank' className='text-primary text-xl md:text-2xl lg:text-3xl'><FaGithub /></a>

                </div>
            </div>
            <div>
                <p>Copyright © 2022 - All right reserved by Md. Saleh Zohur Bhuiyan</p>
            </div>
        </footer>
    );
};

export default Footer;