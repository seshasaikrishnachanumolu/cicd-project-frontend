import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../config";

export default function AddProduct() {
  const [product, setProduct] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    available: true,
    seller_id: "",
  });

  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    setProduct((prev) => ({ ...prev, available: e.target.checked }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const resetForm = () => {
    setProduct({
      title: "",
      price: "",
      description: "",
      category: "",
      available: true,
      seller_id: "",
    });
    setImageFile(null);
    setImagePreview(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");
    setError("");

    try {
      // Validate inputs
      if (!product.title || !product.price || !product.category || !product.description || !product.seller_id || !imageFile) {
        setError("❌ Please fill all required fields");
        setIsLoading(false);
        return;
      }

      // Make sure seller_id is submitted as a number
      const sellerId = parseInt(product.seller_id);
      if (isNaN(sellerId)) {
        setError("❌ Seller ID must be a valid number");
        setIsLoading(false);
        return;
      }

      const formData = new FormData();
      formData.append("title", product.title.trim());
      formData.append("price", parseFloat(product.price));
      formData.append("description", product.description.trim());
      formData.append("category", product.category.trim());
      formData.append("available", product.available);
      formData.append("seller_id", sellerId); // Send as number
      formData.append("image", imageFile);

      const response = await axios.post(`${config.url}/products/add`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        setMessage("✅ Product added successfully!");
        resetForm();
      } else {
        throw new Error("Unexpected response status");
      }
    } catch (err) {
      console.error("Error uploading product:", err);
      setError(
        `❌ Failed to add product: ${
          err.response?.data || err.message || "Unknown error"
        }`
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-center mb-6 text-blue-800 underline">
        Add Product
      </h3>

      {message && (
        <p className="text-center text-green-600 font-bold mb-4">{message}</p>
      )}
      {error && (
        <p className="text-center text-red-600 font-bold mb-4">{error}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title*
            </label>
            <input
              type="text"
              name="title"
              value={product.title}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Price*
            </label>
            <input
              type="number"
              step="0.01"
              min="0"
              name="price"
              value={product.price}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category*
            </label>
            <input
              type="text"
              name="category"
              value={product.category}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Seller ID*
            </label>
            <input
              type="number"
              name="seller_id"
              value={product.seller_id}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex items-center mt-7">
            <input
              type="checkbox"
              name="available"
              checked={product.available}
              onChange={handleCheckboxChange}
              className="mr-2"
              id="available"
            />
            <label htmlFor="available" className="text-sm text-gray-700">
              Available
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description*
          </label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            required
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Upload Product Image*
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>

        {imagePreview && (
          <div className="flex justify-center">
            <img
              src={imagePreview}
              alt="Preview"
              className="w-32 h-32 object-cover border rounded mt-2"
            />
          </div>
        )}

        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-blue-400"
            disabled={isLoading}
          >
            {isLoading ? "Adding Product..." : "Add Product"}
          </button>
        </div>
      </form>
    </div>
  );
}