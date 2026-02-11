"use client"
import { useState } from "react";
import Image from "next/image";
import MyFooter from "../../components/MyFooter";
import Contacts from "../../components/Contacts";
import Navbar from "../../components/Navbar";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [visibleCount, setVisibleCount] = useState<number>(4);

  const filters = [
    { id: "all", label: "Todos" },
    { id: "casa-de-banho", label: "Casa de Banho" },
    { id: "cozinha", label: "Cozinha" },
    { id: "sala", label: "Sala" },
    { id: "quarto", label: "Quarto" },
    { id: "exterior", label: "Exterior" },
    { id: "outros", label: "Outros" },
  ];

  const projects = [
    {
      id: 1,
      title: "Projeto Casa de Banho",
      subtitle: "Renovação de Casa de Banho – Lisboa",
      location: "Lisboa",
      duration: "3 semanas",
      before: "/remodelacoes-fotos/projeto1-antes.jpg",
      after: "/remodelacoes-fotos/projeto1-depois.jpg",
      category: "casa-de-banho",
      categoryLabel: "Casa de Banho",
      description:
        "Remodelação completa de casa de banho com substituição de revestimentos, louças sanitárias, torneiras e iluminação, criando um espaço moderno e funcional.",
    },
    {
      id: 2,
      title: "Projeto Sala",
      subtitle: "Atualização de Sala de Estar – Amadora",
      location: "Amadora",
      duration: "2 semanas",
      before: "/remodelacoes-fotos/projeto1-antes.jpg",
      after: "/remodelacoes-fotos/projeto1-depois.jpg",
      category: "sala",
      categoryLabel: "Sala",
      description:
        "Melhoria de sala de estar com novas pinturas, pavimento e pontos de luz, para criar um ambiente mais acolhedor e confortável.",
    },
    {
      id: 3,
      title: "Projeto Quarto",
      subtitle: "Renovação de Quarto – Odivelas",
      location: "Odivelas",
      duration: "1 semana",
      before: "/remodelacoes-fotos/projeto1-antes.jpg",
      after: "/remodelacoes-fotos/projeto1-depois.jpg",
      category: "quarto",
      categoryLabel: "Quarto",
      description:
        "Atualização completa de quarto com novas cores, pavimento e iluminação, criando um espaço relaxante e funcional.",
    },
    {
      id: 4,
      title: "Projeto Cozinha",
      subtitle: "Remodelação de Cozinha – Lisboa",
      location: "Lisboa",
      duration: "4 semanas",
      before: "/remodelacoes-fotos/projeto1-antes.jpg",
      after: "/remodelacoes-fotos/projeto1-depois.jpg",
      category: "cozinha",
      categoryLabel: "Cozinha",
      description:
        "Reconfiguração de cozinha com novos móveis, bancada, eletrodomésticos e iluminação, otimizando o espaço para o dia a dia.",
    },
    {
      id: 5,
      title: "Projeto Exterior",
      subtitle: "Melhoria de Espaço Exterior – Sintra",
      location: "Sintra",
      duration: "2 semanas",
      before: "/remodelacoes-fotos/projeto1-antes.jpg",
      after: "/remodelacoes-fotos/projeto1-depois.jpg",
      category: "exterior",
      categoryLabel: "Exterior",
      description:
        "Intervenção em terraço com novos revestimentos, pintura e zona de estar, criando um espaço exterior mais acolhedor.",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const projectsToShow = filteredProjects.slice(0, visibleCount);
  const canShowMore = filteredProjects.length > visibleCount;
  return (
    <div className="flex min-h-screen flex-col font-sans bg-[var(--platinum-50)] dark:bg-[var(--platinum-50)] text-zinc-900 dark:text-zinc-50">

      <Navbar />

      {/* Projects: Antes / Depois */}
      <section
        id="projects"
        className="bg-[var(--platinum-100)] dark:bg-[var(--platinum-100)] text-zinc-900"
      >
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Os Nossos Trabalhos
          </h2>
          <p className="text-sm md:text-base text-zinc-700 mb-6 max-w-2xl">
            Explore alguns dos nossos projetos recentes. Utilize os filtros para
            ver apenas os espaços que mais lhe interessam.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-8">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => {
                  setActiveFilter(filter.id);
                  setVisibleCount(4);
                }}
                className={`px-3 py-1 rounded-full border text-sm transition-colors ${
                  activeFilter === filter.id
                    ? "bg-[var(--jet-black-800)] text-white border-[var(--jet-black-800)]"
                    : "bg-white text-[var(--jet-black-800)] border-zinc-300 hover:bg-zinc-100"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {filteredProjects.length === 0 && (
              <p className="text-sm text-zinc-600 md:col-span-2">
                Nenhum projeto disponível para este filtro neste momento.
              </p>
            )}

            {filteredProjects.length > 0 &&
              projectsToShow.map((p) => (
                <div
                  key={p.id}
                  className="bg-white dark:bg-[var(--platinum-50)] rounded-lg p-4 md:p-5 shadow border border-zinc-200 flex flex-col gap-3"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{p.title}</h3>
                      <p className="text-sm md:text-base mb-1">{p.subtitle}</p>
                    </div>
                    <span className="inline-flex items-center rounded-full bg-[var(--platinum-200)] px-3 py-1 text-xs font-medium text-[var(--jet-black-800)] whitespace-nowrap">
                      {p.categoryLabel}
                    </span>
                  </div>

                  <div className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-600 mb-1 flex flex-wrap gap-x-4 gap-y-1">
                    <span>📍 Local: {p.location}</span>
                    <span>⏱ Duração: {p.duration}</span>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3 mb-2">
                    <div>
                      <p className="mb-2 font-semibold">ANTES</p>
                      <div className="relative w-full h-40 sm:h-52 lg:h-60 overflow-hidden rounded">
                        <Image
                          src={p.before}
                          alt={`${p.title} antes`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="mb-2 font-semibold">DEPOIS</p>
                      <div className="relative w-full h-40 sm:h-52 lg:h-60 overflow-hidden rounded">
                        <Image
                          src={p.after}
                          alt={`${p.title} depois`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                    {p.description}
                  </p>
                </div>
              ))}
          </div>
          {canShowMore && (
            <div className="mt-4 flex justify-center">
              <button
                onClick={() => setVisibleCount((prev) => prev + 4)}
                className="px-4 py-2 rounded-full border border-[var(--jet-black-800)] text-sm font-medium text-[var(--jet-black-800)] bg-white hover:bg-zinc-100 transition-colors"
              >
                Ver mais projetos
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <Contacts />

      {/* Large Footer */}
      <MyFooter />
    </div>
  );
}
