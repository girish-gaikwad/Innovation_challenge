"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface Course {
  id: string;
  title: string;
  category: string;
  instructor: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
}

interface FilterOption {
  id: string;
  label: string;
  checked: boolean;
}

const CoursePage: React.FC = () => {
  // Sample course data
  const courses: Course[] = [
    {
      id: "1",
      title: "Handcrafted Pottery",
      category: "Artisan Handcrafts",
      instructor: "Rita Sharma",
      price: 25.0,
      rating: 4.9,
      reviews: 32,
      image:
        "https://media.licdn.com/dms/image/D4D12AQFsK_G3iOWSLg/article-cover_image-shrink_720_1280/0/1702122874916?e=2147483647&v=beta&t=kHnSGyAzDsbfKvxsf5vn31v99QJ1ykXhTOQxapn5vDk",
    },
    {
      id: "2",
      title: "Traditional Weaving Techniques",
      category: "Made by Artisans",
      instructor: "Ravi Prakash",
      price: 30.0,
      rating: 4.7,
      reviews: 40,
      image: "https://images.stockcake.com/public/6/7/6/67667592-ce5e-4658-b0e8-fa831e287ca2_large/traditional-weaving-technique-stockcake.jpg",
    },
    {
      id: "3",
      title: "Traditional Weaving Techniques",
      category: "Made by Artisans",
      instructor: "Ravi Prakash",
      price: 30.0,
      rating: 4.7,
      reviews: 40,
      image: "https://images.stockcake.com/public/6/7/6/67667592-ce5e-4658-b0e8-fa831e287ca2_large/traditional-weaving-technique-stockcake.jpg",
    },
  ];

  // Filter categories
  const [categories, setCategories] = useState<FilterOption[]>([
    { id: "artisan_handcrafts", label: "Artisan Handcrafts", checked: false },
    { id: "made_by_artisans", label: "Made by Artisans", checked: false },
    { id: "pottery", label: "Pottery", checked: false },
    { id: "weaving", label: "Weaving", checked: false },
    { id: "embroidery", label: "Embroidery", checked: false },
    { id: "metal_work", label: "Metal Work", checked: false },
    { id: "carving", label: "Carving", checked: false },
    { id: "knitting", label: "Knitting", checked: false },
    { id: "painting", label: "Painting", checked: false },
  ]);

  // Language options
  const [languages, setLanguages] = useState<FilterOption[]>([
    { id: "assamese", label: "Assamese", checked: false },
    { id: "bodo", label: "Bodo", checked: false },
    { id: "manipuri", label: "Manipuri", checked: false },
    { id: "meitei", label: "Meitei", checked: false },
    { id: "nagpuri", label: "Nagpuri", checked: false },
    { id: "maithili", label: "Maithili", checked: false },
    { id: "sikkimese", label: "Sikkimese", checked: false },
    { id: "mizoram", label: "Mizo", checked: false },
  ]);

  // Price options
  const [priceOptions, setPriceOptions] = useState<FilterOption[]>([
    { id: "all", label: "All", checked: false },
    { id: "paid", label: "Paid", checked: false },
    { id: "free", label: "Free", checked: false },
  ]);

  // Toggle states
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [showAllLanguages, setShowAllLanguages] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const filterContainerVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  return (
    <div className=" mx-auto p-4" style={{ backgroundColor: '#f1e3d1' }}>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Filters Sidebar */}
        <motion.div
          variants={filterContainerVariants}
          initial="hidden"
          animate="visible"
          className="w-full md:w-80 rounded-lg"
          style={{ backgroundColor: '#f1e3d1' }}
        >
          {/* Category Filter */}
          <motion.div
            className="mb-8 p-4 rounded-lg shadow-md"
            style={{ border: '2px solid #8b4513' }}
          >
            <h2 className="text-lg font-semibold mb-4" style={{ color: '#8b4513' }}>Category</h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-3"
            >
              {categories
                .slice(0, showAllCategories ? categories.length : 5)
                .map((category) => (
                  <motion.label
                    key={category.id}
                    variants={itemVariants}
                    className="flex items-center space-x-2 cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                  >
                    <input
                      type="checkbox"
                      checked={category.checked}
                      onChange={() => {
                        setCategories(
                          categories.map((c) =>
                            c.id === category.id ? { ...c, checked: !c.checked } : c
                          )
                        );
                      }}
                      className="w-4 h-4 rounded"
                      style={{ accentColor: '#8b4513' }}
                    />
                    <span style={{ color: '#8b4513' }}>{category.label}</span>
                  </motion.label>
                ))}
            </motion.div>
            {categories.length > 5 && (
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={() => setShowAllCategories(!showAllCategories)}
                className="mt-4 text-sm font-medium px-4 py-2 rounded"
                style={{ color: '#8b4513' }}
              >
                {showAllCategories ? "Show Less -" : "Show More +"}
              </motion.button>
            )}
          </motion.div>

          {/* Language Filter */}
          <motion.div
            className="mb-8 p-4 rounded-lg shadow-md"
            style={{ border: '2px solid #8b4513' }}
          >
            <h2 className="text-lg font-semibold mb-4" style={{ color: '#8b4513' }}>Language</h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-3"
            >
              {languages
                .slice(0, showAllLanguages ? languages.length : 5)
                .map((language) => (
                  <motion.label
                    key={language.id}
                    variants={itemVariants}
                    className="flex items-center space-x-2 cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                  >
                    <input
                      type="checkbox"
                      checked={language.checked}
                      onChange={() => {
                        setLanguages(
                          languages.map((l) =>
                            l.id === language.id ? { ...l, checked: !l.checked } : l
                          )
                        );
                      }}
                      className="w-4 h-4 rounded"
                      style={{ accentColor: '#8b4513' }}
                    />
                    <span style={{ color: '#8b4513' }}>{language.label}</span>
                  </motion.label>
                ))}
            </motion.div>
            {languages.length > 5 && (
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={() => setShowAllLanguages(!showAllLanguages)}
                className="mt-4 text-sm font-medium px-4 py-2 rounded"
                style={{ color: '#8b4513' }}
              >
                {showAllLanguages ? "Show Less -" : "Show More +"}
              </motion.button>
            )}
          </motion.div>

          {/* Price Filter */}
          <motion.div
            className="mb-8 p-4 rounded-lg shadow-md"
            style={{ border: '2px solid #8b4513' }}
          >
            <h2 className="text-lg font-semibold mb-4" style={{ color: '#8b4513' }}>Price</h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-3"
            >
              {priceOptions.map((option) => (
                <motion.label
                  key={option.id}
                  variants={itemVariants}
                  className="flex items-center space-x-2 cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                >
                  <input
                    type="checkbox"
                    checked={option.checked}
                    onChange={() => {
                      setPriceOptions(
                        priceOptions.map((p) =>
                          p.id === option.id ? { ...p, checked: !p.checked } : p
                        )
                      );
                    }}
                    className="w-4 h-4 rounded"
                    style={{ accentColor: '#8b4513' }}
                  />
                  <span style={{ color: '#8b4513' }}>{option.label}</span>
                </motion.label>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Course Grid */}
        <motion.div
          className="flex-1"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <motion.div
                key={course.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="rounded-lg shadow-md overflow-hidden"
                style={{
                  backgroundColor: '#f1e3d1',
                  border: '2px solid #8b4513'
                }}
              >
                <div className="p-4">
                  <div className="relative aspect-video mb-4">
                    <Image
                      src={course.image}
                      alt={course.title}
                      width={800}
                      height={800}
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-sm" style={{ color: '#8b4513' }}>
                      <span>{course.category}</span>
                      <span className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#8b4513"
                          viewBox="0 0 24 24"
                          className="w-4 h-4 mr-1"
                        >
                          <path d="M12 2L14.09 8.26L21 9.27L16 14.14L17.45 21.02L12 17.77L6.55 21.02L8 14.14L3 9.27L9.91 8.26L12 2Z" />
                        </svg>
                        {course.rating} ({course.reviews} Reviews)
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold" style={{ color: '#8b4513' }}>{course.title}</h3>
                    <div className="flex justify-between items-center" style={{ color: '#8b4513' }}>
                      <span className="text-sm">{course.instructor}</span>
                      <span className="font-semibold">₹{course.price}</span>
                    </div>
                    <Link href={`/course-details`}>
                    <motion.button
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                      className="w-full py-2 px-4 rounded-lg text-white font-semibold text-sm mt-4"
                      style={{ backgroundColor: '#8b4513' }}
                      
                      >
                      Enroll Now →
                    </motion.button>
                      </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CoursePage;