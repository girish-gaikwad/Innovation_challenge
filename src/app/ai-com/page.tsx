'use client';

import { useState } from 'react';
import { Upload, ImagePlus, X, AlertCircle, Loader2, Tags, Package, DollarSign, Palette, ShoppingBag, Info } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import Image from 'next/image';


// Types and Interfaces
interface Category {
    id: string;
    name: string;
  }
  
  interface RecentUpload {
    id: number;
    name: string;
    status: 'Published' | 'Draft' | 'Under Review';
    date: string;
  }
  
  interface ProductDetails {
    productName: string;
    description: string;
    category: string;
    materials: string[];
    dimensions: string;
    weight: string;
    careInstructions: string;
  }
  
  interface PricingState {
    price: string;
    discount: boolean;
    stock: string;
  }
  
 
export default function ProductUploadPage() {
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [uploadProgress, setUploadProgress] = useState<number>(0);
    const [productDetails, setProductDetails] = useState<ProductDetails | null>(null);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [selectedCategory, setSelectedCategory] = useState<string>('handicrafts');
    const [pricing, setPricing] = useState<PricingState>({ 
      price: '', 
      discount: false, 
      stock: '' 
    });

    const categories: Category[] = [
        { id: 'handicrafts', name: 'Handicrafts' },
        { id: 'textiles', name: 'Textiles' },
        { id: 'jewelry', name: 'Jewelry' },
        { id: 'pottery', name: 'Pottery' }
    ];
    
    const recentUploads: RecentUpload[] = [
        { id: 1, name: 'Bamboo Basket', status: 'Published', date: '2024-12-29' },
        { id: 2, name: 'Traditional Necklace', status: 'Draft', date: '2024-12-28' },
        { id: 3, name: 'Clay Pottery Set', status: 'Under Review', date: '2024-12-27' }
    ];

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement> | File): void => {
        const file = event instanceof File ? event : event?.target?.files?.[0];
        if (file) {
            setSelectedImage(file);
            const url = URL.createObjectURL(file);
            setPreviewUrl(url);
            simulateUploadProgress();
        }
    };

    const simulateUploadProgress = (): void => {
        setUploadProgress(0);
        const interval = setInterval(() => {
            setUploadProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 5;
            });
        }, 100);
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>): void => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>): void => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>): void => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files[0];
        handleImageUpload(file);
    };

    const generateProductDetails = async (): Promise<void> => {
        if (!selectedImage) return;

        setIsLoading(true);
        try {
            // Simulated API call
            await new Promise(resolve => setTimeout(resolve, 2000));
            const mockResponse: ProductDetails = {
                productName: 'Traditional Handwoven Naga Shawl',
                description: 'This exquisite handwoven shawl showcases the rich cultural heritage of Nagaland. Created by skilled artisans using traditional techniques passed down through generations, this piece features intricate geometric patterns in vibrant colors that tell stories of the region\'s history.',
                category: 'Traditional Wear',
                materials: ['Pure Wool', 'Natural Dyes'],
                dimensions: '2m x 1m',
                weight: '500g',
                careInstructions: 'Dry clean only'
            };

            setProductDetails(mockResponse);
        } catch (error) {
            console.error('Error generating product details:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const removeImage = (): void => {
        if (previewUrl) {
            URL.revokeObjectURL(previewUrl);
        }
        setSelectedImage(null);
        setPreviewUrl('');
        setUploadProgress(0);
    };
  return (
    <div className="min-h-screen bg-[#f1e3d1] py-8 px-4">
      <div className="max-w-6xl mx-auto space-y-5">
        <header className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">
            AI Assisted E-commerce
          </h1>
          <p className="text-lg text-[#8b4513]">
            Generate product details with AI
          </p>
        </header>
        {/* Header Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { icon: Package, label: 'Total Products', value: '124' },
            { icon: ShoppingBag, label: 'Active Listings', value: '98' },
            { icon: Tags, label: 'Categories', value: '12' },
            { icon: DollarSign, label: 'Total Sales', value: '₹45,670' }
          ].map((stat, idx) => (
            <Card key={idx} className="border-[#8b4513]/20 bg-white hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-full bg-[#8b4513]/10">
                    <stat.icon className="h-6 w-6 text-[#8b4513]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#8b4513]/70">{stat.label}</p>
                    <p className="text-2xl font-semibold text-[#8b4513]">{stat.value}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="border-[#8b4513]/20 bg-white">
              <CardHeader>
                <CardTitle className="text-xl text-[#8b4513]">Product Category</CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                  className="space-y-3"
                >
                  {categories.map((category) => (
                    <div key={category.id} className="flex items-center space-x-2">
                      <RadioGroupItem
                        value={category.id}
                        id={category.id}
                        className="border-[#8b4513]"
                      />
                      <Label htmlFor={category.id} className="text-[#8b4513]">{category.name}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
            </Card>

            <Card className="border-[#8b4513]/20 bg-white">
              <CardHeader>
                <CardTitle className="text-xl text-[#8b4513]">Pricing & Stock</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-[#8b4513]">Price (₹)</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-[#8b4513]/50" />
                    <input
                      type="number"
                      value={pricing.price}
                      onChange={(e) => setPricing(prev => ({ ...prev, price: e.target.value }))}
                      className="pl-10 w-full px-4 py-2 border border-[#8b4513]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8b4513]/20"
                      placeholder="0.00"
                    />
                  </div>
                </div>
                
                <div>
                  <Label className="text-[#8b4513]">Stock Quantity</Label>
                  <input
                    type="number"
                    value={pricing.stock}
                    onChange={(e) => setPricing(prev => ({ ...prev, stock: e.target.value }))}
                    className="w-full px-4 py-2 border border-[#8b4513]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8b4513]/20"
                    placeholder="0"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <Label className="text-[#8b4513]">Enable Discount</Label>
                  <Switch
                    checked={pricing.discount}
                    onCheckedChange={(checked) => setPricing(prev => ({ ...prev, discount: checked }))}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Upload Area */}
          <div className="lg:col-span-2 space-y-6">
            <Tabs defaultValue="upload" className="w-full">
              <TabsList className="w-full bg-[#8b4513]/10">
                <TabsTrigger value="upload" className="flex-1">Upload</TabsTrigger>
                <TabsTrigger value="preview" className="flex-1">Preview</TabsTrigger>
                <TabsTrigger value="history" className="flex-1">History</TabsTrigger>
              </TabsList>

              <TabsContent value="upload">
                <Card className="border-[#8b4513]/20 bg-white">
                  <CardHeader>
                    <CardTitle className="text-2xl font-semibold text-[#8b4513] flex items-center gap-2">
                      <Upload className="h-6 w-6" />
                      Upload Your Product
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {/* Original upload content remains the same */}
                    <div className="space-y-6">
                      <div
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        className={`relative border-2 border-dashed rounded-lg p-8 flex flex-col items-center justify-center min-h-[300px] transition-all duration-300 ${
                          isDragging 
                            ? 'border-[#8b4513] bg-[#8b4513]/10' 
                            : 'border-[#8b4513]/20 hover:border-[#8b4513]/50'
                        }`}
                      >
                        {!previewUrl ? (
                          <div className="text-center">
                            <ImagePlus className="mx-auto h-12 w-12 text-[#8b4513]/50 mb-4" />
                            <p className="text-[#8b4513] mb-2">Drag and drop your image here or</p>
                            <input
                              type="file"
                              accept="image/*"
                              onChange={handleImageUpload}
                              className="mb-4 block w-full text-sm text-[#8b4513]
                                file:mr-4 file:py-2 file:px-4
                                file:rounded-md file:border-0
                                file:text-sm file:font-semibold
                                file:bg-[#8b4513] file:text-white
                                hover:file:bg-[#8b4513]/90
                                transition-all duration-300"
                            />
                          </div>
                        ) : (
                          <div className="relative w-full">
                            <button
                              onClick={removeImage}
                              className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors duration-300"
                            >
                              <X className="h-4 w-4" />
                            </button>
                            <Image
                              src={previewUrl}
                              alt="Product preview"
                              width={800}
                              height={800}
                              className="max-w-full h-auto rounded-lg shadow-lg mx-auto animate-fade-in"
                            />
                            {uploadProgress < 100 && (
                              <div className="mt-4">
                                <Progress value={uploadProgress} className="h-2 bg-[#8b4513]/20" />
                                <p className="text-sm text-[#8b4513] mt-2">
                                  Uploading... {uploadProgress}%
                                </p>
                              </div>
                            )}
                          </div>
                        )}
                      </div>

                      <button
                        onClick={generateProductDetails}
                        disabled={!selectedImage || isLoading}
                        className={`w-full py-3 px-4 rounded-md text-white font-medium
                          ${!selectedImage || isLoading 
                            ? 'bg-gray-400 cursor-not-allowed' 
                            : 'bg-[#8b4513] hover:bg-[#8b4513]/90'
                          } transition-all duration-300`}
                      >
                        {isLoading ? (
                          <div className="flex items-center justify-center">
                            <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5" />
                            Generating Details...
                          </div>
                        ) : (
                          <div className="flex items-center justify-center">
                            <AlertCircle className="w-5 h-5 mr-2" />
                            Generate Product Details
                          </div>
                        )}
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="preview">
                <Card className="border-[#8b4513]/20 bg-white">
                  <CardHeader>
                    <CardTitle className="text-2xl font-semibold text-[#8b4513]">Product Preview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {previewUrl ? (
                      <div className="space-y-6">
                        <Image src={previewUrl} width={800} height={800} alt="Preview" className="rounded-lg shadow-lg max-w-full h-auto" />
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <h3 className="font-semibold text-[#8b4513]">Selected Category</h3>
                            <p className="text-[#8b4513]/80">{categories.find(c => c.id === selectedCategory)?.name}</p>
                          </div>
                          <div>
                            <h3 className="font-semibold text-[#8b4513]">Price</h3>
                            <p className="text-[#8b4513]/80">₹{pricing.price || '0.00'}</p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-12 text-[#8b4513]/70">
                        <Info className="h-12 w-12 mx-auto mb-4" />
                        <p>Upload an image to see the preview</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="history">
                <Card className="border-[#8b4513]/20 bg-white">
                  <CardHeader>
                    <CardTitle className="text-2xl font-semibold text-[#8b4513]">Recent Uploads</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentUploads.map((upload) => (
                        <div
                          key={upload.id}
                          className="flex items-center justify-between p-4 rounded-lg bg-[#8b4513]/5 hover:bg-[#8b4513]/10 transition-colors duration-300"
                        >
                          <div>
                            <h3 className="font-medium text-[#8b4513]">{upload.name}</h3>
                            <p className="text-sm text-[#8b4513]/70">{upload.date}</p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-sm ${
                            upload.status === 'Published' ? 'bg-green-100 text-green-800' :
                            upload.status === 'Draft' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {upload.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {productDetails && (
              <Card className="border-[#8b4513]/20 bg-white animate-slide-up">
                <CardHeader>
                <CardTitle className="text-2xl font-semibold text-[#8b4513] flex items-center gap-2">
                    <Palette className="h-6 w-6" />
                    Generated Product Details
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h3 className="font-semibold text-[#8b4513]">Product Name</h3>
                        <p className="text-[#8b4513]/80">{productDetails.productName}</p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-[#8b4513]">Category</h3>
                        <p className="text-[#8b4513]/80">{productDetails.category}</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-semibold text-[#8b4513]">Description</h3>
                      <p className="text-[#8b4513]/80 leading-relaxed">
                        {productDetails.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h3 className="font-semibold text-[#8b4513]">Materials</h3>
                        <ul className="list-disc list-inside text-[#8b4513]/80">
                          {productDetails.materials.map((material, index) => (
                            <li key={index}>{material}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-[#8b4513]">Specifications</h3>
                        <p className="text-[#8b4513]/80">Dimensions: {productDetails.dimensions}</p>
                        <p className="text-[#8b4513]/80">Weight: {productDetails.weight}</p>
                      </div>
                    </div>

                    <Alert className="bg-[#f1e3d1] border-[#8b4513]">
                      <AlertDescription className="text-[#8b4513] flex items-center gap-2">
                        <Info className="h-4 w-4" />
                        Care Instructions: {productDetails.careInstructions}
                      </AlertDescription>
                    </Alert>

                    <div className="flex justify-end space-x-4">
                      <button
                        className="px-4 py-2 border border-[#8b4513] text-[#8b4513] rounded-md hover:bg-[#8b4513]/10 transition-colors duration-300"
                      >
                        Save as Draft
                      </button>
                      <button
                        className="px-4 py-2 bg-[#8b4513] text-white rounded-md hover:bg-[#8b4513]/90 transition-colors duration-300"
                      >
                        Publish Product
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}