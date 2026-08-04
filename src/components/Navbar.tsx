"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/Button";
import { Menu, X, Ticket, Heart } from "lucide-react";
import { EVENTBRITE_URL, DONATION_URL } from "@/data/tickets";

interface NavbarProps {
  onOpenTicketsModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTicketsModal }) => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleTicketClick = () => {
    window.open(EVENTBRITE_URL, "_blank", "noopener,noreferrer");
  };

  const handleDonateClick = () => {
    window.open(DONATION_URL, "_blank", "noopener,noreferrer");
  };

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "UPCOMING", href: "/upcoming" },
    { name: "PAST EVENTS", href: "/past-events" },
    { name: "TICKETS", href: "/tickets" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-paper border-b-2 border-ink neo-shadow py-3 px-4 md:px-12 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo / Monoton Mark */}
        <Link
          href="/"
          className="flex items-center gap-2 group focus:outline-none"
        >
          <img src="/images/JUDAH-PNG.png" alt="JUDAH FEST Logo" className="w-24 h-12 object-contain inline-block" />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-mono text-base font-bold tracking-tight transition-colors relative py-1 ${isActive
                  ? "text-primary border-b-4 border-tertiary-gold"
                  : "text-ink hover:text-primary"
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="gold" size="md" onClick={handleDonateClick}>
            <Heart className="w-4 h-4 mr-1.5 fill-ink" />
            DONATE
          </Button>
          <Button variant="primary" size="md" onClick={handleTicketClick}>
            <Ticket className="w-5 h-5 mr-2" />
            GET TICKETS
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-ink border-2 border-ink neo-shadow-sm bg-surface-container focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 pt-4 pb-6 px-4 border-t-2 border-ink bg-surface-high flex flex-col gap-4 animate-in slide-in-from-top-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-headline text-3xl tracking-wide py-2 px-3 border-2 border-ink neo-shadow-sm ${isActive
                  ? "bg-primary text-white"
                  : "bg-paper text-ink hover:bg-surface-container"
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-2 flex flex-col gap-3">
            <Button
              variant="gold"
              size="lg"
              className="w-full"
              onClick={() => {
                setMobileMenuOpen(false);
                handleDonateClick();
              }}
            >
              <Heart className="w-5 h-5 mr-2 fill-ink" />
              DONATE TO THE CAUSE
            </Button>
            <Button
              variant="primary"
              size="lg"
              className="w-full"
              onClick={() => {
                setMobileMenuOpen(false);
                handleTicketClick();
              }}
            >
              <Ticket className="w-6 h-6 mr-2" />
              BUY TICKETS NOW
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
