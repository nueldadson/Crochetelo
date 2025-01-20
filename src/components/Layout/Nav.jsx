import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { Logowhite, Logo } from "../../assets/images"; // Ensure image imports are correct
import { routes } from "../../routes.js"; // Named import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faInstagram, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";


const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Navigation Bar */}
      <header
        className={`fixed w-full h-20 flex items-center justify-between z-40 px-8 transition-all duration-300 ${
          isScrolled
            ? "bg-black text-white shadow-gray-400 shadow-sm"
            : "bg-black bg-opacity-0 text-white"
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center w-48 py-4">
          <img src={isScrolled ? Logo : Logowhite} alt="Logo" className="h-full" />
        </Link>

        {/* Navigation */}
        <nav className="flex h-full items-center">
          <ul className="flex space-x-6 justify-end mr-5 items-center max-sm:hidden text-md">
            {routes.map(({ label, path }) => (
              <li key={path}>
                <Link
                  to={path}
                  className={`font-montserrat leading-normal font-semibold hover:text-secondary ${
                    isScrolled ? "text-white" : "text-white"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex justify-end hidden max-sm:block">
            <FontAwesomeIcon
  icon={isOpen ? faTimes : faBars}
  className={`text-[24px] ${isOpen ? "text-black" : "text-white"}`}
  onClick={toggleSidebar}
/>

          </div>
        </nav>
      </header>

      {/* Sidebar */}
      <div
        className={` z-50 fixed top-0 right-0 h-[100vh] w-full bg-white text-black transition-all duration-300 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
          <FontAwesomeIcon
            icon={faTimes}
            className="absolute right-14 top-12 text-black text-3xl cursor-pointer"
            onClick={toggleSidebar}
          />
        <ul className="py-10 px-12">
          {routes.map(({ label, path }) => (
            <li key={path} className="py-8 border-b-[0.1px] border-b-slate-400">
              <Link
  to={path}
  onClick={() => {
    setIsOpen(false); // Close the sidebar
    window.scrollTo(0, 0); // Scroll to the top (optional)
  }}
  className="text-2xl font-semibold hover:text-secondary block"
>
  {label}
</Link>

            </li>
          ))}
        </ul>
        <div className="flex justify-center mt-4 space-x-6 text-4xl text-brown h-[100vh]">
          <a href="https://linkedin.com" className="" title="LinkedIn" aria-label="LinkedIn">
  <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" />
</a>
<a href="www.instagram.com/crochetelo_/" className="" title="Instagram" aria-label="Instagram">
  <FontAwesomeIcon icon={faInstagram} aria-hidden="true" />
</a>
<a href="https://www.facebook.com/crochetelo" className="" title="Facebook" aria-label="Facebook">
  <FontAwesomeIcon icon={faFacebook} aria-hidden="true" />
</a>
<a href="https://x.com/Crochetelo_" className="" title="Twitter" aria-label="Twitter">
  <FontAwesomeIcon icon={faTwitter} aria-hidden="true" />
</a>
        </div>
      </div>
    </>
  );
};

export default Nav;
