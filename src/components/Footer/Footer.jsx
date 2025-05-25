import React from 'react';
import logo from "../../assets/image/logo.png"
import { Link } from 'react-router';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-green-950 text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 sm:grid-cols-2 gap-8">
        {/* Logo and Description */}
        <div>
          <Link to="/" className="flex items-center gap-2 mb-4">
            <img src={logo} alt="Logo" />
            <span className="text-2xl font-extrabold mt-2 text-lightGreen">
              GrowGo.
            </span>
          </Link>
          <p className="text-sm text-gray-300">
            Your smart plant care companion. Track, manage, and love your plants
            better with GrowGo.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4 text-lime-300">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/all-plants" className="hover:underline">
                All Plants
              </Link>
            </li>
            <li>
              <Link to="/add-plant" className="hover:underline">
                Add Plant
              </Link>
            </li>
            <li>
              <Link to="/my-plants" className="hover:underline">
                My Plants
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-4 text-lime-300">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Email: support@growgo.app</li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>Location: Green Valley, USA</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold mb-4 text-lime-300">Follow Us</h3>
          <div className="flex space-x-4">
            <Link
              to="https://www.facebook.com"
              target="_blank"
              className="text-xl hover:text-lime-300"
            >
              <FaFacebook />
            </Link>
            <Link to="https://x.com" className="text-xl hover:text-lime-300">
              <FaTwitter />
            </Link>
            <Link
              to="https://www.instagram.com/"
              className="text-xl hover:text-lime-300"
            >
              <FaInstagram />
            </Link>
            <Link
              to="https://www.linkedin.com/"
              className="text-xl hover:text-lime-300"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-green-800 mt-10 pt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} GrowGo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;