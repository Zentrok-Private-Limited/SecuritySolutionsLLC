"use client";
import { useState } from "react";


const journeyData = [
  {
    year: "2018",
    title: "THE BEGINNING",
    description:
      "Started our journey in the auto parts industry with a small setup and big vision.",
    icon: "🛠️",
  },
  {
    year: "2020",
    title: "BUILDING THE FOUNDATION",
    description:
      "Built strong relationships with trusted suppliers and loyal customers.",
    icon: "🤝",
  },
  {
    year: "2022",
    title: "ONLINE EXPANSION",
    description:
      "Expanded our business online to reach more customers nationwide.",
    icon: "🌐",
  },
  {
    year: "2023–24",
    title: "GROWING INVENTORY",
    description:
      "Increased inventory and added a wide range of auto parts.",
    icon: "🏆",
  },
  {
    year: "2025",
    title: "SCALING FORWARD",
    description:
      "Scaling our network and expanding reach across multiple regions.",
    icon: "🚚",
  },
];

const features = [
  {
    title: "🔧 Premium Quality Parts",
    description:
      "We provide only high-quality, performance-tested auto parts that meet industry standards. Every product is carefully selected to ensure durability and reliability. Our focus is on delivering parts that perform under real-world conditions.",
  },
  {
    title: "⚡ Fast & Reliable Delivery",
    description:
      "We understand the importance of time when it comes to vehicle repairs. Our logistics ensure fast and secure delivery across the United States. Orders are processed quickly with real-time tracking updates.",
  },
  {
    title: "💎 Trusted by Customers",
    description:
      "Our growing customer base reflects the trust we’ve built over time. We focus on long-term relationships through consistent service. Transparency and reliability define our customer experience.",
  },
  {
    title: "🛠️ Industry Expertise",
    description:
      "With strong experience in the auto parts industry, we understand your needs. Our team ensures every product meets performance expectations. Expertise allows us to deliver dependable solutions every time.",
  },
];

const faqs = [
  {
    question: "How do I find the right part for my vehicle?",
    answer:
      "Use our part finder by entering your vehicle’s make, model, and year to get compatible parts.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept major credit cards, PayPal, and other secure payment methods.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Standard shipping takes 5–7 business days. Express options are also available.",
  },
  {
    question: "Can I track my order?",
    answer:
      "Yes, once your order ships you will receive a tracking number via email.",
  },
  {
    question: "What is your return policy?",
    answer:
      "You can return unused parts within 30 days for a full refund.",
  },
];


export default function AboutPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (

<main className="bg-black text-white overflow-hidden">

  {/* PAGE TITLE */}
  <section className="bg-zinc-900 py-4 border-b border-zinc-800">
    <h1 className="text-center text-white text-3xl md:text-4xl font-semibold tracking-wide">
      About Us
    </h1>
  </section>

  {/* FIRST SECTION */}
  <section className="max-w-6xl mx-auto px-5 md:px-8 py-16">

    {/* SMALL TITLE */}
    <div className="flex items-center gap-3 mb-6">
      <span className="text-yellow-400 text-2xl">✨</span>

      <h2 className="text-red-600 text-2xl md:text-3xl font-semibold">
        Our Story
      </h2>
    </div>

    {/* MAIN HEADING */}
    <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-8 max-w-4xl">
      Driven by Passion, Built on Quality
    </h1>

    {/* TEXT CONTENT */}
    <div className="space-y-7 text-zinc-300 text-[16px] md:text-[18px] leading-8 max-w-5xl">

      <p>
        At <span className="font-semibold text-white">Security Solutions LLC</span>,
        our journey began with a strong vision — to deliver reliable and
        high-quality access and security solutions for every need.
      </p>

      <p>
        From the very beginning, we focused on quality, integrity,
        and customer satisfaction. Over time, we built strong relationships
        with clients and partners through trust and consistency.
      </p>

      <p>
        We continuously innovate to meet modern security demands.
        Every solution we provide is carefully designed and tested
        for reliability and long-term performance.
      </p>

      <p>
        Today, we proudly serve a growing network of satisfied clients
        while continuing to raise standards in access and security solutions.
      </p>
    </div>
  </section>

  {/* SECOND SECTION */}
  <section className="max-w-6xl mx-auto px-5 md:px-8 py-14">

    {/* HEADING */}
    <div className="text-center mb-14">
      <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
        What Drives Us
      </h1>

      <p className="text-zinc-400 text-lg md:text-xl">
        The values behind everything we do
      </p>
    </div>

    {/* CARDS */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

      {/* CARD */}
      <div className="bg-zinc-950 rounded-3xl p-8 border border-zinc-800 hover:border-red-700 transition-all duration-300">
        <h2 className="text-red-600 text-2xl font-semibold mb-5">
          🚀 Our Mission
        </h2>

        <p className="text-zinc-300 text-[16px] leading-8">
          Our mission is to deliver dependable solutions with
          quality, consistency, and customer satisfaction at the core.
        </p>
      </div>

      {/* CARD */}
      <div className="bg-zinc-950 rounded-3xl p-8 border border-zinc-800 hover:border-red-700 transition-all duration-300">
        <h2 className="text-red-600 text-2xl font-semibold mb-5">
          💎 Our Values
        </h2>

        <p className="text-zinc-300 text-[16px] leading-8">
          We believe in transparency, reliability, and long-term
          relationships built on trust and performance.
        </p>
      </div>

      {/* CARD */}
      <div className="bg-zinc-950 rounded-3xl p-8 border border-zinc-800 hover:border-red-700 transition-all duration-300">
        <h2 className="text-red-600 text-2xl font-semibold mb-5">
          🛠️ Our Expertise
        </h2>

        <p className="text-zinc-300 text-[16px] leading-8">
          Our industry experience allows us to provide dependable,
          carefully tested, and performance-focused solutions.
        </p>
      </div>
    </div>
  </section>

  {/* TIMELINE */}
  <section className="py-20 px-5">
    <div className="max-w-6xl mx-auto">

      <h1 className="text-center text-white text-4xl md:text-5xl font-bold mb-20">
        Our Journey
      </h1>

      <div className="relative">

        {/* CENTER LINE */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-0.5 h-full bg-zinc-700 hidden md:block" />

        <div className="space-y-14">

          {journeyData.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className={`flex ${
                  isLeft ? "md:justify-start" : "md:justify-end"
                }`}
              >
                <div className="w-full md:w-[46%]">

                  <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-7 hover:border-red-700 transition-all duration-300">

                    <div className="text-3xl mb-4">
                      {item.icon}
                    </div>

                    <h3 className="text-red-600 text-xl font-semibold mb-3">
                      {item.year}
                    </h3>

                    <h2 className="text-white text-2xl font-semibold mb-4">
                      {item.title}
                    </h2>

                    <p className="text-zinc-400 text-[15px] leading-7">
                      {item.description}
                    </p>

                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  </section>

  {/* WHY CHOOSE US */}
  <section className="max-w-6xl mx-auto px-5 md:px-8 py-16">

    <div className="text-center mb-14">
      <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
        Why Choose Us
      </h1>

      <p className="text-zinc-400 text-lg">
        Trusted quality, fast delivery, and dependable service
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

      {features.map((item, index) => (
        <div
          key={index}
          className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 hover:border-red-700 transition-all duration-300"
        >
          <h2 className="text-red-500 text-xl font-semibold leading-snug mb-5">
            {item.title}
          </h2>

          <p className="text-zinc-400 text-[15px] leading-7">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  </section>

  {/* FAQ */}
  <section className="max-w-4xl mx-auto px-5 pb-20">

    <h1 className="text-center text-white text-4xl md:text-5xl font-bold mb-12">
      Frequently Asked Questions
    </h1>

    <div className="space-y-4">

      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className="border border-zinc-800 rounded-2xl overflow-hidden bg-zinc-950"
          >
            <button
              onClick={() =>
                setOpenIndex(isOpen ? null : index)
              }
              className="w-full px-6 py-5 flex items-center justify-between text-left"
            >
              <span className="text-white text-lg md:text-xl font-medium">
                {faq.question}
              </span>

              <span className="text-red-600 text-3xl">
                {isOpen ? "−" : "+"}
              </span>
            </button>

            {isOpen && (
              <div className="px-6 pb-6 border-t border-zinc-800 pt-5">
                <p className="text-zinc-400 text-[15px] leading-7">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  </section>

</main>
  );
}