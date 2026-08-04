"use client";

import React from "react";
import { TicketTier } from "@/data/tickets";
import { Button } from "./ui/Button";
import { Check, Sparkles } from "lucide-react";

interface TicketStubProps {
  tier: TicketTier;
  onSelect: (tier: TicketTier) => void;
}

export const TicketStub: React.FC<TicketStubProps> = ({ tier, onSelect }) => {
  const isGold = tier.color === "gold";
  const isEmber = tier.color === "ember";

  return (
    <div className="relative group transition-transform duration-200 hover:-translate-y-1">
      {/* Corner Washi Tape Motif */}
      <div
        className={`absolute -top-3 -right-3 z-20 rotate-[12deg] ${
          isEmber ? "washi-tape-ember" : "washi-tape-gold"
        }`}
      />

      {/* Main Ticket Container */}
      <div className="bg-paper border-2 border-ink neo-shadow flex flex-col md:flex-row overflow-hidden min-h-[260px]">
        {/* Left Side: Ticket Main Pass Info */}
        <div className="flex-1 p-6 flex flex-col justify-between border-b-2 md:border-b-0 md:border-r-2 border-ink border-dashed">
          <div>
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="font-mono text-xs font-bold px-2 py-0.5 border border-ink bg-surface-container w-fit flex items-center gap-1.5">
                <img src="/images/JUDAH-PNG.png" alt="JUDAH FEST" className="w-4 h-4 object-contain inline-block" />
                {tier.badge}
              </span>
              <span className="font-mono text-xs font-bold text-secondary">
                {tier.serialPrefix}
              </span>
            </div>

            <h3 className="font-headline text-3xl md:text-4xl text-ink tracking-wide">
              {tier.name}
            </h3>

            <p className="font-mono text-xs text-gray-700 mt-1 uppercase font-semibold">
              VALID FOR: {tier.period}
            </p>

            <ul className="mt-4 flex flex-col gap-2 font-body text-base">
              {tier.perks.map((perk, i) => (
                <li key={i} className="flex items-start gap-2 text-ink">
                  <span className="bg-primary text-white p-0.5 rounded-full mt-0.5 shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span>{perk}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 pt-4 border-t border-ink/20 flex items-center justify-between">
            <span className="font-annotation text-xs text-gray-600">
              *Limited physical stub issuance at gates
            </span>
            {tier.popular && (
              <span className="font-headline text-sm bg-tertiary-gold text-ink px-2 py-0.5 border border-ink flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> RECOMMENDED
              </span>
            )}
          </div>
        </div>

        {/* Right Side: Perforated Tear-off Stub */}
        <div className="w-full md:w-56 bg-surface-high p-6 flex flex-col justify-between items-center text-center ticket-perforation-v border-t-2 md:border-t-0 border-ink">
          <div className="w-full">
            <span className="font-headline text-lg text-ink/70 tracking-widest block">
              ADMIT ONE
            </span>
            <div className="my-3 py-2 px-3 bg-paper border-2 border-ink neo-shadow-sm">
              <span className="font-headline text-4xl text-primary block leading-none">
                {tier.priceUSD > 0 ? `$${tier.priceUSD}` : "FREE"}
              </span>
              <span className="font-mono text-xs text-gray-600 font-bold block mt-1">
                {tier.priceLocal}
              </span>
            </div>
          </div>

          <div className="w-full mt-4">
            <Button
              variant={isGold ? "gold" : isEmber ? "secondary" : "primary"}
              size="md"
              className="w-full"
              onClick={() => onSelect(tier)}
            >
              BOOK PASS
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
