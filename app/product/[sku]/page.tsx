"use client";

import React, { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categoryProductsData } from "@/scrapper/products";
import { useCart } from "@/context/CartContext";

interface PageProps {
  params: Promise<{
    sku: string; // The dynamic segment folder name
  }>;
}

export default function ProductDetailPage({ params }: PageProps) {
  // Use React.use() to unwrap the async params in a client component
  const resolvedParams = use(params);
  const productSku = resolvedParams.sku;

  let foundProduct = null;
  let parentCategory = null;

  // Locate the product in static data inventory
  for (const category of Object.values(categoryProductsData)) {
    const match = category.products.find((p) => p.id === productSku);
    if (match) {
      foundProduct = match;
      parentCategory = category;
      break;
    }
  }

  if (!foundProduct || !parentCategory) {
    notFound();
  }

  // Fallback image collection if multiple images aren't present in static array
  const galleryImages = foundProduct.images || [
    foundProduct.imageSrc,
    "/images/products/alt-view1.jpg",
    "/images/products/alt-view2.jpg",
  ];

  // Track currently selected display image index state
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-red-900 mt-16">
      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 py-12 md:py-20">
        {/* Breadcrumbs */}
        <div className="text-sm text-zinc-500 mb-8 font-medium uppercase tracking-wider">
          <Link href="/shop" className="hover:text-white transition-colors">
            Shop
          </Link>
          <span className="mx-2">/</span>
          <Link
            href={`/category/${parentCategory.id}`}
            className="hover:text-white transition-colors"
          >
            {parentCategory.name}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[#8B0000]">{foundProduct.name}</span>
        </div>

        {/* Main Product Frame Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Images Workspace */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {/* Main True White Image Showcase Box */}
            <div className="bg-white w-full h-80 sm:h-96 md:h-112.5 relative flex items-center justify-center p-8 border border-zinc-800">
              <Image
                src={galleryImages[activeImageIndex]} // Updated to map live state swaps!
                alt={foundProduct.name}
                width={420}
                height={420}
                className="object-contain max-h-full max-w-full"
                priority
              />
            </div>

            {/* Gallery Clickable Slides/Thumbnails Carousel Container */}
            <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
              {galleryImages.map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-24 h-24 bg-white p-2 border flex items-center justify-center shrink-0 transition-all ${
                    activeImageIndex === idx
                      ? "border-[#8B0000] ring-2 ring-[#8B0000]/20"
                      : "border-zinc-800 opacity-60 hover:opacity-100"
                  }`}
                  aria-label={`View product image option ${idx + 1}`}
                >
                  <Image
                    src={imgUrl}
                    alt={`${foundProduct.name} thumbnail alternative view ${idx + 1}`}
                    width={80}
                    height={80}
                    className="object-contain max-h-full max-w-full select-none"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Frame: Specifications & Purchasing Configuration */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold text-[#8B0000] uppercase tracking-widest block mb-1">
                Security Solutions Certified
              </span>
              <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight uppercase">
                {foundProduct.name}
              </h1>

              {/* Technical Code Meta Identifiers */}
              <div className="flex flex-wrap gap-x-6 gap-y-1 text-zinc-500 font-mono text-sm mt-3">
                {foundProduct.partnumber && (
                  <p>
                    PART NO:{" "}
                    <span className="text-zinc-300">
                      {foundProduct.partnumber}
                    </span>
                  </p>
                )}
              </div>
            </div>

            {/* Price Frame */}
            <div className="border-y border-zinc-800 py-4 flex items-center justify-between">
              <div>
                <p className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">
                  Price
                </p>
                <p className="text-4xl font-black text-white mt-1">
                  {foundProduct.price}
                </p>
              </div>
              <span className="text-xs font-bold bg-emerald-950 text-emerald-400 px-3 py-1.5 border border-emerald-800/50 uppercase tracking-wider">
                In Stock & Ready to Ship
              </span>
            </div>

            {/* Technical Context Write-up */}
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-[#8B0000] uppercase tracking-wider">
                Product Description
              </h3>
              <p className="text-base text-zinc-300 leading-relaxed font-light">
                {foundProduct.description}
              </p>
            </div>

            {/* Fitment Safety Reminder */}
            <div className="p-4 bg-zinc-950 border-l-4 border-[#8B0000] text-sm text-zinc-400">
              <p className="text-white font-bold uppercase tracking-wide text-xs mb-1">
                Guaranteed Fitment Notice
              </p>
              <p>
                Cross-reference your vehicle parameters or original component ID
                strings to guarantee absolute system compliance before final
                purchase configuration.
              </p>
            </div>

            {/* Actions Block */}
            <div className="pt-2 flex items-center gap-4">
              {/* Quantity Input Box */}
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) =>
                  setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                }
                className="w-14 h-12 bg-white text-black text-center font-bold text-base border border-zinc-700 focus:outline-none"
              />

              <button
                onClick={() =>
                  addToCart({
                    id: foundProduct.id,
                    name: foundProduct.name,
                    price: foundProduct.price,
                    imageSrc: foundProduct.imageSrc,
                    quantity: 1,
                  })
                }
                className="bg-[#8B0000] text-white px-4 py-3"
              >
                Add To Cart
              </button>
              <Link
                href="/shipping-policy"
                className="flex-1 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-bold text-sm uppercase h-12 flex items-center justify-center tracking-wider text-center transition-colors"
              >
                Shipping Info
              </Link>
            </div>
          </div>
        </div>

        {/* Features Feature Set Split Row */}
        {foundProduct.features && foundProduct.features.length > 0 && (
          <div className="mt-16 pt-12 border-t border-zinc-900">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#8B0000] tracking-tight uppercase mb-8">
              Key Features & Performance Specs
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {foundProduct.features.map((feature: string, idx: number) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-zinc-300 text-base leading-relaxed bg-zinc-950/40 p-4 border border-zinc-900"
                >
                  <span className="text-[#8B0000] font-bold text-lg select-none mt-0.5">
                    ▪
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* RELATED PRODUCTS SECTION */}
        {(() => {
          const relatedProducts = parentCategory.products
            .filter((p) => p.id !== foundProduct.id)
            .slice(0, 4);

          if (relatedProducts.length === 0) return null;

          return (
            <div className="mt-20 pt-12 border-t border-zinc-900">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 font-semibold">
                    Recommended Gear
                  </p>

                  <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-[#8B0000] mt-1">
                    Related Products
                  </h2>
                </div>

                <Link
                  href={`/category/${parentCategory.id}`}
                  className="text-sm uppercase tracking-wider font-bold text-zinc-400 hover:text-white transition-colors"
                >
                  View All
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={`/product/${product.id}`}
                    className="group bg-zinc-950 border border-zinc-900 hover:border-[#8B0000] transition-all duration-300 overflow-hidden"
                  >
                    {/* IMAGE */}
                    <div className="bg-white h-64 flex items-center justify-center p-6 overflow-hidden">
                      <Image
                        src={product.imageSrc}
                        alt={product.name}
                        width={220}
                        height={220}
                        className="object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="p-5">
                      <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-500 font-semibold mb-2">
                        Performance Component
                      </p>

                      <h3 className="text-sm font-bold uppercase leading-snug text-white group-hover:text-[#8B0000] transition-colors min-h-[44px]">
                        {product.name}
                      </h3>

                      {product.partnumber && (
                        <p className="text-xs text-zinc-500 mt-2 font-mono">
                          PART#: {product.partnumber}
                        </p>
                      )}

                      <div className="mt-5 flex items-center justify-between">
                        <p className="text-xl font-black text-white">
                          {product.price}
                        </p>

                        <span className="text-[10px] uppercase tracking-widest text-emerald-400 border border-emerald-800/50 px-2 py-1">
                          In Stock
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })()}
      </div>
    </div>
  );
}
