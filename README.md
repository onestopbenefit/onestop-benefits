# Onestop Benefits

Marketing site for **Shelby Philip**, an independent insurance agent in Vineland, NJ.
Single-page React + Vite app with a dark, scroll-driven design and an appointment-request
form wired to Formspree.

**Live:** https://onestop-benefits.vercel.app

---

## Tech

- **React 19** + **Vite** (plain JS, no TypeScript)
- Hand-written CSS design system (`src/styles/`), Hanken Grotesk, brand `#050C9C` / `#3ABEF9`
- No UI framework — components are local to `src/`
- Deployed on **Vercel** (account: onestopbenefit)

## Local development

```bash
npm install
cp .env.example .env      # then paste your Formspree ID into .env
npm run dev               # http://localhost:5173
npm run build             # production build -> dist/
npm run preview           # serve the production build locally
```

## Project layout

```
index.html                 # entry, fonts, meta, favicon
src/
  main.jsx                 # React root + CSS imports
  App.jsx                  # single-page composition, smooth-scroll, product prefill, scroll-spy
  data/
    agent.js               # ALL agent facts — single source of truth (name, license, phone, email…)
    products.js            # product list, form checkboxes, nav links, marquee
  components/              # Header, Footer, BrandLogo, Button, Reveal, icons
  hooks/                   # useScrolled, useScrollSpy
  sections/               # Hero, Marquee, Statement, Products, Steps, AppointmentForm, Why, About, Faq, Contact
  styles/                 # base.css (design system), motion.css (cinematic layer), appointment.css (form)
public/assets/             # logo.svg, agent-hero.png, agent-headshot.png
```

To change any agent detail (phone, email, address, license), edit **`src/data/agent.js`** — it is
the only place these live.

## Appointment form (Formspree)

The form at `#quote` submits via `fetch` (the visitor stays on the page) to
`https://formspree.io/f/${VITE_FORMSPREE_ID}` with `Accept: application/json` and a JSON body.
Selected products are joined into one comma-separated string; `_subject` and `_replyto` are set.
A hidden `_gotcha` honeypot drops bot submissions.

- The form ID is read from the env var **`VITE_FORMSPREE_ID`** (baked in at build time by Vite).
- Locally: set it in `.env`.
- On Vercel: **Settings → Environment Variables → `VITE_FORMSPREE_ID`**, then redeploy
  (env vars only take effect on the next build).
- If a build has no ID, submitting shows a friendly "call/text me instead" message.

### Swapping to Web3Forms later

If Formspree's free tier (50/mo) runs out, change the POST in
`src/sections/AppointmentForm.jsx` to `https://api.web3forms.com/submit`, add an `access_key`
field to the payload, and keep all other logic identical.

## Deploy (Vercel)

This project is linked to the Vercel project `onestop-benefits` (onestopbenefit account).

```bash
vercel deploy --prod        # build + deploy to production
```

Or connect the GitHub repo in the Vercel dashboard so every push to `main` auto-deploys.

## Verified facts

Shelby Philip · Insurance Agent in Vineland, NJ · NJ license #1561192 ·
703 E Landis Ave, Vineland, NJ 08360 · phone/text 856-362-5273 · fax 856-839-0193 ·
onestopbenefit@gmail.com · licensed in New Jersey only. No third-party carrier branding.
