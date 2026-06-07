import { MARQUEE } from "../data/products.js";

export default function Marquee() {
  const row = MARQUEE.concat(MARQUEE);
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {row.map((t, i) => (
          <span className="marquee-chip" key={i}><span className="marquee-dot" />{t}</span>
        ))}
      </div>
    </div>
  );
}
