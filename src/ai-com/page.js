'use client';

import { useState } from 'react';

export default function ProductUploadPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [productDetails, setProductDetails] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const generateProductDetails = async () => {
    if (!selectedImage) return;

    setIsLoading(true);
    try {
      // Mock API call - replace with your actual AI endpoint
      await new Promise(resolve => setTimeout(resolve, 2000));
      const mockResponse = {
        productName: 'Traditional Handwoven Naga Shawl',
        description: 'This exquisite handwoven shawl showcases the rich cultural heritage of Nagaland. Created by skilled artisans using traditional techniques passed down through generations, this piece features intricate geometric patterns in vibrant colors that tell stories of the region\'s history. The shawl is crafted from premium wool, ensuring both warmth and durability. Each pattern represents symbolic meanings deeply rooted in Naga culture, making this not just a garment, but a piece of living heritage.',
      };

      setProductDetails(mockResponse);
    } catch (error) {
      console.error('Error generating product details:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Upload Card */}
        <div className="bg-white rounded-lg shadow-md mb-8">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800">
              Upload Your Product
            </h2>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="mb-4 block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-md file:border-0
                    file:text-sm file:font-semibold
                    file:bg-blue-50 file:text-blue-700
                    hover:file:bg-blue-100"
                />
                {previewUrl && (
                  <img
                    src={previewUrl}
                    alt="Product preview"
                    className="max-w-sm rounded-lg shadow-lg"
                  />
                )}
              </div>

              <button
                onClick={generateProductDetails}
                disabled={!selectedImage || isLoading}
                className={`w-full py-2 px-4 rounded-md text-white font-medium
                  ${!selectedImage || isLoading 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-blue-600 hover:bg-blue-700'
                  } transition-colors duration-200`}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <svg 
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24"
                    >
                      <circle 
                        className="opacity-25" 
                        cx="12" 
                        cy="12" 
                        r="10" 
                        stroke="currentColor" 
                        strokeWidth="4"
                      />
                      <path 
                        className="opacity-75" 
                        fill="currentColor" 
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Generating Details...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <svg 
                      className="w-5 h-5 mr-2" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                      />
                    </svg>
                    Generate Product Details
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Generated Details Card */}
        {productDetails && (
          <div className="bg-white rounded-lg shadow-md">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-800">
                Generated Product Details
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Product Name:</h3>
                  <p className="text-xl text-gray-800">
                    {productDetails.productName}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Description:</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {productDetails.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}