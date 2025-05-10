import React, { useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaShoppingCart,
  FaSignOutAlt,
  FaBars,
  FaTimes,
  FaSearch,
  FaChevronRight,
} from "react-icons/fa";

import BuyerProfile from "./BuyerProfile";
import BuyerLogin from "./BuyerLogin";
import NotFound from "./NotFound";
import Footer from "../main/Footer";
import { useAuth } from "../contextapi/AuthContext";
import FAQ from "../main/FAQ";
import About from "../main/About";
import Contact from "../main/Contact";
import Home from "../main/Home";

export default function BuyerNavBar() {
  const { setIsBuyerLoggedIn } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  const handleLogout = () => {
    setIsBuyerLoggedIn(false);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const isActive = (path) => location.pathname === path;

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex flex-col">
              <div className="text-blue-600 font-bold text-2xl">LL-CART</div>
              <span className="text-xs text-gray-500">YOUR NEEDS, OUR PROMISE</span>
            </Link>

            <div className="hidden md:flex flex-1 max-w-xl mx-6">
              <form onSubmit={handleSearch} className="w-full">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for products..."
                    className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-600"
                  >
                    <FaSearch />
                  </button>
                </div>
              </form>
            </div>

            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                to="/"
                className={`flex items-center space-x-1 ${
                  isActive("/") ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600"
                } transition-colors`}
              >
                <FaHome className="text-lg" />
                <span>Home</span>
              </Link>
              <Link
                to="/cart"
                className={`flex items-center space-x-1 ${
                  isActive("/cart") ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600"
                } transition-colors`}
              >
                <FaShoppingCart className="text-lg" />
                <span>Cart</span>
              </Link>
              <Link
                to="/buyerprofile"
                className={`flex items-center space-x-1 ${
                  isActive("/buyerprofile") ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600"
                } transition-colors`}
              >
                <FaUser className="text-lg" />
                <span>Profile</span>
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 text-red-500 hover:text-white hover:bg-red-500 border border-red-500 px-4 py-2 rounded transition-all"
              >
                <FaSignOutAlt />
                <span>Logout</span>
              </button>
            </nav>

            <button
              className="lg:hidden text-gray-600 focus:outline-none p-2 hover:bg-gray-100 rounded"
              onClick={toggleSidebar}
              aria-label="Toggle menu"
            >
              <FaBars className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-3 md:hidden">
            <form onSubmit={handleSearch}>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-600"
                >
                  <FaSearch />
                </button>
              </div>
            </form>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-white shadow-xl transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <div className="flex justify-between items-center p-5 border-b border-gray-200">
          <div className="flex flex-col">
            <span className="font-bold text-blue-600 text-2xl">LL-CART</span>
            <span className="text-xs text-gray-500">YOUR NEEDS, OUR PROMISE</span>
          </div>
          <button onClick={toggleSidebar} className="text-gray-600 p-2 hover:bg-gray-100 rounded">
            <FaTimes className="h-5 w-5" />
          </button>
        </div>

        <div className="p-5 border-b border-gray-200">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-600 text-white p-3 rounded-full shadow">
              <FaUser className="text-xl" />
            </div>
            <div>
              <div className="font-medium text-lg">Welcome</div>
              <div className="text-sm text-gray-500">Buyer Account</div>
            </div>
          </div>
        </div>

        <nav className="p-5">
          <ul className="space-y-6">
            <li>
              <Link
                to="/"
                className={`flex items-center justify-between ${
                  isActive("/") ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-50"
                } p-3 rounded transition-all`}
                onClick={toggleSidebar}
              >
                <div className="flex items-center space-x-3">
                  <FaHome className="text-xl" />
                  <span className="font-medium">Home</span>
                </div>
                <FaChevronRight className="text-sm opacity-70" />
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className={`flex items-center justify-between ${
                  isActive("/cart") ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-50"
                } p-3 rounded transition-all`}
                onClick={toggleSidebar}
              >
                <div className="flex items-center space-x-3">
                  <FaShoppingCart className="text-xl" />
                  <span className="font-medium">Cart</span>
                </div>
                <FaChevronRight className="text-sm opacity-70" />
              </Link>
            </li>
            <li>
              <Link
                to="/buyerprofile"
                className={`flex items-center justify-between ${
                  isActive("/buyerprofile") ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-50"
                } p-3 rounded transition-all`}
                onClick={toggleSidebar}
              >
                <div className="flex items-center space-x-3">
                  <FaUser className="text-xl" />
                  <span className="font-medium">Profile</span>
                </div>
                <FaChevronRight className="text-sm opacity-70" />
              </Link>
            </li>
            <li className="border-t border-gray-200 pt-6 mt-6">
              <button
                onClick={() => {
                  handleLogout();
                  toggleSidebar();
                }}
                className="flex items-center justify-center space-x-2 text-red-500 border border-red-500 hover:bg-red-500 hover:text-white w-full py-3 rounded transition-all"
              >
                <FaSignOutAlt className="text-lg" />
                <span className="font-medium">Logout</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      <main className="flex-grow bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Routes>
            <Route path="/buyerlogin" element={<BuyerLogin />} />
            <Route path="/buyerprofile" element={<BuyerProfile />} />
            <Route path="/about" Component={About} />
            <Route path="/contact" Component={Contact} />
            <Route path="/faq" Component={FAQ} />
            <Route path="/" Component={Home} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>

      <Footer />
    </div>
  );
}
