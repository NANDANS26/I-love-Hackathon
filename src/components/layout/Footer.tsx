import React from 'react';
import { Phone, Mail, Globe, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">TravelChain</h3>
            <p className="text-sm">
              Your trusted companion for blockchain-verified travel experiences.
            </p>
            <div className="flex items-center mt-4">
              <MapPin className="w-4 h-4 mr-2" />
              <p className="text-sm">
                123 Travel Street, Digital Valley,<br />
                Tech City, TC 12345
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/destinations" className="text-sm hover:text-teal-400">
                  Destinations
                </Link>
              </li>
              <li>
                <Link to="/flights" className="text-sm hover:text-teal-400">
                  Flights
                </Link>
              </li>
              <li>
                <Link to="/hotels" className="text-sm hover:text-teal-400">
                  Hotels
                </Link>
              </li>
              <li>
                <Link to="/restaurants" className="text-sm hover:text-teal-400">
                  Restaurants
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <p className="text-sm">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:support@travelchain.com" className="text-sm hover:text-teal-400">
                  support@travelchain.com
                </a>
              </div>
              <div className="flex items-center">
                <Globe className="w-4 h-4 mr-2" />
                <a href="https://travelchain.com" className="text-sm hover:text-teal-400">
                  www.travelchain.com
                </a>
              </div>
            </div>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Customer Support</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm">24/7 Helpline:</p>
                <p className="text-lg font-semibold text-teal-400">1-800-TRAVEL</p>
              </div>
              <div>
                <p className="text-sm">Emergency Support:</p>
                <p className="text-lg font-semibold text-teal-400">1-800-HELP</p>
              </div>
              <div className="mt-4">
                <p className="text-sm">Working Hours:</p>
                <p className="text-sm">Monday - Sunday</p>
                <p className="text-sm">24 Hours Available</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} TravelChain. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}; 