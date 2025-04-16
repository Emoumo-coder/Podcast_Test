// components/Navbar.tsx
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";
import Logo from "../public/Logo.png";

// Define props for dropdown items
interface NavDropdownItem {
  label: string;
  href: string;
}

interface NavbarProps {
  companyDropdownItems?: NavDropdownItem[];
  resourcesDropdownItems?: NavDropdownItem[];
}

const Navbar: React.FC<NavbarProps> = ({
  companyDropdownItems = [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/team" },
    { label: "Careers", href: "/careers" },
  ],
  resourcesDropdownItems = [
    { label: "Blog", href: "/blog" },
    { label: "Reports", href: "/reports" },
    { label: "Webinars", href: "/webinars" },
  ],
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white"
      }`}
    >
      <div className="lg:px-12 mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="relative h-12 w-24 md:h-16 md:w-20">
              <Image
                src={Logo} // Replace with your actual logo path
                alt="ABR - Africa Business Resources"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="inline-flex gap-12">
            <nav className="hidden md:flex md:items-center md:space-x-8">
              <Link
                href="/"
                className="text-[#282828] hover:text-red-600 font-medium"
              >
                Home
              </Link>

              {/* Company Dropdown */}
              <div className="relative group">
                <button
                  className="flex items-center text-[#282828] hover:text-red-600 font-medium"
                  onClick={() =>
                    setIsCompanyDropdownOpen(!isCompanyDropdownOpen)
                  }
                  onMouseEnter={() => setIsCompanyDropdownOpen(true)}
                  onMouseLeave={() => setIsCompanyDropdownOpen(false)}
                >
                  Company
                  <FaChevronDown className="ml-1 h-3 w-3" />
                </button>

                {/* Company Dropdown Menu */}
                {isCompanyDropdownOpen && (
                  <div
                    className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20"
                    onMouseEnter={() => setIsCompanyDropdownOpen(true)}
                    onMouseLeave={() => setIsCompanyDropdownOpen(false)}
                  >
                    {companyDropdownItems.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Resources Dropdown */}
              <div className="relative group">
                <button
                  className="flex items-center text-[#282828] hover:text-red-600 font-medium"
                  onClick={() =>
                    setIsResourcesDropdownOpen(!isResourcesDropdownOpen)
                  }
                  onMouseEnter={() => setIsResourcesDropdownOpen(true)}
                  onMouseLeave={() => setIsResourcesDropdownOpen(false)}
                >
                  Resources
                  <FaChevronDown className="ml-1 h-3 w-3" />
                </button>

                {/* Resources Dropdown Menu */}
                {isResourcesDropdownOpen && (
                  <div
                    className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20"
                    onMouseEnter={() => setIsResourcesDropdownOpen(true)}
                    onMouseLeave={() => setIsResourcesDropdownOpen(false)}
                  >
                    {resourcesDropdownItems.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                className="text-[#282828] hover:text-red-600 font-medium"
              >
                Contact us
              </Link>

              <Link
                href="/advertise"
                className="text-[#282828] hover:text-red-600 font-medium"
              >
                Advertise
              </Link>
            </nav>

            {/* Search Bar */}
            <div className="hidden md:flex items-center bg-[#ABABAB] rounded-full px-3 py-3.5">
              <FiSearch className="text-white mx-2 " />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none text-sm text-white w-32 lg:w-48 placeholder:text-white"
              />
            </div>
          </div>
          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-[#282828] hover:text-red-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-4">
            <div className="flex items-center bg-gray-200 rounded-md px-3 py-2 mb-4">
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none text-sm text-gray-700 flex-grow"
              />
              <FiSearch className="text-gray-500" />
            </div>

            <Link
              href="/"
              className="block py-2 text-[#282828] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            {/* Mobile Company Dropdown */}
            <div>
              <button
                onClick={() => setIsCompanyDropdownOpen(!isCompanyDropdownOpen)}
                className="flex items-center justify-between w-full py-2 text-[#282828] font-medium"
              >
                Company
                <FaChevronDown
                  className={`transform transition-transform ${
                    isCompanyDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isCompanyDropdownOpen && (
                <div className="pl-4 mt-1 space-y-2">
                  {companyDropdownItems.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="block py-1 text-gray-700"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Resources Dropdown */}
            <div>
              <button
                onClick={() =>
                  setIsResourcesDropdownOpen(!isResourcesDropdownOpen)
                }
                className="flex items-center justify-between w-full py-2 text-[#282828] font-medium"
              >
                Resources
                <FaChevronDown
                  className={`transform transition-transform ${
                    isResourcesDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isResourcesDropdownOpen && (
                <div className="pl-4 mt-1 space-y-2">
                  {resourcesDropdownItems.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="block py-1 text-gray-700"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="block py-2 text-[#282828] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact us
            </Link>

            <Link
              href="/advertise"
              className="block py-2 text-[#282828] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Advertise
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
