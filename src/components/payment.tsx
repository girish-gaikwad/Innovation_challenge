import { useState } from "react";
import DatePicker from "react-datepicker"; // Make sure to install react-datepicker
import "react-datepicker/dist/react-datepicker.css"; // Import styles for the date picker

const PaymentSuccess = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 flex flex-col items-center transform animate-fadeIn">
        <div className="w-16 h-16 relative mb-4">
          {/* Outer Circle Animation */}
          <div className="animate-circle absolute inset-0 border-4 border-green-500 rounded-full"></div>

          {/* Checkmark */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-8 border-r-4 border-b-4 border-green-500 transform rotate-45 translate-x-[10%] translate-y-[-10%]"></div>
          </div>
        </div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Payment Successful!
        </h2>
        <p className="text-gray-600 mb-6">
          Your transaction has been completed
        </p>
        <button
          onClick={onClose}
          className="text-blue-600 hover:text-blue-700 font-medium"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

const PaymentScreen = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    cardHolderName: "",
    cardNumber: "",
    cvv: "",
    date: new Date(), // Default to today's date
  });

  const handleCardSelection = (card) => {
    setSelectedCard(card);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, date });
  };

  const validateForm = () => {
    const { cardHolderName, cardNumber, cvv, date } = formData;
    if (!cardHolderName || !cardNumber || !cvv || !selectedCard || !date) {
      alert("Please fill in all the fields and select a card.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setShowSuccess(true);
    }
  };

  const cardImages = [
    {
      id: "paypal",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQG2oQemAc1z7LPGv_hiCn3dfza6xSgupJlA&s",
    },
    {
      id: "credit",
      image:
        "https://www.skydo.com/_next/image?url=https%3A%2F%2Fskydo-assets.s3.ap-south-1.amazonaws.com%2FAmerican_Express_Blue_Business_Plus_Credit_Card_0ab64dc432.jpg&w=3840&q=75",
    },
    {
      id: "mastercard",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/800px-Mastercard_2019_logo.svg.png",
    },
    { id: "gpay", image: "https://static.cdnlogo.com/logos/g/93/google.svg" },
    {
      id: "visa",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Visa_2021.svg/1200px-Visa_2021.svg.png",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto pt-8">
      <div className="px-8">
        <h1 className="text-2xl font-bold text-[#1A1A1A]">Payment</h1>
        <p className="text-gray-500 text-sm mt-1">
          Select the payment by clicking the logo
        </p>

        <div className="mt-8">
          <h2 className="text-lg font-semibold text-[#1A1A1A] mb-4">Card</h2>
          <div className="grid grid-cols-5 gap-8">
            {" "}
            {/* Reduced columns for larger container */}
            {cardImages.map((card) => (
              <div
                key={card.id}
                className={`aspect-square border rounded-lg flex items-center justify-center cursor-pointer ${
                  selectedCard === card.id
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200"
                }`}
                onClick={() => handleCardSelection(card.id)}
              >
                <img
                  src={card.image}
                  alt={`${card.id} logo`}
                  className="h-20 w-20 object-contain" // Increased image size
                />
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-12">
          <h2 className="text-lg font-semibold text-[#1A1A1A] mb-6">
            Payment Details
          </h2>

          <div className="space-y-4">
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                <span className="text-red-500 mr-1">*</span>
                Card Holder Name
              </label>
              <input
                type="text"
                name="cardHolderName"
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none"
                value={formData.cardHolderName}
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                <span className="text-red-500 mr-1">*</span>
                Card Number
              </label>
              <input
                type="text"
                name="cardNumber"
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none"
                value={formData.cardNumber}
                onChange={handleInputChange}
                required
                placeholder="Enter your card number"
              />
            </div>

            <div className="flex justify-center space-x-4 mt-4">
              <div className="flex-1">
                <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                  <span className="text-red-500 mr-1">*</span>
                  Expiration Date
                </label>
                <DatePicker
                  selected={formData.date}
                  onChange={handleDateChange}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  dateFormat="MM/yyyy"
                  showMonthYearPicker
                  required
                />
              </div>

              <div className="flex-1">
                <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                  <span className="text-red-500 mr-1">*</span>
                  CVV
                </label>
                <input
                  type="text"
                  name="cvv"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter CVV"
                />
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className="flex justify-end mt-8 px-8 py-4 border-t">
        <button
          onClick={handleSubmit}
          className="bg-[#4F46E5] text-white font-medium px-8 py-2 rounded-lg hover:bg-[#4338CA] transition-colors"
        >
          NEXT
        </button>
      </div>

      <PaymentSuccess
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
      />

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes circleAnimation {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes checkAnimation {
          from {
            transform: scale(0.5) rotate(45deg);
            opacity: 0;
          }
          to {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }

        .animate-circle {
          animation: circleAnimation 0.5s ease-out forwards;
        }

        .animate-check {
          animation: checkAnimation 0.5s ease-out 0.3s forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default PaymentScreen;
