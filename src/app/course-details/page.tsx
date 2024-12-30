"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Module {
  id: number;
  title: string;
  price: number;
}

interface CourseDetails {
  id: string;
  title: string;
  instructor: string;
  category: string;
  enrolledStudents: number;
  rating: number;
  reviews: number;
  date: string;
  tags: string[];
  description: string;
  fullPrice: number;
  level: string;
  duration: string;
  modules: number;
  certification: string;
  quizzes: number;
}

const CourseDetailsScreen = () => {
  const [selectedModule, setSelectedModule] = useState<number | null>(null);
 

  const courseDetails: CourseDetails = {
    id: '1',
    title: "Handcrafted Pottery",
    instructor: "Rita Sharma",
    category: "Artisan Handcrafts",
    enrolledStudents: 320,
    rating: 4.9,
    reviews: 32,
    date: "15/11/2024",
    tags: [],
    description:
      "Learn the art of pottery, shaping clay into beautiful, handmade pieces with the guidance of an experienced instructor.",
    fullPrice: 2500.0,
    level: "Intermediate",
    duration: "6hrs",
    modules: 8,
    certification: "YES",
    quizzes: 6,
  };

  const modules: Module[] = [
    { id: 1, title: "Pottery Basics", price: 5.0 },
    { id: 2, title: "Advanced Techniques", price: 8.0 },
    { id: 3, title: "Creative Pottery Projects", price: 7.0 },
    { id: 4, title: "Decorative Techniques", price: 5.0 },
  ];

  return (
    <div className=" mx-auto p-4" style={{ backgroundColor: "#fdf5e6" }}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Section */}
        <div className="lg:col-span-2">
          {/* Hero Banner */}
          <div className="relative rounded-lg overflow-hidden mb-4 shadow-lg">
            <div className="p-0">
              <Image
                src="https://media.licdn.com/dms/image/D4D12AQFsK_G3iOWSLg/article-cover_image-shrink_720_1280/0/1702122874916?e=2147483647&v=beta&t=kHnSGyAzDsbfKvxsf5vn31v99QJ1ykXhTOQxapn5vDk"
                alt="Course instructor"
                width={1200}
                height={400}
                className="h-[400px] w-full object-cover"
              />
            </div>
          </div>

          {/* Course Info */}
          <div className="flex flex-wrap gap-6 mb-4 items-center">
            <span className="px-3 py-1 rounded-full text-sm" style={{ backgroundColor: "#f1e3d1", color: "#8b4513" }}>
              {courseDetails.category}
            </span>
            <span style={{ color: "#8b4513" }}>{courseDetails.date}</span>
            <span style={{ color: "#8b4513" }}>
              {courseDetails.enrolledStudents} students Enrolled
            </span>
            <div className="flex items-center">
              <span className="text-yellow-600 mr-1">★</span>
              <span style={{ color: "#8b4513" }}>{courseDetails.rating}</span>
              <span className="ml-1" style={{ color: "#8b4513" }}>
                ({courseDetails.reviews} Reviews)
              </span>
            </div>
            <span style={{ color: "#8b4513" }}>By {courseDetails.instructor}</span>
          </div>

          <h1 className="text-3xl font-bold mb-6" style={{ color: "#8b4513" }}>
            {courseDetails.title}
          </h1>

          <div className="mb-8">
            <h2 className="font-semibold mb-2" style={{ color: "#8b4513" }}>Description:</h2>
            <p style={{ color: "#8b4513" }}>{courseDetails.description}</p>
          </div>

          {/* Modules */}
          <div className="space-y-4">
            {modules.map((module) => (
              <div
                key={module.id}
                className="rounded-lg p-4 flex items-center justify-between cursor-pointer shadow-md transition-all duration-300 hover:shadow-lg"
                style={{ backgroundColor: "#f1e3d1" }}
                onClick={() => setSelectedModule(selectedModule === module.id ? null : module.id)}
              >
                <div>
                  <span className="font-medium" style={{ color: "#8b4513" }}>Module: {module.id}</span>
                  <h3 style={{ color: "#8b4513" }}>{module.title}</h3>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-semibold" style={{ color: "#8b4513" }}>
                    ${module.price.toFixed(2)}
                  </span>
                  <svg
                    className={`w-5 h-5 transition-transform ${
                      selectedModule === module.id ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="#8b4513"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:col-span-1">
          {/* Course Details Card */}
          <div className="rounded-lg p-6 mb-4 shadow-lg" style={{ backgroundColor: "#f1e3d1" }}>
            <h2 className="text-xl font-semibold mb-2 text-center" style={{ color: "#8b4513" }}>
              Full Course Fees:
            </h2>
            <p className="text-3xl font-bold mb-6 text-center" style={{ color: "#8b4513" }}>
            ₹{courseDetails.fullPrice.toFixed(2)}
            </p>

            <div className="space-y-4">
              {[
                { label: "Level", value: courseDetails.level },
                { label: "Duration", value: courseDetails.duration },
                { label: "Modules", value: `${courseDetails.modules} modules` },
                { label: "Certification", value: courseDetails.certification },
                { label: "Quiz", value: `${courseDetails.quizzes} Quizzes` },
              ].map((item, index) => (
                <div key={index} className="flex items-center p-2 rounded" style={{ backgroundColor: "rgba(139, 69, 19, 0.1)" }}>
                  <span style={{ color: "#8b4513" }} className="flex-1">{item.label}</span>
                  <span className="mx-2" style={{ color: "#8b4513" }}>:</span>
                  <span className="font-medium flex-1 text-right" style={{ color: "#8b4513" }}>{item.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <h3 className="font-semibold mb-4" style={{ color: "#8b4513" }}>
                Payment Details:
              </h3>
              <div className="flex justify-center gap-6 mb-6">
                <Image
                  src="https://static.cdnlogo.com/logos/g/93/google.svg"
                  alt="Google Pay"
                  width={50}
                  height={50}
                  className="h-8"
                  />
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/800px-Mastercard_2019_logo.svg.png"
                  width={50}
                  height={50}
                  alt="Mastercard"
                  className="h-8"
                  />
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Visa_2021.svg/1200px-Visa_2021.svg.png"
                  width={50}
                  height={50}
                  alt="Visa"
                  className="h-8"
                />
              </div>
              <Link href="/payment">
              <button 
                className="w-full rounded-full py-3 font-medium transition duration-200 ease-in-out"
                style={{ 
                  backgroundColor: "#8b4513",
                  color: "#fdf5e6",
                  border: "2px solid #8b4513"
                }}
                >
                Enroll Now →
              </button>
                </Link>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="rounded-lg p-6 shadow-lg" style={{ backgroundColor: "#f1e3d1" }}>
            <h2 className="text-xl font-semibold mb-6" style={{ color: "#8b4513" }}>Quick Contact</h2>
            <form className="space-y-4">
              {["Name", "E-mail", "Topic"].map((placeholder, index) => (
                <input
                  key={index}
                  type={placeholder === "E-mail" ? "email" : "text"}
                  placeholder={placeholder}
                  className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2"
                  style={{ 
                    backgroundColor: "#fdf5e6",
                    borderColor: "#8b4513",
                    color: "#8b4513"
                  }}
                />
              ))}
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2"
                style={{ 
                  backgroundColor: "#fdf5e6",
                  borderColor: "#8b4513",
                  color: "#8b4513"
                }}
              />
              <button
                type="submit"
                className="w-full rounded-full py-3 font-medium transition-colors"
                style={{ 
                  backgroundColor: "#8b4513",
                  color: "#fdf5e6",
                  border: "2px solid #8b4513"
                }}
              >
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsScreen;