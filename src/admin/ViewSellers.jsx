import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../config";

export default function ViewSellers() {
  const [sellers, setSellers] = useState([]);
  const [error, setError] = useState("");

  const displaySellers = async () => {
    try {
      const response = await axios.get(`${config.url}/admin/viewallsellers`);
      setSellers(response.data); // Fixed: was using setBuyers instead of setSellers
    } catch (err) {
      setError("Failed to fetch sellers data... " + err.message);
    }
  };

  useEffect(() => {
    displaySellers();
  }, []);

  const deleteSeller = async (id) => {
    try {
      const response = await axios.delete(`${config.url}/seller/delete?id=${id}`);
      alert(response.data);
      displaySellers();
    } catch (err) {
      setError("Deletion failed... " + err.message);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h3 className="text-2xl font-bold text-center mb-6 text-gray-800 border-b pb-2">
        View All Sellers
      </h3>
      
      {error ? (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
          <p className="text-red-700 font-medium">
            {error}
          </p>
        </div>
      ) : sellers.length === 0 ? (
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
          <p className="text-yellow-700 font-medium text-center">
            No Seller Data Found
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto shadow-md rounded-lg border border-gray-200">
          <table className="w-full table-auto">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left text-gray-700 font-medium">ID</th>
                <th className="px-4 py-3 text-left text-gray-700 font-medium">Name</th>
                <th className="px-4 py-3 text-left text-gray-700 font-medium">Email</th>
                <th className="px-4 py-3 text-left text-gray-700 font-medium">UserName</th>
                <th className="px-4 py-3 text-left text-gray-700 font-medium">Mobile No</th>
                <th className="px-4 py-3 text-left text-gray-700 font-medium">National ID No</th>
                <th className="px-4 py-3 text-left text-gray-700 font-medium">Location</th>
                <th className="px-4 py-3 text-left text-gray-700 font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {sellers.map((seller) => (
                <tr key={seller.id} className="hover:bg-gray-50 transition-colors"> {/* Fixed: was using buyer.id instead of seller.id */}
                  <td className="px-4 py-3 text-gray-800">{seller.id}</td>
                  <td className="px-4 py-3 text-gray-800">{seller.name}</td>
                  <td className="px-4 py-3 text-gray-800">{seller.email}</td>
                  <td className="px-4 py-3 text-gray-800">{seller.username}</td>
                  <td className="px-4 py-3 text-gray-800">{seller.mobileno}</td>
                  <td className="px-4 py-3 text-gray-800">{seller.nationalidno}</td>
                  <td className="px-4 py-3 text-gray-800">{seller.location}</td>
                  <td className="px-4 py-3">
                    <button 
                      onClick={() => deleteSeller(seller.id)}
                      className="flex items-center px-3 py-1.5 bg-red-600 text-white rounded hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

