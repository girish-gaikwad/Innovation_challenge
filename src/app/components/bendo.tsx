import { Badge } from "@/components/ui/badge";
import { motion } from 'framer-motion';
import { Award, Star } from "lucide-react";
import Image from "next/image";

const BentoGrid = () => {
    return (
        <div className="mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
                {/* Featured Large Tile */}
                <motion.div
                    className="relative md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden group"
                    whileHover={{ scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="absolute inset-0 bg-[#8B4513] opacity-20 group-hover:opacity-30 transition-opacity" />
                    <Image
                        src="/gallary6.png"
                        alt="Featured pottery"
                        width={800}
                        height={800}
                        className="w-full h-full object-cover  aspect-square md:aspect-auto min-h-[400px]"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                        <Badge className="mb-2 bg-[#CD853F]">Featured Collection</Badge>
                        <h3 className="text-2xl font-bold text-white mb-2">Artisan Vase Collection</h3>
                        <p className="text-white/80">Handcrafted with traditional techniques</p>
                    </div>
                </motion.div>

                {/* Vertical Tile */}
                <motion.div
                    className="relative rounded-3xl overflow-hidden group md:row-span-2"
                    whileHover={{ scale: 0.98 }}
                >
                    <div className="absolute inset-0 bg-[#8B4513] opacity-20 group-hover:opacity-30 transition-opacity" />
                    <Image
                        src="/gallary7.png"
                        alt="Tall pottery"
                        width={800}
                        height={800}
                        className="w-full h-full object-cover min-h-[400px]"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                        <Badge className="mb-2 bg-[#CD853F]">New Arrival</Badge>
                        <h3 className="text-xl font-bold text-white">Traditional Vessels</h3>
                    </div>
                </motion.div>

                {/* Regular Tiles */}
                {[1, 2, 3, 4].map((i) => (
                    <motion.div
                        key={i}
                        className="relative rounded-3xl overflow-hidden group"
                        whileHover={{ scale: 0.98 }}
                    >
                        <div className="absolute inset-0 bg-[#8B4513] opacity-20 group-hover:opacity-30 transition-opacity" />
                        <Image
                            src={`/gallary${i}.png`}
                            alt={`Gallery item ${i}`}
                            width={800}
                            height={800}
                            className="w-full h-full object-cover aspect-square"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                            <h3 className="text-lg font-bold text-white">Ceramic Art {i}</h3>
                        </div>
                    </motion.div>
                ))}

                {/* Feature Tile with Icon */}
                <motion.div
                    className="relative rounded-3xl overflow-hidden bg-[#DEB887] p-6 md:col-span-2"
                    whileHover={{ scale: 0.98 }}
                >
                    <Image
                        src="/gallary5.png"
                        alt="Award background"
                        width={800}
                        height={800}
                        className="absolute inset-0 object-cover"
                    />
                    <div className="flex items-start gap-4 relative">
                        <Award className="w-8 h-8 text-[#ffd700]" />
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">Award-Winning Craftsmanship</h3>
                            <p className="text-white">Our pieces have been recognized in international exhibitions and galleries.</p>
                        </div>
                    </div>
                </motion.div>

                {/* Stats Tile */}
                <motion.div
                    className="relative rounded-3xl overflow-hidden bg-[#8B4513] p-6"
                    whileHover={{ scale: 0.98 }}
                >
                    <div className="flex flex-col items-center justify-center h-full">
                        <Star className="w-8 h-8 text-[#FDF5E6] mb-2" />
                        <span className="text-3xl font-bold text-[#FDF5E6]">500+</span>
                        <span className="text-[#FDF5E6]/80">Unique Pieces</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

// Usage in the main layout
const GallerySection = () => {
    return (
        <section className="py-24 bg-[#FDF5E6]">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-[#3E2723] mb-4">Our Gallery</h2>
                    <p className="text-[#3E2723]/80 max-w-2xl mx-auto">
                        Discover our collection of handcrafted pottery pieces, each telling its own unique story through form and function.
                    </p>
                </motion.div>
                <BentoGrid />
            </div>
        </section>
    );
};

export default GallerySection;