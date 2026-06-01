"use client";
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView, Variants } from 'framer-motion';


function Counter({ value, decimals = 0 }: { value: number; decimals?: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  
  // Start the motion track strictly at 0
  const motionValue = useMotionValue(0);
  
  // Format decimal placement during live runtime ticks
  const transformValue = useTransform(motionValue, (latest) => {
    return Number(latest).toFixed(decimals);
  });
  
  // CRITICAL FIX: Changed margin to "-30%". 
  // This delays the trigger until the numbers are comfortably inside the user's field of view.
  const isInView = useInView(nodeRef, { once: true, margin: "0px 0px -30% 0px" });

  useEffect(() => {
    if (isInView) {
      // Force a distinct, stylized count up over 3.5 seconds
      const controls = animate(motionValue, value, {
        duration: 3.5, 
        ease: [0.16, 1, 0.3, 1], // Premium custom ultra-smooth ease-out cubic bezier curve
      });
      return () => controls.stop();
    }
  }, [motionValue, isInView, value]);

  return <motion.span ref={nodeRef}>{transformValue}</motion.span>;
}


export default function Home() {
  const baseBrands = ['DENSO', 'ACDELCO', 'DELPHI', 'MANN FILTER', 'NGK', 'MOOG', 'TIMKEN', 'BOSCH'];
  // Duplicate array to create an infinite seam
  const doubleBrands = [...baseBrands, ...baseBrands];

  const fadeInUpVariants : Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const baseFeatures = [
    {
      icon: (
        <svg className="w-6 h-6 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Secure Payments',
      desc: 'Safe and encrypted checkout.',
    },
    {
      icon: (
        <svg className="w-6 h-6 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Top Quality',
      desc: 'Premium OEM & aftermarket parts.',
    },
    {
      icon: (
        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
      ),
      title: 'Easy Returns',
      desc: 'Hassle-free return process.',
    },
    {
      icon: (
        <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM19.5 18.75a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.5 5.25h12.75l3 5.25H21v6.75h-2.25M16.25 5.25v12m-12.75-3h12.75M3.5 14.25v3" />
        </svg>
      ),
      title: 'Fast Shipping',
      desc: 'Quick delivery across the USA.',
    },
  ];

  // Duplicate to allow flawless infinite layout translation
  const doubledFeatures = [...baseFeatures, ...baseFeatures];

  // Framer Motion Stagger Variants for the grid layout
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  const stats = [
    { number: 100, suffix: "%", label: "DIRECT SOURCED", decimals: 0 },
    { number: 15, suffix: "K", label: "HAPPY CUSTOMERS", decimals: 0 },
    { number: 6, suffix: "+", label: "YEARS EXPERIENCE", decimals: 0 },
    { number: 99.6, suffix: "%", label: "SATISFACTION RATE", decimals: 1 },
  ];


  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black pt-28">
      
      {/* 1. BACKGROUND VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 object-center"
      >
        {/* Replace with your actual local video path in the public folder */}
        <source src="bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Heavy radial/linear dark tint overlay to make text highly readable over the video */}
      <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/50 to-black/90 z-10" />

      {/* 2. HERO CONTENT CONTAINER */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        
        {/* Main Heading Matrix */}
        <h1 className="tracking-tight leading-tight sm:leading-none mb-4">
          <span className="block text-white/80 font-bold text-4xl sm:text-6xl md:text-7xl opacity-90 select-none">
            Built for Performance.
          </span>
          <span className="block text-[#e60000] font-extrabold text-4xl sm:text-6xl md:text-7xl mt-2 drop-shadow-[0_4px_12px_rgba(230,0,0,0.15)]">
            Trusted by Professionals
          </span>
        </h1>

        {/* Subtext Paragraph */}
        <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mt-8 font-normal tracking-wide leading-relaxed">
          High-quality auto parts with fast delivery and reliable performance across the USA.
        </p>

        {/* 3. DISTINCT RED PILL BUTTON */}
        <div className="mt-12">
          <Link 
            href="/shop" 
            className="inline-block px-10 py-4 rounded-full text-white font-bold text-base sm:text-lg tracking-wide bg-transparent transition-all duration-300 hover:bg-red-600/10 active:scale-98"
            style={{
              // Achieves that unique structural glow line outline styling seen in Screenshot (129).jpg
              boxShadow: '0 0 0 2px #e60000, 0 0 0 4px rgba(0,0,0,1), 0 0 0 5px #e60000'
            }}
          >
            <span className="underline underline-offset-4 decoration-2 decoration-red-600 hover:decoration-white transition-colors">
              Shop Auto Parts Now
            </span>
          </Link>
        </div>

      </div>

      {/* Subtle Bottom Transition Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-[#0a0000] to-transparent z-10" />
    </section>


    {/* ================= SECTION 1: TRUSTED BRANDS SLIDER ================= */}
      <section className="relative py-30 border-b border-zinc-900 bg-linear-to-r from-black via-zinc-950 to-red-600">
        <div className="max-w-7xl mx-auto px-6 text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Shop Premium Auto Parts by Trusted Brands
          </h2>
          <p className="text-zinc-400 text-base sm:text-base mt-3 max-w-2xl mx-auto font-light">
            Explore top-quality components from industry-leading manufacturers, built for performance, durability, and reliability.
          </p>
        </div>

        {/* Framer Motion Infinite Loop Track */}
        <div className="relative w-full flex items-center overflow-hidden py-4 select-none">
          <motion.div 
            className="flex gap-6 px-4 whitespace-nowrap"
            animate={{ x: [0, '-50%'] }}
            transition={{
              ease: "linear",
              duration: 22, // Adjust loop duration (lower = faster)
              repeat: Infinity,
            }}
          >
            {doubleBrands.map((brand, idx) => (
              <div
                key={idx}
                className="w-40 sm:w-48 h-16 shrink-0 bg-zinc-950/80 border border-zinc-800/80 rounded flex items-center justify-center font-black tracking-widest text-xs sm:text-sm text-zinc-300 hover:text-white hover:border-red-600 transition-colors duration-300 shadow-lg"
              >
                {brand}
              </div>
            ))}
          </motion.div>

          {/* Premium Faded Edge Blurs */}
          <div className="absolute inset-y-0 left-0 w-20 bg-linear-to-r from-black to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-linear-to-l from-red-600 to-transparent pointer-events-none z-10" />
        </div>
      </section>


      {/* ================= SECTION 2: WHY CHOOSE US GRID ================= */}
      <section className="bg-black text-white py-24 w-full overflow-hidden">
      
      {/* Title Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#e60000] tracking-wide drop-shadow-[0_2px_10px_rgba(230,0,0,0.1)]">
          Why Choose Us
        </h2>
      </div>

      {/* Infinite Carousel Window */}
      <div className="relative w-full flex items-center overflow-hidden py-4 select-none">
        
        <motion.div 
          className="flex gap-6 px-3 whitespace-nowrap"
          animate={{ x: [0, '-50%'] }}
          transition={{
            ease: "linear",
            duration: 28, // Slower duration than the brands to make text readable
            repeat: Infinity,
          }}
          // Optional: Pauses the marquee when a user hovers over a card to read it
          whileHover={{ animationPlayState: 'paused' }} 
        >
          {doubledFeatures.map((feat, idx) => (
            <div
              key={idx}
              className="w-70 sm:w-[320px] shrink-0 bg-zinc-900/40 border border-zinc-800/60 rounded-xl p-8 flex flex-col items-center text-center justify-center hover:bg-zinc-900/70 hover:border-zinc-700/80 transition-all duration-300 shadow-xl"
            >
              {/* Icon Container */}
              <div className="w-14 h-14 bg-zinc-950 rounded-xl border border-zinc-800 flex items-center justify-center mb-6 shadow-inner">
                {feat.icon}
              </div>
              
              {/* Feature Title */}
              <h3 className="text-[#e60000] font-bold text-lg tracking-wide mb-2 whitespace-normal">
                {feat.title}
              </h3>
              
              {/* Description Text */}
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-normal whitespace-normal">
                {feat.desc}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Dynamic Edge Vignette Blurs */}
        <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-black via-black/80 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-black via-black/80 to-transparent pointer-events-none z-10" />
      </div>

    </section>


    {/* ================= SECTION 1: ANIMATED STATS BLOCK ================= */}
      <section className="py-16 max-w-360 mx-auto px-6 bg-linear-to-r from-black via-zinc-950 to-red-600">
        <div className="flex overflow-x-auto pb-4 gap-6 scrollbar-none lg:grid lg:grid-cols-4 lg:overflow-x-visible">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="min-w-60 flex-1 bg-zinc-900/30 border border-zinc-800/50 rounded-xl p-8 flex flex-col justify-center items-start hover:border-zinc-700/80 transition-colors duration-300 shadow-xl"
            >
              {/* Dynamic Ticking Number Row */}
              <div className="text-[#e60000] font-black text-4xl sm:text-5xl tracking-tight mb-3 flex items-baseline">
                <Counter value={stat.number} decimals={stat.decimals} />
                <span>{stat.suffix}</span>
              </div>
              
              {/* Sub Label */}
              <p className="text-zinc-400 text-xs font-bold tracking-widest uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SECTION 2: FINAL CALL TO ACTION (CTA) ================= */}
      <section className="relative py-28 border-t border-zinc-900/80 overflow-hidden bg-linear-to-b from-black to-[#050000]">
        
        {/* Deep asymmetric background red ambient glow on the right matching screen layout */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-100 h-100 bg-red-900/10 rounded-full blur-[120px] pointer-events-none z-0" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
          
          {/* Main Title Header with subtle dual drop shadow layer */}
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-6 drop-shadow-[0_4px_20px_rgba(255,255,255,0.05)]">
            Ready to Find Your Parts
          </h2>
          
          {/* Description subtext info summary */}
          <p className="text-zinc-400 text-sm sm:text-base md:text-lg max-w-2xl font-light tracking-wide leading-relaxed mb-10">
            Browse thousands of genuine auto parts with free shipping on orders over $99.
          </p>

          {/* Solid Red Rectangular Button Matrix Layout */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto"
          >
            <Link
              href="/shop"
              className="inline-block w-full sm:w-auto px-12 py-4 bg-[#e60000] hover:bg-[#ff0505] text-white font-extrabold text-base rounded-lg tracking-wide uppercase transition-colors duration-200 shadow-xl shadow-red-900/20 text-center"
            >
              Shop Now
            </Link>
          </motion.div>

        </div>
      </section>

      <section className="bg-black text-white py-16 border-t border-zinc-900/60 w-full overflow-hidden">
      <motion.div 
        className="max-w-6xl mx-auto px-6 flex flex-col items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -25% 0px" }}
        variants={fadeInUpVariants}
      >
        {/* Section Header Title */}
        <h3 className="text-red-600 font-black text-xl md:text-3xl tracking-[0.25em] uppercase mb-10 text-center drop-shadow-[0_2px_8px_rgba(230,0,0,0.15)]">
          Secure Payments Accepted
        </h3>

        {/* Logos Flex Row Grid Matrix Layout */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-80 hover:opacity-100 transition-opacity duration-300">
          
          {/* VISA */}
          <div className="h-10 w-24 sm:w-28 bg-zinc-900/20 border border-zinc-800/40 rounded-lg p-2 flex items-center justify-center backdrop-blur-xs hover:border-zinc-700 transition-colors">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Visa_Inc._logo_%282021%E2%80%93present%29.svg" 
              alt="Visa" 
              className="h-full object-contain filter brightness-110"
            />
          </div>

          {/* MASTERCARD */}
          <div className="h-10 w-24 sm:w-28 bg-zinc-900/20 border border-zinc-800/40 rounded-lg p-2 flex items-center justify-center backdrop-blur-xs hover:border-zinc-700 transition-colors">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" 
              alt="Mastercard" 
              className="h-full object-contain"
            />
          </div>

          {/* AMERICAN EXPRESS */}
          <div className="h-10 w-24 sm:w-28 bg-zinc-900/20 border border-zinc-800/40 rounded-lg p-2 flex items-center justify-center backdrop-blur-xs hover:border-zinc-700 transition-colors">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg" 
              alt="American Express" 
              className="h-6 object-contain rounded-xs"
            />
          </div>

          {/* DISCOVER */}
          <div className="h-10 w-24 sm:w-28 bg-white border border-zinc-800/40 rounded-lg p-2 flex items-center justify-center backdrop-blur-xs hover:border-zinc-700 transition-colors">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/5/57/Discover_Card_logo.svg" 
              alt="Discover" 
              className="h-4 sm:h-5 object-contain filter brightness-120"
            />
          </div>

          {/* PAYPAL */}
          <div className="h-18 w-24 md:w-28 bg-zinc-900/20 border border-zinc-800/40 rounded-lg p-2 flex items-center justify-center backdrop-blur-xs hover:border-zinc-700 transition-colors">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" 
              alt="PayPal" 
              className="h-6 object-contain"
            />
          </div>

        </div>
      </motion.div>
    </section>
    </div>
  );

}
