import { useState, useEffect, useMemo, useRef } from "react";
import Reveal from "../components/Reveal.jsx";
import Button from "../components/Button.jsx";
import { IcArrow, IcLock, IcCheckBig, IcPhone, IcCheck } from "../components/icons.jsx";
import { AGENT } from "../data/agent.js";
import { FORM_PRODUCTS } from "../data/products.js";

// Sanitize: strip any stray whitespace / BOM / non-id characters so a bad
// env value (e.g. a BOM from a shell pipe) can't corrupt the endpoint.
const FORMSPREE_ID = (import.meta.env.VITE_FORMSPREE_ID || "").replace(/[^A-Za-z0-9]/g, "");

const EMPTY = {
  first: "", last: "", email: "", phone: "",
  customer: "No",           // required, defaults to No
  date: "", time: "",
  _gotcha: "",              // honeypot
};

/* 9:00 AM–5:00 PM in 30-minute increments, plus "Anytime". */
function buildTimes() {
  const out = [];
  for (let mins = 9 * 60; mins <= 17 * 60; mins += 30) {
    const h = Math.floor(mins / 60), m = mins % 60;
    const ampm = h >= 12 ? "PM" : "AM";
    const h12 = ((h + 11) % 12) + 1;
    out.push(`${h12}:${String(m).padStart(2, "0")} ${ampm}`);
  }
  out.push("Anytime");
  return out;
}
const TIMES = buildTimes();

function validate(v, products, todayStr) {
  const e = {};
  if (!v.first.trim()) e.first = "First name is required.";
  if (!v.last.trim()) e.last = "Last name is required.";
  if (!v.email.trim()) e.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = "Enter a valid email.";
  if (!v.phone.trim()) e.phone = "Phone number is required.";
  else if (v.phone.replace(/\D/g, "").length < 10) e.phone = "Enter a valid phone number.";
  if (!v.date) e.date = "Pick a preferred date.";
  else if (v.date < todayStr) e.date = "Choose today or a future date.";
  if (!v.time) e.time = "Pick a preferred time.";
  if (!Object.values(products).some(Boolean)) e.products = "Choose at least one.";
  return e;
}

export default function AppointmentForm({ prefill }) {
  const todayStr = useMemo(() => {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  }, []);

  const [v, setV] = useState(EMPTY);
  const [products, setProducts] = useState(
    () => Object.fromEntries(FORM_PRODUCTS.map((p) => [p.id, false]))
  );
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | error
  const [errMsg, setErrMsg] = useState("");
  const [done, setDone] = useState(false);
  const formRef = useRef(null);

  // pre-check products when a showcase card is clicked
  useEffect(() => {
    if (!prefill || !prefill.ids || !prefill.ids.length) return;
    setProducts((prev) => {
      const next = { ...prev };
      prefill.ids.forEach((id) => { if (id in next) next[id] = true; });
      return next;
    });
  }, [prefill?.nonce]); // eslint-disable-line react-hooks/exhaustive-deps

  const errors = validate(v, products, todayStr);
  const isValid = Object.keys(errors).length === 0;
  const show = (field) => touched[field] && errors[field];

  const set = (name) => (ev) => setV((s) => ({ ...s, [name]: ev.target.value }));
  const blur = (name) => () => setTouched((t) => ({ ...t, [name]: true }));
  const toggleProduct = (id) => {
    setProducts((p) => ({ ...p, [id]: !p[id] }));
    setTouched((t) => ({ ...t, products: true }));
  };

  async function submit(ev) {
    ev.preventDefault();
    setTouched({ first: true, last: true, email: true, phone: true, date: true, time: true, products: true });
    if (!isValid) return;
    if (v._gotcha) { setDone(true); return; } // bot trap — silently "succeed"

    const selected = FORM_PRODUCTS.filter((p) => products[p.id]).map((p) => p.label);
    const payload = {
      firstName: v.first.trim(),
      lastName: v.last.trim(),
      email: v.email.trim(),
      phone: v.phone.trim(),
      currentCustomer: v.customer,
      preferredDate: v.date,
      preferredTime: v.time,
      products: selected.join(", "),
      _subject: `New appointment request from ${v.first.trim()} ${v.last.trim()}`,
      _replyto: v.email.trim(),
    };

    setStatus("submitting");
    setErrMsg("");

    // No Formspree ID yet: simulate the flow in dev so the experience is previewable.
    if (!FORMSPREE_ID) {
      if (import.meta.env.DEV) {
        await new Promise((r) => setTimeout(r, 900));
        setStatus("idle"); setDone(true);
        return;
      }
      setStatus("error");
      setErrMsg("This form isn't connected yet. Please call or text instead — I'll get right back to you.");
      return;
    }

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setStatus("idle"); setDone(true);
      } else {
        const data = await res.json().catch(() => ({}));
        const msg = data?.errors?.map((x) => x.message).join(" ");
        setStatus("error");
        setErrMsg(msg || "Something went wrong sending your request. Please try again, or call/text me directly.");
      }
    } catch {
      setStatus("error");
      setErrMsg("Couldn't reach the server. Check your connection and try again, or call/text me directly.");
    }
  }

  function reset() {
    setV(EMPTY);
    setProducts(Object.fromEntries(FORM_PRODUCTS.map((p) => [p.id, false])));
    setTouched({});
    setStatus("idle"); setErrMsg(""); setDone(false);
  }

  return (
    <section className="xsection darker" id="quote">
      <div className="wrap appt-grid">
        <div className="appt-aside">
          <Reveal><span className="xeyebrow">Request an appointment</span></Reveal>
          <Reveal delay={0.06}><h2 className="xtitle">Pick a time to <span className="hl">talk it through.</span></h2></Reveal>
          <Reveal delay={0.12}><p className="lead">
            Tell me a little about what you'd like to cover and when you're free. I'll reach out to
            confirm a time that works and put together your options. Free, no obligation.
          </p></Reveal>
          <Reveal delay={0.18}>
            <div className="appt-steps">
              <div className="qstep"><span className="qstep-n">1</span><div><div className="t">Send your request</div><div className="s">Your details and a preferred date and time.</div></div></div>
              <div className="qstep"><span className="qstep-n">2</span><div><div className="t">I confirm with you</div><div className="s">I'll call or email to lock in a time that works.</div></div></div>
              <div className="qstep"><span className="qstep-n">3</span><div><div className="t">We talk options</div><div className="s">Plain-English coverage that fits your life and budget.</div></div></div>
            </div>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="appt-talk">
              <span className="ic"><IcPhone /></span>
              <div>
                <div className="k">Prefer to talk now?</div>
                <div className="v"><a href={`tel:+1${AGENT.phoneRaw}`}>{AGENT.phone}</a></div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal dir="right" className="appt-panel">
          {done ? (
            <div className="success" role="status" aria-live="polite">
              <div className="success-ic"><IcCheckBig /></div>
              <h3>Thanks, {v.first || "there"}!</h3>
              <p>{AGENT.first} will get back to you shortly to confirm your appointment.</p>
              <Button variant="secondary" onClick={reset}>Request another time</Button>
            </div>
          ) : (
            <>
              <div className="appt-panel-head">
                <h3>Request your appointment</h3>
                <p className="panel-sub">Takes about a minute — no obligation, no spam.</p>
              </div>

              {import.meta.env.DEV && !FORMSPREE_ID && (
                <p className="form-status err" style={{ marginBottom: 16 }}>
                  Demo mode: add <code>VITE_FORMSPREE_ID</code> to <code>.env</code> to actually send. Submissions are simulated for now.
                </p>
              )}

              <form className="qform" onSubmit={submit} noValidate ref={formRef}>
                {/* honeypot — hidden from people, catches bots */}
                <div className="hp" aria-hidden="true">
                  <label htmlFor="_gotcha">Leave this field empty</label>
                  <input id="_gotcha" name="_gotcha" type="text" tabIndex={-1} autoComplete="off"
                         value={v._gotcha} onChange={set("_gotcha")} />
                </div>

                <div className={"field" + (show("first") ? " invalid" : "")}>
                  <label htmlFor="first">First name <span className="req">*</span></label>
                  <input id="first" name="first" className="control" value={v.first}
                         onChange={set("first")} onBlur={blur("first")} placeholder="Jane"
                         autoComplete="given-name" required
                         aria-invalid={show("first") ? "true" : undefined}
                         aria-describedby={show("first") ? "first-err" : undefined} />
                  {show("first") && <span className="error" id="first-err">{errors.first}</span>}
                </div>

                <div className={"field" + (show("last") ? " invalid" : "")}>
                  <label htmlFor="last">Last name <span className="req">*</span></label>
                  <input id="last" name="last" className="control" value={v.last}
                         onChange={set("last")} onBlur={blur("last")} placeholder="Doe"
                         autoComplete="family-name" required
                         aria-invalid={show("last") ? "true" : undefined}
                         aria-describedby={show("last") ? "last-err" : undefined} />
                  {show("last") && <span className="error" id="last-err">{errors.last}</span>}
                </div>

                <div className={"field" + (show("email") ? " invalid" : "")}>
                  <label htmlFor="email">Email <span className="req">*</span></label>
                  <input id="email" name="email" type="email" className="control" value={v.email}
                         onChange={set("email")} onBlur={blur("email")} placeholder="jane@email.com"
                         autoComplete="email" required
                         aria-invalid={show("email") ? "true" : undefined}
                         aria-describedby={show("email") ? "email-err" : undefined} />
                  {show("email") && <span className="error" id="email-err">{errors.email}</span>}
                </div>

                <div className={"field" + (show("phone") ? " invalid" : "")}>
                  <label htmlFor="phone">Phone <span className="req">*</span></label>
                  <input id="phone" name="phone" type="tel" className="control" value={v.phone}
                         onChange={set("phone")} onBlur={blur("phone")} placeholder="(000) 000-0000"
                         autoComplete="tel" inputMode="tel" required
                         aria-invalid={show("phone") ? "true" : undefined}
                         aria-describedby={show("phone") ? "phone-err" : undefined} />
                  {show("phone") && <span className="error" id="phone-err">{errors.phone}</span>}
                </div>

                <fieldset className="fset full">
                  <legend>Are you a current customer? <span className="req">*</span></legend>
                  <div className="radio-group">
                    {["Yes", "No"].map((opt) => (
                      <label key={opt} className={"radio-opt" + (v.customer === opt ? " checked" : "")}>
                        <input type="radio" name="customer" value={opt}
                               checked={v.customer === opt} onChange={set("customer")} />
                        {opt}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div className={"field" + (show("date") ? " invalid" : "")}>
                  <label htmlFor="date">Preferred date <span className="req">*</span></label>
                  <input id="date" name="date" type="date" className="control" value={v.date}
                         min={todayStr} onChange={set("date")} onBlur={blur("date")} required
                         aria-invalid={show("date") ? "true" : undefined}
                         aria-describedby={show("date") ? "date-err" : undefined} />
                  {show("date") && <span className="error" id="date-err">{errors.date}</span>}
                </div>

                <div className={"field" + (show("time") ? " invalid" : "")}>
                  <label htmlFor="time">Preferred time <span className="req">*</span></label>
                  <select id="time" name="time" className="control" value={v.time}
                          onChange={set("time")} onBlur={blur("time")} required
                          aria-invalid={show("time") ? "true" : undefined}
                          aria-describedby={show("time") ? "time-err" : undefined}>
                    <option value="">Select a time…</option>
                    {TIMES.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                  {show("time") && <span className="error" id="time-err">{errors.time}</span>}
                </div>

                <fieldset className={"fset full" + (show("products") ? " invalid" : "")}>
                  <legend>
                    Products I'm interested in discussing <span className="req">*</span>{" "}
                    <span className="hint">(select all that apply)</span>
                  </legend>
                  <div className="check-grid">
                    {FORM_PRODUCTS.map((p) => (
                      <label key={p.id} className={"check-opt" + (products[p.id] ? " checked" : "")}>
                        <input type="checkbox" checked={products[p.id]} onChange={() => toggleProduct(p.id)} />
                        {p.label}
                      </label>
                    ))}
                  </div>
                  {show("products") && <span className="error" id="products-err">{errors.products}</span>}
                </fieldset>

                <div className="qform-foot">
                  {status === "error" && <p className="form-status err" role="alert">{errMsg}</p>}
                  <div aria-live="polite" className="hp">{status === "submitting" ? "Sending your request…" : ""}</div>

                  <Button type="submit" size="lg" className="btn-block"
                          disabled={!isValid || status === "submitting"}
                          iconRight={status === "submitting" ? <span className="spinner" aria-hidden="true" /> : <IcArrow />}>
                    {status === "submitting" ? "Sending…" : "Request my appointment"}
                  </Button>

                  <p className="appt-fine">
                    <IcLock />
                    <span>Submitting this form isn't a confirmed appointment — {AGENT.first} will reach out to confirm a date and time that works.</span>
                  </p>
                </div>
              </form>
            </>
          )}
        </Reveal>
      </div>
    </section>
  );
}
