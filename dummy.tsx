"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CircleUser, ShoppingBag, Menu, Star, Clock, Award, Mail } from 'lucide-react';
import { Abril_Fatface, Rock_Salt } from 'next/font/google';
import { cn } from '@/lib/utils';
import { NavigationMenuDemo } from './demo';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

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

// Spinning Pot Animation Component
const SpinningPot = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="relative w-64 h-64"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            <motion.div
                className="absolute bottom-0 w-64 h-40 bg-[#8B4513]"
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

// Feature Card Component
const FeatureCard = ({ icon: Icon, title, description }) => (
    <Card className="bg-[#FDF5E6] border-[#8B4513] border-2">
        <CardHeader>
            <Icon className="w-10 h-10 text-[#8B4513] mb-2" />
            <CardTitle className="text-[#3E2723]">{title}</CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-[#3E2723]/80">{description}</p>
        </CardContent>
    </Card>
);

// Testimonial Card Component
const TestimonialCard = ({ name, role, content }) => (
    <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-[#FDF5E6] p-6 rounded-lg border-2 border-[#8B4513] shadow-lg"
    >
        <div className="flex gap-2 mb-2">
            {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#CD853F] text-[#CD853F]" />
            ))}
        </div>
        <p className="text-[#3E2723]/80 mb-4">{content}</p>
        <div className="flex items-center gap-2">
            <CircleUser className="w-10 h-10 text-[#8B4513]" />
            <div>
                <h4 className="font-bold text-[#3E2723]">{name}</h4>
                <p className="text-sm text-[#3E2723]/60">{role}</p>
            </div>
        </div>
    </motion.div>
);

// Product Card Component
const ProductCard = ({ index, title }) => (
    <motion.div
        whileHover={{ y: -10 }}
        className="bg-[#FDF5E6] rounded-lg overflow-hidden shadow-lg"
    >
        <div className="h-64 bg-[#8B4513]/20">
            <img
                src={`/api/placeholder/400/320`}
                alt={title}
                className="w-full h-full object-cover"
            />
        </div>
        <div className="p-6">
            <Badge className="mb-2 bg-[#CD853F]">New Arrival</Badge>
            <h3 className="text-xl font-bold text-[#3E2723] mb-2">{title}</h3>
            <p className="text-[#3E2723]/60 mb-4">Hand-thrown and glazed with our signature finish</p>
            <Button className="w-full bg-[#8B4513] hover:bg-[#CD853F]">
                View Details
            </Button>
        </div>
    </motion.div>
);

// Main Layout Component
export default function CreativePotteryLayout() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null);

    return (
        <div className="min-h-screen bg-[#FDF5E6] overflow-hidden">
            {/* Navigation */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className="fixed top-0 left-0 right-0 bg-[#8B4513] backdrop-blur-lg z-50"
            >
                <div className="container mx-auto px-8 py-4 flex justify-between items-center">
                    <motion.h1
                        className={cn("text-xl font-bold text-[#FDF5E6]", rockSalt.className)}
                        whileHover={{ scale: 1.05 }}
                    >
                        ArtisanCrafts
                    </motion.h1>
                    <NavigationMenuDemo />
                </div>
            </motion.nav>

            {/* Hero Section */}
            <div className="relative h-screen overflow-hidden pt-20">
                <motion.div
                    initial={{ skewY: -20, opacity: 0 }}
                    animate={{ skewY: -5, opacity: 1 }}
                    className="absolute inset-0 bg-[#8B4513]/10 transform origin-left"
                />

                <div className="relative z-10 container mx-auto px-8 py-32 flex justify-between items-center">
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        className="max-w-xl"
                    >
                        <h1 className={cn("text-7xl font-bold text-[#3E2723] mb-6", abrilFatface.className)}>
                            Artisan's Corner
                        </h1>
                        <p className="text-xl text-[#3E2723]/80 mb-8">
                            Where tradition meets modern craftsmanship
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-[#8B4513] text-[#FDF5E6] rounded-full font-medium"
                        >
                            Explore Collection
                        </motion.button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="hidden lg:block relative"
                    >
                        <img
                            src="/api/placeholder/600/800"
                            alt="Hero"
                            className="rounded-lg shadow-2xl"
                        />
                    </motion.div>
                </div>
            </div>

            {/* Features Section */}
            <section className="py-24 bg-[#FDF5E6]">
                <div className="container mx-auto px-8">
                    <motion.h2 
                        className={cn("text-4xl text-center mb-16 text-[#3E2723]", abrilFatface.className)}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        Why Choose Our Artisan Pottery
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <FeatureCard 
                            icon={Clock}
                            title="Time-Honored Techniques"
                            description="Each piece is crafted using traditional methods passed down through generations."
                        />
                        <FeatureCard 
                            icon={Award}
                            title="Master Craftsmanship"
                            description="Our artisans bring decades of experience to every unique creation."
                        />
                        <FeatureCard 
                            icon={Star}
                            title="Unique Designs"
                            description="No two pieces are exactly alike, ensuring you own a truly one-of-a-kind item."
                        />
                    </div>
                </div>
            </section>

            {/* Featured Collection */}
            <section className="py-24 bg-[#DEB887]/20">
                <div className="container mx-auto px-8">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-center mb-16"
                    >
                        <h2 className={cn("text-4xl mb-4 text-[#3E2723]", abrilFatface.className)}>
                            Featured Collection
                        </h2>
                        <p className="text-[#3E2723]/80">Discover our most cherished pieces</p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <ProductCard
                                key={i}
                                index={i}
                                title={`Vintage Vase ${i}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="min-h-screen bg-[#8B4513] py-32">
                <div className="container mx-auto px-8">
                    <motion.h2
                        className={cn("text-4xl font-bold text-[#FDF5E6] mb-16 text-center", abrilFatface.className)}
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
                                <motion.div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-full text-center">
                                    <span className="text-[#FDF5E6]">Hover to Transform</span>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-24 bg-[#FDF5E6]">
                <div className="container mx-auto px-8">
                    <motion.h2 
                        className={cn("text-4xl text-center mb-16 text-[#3E2723]", abrilFatface.className)}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        What Our Collectors Say
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <TestimonialCard 
                            name="Sarah Mitchell"
                            role="Art Collector"
                            content="The attention to detail in each piece is remarkable. These aren't just pottery items; they're family heirlooms in the making."
                        />
                        <TestimonialCard 
                            name="James Wilson"
                            role="Interior Designer"
                            content="I've never seen craftsmanship of this quality. Each piece tells a story and adds character to any space."
                        />
                        <TestimonialCard 
                            name="Emily Chen"
                            role="Gallery Owner"
                            content="The perfect blend of traditional techniques and contemporary design. My clients absolutely love these pieces."
                        />
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-24 bg-[#8B4513]">
                <div className="container mx-auto px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="max-w-2xl mx-auto"
                    >
                        <h2 className={cn("text-4xl mb-4 text-[#FDF5E6]", abrilFatface.className)}>
                            Join Our Artisan Community
                        </h2>
                        <p className="text-[#FDF5E6]/80 mb-8">
                            Subscribe to receive updates on new collections, artisan stories, and exclusive offers.
                        </p>
                        <div className="flex gap-4 justify-center">
                            <input 
                                type="email" 
                                placeholder="Enter your email"
                                className="px-4 py-2 rounded-md w-64 bg-[#FDF5E6] text-[#3E2723]"
                            />
                            <Button className="bg-[#CD853F] hover:bg-[#DEB887] text-[#FDF5E6]">
                                Subscribe
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#3E2723] text-[#FDF5E6] py-16">
                <div className="container mx-auto px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className={cn("text-xl mb-4", rockSalt.className)}>ArtisanCrafts</h3>
                            <p className="text-[#FDF5E6]/80">Crafting beauty, one piece at a time.</p>
                        </div>
                        {/* Continuing from the footer section */}
                        <div>
                            <h4 className="font-bold mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="text-[#FDF5E6]/80 hover:text-[#FDF5E6]">About Us</a>
                                </li>
                                <li>
                                    <a href="#" className="text-[#FDF5E6]/80 hover:text-[#FDF5E6]">Collections</a>
                                </li>
                                <li>
                                    <a href="#" className="text-[#FDF5E6]/80 hover:text-[#FDF5E6]">Process</a>
                                </li>
                                <li>
                                    <a href="#" className="text-[#FDF5E6]/80 hover:text-[#FDF5E6]">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Collections</h4>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="text-[#FDF5E6]/80 hover:text-[#FDF5E6]">Vases</a>
                                </li>
                                <li>
                                    <a href="#" className="text-[#FDF5E6]/80 hover:text-[#FDF5E6]">Bowls</a>
                                </li>
                                <li>
                                    <a href="#" className="text-[#FDF5E6]/80 hover:text-[#FDF5E6]">Plates</a>
                                </li>
                                <li>
                                    <a href="#" className="text-[#FDF5E6]/80 hover:text-[#FDF5E6]">Custom Orders</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Contact Us</h4>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2">
                                    <Mail className="w-4 h-4" />
                                    <span className="text-[#FDF5E6]/80">info@artisancrafts.com</span>
                                </li>
                                <li className="text-[#FDF5E6]/80">
                                    123 Pottery Lane<br />
                                    Craftsville, AR 72701
                                </li>
                            </ul>
                            <div className="mt-4">
                                <Button variant="outline" className="bg-transparent border-[#FDF5E6] text-[#FDF5E6] hover:bg-[#FDF5E6] hover:text-[#3E2723]">
                                    Get Directions
                                </Button>
                            </div>
                        </div>
                    </div>
                    <Separator className="my-8 bg-[#FDF5E6]/20" />
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-[#FDF5E6]/60 text-sm">
                            © 2024 ArtisanCrafts. All rights reserved.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-[#FDF5E6]/60 hover:text-[#FDF5E6] text-sm">Privacy Policy</a>
                            <a href="#" className="text-[#FDF5E6]/60 hover:text-[#FDF5E6] text-sm">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Scroll to Top Button */}
            <motion.button
                className="fixed bottom-8 right-8 p-4 bg-[#8B4513] text-[#FDF5E6] rounded-full shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                <ArrowRight className="w-6 h-6 transform rotate-[-90deg]" />
            </motion.button>
        </div>
    );
}