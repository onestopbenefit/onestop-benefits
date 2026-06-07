import Reveal from "../components/Reveal.jsx";
import BackgroundRipple from "../components/BackgroundRipple.jsx";

export default function Statement() {
  return (
    <section className="xsection darker ripple-section">
      <BackgroundRipple />
      <div className="wrap">
        <Reveal><span className="xeyebrow">Onestop Benefits</span></Reveal>
        <Reveal delay={0.08}>
          <p className="statement">
            One agent. <span className="muted">One relationship for</span> every kind of coverage
            <span className="muted"> your family and business need.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
