"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TicketModal } from "@/components/TicketModal";
import { Button } from "@/components/ui/Button";
import { ARTISTS, Artist } from "@/data/lineup";
import { Calendar, MapPin, Filter, Clock, Music, ChevronRight, X, Sparkles, Flame, Mic, Compass } from "lucide-react";

export default function UpcomingPage() {
  const [isTicketsModalOpen, setIsTicketsModalOpen] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState<string>("ALL");
  const [selectedDay, setSelectedDay] = useState<string>("Day 2 (Sat)");
  const [activeArtistModal, setActiveArtistModal] = useState<Artist | null>(null);
  const [activeStage, setActiveStage] = useState<number | null>(null);

  const genres = ["ALL", "Worship", "Afrogospel", "Spoken Word"];
  const days = ["Day 1 (Fri)", "Day 2 (Sat)", "Day 3 (Sun)"];

  const filteredArtists = ARTISTS.filter((artist) => {
    const matchesGenre = selectedGenre === "ALL" || artist.genre === selectedGenre;
    return matchesGenre;
  });

  const scheduleForDay = ARTISTS.filter((artist) => artist.day === selectedDay);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onOpenTicketsModal={() => setIsTicketsModalOpen(true)} />

      <main className="flex-1">
        {/* Hero Header */}
        <section className="bg-surface-container py-16 px-6 md:px-12 border-b-4 border-ink">
          <div className="max-w-7xl mx-auto text-center flex flex-col items-center gap-4">
            <span className="bg-primary text-white font-mono text-xs font-bold px-3 py-1 border-2 border-ink neo-shadow-sm rotate-[-1.5deg]">
              OFFICIAL 2026 SCHEDULE
            </span>

            <h1 className="font-headline text-6xl md:text-7xl text-ink tracking-tight">
              LINEUP & <span className="text-primary">FESTIVAL TIMETABLE</span>
            </h1>

            <p className="font-body text-xl md:text-2xl text-gray-700 max-w-2xl leading-relaxed">
              Saturday, October 3, 2026 • 4:00 PM - 9:30 PM at Church at the South Star, Berlin.
            </p>
          </div>
        </section>

        {/* SECTION 1: Interactive Day Timetable Switcher */}
        <section className="py-16 px-6 md:px-12 bg-paper border-b-4 border-ink">
          <div className="max-w-7xl mx-auto flex flex-col gap-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b-2 border-ink pb-6">
              <div>
                <span className="font-annotation text-secondary text-xl rotate-[-1deg] block">
                  3-Day Schedule
                </span>
                <h2 className="font-headline text-5xl text-ink">TIMETABLE MATRIX</h2>
              </div>

              {/* Day Switcher Tabs */}
              <div className="flex flex-wrap gap-3">
                {days.map((day) => (
                  <button
                    key={day}
                    onClick={() => setSelectedDay(day)}
                    className={`font-headline text-2xl px-6 py-2 border-2 border-ink transition-all ${
                      selectedDay === day
                        ? "bg-secondary text-white neo-shadow-sm translate-x-0"
                        : "bg-surface-container text-ink hover:bg-surface-high"
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>

            {/* Schedule Cards Stack for Selected Day */}
            <div className="flex flex-col gap-4">
              {scheduleForDay.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setActiveArtistModal(item)}
                  className="bg-surface-high border-2 border-ink neo-shadow p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:bg-paper transition-colors cursor-pointer group"
                >
                  <div className="flex items-center gap-6">
                    <div className="relative h-20 w-20 border-2 border-ink shrink-0 overflow-hidden halftone">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="80px"
                        className="object-cover grayscale group-hover:grayscale-0 transition-all"
                      />
                    </div>

                    <div>
                      <span className="font-mono text-xs font-bold text-secondary flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> {item.time}
                      </span>
                      <h3 className="font-headline text-3xl text-ink group-hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                      <span className="font-mono text-xs text-gray-700 font-semibold">
                        {item.role}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end border-t md:border-t-0 border-ink/20 pt-3 md:pt-0">
                    <span className="font-mono text-xs font-bold px-3 py-1 bg-paper border border-ink text-ink">
                      📍 {item.stage}
                    </span>
                    <span className="font-headline text-xl text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      DETAILS <ChevronRight className="w-5 h-5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 2: Filterable Full Lineup Grid */}
        <section className="py-20 px-6 md:px-12 bg-surface-container border-b-4 border-ink">
          <div className="max-w-7xl mx-auto flex flex-col gap-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <span className="font-annotation text-secondary text-xl rotate-[-1deg] block">
                  All Confirmed Artists
                </span>
                <h2 className="font-headline text-5xl text-ink">FULL 2026 ARTISTS</h2>
              </div>

              {/* Genre Filter Chips */}
              <div className="flex flex-wrap gap-2 items-center">
                <Filter className="w-5 h-5 text-gray-700 mr-1" />
                {genres.map((g) => (
                  <button
                    key={g}
                    onClick={() => setSelectedGenre(g)}
                    className={`font-mono text-xs font-bold px-3 py-1.5 border border-ink uppercase transition-all ${
                      selectedGenre === g
                        ? "bg-primary text-white neo-shadow-sm"
                        : "bg-paper text-ink hover:bg-surface-high"
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            {/* Lineup Grid with Ample Spacing */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {filteredArtists.map((artist, idx) => (
                <div
                  key={artist.id}
                  onClick={() => setActiveArtistModal(artist)}
                  className={`bg-paper border-2 border-ink neo-shadow p-4 flex flex-col justify-between transition-all duration-200 hover:-translate-y-2 cursor-pointer group ${
                    idx % 2 === 0 ? "rotate-[-1.5deg]" : "rotate-[1.5deg]"
                  }`}
                >
                  <div className="relative h-64 w-full border-2 border-ink overflow-hidden mb-3">
                    <Image
                      src={artist.image}
                      alt={artist.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-top transition-all duration-300 group-hover:scale-105"
                    />
                    <span className="absolute top-2 left-2 bg-ink text-paper font-mono text-[10px] font-bold px-2 py-0.5 border border-paper">
                      {artist.genre}
                    </span>
                  </div>

                  <div>
                    <span className="font-mono text-xs text-secondary font-bold block">
                      {artist.day} • {artist.time}
                    </span>
                    <h3 className="font-headline text-2xl text-ink">{artist.name}</h3>
                  </div>

                  <div className="mt-3 pt-2 border-t border-ink/20 font-mono text-xs text-primary font-bold flex justify-between items-center">
                    <span>{artist.stage}</span>
                    <span>→</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: Interactive Festival Grounds Map with Micro-Interactions */}
        <section className="py-20 px-6 md:px-12 bg-paper border-b-4 border-ink">
          <div className="max-w-7xl mx-auto flex flex-col gap-10">
            <div className="text-center">
              <span className="font-annotation text-secondary text-xl rotate-[-1.5deg] block">
                Click a stage to inspect details
              </span>
              <h2 className="font-headline text-5xl text-ink flex items-center justify-center gap-2">
                <Compass className="w-8 h-8 text-primary animate-spin [animation-duration:20s]" /> PRAISE GROUNDS MAP
              </h2>
            </div>

            {/* Custom Interactive Vector Map Container */}
            <div className="bg-surface-high border-4 border-ink neo-shadow-lg p-6 md:p-8 relative min-h-[420px] flex flex-col items-center justify-center text-center overflow-hidden">
              {/* Background Map Blueprint Grid Pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl my-4 relative z-10">
                {/* Stage 1: Main Yahweh Stage */}
                <div
                  onClick={() => setActiveStage(activeStage === 1 ? null : 1)}
                  className={`p-6 bg-paper border-3 border-ink neo-shadow transition-all duration-300 cursor-pointer flex flex-col items-center gap-3 relative group ${
                    activeStage === 1
                      ? "ring-4 ring-primary scale-105 -rotate-0 z-20 bg-primary/5"
                      : "rotate-[-2deg] hover:rotate-0 hover:scale-105"
                  }`}
                >
                  <span className="absolute -top-3 right-4 font-mono text-[10px] font-bold px-2 py-0.5 bg-primary text-white border border-ink shadow-sm">
                    MAIN ALTAR
                  </span>
                  <div className="w-14 h-14 bg-primary text-white font-headline text-3xl flex items-center justify-center border-2 border-ink neo-shadow-sm group-hover:rotate-12 transition-transform">
                    1
                  </div>
                  <h3 className="font-headline text-2xl text-ink group-hover:text-primary transition-colors">
                    MAIN YAHWEH STAGE
                  </h3>
                  <p className="font-body text-sm text-gray-700 leading-relaxed">
                    Main altar for headline ministers, mass choir, trumpets & midnight prayer.
                  </p>
                  <span className="font-mono text-xs font-bold text-primary group-hover:underline mt-1 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" /> {activeStage === 1 ? "COLLAPSE" : "INSPECT STAGE →"}
                  </span>
                </div>

                {/* Stage 2: AfroPraise Arena */}
                <div
                  onClick={() => setActiveStage(activeStage === 2 ? null : 2)}
                  className={`p-6 bg-paper border-3 border-ink neo-shadow transition-all duration-300 cursor-pointer flex flex-col items-center gap-3 relative group ${
                    activeStage === 2
                      ? "ring-4 ring-secondary scale-105 -rotate-0 z-20 bg-secondary/5"
                      : "rotate-[2deg] hover:rotate-0 hover:scale-105"
                  }`}
                >
                  <span className="absolute -top-3 right-4 font-mono text-[10px] font-bold px-2 py-0.5 bg-secondary text-white border border-ink shadow-sm">
                    AFROBEATS
                  </span>
                  <div className="w-14 h-14 bg-secondary text-white font-headline text-3xl flex items-center justify-center border-2 border-ink neo-shadow-sm group-hover:-rotate-12 transition-transform">
                    2
                  </div>
                  <h3 className="font-headline text-2xl text-ink group-hover:text-secondary transition-colors">
                    AFROPRAISE ARENA
                  </h3>
                  <p className="font-body text-sm text-gray-700 leading-relaxed">
                    Upbeat afrogospel beats, rap, hip-hop, and energetic dance fellowship.
                  </p>
                  <span className="font-mono text-xs font-bold text-secondary group-hover:underline mt-1 flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5" /> {activeStage === 2 ? "COLLAPSE" : "INSPECT STAGE →"}
                  </span>
                </div>

                {/* Stage 3: Youth & Poetry Tent */}
                <div
                  onClick={() => setActiveStage(activeStage === 3 ? null : 3)}
                  className={`p-6 bg-paper border-3 border-ink neo-shadow transition-all duration-300 cursor-pointer flex flex-col items-center gap-3 relative group ${
                    activeStage === 3
                      ? "ring-4 ring-tertiary-gold scale-105 -rotate-0 z-20 bg-tertiary-gold/10"
                      : "rotate-[-1deg] hover:rotate-0 hover:scale-105"
                  }`}
                >
                  <span className="absolute -top-3 right-4 font-mono text-[10px] font-bold px-2 py-0.5 bg-tertiary-gold text-ink border border-ink shadow-sm">
                    ACOUSTIC
                  </span>
                  <div className="w-14 h-14 bg-tertiary-gold text-ink font-headline text-3xl flex items-center justify-center border-2 border-ink neo-shadow-sm group-hover:rotate-12 transition-transform">
                    3
                  </div>
                  <h3 className="font-headline text-2xl text-ink group-hover:text-amber-700 transition-colors">
                    YOUTH & POETRY TENT
                  </h3>
                  <p className="font-body text-sm text-gray-700 leading-relaxed">
                    Spoken word, acoustic worship, testimony circles & book readings.
                  </p>
                  <span className="font-mono text-xs font-bold text-ink group-hover:underline mt-1 flex items-center gap-1">
                    <Mic className="w-3.5 h-3.5" /> {activeStage === 3 ? "COLLAPSE" : "INSPECT STAGE →"}
                  </span>
                </div>
              </div>

              {/* Stage Detail Drawer Micro-Interaction */}
              {activeStage !== null && (
                <div className="mt-4 w-full max-w-4xl p-5 bg-paper border-2 border-ink neo-shadow text-left animate-in slide-in-from-bottom-2 fade-in">
                  {activeStage === 1 && (
                    <div className="flex flex-col gap-2">
                      <span className="font-mono text-xs font-bold text-primary">📍 STAGE 1 HIGHLIGHTS:</span>
                      <h4 className="font-headline text-2xl text-ink">MAIN YAHWEH STAGE (OUTDOOR ALTAR)</h4>
                      <p className="font-body text-base text-gray-700">
                        Host to headline ministers Limoblaze, Minister Gabby McKeown, Prophet Martison, and Psalmist DMD. Features a 500-voice mass choir, trumpet processionals, and midnight intercession.
                      </p>
                    </div>
                  )}
                  {activeStage === 2 && (
                    <div className="flex flex-col gap-2">
                      <span className="font-mono text-xs font-bold text-secondary">📍 STAGE 2 HIGHLIGHTS:</span>
                      <h4 className="font-headline text-2xl text-ink">AFROPRAISE ARENA (INDOOR AUDITORIUM)</h4>
                      <p className="font-body text-base text-gray-700">
                        Featuring DJ Shunz and live Afrogospel producers. Equipped with high-output sound systems, light shows, and open dance floor for youth praise.
                      </p>
                    </div>
                  )}
                  {activeStage === 3 && (
                    <div className="flex flex-col gap-2">
                      <span className="font-mono text-xs font-bold text-ink">📍 STAGE 3 HIGHLIGHTS:</span>
                      <h4 className="font-headline text-2xl text-ink">YOUTH & POETRY TENT (ACOUSTIC PAVILION)</h4>
                      <p className="font-body text-base text-gray-700">
                        Intimate acoustic setup for spoken word poetry, testimony sessions, interactive Q&A panels, and Christian literature book signings.
                      </p>
                    </div>
                  )}
                </div>
              )}

              <div className="mt-6 p-4 bg-tertiary-gold/20 border-2 border-ink max-w-lg font-mono text-xs text-ink font-bold flex items-center justify-center gap-2">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span>LOCATION: CHURCH AT THE SOUTH STAR, BERLIN, BE • SAT, OCT 3 (4:00 PM - 9:30 PM)</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Artist Modal */}
      {activeArtistModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/70 backdrop-blur-sm animate-in fade-in"
          onClick={() => setActiveArtistModal(null)}
        >
          <div
            className="bg-paper border-4 border-ink neo-shadow-lg max-w-lg w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveArtistModal(null)}
              className="absolute top-4 right-4 p-2 bg-surface-high border-2 border-ink neo-shadow-sm font-headline text-xl"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative h-64 w-full border-2 border-ink halftone mb-4">
              <Image
                src={activeArtistModal.image}
                alt={activeArtistModal.name}
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover"
              />
            </div>
            <span className="font-mono text-xs font-bold text-secondary">
              {activeArtistModal.day} • {activeArtistModal.time} • {activeArtistModal.stage}
            </span>
            <h3 className="font-headline text-4xl text-ink mt-1">
              {activeArtistModal.name}
            </h3>
            <p className="font-body text-lg text-gray-700 mt-2">
              {activeArtistModal.bio}
            </p>
            <Button
              variant="primary"
              size="md"
              className="w-full mt-6"
              onClick={() => {
                setActiveArtistModal(null);
                setIsTicketsModalOpen(true);
              }}
            >
              BOOK PASS TO SEE {activeArtistModal.name}
            </Button>
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
