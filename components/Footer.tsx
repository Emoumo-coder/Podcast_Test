import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Logo from "../public/Logo2.png";

import Link1 from "../public/Link1.png";
import Link2 from "../public/Link2.png";
import Link3 from "../public/Link3.png";
import Link4 from "../public/Link4.png";
import Link5 from "../public/Link5.png";
2;
const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "All Podcast", href: "/AllPodcasts" },
  { label: "Advertise", href: "/advertise" },
  { label: "Resources", href: "/resources" },

  { label: "Connect with abr", href: "/resources" },
];

const Footer = () => {
  return (
    <footer className="bg-[#282828] text-white text-sm lg:px-12 mx-auto px-4 py-10">
      <div className="mb-6 md:mb-0 flex items-center space-x-3 pb-12">
        <Image src={Logo} alt="Africa Business Radio" className="h-12" />
      </div>
      <div className=" flex flex-col md:flex-row items-center justify-between">
        {/* Logo */}

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center items-center space-x-12 mb-6 md:mb-0">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="hover:text-cyan-400 transition relative after:absolute after:right-[-20px] after:top-1/2 after:-translate-y-1/2 after:h-4 after:border-r after:border-gray-400 last:after:hidden"
            >
              {link.label.toUpperCase()}
            </a>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex space-x-4">
          <Image src={Link1} alt="" className="h-8 w-8" />

          <Image src={Link2} alt="" className="h-8 w-8" />
          <Image src={Link3} alt="" className="h-8 w-8" />
          <Image src={Link4} alt="" className="h-8 w-8" />
          <Image src={Link5} alt="" className="h-8 w-8" />
        </div>
      </div>

      {/* Bottom Legal */}
      <div className=" mt-6 py-4 text-start text-white text-xs">
        <p>
          © Copyright 2021. All Rights Reserved. &nbsp; &nbsp; &nbsp; &nbsp;
          <a href="/terms" className="hover:underline">
            Terms & conditions
          </a>{" "}
          &nbsp; &nbsp; &nbsp; &nbsp;
          <a href="/privacy" className="hover:underline">
            Privacy policy
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
