"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Marquee } from "@/components/Marquee";
import { TicketStub } from "@/components/TicketStub";
import { TicketModal } from "@/components/TicketModal";
import { Button } from "@/components/ui/Button";
import { ARTISTS, FESTIVAL_INFO, TESTIMONIALS, Artist } from "@/data/lineup";
import { TICKET_TIERS, TicketTier, EVENTBRITE_URL, DONATION_URL } from "@/data/tickets";
import { Calendar, MapPin, Sparkles, Flame, Clock, Music, ArrowRight, Play, Check, Heart, HandHeart, Gift } from "lucide-react";

export default function HomePage() {
  const [isTicketsModalOpen, setIsTicketsModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<TicketTier | undefined>();
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);

  // Live Countdown Timer State
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-10-03T16:00:00").getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleOpenTickets = (_tier?: TicketTier) => {
    window.open(EVENTBRITE_URL, "_blank", "noopener,noreferrer");
  };

  const handleDonate = () => {
    window.open(DONATION_URL, "_blank", "noopener,noreferrer");
  };

  const featuredArtists = ARTISTS.filter((a) => a.featured);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Header Navigation */}
      <Navbar onOpenTicketsModal={() => handleOpenTickets()} />

      <main className="flex-1">
        {/* HERO SECTION: Centered Headline Framed by Circular Orbit of Artist Cards */}
        <section className="relative min-h-[92vh] bg-surface-container py-16 px-4 md:px-8 flex flex-col justify-center items-center overflow-hidden border-b-4 border-ink">
          {/* Halftone Overlay Background */}
          <div className="absolute inset-0 halftone opacity-40 pointer-events-none" />

          {/* Decorative Circular Background Ring Halo */}
          <div className="absolute w-[450px] h-[450px] lg:w-[850px] lg:h-[850px] rounded-full border-2 border-dashed border-ink/20 pointer-events-none hidden lg:block animate-[spin_120s_linear_infinite]" />

          {/* Background Decorative Washi Tape Tags */}
          {/* <div className="absolute top-6 left-12 washi-tape-gold rotate-[-12deg] hidden lg:block" /> */}
          {/* <div className="absolute bottom-12 right-12 washi-tape-ember rotate-[8deg] hidden lg:block" /> */}

          {/* MAIN HERO CONTAINER */}
          <div className="max-w-7xl w-full mx-auto relative z-10 flex flex-col items-center justify-center min-h-[700px]">

            {/* CIRCULAR FRAMING CARDS (Desktop 5-Point Layout: Top-Center, Sides & Corners) */}
            {ARTISTS.map((artist, index) => {
              const positions = [
                // 1. Top-Left Arc
                "top-[0rem] left-[1.5rem] xl:top-[-1rem] xl:left-[3.5rem] rotate-[-4deg]",
                // 2. Top-Right Arc
                "top-[0rem] right-[1.5rem] xl:top-[-1rem] xl:right-[3.5rem] rotate-[4deg]",
                // 3. Mid-Left Side (Shifted down away from top cards)
                "top-[60%] left-[-1rem] xl:left-[0.5rem] -translate-y-1/3 rotate-[-2deg]",
                // 4. Mid-Right Side (Shifted down away from top cards)
                "top-[60%] right-[-1rem] xl:right-[0.5rem] -translate-y-1/3 rotate-[2deg]",
                // 5. Top-Center (Stand-alone card positioned at top center)
                "top-[-3.5rem] left-1/2 -translate-x-1/2 rotate-[-1deg]"
              ];

              return (
                <div
                  key={artist.id}
                  onClick={() => setSelectedArtist(artist)}
                  className={`hidden lg:block absolute ${positions[index % positions.length]} w-56 xl:w-60 bg-paper p-2.5 border-2 border-ink neo-shadow-lg transition-all duration-300 hover:rotate-0 hover:scale-105 hover:z-30 cursor-pointer group z-10`}
                >
                  <div className="relative h-40 xl:h-44 w-full border-2 border-ink overflow-hidden">
                    <Image
                      src={artist.image}
                      alt={artist.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 350px"
                      className="object-cover object-top transition-all duration-300 group-hover:scale-105"
                    />
                    <div className="absolute bottom-2 left-2 bg-primary text-white font-headline text-[10px] px-2 py-0.5 border border-ink uppercase neo-shadow-sm">
                      {artist.genre}
                    </div>
                  </div>
                  <div className="mt-2 flex flex-col gap-0.5">
                    <span className="font-mono text-[10px] text-secondary font-bold block">
                      {artist.day} • {artist.time}
                    </span>
                    <h3 className="font-headline text-base text-ink leading-tight truncate">
                      {artist.name}
                    </h3>
                  </div>
                </div>
              );
            })}

            {/* CENTERED HERO CONTENT (Framed by surrounding circular cards) */}
            <div className="relative z-20 max-w-lg xl:max-w-xl mx-auto text-center flex flex-col items-center gap-5 my-auto pt-6">

              {/* Date & Location Stamp */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                <span className="bg-secondary text-white font-mono text-xs font-bold px-3 py-1 border-2 border-ink neo-shadow-sm rotate-[-2deg] flex items-center gap-2">
                  <img src="/images/JUDAH-PNG.png" alt="JUDAH FEST" className="w-4 h-4 object-contain inline-block" /> SATURDAY, OCT 3, 2026 • 4:00 PM - 9:30 PM
                </span>
                <span className="bg-paper text-ink font-mono text-xs font-bold px-3 py-1 border-2 border-ink neo-shadow-sm flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-primary" /> CHURCH AT THE SOUTH STAR, BERLIN, BE
                </span>
              </div>

              {/* Main Headline (20% smaller font size) */}
              <div className="space-y-1.5">
                <span className="font-annotation text-secondary text-lg md:text-xl block rotate-[-1.5deg]">
                  The Annual Sacred Gathering
                </span>
                <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-ink leading-none tracking-tight">
                  JUDAH FESTIVAL <br />
                  <span className="text-primary underline decoration-tertiary-gold decoration-wavy underline-offset-6">
                    2026 BERLIN
                  </span>
                </h1>
              </div>

              {/* CTA Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => handleOpenTickets()}
                >
                  <Sparkles className="w-6 h-6 mr-2 text-tertiary-gold" />
                  GET TICKETS NOW
                </Button>

                <Link href="/upcoming">
                  <Button variant="outline" size="lg">
                    VIEW 2026 LINEUP
                  </Button>
                </Link>
              </div>

              {/* Live Countdown Timer Banner */}
              <div className="mt-2 p-4 bg-paper border-2 border-ink neo-shadow inline-flex flex-col sm:flex-row items-center gap-4 w-fit mx-auto">
                <div className="flex items-center gap-2 font-mono text-xs text-secondary font-bold uppercase">
                  <Clock className="w-5 h-5 text-secondary animate-pulse" />
                  <span>GATHERING COUNTDOWN:</span>
                </div>

                <div className="flex items-center gap-3 font-headline text-2xl text-ink">
                  <div className="text-center">
                    <span className="bg-surface-high px-2.5 py-0.5 border border-ink block font-bold text-primary">
                      {timeLeft.days}
                    </span>
                    <span className="font-mono text-[10px] text-gray-600 uppercase block">DAYS</span>
                  </div>
                  <span>:</span>
                  <div className="text-center">
                    <span className="bg-surface-high px-2.5 py-0.5 border border-ink block font-bold text-primary">
                      {timeLeft.hours}
                    </span>
                    <span className="font-mono text-[10px] text-gray-600 uppercase block">HRS</span>
                  </div>
                  <span>:</span>
                  <div className="text-center">
                    <span className="bg-surface-high px-2.5 py-0.5 border border-ink block font-bold text-primary">
                      {timeLeft.minutes}
                    </span>
                    <span className="font-mono text-[10px] text-gray-600 uppercase block">MIN</span>
                  </div>
                  <span>:</span>
                  <div className="text-center">
                    <span className="bg-surface-high px-2.5 py-0.5 border border-ink block font-bold text-secondary">
                      {timeLeft.seconds}
                    </span>
                    <span className="font-mono text-[10px] text-gray-600 uppercase block">SEC</span>
                  </div>
                </div>
              </div>
            </div>

            {/* MOBILE & TABLET ARTISTS FRAME STRIP (Visible on mobile/tablet screens < lg) */}
            <div className="lg:hidden w-full mt-10 grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t-2 border-dashed border-ink/30">
              {ARTISTS.slice(0, 6).map((artist, idx) => (
                <div
                  key={artist.id}
                  onClick={() => setSelectedArtist(artist)}
                  className={`bg-paper p-2 border-2 border-ink neo-shadow cursor-pointer transition-transform hover:scale-105 ${idx % 2 === 0 ? "rotate-[-2deg]" : "rotate-[2deg]"
                    }`}
                >
                  <div className="relative h-24 w-full border border-ink halftone overflow-hidden">
                    <Image
                      src={artist.image}
                      alt={artist.name}
                      fill
                      sizes="(max-width: 768px) 50vw, 200px"
                      className="object-cover"
                    />
                  </div>
                  <h4 className="font-headline text-xs text-ink truncate mt-1">{artist.name}</h4>
                  <span className="font-mono text-[8px] text-secondary block truncate">{artist.role}</span>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* INFINITE MARQUEE STRIP 1 */}
        <Marquee
          text="JUDAH FESTIVAL BERLIN 2026 • SATURDAY, OCT 3 • 4:00 PM - 9:30 PM • CHURCH AT THE SOUTH STAR, BERLIN • LIVE WORSHIP • FELLOWSHIP"
          variant="dark"
          speed="normal"
          duration={80}
        />

        {/* SECTION 2: Sacred Purpose & Neo-Brutalist Features */}
        <section className="py-20 px-6 md:px-12 bg-paper border-b-4 border-ink">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 flex flex-col gap-6">
              <span className="font-annotation text-secondary text-xl rotate-[-2deg] w-fit">
                Why We Gather
              </span>
              <h2 className="font-headline text-5xl md:text-6xl text-ink leading-tight">
                RAW UNTAMED PRAISE, <br />
                <span className="text-secondary underline decoration-tertiary-gold">
                  COMMUNAL FELLOWSHIP
                </span>
              </h2>

              <p className="font-body text-xl text-ink/85 leading-relaxed">
                Judah Festival isn’t a polished corporate concert—it is a grassroots altar where believers assemble to exalt Yahweh without constraint. Emulating the tactile spirit of screen-printed flyers, our gathering prioritizes character, passion, and spiritual intimacy.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                <div className="p-4 bg-surface-container border-2 border-ink neo-shadow-sm">
                  <div className="font-headline text-2xl text-primary flex items-center gap-2">
                    <Flame className="w-6 h-6 text-secondary" /> 3 MAIN STAGES
                  </div>
                  <p className="font-body text-base text-gray-700 mt-1">
                    Yahweh Main Altar, AfroPraise Arena, and Youth & Spoken Word Tent.
                  </p>
                </div>

                <div className="p-4 bg-surface-container border-2 border-ink neo-shadow-sm">
                  <div className="font-headline text-2xl text-primary flex items-center gap-2">
                    <Music className="w-6 h-6 text-tertiary-gold" /> MASS CHOIR & CHANTS
                  </div>
                  <p className="font-body text-base text-gray-700 mt-1">
                    Over 500 voices singing in unity across night vigils and day sessions.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Poster Banner Card */}
            <div className="lg:col-span-6 bg-surface-high p-8 border-4 border-ink neo-shadow-lg relative rotate-[1.5deg]">
              <div className="absolute -top-4 -right-4 washi-tape-gold rotate-[10deg]" />

              <div className="bg-paper p-6 border-2 border-ink flex flex-col gap-4">
                <div className="flex justify-between items-center border-b-2 border-ink pb-3">
                  <span className="font-mono text-xs font-bold text-secondary uppercase">
                    № 2026-FESTIVAL-PASS
                  </span>
                  <span className="font-headline text-lg bg-tertiary-gold text-ink px-2 py-0.5 border border-ink">
                    EARLY BIRD OPEN
                  </span>
                </div>

                <h3 className="font-headline text-4xl text-ink">
                  SECURE YOUR PLACE AT THE ALTAR
                </h3>

                <p className="font-body text-lg text-gray-700">
                  Passes include admission to all three festival days, souvenir physical flyer stub, and access to all minister keynotes.
                </p>

                <div className="py-3 px-4 bg-primary text-white border-2 border-ink flex justify-between items-center">
                  <span className="font-headline text-2xl">PASSES FROM $25</span>
                  <Button variant="gold" size="sm" onClick={() => handleOpenTickets()}>
                    BOOK NOW
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: Featured Gospel Lineup Grid */}
        <section className="py-20 px-6 md:px-12 bg-surface-container border-b-4 border-ink">
          <div className="max-w-7xl mx-auto flex flex-col gap-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <span className="font-annotation text-secondary text-xl block rotate-[-1.5deg]">
                  2026 Anointed Ministers
                </span>
                <h2 className="font-headline text-5xl md:text-6xl text-ink">
                  FEATURED LINEUP
                </h2>
              </div>

              <Link href="/upcoming">
                <Button variant="outline" size="md">
                  VIEW FULL 2026 SCHEDULE →
                </Button>
              </Link>
            </div>

            {/* Lineup Cards Grid with Ample Spacing */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {ARTISTS.map((artist, idx) => (
                <div
                  key={artist.id}
                  onClick={() => setSelectedArtist(artist)}
                  className={`bg-paper border-2 border-ink neo-shadow p-4 flex flex-col justify-between transition-all duration-200 hover:-translate-y-2 cursor-pointer group relative ${idx % 2 === 0 ? "rotate-[-1.5deg]" : "rotate-[1.5deg]"
                    }`}
                >
                  <div className="relative h-64 w-full border-2 border-ink halftone overflow-hidden mb-4">
                    <Image
                      src={artist.image}
                      alt={artist.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-top transition-all duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-2 left-2 bg-ink text-paper font-mono text-xs font-bold px-2 py-0.5 border border-paper">
                      {artist.genre}
                    </div>
                  </div>

                  <div>
                    <span className="font-mono text-xs text-secondary font-bold block">
                      {artist.day} • {artist.time}
                    </span>
                    <h3 className="font-headline text-3xl text-ink leading-tight">
                      {artist.name}
                    </h3>
                    <p className="font-body text-sm text-gray-700 line-clamp-2 mt-1">
                      {artist.bio}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-ink/20 flex justify-between items-center text-xs font-mono font-bold text-primary">
                    <span>{artist.stage}</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MARQUEE STRIP 2 (Gold Accent) */}
        <Marquee
          text="EARLY BIRD (22,49 €) • STANDARD STANDING (35,27 €) • GALLERY SEATING (43,80 €) • GROUP TICKET FOR 3 (54,45 €) • YOUTH TICKET (13,96 €) • PARKING PASS (8,64 €)"
          variant="gold"
          speed="slow"
          duration={100}
        />

        {/* SECTION 4: Perforated Ticket Tier Selection */}
        <section className="py-20 px-6 md:px-12 bg-paper border-b-4 border-ink">
          <div className="max-w-7xl mx-auto flex flex-col gap-12">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="font-annotation text-secondary text-xl rotate-[-2deg] inline-block">
                Choose Your Altar Experience
              </span>
              <h2 className="font-headline text-5xl md:text-6xl text-ink">
                FESTIVAL PASS TIERS
              </h2>
              <p className="font-body text-xl text-gray-700">
                All passes grant access to 3 full days of minister sessions, stages, food village, and physical souvenir paper stub at entry.
              </p>
            </div>

            {/* Ticket Stubs Stack */}
            <div className="flex flex-col gap-8">
              {TICKET_TIERS.map((tier) => (
                <TicketStub
                  key={tier.id}
                  tier={tier}
                  onSelect={(t) => handleOpenTickets(t)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* MARQUEE STRIP 3 (Ember Accent) */}
        <Marquee text="ANTIDOTE: THE CURE THE WORLD NEEDS • SUPPORT THE MOVEMENT • SEED INTO SACRED PRAISE • GOFUNDME CAMPAIGN" variant="ember" />

        {/* SECTION 4.5: ANTIDOTE DONATION & SEED ALTAR */}
        <section className="py-20 px-6 md:px-12 bg-surface-container border-b-4 border-ink relative overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
            
            {/* Left Column: Visual Callout Box */}
            <div className="w-full lg:w-1/2 bg-paper p-8 md:p-10 border-4 border-ink neo-shadow-lg relative rotate-[-1deg]">
              <div className="absolute -top-4 left-6 washi-tape-gold rotate-[-6deg]" />
              <div className="flex items-center gap-3 mb-4">
                <span className="p-2.5 bg-tertiary-gold text-ink border-2 border-ink neo-shadow-sm inline-flex">
                  <Heart className="w-6 h-6 fill-ink" />
                </span>
                <span className="font-mono text-xs font-bold text-secondary uppercase tracking-widest">
                  OFFICIAL DONATION ALTAR
                </span>
              </div>

              <h3 className="font-headline text-4xl md:text-5xl text-ink leading-tight mb-4">
                ANTIDOTE: THE CURE THE WORLD NEEDS
              </h3>

              <p className="font-body text-lg text-gray-800 leading-relaxed mb-6">
                Judah Festival is a grassroots gospel gathering dedicated to bringing sacred worship, communal fellowship, and unhindered praise into our cities. Your seed fuels our mission!
              </p>

              {/* Impact Bullets */}
              <div className="space-y-4 font-mono text-sm border-t-2 border-b-2 border-ink/20 py-6 mb-6">
                <div className="flex items-start gap-3">
                  <span className="p-1 bg-primary text-white border border-ink text-xs font-bold shrink-0 mt-0.5">✓</span>
                  <span><strong className="text-primary font-bold">100% Grassroots Funded:</strong> Direct support for sound engineering, stage logistics, and venue security.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="p-1 bg-primary text-white border border-ink text-xs font-bold shrink-0 mt-0.5">✓</span>
                  <span><strong className="text-primary font-bold">Youth & Community Outreach:</strong> Providing free festival passes, meals, and Bibles to young worshipers.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="p-1 bg-primary text-white border border-ink text-xs font-bold shrink-0 mt-0.5">✓</span>
                  <span><strong className="text-primary font-bold">Sacred Atmosphere:</strong> Creating an accessible space of healing, unity, and uncompromised praise.</span>
                </div>
              </div>

              <Button
                variant="gold"
                size="lg"
                className="w-full font-headline text-xl"
                onClick={handleDonate}
              >
                <Heart className="w-6 h-6 mr-2 fill-ink" />
                SUPPORT ON GOFUNDME NOW →
              </Button>
            </div>

            {/* Right Column: High-Impact Story & CTA */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
              <div className="space-y-3">
                <span className="font-annotation text-secondary text-2xl rotate-[-2deg] inline-block">
                  Partner with Us in Praise
                </span>
                <h2 className="font-headline text-5xl md:text-6xl text-ink leading-none">
                  SEED INTO THE MOVEMENT
                </h2>
                <p className="font-body text-xl text-gray-700 leading-relaxed">
                  Every contribution — large or small — directly enables us to build an altar of praise for thousands in Berlin and beyond.
                </p>
              </div>

              {/* Campaign Callout Card */}
              <div className="bg-tertiary-gold/30 border-2 border-ink p-6 neo-shadow space-y-4">
                <div className="flex justify-between items-center font-mono text-sm font-bold">
                  <span className="text-ink">GOFUNDME CAMPAIGN</span>
                  <span className="text-primary font-bold uppercase">ACTIVE SEED DRIVE</span>
                </div>
                <div className="w-full h-4 bg-paper border-2 border-ink overflow-hidden p-0.5">
                  <div className="h-full bg-primary w-[75%] border border-ink" />
                </div>
                <p className="font-mono text-xs text-gray-700 italic">
                  &quot;Give, and it will be given to you. A good measure, pressed down, shaken together and running over.&quot; — Luke 6:38
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleDonate}
                  className="neo-shadow-lg"
                >
                  <HandHeart className="w-6 h-6 mr-2" />
                  MAKE A SEED DONATION
                </Button>
                <a
                  href={DONATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center font-mono text-sm font-bold text-ink underline hover:text-primary transition-colors py-3 px-2"
                >
                  READ FULL GOFUNDME STORY ↗
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 5: Community Testimonials Corkboard */}
        <section className="py-20 px-6 md:px-12 bg-surface-high border-b-4 border-ink relative overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col gap-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <span className="font-annotation text-secondary text-xl block rotate-[-1deg]">
                  Voices from the Altar
                </span>
                <h2 className="font-headline text-5xl md:text-6xl text-ink">
                  COMMUNITY TESTIMONIALS
                </h2>
              </div>
              <Link href="/past-events">
                <Button variant="outline" size="md">
                  EXPLORE PAST ARCHIVES →
                </Button>
              </Link>
            </div>

            {/* Sticky Notes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((item, idx) => (
                <div
                  key={item.id}
                  className={`bg-paper p-6 border-2 border-ink neo-shadow relative flex flex-col justify-between min-h-[220px] ${idx === 0
                    ? "rotate-[-3deg]"
                    : idx === 1
                      ? "rotate-[2deg]"
                      : "rotate-[-1.5deg]"
                    }`}
                >
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 washi-tape-gold"
                    style={{ width: "90px", height: "24px" }}
                  />

                  <p className="font-body text-lg text-ink italic leading-relaxed pt-2">
                    &quot;{item.quote}&quot;
                  </p>

                  <div className="mt-6 pt-4 border-t border-ink/20 flex justify-between items-end">
                    <div>
                      <span className="font-headline text-xl text-ink block">
                        {item.author}
                      </span>
                      <span className="font-mono text-xs text-gray-600">
                        {item.role} • {item.location}
                      </span>
                    </div>
                    <span className="font-mono text-xs font-bold px-2 py-0.5 bg-tertiary-gold text-ink border border-ink">
                      {item.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Ticket Purchase Modal */}
      <TicketModal
        isOpen={isTicketsModalOpen}
        onClose={() => setIsTicketsModalOpen(false)}
        selectedTier={selectedTier}
      />

      {/* Artist Detail Modal */}
      {selectedArtist && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/70 backdrop-blur-sm animate-in fade-in"
          onClick={() => setSelectedArtist(null)}
        >
          <div
            className="bg-paper border-4 border-ink neo-shadow-lg max-w-lg w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedArtist(null)}
              className="absolute top-4 right-4 p-2 bg-surface-high border-2 border-ink neo-shadow-sm font-headline text-xl"
            >
              ✕
            </button>
            <div className="relative h-64 w-full border-2 border-ink halftone mb-4">
              <Image
                src={selectedArtist.image}
                alt={selectedArtist.name}
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover"
              />
            </div>
            <span className="font-mono text-xs font-bold text-secondary">
              {selectedArtist.day} • {selectedArtist.time} • {selectedArtist.stage}
            </span>
            <h3 className="font-headline text-4xl text-ink mt-1">
              {selectedArtist.name}
            </h3>
            <p className="font-body text-lg text-gray-700 mt-2">
              {selectedArtist.bio}
            </p>
            <Button
              variant="primary"
              size="md"
              className="w-full mt-6"
              onClick={() => {
                setSelectedArtist(null);
                handleOpenTickets();
              }}
            >
              BOOK TICKETS TO SEE {selectedArtist.name}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
