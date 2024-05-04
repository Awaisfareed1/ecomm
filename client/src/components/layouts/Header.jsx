import { useState, useEffect } from "react";
import logo from '../assets/amz.png';
import { Link } from "react-router-dom";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [linkActive, setLinkActive] = useState('home');
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
  const onSetLinkActive = (value) => {
    setLinkActive(value);
  }
  return (
    <div className=' relative w-full z-50 shadow-lg font-ubunto'>
      <div className="bg-black text-white flex justify-center items-center">
        <div className="py-3">
          <p className="text-[14px]">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
        </div>
      </div>
      <div className={scrolled ? "navbar1" : "navbar2"}>
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-2 bg-white mb-3">
          <div className="container mx-auto flex flex-wrap items-center justify-between w-full md:full lg:w-[90%] xl:w-[80%]">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <Link
                className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black"
                to='/'
              >
                <img src={logo} className="h-16 w-16" alt="" />
              </Link>
              <button
                className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                </svg>
              </button>
            </div>
            <div
              className={
                "lg:flex items-center" +
                (navbarOpen ? " flex" : " hidden")
              }
              id="example-navbar-danger"
            >
              <ul className="flex flex-col lg:flex-row pt-2 list-none lg:ml-auto space-x-0  lg:space-x-10 space-y-5 lg:space-y-0">
                <li className="nav-item">
                  <Link
                    className={linkActive === 'home' ?
                      " flex items-center  leading-snug " :
                      " flex items-center  leading-snug "}
                    to="/"
                    onClick={() => {
                      onSetLinkActive('home')
                    }}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={linkActive === 'contact' ?
                      " flex items-center  leading-snug" :
                      " flex items-center  leading-snug"}
                    to="/contact"
                    onClick={() => {
                      onSetLinkActive('contact')
                    }}
                  >
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={linkActive === 'about' ?
                      " flex items-center  leading-snug" :
                      " flex items-center  leading-snug"}
                    to="/about"
                    onClick={() => {
                      onSetLinkActive('about')
                    }}
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={linkActive === 'signup' ?
                      " flex items-center  leading-snug" :
                      " flex items-center  leading-snug"}
                    to='/signup'
                    onClick={() => {
                      onSetLinkActive('signup')
                    }}
                  >
                    Sign Up
                  </Link>
                </li>
                <li className="nav-item block lg:hidden">
                  <Link
                    className=" flex items-center  leading-snug text-black hover hover:border-blue-300"
                    to="/">
                    <div className="flex justify-center items-center">
                      <div>
                        <img src="" alt="" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-light">Call Us Now</p>
                        <p className="text-sm font-semibold">+586 958 5545</p>
                      </div>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="hidden lg:block">
              <div className="flex justify-center items-center">
                <div>
                  <img src="" alt="" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-light">Call Us Now</p>
                  <p className="text-sm font-semibold">+586 958 5545</p>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header;