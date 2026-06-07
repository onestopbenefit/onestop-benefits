export default function Button({ variant = "primary", size, children, icon, iconRight, className = "", ...rest }) {
  const cls = ["btn", `btn-${variant}`, size ? `btn-${size}` : "", className].filter(Boolean).join(" ");
  return (
    <button className={cls} {...rest}>
      {icon}{children}{iconRight}
    </button>
  );
}
