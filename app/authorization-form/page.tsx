"use client";

import { useState } from "react";

export default function AuthorizationForm() {
  const [paymentMethod, setPaymentMethod] = useState("");

  return (
    <main className="bg-black min-h-screen pt-32 pb-20 px-4 text-white">

      {/* PAGE TITLE */}
      <div className="max-w-6xl mx-auto mb-10">
        <h1 className="text-[#8B0000] text-3xl md:text-4xl font-semibold tracking-wide">
          Authorization Form
        </h1>

        <p className="text-zinc-400 mt-3 text-base md:text-lg">
          Complete the form below to authorize your order request.
        </p>
      </div>

      {/* FORM CONTAINER */}
      <div className="max-w-5xl mx-auto bg-zinc-950 border border-zinc-800 rounded-3xl p-6 md:p-10">

        {/* MAIN HEADING */}
        <div className="mb-12 text-center">
          <h1 className="text-[#8B0000] text-3xl md:text-5xl font-bold leading-tight">
            Security Solutions LLC
          </h1>

          <p className="text-zinc-400 mt-4 text-base md:text-lg">
            Authorization Request Form
          </p>
        </div>

        <form className="space-y-7">

          {/* ROW 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <div>
              <label className="block text-zinc-300 text-sm font-medium mb-2">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full h-12 rounded-xl bg-zinc-900 border border-zinc-800 px-4 text-white outline-none focus:border-red-700 transition"
              />
            </div>

            <div>
              <label className="block text-zinc-300 text-sm font-medium mb-2">
                Phone Number
              </label>

              <input
                type="text"
                placeholder="Enter phone number"
                className="w-full h-12 rounded-xl bg-zinc-900 border border-zinc-800 px-4 text-white outline-none focus:border-red-700 transition"
              />
            </div>
          </div>

          {/* ROW 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <div>
              <label className="block text-zinc-300 text-sm font-medium mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter email address"
                className="w-full h-12 rounded-xl bg-zinc-900 border border-zinc-800 px-4 text-white outline-none focus:border-red-700 transition"
              />
            </div>

            <div>
              <label className="block text-zinc-300 text-sm font-medium mb-2">
                Billing Address
              </label>

              <input
                type="text"
                placeholder="Enter billing address"
                className="w-full h-12 rounded-xl bg-zinc-900 border border-zinc-800 px-4 text-white outline-none focus:border-red-700 transition"
              />
            </div>
          </div>

          {/* ROW 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <div>
              <label className="block text-zinc-300 text-sm font-medium mb-2">
                Vehicle Make
              </label>

              <input
                type="text"
                placeholder="Toyota, Honda..."
                className="w-full h-12 rounded-xl bg-zinc-900 border border-zinc-800 px-4 text-white outline-none focus:border-red-700 transition"
              />
            </div>

            <div>
              <label className="block text-zinc-300 text-sm font-medium mb-2">
                Vehicle Model
              </label>

              <input
                type="text"
                placeholder="Camry, Civic..."
                className="w-full h-12 rounded-xl bg-zinc-900 border border-zinc-800 px-4 text-white outline-none focus:border-red-700 transition"
              />
            </div>
          </div>

          {/* ROW 4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <div>
              <label className="block text-zinc-300 text-sm font-medium mb-2">
                Vehicle Year
              </label>

              <input
                type="text"
                placeholder="2022"
                className="w-full h-12 rounded-xl bg-zinc-900 border border-zinc-800 px-4 text-white outline-none focus:border-red-700 transition"
              />
            </div>

            <div>
              <label className="block text-zinc-300 text-sm font-medium mb-2">
                VIN Number
              </label>

              <input
                type="text"
                placeholder="Vehicle identification number"
                className="w-full h-12 rounded-xl bg-zinc-900 border border-zinc-800 px-4 text-white outline-none focus:border-red-700 transition"
              />
            </div>
          </div>

          {/* PARTS REQUESTED */}
          <div>
            <label className="block text-zinc-300 text-sm font-medium mb-2">
              Parts Requested
            </label>

            <textarea
              rows={5}
              placeholder="Describe the parts you need..."
              className="w-full rounded-2xl bg-zinc-900 border border-zinc-800 px-4 py-4 text-white outline-none resize-none focus:border-red-700 transition"
            />
          </div>

          {/* ROW 5 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <div>
              <label className="block text-zinc-300 text-sm font-medium mb-2">
                Quantity
              </label>

              <input
                type="number"
                placeholder="Enter quantity"
                className="w-full h-12 rounded-xl bg-zinc-900 border border-zinc-800 px-4 text-white outline-none focus:border-red-700 transition"
              />
            </div>

            <div>
              <label className="block text-zinc-300 text-sm font-medium mb-2">
                Estimated Price ($)
              </label>

              <input
                type="text"
                placeholder="$0.00"
                className="w-full h-12 rounded-xl bg-zinc-900 border border-zinc-800 px-4 text-white outline-none focus:border-red-700 transition"
              />
            </div>
          </div>

          {/* ROW 6 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <div>
              <label className="block text-zinc-300 text-sm font-medium mb-2">
                Payment Method
              </label>

              <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-full h-12 rounded-xl bg-zinc-900 border border-zinc-800 px-4 text-white outline-none focus:border-red-700 transition"
              >
                <option value="">Select payment method</option>
                <option value="credit-card">Credit Card</option>
                <option value="paypal">PayPal</option>
                <option value="bank-transfer">Bank Transfer</option>
              </select>
            </div>

            <div>
              <label className="block text-zinc-300 text-sm font-medium mb-2">
                Transaction ID
              </label>

              <input
                type="text"
                placeholder="Enter transaction ID"
                className="w-full h-12 rounded-xl bg-zinc-900 border border-zinc-800 px-4 text-white outline-none focus:border-red-700 transition"
              />
            </div>
          </div>

          {/* CHECKBOX */}
          <div className="flex items-start gap-3 pt-2">
            <input
              type="checkbox"
              className="mt-1 w-4 h-4 accent-red-700"
            />

            <p className="text-zinc-400 text-sm md:text-base leading-7">
              I agree to the terms and authorize Guarded Access
              Solutions LLC to process this request and order.
            </p>
          </div>

          {/* LAST ROW */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <div>
              <label className="block text-zinc-300 text-sm font-medium mb-2">
                Full Name (Signature)
              </label>

              <input
                type="text"
                placeholder="Type your full name"
                className="w-full h-12 rounded-xl bg-zinc-900 border border-zinc-800 px-4 text-white outline-none focus:border-red-700 transition"
              />
            </div>

            <div>
              <label className="block text-zinc-300 text-sm font-medium mb-2">
                Date
              </label>

              <input
                type="date"
                className="w-full h-12 rounded-xl bg-zinc-900 border border-zinc-800 px-4 text-white outline-none focus:border-red-700 transition"
              />
            </div>
          </div>

          {/* BUTTON */}
          <div className="pt-4">
            <button
              type="submit"
              className="bg-red-700 hover:bg-red-600 transition-all duration-300 px-8 h-12 rounded-xl text-white text-sm md:text-base font-semibold tracking-wide"
            >
              Submit Authorization
            </button>
          </div>

        </form>
      </div>
    </main>
  );
}
