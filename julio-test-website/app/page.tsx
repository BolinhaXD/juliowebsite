"use client"
import ImageSlider from "../components/ImageSlider";
import MyFooter from "../components/MyFooter";
import Contacts from "../components/Contacts";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans bg-[var(--platinum-50)] dark:bg-[var(--platinum-50)] text-zinc-900 dark:text-zinc-50">

      <Navbar />

      <div className="flex flex-col items-center justify-center text-center sm:text-left">
        <ImageSlider />
      </div>

      {/* Hero Section */}
      <main id="services" className="flex flex-col items-center justify-center flex-1 p-16 text-center sm:text-left px-6 max-w-6xl mx-auto text-[var(--jet-black-900)]">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          Como te Podemos Ajudar?
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
      <section
        id="about"
        className="bg-[var(--platinum-100)] dark:bg-[var(--platinum-100)]"
      >
        <div className="max-w-6xl mx-auto px-6 py-16 text-[var(--jet-black-900)]">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-start">
            {/* Text + pillars */}
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Sobre a Julio Remodelações
              </h2>
              <p className="text-lg leading-relaxed mb-8">
                Com mais de uma década de experiência, a Julio Remodelações é
                especializada em transformar espaços. Desde apartamentos,
                moradias até projetos comerciais, entregamos qualidade,
                inovação e confiança em cada projeto. O nosso compromisso é
                fazer do seu sonho uma realidade, com
                profissionalismo e atenção aos detalhes.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-2 h-10 w-[6px] rounded-full bg-[var(--deep-crimson-500)]" />
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Qualidade</h3>
                    <p className="text-gray-700 dark:text-gray-700 text-sm sm:text-base">
                      Utilizamos materiais de primeira qualidade e equipas
                      especializadas para garantir acabamentos duráveis e
                      impecáveis em cada obra.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-2 h-10 w-[6px] rounded-full bg-[var(--jet-black-600)]" />
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Profissionalismo</h3>
                    <p className="text-gray-700 dark:text-gray-700 text-sm sm:text-base">
                      Planeamos cada fase do projeto com clareza, cumprindo
                      prazos e orçamentos, e mantendo uma comunicação
                      transparente do início ao fim.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-2 h-10 w-[6px] rounded-full bg-[var(--amber-earth-500)]" />
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Inovação</h3>
                    <p className="text-gray-700 dark:text-gray-700 text-sm sm:text-base">
                      Acompanhamos as tendências de design e soluções técnicas
                      atuais para criar espaços modernos, confortáveis e
                      funcionais.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Simple timeline / highlights */}
            <div className="lg:pl-8 border-t border-[var(--platinum-300)] lg:border-t-0 lg:border-l-4">
              <div className="pt-6 lg:pt-0 lg:pl-8 space-y-6">
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--jet-black-500)]">
                    Porquê trabalhar connosco
                  </p>
                  <p className="text-3xl font-semibold">
                    10+ anos a transformar casas
                  </p>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-gray-700">
                  <p>
                    Acompanhamos o cliente em todas as etapas: desde a primeira
                    visita ao espaço até à entrega final, garantindo uma
                    experiência simples e sem surpresas.
                  </p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Levantamento no local e aconselhamento personalizado</li>
                    <li>Orçamento detalhado e sem compromisso</li>
                    <li>Equipa própria de profissionais qualificados</li>
                    <li>Obras acompanhadas e monitorizadas do início ao fim</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contacts />

      {/* Large Footer */}
      <MyFooter />
    </div>
  );
}
