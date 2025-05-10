import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import AdminLogin from "./AdminLogin";
import AdminHome from './AdminHome';
import AddSeller from './AddSeller';
import ViewSellers from './ViewSellers';
import ViewBuyers from "./ViewBuyers";
import { useAuth } from '../contextapi/AuthContext';
import SellersLobby from "./SellersLobby";

export default function AdminNavBar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { setIsAdminLoggedIn } = useAuth(); 

  const handleLogout = () => {
    setIsAdminLoggedIn(false); 
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      {/* Mobile Header */}
      <div className="bg-white shadow-sm md:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)} 
              className="text-gray-500 focus:outline-none mr-4"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="text-blue-600 font-bold text-xl">LL-CART</div>
          </div>
          <div className="text-xs text-gray-500">Your needs, our promise</div>
        </div>
      </div>

      {/* Sidebar Navigation */}
      <div className={`${sidebarOpen ? 'block' : 'hidden'} md:block w-full md:w-64 bg-white shadow-lg md:h-screen fixed md:static top-0 left-0 z-20 transition-all duration-300`}>
        {/* Close button for mobile */}
        <div className="md:hidden flex justify-end p-4">
          <button onClick={() => setSidebarOpen(false)} className="text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Logo and Tagline */}
        <Link to="/" className="flex flex-col items-center py-6 md:py-8 border-b border-gray-200">
          <div className="text-blue-600 font-bold text-2xl md:text-3xl">LL-CART</div>
          <div className="text-xs md:text-sm text-gray-500 mt-1">Your needs, our promise</div>
        </Link>
        
        {/* Navigation Links */}
        <nav className="mt-6 pb-4 md:pb-0">
          <div className="px-4 py-2 text-xs font-semibold text-gray-600 uppercase tracking-wider">
            Dashboard
          </div>
          
          <Link 
            to='/' 
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 group transition-all duration-200"
            onClick={() => setSidebarOpen(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gray-500 group-hover:text-blue-600" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            Admin Home
          </Link>
          
          <div className="px-4 py-2 mt-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">
            Management
          </div>
          
          <Link 
            to='/viewsellers' 
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 group transition-all duration-200"
            onClick={() => setSidebarOpen(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gray-500 group-hover:text-blue-600" viewBox="0 0 20 20" fill="currentColor">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
            View Sellers
          </Link>

          {/* 👇 Seller Lobby Link Added Here 👇 */}
          <Link 
            to='/sellerlobby' 
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 group transition-all duration-200"
            onClick={() => setSidebarOpen(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gray-500 group-hover:text-blue-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 3h18v2H3V3zm0 7h18v2H3v-2zm0 7h12v2H3v-2z" />
            </svg>
            Seller Lobby
          </Link>
          {/* 👆 Seller Lobby Link Ends Here 👆 */}

          <Link 
            to='/viewbuyers' 
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 group transition-all duration-200"
            onClick={() => setSidebarOpen(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gray-500 group-hover:text-blue-600" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
            </svg>
            View Buyers
          </Link>
          
          <Link 
            to='/addseller' 
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 group transition-all duration-200"
            onClick={() => setSidebarOpen(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gray-500 group-hover:text-blue-600" viewBox="0 0 20 20" fill="currentColor">
              <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
            </svg>
            Add Seller
          </Link>
          
          <div className="px-4 py-2 mt-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">
            Account
          </div>
          
          <Link 
            to='/adminlogin' 
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 group transition-all duration-200"
            onClick={handleLogout}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gray-500 group-hover:text-red-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
            </svg>
            Logout
          </Link>
        </nav>
      </div>
      
      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black opacity-50 z-10 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header (desktop) */}
        <div className="hidden md:block bg-white shadow-sm">
          <div className="px-6 py-4">
            <h1 className="text-2xl font-semibold text-gray-800">Admin Dashboard</h1>
          </div>
        </div>
        
        {/* Content */}
        <div className="flex-1 overflow-auto p-4 md:p-6">
          <Routes>
            <Route path="/" Component={AdminHome}/>
            <Route path="/addseller" Component={AddSeller}/>
            <Route path="/viewsellers" Component={ViewSellers}/>
            <Route path="/viewbuyers" Component={ViewBuyers}/>
            <Route path="/adminlogin" Component={AdminLogin} />
            <Route path="/sellerlobby" Component={SellersLobby}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}
