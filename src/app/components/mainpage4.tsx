"use client";
import React, { useState, useEffect } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { Loader2, ArrowRight, Menu, ArrowDown, ShoppingBag, Eye, Heart } from 'lucide-react';


import { Rock_Salt } from 'next/font/google';
import { cn } from '@/lib/utils';
import { NavigationMenuDemo } from './demo';

const rockSalt = Rock_Salt({
  variable: "--font-rock-salt",
  weight: "400",
  subsets: ["latin"],
});



const ImageCard = ({ delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className="group relative overflow-hidden rounded-2xl"
  >
    <img
      src="/api/placeholder/600/800"
      alt="Pottery piece"
      className="w-full h-full object-cover"
    />
    <motion.div
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 1 }}
      className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6"
    >
      <h3 className="text-white text-xl font-bold mb-2">Handcrafted Pottery</h3>
      <p className="text-white/80 mb-4">Traditional craftsmanship meets modern design</p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full"
      >
        View Details
      </motion.button>
    </motion.div>
  </motion.div>
);

const FeaturedProduct = ({ title, price, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay }}
    className="bg-white rounded-3xl p-6 shadow-xl"
  >
    <div className="relative aspect-square rounded-2xl overflow-hidden mb-4">
      <img
        src="/api/placeholder/400/400"
        alt={title}
        className="w-full h-full object-cover"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 bg-black/40 flex items-center justify-center gap-4"
      >
        <motion.button
          whileHover={{ scale: 1.2 }}
          className="w-10 h-10 bg-white rounded-full flex items-center justify-center"
        >
          <Eye className="w-5 h-5 text-[#6a2316]" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.2 }}
          className="w-10 h-10 bg-white rounded-full flex items-center justify-center"
        >
          <Heart className="w-5 h-5 text-[#6a2316]" />
        </motion.button>
      </motion.div>
    </div>
    <h3 className="text-lg font-bold text-[#6a2316] mb-2">{title}</h3>
    <div className="flex justify-between items-center">
      <span className="text-[#946430] font-bold">${price}</span>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-[#6a2316] text-white p-2 rounded-full"
      >
        <ShoppingBag className="w-5 h-5" />
      </motion.button>
    </div>
  </motion.div>
);

const ProcessStep = ({ number, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    className="relative"
  >
    <motion.div
      whileHover={{ scale: 1.1, rotate: 90 }}
      className="w-16 h-16 bg-[#6a2316] text-white rounded-xl flex items-center justify-center text-2xl font-bold mb-4"
    >
      {number}
    </motion.div>
    <h3 className="text-xl font-bold text-[#6a2316] mb-2">{title}</h3>
    <p className="text-[#946430]">{description}</p>
  </motion.div>
);

export default function EnhancedPotteryLayout() {
  return (
    <div className="bg-[#eae5da] min-h-screen">
      {/* Hero Section */}


      {/* Featured Collection */}
      <section className="py-32">
        <div className="container mx-auto px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-[#6a2316] text-center mb-16"
          >
            Featured Collection
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeaturedProduct title="Classic Vase" price="129.99" delay={0} />
            <FeaturedProduct title="Modern Bowl" price="89.99" delay={0.2} />
            <FeaturedProduct title="Decorative Plate" price="69.99" delay={0.4} />
          </div>
        </div>
      </section>

   

      {/* Gallery Grid */}
      <section className="py-32">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-screen">
            <div className="col-span-2 row-span-2">
              <ImageCard delay={0} />
            </div>
            <div>
              <ImageCard delay={0.2} />
            </div>
            <div>
              <ImageCard delay={0.3} />
            </div>
            <div>
              <ImageCard delay={0.4} />
            </div>
            <div>
              <ImageCard delay={0.5} />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-32 bg-[#6a2316]">
        <div className="container mx-auto px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl p-16 text-center"
          >
            <h2 className="text-4xl font-bold text-[#6a2316] mb-4">Stay Updated</h2>
            <p className="text-[#946430] mb-8">Subscribe to receive updates about new collections and exclusive offers</p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full border border-[#946430] focus:outline-none focus:border-[#6a2316]"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#6a2316] text-white px-8 py-3 rounded-full"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>


    </div>
  );
}