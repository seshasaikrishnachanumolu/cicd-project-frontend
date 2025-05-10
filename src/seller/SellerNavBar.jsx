import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import SellerHome from './SellerHome';
import SellerProfile from './SellerProfile';
import SellerLogin from './SellerLogin';
import AddProduct from './AddProduct'; // ✅ Import AddProduct
import { useAuth } from '../contextapi/AuthContext';

export default function SellerNavBar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { setIsSellerLoggedIn } = useAuth(); 

  const handleLogout = () => {
    setIsSellerLoggedIn(false); 
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
        <div className="md:hidden flex justify-end p-4">
          <button onClick={() => setSidebarOpen(false)} className="text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <Link to="/" className="flex flex-col items-center py-6 md:py-8 border-b border-gray-200">
          <div className="text-blue-600 font-bold text-2xl md:text-3xl">LL-CART</div>
          <div className="text-xs md:text-sm text-gray-500 mt-1">Your needs, our promise</div>
        </Link>
        
        <nav className="mt-6 pb-4 md:pb-0">
          <div className="px-4 py-2 text-xs font-semibold text-gray-600 uppercase tracking-wider">
            Dashboard
          </div>
          
          <Link 
            to='/sellerhome' 
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 group transition-all duration-200"
            onClick={() => setSidebarOpen(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gray-500 group-hover:text-blue-600" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            Seller Home
          </Link>
          
          <div className="px-4 py-2 mt-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">
            Management
          </div>
          
          <Link 
            to='/sellerprofile' 
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 group transition-all duration-200"
            onClick={() => setSidebarOpen(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gray-500 group-hover:text-blue-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
            Profile
          </Link>

          {/* ✅ Add Product Link */}
          <Link 
            to='/addproduct' 
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 group transition-all duration-200"
            onClick={() => setSidebarOpen(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gray-500 group-hover:text-blue-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 4v16m8-8H4" />
            </svg>
            Add Product
          </Link>

          <Link 
            to='/products' 
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 group transition-all duration-200"
            onClick={() => setSidebarOpen(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gray-500 group-hover:text-blue-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
            </svg>
            Products
          </Link>
          
          <Link 
            to='/orders' 
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 group transition-all duration-200"
            onClick={() => setSidebarOpen(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gray-500 group-hover:text-blue-600" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
              <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
            </svg>
            Orders
          </Link>
          
          <div className="px-4 py-2 mt-4 text-xs font-semibold text-gray-600 uppercase tracking-wider">
            Account
          </div>
          
          <Link 
            to='/sellerlogin' 
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
      
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black opacity-50 z-10 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="hidden md:block bg-white shadow-sm">
          <div className="px-6 py-4">
            <h1 className="text-2xl font-semibold text-gray-800">Seller Dashboard</h1>
          </div>
        </div>
        
        <div className="flex-1 overflow-auto p-4 md:p-6">
          <Routes>
            <Route path="/sellerhome" Component={SellerHome} />
            <Route path="/sellerprofile" Component={SellerProfile} />
            <Route path="/sellerlogin" Component={SellerLogin} />
            <Route path="/products" element={<div>Products Page</div>} />
            <Route path="/orders" element={<div>Orders Page</div>} />
            {/* ✅ AddProduct Route */}
            <Route path="/addproduct" element={<AddProduct />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
