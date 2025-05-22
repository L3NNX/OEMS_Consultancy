import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300">
      <div className="container-custom">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-gray-700">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Stay Updated with OEMS Education</h2>
            <p className="mb-6 text-gray-400">Subscribe to our newsletter for the latest updates on Australian education opportunities.</p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-primary-500 text-white"
              />
              <button className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center">
                Subscribe <ArrowRight size={18} className="ml-2" />
              </button>
            </form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <img
                src="https://oemseducation.com/wp-content/uploads/2022/08/omes-footer.jpg"
                alt="OEMS Education Logo"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted partner for pursuing higher education in Australia. We help students achieve their academic dreams with personalized guidance and support.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Facebook size={20} />, label: "Facebook", href: "#" },
                { icon: <Twitter size={20} />, label: "Twitter", href: "#" },
                { icon: <Instagram size={20} />, label: "Instagram", href: "#" },
                { icon: <Linkedin size={20} />, label: "LinkedIn", href: "#" }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/services' },
                { name: 'Universities', path: '/universities' },
                { name: 'About Us', path: '/about' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="flex items-center group"
                  >
                    <ArrowRight size={16} className="mr-2 text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="text-gray-400 hover:text-white transition-colors">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">Our Services</h3>
            <ul className="space-y-4">
              {[
                'University Applications',
                'Visa Guidance',
                'Accommodation Support',
                'Pre-departure Orientation',
                'Financial Planning',
                'Career Counseling',
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="flex items-center group"
                  >
                    <ArrowRight size={16} className="mr-2 text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="text-gray-400 hover:text-white transition-colors">{service}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-6">
              <li className="flex items-start">
                <MapPin size={24} className="text-primary-500 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <p className="mb-2">Level 3, 303 Ebene Junction, Ebene, Mauritius</p>
                  <p>125 St Georges Tce, Perth, WA, Australia</p>
                </div>
              </li>
              <li className="flex items-center">
                <Phone size={24} className="text-primary-500 mr-4 flex-shrink-0" />
                <a href="tel:+2305259888" className="hover:text-white transition-colors">
                  +230 5259 9888
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={24} className="text-primary-500 mr-4 flex-shrink-0" />
                <a href="mailto:info@oemseducation.com" className="hover:text-white transition-colors">
                  info@oemseducation.com
                </a>
              </li>
              <li className="flex items-center">
                <Clock size={24} className="text-primary-500 mr-4 flex-shrink-0" />
                <div>
                  <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                  <p>Sat: 10:00 AM - 2:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} OEMS Education. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;