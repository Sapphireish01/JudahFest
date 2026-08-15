"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TicketModal } from "@/components/TicketModal";
import { Button } from "@/components/ui/Button";
import { PAST_EVENTS, PastEvent } from "@/data/lineup";
import { Play, Pause, Volume2, Image as ImageIcon, Sparkles, X, ArrowLeft, Grid, ArrowRight } from "lucide-react";

// Dynamic sizing variants for organic masonry wall flow
const GALLERY_ITEMS = [
  { src: "/pastevent/DSC03133.webp", height: "h-80 md:h-96", colSpan: "col-span-1 md:col-span-2", title: "Worship Unplugged", aspect: "Wide Hero" },
  { src: "/pastevent/DSC03311.webp", height: "h-96 md:h-[420px]", colSpan: "col-span-1", title: "Atmosphere of Praise", aspect: "Tall Portrait" },
  { src: "/pastevent/DSC03391.webp", height: "h-72 md:h-80", colSpan: "col-span-1", title: "Communal Fellowship", aspect: "Square" },
  { src: "/pastevent/DSC03397.webp", height: "h-80 md:h-96", colSpan: "col-span-1 md:col-span-2", title: "Main Stage Shofar", aspect: "Panoramic" },
  { src: "/pastevent/DSC03401.webp", height: "h-72 md:h-88", colSpan: "col-span-1", title: "Midnight Intercession", aspect: "Medium" },
  { src: "/pastevent/DSC03405.webp", height: "h-96 md:h-[400px]", colSpan: "col-span-1", title: "Youth Afrogospel Joy", aspect: "Tall Portrait" },
  { src: "/pastevent/DSC03415.webp", height: "h-64 md:h-72", colSpan: "col-span-1", title: "Sacred Moments", aspect: "Compact" },
  { src: "/pastevent/DSC03416.webp", height: "h-80 md:h-96", colSpan: "col-span-1 md:col-span-2", title: "Altar Elevation", aspect: "Wide Banner" },
  { src: "/pastevent/DSC03696.webp", height: "h-96 md:h-[440px]", colSpan: "col-span-1", title: "Choir Harmony", aspect: "Tall Feature" },
  { src: "/pastevent/DSC03727.webp", height: "h-72 md:h-80", colSpan: "col-span-1", title: "Crowd Worship", aspect: "Standard" },
  { src: "/pastevent/DSC03730.webp", height: "h-80 md:h-96", colSpan: "col-span-1 md:col-span-2", title: "Glorious Celebration", aspect: "Wide Showcase" },
  { src: "/pastevent/DSC03808.webp", height: "h-72 md:h-88", colSpan: "col-span-1", title: "Praise & Prayer", aspect: "Medium" },
  { src: "/pastevent/DSC03817p0.webp", height: "h-80 md:h-96", colSpan: "col-span-1", title: "Untamed Praise", aspect: "Portrait" },
  { src: "/pastevent/DSC03829.webp", height: "h-96 md:h-[420px]", colSpan: "col-span-1 md:col-span-2", title: "Finale Blessing", aspect: "Hero Banner" }
];

export default function PastEventsPage() {
  const [isTicketsModalOpen, setIsTicketsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const event = PAST_EVENTS[0];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onOpenTicketsModal={() => setIsTicketsModalOpen(true)} />

      <main className="flex-1">
        {/* Page Hero Header */}
        <section className="bg-surface-container py-14 px-6 md:px-12 border-b-4 border-ink">
          <div className="max-w-7xl mx-auto text-center flex flex-col items-center gap-4">
            <span className="bg-tertiary-gold text-ink font-mono text-xs font-bold px-3 py-1 border-2 border-ink neo-shadow-sm rotate-[1.5deg]">
              SACRED MEMORY VAULT
            </span>

            <h1 className="font-headline text-5xl md:text-7xl text-ink tracking-tight">
              JUDAH FESTIVAL <span className="text-secondary">ARCHIVE</span>
            </h1>

            <p className="font-body text-xl text-gray-700 max-w-2xl leading-relaxed">
              Explore official photography & live memories from our inaugural gathering.
            </p>
          </div>
        </section>

        {/* Dynamic Gallery Section */}
        <section className="py-16 px-6 md:px-12 bg-paper border-b-4 border-ink relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            {!isGalleryOpen ? (
              /* VIEW 1: INTRO CARD (Clicking opens full dynamic flow gallery) */
              <div className="flex flex-col items-center">
                <div
                  onClick={() => setIsGalleryOpen(true)}
                  className="w-full max-w-4xl bg-surface-high border-4 border-ink neo-shadow-lg p-8 md:p-12 relative cursor-pointer group hover:-translate-y-2 transition-all duration-300 rotate-[-1deg]"
                >
                  <div className="absolute -top-5 left-10 washi-tape-gold rotate-[-6deg]" />
                  <div className="absolute -bottom-5 right-10 washi-tape-ember rotate-[6deg]" />

                  {/* Intro Card Top Header */}
                  <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 border-b-3 border-ink pb-6 mb-6">
                    <div>
                      <span className="font-annotation text-secondary text-2xl rotate-[-2deg] block">
                        Official Edition 2025
                      </span>
                      <h2 className="font-headline text-5xl md:text-6xl text-ink group-hover:text-primary transition-colors">
                        JUDAH FEST &apos;25 ARCHIVE
                      </h2>
                    </div>
                    <span className="font-mono text-sm font-bold bg-primary text-white px-4 py-2 border-2 border-ink neo-shadow-sm w-fit">
                      14 FULL-RES MEMORIES
                    </span>
                  </div>

                  {/* Highlights & Hero Preview Collage */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-6 flex flex-col gap-4">
                      <div className="flex items-center gap-2 font-mono text-xs font-bold text-gray-700">
                        <span>THEME: &quot;{event.theme}&quot;</span> • <span>👥 {event.attendance}</span>
                      </div>
                      <h3 className="font-headline text-2xl text-ink">GATHERING HIGHLIGHTS:</h3>
                      <ul className="flex flex-col gap-2.5 font-body text-base text-gray-800">
                        {event.highlights.map((h, i) => (
                          <li key={i} className="flex items-center gap-2 font-bold">
                            <Sparkles className="w-4 h-4 text-tertiary-gold" /> {h}
                          </li>
                        ))}
                      </ul>

                      {/* Click Prompt Banner */}
                      <div className="mt-4 py-4 px-6 bg-primary text-white font-headline text-2xl border-2 border-ink neo-shadow flex items-center justify-between group-hover:bg-secondary transition-colors">
                        <span>ENTER PHOTO GALLERY</span>
                        <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>

                    {/* Preview Stacks */}
                    <div className="lg:col-span-6 grid grid-cols-2 gap-3 relative">
                      {GALLERY_ITEMS.slice(0, 4).map((item, idx) => (
                        <div
                          key={idx}
                          className={`relative h-40 border-2 border-ink neo-shadow overflow-hidden bg-surface-container ${idx % 2 === 0 ? "rotate-[-2deg]" : "rotate-[2deg]"}`}
                        >
                          <Image
                            src={item.src}
                            alt="Preview thumb"
                            fill
                            sizes="(max-width: 768px) 50vw, 300px"
                            className="object-cover group-hover:scale-105 transition-transform"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* VIEW 2: DYNAMIC MASONRY FLOW GALLERY WALL (Variable sizes flowing top to bottom) */
              <div className="flex flex-col gap-8 animate-in fade-in duration-300">
                {/* Navigation Back Bar */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b-4 border-ink pb-6">
                  <div>
                    <button
                      onClick={() => setIsGalleryOpen(false)}
                      className="font-mono text-xs font-bold px-4 py-2 bg-surface-container border-2 border-ink neo-shadow-sm flex items-center gap-2 hover:bg-surface-high transition-colors mb-2"
                    >
                      <ArrowLeft className="w-4 h-4" /> BACK TO ARCHIVE CARDS
                    </button>
                    <h2 className="font-headline text-5xl text-ink">
                      JUDAH FEST &apos;25 DYNAMIC GALLERY
                    </h2>
                  </div>

                  <div className="flex items-center gap-3 font-mono text-xs font-bold text-gray-700">
                    <span className="px-3 py-1.5 bg-tertiary-gold text-ink border border-ink neo-shadow-sm flex items-center gap-1">
                      <Grid className="w-4 h-4" /> 14 GALLERY TILES
                    </span>
                  </div>
                </div>

                {/* DYNAMIC MASONRY GRID (Photos flow with varying widths & heights from top to bottom) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 pt-2">
                  {GALLERY_ITEMS.map((item, idx) => {
                    const tilts = ["rotate-[-2deg]", "rotate-[1.5deg]", "rotate-[-1.5deg]", "rotate-[2deg]"];
                    const tilt = tilts[idx % tilts.length];
                    const tapes = ["washi-tape-gold", "washi-tape-ember"];
                    const tape = tapes[idx % tapes.length];

                    return (
                      <div
                        key={idx}
                        onClick={() => setSelectedPhoto(item.src)}
                        className={`${item.colSpan} bg-paper p-3.5 pb-6 border-3 border-ink neo-shadow-lg cursor-pointer transition-all duration-300 hover:rotate-0 hover:scale-[1.03] hover:z-30 group relative ${tilt}`}
                      >
                        {/* Washi Tape Accent */}
                        <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 ${tape} z-10`} />

                        {/* Image Frame with Dynamic Variable Height */}
                        <div className={`relative ${item.height} w-full border-2 border-ink overflow-hidden bg-surface-container`}>
                          <Image
                            src={item.src}
                            alt={item.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                            className="object-cover object-center transition-all duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-ink/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4 text-center">
                            <ImageIcon className="w-8 h-8 mb-2" />
                            <span className="font-headline text-2xl uppercase">{item.title}</span>
                            <span className="font-mono text-xs font-bold text-tertiary-gold mt-1">CLICK TO ENLARGE PHOTO</span>
                          </div>
                        </div>

                        {/* Polaroid Footer */}
                        <div className="mt-3 flex justify-between items-center px-1">
                          <span className="font-headline text-xl text-ink group-hover:text-primary transition-colors">
                            {item.title}
                          </span>
                          <span className="font-mono text-[10px] font-bold px-2 py-0.5 bg-surface-container border border-ink text-gray-700">
                            {item.aspect}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
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
            className="relative max-w-5xl w-full bg-paper p-4 border-4 border-ink neo-shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute -top-4 -right-4 p-2 bg-surface-high border-2 border-ink neo-shadow-sm font-headline text-xl"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative h-[75vh] w-full border-2 border-ink bg-black">
              <Image
                src={selectedPhoto}
                alt="Enlarged festival photo"
                fill
                sizes="(max-width: 1200px) 100vw, 1400px"
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
