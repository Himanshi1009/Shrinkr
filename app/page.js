"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-purple-50">
      <section className="grid md:grid-cols-2 grid-cols-1 items-center px-6 py-20 gap-10 max-w-7xl mx-auto">
        
        {/* Text Block */}
        <div className="flex flex-col gap-6 justify-center text-center md:text-left" data-aos="fade-up">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
            Shrinkr — Simplify Your Links
          </h1>

          <p className="text-gray-800 text-xl leading-relaxed">
            The best URL shortener in the market! 🚀<br />
            Convert long, messy URLs into clean, shareable links with Shrinkr.
            Whether for social media, emails, or websites, Shrinkr makes your links
            look neat and trackable. <strong>Fast</strong>, <strong>free</strong>, and <strong>reliable</strong> — get started in seconds!
          </p>

          <div className="flex justify-center md:justify-start">
            <Link href="/shorten">
              <button className="bg-purple-600 hover:bg-purple-700 transition-all px-6 py-3 text-white text-xl font-bold rounded-xl shadow-md transform hover:scale-105 duration-300">
                🔗 Try Now!
              </button>
            </Link>
          </div>
        </div>

        {/* Image Block */}
        <div className="relative w-full h-[320px] md:h-[420px]" data-aos="fade-left">
          <Image
            src="/vector.png"
            alt="vector image"
            fill
            className="object-contain"
            priority
          />
        </div>
      </section>
    </main>
  );
}
