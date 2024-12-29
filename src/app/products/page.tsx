"use client";
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { 
  ChevronDown,  
  SlidersHorizontal,
  X,
  History,
  Star 
} from 'lucide-react';

// Sample antique products
const products = [
  {
    id: 1,
    name: "Vintage Brass Ganesha",
    price: 1299.99,
    category: "Religious Artifacts",
    period: "19th Century",
    rating: 4.8,
    image: "./Vintage1.png",
    description: "Intricately carved brass Ganesha statue from Rajasthan"
  },
  {
    id: 2,
    name: "Mughal Era Miniature Painting",
    price: 899.99,
    category: "Art",
    period: "18th Century",
    rating: 4.7,
    image: "./art2.png",
    description: "Hand-painted miniature depicting royal court scenes"
  },
  {
    id: 3,
    name: "Traditional Silver Anklet",
    price: 499.99,
    category: "Jewelry",
    period: "Early 20th Century",
    rating: 4.5,
    image: "./art3.png",
    description: "Sterling silver payal with intricate tribal designs"
  },
  {
    id: 4,
    name: "Carved Wooden Door Panel",
    price: 2499.99,
    category: "Architectural",
    period: "19th Century",
    rating: 4.9,
    image: "./art4.png",
    description: "Teak wood panel from Gujarati haveli"
  }
];

const categories = [
  "All", 
  "Religious Artifacts", 
  "Art", 
  "Jewelry", 
  "Architectural", 
  "Furniture",
  "Textiles"
];

const periods = [
  "All Periods",
  "Pre-18th Century",
  "18th Century",
  "19th Century",
  "Early 20th Century"
];

export default function ProductPage() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPeriod, setSelectedPeriod] = useState("All Periods");
  const [priceRange, setPriceRange] = useState([0, 3000]);
  const [sortBy, setSortBy] = useState("price-low");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    let result = [...products];

    if (selectedCategory !== "All") {
      result = result.filter(product => product.category === selectedCategory);
    }

    if (selectedPeriod !== "All Periods") {
      result = result.filter(product => product.period === selectedPeriod);
    }

    result = result.filter(
      product => product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    result.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

    setFilteredProducts(result);
  }, [selectedCategory, selectedPeriod, priceRange, sortBy]);

  return (
    <div className="min-h-screen bg-[#f1e3d1]">
      {/* Header */}
      <div className="bg-[#8b4513] text-white py-6 px-4 md:px-8 mb-8">
        <h1 className="text-3xl md:text-4xl font-serif text-center">Indian Heritage Antiquities</h1>
        <p className="text-center mt-2 text-[#f1e3d1]">Preserving History, One Artifact at a Time</p>
      </div>

      <div className="px-4 md:px-8">
        {/* Mobile Filter Toggle */}
        <Button 
          className="md:hidden mb-4 w-full flex items-center justify-center gap-2 bg-[#8b4513] hover:bg-[#724011]"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          <SlidersHorizontal size={16} />
          {isFilterOpen ? "Hide Filters" : "Show Filters"}
        </Button>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters Section */}
          <div className={`
            md:w-72 bg-white rounded-lg p-6 h-fit shadow-lg
            ${isFilterOpen ? 'block' : 'hidden'}
            md:block
            transition-all duration-300 ease-in-out
          `}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-serif text-[#8b4513]">Refine Search</h2>
              <Button 
                variant="ghost" 
                size="sm"
                className="md:hidden"
                onClick={() => setIsFilterOpen(false)}
              >
                <X size={16} />
              </Button>
            </div>

            {/* Categories */}
            <div className="mb-8">
              <h3 className="font-medium mb-3 text-[#8b4513] font-serif">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                      selectedCategory === category 
                        ? 'bg-[#8b4513] text-white' 
                        : 'hover:bg-[#f1e3d1]'
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Time Period */}
            <div className="mb-8">
              <h3 className="font-medium mb-3 text-[#8b4513] font-serif">Time Period</h3>
              <div className="space-y-2">
                {periods.map((period) => (
                  <button
                    key={period}
                    className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                      selectedPeriod === period 
                        ? 'bg-[#8b4513] text-white' 
                        : 'hover:bg-[#f1e3d1]'
                    }`}
                    onClick={() => setSelectedPeriod(period)}
                  >
                    {period}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="mb-8">
              <h3 className="font-medium mb-3 text-[#8b4513] font-serif">Price Range (USD)</h3>
              <div className="px-3">
                <Slider
                  defaultValue={[0, 3000]}
                  max={3000}
                  step={100}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="mb-4"
                />
                <div className="flex justify-between text-sm text-[#8b4513]">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </div>

            {/* Sort Options */}
            <div>
              <h3 className="font-medium mb-3 text-[#8b4513] font-serif">Sort By</h3>
              <select
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#8b4513]"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Rating</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Card 
                  key={product.id}
                  className="bg-white shadow-lg hover:shadow-xl transform hover:scale-102 transition-all duration-300"
                >
                  <CardHeader className="p-0">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-56 object-cover rounded-t-lg"
                    />
                  </CardHeader>
                  <CardContent className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <History className="w-4 h-4 text-[#8b4513]" />
                      <span className="text-sm text-[#8b4513]">{product.period}</span>
                    </div>
                    <h3 className="font-serif text-xl mb-2 text-[#8b4513]">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="w-4 h-4 fill-[#8b4513] text-[#8b4513]" />
                      <span className="text-sm">{product.rating}</span>
                    </div>
                    <p className="font-serif text-xl text-[#8b4513]">${product.price}</p>
                  </CardContent>
                  <CardFooter className="p-5 pt-0">
                    <Button className="w-full bg-[#8b4513] hover:bg-[#724011] text-white">
                      Inquire About This Piece
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-[#8b4513] text-lg">No artifacts found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}