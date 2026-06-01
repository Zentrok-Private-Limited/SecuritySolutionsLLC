"use client";

import React from "react";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-900 selection:text-white pt-15">
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-[#8B0000] tracking-tight mb-12">
          Terms & Conditions
        </h1>

        {/* Metadata & Intro */}
        <div className="space-y-6 text-lg md:text-xl text-gray-200 font-normal leading-relaxed mb-14">
          <p className="text-gray-400 font-medium">
            Last updated: March 25, 2026
          </p>
          <p>
            Welcome to <strong className="text-white font-bold">EMG Autoparts</strong>. 
            These Terms and Conditions (“Terms”) govern your use of our website and services. 
            By accessing or using our website, you agree to be bound by these Terms.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#8B0000]">
              1. Definitions
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-base md:text-lg text-gray-300">
              <li>
                <strong className="text-white font-semibold">“Company,” “we,” “us,” or “our”</strong> refers to <span className="text-white font-medium">EMG Autoparts</span>.
              </li>
              <li>
                <strong className="text-white font-semibold">“Customer,” “you,” or “your”</strong> refers to any individual or entity using our website or purchasing products.
              </li>
              <li>
                <strong className="text-white font-semibold">“Products”</strong> refers to all automotive parts, accessories, and related items offered for sale.
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#8B0000]">
              2. Eligibility
            </h2>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              You must be at least 18 years old to place an order on our website. By making a purchase, you confirm that you have the legal capacity to enter into a binding agreement.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#8B0000]">
              3. Account Registration
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-base md:text-lg text-gray-300">
              <li>You may be required to create an account to access certain features.</li>
              <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
              <li>You agree to provide accurate and complete information and to update it as necessary.</li>
              <li>We reserve the right to suspend or terminate accounts that violate these Terms.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#8B0000]">
              4. Products & Pricing
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-base md:text-lg text-gray-300">
              <li>We strive to provide accurate product descriptions, images, and pricing. However, errors may occur.</li>
              <li>Prices are listed in U.S. Dollars (USD) and are subject to change without notice.</li>
              <li>We reserve the right to correct pricing errors and cancel orders placed at incorrect prices.</li>
              <li>Product availability is not guaranteed. Items may sell out or be discontinued at any time.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#8B0000]">
              5. Orders & Payment
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-base md:text-lg text-gray-300">
              <li>Placing an order constitutes an offer to purchase. We reserve the right to accept or decline any order.</li>
              <li>Payment is due at the time of purchase. We accept major credit cards, debit cards, and PayPal.</li>
              <li>Your order is not confirmed until you receive an order confirmation email.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#8B0000]">
              6. Shipping & Delivery
            </h2>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              Please refer to our Shipping Policy for complete details on shipping methods, rates, and delivery times.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#8B0000]">
              7. Returns & Refunds
            </h2>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              Please refer to our Return & Refund Policy for complete details on eligibility, process, and timelines.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#8B0000]">
              8. Intellectual Property
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-base md:text-lg text-gray-300">
              <li>All content on this website (including logos, images, text, and design) is the property of EMG Autoparts.</li>
              <li>Unauthorized use, reproduction, or distribution is strictly prohibited.</li>
              <li>Third-party trademarks belong to their respective owners.</li>
            </ul>
          </section>

          {/* Section 9 */}
          <section className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#8B0000]">
              9. Limitation of Liability
            </h2>
            <p className="text-base md:text-lg text-gray-300 mb-2">To the maximum extent permitted by law:</p>
            <ul className="list-disc pl-6 space-y-3 text-base md:text-lg text-gray-300">
              <li>EMG Autoparts shall not be liable for any indirect, incidental, or consequential damages.</li>
              <li>Our total liability shall not exceed the amount paid for the product in question.</li>
              <li>We are not responsible for delays or failures caused by circumstances beyond our control.</li>
            </ul>
          </section>

          {/* Section 10 */}
          <section className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#8B0000]">
              10. Disclaimer of Warranties
            </h2>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              All products are sold “as described”. Any warranties are limited to those provided by the manufacturer (if applicable). We disclaim all other warranties to the fullest extent permitted by law.
            </p>
          </section>

          {/* Section 11 */}
          <section className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#8B0000]">
              11. Indemnification
            </h2>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              You agree to indemnify and hold harmless EMG Autoparts, its team, and affiliates from any claims, damages, or losses arising from your use of the website or violation of these Terms.
            </p>
          </section>

          {/* Section 12 */}
          <section className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#8B0000]">
              12. Privacy
            </h2>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy. By using our website, you consent to the collection and use of information as described therein.
            </p>
          </section>

          {/* Section 13 */}
          <section className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#8B0000]">
              13. Governing Law
            </h2>
            <ul className="list-disc pl-6 space-y-3 text-base md:text-lg text-gray-300">
              <li>These Terms are governed by the laws of the State of Michigan, United States.</li>
              <li>Any disputes shall be resolved through binding arbitration in Detroit, Michigan.</li>
              <li>You waive any right to participate in class-action lawsuits or class-wide arbitration.</li>
            </ul>
          </section>

          {/* Section 14 */}
          <section className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#8B0000]">
              14. Changes to These Terms
            </h2>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              We reserve the right to update these Terms at any time. Changes will be posted on this page with an updated date. Continued use of the website constitutes acceptance of the revised Terms.
            </p>
          </section>

          {/* Section 15 */}
          <section className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#8B0000]">
              15. Contact Us
            </h2>
            <p className="text-base md:text-lg text-gray-300 mb-2">
              If you have questions about these Terms, please contact us:
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
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}