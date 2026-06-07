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

export const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(AGENT.address);
