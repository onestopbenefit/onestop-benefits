import Reveal from "../components/Reveal.jsx";

export default function Statement() {
  return (
    <section className="xsection darker">
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
