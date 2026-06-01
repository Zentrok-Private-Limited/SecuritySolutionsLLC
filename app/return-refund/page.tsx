"use client";

import React from "react";

export default function ReturnAndRefundPolicy() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-900 selection:text-white pt-15">
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-[#8B0000] tracking-tight mb-12">
          Return & Refund Policy
        </h1>

        {/* Metadata & Intro */}
        <div className="space-y-6 text-lg md:text-xl text-gray-200 font-normal leading-relaxed mb-14">
          <p className="text-gray-400 font-medium">
            Last updated: March 25, 2026
          </p>
          <p>
            At <strong className="text-white font-bold">Security Solutions LLC</strong>, customer satisfaction drives everything we do. If your purchase doesn’t meet expectations, we’re here to help make it right. Please review our return and refund guidelines below.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#8B0000]">
              1. Return Eligibility
            </h2>
            <p className="text-base md:text-lg text-gray-300 mb-2">To qualify for a return:</p>
            <ul className="list-disc pl-6 space-y-3 text-base md:text-lg text-gray-300">
              <li>Items must be returned within 30 days of delivery.</li>
              <li>Products must be unused, uninstalled, and in original packaging.</li>
              <li>All original accessories, manuals, and hardware must be included.</li>
              <li>A valid order number or proof of purchase is required.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#8B0000]">
              2. Non-Returnable Items
            </h2>
            <p className="text-base md:text-lg text-gray-300 mb-2">The following items cannot be returned or exchanged:</p>
            <ul className="list-disc pl-6 space-y-3 text-base md:text-lg text-gray-300">
              <li>Electrical components that have been installed or tested (e.g., sensors, ECUs, modules).</li>
              <li>Custom or special-order parts made for specific vehicles.</li>
              <li>Hazardous materials (oils, fluids, lubricants, chemicals).</li>
              <li>Clearance or final sale items.</li>
              <li>Products showing signs of use, installation, damage, or modification.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#8B0000]">
              3. How to Initiate a Return
            </h2>
            <p className="text-base md:text-lg text-gray-300 mb-2">Follow these steps to process your return smoothly:</p>
            <ol className="list-none space-y-4 text-base md:text-lg text-gray-300">
              <li>
                <strong className="text-white block font-semibold mb-1">1. Contact Us</strong>
                Email <a href="mailto:support@securitysolutionsllc.com" className="text-white hover:underline">support@securityssolutionsllc.com</a> with your order number and reason for return.
              </li>
              <li>
                <strong className="text-white block font-semibold mb-1">2. Receive RMA Number</strong>
                Our team will issue a Return Merchandise Authorization (RMA) within 1–2 business days.
              </li>
              <li>
                <strong className="text-white block font-semibold mb-1">3. Ship the Item</strong>
                Pack the item securely in its original packaging, write the RMA number on the outside of the box, and ship it to the address provided.
              </li>
              <li>
                <strong className="text-white block font-semibold mb-1">4. Inspection & Processing</strong>
                Once received, our team will inspect the item and process your return within 3–5 business days.
              </li>
            </ol>
            
            <div className="mt-6 p-4 border-l-4 border-[#8B0000] bg-zinc-950 text-gray-300 text-base rounded-r">
              <p className="font-semibold text-white mb-1">Important Note:</p>
              Returns without an RMA number will not be accepted and may be returned to sender. Original shipping charges are non-refundable unless the return is due to our error (wrong item, defective product, or damaged shipment).
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#8B0000]">
              4. Return Shipping Costs
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-base md:text-lg text-gray-300">
              <li>
                <strong className="text-white font-semibold">Our Error:</strong> If you received the wrong part, a defective item, or a damaged shipment, we will provide a prepaid return shipping label at no cost to you.
              </li>
              <li>
                <strong className="text-white font-semibold">Change of Mind:</strong> If you simply changed your mind or ordered the wrong part, return shipping costs are your responsibility.
              </li>
            </ul>
            <p className="text-base md:text-lg text-gray-400 italic pt-2">
              We recommend using a trackable shipping method — AutoParts Hub is not responsible for items lost during return transit.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#8B0000]">
              5. Defective or Damaged Items
            </h2>
            <p className="text-base md:text-lg text-gray-300 mb-2">
              If you receive a defective or damaged item, please contact us within 48 hours of delivery with:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base md:text-lg text-gray-300">
              <li>Your order number</li>
              <li>Photos of the damaged item and packaging</li>
              <li>A brief description of the issue</li>
            </ul>
            <p className="text-base md:text-lg text-gray-300 pt-2">
              We will arrange a replacement or full refund, including any shipping costs, at no charge to you.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#8B0000]">
              6. Warranty Claims
            </h2>
            <p className="text-base md:text-lg text-gray-300 mb-2">
              Many of our products come with a manufacturer’s warranty. Warranty periods vary by product and are listed on the product page. For warranty claims:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-base md:text-lg text-gray-300">
              <li>Contact our support team with your order number and proof of purchase.</li>
              <li>Provide a description of the defect and supporting photos if possible.</li>
              <li>We will coordinate with the manufacturer to process your claim as quickly as possible.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#8B0000]">
              7. Contact Us
            </h2>
            <p className="text-base md:text-lg text-gray-300 mb-2">
              Questions about returns or refunds? We’re here to help:
            </p>
            <ul className="list-none space-y-2 text-base md:text-lg text-gray-300">
              <li>
                <span className="text-gray-400 font-medium">Email:</span>{" "}
                <a href="mailto:support@securitysolutionsllc.com" className="text-white hover:underline underline-offset-4 decoration-[#8B0000]">
                  support@securitysolutionsllc.com
                </a>
              </li>
              <li>
                <span className="text-gray-400 font-medium">Phone:</span>{" "}
                <a href="tel:+18572949201" className="text-white hover:underline underline-offset-4 decoration-[#8B0000]">
                  +1 857-294-9201
                </a>
              </li>
              <li>
                <span className="text-gray-400 font-medium">Hours:</span>{" "}
                <span className="text-white">Monday–Friday, 8 AM – 6 PM EST</span>
              </li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}