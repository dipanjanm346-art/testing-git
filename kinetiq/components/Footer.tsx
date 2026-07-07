import Link from "next/link";
import { brand, nav, services } from "@/lib/content";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__col" style={{ maxWidth: 360 }}>
            <Link href="/" className="logo">
              <span className="logo__mark" />
              <span className="logo__word">{brand.name}</span>
            </Link>
            <p className="footer__meta">{brand.description}</p>
          </div>

          <div className="footer__col">
            <h4>Navigate</h4>
            {nav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>

          <div className="footer__col">
            <h4>Capabilities</h4>
            {services.slice(0, 5).map((s) => (
              <Link key={s.index} href="/services">
                {s.title}
              </Link>
            ))}
          </div>

          <div className="footer__col">
            <h4>Contact</h4>
            <a href={`mailto:${brand.email}`}>{brand.email}</a>
            <span
              style={{
                display: "block",
                color: "var(--muted)",
                fontSize: 15,
                padding: "5px 0",
              }}
            >
              {brand.location}
            </span>
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </span>
          <span>Intelligent systems, engineered.</span>
        </div>
      </div>
    </footer>
  );
}
