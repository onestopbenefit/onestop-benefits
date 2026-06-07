import { useRef, useState, useEffect } from "react";

/* Background Ripple Effect — a native recreation of Aceternity's component
   (this project isn't on Tailwind/shadcn). An interactive grid of cells:
   hover highlights a cell, clicking sends a ripple outward where each cell's
   flash is delayed by its distance from the click. Purely decorative. */
export default function BackgroundRipple({ cellSize = 56 }) {
  const ref = useRef(null);
  const [dims, setDims] = useState({ rows: 0, cols: 0 });
  const [ripple, setRipple] = useState({ row: -1, col: -1, id: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => {
      const r = el.getBoundingClientRect();
      setDims({
        cols: Math.max(1, Math.ceil(r.width / cellSize)),
        rows: Math.max(1, Math.ceil(r.height / cellSize)),
      });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [cellSize]);

  const total = dims.rows * dims.cols;
  const fire = (i) =>
    setRipple((p) => ({ row: Math.floor(i / dims.cols), col: i % dims.cols, id: p.id + 1 }));

  return (
    <div ref={ref} className="ripple-bg" aria-hidden="true">
      <div
        key={ripple.id}
        className={"ripple-grid" + (ripple.id > 0 ? " has-ripple" : "")}
        style={{
          gridTemplateColumns: `repeat(${dims.cols}, 1fr)`,
          gridTemplateRows: `repeat(${dims.rows}, 1fr)`,
        }}
      >
        {Array.from({ length: total }).map((_, i) => {
          const row = Math.floor(i / dims.cols);
          const col = i % dims.cols;
          const dist = Math.hypot(row - ripple.row, col - ripple.col);
          return (
            <button
              key={i}
              type="button"
              tabIndex={-1}
              className="ripple-cell"
              style={{ "--delay": `${Math.round(dist * 55)}ms` }}
              onMouseDown={() => fire(i)}
            />
          );
        })}
      </div>
    </div>
  );
}
