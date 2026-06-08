/* ============================================================
   Onestop Benefits — single source of truth for agent facts.
   Every figure here is from the verified brief. Nothing invented.
   Update the `email` line if the address ever changes.
   ============================================================ */

export const AGENT = {
  brandName: "Onestop Benefits",
  name: "Shelby Philip",
  first: "Shelby",
  // Kept generic and independent — no carrier affiliation implied.
  title: "Insurance Agent in Vineland, NJ",
  tagline: "Shelby Philip — Insurance Agent",

  photo: "/assets/agent-headshot.png",
  heroPhoto: "/assets/agent-hero.png",

  // Phone is also textable. Raw values power tel:/sms: links.
  phoneRaw: "8563625273",
  phone: "(856) 362-5273",
  faxRaw: "8568390193",
  fax: "(856) 839-0193",

  email: "onestopbenefit@gmail.com",

  address: "703 E Landis Ave, Vineland, NJ 08360",
  license: "1561192",

  // Framed as appointment availability — matches the form's 9–5 window.
  apptHours: "Mon – Fri · 9:00 AM – 5:00 PM",
  hoursLines: ["Mon – Fri · 9:00 AM – 5:00 PM", "Saturday · By appointment", "Sunday · Closed"],

  states: ["New Jersey"],
};

/* The people behind Onestop Benefits. Rendered as interactive tabs in the
   About section — tap a person to swap in their profile. Shelby is the lead
   property/casualty agent; Sini manages the health/medical side. */
export const TEAM = [
  {
    id: "shelby",
    name: "Shelby Philip",
    first: "Shelby",
    position: "Lead Agent",
    role: "Insurance Agent · Vineland, NJ",
    photo: "/assets/agent-headshot.png",
    email: "onestopbenefit@gmail.com",
    creds: ["NJ Licensed", "#1561192"],
    blurb:
      "I'm Shelby, a local insurance agent here in Vineland. My job is simple: help you figure out what coverage actually fits your life — your car, your home, your business, or the people who depend on you. I'll walk you through your options in plain English so you know exactly what you're paying for.",
    specialties: [
      "Auto & Home bundles",
      "Life & financial planning",
      "Small-business coverage",
      "Renters & condo",
    ],
  },
  {
    id: "sini",
    name: "Sini S Philip",
    first: "Sini",
    position: "Manager",
    role: "Health Insurance Agent / Producer",
    photo: "/assets/sini.png",
    email: "siniphilip74@gmail.com",
    creds: ["PharmD", "BCPS", "BCGP"],
    blurb:
      "I'm Sini, and I lead our health side. With a clinical pharmacy background, I help you make sense of medical coverage — comparing plans, decoding the fine print, and matching the right benefits and prescription coverage to your needs. From individual and family plans to Medicare options, I'll make sure your health coverage actually works for you.",
    specialties: [
      "Medical & health plans",
      "Medicare options",
      "Prescription drug coverage",
      "Individual & family plans",
    ],
  },
];

export const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(AGENT.address);
