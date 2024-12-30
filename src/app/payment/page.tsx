"use client";
import Image from "next/image";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PaymentSuccess = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50" style={{ backgroundColor: 'rgba(139, 69, 19, 0.5)' }}>
      <div className="rounded-2xl p-8 flex flex-col items-center transform animate-fadeIn" style={{ backgroundColor: '#fdf5e6' }}>
        <div className="w-16 h-16 relative mb-4">
          {/* Outer Circle Animation */}
          <div className="animate-circle absolute inset-0 border-4 rounded-full" style={{ borderColor: '#8b4513' }}></div>

          {/* Checkmark */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-8 transform rotate-45 translate-x-[10%] translate-y-[-10%]"
              style={{ borderRight: '4px solid #8b4513', borderBottom: '4px solid #8b4513' }}></div>
          </div>
        </div>
        <h2 className="text-xl font-semibold mb-2" style={{ color: '#8b4513' }}>
          Payment Successful!
        </h2>
        <p className="mb-6" style={{ color: '#8b4513' }}>
          Your transaction has been completed
        </p>
        <button
          onClick={onClose}
          className="font-medium hover:opacity-80 transition-opacity"
          style={{ color: '#8b4513' }}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

type FormData = {
  cardHolderName: string;
  cardNumber: string;
  cvv: string;
  date: Date;
  [key: string]: string | Date; // Add an index signature here
};

const PaymentScreen = () => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null); const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    cardHolderName: "",
    cardNumber: "",
    cvv: "",
    date: new Date(),
  });

  const handleCardSelection = (card: string) => {
    setSelectedCard(card);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date: Date) => {
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setShowSuccess(true);
    }
  };

  const cardImages = [
    {
      id: "paypal",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQG2oQemAc1z7LPGv_hiCn3dfza6xSgupJlA&s",
    },
    {
      id: "credit",
      image: "https://www.skydo.com/_next/image?url=https%3A%2F%2Fskydo-assets.s3.ap-south-1.amazonaws.com%2FAmerican_Express_Blue_Business_Plus_Credit_Card_0ab64dc432.jpg&w=3840&q=75",
    },
    {
      id: "mastercard",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/800px-Mastercard_2019_logo.svg.png",
    },
    {
      id: "gpay",
      image: "https://static.cdnlogo.com/logos/g/93/google.svg"
    },
    {
      id: "visa",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Visa_2021.svg/1200px-Visa_2021.svg.png",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto mt-2 rounded-lg shadow-lg pt-8" style={{ backgroundColor: '#fdf5e6' }}>
      <div className="px-8">
        <h1 className="text-2xl font-bold" style={{ color: '#8b4513' }}>Payment</h1>
        <p className="text-sm mt-1" style={{ color: '#8b4513' }}>
          Select the payment by clicking the logo
        </p>

        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4" style={{ color: '#8b4513' }}>Card</h2>
          <div className="grid grid-cols-5 gap-8">
            {cardImages.map((card) => (
              <div
                key={card.id}
                className={`aspect-square rounded-lg flex items-center justify-center cursor-pointer shadow-md transition-all duration-300 hover:shadow-lg ${selectedCard === card.id ? 'bg-opacity-20' : 'bg-opacity-10'
                  }`}
                style={{
                  backgroundColor: selectedCard === card.id ? '#8b4513' : '#f1e3d1',
                  border: `2px solid ${selectedCard === card.id ? '#8b4513' : '#f1e3d1'}`
                }}
                onClick={() => handleCardSelection(card.id)}
              >
                <Image
                  src={card.image}
                  alt={`${card.id} logo`}
                  width={50}
                  height={50}
                  className="h-20 w-20 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-12">
          <h2 className="text-lg font-semibold mb-6" style={{ color: '#8b4513' }}>
            Payment Details
          </h2>

          <div className="space-y-4">
            {[
              { label: "Card Holder Name", name: "cardHolderName" },
              { label: "Card Number", name: "cardNumber", placeholder: "Enter your card number" }
            ].map((field) => (
              <div key={field.name}>
                <label className="flex items-center text-sm font-medium mb-1" style={{ color: '#8b4513' }}>
                  <span className="text-red-500 mr-1">*</span>
                  {field.label}
                </label>
                <input
                  type="text"
                  name={field.name}
                  className="w-full p-3 rounded-lg outline-none"
                  style={{
                    backgroundColor: '#f1e3d1',
                    border: '2px solid #8b4513',
                    color: '#8b4513'
                  }}
                  value={
                    typeof formData[field.name] === 'object' && formData[field.name] instanceof Date
                      ? formData[field.name].toLocaleDateString()
                      : formData[field.name]
                  }                  placeholder={field.placeholder}
                  required
                />
              </div>
            ))}

            <div className="flex justify-center space-x-4 mt-4">
              <div className="flex-1">
                <label className="flex items-center text-sm font-medium mb-1" style={{ color: '#8b4513' }}>
                  <span className="text-red-500 mr-1">*</span>
                  Expiration Date
                </label>
                <DatePicker
                  selected={formData.date}
                  onChange={handleDateChange}
                  className="w-full p-3 rounded-lg outline-none"
                  style={{
                    backgroundColor: '#f1e3d1',
                    border: '2px solid #8b4513',
                    color: '#8b4513'
                  }}
                  dateFormat="MM/yyyy"
                  showMonthYearPicker
                  required
                />
              </div>

              <div className="flex-1">
                <label className="flex items-center text-sm font-medium mb-1" style={{ color: '#8b4513' }}>
                  <span className="text-red-500 mr-1">*</span>
                  CVV
                </label>
                <input
                  type="text"
                  name="cvv"
                  className="w-full p-3 rounded-lg outline-none"
                  style={{
                    backgroundColor: '#f1e3d1',
                    border: '2px solid #8b4513',
                    color: '#8b4513'
                  }}
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

      <div className="flex justify-end mt-8 px-8 py-4" style={{ borderTop: '1px solid #8b4513' }}>
        <button
          onClick={handleSubmit}
          className="font-medium px-8 py-2 rounded-lg transition-all duration-300 hover:opacity-90"
          style={{
            backgroundColor: '#8b4513',
            color: '#fdf5e6'
          }}
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