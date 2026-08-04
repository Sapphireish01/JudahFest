"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { TicketTier, TICKET_TIERS, EVENTBRITE_URL } from "@/data/tickets";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { X, CheckCircle2, Ticket, ShieldCheck, Heart } from "lucide-react";

interface TicketModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTier?: TicketTier;
}

export const TicketModal: React.FC<TicketModalProps> = ({
  isOpen,
  onClose,
  selectedTier,
}) => {
  const [currentTier, setCurrentTier] = useState<TicketTier>(
    selectedTier || TICKET_TIERS[0]
  );
  const [quantity, setQuantity] = useState(1);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(EVENTBRITE_URL, "_blank", "noopener,noreferrer");
    onClose();
  };

  const totalPrice = currentTier.priceUSD * quantity;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/70 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-2xl bg-paper border-4 border-ink neo-shadow-lg p-6 md:p-8 my-8 max-h-[90vh] overflow-y-auto">
        {/* Washi Tape Accent */}
        <div className="absolute -top-3 left-8 washi-tape-gold rotate-[-4deg]" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-surface-high border-2 border-ink neo-shadow-sm hover:bg-red-100 transition-colors text-ink"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {!isSuccess ? (
          <div>
            <div className="flex items-center gap-2 mb-1">
              <img src="/images/JUDAH-PNG.png" alt="JUDAH FEST Logo" className="w-6 h-6 object-contain" />
              <span className="font-mono text-xs font-bold text-secondary uppercase tracking-widest">
                OFFICIAL REGISTRATION ALTAR
              </span>
            </div>
            <h2 id="modal-title" className="font-headline text-4xl text-ink">
              RESERVE YOUR FESTIVAL PASS
            </h2>
            <p className="font-body text-base text-gray-700 mb-6">
              Complete your details below. Your official serialised pass (№ 00X) will be generated instantly.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Tier Selection Radio Group */}
              <div className="flex flex-col gap-2">
                <label className="font-annotation text-sm font-semibold text-ink">
                  SELECT PASS TIER:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {TICKET_TIERS.map((tier) => (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => setCurrentTier(tier)}
                      className={`p-3 border-2 border-ink text-left transition-all ${
                        currentTier.id === tier.id
                          ? "bg-primary text-white neo-shadow-sm translate-x-0"
                          : "bg-surface-container text-ink hover:bg-surface-high"
                      }`}
                    >
                      <span className="font-headline text-lg block leading-tight">
                        {tier.name}
                      </span>
                      <span className="font-mono text-xs font-bold block mt-1">
                        ${tier.priceUSD}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Counter */}
              <div className="flex items-center justify-between p-4 bg-surface-container border-2 border-ink">
                <div>
                  <span className="font-headline text-xl text-ink block">
                    NUMBER OF PASSES
                  </span>
                  <span className="font-mono text-xs text-gray-600">
                    Max 10 passes per registration order
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 bg-paper border-2 border-ink neo-shadow-sm font-headline text-2xl active:translate-x-0.5 active:translate-y-0.5"
                  >
                    -
                  </button>
                  <span className="font-mono text-2xl font-bold px-3">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.min(10, quantity + 1))}
                    className="w-10 h-10 bg-paper border-2 border-ink neo-shadow-sm font-headline text-2xl active:translate-x-0.5 active:translate-y-0.5"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Form Inputs adhering to UI_STANDARDS.md */}
              <Input
                label="FULL NAME (ATTENDEE NAME)"
                placeholder="e.g. Samuel Adebayo"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                error={errors.fullName}
              />

              <Input
                label="EMAIL ADDRESS (FOR DIGI-STUB DELIVERY)"
                type="email"
                placeholder="samuel@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={errors.email}
              />

              <Input
                label="PHONE NUMBER (WHATSAPP UPDATES)"
                type="tel"
                placeholder="+234 801 234 5678"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                error={errors.phone}
              />

              {/* Summary Box */}
              <div className="p-4 bg-tertiary-gold/20 border-2 border-ink flex items-center justify-between">
                <div>
                  <span className="font-headline text-lg text-ink block">
                    ORDER TOTAL ({quantity}x {currentTier.name})
                  </span>
                  <span className="font-mono text-xs text-gray-700">
                    Includes all stage admissions & physical stub
                  </span>
                </div>
                <span className="font-headline text-4xl text-primary font-bold">
                  ${totalPrice}
                </span>
              </div>

              {/* Submit CTA */}
              <Button
                variant="primary"
                size="lg"
                type="submit"
                isLoading={isSubmitting}
                className="w-full"
              >
                CONFIRM & BOOK PASS NOW (${totalPrice})
              </Button>

              <p className="font-mono text-xs text-center text-gray-600 flex items-center justify-center gap-1">
                <ShieldCheck className="w-4 h-4 text-primary" />
                SSL Encrypted • Instant Serial Number Assignment
              </p>
            </form>
          </div>
        ) : (
          /* Confirmation Success View */
          <div className="text-center py-6 flex flex-col items-center gap-4">
            <div className="w-16 h-16 bg-primary text-white flex items-center justify-center rounded-full border-2 border-ink neo-shadow">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <span className="font-annotation text-secondary text-sm rotate-[-2deg]">
              Praise Yahweh! Registration Complete.
            </span>

            <h2 className="font-headline text-5xl text-ink">
              YOU ARE GOING TO JUDAH FEST!
            </h2>

            <div className="w-full bg-surface-container p-6 border-2 border-ink neo-shadow text-left my-2">
              <div className="flex justify-between items-center border-b border-ink/20 pb-3 mb-3">
                <span className="font-mono text-xs text-gray-600 font-bold">
                  CONFIRMATION NUMBER
                </span>
                <span className="font-mono text-lg font-bold text-primary">
                  {orderNumber}
                </span>
              </div>

              <div className="flex justify-between items-center border-b border-ink/20 pb-3 mb-3">
                <span className="font-mono text-xs text-gray-600 font-bold">
                  REGISTERED PASS
                </span>
                <span className="font-headline text-xl text-ink">
                  {quantity}x {currentTier.name}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="font-mono text-xs text-gray-600 font-bold">
                  DIGITAL STUB SENT TO
                </span>
                <span className="font-mono text-sm font-bold text-ink">
                  {email}
                </span>
              </div>
            </div>

            <p className="font-body text-base text-gray-700 max-w-md">
              Check your inbox for your QR stub. Bring this stub on your phone to exchange for your custom physical printed flyer stub at the entrance!
            </p>

            <Button
              variant="gold"
              size="md"
              onClick={() => {
                setIsSuccess(false);
                onClose();
              }}
              className="mt-2"
            >
              DONE & RETURN TO FESTIVAL
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
