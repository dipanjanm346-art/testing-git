import type { Metadata } from "next";
import { brand } from "@/lib/content";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: `Start a project with ${brand.name}. Tell us where the leverage is and we'll design the system.`,
};

export default function ContactPage() {
  return (
    <>
      <section className="pagehead">
        <div className="hero__glow" />
        <div className="container">
          <span className="eyebrow">Contact</span>
          <h1>Let&apos;s build something that compounds.</h1>
          <p className="lede" style={{ marginTop: 26 }}>
            Tell us about the goal and where you&apos;re stuck. We&apos;ll come
            back within one business day with a point of view.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div>
              <div className="contact-detail" style={{ borderTop: "none" }}>
                <div className="contact-detail__k">Email</div>
                <a
                  className="contact-detail__v"
                  href={`mailto:${brand.email}`}
                  style={{ color: "var(--accent)" }}
                >
                  {brand.email}
                </a>
              </div>
              <div className="contact-detail">
                <div className="contact-detail__k">Based in</div>
                <div className="contact-detail__v">{brand.location}</div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail__k">Response time</div>
                <div className="contact-detail__v">Within one business day</div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail__k">Good fit for</div>
                <div className="contact-detail__v">
                  Teams ready to treat growth as a system, not a series of
                  experiments.
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
