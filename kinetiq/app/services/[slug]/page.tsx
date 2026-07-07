import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { allSubServices, getSubService, brand } from "@/lib/content";
import { Icon } from "@/components/Icon";

export function generateStaticParams() {
  return allSubServices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const svc = getSubService(slug);
  if (!svc) return { title: "Service not found" };
  return { title: svc.title, description: svc.blurb };
}

const Arrow = () => <span className="arrow">→</span>;

export default async function SubServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const svc = getSubService(slug);
  if (!svc) notFound();

  const siblings = svc.category.subServices.filter((s) => s.slug !== svc.slug);

  return (
    <>
      <section className="pagehead">
        <div className="hero__glow" />
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/services">Services</Link>
            <span>/</span>
            <Link href={`/services#${svc.category.slug}`}>
              {svc.category.title}
            </Link>
          </nav>
          <span className="eyebrow" style={{ marginTop: 18 }}>
            <span className="eyebrow__icon">
              <Icon name={svc.category.icon} size={15} />
            </span>
            {svc.category.title}
          </span>
          <h1>{svc.title}</h1>
          <p className="lede" style={{ marginTop: 24 }}>
            {svc.blurb}
          </p>
          <div style={{ marginTop: 34 }}>
            <Link href="/contact" className="btn btn--solid">
              Start a project <Arrow />
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="detail-grid">
            <div>
              <span className="eyebrow">What&apos;s included</span>
              <ul className="deliverables">
                {svc.deliverables.map((d) => (
                  <li key={d}>
                    <span className="deliverables__mark">
                      <Icon name={svc.category.icon} size={14} />
                    </span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <aside className="detail-side">
              <h3>Why {brand.name}</h3>
              <p>
                We deliver {svc.title.toLowerCase()} as part of a connected
                system — not an isolated deliverable. Small senior teams, wired
                to your revenue metrics, shipping in weeks.
              </p>
              <div className="detail-side__stats">
                <div>
                  <strong>3,000+</strong>
                  <span>projects shipped</span>
                </div>
                <div>
                  <strong>1 day</strong>
                  <span>reply time</span>
                </div>
              </div>
              <Link href="/contact" className="btn" style={{ width: "100%", justifyContent: "center" }}>
                Discuss your project <Arrow />
              </Link>
            </aside>
          </div>
        </div>
      </section>

      {siblings.length > 0 && (
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="section__head">
              <div>
                <span className="eyebrow">Related</span>
                <h2>More in {svc.category.title}.</h2>
              </div>
            </div>
            <div className="related-grid">
              {siblings.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="related-card">
                  <span className="related-card__title">{s.title}</span>
                  <span className="related-card__blurb">{s.blurb}</span>
                  <span className="related-card__go">Explore →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
