import { useState, useCallback } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./sections/Hero.jsx";
import Marquee from "./sections/Marquee.jsx";
import Statement from "./sections/Statement.jsx";
import Products from "./sections/Products.jsx";
import Steps from "./sections/Steps.jsx";
import AppointmentForm from "./sections/AppointmentForm.jsx";
import Why from "./sections/Why.jsx";
import About from "./sections/About.jsx";
import Faq from "./sections/Faq.jsx";
import Contact from "./sections/Contact.jsx";
import { PREFILL_MAP } from "./data/products.js";
import { useScrollSpy } from "./hooks/useScrollSpy.js";

const SPY_IDS = ["products", "quote", "about", "contact"];

export default function App() {
  const [prefill, setPrefill] = useState({ ids: [], nonce: 0 });
  const active = useScrollSpy(SPY_IDS);

  const scrollToId = useCallback((id) => {
    if (id === "top") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const goQuote = useCallback(() => scrollToId("quote"), [scrollToId]);
  const goContact = useCallback(() => scrollToId("contact"), [scrollToId]);

  // Clicking a showcase card pre-checks the matching product(s) and jumps to the form.
  const pickProduct = useCallback((id) => {
    setPrefill((p) => ({ ids: id ? (PREFILL_MAP[id] || []) : [], nonce: p.nonce + 1 }));
    scrollToId("quote");
  }, [scrollToId]);

  return (
    <>
      <Header active={active} onNav={scrollToId} onQuote={goQuote} />
      <main className="lp">
        <Hero onQuote={goQuote} onContact={goContact} />
        <Marquee />
        <Statement />
        <Products onPick={pickProduct} />
        <Steps onQuote={goQuote} />
        <AppointmentForm prefill={prefill} />
        <Why />
        <About onQuote={goQuote} onContact={goContact} />
        <Faq />
        <Contact onQuote={goQuote} />
      </main>
      <Footer onNav={scrollToId} onQuote={goQuote} />
    </>
  );
}
