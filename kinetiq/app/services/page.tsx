import Link from "next/link";
import type { Metadata } from "next";
import { serviceCategories, approach, allSubServices } from "@/lib/content";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI & software development, web & app engineering, UI/UX, performance marketing, automation, and support — every capability, with dedicated pages.",
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
            Six connected capabilities and {allSubServices.length} specialist
            services, delivered by senior teams as one system — so strategy,
            product, and marketing pull in the same direction.
          </p>
        </div>
      </section>

      {serviceCategories.map((cat) => (
        <section className="section catblock" id={cat.slug} key={cat.slug} style={{ scrollMarginTop: 90 }}>
          <div className="container">
            <div className="catblock__head">
              <span className="catblock__icon">
                <Icon name={cat.icon} size={22} />
              </span>
              <div>
                <span className="service__index">{cat.index}</span>
                <h2>{cat.title}</h2>
                <p className="catblock__summary">{cat.summary}</p>
              </div>
            </div>

            <div className="sub-grid">
              {cat.subServices.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="sub-card">
                  <h3>{s.title}</h3>
                  <p>{s.blurb}</p>
                  <span className="sub-card__go">Explore service {Arrow()}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

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
