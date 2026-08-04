"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaInstagram, FaYoutube } from "react-icons/fa6";
import { DONATION_URL } from "@/data/tickets";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="relative bg-[#064219] text-[#E2EFE0] pt-12 pb-10 px-6 md:px-16 overflow-hidden">
      {/* Top Perforated Decorative Ticket Border */}
      {/* <div className="absolute top-0 left-0 right-0 h-2 bg-[radial-gradient(#FFF8F2_3px,transparent_3px)] bg-[length:12px_12px] bg-repeat-x opacity-90" /> */}

      <div className="max-w-8xl mx-auto">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-4 items-start pt-4">
          {/* Column 1: Brand Logo & Mission Statement */}
          <div className="md:col-span-6 flex flex-col gap-6">
            <div className="w-20 h-20 relative">
              <img
                src="/images/JUDAH-PNG.png"
                alt="JUDAH FESTIVAL"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="font-annotation text-lg md:text-xl text-[#D8E6D2] leading-relaxed uppercase max-w-lg">
              A GRASSROOTS MOVEMENT BRINGING HIGH-ENERGY COMMUNAL PRAISE BACK TO THE STREETS. BUILT FOR THE COMMUNITY, BY THE COMMUNITY.
            </p>
          </div>

          {/* Column 2: NAVIGATION */}
          <div className="md:col-span-1.5 flex flex-col gap-3">
            {/* <span className="font-mono text-base font-bold tracking-widest text-[#F0BF5F] uppercase mb-2">
              NAVIGATION
            </span> */}
            <ul className="flex flex-col gap-2.5 font-body text-base text-[#D4E4CE]">
              <li>
                <Link href="/" className="hover:text-[#F0BF5F] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/past-events" className="hover:text-[#F0BF5F] transition-colors">
                  Past Events
                </Link>
              </li>
              <li>
                <Link href="/upcoming" className="hover:text-[#F0BF5F] transition-colors">
                  Upcoming
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: SOCIAL */}
          <div className="md:col-span-1.5 flex flex-col gap-3">
            {/* <span className="font-mono text-base font-bold tracking-widest text-[#F0BF5F] uppercase mb-2">
              SOCIAL
            </span> */}
            <ul className="flex flex-col gap-2.5 font-body text-base text-[#D4E4CE]">
              <li>
                <a
                  href="https://www.instagram.com/judahfestival/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F0BF5F] transition-colors inline-flex items-center gap-2"
                >
                  <FaInstagram className="w-4 h-4" />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F0BF5F] transition-colors inline-flex items-center gap-2"
                >
                  <FaYoutube className="w-4 h-4" />
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href={DONATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-2 font-bold text-[#F0BF5F]"
                >
                  ❤️ Donate on GoFundMe
                </a>
              </li>
              <li>
                <Link href="/tickets" className="hover:text-[#F0BF5F] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: NEWSLETTER */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <span className="font-mono text-base font-bold tracking-widest text-[#F0BF5F] uppercase">
              NEWSLETTER
            </span>

            {subscribed ? (
              <span className="font-mono text-sm text-[#F0BF5F] font-bold">
                THANK YOU FOR SUBSCRIBING!
              </span>
            ) : (
              <form onSubmit={handleSubscribe} className="w-full">
                <div className="border-b border-[#D4E4CE]/70 pb-1.5 flex items-center justify-between w-full">
                  <input
                    type="email"
                    placeholder="YOUR EMAIL"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-transparent text-sm font-mono text-[#D4E4CE] placeholder:text-[#8AA882] uppercase focus:outline-none w-full pr-2"
                    aria-label="Email address"
                    required
                  />
                  <button
                    type="submit"
                    className="font-annotation text-xl lowercase text-[#D4E4CE] hover:text-[#F0BF5F] transition-colors cursor-pointer underline underline-offset-4 shrink-0"
                  >
                    send
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Horizontal Separator Line */}
        <div className="mt-14 mb-8 border-t border-[#D4E4CE]/20 w-full" />

        {/* Bottom Bar: Copyright & Icons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-md md:text-lg text-[#D8E6D2]">
          <p>© 2026 JUDAH FESTIVAL | BUILT FOR THE COMMUNITY | BY THE COMMUNITY</p>
          {/* <div className="font-mono text-sm text-[#8AA882] tracking-widest flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F0BF5F] transition-colors p-1"
              aria-label="Instagram"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F0BF5F] transition-colors p-1"
              aria-label="YouTube"
            >
              <FaYoutube className="w-5 h-5" />
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};
