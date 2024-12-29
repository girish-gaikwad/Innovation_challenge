import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Paintbrush, Flame, Store } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Abril_Fatface } from 'next/font/google';


const abrilFatface = Abril_Fatface({
    variable: "--font-abril-fatface",
    weight: "400",
    subsets: ["latin"],
});
const ProcessStep = ({ icon: Icon, title, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay }}
        className="flex flex-col items-center text-center relative"
    >
        <div className="w-24 h-24 bg-[#DEB887] rounded-full flex items-center justify-center mb-4 border-4 border-[#FDF5E6]">
            <Icon className="w-12 h-12 text-[#3E2723]" />
        </div>
        <h3 className="text-xl font-semibold text-[#FDF5E6] mb-2">{title}</h3>
        <p className="text-[#FDF5E6]/80 max-w-xs">{description}</p>
    </motion.div>
);

const ProcessSection = () => {
    return (
        <section className="min-h-screen bg-[#8B4513] py-32 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-64 h-64 border-2 border-[#FDF5E6] rounded-full -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-96 h-96 border-2 border-[#FDF5E6] rounded-full translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="container mx-auto px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-24"
                >
                    <h2 className={cn("text-4xl font-bold text-[#FDF5E6] mb-6", abrilFatface.className)}>
                        The Artisan's Journey
                    </h2>
                    <p className="text-[#FDF5E6]/80 max-w-2xl mx-auto">
                        From raw clay to finished masterpiece, discover our time-honored process of creating each unique piece
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Connecting line */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="absolute top-12 left-0 w-full h-1 bg-[#FDF5E6]/20"
                    />

                    {/* Process steps */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                        <ProcessStep
                            icon={Leaf}
                            title="Material Selection"
                            description="Carefully sourcing the finest clay and natural materials"
                            delay={0.2}
                        />
                        <ProcessStep
                            icon={Paintbrush}
                            title="Shaping & Design"
                            description="Hand-throwing and sculpting each piece with precision"
                            delay={0.4}
                        />
                        <ProcessStep
                            icon={Flame}
                            title="Firing Process"
                            description="Multiple firing stages to ensure durability and beauty"
                            delay={0.6}
                        />
                        <ProcessStep
                            icon={Store}
                            title="Final Touches"
                            description="Glazing and finishing to create lasting masterpieces"
                            delay={0.8}
                        />
                    </div>

                    {/* Decorative elements */}
                    <motion.svg
                        className="absolute top-1/2 left-0 w-full"
                        height="100"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    >
                        <path
                            d="M0,50 C200,50 300,20 500,50 C700,80 800,50 1000,50"
                            fill="none"
                            stroke="#FDF5E6"
                            strokeWidth="1"
                            strokeDasharray="5,5"
                            strokeOpacity="0.2"
                        />
                    </motion.svg>
                </div>

                {/* Additional illustrations */}
                <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[1, 2, 3, 4].map((i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-[#DEB887]/10 rounded-lg p-6 border border-[#FDF5E6]/20"
                        >
                            <img
                                src={`./process${i}.png`}
                                alt={`Process illustration ${i}`}
                                className="w-full h-48 object-cover rounded-md mb-4 opacity-80"
                            />
                            <p className="text-[#FDF5E6]/60 text-sm text-center">
                                Traditional crafting techniques preserved through generations
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;