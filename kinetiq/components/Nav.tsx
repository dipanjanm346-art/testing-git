"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { brand, nav } from "@/lib/content";

export function Nav() {
  const pathname = usePathname();
  return (
    <header className="nav">
      <div className="container nav__inner">
        <Link href="/" className="logo" aria-label={`${brand.name} home`}>
          <span className="logo__mark" />
          <span className="logo__word">{brand.name}</span>
        </Link>
        <nav className="nav__links">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav__link"
              data-active={pathname === item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
