'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Loader2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-[#fdf5e6] transition-all duration-300">
      {/* Header Section */}
      <div className="bg-[#8b4513] text-white py-6 px-4 animate-fade-in">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4 animate-slide-down">Contact SaptaBhumi</h1>
          <p className="text-white/90 animate-slide-up">Get in touch with us for any queries about Northeast Indian artisanal crafts</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-[#8b4513]/20 bg-[#f1e3d1] hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-[#8b4513]">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4 hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-[#8b4513] p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-[#fdf5e6]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#8b4513]">Our Location</h3>
                    <p className="text-[#8b4513]/70 mt-1">
                      Sathyamangalam, Erode<br />
                      Tamilnadu, India - 638401
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-[#8b4513] p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-[#fdf5e6]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#8b4513]">Email Us</h3>
                    <p className="text-[#8b4513]/70 mt-1">contact@saptabhumi.com<br />support@saptabhumi.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-[#8b4513] p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-[#fdf5e6]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#8b4513]">Call Us</h3>
                    <p className="text-[#8b4513]/70 mt-1">+91 123 456 7890<br />+91 098 765 4321</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-[#8b4513] p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-[#fdf5e6]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#8b4513]">Business Hours</h3>
                    <p className="text-[#8b4513]/70 mt-1">
                      Monday - Saturday: 10:00 AM - 7:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border-[#8b4513]/20 bg-white hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-[#8b4513]">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <label htmlFor="name" className="block text-sm font-medium text-[#8b4513]">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-[#8b4513]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8b4513]/20 bg-[#fdf5e6] transition-all duration-300"
                      required
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="email" className="block text-sm font-medium text-[#8b4513]">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-[#8b4513]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8b4513]/20 bg-[#fdf5e6] transition-all duration-300"
                      required
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="subject" className="block text-sm font-medium text-[#8b4513]">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-[#8b4513]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8b4513]/20 bg-[#fdf5e6] transition-all duration-300"
                      required
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="message" className="block text-sm font-medium text-[#8b4513]">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-[#8b4513]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8b4513]/20 bg-[#fdf5e6] transition-all duration-300"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#8b4513] hover:bg-[#8b4513]/90 text-white py-3 px-4 rounded-md transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>

                {showSuccess && (
                  <Alert className="mt-4 bg-green-100 border-green-500">
                    <AlertDescription className="text-green-700">
                      Thank you for your message! We&apos;ll get back to you soon.
                    </AlertDescription>
                  </Alert>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}