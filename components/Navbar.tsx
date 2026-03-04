"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { routes } from "../constants/routes";

/** Base path when app is under a subpath (e.g. /juliowebsite). Used for anchor and logo links. */
function useBasePath() {
  const pathname = usePathname();
  const [basePath, setBasePath] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const envBase = process.env.NEXT_PUBLIC_BASE_PATH || "";
    if (envBase) {
      setBasePath(envBase.replace(/\/$/, ""));
      return;
    }
    const full = window.location.pathname || "";
    const base = pathname === "/" ? full.replace(/\/$/, "") : full.slice(0, -pathname.length).replace(/\/$/, "");
    setBasePath(base || "");
  }, [pathname]);

  return basePath;
}

/** Logo path that works on all pages, including with basePath (e.g. GitHub Pages /repo-name/). */
function useLogoSrc() {
  const pathname = usePathname();
  const [logoSrc, setLogoSrc] = useState(() => {
    const segs = pathname.split("/").filter(Boolean);
    return segs.length === 0 ? "Logo4.png" : `${segs.map(() => "..").join("/")}/Logo4.png`;
  });

  useEffect(() => {
    const path = typeof window !== "undefined" ? window.location.pathname : pathname;
    const segs = path.split("/").filter(Boolean);
    setLogoSrc(segs.length === 0 ? "Logo4.png" : `${segs.map(() => "..").join("/")}/Logo4.png`);
  }, [pathname]);

  return logoSrc;
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const basePath = useBasePath();
  const logoSrc = useLogoSrc();

  const isPortfolio = pathname.startsWith(routes.portefolio);
  const isHome = pathname === "/";

  const baseNavLinkClasses =
    "relative text-[var(--jet-black-800)] text-2xl font-medium pb-1 transition-colors hover:text-[var(--jet-black-400)] after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:bg-[var(--jet-black-800)] after:transition-all after:duration-300 after:w-0 hover:after:w-full";

  const homePath = basePath ? `${basePath}/` : "/";
  const servicesHref = isHome ? "#services" : `${homePath}#services`;
  const aboutHref = isHome ? "#about" : `${homePath}#about`;
  const contactHref = isHome ? "#contact" : `${homePath}#contact`;

  return (
    <header className="w-full shadow-none relative">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4">
        {/* Logo on the left */}
        <div className="py-4">
          <Link href="/" className="block w-[100px]">
            <img src={logoSrc} alt="My Logo" className="h-auto w-full" width={100} height={80} />
          </Link>
        </div>

        {/* Links + hamburger on the right */}
        <div className="flex items-center gap-4">
          {/* Desktop links (hidden on mobile) */}
          <div className="hidden lg:flex gap-4 items-center text-right">
            <a href={servicesHref} className={baseNavLinkClasses}>
              Serviços
            </a>
            <a href={aboutHref} className={baseNavLinkClasses}>
              Sobre
            </a>
            <a href={contactHref} className={baseNavLinkClasses}>
              Contactos
            </a>
            <Link
              href={routes.portefolio}
              className={`rounded-full px-4 py-2 text-xl font-medium text-white bg-[var(--jet-black-800)] hover:bg-[var(--jet-black-600)] transition-colors shadow-sm ${
                isPortfolio ? "ring-2 ring-[var(--jet-black-800)] ring-offset-2 ring-offset-[var(--platinum-50)]" : ""
              }`}
            >
              Portefólio
            </Link>
          </div>

          {/* Hamburger button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="lg:hidden p-2 rounded-full text-[var(--jet-black-800)] focus:outline-none hover:bg-[var(--platinum-200)] transition-colors"
          >
            {menuOpen ? (
              <svg
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[var(--platinum-50)] dark:bg-[var(--platinum-100)] shadow-sm z-50">
          <div className="flex flex-col items-center py-4 gap-3">
            <a
              onClick={() => setMenuOpen(false)}
              href={servicesHref}
              className="text-xl font-medium text-[var(--jet-black-800)] hover:text-[var(--jet-black-600)] transition-colors"
            >
              Serviços
            </a>
            <a
              onClick={() => setMenuOpen(false)}
              href={aboutHref}
              className="text-xl font-medium text-[var(--jet-black-800)] hover:text-[var(--jet-black-600)] transition-colors"
            >
              Sobre
            </a>
            <a
              onClick={() => setMenuOpen(false)}
              href={contactHref}
              className="text-xl font-medium text-[var(--jet-black-800)] hover:text-[var(--jet-black-600)] transition-colors"
            >
              Contacto
            </a>
            <Link
              onClick={() => setMenuOpen(false)}
              href={routes.portefolio}
              className="text-xl font-medium text-white bg-[var(--jet-black-800)] hover:bg-[var(--jet-black-600)] rounded-full px-5 py-2.5 transition-colors w-full text-center"
            >
              Portefólio
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

