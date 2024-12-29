import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Course {
  id: string;
  title: string;
  category: string;
  instructor: string;
  price: number;
  rating: number;
  reviews: number;
  image: string; // Network Image URL
}

interface FilterOption {
  id: string;
  label: string;
  checked: boolean;
}

const CoursePage: React.FC = () => {
  const navigate = useNavigate();

  // Sample course data with network images
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
        "https://media.licdn.com/dms/image/D4D12AQFsK_G3iOWSLg/article-cover_image-shrink_720_1280/0/1702122874916?e=2147483647&v=beta&t=kHnSGyAzDsbfKvxsf5vn31v99QJ1ykXhTOQxapn5vDk", // Replace with actual network image URL
    },
    {
      id: "2",
      title: "Traditional Weaving Techniques",
      category: "Made by Artisans",
      instructor: "Ravi Prakash",
      price: 30.0,
      rating: 4.7,
      reviews: 40,
      image: "https://images.stockcake.com/public/6/7/6/67667592-ce5e-4658-b0e8-fa831e287ca2_large/traditional-weaving-technique-stockcake.jpg", // Replace with actual network image URL
    },
    {
      id: "3",
      title: "Traditional Weaving Techniques",
      category: "Made by Artisans",
      instructor: "Ravi Prakash",
      price: 30.0,
      rating: 4.7,
      reviews: 40,
      image: "https://images.stockcake.com/public/6/7/6/67667592-ce5e-4658-b0e8-fa831e287ca2_large/traditional-weaving-technique-stockcake.jpg", // Replace with actual network image URL
    },
    
    // Add more courses as needed
  ];

  // Filter categories updated for artisan crafts
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

  // Show more functionality for categories
  const [showAllCategories, setShowAllCategories] = useState(false);

  // Filter languages updated for Northeastern states of India
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

  // Show more functionality for languages
  const [showAllLanguages, setShowAllLanguages] = useState(false);

  const [priceOptions, setPriceOptions] = useState<FilterOption[]>([
    { id: "all", label: "All", checked: false },
    { id: "paid", label: "Paid", checked: false },
    { id: "free", label: "Free", checked: false },
  ]);

  return (
    <div className="max-w-7xl">
      <div className="flex gap-6">
        {/* Filters Sidebar */}
        <div className="w-80 bg-gray-50 p-6 rounded-lg">
          {/* Category Section */}
          <div className="mb-8 p-4 border border-gray-200 rounded-lg pl-8">
            <h2 className="text-lg font-semibold mb-4">Category</h2>
            <div className="space-y-3">
              {categories
                .slice(0, showAllCategories ? categories.length : 5)
                .map((category) => (
                  <label
                    key={category.id}
                    className="flex items-center space-x-2"
                  >
                    <input
                      type="checkbox"
                      checked={category.checked}
                      onChange={() => {
                        setCategories(
                          categories.map((c) =>
                            c.id === category.id
                              ? { ...c, checked: !c.checked }
                              : c
                          )
                        );
                      }}
                      className="w-4 h-4 border-gray-300 rounded accent-blue-600"
                    />
                    <span className="text-gray-700">{category.label}</span>
                  </label>
                ))}
            </div>
            {categories.length > 5 && (
              <button
                onClick={() => setShowAllCategories(!showAllCategories)}
                className="text-blue-600 mt-2"
              >
                {showAllCategories ? "Show Less -" : "Show More +"}
              </button>
            )}
          </div>

          {/* Language Section */}
          <div className="mb-8 p-4 border border-gray-200 rounded-lg pl-8">
            <h2 className="text-lg font-semibold mb-4">Language</h2>
            <div className="space-y-3">
              {languages
                .slice(0, showAllLanguages ? languages.length : 5)
                .map((language) => (
                  <label
                    key={language.id}
                    className="flex items-center space-x-2"
                  >
                    <input
                      type="checkbox"
                      checked={language.checked}
                      onChange={() => {
                        setLanguages(
                          languages.map((l) =>
                            l.id === language.id
                              ? { ...l, checked: !l.checked }
                              : l
                          )
                        );
                      }}
                      className="w-4 h-4 border-gray-300 rounded accent-blue-600"
                    />
                    <span className="text-gray-700">{language.label}</span>
                  </label>
                ))}
            </div>
            {languages.length > 5 && (
              <button
                onClick={() => setShowAllLanguages(!showAllLanguages)}
                className="text-blue-600 mt-2"
              >
                {showAllLanguages ? "Show Less -" : "Show More +"}
              </button>
            )}
          </div>

          {/* Paid Section */}
          <div className="mb-8 p-4 border border-gray-200 rounded-lg pl-8">
            <h2 className="text-lg font-semibold mb-4">Paid</h2>
            <div className="space-y-3">
              {priceOptions.map((option) => (
                <label key={option.id} className="flex items-center space-x-2">
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
                    className="w-4 h-4 border-gray-300 rounded accent-blue-600"
                  />
                  <span className="text-gray-700">{option.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Course Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-300"
              >
                <div className="relative p-5 rounded-[5px]">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover rounded-[10px]"
                  />
                </div>
                <div className="px-4 pb-4">
                  <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
                    <span>{course.category}</span>
                    <span className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-4 h-4 text-yellow-500 mr-1"
                      >
                        <path d="M12 2L14.09 8.26L21 9.27L16 14.14L17.45 21.02L12 17.77L6.55 21.02L8 14.14L3 9.27L9.91 8.26L12 2Z" />
                      </svg>
                      ( {course.rating} Reviews)
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
                  <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
                    <span>{course.instructor}</span>
                    <span>{course.price} INR</span>
                  </div>
                  <button
                    className="w-full py-2 mt-3 bg-blue-600 text-white font-semibold text-sm rounded-lg hover:bg-blue-700"
                    onClick={() => navigate("/course-details")} // Navigate to the Course Details page
                  >
                    Enroll Now →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
