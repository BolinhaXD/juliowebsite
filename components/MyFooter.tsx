"use client";
import Link from "next/link";
import { routes } from "../constants/routes";

export default function MyFooter() {
  return (
    <footer className="w-full bg-[var(--jet-black-900)] text-white mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-8 md:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {/* Logo e tagline */}
          <div className="sm:col-span-1">
            <Link href="/" className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded">
              <img src="Logo4.png" alt="Julio Remodelações" width={128} height={48} className="h-auto w-32" />
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
                <Link href="/#about" className="text-zinc-300 hover:text-white transition-colors text-xs sm:text-sm">
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-zinc-300 hover:text-white transition-colors text-xs sm:text-sm">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-zinc-300 hover:text-white transition-colors text-xs sm:text-sm">
                  Contactos
                </Link>
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
