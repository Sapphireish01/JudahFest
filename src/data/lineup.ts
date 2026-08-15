export interface Artist {
  id: string;
  name: string;
  role: string;
  genre: 'Worship' | 'Choir' | 'Afrogospel' | 'Spoken Word';
  time: string;
  stage: string;
  day: string;
  image: string;
  bio: string;
  spotifyUrl?: string;
  featured?: boolean;
}

export interface PastEvent {
  year: string;
  theme: string;
  attendance: string;
  highlights: string[];
  coverImage: string;
  photos: string[];
  audioSnippet?: {
    title: string;
    duration: string;
    url: string;
  };
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  year: string;
  avatarBg: string;
}

export const FESTIVAL_INFO = {
  name: "JUDAH FESTIVAL BERLIN 2026",
  tagline: "In the Name of Yahweh We Praise",
  dates: "SATURDAY, OCTOBER 3, 2026",
  time: "4:00 PM - 9:30 PM",
  location: "CHURCH AT THE SOUTH STAR, BERLIN, BE",
  motto: "A Grassroots Gospel Gathering & Sacred Celebration",
  mottoSub: "Raw, energetic, communal worship bringing together believers from all walks of life.",
  socials: {
    instagram: "@judahfest",
    twitter: "@judahfestival",
    youtube: "JudahFestLive",
  }
};

export const ARTISTS: Artist[] = [
  {
    id: "limoblaze",
    name: "LIMOBLAZE",
    role: "Afrogospel Headliner",
    genre: "Afrogospel",
    time: "8:00 PM - 9:30 PM",
    stage: "Main Yahweh Stage",
    day: "Sat, Oct 3",
    image: "/ArtistLineup/limoblaze.jpg",
    bio: "Award-winning Christian hip-hop and Afrogospel icon fusing afrobeat rhythms with uplifting faith anthems.",
    featured: true
  },
  {
    id: "dj-shunz",
    name: "DJ SHUNZ",
    role: "Afrogospel DJ & Producer",
    genre: "Afrogospel",
    time: "7:00 PM - 8:00 PM",
    stage: "AfroPraise Arena",
    day: "Sat, Oct 3",
    image: "/ArtistLineup/djshunz.jpg",
    bio: "Award-winning UK Christian DJ bringing vibrant Afrogospel, Drill, and Amapiano worship sets.",
    featured: true
  },
  {
    id: "minister-gabby-mckeown",
    name: "MINISTER GABBY MCKEOWN",
    role: "Worship Minister",
    genre: "Worship",
    time: "6:00 PM - 7:00 PM",
    stage: "Main Yahweh Stage",
    day: "Sat, Oct 3",
    image: "/ArtistLineup/MinisterGabbyMcKeown.jpg",
    bio: "Anointed gospel minister leading high-energy communal praise and deep worship encounters.",
    featured: true
  },
  {
    id: "prophet-martison",
    name: "PROPHET MARTISON",
    role: "Keynote & Revival Minister",
    genre: "Worship",
    time: "5:00 PM - 6:00 PM",
    stage: "Main Yahweh Stage",
    day: "Sat, Oct 3",
    image: "/ArtistLineup/prophetMartison.jpg",
    bio: "Dynamic preacher and revival minister leading prayer, prophetic declarations, and spiritual breakthrough.",
    featured: true
  },
  {
    id: "psalmist-dmd",
    name: "PSALMIST DMD",
    role: "Psalmist & Worship Leader",
    genre: "Worship",
    time: "4:00 PM - 5:00 PM",
    stage: "Main Yahweh Stage",
    day: "Sat, Oct 3",
    image: "/ArtistLineup/psalmist-dmd.jpg",
    bio: "Passionate psalmist crafting acoustic and choral worship atmospheres that exalt Yahweh.",
    featured: true
  }
];

export const PAST_EVENTS: PastEvent[] = [
  {
    year: "2025",
    theme: "SOUND OF THE SHOFAR",
    attendance: "14,500+ Believers",
    highlights: ["Overnight 12-hour praise marathon", "Food bank drive feeding 3,000 families", "Live album recording"],
    coverImage: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
    photos: [
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80"
    ],
    audioSnippet: {
      title: "Judah Fest 2025 Midnight Chant (Live)",
      duration: "03:45",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    }
  },
  {
    year: "2024",
    theme: "UNTAMED PRAISE",
    attendance: "10,200+ Believers",
    highlights: ["First multi-stage expansion", "Youth afrogospel dance-off", "Mass choir of 200 voices"],
    coverImage: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80",
    photos: [
      "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    year: "2023",
    theme: "THE FIRST ALTAR",
    attendance: "5,800+ Believers",
    highlights: ["Inaugural gathering", "Pure unplugged acoustics under the stars"],
    coverImage: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80",
    photos: [
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80"
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote: "Judah Fest feels like church without walls. The energy, the hand-printed flyers, the raw worship—I felt God's presence in a tangible way!",
    author: "Emmanuel K.",
    role: "Attendee",
    location: "Accra, Ghana",
    year: "2025",
    avatarBg: "#FD6F52"
  },
  {
    id: "t2",
    quote: "I took my entire family. My teenagers loved the Afrogospel stage and I wept during the midnight prayer session. Unforgettable!",
    author: "Blessing O.",
    role: "Family Group Leader",
    location: "Lagos, Nigeria",
    year: "2025",
    avatarBg: "#F0BF5F"
  },
  {
    id: "t3",
    quote: "The visual aesthetic and warmth of the community is unmatched. It truly is a sacred festival for our generation.",
    author: "David A.",
    role: "Volunteer",
    location: "London, UK",
    year: "2024",
    avatarBg: "#87DA83"
  }
];
