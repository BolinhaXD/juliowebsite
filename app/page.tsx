"use client"
import ImageSlider from "../components/ImageSlider";
import MyFooter from "../components/MyFooter";
import Contacts from "../components/Contacts";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans bg-[var(--platinum-50)] dark:bg-[var(--platinum-50)] text-zinc-900 dark:text-zinc-50">

      <Navbar />

      {/* Full viewport width so background runs edge to edge */}
      <section className="w-screen max-w-none relative left-1/2 -translate-x-1/2 bg-[var(--platinum-100)]">
        <div className="flex flex-col items-center justify-center text-center sm:text-left">
          <ImageSlider />
        </div>
      </section>

      {/* Serviços – alinhado ao estilo Sobre (barras de cor, hierarquia) */}
      <main id="services" className="flex flex-col flex-1 py-12 md:py-16 px-6 max-w-6xl mx-auto text-[var(--jet-black-900)]">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          Como te Podemos Ajudar?
        </h1>
        <p className="max-w-4xl text-lg text-zinc-700 mb-10">
          Criamos soluções à medida para renovar e valorizar o seu espaço, combinando design, funcionalidade e uma execução rigorosa do início ao fim.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Remodelações Completas", text: "Renovação total de apartamentos e moradias, do projeto à entrega final.", color: "bg-[var(--deep-crimson-500)]" },
            { title: "Cozinhas", text: "Design funcional, montagem e acabamentos à medida.", color: "bg-[var(--jet-black-600)]" },
            { title: "Casas de Banho", text: "Soluções modernas, resistentes e fáceis de manter.", color: "bg-[var(--amber-earth-500)]" },
            { title: "Pinturas e Acabamentos", text: "Interiores e exteriores com materiais de qualidade.", color: "bg-[var(--deep-crimson-500)]" },
            { title: "Pladur e Tetos Falsos", text: "Divisões, isolamento e iluminação integrada.", color: "bg-[var(--jet-black-600)]" },
            { title: "Eletricidade e Canalização", text: "Instalações seguras e certificadas.", color: "bg-[var(--amber-earth-500)]" },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 p-6 bg-white dark:bg-zinc-800 rounded-lg shadow border border-zinc-200 dark:border-zinc-700 hover:border-[var(--platinum-400)] transition-colors">
              <div className={`mt-1 h-12 w-[6px] shrink-0 rounded-full ${item.color}`} />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-[var(--jet-black-900)] dark:text-zinc-100">
                  {item.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
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
