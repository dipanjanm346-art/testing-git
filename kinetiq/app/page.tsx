import Link from "next/link";
import {
  brand,
  stats,
  serviceCategories,
  industries,
  approach,
} from "@/lib/content";
import { Icon } from "@/components/Icon";

const Arrow = () => <span className="arrow">→</span>;

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero__grid" />
        <div className="hero__glow" />
        <div className="container hero__inner">
          <span className="eyebrow reveal">AI-first growth &amp; technology studio</span>
          <h1 className="reveal" style={{ animationDelay: "0.06s" }}>
            We build <em>intelligent systems</em> that compound growth.
          </h1>
          <div className="hero__sub reveal" style={{ animationDelay: "0.12s" }}>
            <p className="lede">{brand.description}</p>
          </div>
          <div className="hero__cta reveal" style={{ animationDelay: "0.18s" }}>
            <Link href="/contact" className="btn btn--solid">
              Start a project <Arrow />
            </Link>
            <Link href="/services" className="btn">
              Explore services <Arrow />
            </Link>
          </div>
        </div>

        {/* Marquee */}
        <div className="marquee">
          <div className="marquee__track">
            {[...Array(2)].map((_, dup) => (
              <div className="marquee__item" key={dup}>
                {[
                  "Agentic AI",
                  "Generative Interfaces",
                  "Performance Marketing",
                  "Product Engineering",
                  "Automation",
                  "Growth Systems",
                ].map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section" style={{ paddingTop: 0 }}>
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

      {/* Services */}
      <section className="section" id="services">
        <div className="container">
          <div className="section__head">
            <div>
              <span className="eyebrow">What we do</span>
              <h2>One studio for the whole growth stack.</h2>
            </div>
            <Link href="/services" className="btn">
              All services <Arrow />
            </Link>
          </div>
          <div className="services-grid">
            {serviceCategories.map((cat) => (
              <article className="service" key={cat.slug}>
                <div className="service__top">
                  <span className="service__index">{cat.index}</span>
                  <span className="service__glyph">
                    <Icon name={cat.icon} size={18} />
                  </span>
                </div>
                <h3>
                  <Link href={`/services#${cat.slug}`}>{cat.title}</Link>
                </h3>
                <p className="service__summary">{cat.summary}</p>
                <ul className="service__caps">
                  {cat.subServices.map((s) => (
                    <li key={s.slug}>
                      <Link href={`/services/${s.slug}`}>{s.title}</Link>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section__head">
            <div>
              <span className="eyebrow">How we work</span>
              <h2>A method, not a menu.</h2>
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

      {/* Industries */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section__head">
            <div>
              <span className="eyebrow">Where we work</span>
              <h2>Trusted across eight industries.</h2>
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

      {/* CTA */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-band">
            <span className="eyebrow">Let&apos;s build</span>
            <h2 style={{ marginTop: 18 }}>
              Ready to turn effort into a system that compounds?
            </h2>
            <div style={{ marginTop: 36, position: "relative" }}>
              <Link href="/contact" className="btn btn--solid">
                Book an intro call <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
