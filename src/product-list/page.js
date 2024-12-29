'use client';

import { useState } from 'react';

const products = [
  {
    id: 1,
    name: "Muga Silk Mekhela Chador",
    price: 15999.00,
    originalPrice: 18000.00,
    savings: 2001.00,
    category: "Traditional Wear",
    description: "Handwoven Muga silk from Assam, known for its natural golden glow and durability. Each piece is crafted by master weavers using traditional techniques.",
    region: "Assam",
    image: "https://www.mugasilk.in/wp-content/uploads/2023/12/FB_IMG_1648564056113-1.jpg"
  },
  {
    id: 2,
    name: "Naga Bamboo Storage Basket",
    price: 2499.00,
    originalPrice: 3000.00,
    savings: 501.00,
    category: "Home Decor",
    description: "Traditional bamboo basket handcrafted by Naga artisans, featuring intricate weaving patterns used for generations.",
    region: "Nagaland",
    image: "https://craffi.com/Admin/Images/cane.jpg"
  },
  {
    id: 3,
    name: "Manipuri Black Pottery",
    price: 1999.00,
    originalPrice: 2500.00,
    savings: 501.00,
    category: "Pottery",
    description: "Longpi black pottery from Manipur, made using unique black serpentine stone and weathered rock.",
    region: "Manipur",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbppvwfmojBAxJgZuUDYiO-EMOTmwfVKPqcw&s"
  },
  {
    id: 4,
    name: "Tripura Bamboo Water Bottle",
    price: 899.00,
    originalPrice: 1200.00,
    savings: 301.00,
    category: "Eco-friendly Products",
    description: "Handcrafted bamboo water bottle made by skilled artisans of Tripura. Sustainable and naturally antibacterial.",
    region: "Tripura",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8"
  },
  {
    id: 5,
    name: "Mizoram Puan Traditional Shawl",
    price: 3999.00,
    originalPrice: 4500.00,
    savings: 501.00,
    category: "Traditional Wear",
    description: "Hand-woven Puan shawl with intricate tribal motifs, a symbol of Mizo cultural heritage.",
    region: "Mizoram",
    image: "https://www.ilandlo.com/image/cache/catalog/ethnic%20inspiration/Ethnic-Inspiration-Red-puan-full-design-800x800.jpg"
  },
  {
    id: 6,
    name: "Arunachali Bamboo Floor Mat",
    price: 1499.00,
    originalPrice: 1800.00,
    savings: 301.00,
    category: "Home Decor",
    description: "Traditional bamboo floor mat featuring unique Arunachali weaving patterns.",
    region: "Arunachal Pradesh",
    image: "https://m.media-amazon.com/images/I/91sEjrnJqwL.jpg"
  },
  {
    id: 7,
    name: "Sikkim Thangka Painting",
    price: 8999.00,
    originalPrice: 10000.00,
    savings: 1001.00,
    category: "Art",
    description: "Traditional Buddhist scroll painting hand-crafted by Sikkimese artists using natural colors.",
    region: "Sikkim",
    image: "https://www.caleidoscope.in/wp-content/uploads/2021/12/Thangka-Paintings-Tibetan-Buddhist-Art-Types-of-Thangka-Paintings-.jpg"
  },
  {
    id: 8,
    name: "Meghalaya Bamboo Tea Set",
    price: 2999.00,
    originalPrice: 3500.00,
    savings: 501.00,
    category: "Kitchen",
    description: "Handcrafted bamboo tea set with intricate Khasi designs, perfect for serving traditional tea.",
    region: "Meghalaya",
    image: "https://uttarakhandhaat.com/wp-content/uploads/2021/08/Table-Decor.jpg"
  },
  {
    id: 9,
    name: "Assamese Bell Metal Utensils",
    price: 4999.00,
    originalPrice: 6000.00,
    savings: 1001.00,
    category: "Kitchen",
    description: "Traditional bell metal utensils handcrafted by skilled artisans of Assam.",
    region: "Assam",
    image: "https://www.dsource.in/sites/default/files/gallery/3954/3.jpg"
  }
];

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-[#1E4141]/10">
      {/* Single Image */}
      <div className="relative h-64">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
        
        {/* Savings Badge */}
        {product.savings > 0 && (
          <div className="absolute top-4 left-4 bg-[#9B6B43] text-white px-3 py-1 rounded-md text-sm font-medium">
            SAVE RS. {product.savings.toFixed(2)}
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div className="text-sm text-[#1E4141]/60">{product.category}</div>
          <div className="text-sm font-medium text-[#9B6B43]">{product.region}</div>
        </div>
        
        <h3 className="text-[#1E4141] font-medium mb-2 line-clamp-2">{product.name}</h3>
        <p className="text-[#1E4141]/70 text-sm mb-4 line-clamp-2">{product.description}</p>
        
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-xl font-semibold text-[#1E4141]">₹{product.price.toLocaleString()}</span>
          {product.originalPrice > product.price && (
            <span className="text-[#1E4141]/50 line-through text-sm">₹{product.originalPrice.toLocaleString()}</span>
          )}
        </div>

        <button className="w-full bg-[#1E4141] hover:bg-[#1E4141]/90 text-white py-2 px-4 rounded-md transition-colors duration-200">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default function ProductListingPage() {
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const regions = ['All', ...new Set(products.map(p => p.region))];
  const categories = ['All', ...new Set(products.map(p => p.category))];

  const filteredProducts = products.filter(product => 
    (selectedRegion === 'All' || product.region === selectedRegion) &&
    (selectedCategory === 'All' || product.category === selectedCategory)
  );

  return (
    <div className="min-h-screen bg-[#F5F2EA]">
      {/* Header Section */}
      <div className="bg-[#1E4141] text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">Northeast Indian Artisanal Crafts</h1>
          <p className="text-white/80">Discover handcrafted treasures from the eight sisters of Northeast India</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8">
          <select 
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="bg-white border border-[#1E4141]/20 rounded-md px-4 py-2 text-[#1E4141]"
          >
            {regions.map(region => (
              <option key={region} value={region}>{region}</option>
            ))}
          </select>

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-white border border-[#1E4141]/20 rounded-md px-4 py-2 text-[#1E4141]"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}