"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TicketModal } from "@/components/TicketModal";
import { Button } from "@/components/ui/Button";
import { PAST_EVENTS, TESTIMONIALS, PastEvent } from "@/data/lineup";
import { Play, Pause, Volume2, Image as ImageIcon, Sparkles, X } from "lucide-react";

export default function PastEventsPage() {
  const [isTicketsModalOpen, setIsTicketsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onOpenTicketsModal={() => setIsTicketsModalOpen(true)} />

      <main className="flex-1">
        {/* Hero Header */}
        <section className="bg-surface-container py-16 px-6 md:px-12 border-b-4 border-ink">
          <div className="max-w-7xl mx-auto text-center flex flex-col items-center gap-4">
            <span className="bg-tertiary-gold text-ink font-mono text-xs font-bold px-3 py-1 border-2 border-ink neo-shadow-sm rotate-[1.5deg]">
              SACRED MEMORY VAULT
            </span>

            <h1 className="font-headline text-6xl md:text-7xl text-ink tracking-tight">
              PAST GATHERINGS <span className="text-secondary">ARCHIVE</span>
            </h1>

            <p className="font-body text-xl md:text-2xl text-gray-700 max-w-2xl leading-relaxed">
              Relive the power, praise, and fellowship from previous editions of Judah Festival.
            </p>
          </div>
        </section>

        {/* Corkboard Archive Gallery Section */}
        <section className="py-20 px-6 md:px-12 bg-paper border-b-4 border-ink">
          <div className="max-w-7xl mx-auto flex flex-col gap-16">
            {PAST_EVENTS.map((event, idx) => (
              <div
                key={event.year}
                className="bg-surface-high border-4 border-ink neo-shadow-lg p-6 md:p-8 relative"
              >
                <div className="absolute -top-4 left-6 washi-tape-gold rotate-[-6deg]" />

                <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-4 border-b-2 border-ink pb-4 mb-6">
                  <div>
                    <span className="font-headline text-4xl text-primary block">
                      JUDAH FEST {event.year}
                    </span>
                    <h2 className="font-headline text-2xl text-secondary uppercase tracking-wide">
                      THEME: &quot;{event.theme}&quot;
                    </h2>
                  </div>

                  <span className="font-mono text-sm font-bold bg-paper px-4 py-2 border-2 border-ink neo-shadow-sm w-fit">
                    👥 {event.attendance}
                  </span>
                </div>

                {/* Grid of Highlights & Photos */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-5 flex flex-col gap-4">
                    <h3 className="font-headline text-2xl text-ink">GATHERING HIGHLIGHTS:</h3>
                    <ul className="flex flex-col gap-2 font-body text-lg text-gray-800">
                      {event.highlights.map((h, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <img src="/images/JUDAH-PNG.png" alt="JUDAH FEST" className="w-5 h-5 object-contain inline-block shrink-0" /> {h}
                        </li>
                      ))}
                    </ul>

                    {/* Audio Live Snippet Player Card if present */}
                    {event.audioSnippet && (
                      <div className="mt-4 p-4 bg-paper border-2 border-ink neo-shadow">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-mono text-xs font-bold text-secondary flex items-center gap-1">
                            <Volume2 className="w-4 h-4" /> LIVE RECORDING SNIPPET
                          </span>
                          <span className="font-mono text-xs">{event.audioSnippet.duration}</span>
                        </div>
                        <p className="font-headline text-xl text-ink">
                          {event.audioSnippet.title}
                        </p>

                        <button
                          onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                          className="mt-3 w-full py-2 bg-primary text-white font-headline text-xl border-2 border-ink neo-shadow-sm flex items-center justify-center gap-2 hover:bg-primary-hover transition-colors"
                        >
                          {isPlayingAudio ? (
                            <>
                              <Pause className="w-5 h-5" /> PAUSE RECORDING
                            </>
                          ) : (
                            <>
                              <Play className="w-5 h-5 fill-current" /> PLAY LIVE SOUND
                            </>
                          )}
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Photo Cards Collage */}
                  <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {event.photos.map((photo, pIdx) => (
                      <div
                        key={pIdx}
                        onClick={() => setSelectedPhoto(photo)}
                        className={`relative h-48 bg-paper p-2 border-2 border-ink neo-shadow cursor-pointer group halftone overflow-hidden ${
                          pIdx % 2 === 0 ? "rotate-[-2deg]" : "rotate-[2deg]"
                        }`}
                      >
                        <Image
                          src={photo}
                          alt={`Judah Fest ${event.year} photo ${pIdx + 1}`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                          className="object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-300"
                        />
                        <div className="absolute inset-0 bg-ink/30 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white font-headline text-lg transition-opacity">
                          <ImageIcon className="w-6 h-6 mr-1" /> VIEW
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />

      {/* Lightbox Photo Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/80 backdrop-blur-sm animate-in fade-in"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-paper p-4 border-4 border-ink neo-shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute -top-4 -right-4 p-2 bg-surface-high border-2 border-ink neo-shadow-sm font-headline text-xl"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative h-[60vh] w-full border-2 border-ink">
              <Image
                src={selectedPhoto}
                alt="Enlarged festival memory"
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}

      <TicketModal
        isOpen={isTicketsModalOpen}
        onClose={() => setIsTicketsModalOpen(false)}
      />
    </div>
  );
}
