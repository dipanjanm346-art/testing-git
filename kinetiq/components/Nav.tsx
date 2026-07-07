"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { brand, nav, serviceCategories } from "@/lib/content";
import { Icon } from "@/components/Icon";

export function Nav() {
  const pathname = usePathname();
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close menus on route change.
  useEffect(() => {
    setMegaOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="nav">
      <div className="container nav__inner">
        <Link href="/" className="logo" aria-label={`${brand.name} home`}>
          <span className="logo__mark" />
          <span className="logo__word">{brand.name}</span>
        </Link>

        {/* Desktop nav */}
        <nav className="nav__links" aria-label="Primary">
          {nav.map((item) =>
            item.label === "Services" ? (
              <div
                key={item.href}
                className="nav__mega"
                onMouseEnter={() => setMegaOpen(true)}
                onMouseLeave={() => setMegaOpen(false)}
              >
                <Link
                  href={item.href}
                  className="nav__link"
                  data-active={pathname.startsWith("/services")}
                  aria-expanded={megaOpen}
                >
                  {item.label} <span className="nav__caret">▾</span>
                </Link>

                {megaOpen && (
                  <div className="mega" role="menu">
                    <div className="mega__grid">
                      {serviceCategories.map((cat) => (
                        <div className="mega__col" key={cat.slug}>
                          <div className="mega__head">
                            <span className="mega__icon">
                              <Icon name={cat.icon} size={16} />
                            </span>
                            <span className="mega__cat">{cat.title}</span>
                          </div>
                          <ul>
                            {cat.subServices.map((s) => (
                              <li key={s.slug}>
                                <Link href={`/services/${s.slug}`}>
                                  {s.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="mega__foot">
                      <Link href="/services">View all services →</Link>
                      <Link href="/contact" className="mega__cta">
                        Start a project →
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="nav__link"
                data-active={pathname === item.href}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Mobile toggle */}
        <button
          className="nav__burger"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span data-open={mobileOpen} />
        </button>
      </div>

      {/* Mobile panel */}
      {mobileOpen && (
        <div className="mobile-menu">
          <div className="container">
            {nav
              .filter((i) => i.label !== "Services")
              .map((item) => (
                <Link key={item.href} href={item.href} className="mobile-menu__link">
                  {item.label}
                </Link>
              ))}
            <div className="mobile-menu__services">
              <Link href="/services" className="mobile-menu__link">
                Services
              </Link>
              {serviceCategories.map((cat) => (
                <details key={cat.slug} className="mobile-menu__cat">
                  <summary>{cat.title}</summary>
                  <ul>
                    {cat.subServices.map((s) => (
                      <li key={s.slug}>
                        <Link href={`/services/${s.slug}`}>{s.title}</Link>
                      </li>
                    ))}
                  </ul>
                </details>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
