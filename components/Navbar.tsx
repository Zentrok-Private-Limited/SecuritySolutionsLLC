'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isPoliciesOpen, setIsPoliciesOpen] = useState(false);

  const pathname = usePathname();

  // CHECK IF HOME PAGE
  const isHomePage = pathname === '/';

  return (
    <header
      className={`w-full absolute top-0 left-0 z-50 ${
        isHomePage ? 'bg-transparent' : 'bg-zinc-900'
      }`}
    >
      <div className="max-w-350 mx-auto px-6 h-28 flex items-center justify-between">
        
        {/* LOGO AREA - Left Aligned */}
        <div className="shrink-0">
          <Link href="/">
            <div className="w-44 h-24 bg-slate-800/50 border border-dashed border-slate-600 rounded flex items-center justify-center text-xs text-slate-400 font-mono">
              [ PLACEHOLDER LOGO ]
            </div>
          </Link>
        </div>

        {/* NAVIGATION & UTILITIES - Right Aligned */}
        <div className="flex items-center space-x-8">
          <nav className="hidden lg:flex items-center space-x-7 text-white font-medium text-[15px]">
            <Link href="/" className="hover:text-red-500 transition-colors">
              Home
            </Link>

            <Link href="/shop" className="hover:text-red-500 transition-colors">
              Shop
            </Link>

            <Link href="/contact" className="hover:text-red-500 transition-colors">
              Contact
            </Link>

            <Link href="/about" className="hover:text-red-500 transition-colors">
              About Us
            </Link>

            {/* Policies Dropdown Navigation */}
            <div className="relative">
              <button
                onClick={() => setIsPoliciesOpen(!isPoliciesOpen)}
                onBlur={() => setTimeout(() => setIsPoliciesOpen(false), 200)}
                className="flex items-center gap-1 hover:text-red-500 transition-colors focus:outline-none"
              >
                Policies

                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    isPoliciesOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isPoliciesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-black/95 border border-slate-800 rounded shadow-xl py-2 flex flex-col text-sm">
                  <Link
                    href="/terms-conditions"
                    className="px-4 py-2 hover:bg-slate-900 text-slate-300 hover:text-white"
                  >
                    Terms & Conditions
                  </Link>

                  <Link
                    href="/shipping-policy"
                    className="px-4 py-2 hover:bg-slate-900 text-slate-300 hover:text-white"
                  >
                    Shipping Policy
                  </Link>

                  <Link
                    href="/privacy-policy"
                    className="px-4 py-2 hover:bg-slate-900 text-slate-300 hover:text-white"
                  >
                    Privacy Policy
                  </Link>

                  <Link
                    href="/return-refund"
                    className="px-4 py-2 hover:bg-slate-900 text-slate-300 hover:text-white"
                  >
                    Refund Policy
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/authorization-form"
              className="tracking-wider hover:text-red-500 transition-colors uppercase text-[14px]"
            >
              AUTHORIZATION FORM
            </Link>
          </nav>

          {/* SHOPPING CART ICON WITH BADGE */}
          <Link
            href="/cart"
            className="relative p-2.5 border border-white rounded flex items-center justify-center hover:bg-white/10 transition-colors group"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 0a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>

            {/* Item Counter Badge */}
            <span className="absolute -top-2 -right-2 bg-white text-black font-bold text-[10px] w-5 h-5 rounded-full flex items-center justify-center border border-black shadow-md">
              0
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}