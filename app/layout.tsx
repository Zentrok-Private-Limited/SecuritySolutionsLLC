import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';
import { CartProvider } from "@/context/CartContext";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Security Solutions LLC | Corporate & Industrial Security',
  description: 'Enterprise access control, surveillance setups, real-time asset monitoring, and custom physical protection plans.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 text-slate-900 flex flex-col min-h-screen`}>
        <CartProvider>
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
        </CartProvider>
      </body>
    </html>
  );
}