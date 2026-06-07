import { useState, useEffect } from "react";

/* Returns the id of the section currently in the viewport's upper band,
   so the header nav can highlight the active link. `ids` are element ids. */
export function useScrollSpy(ids, { topId = "top" } = {}) {
  const [active, setActive] = useState(topId);

  useEffect(() => {
    const targets = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!targets.length) return;

    const visible = new Map();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) visible.set(e.target.id, e.intersectionRatio);
          else visible.delete(e.target.id);
        });
        // near the very top, always treat the page as "Home"
        if (window.scrollY < 200) { setActive(topId); return; }
        let best = null, bestRatio = -1;
        visible.forEach((ratio, id) => { if (ratio > bestRatio) { best = id; bestRatio = ratio; } });
        if (best) setActive(best);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, [ids, topId]);

  return active;
}
