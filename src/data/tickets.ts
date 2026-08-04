export const EVENTBRITE_URL =
  "https://www.eventbrite.com/e/judah-festival-berlin-tickets-1990714984106?aff=ebemoffollowpublishemail&ref=eemail&utm_campaign=following_published_event&utm_content=follow_notification&utm_medium=email&utm_source=eventbrite&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGnhG3EEBmlx93Gf7EaGWl0LENpw4m2ESmW_ruSF8PMgVE_SrJqhKwSdtFjKxU_aem_9zAELJn7x3ns-_lKDyH2mw";

export const DONATION_URL =
  "https://www.gofundme.com/f/antidote-the-cure-the-world-needs?attribution_id=sl:6b6e42cb-aa0d-4027-99f4-05646e8741be&lang=en_GB&utm_campaign=fp_sharesheet&utm_content=amp13_c-amp14_t2&utm_medium=customer&utm_source=copy_link&fbclid=PAVERFWAO3vThleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAacSFUtRahQ636MC_ZJnJQAPXsd8pwhZ7RHW9td2ExQrY0E07iQdQVWDy3Qggg_aem_YahIOwzA9-Nb2N0VxzfBVg";

export interface TicketTier {
  id: string;
  name: string;
  badge: string;
  serialPrefix: string;
  priceUSD: number;
  priceLocal: string;
  period: string;
  popular?: boolean;
  perks: string[];
  color: 'kelly' | 'ember' | 'gold';
}

export const TICKET_TIERS: TicketTier[] = [
  {
    id: "general-praise",
    name: "GENERAL PRAISE PASS",
    badge: "STANDARD ENTRY",
    serialPrefix: "№ 001-GP",
    priceUSD: 25,
    priceLocal: "$25 / ₵350",
    period: "FULL 3-DAY ACCESS",
    perks: [
      "Access to all 3 main stages",
      "Free festival cloth souvenir badge",
      "Access to Food & Artisan Marketplace",
      "Standard entry gates"
    ],
    color: "kelly"
  },
  {
    id: "vip-yahweh-pass",
    name: "VIP YAHWEH PASS",
    badge: "MOST POPULAR",
    serialPrefix: "№ 002-YP",
    priceUSD: 65,
    priceLocal: "$65 / ₵900",
    period: "PREMIUM EXPERIENCE",
    popular: true,
    perks: [
      "Front-stage priority worship zone",
      "Express fast-track entry gates",
      "Exclusive VIP paper-print souvenir poster & washi tape kit",
      "Access to air-conditioned VIP lounge & light refreshments",
      "Official Judah Fest 2026 T-Shirt"
    ],
    color: "gold"
  },
  {
    id: "family-group-bundle",
    name: "FAMILY & FELLOWSHIP BUNDLE",
    badge: "GROUP SAVINGS (5 PASSES)",
    serialPrefix: "№ 003-FB",
    priceUSD: 100,
    priceLocal: "$100 / ₵1,400",
    period: "5 PASSES INCLUDED",
    perks: [
      "5 Full 3-Day Passes for family/church group",
      "Dedicated group seating block in main arena",
      "Group prayer blessing session with minister collective",
      "Complimentary festival parking pass"
    ],
    color: "ember"
  }
];

export const FAQS = [
  {
    question: "WHAT IS THE DRESS CODE FOR JUDAH FESTIVAL?",
    answer: "Come comfortable! Modest, vibrant, and expressive attire is encouraged. We celebrate our faith through joy and dignity."
  },
  {
    question: "CAN CHILDREN ATTEND?",
    answer: "Yes! Children under 10 years old enter free with an adult ticket holder. We have a dedicated Family & Youth Zone."
  },
  {
    question: "HOW DO TICKET STUBS WORK?",
    answer: "Upon purchasing online, you will receive a digital ticket with a unique serial number (№ 00X) and QR code. At the gates, our team will issue physical souvenir paper stubs!"
  },
  {
    question: "IS FOOD AND DRINK PROVIDED?",
    answer: "Multiple local food vendors, juice stalls, and water stations will be available throughout the festival grounds."
  }
];
