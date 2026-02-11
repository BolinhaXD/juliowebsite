"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isPortfolio = pathname.startsWith("/portefolio");
  const isHome = pathname === "/";

  const baseNavLinkClasses =
    "relative text-[var(--jet-black-800)] text-2xl font-medium pb-1 transition-colors hover:text-[var(--jet-black-400)] after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:bg-[var(--jet-black-800)] after:transition-all after:duration-300 after:w-0 hover:after:w-full";

  const servicesHref = isHome ? "#services" : "/#services";
  const aboutHref = isHome ? "#about" : "/#about";
  const contactHref = isHome ? "#contact" : "/#contact";

  return (
    <header className="w-full shadow-none relative">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4">
        {/* Logo on the left */}
        <div className="py-4">
          <Link href="/">
            <Image src="/logo4.png" alt="My Logo" width={100} height={80} />
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
            <a
              href="/portefolio"
              className={`${baseNavLinkClasses} ${
                isPortfolio ? "after:w-full" : ""
              }`}
            >
              Portefólio
            </a>
          </div>

          {/* Hamburger button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="lg:hidden p-2 rounded-full text-[var(--deep-crimson-500)] focus:outline-none hover:bg-[var(--deep-crimson-500)] hover:text-white hover:border-[var(--deep-crimson-500)] transition-colors"
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
              className="text-xl font-medium text-[var(--jet-black-800)] hover:text-[var(--deep-crimson-500)] transition-colors"
            >
              Serviços
            </a>
            <a
              onClick={() => setMenuOpen(false)}
              href={aboutHref}
              className="text-xl font-medium text-[var(--jet-black-800)] hover:text-[var(--deep-crimson-500)] transition-colors"
            >
              Sobre
            </a>
            <a
              onClick={() => setMenuOpen(false)}
              href={contactHref}
              className="text-xl font-medium text-[var(--jet-black-800)] hover:text-[var(--deep-crimson-500)] transition-colors"
            >
              Contacto
            </a>
            <a
              onClick={() => setMenuOpen(false)}
              href="/portefolio"
              className="text-xl font-medium text-[var(--jet-black-800)] hover:text-[var(--deep-crimson-500)] transition-colors"
            >
              Portefólio
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

