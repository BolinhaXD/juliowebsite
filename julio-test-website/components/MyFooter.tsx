"use client"
import Link from "next/link";
import Image from "next/image";

export default () =>{
    return (
        <footer className="w-full bg-[var(--jet-black-900)] text-white mt-auto">
        <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/">
              <Image src="/logo4.png" alt="logo" width={160} height={60} />
            </Link>
            <p className="text-sm text-zinc-300">Construímos confiança.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li><a href="/#about" className="hover:text-white">Sobre nós</a></li>
              <li><a href="/#services" className="hover:text-white">Serviços</a></li>
              <li><a href="/#contact" className="hover:text-white">Contactos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li><a href="/portefolio" className="hover:text-white">Portefólio</a></li>
              <li><a href="#" className="hover:text-white">Preçário</a></li>
              <li><a href="#" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800">
          <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-zinc-400">&copy; {new Date().getFullYear()} Julio Remodelações. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-zinc-300 hover:text-white">Twitter</a>
              <a href="#" className="text-zinc-300 hover:text-white">LinkedIn</a>
              <a href="#" className="text-zinc-300 hover:text-white">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    )
}
