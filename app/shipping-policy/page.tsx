"use client";

import React from "react";

export default function ShippingPolicy() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-900 selection:text-white pt-15">
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-[#8B0000] tracking-tight mb-12">
          Shipping Policy
        </h1>

        {/* Metadata & Intro */}
        <div className="space-y-6 text-lg md:text-xl text-gray-200 font-normal leading-relaxed mb-14">
          <p className="text-gray-400 font-medium">
            Last updated: March 25, 2026
          </p>
          <p>
            At <strong className="text-white font-bold">Security Solutions LLC</strong>, we understand that getting the right parts quickly is critical. That’s why we offer reliable, fast shipping across the continental United States. Please review our full shipping policy below.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          
          {/* Section 1: Rates & Methods Table */}
          <section className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#8B0000]">
              1. Shipping Rates & Methods
            </h2>
            <div className="overflow-x-auto pt-2">
              <table className="w-full text-left border-collapse border border-zinc-800 text-base md:text-lg">
                <thead>
                  <tr className="bg-zinc-950 border-b border-zinc-800 text-gray-400 font-medium">
                    <th className="p-4">Shipping Option</th>
                    <th className="p-4">Estimated Delivery</th>
                    <th className="p-4">Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-900 text-gray-300">
                  <tr className="relative bg-zinc-950/40">
                    <td className="p-4 font-semibold text-white flex items-center gap-3 flex-wrap">
                      Flat Rate Standard
                      <span className="text-xs bg-[#8B0000] text-white px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                        Most Popular
                      </span>
                    </td>
                    <td className="p-4">5–7 business days</td>
                    <td className="p-4">$9.99 for orders under $99</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-white">Free Standard</td>
                    <td className="p-4">5–7 business days</td>
                    <td className="p-4">Free over $99 / $9.99</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-white">Express</td>
                    <td className="p-4">1–3 business days</td>
                    <td className="p-4">$19.99</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-white">Overnight</td>
                    <td className="p-4">Next business day</td>
                    <td className="p-4">$34.99</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#8B0000]">
              2. Order Processing
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-base md:text-lg text-gray-300">
              <li>
                Orders placed before <strong className="text-white font-semibold">2:00 PM EST</strong> on business days are typically processed and shipped the same day.
              </li>
              <li>
                Orders placed after 2:00 PM EST or on weekends/holidays will be processed the next business day.
              </li>
              <li>
                During high-demand periods (sales events, holidays), processing may take an additional 1–2 business days.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#8B0000]">
              3. Order Tracking
            </h2>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              Once your order ships, you will receive a confirmation email with a tracking number and a link to track your package in real time. You can also track your order by visiting the carrier’s website directly.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#8B0000]">
              4. Shipping Restrictions
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-base md:text-lg text-gray-300">
              <li>We currently ship to all 50 U.S. states, including Alaska and Hawaii (additional surcharges may apply).</li>
              <li>We do not ship to P.O. Boxes for Express or Overnight orders.</li>
              <li>
                Oversized or heavy items (e.g., engines, transmissions) may incur additional freight charges. You will be notified before your order is processed if extra fees apply.
              </li>
              <li>International shipping is available to select countries. Customs duties and taxes are the responsibility of the buyer.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#8B0000]">
              5. Damaged or Lost Shipments
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-base md:text-lg text-gray-300">
              <li>
                <strong className="text-white font-semibold">Damaged Packages:</strong> If your package arrives damaged, please photograph the damage and contact our support team within 48 hours of delivery. We will arrange a replacement or refund at no additional cost.
              </li>
              <li>
                <strong className="text-white font-semibold">Missing Deliveries:</strong> If your tracking shows “delivered” but you haven’t received the package, please check with neighbors and your local carrier first. If the package is still missing, contact us within 7 days and we’ll file a claim and work to resolve the issue.
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#8B0000]">
              6. Contact Us
            </h2>
            <p className="text-base md:text-lg text-gray-300 mb-2">
              If you have any questions about shipping, feel free to reach out:
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
                <a href="tel:+18887028842" className="text-white hover:underline underline-offset-4 decoration-[#8B0000]">
                  +1 888-702-8842
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