import React, { useState, useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Slider } from '../../ui/Slider';
import { Checkbox } from '../../ui/Checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../ui/Select';
import { Button } from '../../ui/Button';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import FloatingChatButton from '../components/FloatingChatButton';

export function Layout({ children, showSidebar = false, sidebarContent }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [priceRange, setPriceRange] = useState([50, 500]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const defaultSidebarContent = (
    <>
      <div className="mb-6">
        <h3 className="font-semibold text-lg mb-3">Categories</h3>
        <div className="space-y-2">
          {["Winter", "Leather", "Denim", "Rain", "Sport"].map((category) => (
            <div key={category} className="flex items-center">
              <Checkbox id={`category-${category.toLowerCase()}`} />
              <label
                htmlFor={`category-${category.toLowerCase()}`}
                className="ml-2 text-sm font-medium text-gray-700 cursor-pointer"
              >
                {category} Jackets
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold text-lg mb-3">Price Range</h3>
        <Slider
          value={priceRange}
          min={0}
          max={1000}
          step={10}
          onValueChange={setPriceRange}
          className="my-6"
        />
        <div className="flex justify-between text-sm">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold text-lg mb-3">Sort By</h3>
        <Select defaultValue="newest">
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select sort order" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Newest First</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
            <SelectItem value="popular">Popularity</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold text-lg mb-3">Brands</h3>
        <div className="space-y-2">
          {["North Face", "Columbia", "Patagonia", "Adidas", "Nike"].map((brand) => (
            <div key={brand} className="flex items-center">
              <Checkbox id={`brand-${brand.toLowerCase().replace(' ', '-')}`} />
              <label
                htmlFor={`brand-${brand.toLowerCase().replace(' ', '-')}`}
                className="ml-2 text-sm font-medium text-gray-700 cursor-pointer"
              >
                {brand}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="font-semibold text-lg mb-3">Size</h3>
        <div className="grid grid-cols-4 gap-2">
          {["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL"].map((size) => (
            <Button
              key={size}
              variant="outline"
              className="h-10 w-full"
            >
              {size}
            </Button>
          ))}
        </div>
      </div>

      <Button className="w-full mt-4">Apply Filters</Button>
    </>
  );

  return (
    <div className="min-h-screen flex flex-col bg-background transition-colors duration-300">
      <Navbar />
      <main className="flex-1 flex relative">
        {showSidebar && (
          <>
            <aside
              className={`
                fixed md:static
                z-30 bg-white border-r border-gray-100
                transition-all duration-300 ease-in-out
                ${sidebarOpen ? 'w-full md:w-64 opacity-100' : 'w-0 md:w-0 opacity-0'}
                h-[calc(100vh-4rem)] md:h-auto
                overflow-hidden
              `}
            >
              <div className="p-4 h-full overflow-y-auto">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-bold text-xl">Filters</h2>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSidebarOpen(false)}
                    className="md:hidden transition-transform hover:scale-105"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                </div>
                <div>
                  {sidebarContent || defaultSidebarContent}
                </div>
              </div>
            </aside>
            {!sidebarOpen && (
              <Button
                variant="outline"
                size="icon"
                className="hidden md:flex fixed left-0 top-1/2 transform -translate-y-1/2 z-40 
                  shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110
                  bg-white hover:bg-gray-50"
                onClick={() => setSidebarOpen(true)}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            )}
          </>
        )}
        <div
          className={`
            flex-1 container mx-auto px-4 py-8
            transition-all duration-500 ease-in-out
            ${showSidebar ? (sidebarOpen ? 'md:ml-0 blur-none' : 'md:ml-0') : ''}
            ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
          `}
        >
          {children}
        </div>
      </main>
      <Footer />
      <FloatingChatButton />
    </div>
  );
}
