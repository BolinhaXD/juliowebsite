"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { routes } from "../constants/routes";

/** Base path when app is under a subpath (e.g. /juliowebsite). */
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

/** Logo path: only use ../ on project pages (portefolio/1, portefolio/2); on / and /portefolio use Logo4.png. */
function useLogoSrc() {
  const pathname = usePathname();
  const segs = pathname.split("/").filter(Boolean);
  return segs.length >= 2 ? `${segs.map(() => "..").join("/")}/Logo4.png` : "Logo4.png";
}

export default function MyFooter() {
  const basePath = useBasePath();
  const logoSrc = useLogoSrc();
  const homePath = basePath ? `${basePath}/` : "/";

  return (
    <footer className="w-full bg-[var(--jet-black-900)] text-white mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-8 md:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {/* Logo e tagline */}
          <div className="sm:col-span-1">
            <Link href="/" className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded">
              <img src={logoSrc} alt="Julio Remodelações" width={128} height={48} className="h-auto w-32" />
            </Link>
            <p className="text-zinc-400 text-xs mt-2 max-w-[180px]">
              Construímos confiança.
            </p>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500 mb-2">Empresa</h4>
            <ul className="space-y-2">
              <li>
                <a href={`${homePath}#about`} className="text-zinc-300 hover:text-white transition-colors text-xs sm:text-sm">
                  Sobre nós
                </a>
              </li>
              <li>
                <a href={`${homePath}#services`} className="text-zinc-300 hover:text-white transition-colors text-xs sm:text-sm">
                  Serviços
                </a>
              </li>
              <li>
                <a href={`${homePath}#contact`} className="text-zinc-300 hover:text-white transition-colors text-xs sm:text-sm">
                  Contactos
                </a>
              </li>
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500 mb-2">Recursos</h4>
            <ul className="space-y-2">
              <li>
                <Link href={routes.portefolio} className="text-zinc-300 hover:text-white transition-colors text-xs sm:text-sm">
                  Portefólio
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-3.5">
          <p className="text-xs text-zinc-500 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Julio Remodelações. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
