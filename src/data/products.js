/* ============================================================
   Products & navigation.
   Auto, Home, Renters, Condo, Life, Business, Auto+Home,
   Auto+Renters, Motorcycle & Recreational, Umbrella, Financial.
   Medical is now the LEAD offering (see MEDICAL / MEDICAL_BENEFITS
   below) and is featured ahead of the gallery on the page.
   ============================================================ */

/* Lead offering — Medical Insurance. Featured ahead of the coverage
   gallery. Benefit categories are modeled on the way major medical
   carriers (e.g. Humana) group plan benefits, with original copy. */
export const MEDICAL = {
  id: "medical",
  name: "Medical Insurance",
  tagline: "Now offering health coverage",
  short: "Real health coverage with a real person behind it.",
  long: "Individual, family, and Medicare-related health plans — chosen with you, not sold to you. I compare carriers, explain the trade-offs in plain English, and stay your point of contact long after you enroll.",
};

/* 6 benefit categories shown in the featured Medical grid.
   Icons reference keys in icons.jsx (PRODUCT_ICONS / UI icons). */
export const MEDICAL_BENEFITS = [
  { icon: "IcUser",
    title: "Doctor & specialist visits",
    body: "Primary care, specialists, and urgent care with predictable copays — so seeing the right provider never means guessing at the cost." },
  { icon: "IcShield",
    title: "Hospital & emergency care",
    body: "Inpatient stays, surgery, and emergency-room coverage that protects your savings when the unexpected lands you in a hospital bed." },
  { icon: "IcMedical",
    title: "Prescription drugs",
    body: "Pharmacy benefits with tiered copays and mail-order options, reviewed against your medications so refills stay affordable." },
  { icon: "IcCheck",
    title: "Preventive care & screenings",
    body: "Annual physicals, immunizations, and routine screenings covered at no extra cost — care that catches problems early, before they grow." },
  { icon: "IcText",
    title: "Virtual & behavioral health",
    body: "24/7 telehealth visits plus mental-health and counseling coverage, so support is there whether you need it at 2pm or 2am." },
  { icon: "IcLife",
    title: "Dental, vision & wellness",
    body: "Add-on dental and vision plus wellness and fitness perks that reward staying healthy — the everyday extras a good plan should include." },
];

export const PRODUCTS = [
  { id: "auto", name: "Auto", icon: "auto",
    short: "Coverage for your car, on and off the road.",
    long: "Liability, collision, and comprehensive — set up around how and where you actually drive. Ask me about safe-driver and multi-policy discounts.",
    points: ["Liability & collision", "Roadside assistance", "Safe-driver discounts"] },
  { id: "home", name: "Home", icon: "home",
    short: "Protect your house and everything in it.",
    long: "Covers your home, your belongings, and your liability — with options for valuables and major weather events.",
    points: ["Dwelling & contents", "Personal liability", "Replacement-cost options"] },
  { id: "renters", name: "Renters", icon: "renters",
    short: "Affordable coverage for your belongings.",
    long: "Protects your stuff and your liability while you rent — often just a few dollars a month.",
    points: ["Personal property", "Liability protection", "Loss of use"] },
  { id: "condo", name: "Condo", icon: "condo",
    short: "Protection for what your master policy skips.",
    long: "Covers your interior, your belongings, liability, and the special assessments your association's policy won't.",
    points: ["Interior & belongings", "Loss assessment", "Personal liability"] },
  { id: "life", name: "Life", icon: "life",
    short: "Security for the people who count on you.",
    long: "Term and whole life options to protect your family, cover final expenses, and build value over time.",
    points: ["Term & whole life", "Income protection", "Flexible amounts"] },
  { id: "business", name: "Business", icon: "business",
    short: "Coverage built around how you operate.",
    long: "General liability, property, commercial auto, and workers' comp — put together to fit your trade.",
    points: ["General liability", "Commercial property", "Workers' comp"] },
  { id: "bundle1", name: "Auto + Home Bundle", icon: "bundle",
    short: "Combine both and save on each.",
    long: "Bundle auto and home for a multi-policy discount, one renewal date, and one person to call.",
    points: ["Multi-policy discount", "One renewal date", "Simpler billing"] },
  { id: "bundle2", name: "Auto + Renters Bundle", icon: "bundle2",
    short: "Two policies, one simple bill.",
    long: "Pair auto and renters to save on both — a good fit for renters who want full coverage without the hassle.",
    points: ["Bundle savings", "Single statement", "Great for renters"] },
  { id: "moto", name: "Motorcycle & Recreational", icon: "moto",
    short: "Bikes, boats, RVs, and weekend toys.",
    long: "Covers motorcycles, boats, RVs, and ATVs — so you're protected on every road and trail.",
    points: ["Motorcycle & ATV", "Boat & watercraft", "RV & trailer"] },
  { id: "umbrella", name: "Umbrella", icon: "umbrella",
    short: "Extra liability above your other policies.",
    long: "An added layer that kicks in over your auto and home limits — guarding your savings from a big claim.",
    points: ["$1M+ added liability", "Sits over auto & home", "Surprisingly affordable"] },
  { id: "financial", name: "Financial", icon: "financial",
    short: "Plan for what comes next.",
    long: "Annuities, retirement, and financial-protection products to help you plan ahead and keep what you've built. Let's talk through what fits.",
    points: ["Retirement planning", "Annuities", "Financial protection"] },
];

/* The appointment-form checkboxes — exactly the brief's set, in its order.
   At least one is required to submit. */
export const FORM_PRODUCTS = [
  { id: "medical", label: "Medical" },
  { id: "auto", label: "Auto" },
  { id: "home", label: "Home" },
  { id: "life", label: "Life" },
  { id: "renters", label: "Renters" },
  { id: "business", label: "Business" },
  { id: "moto", label: "Motorcycle & Recreational" },
  { id: "condo", label: "Condo" },
  { id: "financial", label: "Financial" },
  { id: "umbrella", label: "Umbrella" },
];

/* Clicking a showcase card pre-checks the matching form product(s). */
export const PREFILL_MAP = {
  medical: ["medical"],
  auto: ["auto"], home: ["home"], renters: ["renters"], condo: ["condo"],
  life: ["life"], business: ["business"], moto: ["moto"], umbrella: ["umbrella"],
  financial: ["financial"], bundle1: ["auto", "home"], bundle2: ["auto", "renters"],
};

export const NAV_LINKS = [
  { id: "top", label: "Home" },
  { id: "products", label: "Insurance" },
  { id: "medical", label: "Medical", emphasis: true },
  { id: "about", label: "About" },
];
