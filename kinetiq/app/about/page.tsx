import Link from "next/link";
import type { Metadata } from "next";
import { brand, stats, industries } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: `${brand.name} is an AI-first growth and technology studio building intelligent systems that compound revenue.`,
};

const Arrow = () => <span className="arrow">→</span>;

const principles = [
  {
    k: "Systems over campaigns",
    v: "We refuse one-off tactics. Every engagement builds a durable machine that keeps producing after we leave.",
  },
  {
    k: "AI where it earns its keep",
    v: "We wire intelligence into the parts of the business that move revenue — not because it's fashionable, but because it pays.",
  },
  {
    k: "Small senior teams",
    v: "No layers, no hand-offs to juniors. The people who scope the work are the people who ship it.",
  },
  {
    k: "Measured against pipeline",
    v: "If it doesn't move a number that matters, it doesn't ship. We instrument everything and report honestly.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="pagehead">
        <div className="hero__glow" />
        <div className="container">
          <span className="eyebrow">About</span>
          <h1>A studio built like an engineering team.</h1>
          <p className="lede" style={{ marginTop: 26 }}>
            {brand.name} pairs two decades of digital-growth scar tissue with an
            AI-native way of building. We&apos;re small on purpose and senior by
            default.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="stats">
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <div className="stat__value">{s.value}</div>
                <div className="stat__label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section__head">
            <div>
              <span className="eyebrow">What we believe</span>
              <h2>Four principles we won&apos;t bend.</h2>
            </div>
          </div>
          <div className="services-grid">
            {principles.map((p, i) => (
              <article className="service" key={p.k}>
                <span className="service__index">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>{p.k}</h3>
                <p className="service__summary">{p.v}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section__head">
            <div>
              <span className="eyebrow">Sectors</span>
              <h2>Fluent across the industries we serve.</h2>
            </div>
          </div>
          <div className="industries">
            {industries.map((i) => (
              <span className="chip" key={i}>
                {i}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-band">
            <span className="eyebrow">Work with us</span>
            <h2 style={{ marginTop: 18 }}>
              Bring us a hard growth problem. We like those.
            </h2>
            <div style={{ marginTop: 36, position: "relative" }}>
              <Link href="/contact" className="btn btn--solid">
                Get in touch <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
