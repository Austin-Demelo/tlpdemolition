import React, { useState } from "react";

/**
 * TLP DEMOLITION — single-page site
 * Design concept: "marked for removal" — the way a demo crew spray-paints
 * X's and cut-lines on a floor plan before selective interior demolition
 * begins. That mark becomes the visual signature of the whole page.
 */

const CutLine = ({ flip }) => (
  <svg
    className={`cutline ${flip ? "cutline--flip" : ""}`}
    viewBox="0 0 1200 60"
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    <line x1="0" y1="30" x2="1200" y2="30" className="cutline__dash" />
    <path d="M0 40 L60 20 L120 40 L180 20" className="cutline__jag" />
    <path d="M1020 40 L1080 20 L1140 40 L1200 20" className="cutline__jag" />
    <text x="600" y="16" textAnchor="middle" className="cutline__label">
      CUT LINE
    </text>
  </svg>
);

const MarkedPlan = () => (
  <svg viewBox="0 0 480 480" className="plan" aria-hidden="true">
    <rect x="8" y="8" width="464" height="464" className="plan__outline" />
    {/* interior walls */}
    <line x1="8" y1="220" x2="300" y2="220" className="plan__wall" />
    <line x1="300" y1="8" x2="300" y2="472" className="plan__wall" />
    <line x1="300" y1="340" x2="472" y2="340" className="plan__wall" />
    <line x1="150" y1="220" x2="150" y2="472" className="plan__wall" />

    {/* rooms marked to keep */}
    <text x="80" y="130" className="plan__tag plan__tag--keep">KEEP</text>
    <text x="380" y="70" className="plan__tag plan__tag--keep">KEEP</text>

    {/* rooms marked for removal, X'd out */}
    <g className="plan__zone">
      <rect x="16" y="228" width="126" height="236" className="plan__hatch" />
      <line x1="16" y1="228" x2="142" y2="464" className="plan__x" />
      <line x1="142" y1="228" x2="16" y2="464" className="plan__x" />
      <text x="35" y="450" className="plan__tag">REMOVE</text>
    </g>
    <g className="plan__zone">
      <rect x="308" y="348" width="156" height="116" className="plan__hatch" />
      <line x1="308" y1="348" x2="464" y2="464" className="plan__x" />
      <line x1="464" y1="348" x2="308" y2="464" className="plan__x" />
      <text x="330" y="440" className="plan__tag">REMOVE</text>
    </g>

    <circle cx="40" cy="40" r="3" className="plan__dot" />
    <circle cx="440" cy="40" r="3" className="plan__dot" />
    <circle cx="40" cy="440" r="3" className="plan__dot" />
    <circle cx="440" cy="440" r="3" className="plan__dot" />
  </svg>
);

const ProjectPlaceholder = ({ tag }) => (
  <svg viewBox="0 0 400 300" className="proj-ph" aria-hidden="true">
    <defs>
      <pattern id={`hatch-${tag}`} width="10" height="10" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
        <line x1="0" y1="0" x2="0" y2="10" className="proj-ph__hatchline" />
      </pattern>
    </defs>
    <rect width="400" height="300" className="proj-ph__bg" />
    <rect width="400" height="300" fill={`url(#hatch-${tag})`} />
    <line x1="0" y1="0" x2="400" y2="300" className="proj-ph__x" />
    <line x1="400" y1="0" x2="0" y2="300" className="proj-ph__x" />
    <rect x="14" y="14" width="118" height="28" className="proj-ph__stamp" />
    <text x="24" y="33" className="proj-ph__stamp-text">{tag}</text>
  </svg>
);

const services = [
  {
    title: "Selective interior strip-out",
    copy:
      "We remove finishes, partitions, ceilings, and MEP down to shell — while the floors above and below stay fully occupied.",
  },
  {
    title: "Load-bearing & structural removal",
    copy:
      "Engineered shoring and sequencing for openings, beam removal, and structural alterations inside live buildings.",
  },
  {
    title: "Occupied-building phasing",
    copy:
      "Work planned around business hours, tenants, and shared corridors, with dust and noise containment throughout.",
  },
  {
    title: "Salvage, sort & recycling",
    copy:
      "Materials are separated on site — metal, wood, and masonry diverted from landfill wherever possible.",
  },
];

const projects = [
  { tag: "PRJ-014", name: "Riverside Office Tower — Floors 6–9", scope: "Full-floor strip-out, 42,000 sq ft, occupied building" },
  { tag: "PRJ-021", name: "Old Mill Street Retail Conversion", scope: "Selective wall removal, structural opening, 6-week phased plan" },
  { tag: "PRJ-027", name: "Harbourview Medical Building", scope: "Interior demo & MEP removal, after-hours only" },
  { tag: "PRJ-033", name: "Union Hotel — Guest Floor Renovation", scope: "Partition & finish removal, 3 floors, live hotel operation" },
  { tag: "PRJ-038", name: "Bexley Manufacturing Plant", scope: "Structural steel removal, mezzanine demolition" },
  { tag: "PRJ-041", name: "Grant Ave Bank Branch", scope: "Vault surround demolition, selective structural cutting" },
];

const stats = [
  { n: "18", label: "years in business" },
  { n: "410+", label: "projects completed" },
  { n: "0", label: "structural incidents" },
  { n: "92%", label: "material diverted from landfill" },
];

export default function TLPDemolitionSite() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", details: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="tlp">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');

        :root {
          --charcoal: #201F1C;
          --charcoal-2: #2B2A26;
          --concrete: #E9E6DC;
          --concrete-2: #DEDACB;
          --steel: #6B7076;
          --hazard: #F5B700;
          --rust: #C1440E;
          --ink: #1A1918;
          --paper: #F5F3EC;
        }

        .tlp { font-family: 'Inter', sans-serif; color: var(--ink); background: var(--paper); }
        .tlp * { box-sizing: border-box; }
        .tlp h1, .tlp h2, .tlp h3 { font-family: 'Oswald', sans-serif; text-transform: uppercase; letter-spacing: 0.01em; margin: 0; line-height: 1.05; }
        .tlp .mono { font-family: 'IBM Plex Mono', monospace; }
        .tlp a { color: inherit; text-decoration: none; }
        .tlp button { font-family: inherit; cursor: pointer; }
        .tlp section { padding: 88px 8vw; }
        @media (max-width: 720px) { .tlp section { padding: 56px 6vw; } }

        /* ---------- header ---------- */
        .header {
          position: sticky; top: 0; z-index: 50;
          display: flex; align-items: center; justify-content: space-between;
          padding: 18px 8vw; background: var(--charcoal); color: var(--paper);
          border-bottom: 3px solid var(--hazard);
        }
        .header__brand { display: flex; align-items: center; gap: 12px; }
        .logo-ph {
          width: 44px; height: 44px; flex-shrink: 0;
          border: 2px solid var(--hazard); position: relative;
          display: flex; align-items: center; justify-content: center;
        }
        .logo-ph::before, .logo-ph::after {
          content: ""; position: absolute; background: var(--hazard);
        }
        .logo-ph::before { width: 2px; height: 26px; transform: rotate(45deg); }
        .logo-ph::after { width: 2px; height: 26px; transform: rotate(-45deg); }
        .brand-word { font-family: 'Oswald', sans-serif; font-size: 20px; font-weight: 600; letter-spacing: 0.04em; }
        .brand-word span { color: var(--hazard); }
        .nav { display: flex; align-items: center; gap: 32px; }
        .nav__links { display: flex; gap: 26px; font-size: 14px; letter-spacing: 0.03em; text-transform: uppercase; }
        .nav__links a { opacity: 0.85; border-bottom: 2px solid transparent; padding-bottom: 4px; transition: opacity .15s, border-color .15s; }
        .nav__links a:hover { opacity: 1; border-color: var(--hazard); }
        .nav__cta {
          background: var(--hazard); color: var(--ink); border: none;
          padding: 10px 18px; font-size: 13px; font-weight: 600; letter-spacing: 0.03em;
          text-transform: uppercase; font-family: 'IBM Plex Mono', monospace;
        }
        @media (max-width: 720px) { .nav__links { display: none; } }

        /* ---------- hero ---------- */
        .hero {
          background: var(--charcoal); color: var(--paper);
          display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 48px; align-items: center;
          padding-top: 72px; padding-bottom: 64px;
        }
        @media (max-width: 900px) { .hero { grid-template-columns: 1fr; } }
        .hero__eyebrow {
          font-family: 'IBM Plex Mono', monospace; color: var(--hazard);
          font-size: 13px; letter-spacing: 0.12em; margin-bottom: 18px;
        }
        .hero h1 { font-size: clamp(38px, 5.4vw, 66px); }
        .hero h1 em { color: var(--hazard); font-style: normal; }
        .hero p { max-width: 46ch; margin-top: 22px; font-size: 17px; line-height: 1.6; color: #D9D6CB; }
        .hero__actions { display: flex; gap: 16px; margin-top: 34px; flex-wrap: wrap; }
        .btn-primary {
          background: var(--hazard); color: var(--ink); border: none; padding: 14px 26px;
          font-weight: 600; font-size: 14px; letter-spacing: 0.03em; text-transform: uppercase;
        }
        .btn-ghost {
          background: transparent; border: 1px solid #565349; color: var(--paper);
          padding: 14px 26px; font-size: 14px; letter-spacing: 0.03em; text-transform: uppercase;
        }
        .plan { width: 100%; max-width: 420px; margin: 0 auto; display: block; }
        .plan__outline { fill: none; stroke: #47443C; stroke-width: 2; }
        .plan__wall { stroke: #47443C; stroke-width: 2; }
        .plan__hatch { fill: rgba(193,68,14,0.12); }
        .plan__x { stroke: var(--rust); stroke-width: 3; }
        .plan__tag { fill: #D9D6CB; font-family: 'IBM Plex Mono', monospace; font-size: 13px; letter-spacing: 0.05em; }
        .plan__tag--keep { fill: #8FA98A; }
        .plan__dot { fill: var(--hazard); }

        /* ---------- cutline divider ---------- */
        .cutline { width: 100%; height: 40px; display: block; }
        .cutline--flip { transform: scaleY(-1); }
        .cutline__dash { stroke: var(--steel); stroke-width: 1.5; stroke-dasharray: 10 8; }
        .cutline__jag { fill: none; stroke: var(--rust); stroke-width: 2; }
        .cutline__label {
          fill: var(--steel); font-family: 'IBM Plex Mono', monospace; font-size: 11px;
          letter-spacing: 0.15em;
        }

        /* ---------- about ---------- */
        .about { background: var(--concrete); }
        .about__grid { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; }
        @media (max-width: 900px) { .about__grid { grid-template-columns: 1fr; } }
        .section-eyebrow {
          font-family: 'IBM Plex Mono', monospace; font-size: 12px; letter-spacing: 0.15em;
          color: var(--rust); margin-bottom: 14px; display: block;
        }
        .about h2 { font-size: clamp(28px, 3.4vw, 40px); margin-bottom: 20px; }
        .about p { font-size: 16px; line-height: 1.75; color: #3A382F; max-width: 52ch; }
        .about p + p { margin-top: 14px; }
        .stat-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; align-self: start; }
        .stat {
          border-top: 3px solid var(--hazard); padding-top: 12px;
        }
        .stat__n { font-family: 'Oswald', sans-serif; font-size: 40px; font-weight: 600; color: var(--ink); }
        .stat__label { font-family: 'IBM Plex Mono', monospace; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #55524A; }

        /* ---------- services ---------- */
        .services { background: var(--paper); }
        .services__head { max-width: 60ch; margin-bottom: 44px; }
        .services__head h2 { font-size: clamp(26px, 3vw, 36px); }
        .service-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: #D8D4C6; }
        @media (max-width: 980px) { .service-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 600px) { .service-grid { grid-template-columns: 1fr; } }
        .service-card { background: var(--paper); padding: 30px 24px; }
        .service-card__mark { color: var(--rust); font-family: 'IBM Plex Mono', monospace; font-size: 13px; margin-bottom: 14px; display: block; }
        .service-card h3 { font-size: 18px; margin-bottom: 10px; letter-spacing: 0; }
        .service-card p { font-size: 14.5px; line-height: 1.6; color: #4A4740; }

        /* ---------- projects ---------- */
        .projects { background: var(--charcoal-2); color: var(--paper); }
        .projects__head { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 40px; flex-wrap: wrap; gap: 12px; }
        .projects__head h2 { font-size: clamp(26px, 3vw, 36px); color: var(--paper); }
        .projects__head .section-eyebrow { color: var(--hazard); }
        .project-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
        @media (max-width: 980px) { .project-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px) { .project-grid { grid-template-columns: 1fr; } }
        .project-card { background: #262521; border: 1px solid #3A382F; }
        .proj-ph { width: 100%; display: block; aspect-ratio: 4/3; }
        .proj-ph__bg { fill: #33312A; }
        .proj-ph__hatchline { stroke: #46443B; stroke-width: 1; }
        .proj-ph__x { stroke: #504D43; stroke-width: 1.5; }
        .proj-ph__stamp { fill: var(--hazard); }
        .proj-ph__stamp-text { fill: var(--ink); font-family: 'IBM Plex Mono', monospace; font-size: 13px; font-weight: 700; }
        .project-card__body { padding: 20px 22px 24px; }
        .project-card__body h3 { font-size: 16px; margin-bottom: 8px; letter-spacing: 0; }
        .project-card__body p { font-size: 13.5px; color: #B9B6AA; line-height: 1.55; font-family: 'IBM Plex Mono', monospace; }

        /* ---------- contact ---------- */
        .contact { background: var(--concrete-2); }
        .contact__grid { display: grid; grid-template-columns: 0.9fr 1.1fr; gap: 60px; }
        @media (max-width: 900px) { .contact__grid { grid-template-columns: 1fr; } }
        .contact h2 { font-size: clamp(26px, 3vw, 36px); margin-bottom: 18px; }
        .contact p { font-size: 15.5px; line-height: 1.7; color: #4A4740; max-width: 42ch; }
        .contact-info { margin-top: 30px; display: flex; flex-direction: column; gap: 14px; }
        .contact-info__row { display: flex; gap: 12px; font-size: 15px; }
        .contact-info__label { font-family: 'IBM Plex Mono', monospace; font-size: 12px; text-transform: uppercase; color: var(--rust); width: 90px; flex-shrink: 0; padding-top: 2px; }

        .form { background: var(--paper); border: 1px solid #CFCBBB; padding: 32px; }
        .form__row { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin-bottom: 18px; }
        @media (max-width: 560px) { .form__row { grid-template-columns: 1fr; } }
        .field { display: flex; flex-direction: column; gap: 6px; margin-bottom: 18px; }
        .field label { font-family: 'IBM Plex Mono', monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 0.06em; color: #55524A; }
        .field input, .field textarea {
          border: none; border-bottom: 2px solid #C7C3B3; background: transparent;
          padding: 10px 2px; font-size: 15px; font-family: 'Inter', sans-serif; color: var(--ink);
          outline: none; transition: border-color .15s;
        }
        .field input:focus, .field textarea:focus { border-color: var(--rust); }
        .field textarea { resize: vertical; min-height: 80px; }
        .form__submit {
          margin-top: 6px; background: var(--ink); color: var(--paper); border: none;
          padding: 15px 28px; font-weight: 600; font-size: 14px; letter-spacing: 0.04em;
          text-transform: uppercase; width: 100%;
        }
        .form__submit:hover { background: var(--rust); }
        .form__sent { font-family: 'IBM Plex Mono', monospace; color: #2E6B3E; font-size: 14px; padding-top: 8px; }

        /* ---------- footer ---------- */
        .footer {
          background: var(--charcoal); color: #B9B6AA;
          padding: 40px 8vw; display: flex; justify-content: space-between;
          align-items: center; flex-wrap: wrap; gap: 16px;
          border-top: 3px solid var(--hazard);
        }
        .footer .brand-word { color: var(--paper); }
        .footer small { font-family: 'IBM Plex Mono', monospace; font-size: 12px; letter-spacing: 0.04em; }
      `}</style>

      {/* HEADER */}
      <header className="header">
        <div className="header__brand">
          <div className="logo-ph" aria-label="TLP Demolition placeholder logo" />
          <span className="brand-word">TLP <span>DEMOLITION</span></span>
        </div>
        <nav className="nav">
          <div className="nav__links">
            <a href="#about">Who we are</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          <a href="#contact" className="nav__cta">Request a quote</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero">
        <div>
          <span className="hero__eyebrow">SELECTIVE INTERIOR DEMOLITION</span>
          <h1>WE TAKE OUT WHAT'S <em>MARKED</em>. NOTHING ELSE.</h1>
          <p>
            TLP Demolition strips, cuts, and clears interior space with the
            precision of a surgeon and the paperwork of an engineer — so the
            walls that should stand, stay standing.
          </p>
          <div className="hero__actions">
            <a href="#contact" className="btn-primary">Request a quote</a>
            <a href="#projects" className="btn-ghost">See our work</a>
          </div>
        </div>
        <MarkedPlan />
      </section>

      <CutLine />

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="about__grid">
          <div>
            <span className="section-eyebrow">WHO WE ARE</span>
            <h2>Demolition that leaves the rest of the building alone.</h2>
            <p>
              TLP Demolition is an interior demolition contractor. We don't
              level buildings — we go inside occupied, active structures and
              remove exactly what a renovation calls for: partitions,
              ceilings, flooring, fixtures, and select structural elements.
            </p>
            <p>
              Every job starts on paper. We walk the space with the design
              and engineering drawings, mark up what comes out and what
              stays, and build a sequence that keeps the rest of the
              building running while we work.
            </p>
          </div>
          <div className="stat-grid">
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <div className="stat__n mono">{s.n}</div>
                <div className="stat__label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CutLine flip />

      {/* SERVICES */}
      <section className="services" id="services">
        <div className="services__head">
          <span className="section-eyebrow">WHAT WE DO</span>
          <h2>Four ways we open up a space</h2>
        </div>
        <div className="service-grid">
          {services.map((s, i) => (
            <div className="service-card" key={s.title}>
              <span className="service-card__mark mono">{`SCOPE / ${String(i + 1).padStart(2, "0")}`}</span>
              <h3>{s.title}</h3>
              <p>{s.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects" id="projects">
        <div className="projects__head">
          <div>
            <span className="section-eyebrow">SELECTED WORK</span>
            <h2>Recent projects</h2>
          </div>
          <span className="mono" style={{ color: "#8B8879", fontSize: 13 }}>
            [ placeholder imagery — site photos to be added ]
          </span>
        </div>
        <div className="project-grid">
          {projects.map((p) => (
            <div className="project-card" key={p.tag}>
              <ProjectPlaceholder tag={p.tag} />
              <div className="project-card__body">
                <h3>{p.name}</h3>
                <p>{p.scope}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CutLine />

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="contact__grid">
          <div>
            <span className="section-eyebrow">GET IN TOUCH</span>
            <h2>Tell us what needs to come out.</h2>
            <p>
              Send over the scope, drawings, or just a rough idea of the
              space. We'll come back with a walk-through time and a written
              quote — no obligation.
            </p>
            <div className="contact-info">
              <div className="contact-info__row">
                <span className="contact-info__label">Phone</span>
                <span>(226) 239-5462</span>
              </div>
              <div className="contact-info__row">
                <span className="contact-info__label">Email</span>
                <span>info@tlpdemolition.ca</span>
              </div>
              <div className="contact-info__row">
                <span className="contact-info__label">Office</span>
                <span>000 Industrial Way, Unit 4<br />London, ON 00000</span>
              </div>
              <div className="contact-info__row">
                <span className="contact-info__label">Hours</span>
                <span>Mon–Fri, 7:00 AM – 5:00 PM</span>
              </div>
            </div>
          </div>

          <form className="form" onSubmit={handleSubmit}>
            <div className="form__row">
              <div className="field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" required value={form.name} onChange={handleChange} placeholder="Jane Contractor" />
              </div>
              <div className="field">
                <label htmlFor="phone">Phone</label>
                <input id="phone" name="phone" value={form.phone} onChange={handleChange} placeholder="(000) 000-0000" />
              </div>
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" name="email" required value={form.email} onChange={handleChange} placeholder="you@company.com" />
            </div>
            <div className="field">
              <label htmlFor="details">Project details</label>
              <textarea id="details" name="details" value={form.details} onChange={handleChange} placeholder="Address, square footage, timeline, scope of removal..." />
            </div>
            <button type="submit" className="form__submit">Send request</button>
            {sent && <div className="form__sent">Request received — we'll be in touch shortly.</div>}
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="header__brand">
          <div className="logo-ph" />
          <span className="brand-word">TLP <span>DEMOLITION</span></span>
        </div>
        <small>© {new Date().getFullYear()} TLP Demolition. Placeholder content for demonstration.</small>
      </footer>
    </div>
  );
}
