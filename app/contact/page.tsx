"use client";

import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
} from "react-icons/fi";

export default function ContactPage() {
  return (
    <section className="bg-black text-white min-h-screen pt-35 py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* TOP HEADING */}
        <h1 className="text-5xl font-semibold text-red-600 mb-15">
          Contact Us
        </h1>
        
        {/* TOP HEADINGS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-10">
          <h2 className="text-3xl font-semibold text-red-600 text-center lg:text-left">
            Get In Touch
          </h2>

          <h2 className="text-3xl font-semibold text-red-600 text-center lg:text-left lg:pl-4">
            Contact Details
          </h2>
        </div>

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* LEFT SIDE */}
          <form className="space-y-5">
            
            {/* NAME */}
            <div>
              <label className="block text-sm mb-2 font-medium text-white">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full h-11 px-4 rounded-md bg-[#e5e5e5] text-black text-sm outline-none"
              />
            </div>

            {/* PHONE */}
            <div>
              <label className="block text-sm mb-2 font-medium text-white">
                Phone Number
              </label>

              <input
                type="text"
                placeholder="Enter your phone number"
                className="w-full h-11 px-4 rounded-md bg-[#e5e5e5] text-black text-sm outline-none"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-sm mb-2 font-medium text-white">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full h-11 px-4 rounded-md bg-[#e5e5e5] text-black text-sm outline-none"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block text-sm mb-2 font-medium text-white">
                Message
              </label>

              <textarea
                rows={6}
                placeholder="Write your message..."
                className="w-full rounded-2xl bg-[#0d0d10] border border-[#1c1c20] px-4 py-4 text-sm outline-none resize-none"
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full h-12 bg-[#b40000] hover:bg-red-700 transition rounded-xl text-white font-semibold text-base"
            >
              Submit
            </button>
          </form>

          {/* RIGHT SIDE */}
          <div className="space-y-5">
            
            {/* CARD */}
            <div className="bg-[#0d0d10] border border-[#191919] rounded-3xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <FiMail className="text-red-600 text-lg" />

                <h3 className="text-red-600 text-lg font-semibold">
                  Email
                </h3>
              </div>

              <p className="text-gray-200 text-[15px] leading-7 wrap-break-words">
                support@securitysolutionsllc.com
              </p>
            </div>

            {/* CARD */}
            <div className="bg-[#0d0d10] border border-[#191919] rounded-3xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <FiPhone className="text-red-600 text-lg" />

                <h3 className="text-red-600 text-lg font-semibold">
                  Phone
                </h3>
              </div>

              <p className="text-gray-200 text-[15px]">
                +1 857-294-9201
              </p>
            </div>

            {/* CARD */}
            <div className="bg-[#0d0d10] border border-[#191919] rounded-3xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <FiMapPin className="text-red-600 text-lg" />

                <h3 className="text-red-600 text-lg font-semibold">
                  Address
                </h3>
              </div>

              <p className="text-gray-200 text-[15px] leading-7">
                XYZ,
                <br />
                Atlanta, GA 30038
              </p>
            </div>

            {/* CARD */}
            <div className="bg-[#0d0d10] border border-[#191919] rounded-3xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <FiClock className="text-red-600 text-lg" />

                <h3 className="text-red-600 text-lg font-semibold">
                  Working Hours
                </h3>
              </div>

              <p className="text-gray-200 text-[15px]">
                Mon – Fri, 10:00 AM – 6:00 PM (EST)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}