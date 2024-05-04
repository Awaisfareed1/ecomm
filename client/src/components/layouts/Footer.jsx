import React from 'react';
import logo from '../assets/amz.png';
import fbicon from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';
import tweeter from '../assets/tweeter.png';
export default function App() {
    return (
        <footer
            className="bg-black text-white text-center  lg:text-left font-ubunto ">
            <div className=" py-10 text-center md:text-left border-b border-gray-900 w-[80%] m-auto">
                <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
                    <div className="">
                        <h6
                            className="mb-4 flex items-center justify-center text-[24px] font-medium tracking-wide spacing md:justify-start">
                            Exclusive
                        </h6>
                        <h6
                            className="mb-4 flex items-center justify-center text-[20px] font-normal tracking-wide spacing md:justify-start">
                            Subscribe
                        </h6>
                        <p className="mb-4 font-thin" >Get 10% off your first order</p>
                        <div className="mb-4 font-thin">
                            <div className="relative">
                                <input
                                    type="text"
                                    className="w-[70%] py-2 pl-4 pr-4 border border-gray-300 bg-black rounded-md focus:outline-none "
                                    placeholder="Search..."
                                />
                                <button type="submit" className="absolute inset-y-0 right-12 md:right-24 lg:right-20 flex items-center text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <h6
                            className="mb-4 flex items-center justify-center text-[20px] font-normal tracking-wide spacing md:justify-start">
                            Support
                        </h6>
                        <div className='mb-4'>
                            <a href="https://maps.app.goo.gl/Zi8KFQMc2YCY6i457" target='blank' className='w-full md:w-52 block font-thin tracking-wide'>Mobile Market, Chowk Fawara, Hasilpur </a>
                        </div>
                        <div className='mb-4'>
                            <a href="mailto:awaisfareed1708@gmail.com?" target='blank' className='w-full md:w-52 block font-thin tracking-wide'>amz@gmail.com</a>
                        </div>
                        <div className='mb-4'>
                            <a href="tel:+923223190100?" target='blank' className='w-full md:w-52 block font-thin tracking-wide'>Call Us</a>
                        </div>
                    </div>
                    <div className="">
                        <h6
                            className="mb-4 flex items-center justify-center text-[20px] font-normal tracking-wide spacing md:justify-start">
                            Account
                        </h6>
                        <div className='mb-4'>
                            <a href="#" target='blank' className='w-full md:w-52 block font-thin tracking-wide'>My Account</a>
                        </div>
                        <div className='mb-4'>
                            <a href="#" target='blank' className='w-full md:w-52 block font-thin tracking-wide'>Login / Register</a>
                        </div>
                        <div className='mb-4'>
                            <a href="#" target='blank' className='w-full md:w-52 block font-thin tracking-wide'>Cart</a>
                        </div>
                        <div className='mb-4'>
                            <a href="#" target='blank' className='w-full md:w-52 block font-thin tracking-wide'>Wishlist</a>
                        </div>
                        <div className='mb-4'>
                            <a href="#" target='blank' className='w-full md:w-52 block font-thin tracking-wide'>Shop</a>
                        </div>
                    </div>
                    <div className="">
                        <h6
                            className="mb-4 flex items-center justify-center text-[20px] font-normal tracking-wide spacing md:justify-start">
                            Quick Link
                        </h6>
                        <div className='mb-4'>
                            <a href="#" target='blank' className='w-full md:w-52 block font-thin tracking-wide'>Privacy Policy</a>
                        </div>
                        <div className='mb-4'>
                            <a href="#" target='blank' className='w-full md:w-52 block font-thin tracking-wide'>Terms of Use</a>
                        </div>
                        <div className='mb-4'>
                            <a href="#" target='blank' className='w-full md:w-52 block font-thin tracking-wide'>FAQ</a>
                        </div>
                        <div className='mb-4'>
                            <a href="#" target='blank' className='w-full md:w-52 block font-thin tracking-wide'>Contact</a>
                        </div>
                    </div>
                    <div className="">
                        <img src={logo} className='w-20 h-20' alt="" />
                        <div className="mb-4 flex justify-between items-center gap-5">
                            <span><a href="#"><img src={fbicon} className='w-4 h-4' alt="facebookicon" /></a></span>
                            <span><a href="#"><img src={instagram} className='w-4 h-4' alt="instagramicon" /></a></span>
                            <span><a href="#"><img src={tweeter} className='w-4 h-4' alt="tweetericon" /></a></span>
                            <span><a href="#"><img src={linkedin} className='w-4 h-4' alt="linkedinicon" /></a></span>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!--Copyright section--> */}
            <div className=" p-6 text-center bg-black font-extralight ">
                <span>© Copyright AMZ phones 2024. All right reserved</span>
            </div>
        </footer>
    );
}