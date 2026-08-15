"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa6";
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
    <footer className="relative bg-[#064219] text-[#E2EFE0] pt-12 pb-10 px-6 md:px-12 overflow-hidden">
      {/* Top Perforated Decorative Ticket Border */}
      {/* <div className="absolute top-0 left-0 right-0 h-2 bg-[radial-gradient(#FFF8F2_3px,transparent_3px)] bg-[length:12px_12px] bg-repeat-x opacity-90" /> */}

      <div className="max-w-7xl mx-auto">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start pt-4">
          {/* Column 1: Brand Logo & Mission Statement */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="w-20 h-20 relative">
              <img
                src="/images/JUDAH-PNG.png"
                alt="JUDAH FESTIVAL"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="font-annotation text-[14px] leading-[32px] tracking-[1.5px] text-[#D8E6D2] uppercase max-w-md">
              A GRASSROOTS MOVEMENT BRINGING HIGH-ENERGY COMMUNAL PRAISE BACK TO THE STREETS. BUILT FOR THE COMMUNITY, BY THE COMMUNITY.
            </p>
          </div>

          {/* Column 2: NAVIGATION */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <span className="font-mono text-xs font-bold tracking-widest text-[#F0BF5F] uppercase mb-1">
              NAVIGATION
            </span>
            <ul className="flex flex-col gap-2.5 font-body text-base text-[#D4E4CE]">
              <li>
                <Link href="/" className="hover:text-[#F0BF5F] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/upcoming" className="hover:text-[#F0BF5F] transition-colors">
                  Upcoming
                </Link>
              </li>
              <li>
                <Link href="/past-events" className="hover:text-[#F0BF5F] transition-colors">
                  Past Events
                </Link>
              </li>
              <li>
                <Link href="/tickets" className="hover:text-[#F0BF5F] transition-colors">
                  Tickets & Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: SOCIAL */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <span className="font-mono text-xs font-bold tracking-widest text-[#F0BF5F] uppercase mb-1">
              CONNECT
            </span>
            <ul className="flex flex-col gap-2.5 font-body text-base text-[#D4E4CE]">
              <li>
                <a
                  href="https://www.instagram.com/judahfestival/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F0BF5F] transition-colors inline-flex items-center gap-2"
                >
                  <FaInstagram className="w-4 h-4 text-[#F0BF5F]" />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@judah.festival"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F0BF5F] transition-colors inline-flex items-center gap-2"
                >
                  <FaTiktok className="w-4 h-4 text-[#F0BF5F]" />
                  TikTok
                </a>
              </li>
              <li>
                <a
                  href="https://youtu.be/uyC3rGUPrRM?si=NrWGlCT8qdwCJVmj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F0BF5F] transition-colors inline-flex items-center gap-2"
                >
                  <FaYoutube className="w-4 h-4 text-[#F0BF5F]" />
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href={DONATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1.5 font-bold text-[#F0BF5F]"
                >
                  ❤️ Donate on GoFundMe
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: NEWSLETTER */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <span className="font-mono text-xs font-bold tracking-widest text-[#F0BF5F] uppercase">
              NEWSLETTER
            </span>
            <p className="font-body text-sm text-[#D8E6D2]/80 leading-snug">
              Subscribe for official festival announcements, lineup reveals, and early ticket alerts.
            </p>

            {subscribed ? (
              <div className="p-3 bg-[#F0BF5F]/15 border border-[#F0BF5F] font-mono text-xs text-[#F0BF5F] font-bold uppercase text-center">
                ✓ THANK YOU FOR SUBSCRIBING!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="w-full mt-1">
                <div className="border-b-2 border-[#D4E4CE]/70 pb-2 flex items-center justify-between w-full gap-2">
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
                    className="font-mono text-xs font-bold uppercase bg-[#F0BF5F] text-[#064219] px-3 py-1.5 hover:bg-white transition-colors shrink-0"
                  >
                    JOIN
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Horizontal Separator Line */}
        <div className="mt-12 mb-6 border-t border-[#D4E4CE]/20 w-full" />

        {/* Bottom Bar: Copyright & Quick Social Badges */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-[#D8E6D2]/80">
          <p>© 2026 JUDAH FESTIVAL | BUILT FOR THE COMMUNITY | BY THE COMMUNITY</p>
          <div className="flex items-center gap-4 text-[#D4E4CE]">
            <a
              href="https://www.instagram.com/judahfestival/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F0BF5F] transition-colors p-1"
              aria-label="Instagram"
            >
              <FaInstagram className="w-4 h-4" />
            </a>
            <a
              href="https://www.tiktok.com/@judah.festival"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F0BF5F] transition-colors p-1"
              aria-label="TikTok"
            >
              <FaTiktok className="w-4 h-4" />
            </a>
            <a
              href="https://youtu.be/uyC3rGUPrRM?si=NrWGlCT8qdwCJVmj"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F0BF5F] transition-colors p-1"
              aria-label="YouTube"
            >
              <FaYoutube className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
