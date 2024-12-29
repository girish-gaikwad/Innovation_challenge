import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  tags: string[]; // Removed this from display
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
  const navigate = useNavigate();
  const handleEnrollClick = () => {
    navigate('/payment'); // Navigates to the payment page
  };

  const courseDetails: CourseDetails = {
    id:'1',
    title: "Handcrafted Pottery",
    instructor: "Rita Sharma",
    category: "Artisan Handcrafts",
    enrolledStudents: 320,
    rating: 4.9,
    reviews: 32,
    date: "15/11/2024",
    tags: [], // Tags removed
    description:
      "Learn the art of pottery, shaping clay into beautiful, handmade pieces with the guidance of an experienced instructor.",
    fullPrice: 25.0,
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
    <div className="max-w-7xl mx-auto p-4">
      {" "}
      {/* Reduced padding here */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Section */}
        <div className="lg:col-span-2">
          {/* Hero Banner */}
          <div className="relative rounded-lg overflow-hidden mb-4">
            <div className=" p-0">
              <img
                src="https://media.licdn.com/dms/image/D4D12AQFsK_G3iOWSLg/article-cover_image-shrink_720_1280/0/1702122874916?e=2147483647&v=beta&t=kHnSGyAzDsbfKvxsf5vn31v99QJ1ykXhTOQxapn5vDk"
                alt="Course instructor"
                className="  h-[400px] w-[800px]" // Increased height further
              />
            </div>
          </div>

          {/* Course Info */}
          <div className="flex flex-wrap gap-6 mb-4 items-center">
            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
              {courseDetails.category}
            </span>
            <span className="text-gray-600">{courseDetails.date}</span>
            <span className="text-gray-600">
              {courseDetails.enrolledStudents} students Enrolled
            </span>
            <div className="flex items-center">
              <span className="text-yellow-400 mr-1">★</span>
              <span>{courseDetails.rating}</span>
              <span className="text-gray-500 ml-1">
                ({courseDetails.reviews} Reviews)
              </span>
            </div>
            <span className="text-gray-600">By {courseDetails.instructor}</span>
          </div>

          <h1 className="text-2xl font-bold text-indigo-600 mb-6">
            {courseDetails.title}
          </h1>

          <div className="mb-8">
            <h2 className="font-semibold mb-2">Description:</h2>
            <p className="text-gray-600">{courseDetails.description}</p>
          </div>

          {/* Modules */}
          <div className="space-y-4">
            {modules.map((module) => (
              <div
                key={module.id}
                className="bg-gray-100 rounded-lg p-4 flex items-center justify-between cursor-pointer"
                onClick={() =>
                  setSelectedModule(
                    selectedModule === module.id ? null : module.id
                  )
                }
              >
                <div>
                  <span className="font-medium">Module:{module.id}</span>
                  <h3 className="text-gray-600">{module.title}</h3>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-indigo-600 font-semibold">
                    ${module.price.toFixed(2)}
                  </span>
                  <svg
                    className={`w-5 h-5 transition-transform ${
                      selectedModule === module.id ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
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
          <div className="bg-white rounded-lg border p-6 mb-4">
            <h2 className="text-lg font-semibold mb-2 text-center text-gray-800">
              Full Course Fees:
            </h2>
            <p className="text-indigo-600 text-2xl font-bold mb-6 text-center">
              ${courseDetails.fullPrice.toFixed(2)}
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-gray-500 flex-1">Level:</span>
                <span className="separator mx-2 text-gray-800">:</span>
                <span className="text-indigo-600 font-medium flex-1 text-right">
                  {courseDetails.level}
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-500 flex-1">Duration:</span>
                <span className="separator mx-2 text-gray-800">:</span>
                <span className="font-medium text-gray-800 flex-1 text-right">
                  {courseDetails.duration}
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-500 flex-1">Modules:</span>
                <span className="separator mx-2 text-gray-800">:</span>
                <span className="font-medium text-gray-800 flex-1 text-right">
                  {courseDetails.modules} modules
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-500 flex-1">Certification:</span>
                <span className="separator mx-2 text-gray-800">:</span>
                <span className="text-green-600 font-medium flex-1 text-right">
                  {courseDetails.certification}
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-500 flex-1">Quiz:</span>
                <span className="separator mx-2 text-gray-800">:</span>
                <span className="font-medium text-gray-800 flex-1 text-right">
                  {courseDetails.quizzes} Quizzes
                </span>
              </div>
            </div>

            <div className="mt-6 text-center">
              <h3 className="font-semibold mb-4 text-gray-800">
                Payment Details:
              </h3>
              <div className="flex justify-center gap-6 mb-6">
                <img
                  src="https://static.cdnlogo.com/logos/g/93/google.svg"
                  alt="Google Pay"
                  className="h-8"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/800px-Mastercard_2019_logo.svg.png"
                  alt="Mastercard"
                  className="h-8"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Visa_2021.svg/1200px-Visa_2021.svg.png"
                  alt="Visa"
                  className="h-8"
                />
              </div>
              <button 
      className="w-full bg-white text-indigo-600 border border-indigo-600 rounded-full py-3 font-medium hover:bg-indigo-600 hover:text-white transition duration-200 ease-in-out"
      onClick={handleEnrollClick} // Calls the handleEnrollClick function
    >
      Enroll Now →
    </button>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="bg-white rounded-lg border p-6">
            <h2 className="text-lg font-semibold mb-6">Quick Contact</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 rounded-lg border bg-gray-50"
              />
              <input
                type="email"
                placeholder="E-mail"
                className="w-full p-3 rounded-lg border bg-gray-50"
              />
              <input
                type="text"
                placeholder="Topic"
                className="w-full p-3 rounded-lg border bg-gray-50"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full p-3 rounded-lg border bg-gray-50"
              />
              <button
                type="submit"
                className="w-full bg-white text-indigo-600 border border-indigo-600 rounded-full py-3 font-medium hover:bg-indigo-600 hover:text-white transition-colors"
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
