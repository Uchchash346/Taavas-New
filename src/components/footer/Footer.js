import React, { Fragment } from 'react';
import { MdFacebook } from 'react-icons/md';
import { BsInstagram } from 'react-icons/bs';

const Footer = () => {
    return (
        <Fragment>
            <section className='footer-content px-16 py-16 block'>
                <div className='flex justify-center max-w-7xl mx-auto my-auto'>
                    <div className='grid-x grid-margin-x flex flex-wrap'>
                        <div className='company-section w-auto mx-10'>
                            <div className='footer-context-block'>
                                <div className='footer-context-title mb-7'>
                                    <p className='font-bold'>Company</p>
                                </div>
                                <div className='footer-list-menu'>
                                    <ul className='list-none'>
                                        <li><a href="/about-us" className="text-slate-500 text-md">About Us</a></li>
                                        <li><a href="/" className="text-slate-500 text-md">Contact Us</a></li>
                                        <li><a href="/" className="text-slate-500 text-md">Intellectual Property</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='company-section w-auto mx-10'>
                            <div className='footer-context-block'>
                                <div className='footer-context-title mb-7'>
                                    <p className='font-bold'>Information</p>
                                </div>
                                <div className='footer-list-menu'>
                                    <ul className='list-none'>
                                        <li><a href="/" className="text-slate-500 text-md">Exchange & Return</a></li>
                                        <li><a href="/" className="text-slate-500 text-md">Size Guide</a></li>
                                        <li><a href="/" className="text-slate-500 text-md">Loyalty Program</a></li>
                                        <li><a href="/" className="text-slate-500 text-md">Display Center</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='company-section w-auto mx-10'>
                            <div className='footer-context-block'>
                                <div className='footer-context-title mb-7'>
                                    <p className='font-bold'>Legal</p>
                                </div>
                                <div className='footer-list-menu'>
                                    <ul className='list-none'>
                                        <li><a href="/" className="text-slate-500 text-md">Privacy Policy</a></li>
                                        <li><a href="/" className="text-slate-500 text-md">Payment Policy</a></li>
                                        <li><a href="/" className="text-slate-500 text-md">Shipping Policy</a></li>
                                        <li><a href="/" className="text-slate-500 text-md">Terms & Conditions</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='company-section w-auto mx-10'>
                            <div className='footer-context-block'>
                                <div className='footer-context-title mb-7'>
                                    <p className='font-bold'>Service Center</p>
                                </div>
                                <div className='footer-list-menu'>
                                    <ul className='list-none'>
                                        <li><a href="tel:+8809666774577" className="text-slate-500 text-md">09666774577</a></li>
                                        <li><a href="mailto:support@tavaas.global" className="text-slate-500 text-md">support@tavaas.global</a></li>
                                        <li></li>
                                        <li><a href="/" className="text-slate-500 text-md">Terms & Conditions</a></li>
                                    </ul>
                                </div>
                                <div className='mt-7'>
                                    <div className='footer-social-icon block'>
                                        <ul className='list-none flex'>
                                            <li className='pr-3'>
                                                <a href="/" className='text-2xl'><MdFacebook /></a>
                                            </li>
                                            <li className='pr-3'>
                                                <a href="/" className='text-2xl'><BsInstagram /></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='company-section w-auto mx-10'>
                            <div className='footer-context-block'>
                                <div className='footer-context-title mb-7'>
                                    <p className='font-bold'>You can pay by</p>
                                </div>
                                <div className='footer-list-menu'>
                                    <ul className='list-none flex flex-wrap w-44'>
                                        <li className="mb-5 flex-[50%]">
                                            <img src="https://kx-ilyn-shop-s3.s3.amazonaws.com/static/images/payment/footer-payment/visa.svg" alt="" />
                                        </li>
                                        <li className="mb-5 flex-[50%]">
                                            <img src="https://kx-ilyn-shop-s3.s3.amazonaws.com/static/images/payment/footer-payment/mastercard.svg" alt="" />
                                        </li>
                                        <li className="mb-5 flex-[50%]">
                                            <img src="https://kx-ilyn-shop-s3.s3.amazonaws.com/static/images/payment/footer-payment/ae.svg" alt="" />
                                        </li>
                                        <li className="mb-5 flex-[50%]">
                                            <img src="https://kx-ilyn-shop-s3.s3.amazonaws.com/static/images/payment/footer-payment/bkash.svg" alt="" />
                                        </li>
                                        <li className="mb-5 flex-[50%]">
                                            <img src="https://kx-ilyn-shop-s3.s3.amazonaws.com/static/images/payment/footer-payment/nagad.svg" alt="" />
                                        </li>
                                        <li className="mb-5 flex-[50%]">
                                            <img src="https://kx-ilyn-shop-s3.s3.amazonaws.com/static/images/payment/footer-payment/rocket.svg" alt="" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* copyright section */}
            <div className=''>
                <ul className='align-center footer-copyright bg-black text-white py-5'>
                    <li className='flex justify-center'>
                        © 2022 TAVAAS. Made with ❤️ by TechAByte Solutions
                    </li>
                </ul>
            </div>
        </Fragment>
    );
};

export default Footer;