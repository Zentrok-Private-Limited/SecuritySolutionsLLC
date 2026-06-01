"use client";

import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-900 selection:text-white pt-15">
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-[#8B0000] tracking-tight mb-12">
          Privacy Policy
        </h1>

        {/* Metadata & Intro */}
        <div className="space-y-6 text-lg md:text-xl text-gray-200 font-normal leading-relaxed mb-14">
          <p className="text-gray-400 font-medium">
            Effective Date: March 25, 2026
          </p>
          <p>
            This Privacy Policy explains how <strong className="text-white font-bold">Security Solutions LLC</strong> collects, uses, and protects your information when you visit our website.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#8B0000]">
              1. Information We Collect
            </h2>
            <p className="text-base md:text-lg text-gray-300 mb-2">We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-3 text-base md:text-lg text-gray-300">
              <li>Name, email address, and phone number</li>
              <li>Billing and service details</li>
              <li>IP address and browser information</li>
              <li>Website usage data</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#8B0000]">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-base md:text-lg text-gray-300">
              <li>To provide and manage our services</li>
              <li>To respond to inquiries</li>
              <li>To improve our website and customer experience</li>
              <li>To send updates or marketing communications</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#8B0000]">
              3. Sharing of Information
            </h2>
            <p className="text-base md:text-lg text-gray-300 mb-2">We do not sell your personal information. We may share information with:</p>
            <ul className="list-disc pl-6 space-y-3 text-base md:text-lg text-gray-300">
              <li>Service providers and contractors</li>
              <li>Legal authorities when required</li>
              <li>Business partners involved in service delivery</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#8B0000]">
              4. Cookies and Tracking
            </h2>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              We use cookies to enhance your experience, analyze traffic, and improve functionality.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#8B0000]">
              5. Data Security
            </h2>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              We implement appropriate security measures to protect your information. However, no system is completely secure.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#8B0000]">
              6. Your Rights
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-base md:text-lg text-gray-300">
              <li>Access your personal data</li>
              <li>Request corrections or deletion</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#8B0000]">
              7. Third-Party Links
            </h2>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for their privacy practices.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#8B0000]">
              8. Changes to This Policy
            </h2>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              We may update this policy from time to time. Updates will be posted on this page.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#8B0000]">
              9. Contact Us
            </h2>
            <p className="text-base md:text-lg text-gray-300 mb-2">
              If you have questions, contact us:
            </p>
            <ul className="list-none space-y-3 text-base md:text-lg text-gray-300">
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
                <span className="text-gray-400 font-medium block md:inline">Address:</span>{" "}
                <span className="text-white">2255 Cumberland Parkway, Atlanta, GA 30038, USA</span>
              </li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}