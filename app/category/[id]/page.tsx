import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categoryProductsData } from "@/data/product";

interface PageProps {
  // Update params to be a Promise in Next.js 15
  params: Promise<{
    id: string;
  }>;
}

// Next.js uses this to generate static pages at build time
export async function generateStaticParams() {
  return Object.keys(categoryProductsData).map((id) => ({
    id: id,
  }));
}

export default async function CategoryListingPage({ params }: PageProps) {
  const resolvedParams = await params;
  const categoryId = resolvedParams.id;

  const category = categoryProductsData[categoryId];

  if (!category) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-red-900 mt-30">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 py-12">
        {/* Breadcrumb Navigation */}
        <div className="text-sm text-zinc-500 mb-4 font-medium uppercase tracking-wider">
          <Link href="/shop" className="hover:text-white transition-colors">
            Shop
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[#8B0000]">{category.name}</span>
        </div>

        {/* Title Section */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-[#8B0000] tracking-tight pb-4 uppercase">
            {category.name}
          </h1>
          <p className="text-zinc-400 text-sm">
            Showing {category.products.length} product
            {category.products.length === 1 ? "" : "s"}
          </p>
          <hr className="border-zinc-800 w-full mt-4" />
        </div>

        {/* Product Items Grid */}
        {category.products.length === 0 ? (
          <div className="text-center py-20 text-zinc-500 text-lg">
            No products currently listed in this category.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {category.products.map((product) => (
              <div
                key={product.id}
                className="bg-white text-black flex flex-col justify-between border border-zinc-200 transition-all duration-200 hover:shadow-xl group"
              >
                {/* Product Image Panel */}
                <div className="w-full h-56 relative flex items-center justify-center p-4 bg-white border-b border-zinc-100">
                  <div className="text-zinc-400 font-mono text-[10px] absolute top-2 left-2 pointer-events-none">
                    [SKU: {product.sku}]
                  </div>
                  <Image
                    src={product.imageSrc}
                    alt={product.name}
                    width={220}
                    height={220}
                    className="object-contain max-h-full max-w-full group-hover:scale-105 transition-transform duration-200"
                  />
                </div>

                {/* Info & Call To Action Area */}
                <div className="p-4 flex flex-col grow bg-zinc-50">
                  <h3 className="text-base font-bold text-zinc-900 tracking-tight line-clamp-2 min-h-12">
                    {product.name}
                  </h3>
                  <p className="text-xs text-zinc-500 mt-1 line-clamp-2 grow">
                    {product.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-zinc-200 flex items-center justify-between">
                    <span className="text-lg font-extrabold text-zinc-900">
                      {product.price}
                    </span>
                    <Link
                      href={`/product/${product.id}`}
                      className="bg-[#8B0000] hover:bg-red-900 text-white font-bold text-xs uppercase px-4 py-2 tracking-wider transition-colors text-center inline-block"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
