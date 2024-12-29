"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CircleUser, ShoppingBag, Menu } from 'lucide-react';

import { Abril_Fatface } from 'next/font/google'
import { cn } from '@/lib/utils';
import CircularProductDisplay from './circular';
import { NavigationMenuDemo } from './demo';
import { Rock_Salt } from 'next/font/google';


const rockSalt = Rock_Salt({
    variable: "--font-rock-salt",
    weight: "400",
    subsets: ["latin"],
});


const abrilFatface = Abril_Fatface({
    variable: "--font-abril-fatface",
    weight: "400",
    subsets: ["latin"],
});

const SpinningPot = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="relative w-64 h-64"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >



            <motion.div
                className="absolute bottom-0 w-64 h-40 bg-[#946430]"
                animate={{
                    scaleY: isHovered ? 1.5 : 1,
                    y: isHovered ? -20 : 0
                }}
                style={{ borderRadius: '40% 40% 20% 20%' }}
            />
            <motion.div
                className="absolute bottom-0 w-48 h-48 bg-[#6a2316] left-1/2 transform -translate-x-1/2"
                animate={{
                    rotate: isHovered ? 360 : 0,
                    scaleY: isHovered ? 0.8 : 1
                }}
                transition={{ duration: 1.5 }}
                style={{ borderRadius: '30% 30% 40% 40%' }}
            />
        </motion.div>
    );
};
export default function CreativePotteryLayout() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const [hoveredItem, setHoveredItem] = useState(null);
    const [isHovered, setIsHovered] = useState(false);

    const items = [
        { degree: 0, image: "./pottery.png", title: "Product 1", details: "Details about Product 1." },
        { degree: 60, image: "/path/to/image2.jpg", title: "Product 2", details: "Details about Product 2." },
        { degree: 120, image: "/path/to/image3.jpg", title: "Product 3", details: "Details about Product 3." },
        { degree: 180, image: "/path/to/image4.jpg", title: "Product 4", details: "Details about Product 4." },
        { degree: 240, image: "/path/to/image5.jpg", title: "Product 5", details: "Details about Product 5." },
        { degree: 300, image: "/path/to/image6.jpg", title: "Product 6", details: "Details about Product 6." },
    ];

    return (
        <div className="min-h-screen border z-50 bg-[#eae5da] overflow-hidden">


            {/* Fixed Navigation */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className="fixed top-0 left-0 right-0 bg-[#1a4441] backdrop-blur-lg z-50"
            >
                <div className="container mx-auto px-8 py-4 flex justify-between items-center">
                    <motion.h1
                        className={cn("text-xl font-bold text-white", rockSalt.className)}
                        whileHover={{ scale: 1.05 }}
                    >
                        ArtisanCrafts
                    </motion.h1>
                    <motion.button

                    >


                        <NavigationMenuDemo />

                    </motion.button>
                </div>
            </motion.nav>
            

            {/* Diagonal Hero Section */}
            <div className="relative h-screen overflow-hidden">
                <motion.div
                    initial={{ skewY: -20, opacity: 0 }}
                    animate={{ skewY: -5, opacity: 1 }}
                    style={{ backgroundImage: "url('./bg.jpg')", objectFit: 'contain' }}

                    className="absolute inset-0  transform origin-left"
                />

                <div className={cn("relative z-10 container mx-auto px-8 py-32 flex justify-between items-center")}>
                    {/* Text Content */}
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        className="max-w-xl bg-cover bg-center"
                    >
                        <h1 className={cn("text-7xl font-bold text-[#eae5da] mb-6", abrilFatface.className)}>Artisan's Corner</h1>
                        <p className="text-xl text-[#eae5da]/80 mb-8">Where tradition meets modern craftsmanship</p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-[#eae5da] text-[#6a2316] rounded-full font-medium"
                        >
                            Explore Collection
                        </motion.button>
                    </motion.div>

                    {/* Stacked Images */}
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="relative hidden lg:block   mt-10"
                    >
                        {/* Main large image */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="relative z-30 rounded-2xl overflow-hidden shadow-2xl"
                            style={{ width: '400px', height: '500px' }}
                        >
                            <img
                                src="./art.png"
                                alt="Pottery main"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        </motion.div>

                        {/* Floating image 1 - top right */}
                        <motion.div
                            initial={{ x: 100, y: -50 }}
                            animate={{ x: 50, y: -80 }}
                            whileHover={{ y: -90 }}
                            transition={{ duration: 0.5 }}
                            className="absolute top-0 right-0 z-40 rounded-xl overflow-hidden shadow-xl"
                            style={{ width: '200px', height: '250px' }}
                        >
                            <img
                                src="./art2.png"
                                alt="Pottery detail 1"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
                        </motion.div>

                        {/* Floating image 2 - bottom left */}
                        <motion.div
                            initial={{ x: -100, y: 50 }}
                            animate={{ x: -80, y: 80 }}
                            whileHover={{ y: 70 }}
                            transition={{ duration: 0.5 }}
                            className="absolute bottom-0 left-0 z-50 rounded-xl overflow-hidden shadow-xl"
                            style={{ width: '250px', height: '300px' }}
                        >
                            <img
                                src="./pottery.png"
                                alt="Pottery detail 2"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </motion.div>

                        {/* Decorative elements */}
                        <motion.div
                            animate={{
                                rotate: [0, 360],
                                scale: [1, 1.1, 1]
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                repeatType: "reverse"
                            }}
                            className="absolute z-50 top-1/2 right-1/2 w-64 h-64 rounded-full border-2 border-[#eae5da]"
                        />
                        <motion.div
                            animate={{
                                rotate: [360, 0],
                                scale: [1, 1.2, 1]
                            }}
                            transition={{
                                duration: 15,
                                repeat: Infinity,
                                repeatType: "reverse"
                            }}
                            className="absolute z-50 top-1/3  right-1/3 w-32 h-32 rounded-full border-2 border-[#eae5da]"
                        />
                    </motion.div>
                </div>


            </div>




            {/* Staggered Grid Section */}
            <div className="py-16 bg-[#eae5da]">
                <div className="container mx-auto px-8">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 "
                    >
                        {[...Array(8)].map((_, index) => (
                            <motion.div
                                key={index}
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className={`bg-[#6a2316] shadow-lg p-4 rounded-lg ${index % 2 === 0 ? 'mt-8' : ''
                                    }`}
                            >
                                <div className="h-48 bg-[#946430] rounded-md mb-4" />
                                <h3 className="text-[#6a2316] font-bold">Pottery Item</h3>
                                <p className="text-sm text-[#946430]">Handcrafted beauty</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            <section className="min-h-screen bg-[hsl(176,45%,18%)] py-32">
                <div className="container mx-auto px-8">
                    <motion.h2
                        className="text-4xl font-bold text-[#eae5da] mb-16 text-center"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        Watch Our Process
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-center">
                        {[1, 2, 3].map((i) => (
                            <motion.div
                                key={i}
                                className="relative"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2 }}
                            >
                                <SpinningPot />
                                <motion.div
                                    className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-full text-center"
                                >
                                    <span className="text-[#eae5da]">Hover to Transform</span>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>



        </div>
    );
}