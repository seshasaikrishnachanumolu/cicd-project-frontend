import React, { useEffect, useState } from "react";
import axios from "axios";
import config from "../config";

export default function SellersLobby() {
  const [sellers, setSellers] = useState([]);
  const [error, setError] = useState("");

  const fetchSellers = async () => {
    try {
      const response = await axios.get(`${config.url}/admin/viewallsellers`);
      setSellers(response.data);
    } catch (err) {
      setError("Failed to fetch sellers data... " + err.message);
    }
  };

  const approveSeller = async (sid) => {
    try {
      const response = await axios.put(`${config.url}/seller/approve/${sid}`);
      alert(response.data);
      fetchSellers();
    } catch (err) {
      setError("Approval failed... " + err.message);
    }
  };

  const rejectSeller = async (sid) => {
    try {
      const response = await axios.put(`${config.url}/seller/reject/${sid}`);
      alert(response.data);
      fetchSellers();
    } catch (err) {
      setError("Rejection failed... " + err.message);
    }
  };

  const deleteSeller = async (id) => {
    try {
      const response = await axios.delete(`${config.url}/seller/delete?id=${id}`);
      alert(response.data);
      fetchSellers();
    } catch (err) {
      setError("Deletion failed... " + err.message);
    }
  };

  useEffect(() => {
    fetchSellers();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6 border-b pb-3">
        Seller Approval Dashboard
      </h2>

      {error && (
        <div className="bg-red-100 text-red-700 border border-red-400 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {sellers.length === 0 ? (
        <div className="text-center text-yellow-600 bg-yellow-100 border border-yellow-400 px-4 py-3 rounded">
          No sellers found.
        </div>
      ) : (
        <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-100 text-gray-700 uppercase tracking-wider">
              <tr>
                <th className="px-4 py-3">ID</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Username</th>
                <th className="px-4 py-3">Mobile</th>
                <th className="px-4 py-3">National ID</th>
                <th className="px-4 py-3">Location</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {sellers.map((seller) => (
                <tr key={seller.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">{seller.id}</td>
                  <td className="px-4 py-3">{seller.name}</td>
                  <td className="px-4 py-3">{seller.email}</td>
                  <td className="px-4 py-3">{seller.username}</td>
                  <td className="px-4 py-3">{seller.mobileno}</td>
                  <td className="px-4 py-3">{seller.nationalidno}</td>
                  <td className="px-4 py-3">{seller.location}</td>
                  <td className="px-4 py-3 font-semibold">
                    {seller.status === "Approved" ? (
                      <span className="text-green-600">✅ Approved</span>
                    ) : seller.status === "Rejected" ? (
                      <span className="text-red-600">❌ Rejected</span>
                    ) : (
                      <span className="text-yellow-600">⏳ Pending</span>
                    )}
                  </td>
                  <td className="px-4 py-3 space-x-2 flex flex-wrap">
                    {seller.status === "Pending" && (
                      <>
                        <button
                          onClick={() => approveSeller(seller.id)}
                          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded text-xs transition"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => rejectSeller(seller.id)}
                          className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1.5 rounded text-xs transition"
                        >
                          Reject
                        </button>
                      </>
                    )}
                    <button
                      onClick={() => deleteSeller(seller.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded text-xs transition"
                    >
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
