"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Category {
  id: string;
  name: string;
  productCount: number;
  imageSrc?: string; 
  isPlaceholder?: boolean;
}

const categories: Category[] = [
  { id: "ac-compressor", name: "A/C COMPRESSOR AND COMPONENT KIT", productCount: 6, imageSrc: "/shop-bg/ac-compressor.webp" },
  { id: "abs-sensor", name: "ABS WHEEL SPEED SENSOR", productCount: 8, imageSrc: "/shop-bg/abs.webp" },
  { id: "alternator", name: "ALTERNATOR", productCount: 12, imageSrc: "/shop-bg/Alternator.webp" },
  { id: "battery", name: "BATTERY", productCount: 9, imageSrc: "/shop-bg/battery.webp" },
  { id: "battery-charger", name: "BATTERY CHARGER", productCount: 15, imageSrc: "/shop-bg/battery-charger.webp" },
  { id: "brake-pads", name: "BREAK PADS", productCount: 14, imageSrc: "/shop-bg/break-pads.webp" },
  { id: "carburetor", name: "CARBURETOR", productCount: 8, imageSrc: "/shop-bg/caborator.jpeg" },
  { id: "exhaust-kit", name: "EXHAUST SYSTEM KIT", productCount: 6, imageSrc: "/shop-bg/exhaust systems kit.jpeg" },
  { id: "floor-mat", name: "FLOOR MAT", productCount: 21, imageSrc: "/shop-bg/floor-mat.webp" },
  { id: "headlight", name: "HEADLIGHT", productCount: 15, imageSrc: "/shop-bg/head-light.webp" },
  { id: "oil-filter", name: "OIL FILTER", productCount: 11, imageSrc: "/shop-bg/oil-filter.webp" },
  { id: "rotors-drums", name: "ROTORS AND DRUMS", productCount: 16, imageSrc: "/shop-bg/rotor.webp" },
  { id: "spark-plug", name: "SPARK PLUG", productCount: 12, imageSrc: "/shop-bg/sparkplug.webp" },
];

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      {/* Container */}
      <main className="grow max-w-7xl w-full mx-auto px-4 sm:px-6 py-12 pt-32">
        {/* Title Section */}
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-[#8B0000] tracking-tight pb-4">
            Shop
          </h1>
          <hr className="border-zinc-800 w-full" />
        </div>

        {/* Product Grid (4 Columns on large screens, responsive down to 1) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {categories.map((category) => (
            <Link 
              href={`/category/${category.id}`} 
              key={category.id}
              className="group bg-white rounded-none overflow-hidden flex flex-col justify-between items-center p-4 transition-transform duration-200 hover:scale-[1.02] h-80 relative"
            >
              {/* Product Image Area */}
              <div className="w-full h-48 relative flex items-center justify-center bg-white">
                {category.isPlaceholder ? (
                  // Vector Placeholder Graphic matching the screenshot's empty item look
                  <div className="w-32 h-32 border border-zinc-300 relative flex items-center justify-center text-zinc-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-16 h-16">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375 text-zinc-400 font-bold" />
                    </svg>
                  </div>
                ) : (
                  // Client Image Frame with dummy paths
                  <div className="w-full h-full relative p-2 flex items-center justify-center">
                    <Image
                      src={category.imageSrc || "/images/placeholder.jpg"}
                      alt={category.name}
                      width={200}
                      height={200}
                      className="object-contain max-h-full max-w-full group-hover:opacity-90"
                      priority={category.isPlaceholder ? false : true}
                    />
                  </div>
                )}
              </div>

              {/* Text Badge Info Container */}
              <div className="w-full text-center bg-white pt-2 pb-1 flex flex-col justify-end min-h-17.5">
                <h3 className="text-sm font-bold text-[#8B0000] tracking-tight line-clamp-2 px-2 uppercase">
                  {category.name}
                </h3>
                <p className="text-xs text-zinc-500 font-medium tracking-wide mt-1 uppercase">
                  {category.productCount} Products
                </p>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* Sticky Bottom Arrow Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-purple-900/90 hover:bg-purple-800 text-white p-3 rounded shadow-lg transition-colors flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
          </svg>
        </button>
      </div>

      {/* Site Footer matching image_fe8664.png */}
      <footer className="w-full bg-black border-t border-yellow-500/60 py-8 px-4 text-center mt-16">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-blue-700 font-medium text-sm md:text-base mb-4">
          <Link href="/return-refund-policy" className="hover:underline">Return and Refund Policy</Link>
          <Link href="/warranties" className="hover:underline">Warranties</Link>
          <Link href="/terms-conditions" className="hover:underline">Terms & conditions</Link>
          <Link href="/shipping-policy" className="hover:underline">Shipping policy</Link>
          <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
        </div>
        <p className="text-gray-300 text-sm md:text-base tracking-wide font-light">
          Copyright © 2026 <span className="font-normal">securitysolutionsllc.com</span> |
        </p>
      </footer>
    </div>
  );
}