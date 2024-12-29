'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-[#F5F2EA]">
      {/* Header Section */}
      <div className="bg-[#1E4141] text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">Contact SaptaBhumi</h1>
          <p className="text-white/80">Get in touch with us for any queries about Northeast Indian artisanal crafts</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold text-[#1E4141] mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-[#1E4141] p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-[#1E4141]">Our Location</h3>
                  <p className="text-[#1E4141]/70 mt-1">
                    Sathyamangalam,Erode<br />
                    Tamilnadu,India -638401
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#1E4141] p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-[#1E4141]">Email Us</h3>
                  <p className="text-[#1E4141]/70 mt-1">contact@saptabhumi.com<br />support@saptabhumi.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#1E4141] p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-[#1E4141]">Call Us</h3>
                  <p className="text-[#1E4141]/70 mt-1">+91 123 456 7890<br />+91 098 765 4321</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#1E4141] p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-[#1E4141]">Business Hours</h3>
                  <p className="text-[#1E4141]/70 mt-1">
                    Monday - Saturday: 10:00 AM - 7:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-[#1E4141]/10">
            <h2 className="text-2xl font-semibold text-[#1E4141] mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#1E4141] mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-[#1E4141]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E4141]/20"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#1E4141] mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-[#1E4141]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E4141]/20"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[#1E4141] mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-[#1E4141]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E4141]/20"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#1E4141] mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-[#1E4141]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E4141]/20"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#1E4141] hover:bg-[#1E4141]/90 text-white py-3 px-4 rounded-md transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}