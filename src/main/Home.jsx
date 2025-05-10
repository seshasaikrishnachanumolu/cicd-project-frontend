import React, { useEffect, useState } from 'react';
import products from './products.json';
import { FaShoppingCart, FaSearch } from 'react-icons/fa';

export default function Home() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      setData(products);
    } catch (err) {
      setError(err.message);
    }
  }, []);

  const handleAddToCart = (product) => {
    console.log('Added to cart:', product);
    // Add your cart logic here
  };

  const handleBuyNow = (product) => {
    console.log('Buy now:', product);
    // Add your buy now logic here
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Featured Products</h2>
      
      {error && <p className="text-red-500 text-center">{error}</p>}
      
      {data.length === 0 && !error ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          <p className="ml-4 text-gray-600">Loading products...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map((product, k) => (
            <div key={k} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative p-4 bg-gray-100 flex justify-center items-center h-48">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="max-h-full max-w-full object-contain"
                />
                <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  ₹{product.price}
                </div>
              </div>
              
              <div className="p-4">
                <div className="mb-2">
                  <p className="text-xs text-gray-500 uppercase tracking-wider">{product.category}</p>
                  <h3 className="font-semibold text-gray-800 text-lg truncate" title={product.title}>
                    {product.title}
                  </h3>
                </div>
                
                <div className="mt-4 space-y-2">
                  <button 
                    onClick={() => handleBuyNow(product)}
                    className="w-full bg-blue-600 text-white py-2 rounded font-medium hover:bg-blue-700 transition-colors"
                  >
                    Buy Now
                  </button>
                  
                  <button 
                    onClick={() => handleAddToCart(product)}
                    className="w-full bg-white text-blue-600 py-2 rounded font-medium border border-blue-600 hover:bg-blue-50 transition-colors flex items-center justify-center"
                  >
                    <FaShoppingCart className="mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}