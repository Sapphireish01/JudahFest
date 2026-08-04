"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TicketStub } from "@/components/TicketStub";
import { TicketModal } from "@/components/TicketModal";
import { Button } from "@/components/ui/Button";
import { TICKET_TIERS, FAQS, TicketTier, EVENTBRITE_URL } from "@/data/tickets";
import { Ticket, Sparkles, ChevronDown, ChevronUp, ShieldCheck, HelpCircle } from "lucide-react";

export default function TicketsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<TicketTier>(TICKET_TIERS[1]);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleSelectTier = (tier: TicketTier) => {
    window.open(EVENTBRITE_URL, "_blank", "noopener,noreferrer");
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onOpenTicketsModal={() => setIsModalOpen(true)} />

      <main className="flex-1">
        {/* Page Hero Header */}
        <section className="bg-surface-container py-16 px-6 md:px-12 border-b-4 border-ink relative overflow-hidden">
          <div className="max-w-7xl mx-auto text-center flex flex-col items-center gap-4">
            <span className="bg-secondary text-white font-mono text-xs font-bold px-3 py-1 border-2 border-ink neo-shadow-sm rotate-[-2deg]">
              OFFICIAL TICKET ALTAR
            </span>

            <h1 className="font-headline text-6xl md:text-7xl text-ink tracking-tight">
              JUDAH FESTIVAL <span className="text-primary">2026 PASSES</span>
            </h1>

            <p className="font-body text-xl md:text-2xl text-gray-700 max-w-2xl leading-relaxed">
              Saturday, October 3, 2026 • 4:00 PM - 9:30 PM at Church at the South Star, Berlin, BE.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-2 font-mono text-xs font-bold text-gray-700">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-primary" /> Instant Serial Number (№ 00X)
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Sparkles className="w-4 h-4 text-tertiary-gold" /> Physical Paper Stub at Gate
              </span>
            </div>
          </div>
        </section>

        {/* Ticket Stubs List Section */}
        <section className="py-20 px-6 md:px-12 bg-paper border-b-4 border-ink">
          <div className="max-w-7xl mx-auto flex flex-col gap-10">
            <div className="text-center">
              <span className="font-annotation text-secondary text-xl rotate-[-1deg] block">
                Select Your Pass Level
              </span>
              <h2 className="font-headline text-5xl text-ink">PASS TIERS & PACKAGES</h2>
            </div>

            <div className="flex flex-col gap-8">
              {TICKET_TIERS.map((tier) => (
                <TicketStub
                  key={tier.id}
                  tier={tier}
                  onSelect={handleSelectTier}
                />
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Accordion Section */}
        <section className="py-20 px-6 md:px-12 bg-surface-high border-b-4 border-ink">
          <div className="max-w-4xl mx-auto flex flex-col gap-10">
            <div className="text-center">
              <span className="font-annotation text-secondary text-xl rotate-[-1.5deg] block">
                Have Questions?
              </span>
              <h2 className="font-headline text-5xl text-ink flex items-center justify-center gap-2">
                <HelpCircle className="w-8 h-8 text-primary" /> FREQUENTLY ASKED QUESTIONS
              </h2>
            </div>

            <div className="flex flex-col gap-4">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="bg-paper border-2 border-ink neo-shadow transition-all"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-5 text-left font-headline text-2xl md:text-3xl text-ink flex justify-between items-center gap-4 hover:bg-surface-container transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span>{faq.question}</span>
                      <span className="p-1 bg-surface-high border border-ink">
                        {isOpen ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="p-5 border-t-2 border-ink/20 font-body text-lg text-gray-800 leading-relaxed bg-surface-container/50">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <TicketModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedTier={selectedTier}
      />
    </div>
  );
}
