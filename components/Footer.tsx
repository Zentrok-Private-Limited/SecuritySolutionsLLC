import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white w-full border-t border-zinc-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start">
        
        {/* COLUMN 1: BRAND & ABOUT */}
        <div className="flex flex-col space-y-4 max-w-sm">
          <h4 className="text-[#e60000] font-bold text-lg tracking-wider uppercase leading-snug">
            SECURITY SOLUTIONS<br />LLC
          </h4>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-normal">
            Providing high-quality auto parts and services across the United States. 
            Trusted by thousands of customers for performance, durability, and reliability.
          </p>
        </div>

        {/* COLUMN 2: QUICK LINKS */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-[#e60000] font-bold text-lg tracking-wider uppercase">
            QUICK LINKS
          </h4>
          <ul className="space-y-4 text-white font-normal text-sm sm:text-base decoration-1 underline-offset-4">
            <li>
              <Link href="/terms-conditions" className="underline hover:text-zinc-300 transition-colors">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/return-refund" className="underline hover:text-zinc-300 transition-colors">
                Return & Refund Policy
              </Link>
            </li>
            <li>
              <Link href="/shipping-policy" className="underline hover:text-zinc-300 transition-colors">
                Shipping Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* COLUMN 3: CONTACT INFORMATION */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-[#e60000] font-bold text-lg tracking-wider uppercase">
            CONTACT US
          </h4>
          <div className="space-y-4 text-sm sm:text-base">
            <div>
              <span className="block text-[#e60000] font-bold">Email:</span>
              <a href="support@securitysolutionsllc.com" className="text-zinc-300 hover:text-white transition-colors break-all">
                support@securitysolutionsllc.com
              </a>
            </div>
            <div>
              <span className="block text-[#e60000] font-bold">Phone:</span>
              <a href="tel:+18572949201" className="text-zinc-300 hover:text-white transition-colors">
                +1 857-294-9201
              </a>
            </div>
            <div>
              <span className="block text-[#e60000] font-bold">Address:</span>
              <p className="text-zinc-300 leading-relaxed">
                XYZ,<br />
                Atlanta, GA 30038, USA
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* BOTTOM COPYRIGHT DIVIDER BAR */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-zinc-900/80 text-center">
        <p className="text-zinc-500 text-xs sm:text-sm font-normal tracking-wide">
          © {new Date().getFullYear()} Security Solutions LLC. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}