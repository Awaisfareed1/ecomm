import React from 'react';
import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    const [scrolled, setScrolled] = useState(false);
    const topOffset = 50;
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= topOffset) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.addEventListener('scroll', handleScroll);
        }
    }, [])
    return (
        <div>
            <Header />
            <main className='font-ubunto mx-auto w-full md:full lg:w-[90%] xl:w-[80%]'>
                <div className={scrolled ? "toplayout" : "bottomLayout"}></div>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout;