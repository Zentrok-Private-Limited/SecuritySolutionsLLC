"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [isPoliciesOpen, setIsPoliciesOpen] =
    useState(false);

  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  const pathname = usePathname();

  const { cartCount } = useCart();

  const isHomePage = pathname === "/";

  return (
    <header
      className={`w-full absolute top-0 left-0 z-50 ${
        isHomePage
          ? "bg-transparent"
          : "bg-zinc-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-24 flex items-center justify-between">

        {/* LOGO */}
        <Link
          href="/"
          className="shrink-0"
        >
          <div className="w-36 sm:w-44 h-20 bg-slate-800/50 border border-dashed border-slate-600 rounded flex items-center justify-center text-[10px] sm:text-xs text-slate-400 font-mono">
            [ PLACEHOLDER LOGO ]
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-8">

          <nav className="flex items-center gap-7 text-white font-medium text-[15px]">

            <Link
              href="/"
              className="hover:text-red-500 transition-colors"
            >
              Home
            </Link>

            <Link
              href="/shop"
              className="hover:text-red-500 transition-colors"
            >
              Shop
            </Link>

            <Link
              href="/contact"
              className="hover:text-red-500 transition-colors"
            >
              Contact
            </Link>

            <Link
              href="/about"
              className="hover:text-red-500 transition-colors"
            >
              About Us
            </Link>

            {/* POLICIES */}
            <div className="relative">

              <button
                onClick={() =>
                  setIsPoliciesOpen(
                    !isPoliciesOpen
                  )
                }
                className="flex items-center gap-1 hover:text-red-500 transition-colors"
              >
                Policies

                <svg
                  className={`w-3.5 h-3.5 transition-transform ${
                    isPoliciesOpen
                      ? "rotate-180"
                      : ""
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
                <div className="absolute top-full left-0 mt-2 w-52 bg-black border border-zinc-800 rounded-lg overflow-hidden shadow-2xl">

                  <Link
                    href="/terms-conditions"
                    className="block px-4 py-3 text-sm hover:bg-zinc-900"
                  >
                    Terms & Conditions
                  </Link>

                  <Link
                    href="/shipping-policy"
                    className="block px-4 py-3 text-sm hover:bg-zinc-900"
                  >
                    Shipping Policy
                  </Link>

                  <Link
                    href="/privacy-policy"
                    className="block px-4 py-3 text-sm hover:bg-zinc-900"
                  >
                    Privacy Policy
                  </Link>

                  <Link
                    href="/return-refund"
                    className="block px-4 py-3 text-sm hover:bg-zinc-900"
                  >
                    Refund Policy
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/authorization-form"
              className="uppercase tracking-wider text-[14px] hover:text-red-500 transition-colors"
            >
              Authorization Form
            </Link>
          </nav>

          {/* CART */}
          <Link
            href="/cart"
            className="relative p-2.5 border border-white rounded hover:bg-white/10 transition"
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

            <span className="absolute -top-2 -right-2 bg-white text-black font-bold text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          </Link>
        </div>

        {/* MOBILE RIGHT */}
        <div className="flex lg:hidden items-center gap-4">

          {/* CART */}
          <Link
            href="/cart"
            className="relative p-2 border border-white rounded"
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
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5"
              />
            </svg>

            <span className="absolute -top-2 -right-2 bg-white text-black font-bold text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          </Link>

          {/* HAMBURGER */}
          <button
            onClick={() =>
              setMobileMenuOpen(
                !mobileMenuOpen
              )
            }
            className="text-white"
          >
            {mobileMenuOpen ? (
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black border-t border-zinc-800 px-6 py-6">

          <nav className="flex flex-col gap-5 text-white">

            <Link
              href="/"
              onClick={() =>
                setMobileMenuOpen(false)
              }
            >
              Home
            </Link>

            <Link
              href="/shop"
              onClick={() =>
                setMobileMenuOpen(false)
              }
            >
              Shop
            </Link>

            <Link
              href="/contact"
              onClick={() =>
                setMobileMenuOpen(false)
              }
            >
              Contact
            </Link>

            <Link
              href="/about"
              onClick={() =>
                setMobileMenuOpen(false)
              }
            >
              About Us
            </Link>

            <Link
              href="/terms-conditions"
              onClick={() =>
                setMobileMenuOpen(false)
              }
            >
              Terms & Conditions
            </Link>

            <Link
              href="/shipping-policy"
              onClick={() =>
                setMobileMenuOpen(false)
              }
            >
              Shipping Policy
            </Link>

            <Link
              href="/privacy-policy"
              onClick={() =>
                setMobileMenuOpen(false)
              }
            >
              Privacy Policy
            </Link>

            <Link
              href="/return-refund"
              onClick={() =>
                setMobileMenuOpen(false)
              }
            >
              Refund Policy
            </Link>

            <Link
              href="/authorization-form"
              onClick={() =>
                setMobileMenuOpen(false)
              }
              className="uppercase"
            >
              Authorization Form
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}