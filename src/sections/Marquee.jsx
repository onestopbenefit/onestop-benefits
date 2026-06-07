import { useRef, useState, useEffect } from "react";
import { MARQUEE } from "../data/products.js";

export default function Marquee() {
  const ref = useRef(null);
  const [inView, setInView] = useState(true);

  // Pause the (continuous) ticker whenever it scrolls out of view — saves
  // battery/compositor work and avoids off-screen distraction.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const row = MARQUEE.concat(MARQUEE);
  return (
    <div ref={ref} className={"marquee" + (inView ? "" : " is-paused")} aria-hidden="true">
      <div className="marquee-track">
        {row.map((t, i) => (
          <span className="marquee-chip" key={i}><span className="marquee-dot" />{t}</span>
        ))}
      </div>
    </div>
  );
}
