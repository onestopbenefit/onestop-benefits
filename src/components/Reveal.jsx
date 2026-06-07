import { useRef, useEffect } from "react";

/* Fades/slides its children in when scrolled into view. Wrap elements that
   have their own hover transitions (rather than putting data-reveal directly
   on them) to avoid transition clashes. Respects reduced-motion. */
export default function Reveal({ as: Tag = "div", dir, delay = 0, className = "", children, style, ...rest }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-in");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { el.classList.add("is-in"); io.unobserve(el); }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -7% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-reveal={dir || ""}
      className={className}
      style={{ ...(delay ? { transitionDelay: delay + "s" } : null), ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
