import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config';

export default function ViewBuyers() {
    const [buyers, setBuyers] = useState([]);
    const [error, setError] = useState("");
    
    const displayBuyers = async () => {
        try {
            const response = await axios.get(`${config.url}/admin/viewallbuyers`);
            setBuyers(response.data);
        } catch (err) {
            setError("Failed to fetch buyers data... " + err.message);
        }
    };
    
    useEffect(() => {
        displayBuyers();
    }, []);
    
    const deleteBuyer = async (bid) => {
        try {
            const response = await axios.delete(`${config.url}/admin/deletebuyer?bid=${bid}`);
            alert(response.data);
            displayBuyers();
        } catch (err) {
            setError("Unexpected Error Occurred... " + err.message);
        }
    };
    
    return (
        <div className="p-6 max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-6 underline">
                View All Buyers
            </h3>
            
            {error ? (
                <p className="text-center text-lg font-bold text-red-600 mb-4">
                    {error}
                </p>
            ) : buyers.length === 0 ? (
                <p className="text-center text-lg font-bold text-red-600 mb-4">
                    No Buyer Data Found
                </p>
            ) : (
                <div className="overflow-x-auto shadow-md rounded-lg">
                    <table className="w-full table-auto">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-3 text-left text-gray-700 font-medium">ID</th>
                                <th className="px-4 py-3 text-left text-gray-700 font-medium">Name</th>
                                <th className="px-4 py-3 text-left text-gray-700 font-medium">Email</th>
                                <th className="px-4 py-3 text-left text-gray-700 font-medium">Mobile No</th>
                                <th className="px-4 py-3 text-left text-gray-700 font-medium">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {buyers.map((buyer) => (
                                <tr key={buyer.id} className="hover:bg-gray-50">
                                    <td className="px-4 py-3 text-gray-800">{buyer.id}</td>
                                    <td className="px-4 py-3 text-gray-800">{buyer.name}</td>
                                    <td className="px-4 py-3 text-gray-800">{buyer.email}</td>
                                    <td className="px-4 py-3 text-gray-800">{buyer.mobileno}</td>
                                    <td className="px-4 py-3">
                                        <button 
                                            onClick={() => deleteBuyer(buyer.id)}
                                            className="flex items-center px-3 py-1.5 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
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