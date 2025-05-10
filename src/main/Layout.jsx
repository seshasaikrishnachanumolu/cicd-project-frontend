import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import {
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaUser,
  FaStore,
  FaBars,
  FaTimes,
  FaShoppingCart,
} from 'react-icons/fa';

// Component imports
import BuyerLogin from '../buyer/BuyerLogin';
import BuyerRegistration from '../buyer/BuyerRegistration';
import Home from './Home';
import NotFound from '../buyer/NotFound';
import About from './About';
import Contact from './Contact';
import FAQ from './FAQ';
import AdminLogin from './../admin/AdminLogin';
import SellerLogin from './../seller/SellerLogin';
import SellerRegistration from '../seller/SellerRegistration';
import Footer from './Footer';

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-5">
          <div className="flex items-center justify-between">
            {/* Logo + Tagline */}
            <Link to="/" className="flex flex-col items-start space-y-1">
              <div className="text-blue-600 font-bold text-2xl">LL-CART</div>
              <span className="text-sm text-gray-500 italic">Your needs, our promise</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</Link>
              <Link to="/buyerlogin" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center">
                <FaUser className="mr-1" /> Profile
              </Link>
              <Link to="/buyerlogin" className="text-gray-600 hover:text-blue-600 transition-colors flex items-center">
                <FaShoppingCart className="mr-1" /> Cart
              </Link>
              <Link to="/buyerlogin" className="text-gray-600 hover:text-blue-600 transition-colors">Login</Link>
              <Link
                to="/sellerregistration"
                className="bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 transition-all flex items-center"
              >
                <FaStore className="mr-2" /> Become a Seller
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-600 focus:outline-none"
              onClick={toggleSidebar}
              aria-label="Toggle menu"
            >
              <FaBars className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-y-0 right-0 z-50 w-64 bg-white shadow-lg transform ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
        <div className="flex justify-between items-center p-4 border-b">
          <span className="font-bold text-blue-600">Menu</span>
          <button onClick={toggleSidebar} className="text-gray-600">
            <FaTimes className="h-6 w-6" />
          </button>
        </div>
        <nav className="p-4">
          <ul className="space-y-4">
            <li>
              <Link to="/" className="block py-2 text-gray-600 hover:text-blue-600 transition-colors" onClick={toggleSidebar}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/sellerregistration" className="block py-2 bg-blue-600 text-white px-4 rounded-md hover:bg-blue-700 transition-all flex items-center" onClick={toggleSidebar}>
                <FaStore className="mr-2" /> Become a Seller
              </Link>
            </li>
            <li className="border-t pt-4 mt-4">
              <Link to="/buyerlogin" className="block py-2 text-gray-600 hover:text-blue-600 transition-colors flex items-center" onClick={toggleSidebar}>
                <FaUser className="mr-2" /> Profile
              </Link>
            </li>
            <li>
              <Link to="/buyerlogin" className="block py-2 text-gray-600 hover:text-blue-600 transition-colors flex items-center" onClick={toggleSidebar}>
                <FaShoppingCart className="mr-2" /> Cart
              </Link>
            </li>
            <li>
              <Link to="/buyerlogin" className="block py-2 text-gray-600 hover:text-blue-600 transition-colors" onClick={toggleSidebar}>
                Login
              </Link>
            </li>
            <li>
              <Link to="/buyerregistration" className="block py-2 bg-blue-600 hover:bg-blue-700 text-white px-4 rounded-md text-center transition-colors" onClick={toggleSidebar}>
                Register
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
          aria-hidden="true"
        ></div>
      )}

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-6">
        <Routes>
          <Route path='/' Component={Home} exact />
          <Route path='/buyerlogin' Component={BuyerLogin} exact />
          <Route path='/buyerregistration' Component={BuyerRegistration} exact />
          <Route path='/adminlogin' Component={AdminLogin} />
          <Route path='/sellerlogin' Component={SellerLogin} />
          <Route path='/sellerregistration' Component={SellerRegistration} />
          <Route path='/about' Component={About} />
          <Route path='/contact' Component={Contact} />
          <Route path='/faq' Component={FAQ} />
          <Route path='*' Component={NotFound} />
        </Routes>
      </main>

        <Footer/>
      
    </div>
  );
}
