"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ImageSlider from "../components/ImageSlider"

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="flex min-h-screen flex-col font-sans bg-[var(--platinum-50)] dark:bg-[var(--platinum-50)] text-zinc-900 dark:text-zinc-50">
      
      {/* Navbar */}
      <header className="w-full shadow-none relative">
        <nav className="max-w-7xl mx-auto grid grid-cols-3 items-center px-4">
          <div>
            <Link href="/">
              <Image src="/logo2.png" alt="My Logo" width={180} height={80} />
            </Link>
          </div>

          {/* Desktop links (hidden on mobile) */}
          <div className="flex items-center justify-center">
            <div className="hidden md:flex gap-6 items-center text-center">
              <a href="#about" className="hover:text-[var(--jet-black-400)] text-[var(--jet-black-800)] text-3xl font-medium">Sobre</a>
              <a href="#services" className="hover:text-[var(--jet-black-400)] text-[var(--jet-black-800)] text-3xl font-medium">Serviços</a>
              <a href="#contact" className="hover:text-[var(--jet-black-400)] text-[var(--jet-black-800)] text-3xl font-medium">Contactos</a>
            </div>
          </div>

          {/* Hamburger button (visible on mobile) */}
          <div className="flex items-center justify-end">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="md:hidden p-2 rounded-md focus:outline-none text-[rgb(196,33,50)] hover:text-[rgb(0,168,232)]"
            >
               {menuOpen ? (
                 <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
               ) : (
                 <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
               )}
             </button>
           </div>
        </nav>
        
        {/* Mobile menu */}
        {menuOpen && (
          <div className="sm:hidden absolute top-full left-0 right-0 bg-[rgb(250,250,250)] dark:bg-[rgb(20,20,30)] border-t z-50">
            <div className="flex flex-col items-center py-4 gap-4">
              <a onClick={() => setMenuOpen(false)} href="#about" className="text-xl text-[rgb(196,33,50)] hover:text-[rgb(0,168,232)]">Sobre</a>
              <a onClick={() => setMenuOpen(false)} href="#services" className="text-xl text-[rgb(196,33,50)] hover:text-[rgb(0,168,232)]">Serviços</a>
              <a onClick={() => setMenuOpen(false)} href="#contact" className="text-xl text-[rgb(196,33,50)] hover:text-[rgb(0,168,232)]">Contacto</a>
            </div>
          </div>
        )}
      </header>

      <div className="flex flex-col items-center justify-center text-center sm:text-left px-6 ">
        <ImageSlider/>
      </div>
      
      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center flex-1 p-16 text-center sm:text-left px-6 max-w-6xl mx-auto text-[var(--jet-black-900)]">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          Como Podemos Ajudar?
        </h1>
        <p className="max-w-4xl text-lg mb-8">
          Criamos soluções à medida para renovar e valorizar o seu espaço, combinando design, funcionalidade e uma execução rigorosa do início ao fim.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 my-4 text-[var(--jet-black-100)]">
          <div className="p-6 bg-white dark:bg-zinc-800 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Remodelações Completas</h3>
            <p>Renovação total de apartamentos e moradias, do projeto à entrega final.</p>
          </div>
          <div className="p-6 bg-white dark:bg-zinc-800 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Cozinhas</h3>
            <p>Design funcional, montagem e acabamentos à medida.</p>
          </div>
          <div className="p-6 bg-white dark:bg-zinc-800 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Casas de Banho</h3>
            <p>Soluções modernas, resistentes e fáceis de manter.</p>
          </div>
          <div className="p-6 bg-white dark:bg-zinc-800 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Pinturas e Acabamentos</h3>
            <p>Interiores e exteriores com materiais de qualidade.</p>
          </div>
          <div className="p-6 bg-white dark:bg-zinc-800 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Pladur e Tetos Falsos</h3>
            <p>Divisões, isolamento e iluminação integrada.</p>
          </div>
          <div className="p-6 bg-white dark:bg-zinc-800 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Eletricidade e Canalização</h3>
            <p>Instalações seguras e certificadas.</p>
          </div>
        </div>
      </main>

      {/* Content Section */}
      <section id="about" className="bg-[var(--platinum-100)] dark:bg-[var(--platinum-100)]">
        <div className="max-w-6xl mx-auto px-6 py-16 text-[var(--jet-black-900)]">
          <h2 className="text-4xl font-bold mb-6">Sobre a Julio Remodelações</h2>
          <p className="text-lg leading-relaxed mb-12">
            Com mais de uma década de experiência, a Julio Remodelações é especializada em transformar espaços. Desde apartamentos, moradias até projetos comerciais, entregamos qualidade, inovação e confiança em cada projeto. O nosso compromisso é fazer do seu sonho de reforma uma realidade, com profissionalismo e atenção aos detalhes.
          </p>
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="p-8 bg-white dark:bg-zinc-800 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-3 text-[var(--platinum-50)]">Qualidade</h3>
              <p className="text-gray-700 dark:text-gray-300">Utilizamos materiais de primeira qualidade e técnicas comprovadas para garantir acabamentos duráveis e impeccáveis.</p>
            </div>
            <div className="p-8 bg-white dark:bg-zinc-800 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-3 text-[var(--platinum-50)]">Profissionalismo</h3>
              <p className="text-gray-700 dark:text-gray-300">A nossa equipe é certificada e experiente, respeitando prazos e orçamentos com total transparência.</p>
            </div>
            <div className="p-8 bg-white dark:bg-zinc-800 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold mb-3 text-[var(--platinum-50)]">Inovação</h3>
              <p className="text-gray-700 dark:text-gray-300">Acompanhamos as últimas tendências de design e tecnologia para oferecer soluções modernas e eficientes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="text-[var(--jet-black-800)] bg-[var(--jet-black-300)] dark:bg-[var(--jet-black-300)]">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-4xl font-bold mb-6">Contactos</h2>
          <p className="text-lg leading-relaxed mb-12">
            Tem um projeto em mente? Gostaria de receber um orçamento ou tirar dúvidas sobre os nossos serviços? Entre em contacto connosco. A nossa equipa está pronta para o ajudar a transformar o seu espaço.
          </p>
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="p-8 bg-white dark:bg-zinc-800 rounded-lg shadow">
              <h3 className="text-2xl font-semibold mb-4 text-[var(--platinum-50)]">Informações de Contacto</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="font-semibold min-w-[100px]">Telefone:</span>
                  <a href="tel:+351910000000" className="text-[var(--jet-black-600)] hover:text-[var(--platinum-50)]">+351 910 000 000</a>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold min-w-[100px]">Email:</span>
                  <a href="mailto:info@julioremodelacoes.pt" className="text-[var(--jet-black-600)] hover:text-[var(--platinum-50)]">info@julioremodelacoes.pt</a>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold min-w-[100px]">Localização:</span>
                  <span>Portugal</span>
                </li>
              </ul>
            </div>
            <div className="p-8 bg-white dark:bg-zinc-800 rounded-lg shadow">
              <h3 className="text-2xl font-semibold mb-4 text-[var(--platinum-50)]">Horários</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li><span className="font-semibold">Segunda a Sexta:</span> 09:00 - 18:00</li>
                <li><span className="font-semibold">Sábado:</span> 10:00 - 14:00</li>
                <li><span className="font-semibold">Domingo:</span> Encerrado</li>
                <li className="pt-4 text-sm border-t border-gray-300">
                  Marque uma visita ao seu escritório ou local da obra para discutir o seu projeto em detalhe.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Large Footer */}
      <footer className="w-full bg-[var(--jet-black-900)] text-white mt-auto">
        <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/">
              <Image src="/logo2.png" alt="logo" width={160} height={60} />
            </Link>
            <p className="text-sm text-zinc-300">Construímos confiança.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li><a href="#" className="hover:text-white">Gallery</a></li>
              <li><a href="#" className="hover:text-white">Pricing</a></li>
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
    </div>
  );
}
