import Link from "next/link";
import type { Metadata } from "next";
import { services, approach } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI & software development, web & app engineering, UI/UX, performance marketing, automation, and proprietary growth products.",
};

const Arrow = () => <span className="arrow">→</span>;

export default function ServicesPage() {
  return (
    <>
      <section className="pagehead">
        <div className="hero__glow" />
        <div className="container">
          <span className="eyebrow">Services</span>
          <h1>Everything it takes to design, build, and grow.</h1>
          <p className="lede" style={{ marginTop: 26 }}>
            Six connected capabilities, delivered by senior teams as one system —
            so strategy, product, and marketing pull in the same direction.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-grid">
            {services.map((s) => (
              <article className="service" key={s.index}>
                <span className="service__index">{s.index}</span>
                <h3>{s.title}</h3>
                <p className="service__summary">{s.summary}</p>
                <ul className="service__caps">
                  {s.capabilities.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section__head">
            <div>
              <span className="eyebrow">Engagement model</span>
              <h2>From diagnosis to compounding results.</h2>
            </div>
          </div>
          <div className="approach">
            {approach.map((a) => (
              <div className="approach__card" key={a.step}>
                <span className="approach__step">{a.step}</span>
                <h3>{a.title}</h3>
                <p>{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-band">
            <span className="eyebrow">Next step</span>
            <h2 style={{ marginTop: 18 }}>Tell us where the leverage is hiding.</h2>
            <div style={{ marginTop: 36, position: "relative" }}>
              <Link href="/contact" className="btn btn--solid">
                Start a project <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
