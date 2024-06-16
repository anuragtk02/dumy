import React from 'react';

import logo from '../assets/logo.svg';

const Navbar = () => {
  return (
    <nav className="bg-soft-beige p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {/* Logo Image */}
            <img src={logo} alt="Logo" className="h-8 w-8 mr-3 ml-6" />
            <div className="flex-shrink-0 text-brown-700 text-4xl font-bold font-cursive">Handmade Crafts</div>
          </div>
          {/* Mobile Menu (Hamburger Icon) */}
          <div className="flex items-center md:hidden"> {/* Display on small screens (mobile) */}
            <button className="text-brown-500 hover:text-olive-700 px-3 py-2 rounded-md text-base font-medium">
              
            </button>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex ml-20"> {/* Display on medium screens and above (desktop) */}
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#products">Products</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
        </div>
        {/* Mobile Menu (Dropdown) */}
        <div className="md:hidden mt-4"> {/* Display on small screens (mobile) */}
          <hr className="border-t border-gray-300 my-1" />
          <div className="flex flex-col space-y-2">
            <NavLinkMobile href="#home">Home</NavLinkMobile>
            <NavLinkMobile href="#products">Products</NavLinkMobile>
            <NavLinkMobile href="#contact">Contact</NavLinkMobile>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }) => (
  <a href={href} className="text-brown-700 text-lg hover:text-olive-700 px-3 py-2 rounded-md font-medium">{children}</a>
);

const NavLinkMobile = ({ href, children }) => (
  <a href={href} className="text-brown-700 text-base hover:text-olive-700 px-3 py-2 font-medium">{children}</a>
);

export default Navbar;
