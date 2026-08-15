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
    id: "early-bird",
    name: "EARLY BIRD (STANDING)",
    badge: "LIMITED AVAILABILITY",
    serialPrefix: "№ 001-EB",
    priceUSD: 22.49,
    priceLocal: "22,49 € (incl. fees)",
    period: "OCTOBER 3, 2026",
    popular: true,
    perks: [
      "Access to full festival experience (4:00 PM - 9:30 PM)",
      "Standard standing arena entrance",
      "Access to food & artisan marketplace",
      "Sales end Oct 3, 2026"
    ],
    color: "gold"
  },
  {
    id: "standard-standing",
    name: "STANDARD STANDING TICKET",
    badge: "STANDARD ENTRY",
    serialPrefix: "№ 002-ST",
    priceUSD: 35.27,
    priceLocal: "35,27 € (incl. fees)",
    period: "OCTOBER 3, 2026",
    perks: [
      "Standard standing ticket admits one person",
      "Full access to main arena worship experience",
      "Access to food & artisan marketplace",
      "Sales end Oct 3, 2026"
    ],
    color: "kelly"
  },
  {
    id: "gallery-seating",
    name: "GALLERY SEATING",
    badge: "SEATED TICKET",
    serialPrefix: "№ 003-GS",
    priceUSD: 43.80,
    priceLocal: "43,80 € (incl. fees)",
    period: "OCTOBER 3, 2026",
    perks: [
      "Standard seating ticket in the gallery",
      "Admits one person with elevated arena view",
      "Access to food & artisan marketplace",
      "Sales end Oct 3, 2026"
    ],
    color: "ember"
  },
  {
    id: "group-ticket-3",
    name: "GROUP TICKET FOR 3",
    badge: "GROUP BUNDLE",
    serialPrefix: "№ 004-GT3",
    priceUSD: 54.45,
    priceLocal: "54,45 € (incl. fees)",
    period: "OCTOBER 3, 2026",
    perks: [
      "Group standing ticket that admits 3 persons",
      "Save together as a group or ministry team",
      "Access to food & artisan marketplace",
      "Sales end Oct 3, 2026"
    ],
    color: "kelly"
  },
  {
    id: "youth-ticket",
    name: "YOUTH TICKET (12-18)",
    badge: "YOUTH DISCOUNT",
    serialPrefix: "№ 005-YT",
    priceUSD: 13.96,
    priceLocal: "13,96 € (incl. fees)",
    period: "OCTOBER 3, 2026",
    perks: [
      "For teenagers or high school students (ages 12-18)",
      "ID & age checks performed at the door",
      "Full access to festival grounds and worship stages",
      "Sales end Oct 3, 2026"
    ],
    color: "gold"
  },
  {
    id: "parking",
    name: "PARKING PASS (ZUSATZARTIKEL)",
    badge: "ADD-ON",
    serialPrefix: "№ 006-PKG",
    priceUSD: 8.64,
    priceLocal: "8,64 € (incl. fees)",
    period: "OCTOBER 3, 2026",
    perks: [
      "Park directly at the car park of the event",
      "Guaranteed vehicle parking spot for event duration",
      "Easy access to entrance gates",
      "Sales end Oct 3, 2026"
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
