"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ArrowRight, Award, CircleUser, Clock, Mail, Star } from 'lucide-react';
import { Abril_Fatface, Rock_Salt } from 'next/font/google';
import Image from "next/image";
import { useState } from 'react';
import AdditionalSections from './add';
import GallerySection from './bendo';
import { NavigationMenuDemo } from './demo';
import ProcessSection from './process';

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
interface FeatureCardProps {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    title: string;
    description: string;
  }

// Feature Card Component
const FeatureCard = ({ icon: Icon, title, description }:FeatureCardProps) => (
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


interface TestimonialCardProps {
    name: string;
    role: string;
    content: string;
  }


// Testimonial Card Component
const TestimonialCard = ({ name, role, content }:TestimonialCardProps) => (
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

interface ProductCardProps {
    index: number;
    title: string;
  }

// Product Card Component
const ProductCard = ({ index, title }:ProductCardProps) => (
    <motion.div
        whileHover={{ y: -10 }}
        className="bg-[#FDF5E6] rounded-lg overflow-hidden shadow-lg"
    >
        <div className="h-64 bg-[#8B4513]/20">
            <Image
                src={`/Vintage${index}.png`}
                alt={title}
                width={800}
                height={800}
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
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className="min-h-screen bg-[#FDF5E6] overflow-hidden">
            {/* Navigation */}
            <motion.nav
  initial={{ y: -100 }}
  animate={{ y: 0 }}
  className="fixed top-0 left-0 right-0 bg-[#8B4513] backdrop-blur-lg z-50"
>
  <div className="container mx-auto px-4 sm:px-8 py-4 flex justify-between items-center">
    {/* Logo Section */}
    <motion.h1
      className={cn(
        "text-lg sm:text-xl font-bold text-[#FDF5E6]",
        rockSalt.className
      )}
      whileHover={{ scale: 1.05 }}
    >
      ArtisanCrafts
    </motion.h1>

    {/* Navigation Menu */}
    <div className="hidden sm:block">
      <NavigationMenuDemo />
    </div>

    {/* Mobile Menu Button */}
    <div className="block sm:hidden">
      <button
        className="text-[#FDF5E6] focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: menuOpen ? 90 : 0 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </motion.div>
      </button>
    </div>
  </div>

  {/* Mobile Menu Dropdown */}
  {menuOpen && (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="sm:hidden bg-[#8B4513] text-[#FDF5E6]  border py-1"
    >
      <NavigationMenuDemo />
    </motion.div>
  )}
</motion.nav>

            {/* hero section */}
            <div className="relative h-screen overflow-hidden pt-20">
                {/* Enhanced background with multiple layers */}
                <motion.div
                    initial={{ skewY: -20, opacity: 0 }}
                    animate={{ skewY: -5, opacity: 1 }}
                    className="absolute inset-0 bg-[#8B4513]/10 transform origin-left"
                />

                {/* Decorative pattern overlay */}
                <div className="absolute inset-0 opacity-5">
                    <div className="w-full h-full"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z' fill='%23593D29' fill-opacity='0.4'/%3E%3C/g%3E%3C/svg%3E")`,
                            backgroundRepeat: 'repeat'
                        }}
                    />
                </div>

                <div className="relative z-10 container mx-auto px-8 py-32 flex justify-between items-center">
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        className="max-w-xl"
                    >
                        {/* Decorative corner flourish */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.5 }}
                            className="absolute -top-8 -left-8 w-24 h-24 border-t-2 border-l-2 border-[#8B4513]/30"
                        />

                        <h1 className={cn("text-7xl font-bold text-[#3E2723] mb-6", abrilFatface.className)}>
                            Artisan&apos;s Corner
                        </h1>

                        {/* Animated underline */}
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ delay: 0.8 }}
                            className="h-px bg-[#8B4513]/30 mb-6"
                        />

                        <p className="text-xl text-[#3E2723]/80 mb-8">
                            Where tradition meets modern craftsmanship
                        </p>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-[#8B4513] text-[#FDF5E6] rounded-full font-medium relative overflow-hidden group"
                        >
                            <span className="relative z-10">Explore Collection</span>
                            <motion.div
                                className="absolute inset-0 bg-[#3E2723]"
                                initial={{ x: "-100%" }}
                                whileHover={{ x: 0 }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="relative hidden lg:block"
                    >
                        {/* Vintage frame effect */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="absolute -inset-4 border-2 border-[#8B4513]/20 rounded-3xl"
                        />

                        {/* Main large image */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="relative z-30 rounded-2xl overflow-hidden shadow-2xl"
                            style={{ width: '400px', height: '500px' }}
                        >
                            <Image
                                src="/art.png"
                                alt="Pottery main"
                                width={800}
                                height={800}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                        </motion.div>

                        {/* Floating images with enhanced animations */}
                        <motion.div
                            initial={{ x: 100, y: -50 }}
                            animate={{
                                x: 50,
                                y: -80,
                                rotate: [0, 2, 0, -2, 0],
                            }}
                            transition={{
                                rotate: {
                                    repeat: Infinity,
                                    duration: 5,
                                }
                            }}
                            className="absolute top-0 right-0 z-40 rounded-xl overflow-hidden shadow-xl"
                            style={{ width: '200px', height: '250px' }}
                        >
                            <Image
                                src="/art2.png"
                                alt="Pottery detail 1"
                                width={800}
                                height={800}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
                        </motion.div>

                        <motion.div
                            initial={{ x: -100, y: 50 }}
                            animate={{
                                x: -80,
                                y: 80,
                                rotate: [0, -2, 0, 2, 0],
                            }}
                            transition={{
                                rotate: {
                                    repeat: Infinity,
                                    duration: 6,
                                }
                            }}
                            className="absolute bottom-0 left-0 z-50 rounded-xl overflow-hidden shadow-xl"
                            style={{ width: '250px', height: '300px' }}
                        >
                            <Image
                                src="/pottery.png"
                                alt="Pottery detail 2"
                                width={800}
                                height={800}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </motion.div>

                        {/* Enhanced decorative elements */}
                        {[...Array(3)].map((_, i) => (
                            <motion.div
                                key={i}
                                animate={{
                                    rotate: [0, 360],
                                    scale: [1, 1.1, 1]
                                }}
                                transition={{
                                    duration: 20 + i * 5,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }}
                                className={`absolute z-50 rounded-full border border-[#8B4513]/20`}
                                style={{
                                    width: `${64 - i * 16}px`,
                                    height: `${64 - i * 16}px`,
                                    top: `${50 + i * 10}%`,
                                    right: `${50 + i * 5}%`,
                                }}
                            />
                        ))}

                        {/* Decorative dots */}
                        {[...Array(8)].map((_, i) => (
                            <motion.div
                                key={`dot-${i}`}
                                className="absolute w-1 h-1 bg-[#8B4513]/30 rounded-full"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{
                                    duration: 2,
                                    delay: i * 0.2,
                                    repeat: Infinity,
                                }}
                                style={{
                                    top: `${Math.random() * 100}%`,
                                    left: `${Math.random() * 100}%`,
                                }}
                            />
                        ))}
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

            <ProcessSection />







            <GallerySection />

            <AdditionalSections />


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
            <section className="py-24 bg-[#8B4513]" style={{ backgroundImage: 'url(./work.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
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