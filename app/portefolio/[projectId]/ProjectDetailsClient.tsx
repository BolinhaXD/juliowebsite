"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { antesDepoisImages } from "../../../data/antesdepoisImages";

type Props = { projectId: string };

/** Prefix so image paths resolve to site root from this page (e.g. /portefolio/1 -> "../../"). */
function useRootPrefix() {
  const pathname = usePathname();
  const [prefix, setPrefix] = useState(() => {
    const segs = pathname.split("/").filter(Boolean);
    return segs.length === 0 ? "" : `${segs.map(() => "..").join("/")}/`;
  });
  useEffect(() => {
    const path = typeof window !== "undefined" ? window.location.pathname : pathname;
    const segs = path.split("/").filter(Boolean);
    setPrefix(segs.length === 0 ? "" : `${segs.map(() => "..").join("/")}/`);
  }, [pathname]);
  return prefix;
}

export default function ProjectDetailsClient({ projectId }: Props) {
  const project = antesDepoisImages.find((p) => String(p.id) === projectId);
  const rootPrefix = useRootPrefix();
  const getSrc = (path: string) => `${rootPrefix}${path.replace(/^\/+/, "")}`;

  if (!project) {
    return (
      <div className="max-w-6xl mx-auto py-60 px-6 text-center">
        <h1 className="text-[var(--jet-black-800)] text-3xl md:text-5xl font-bold mb-4">
          Erro 404
        </h1>
        <p className="text-zinc-600">Página não encontrada.</p>
      </div>
    );
  }

  const hasGallery = project.images && project.images.length > 0;

  return (
    <>
      <section className="bg-[var(--platinum-100)] dark:bg-[var(--platinum-100)] text-zinc-900">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <span className="inline-flex items-center rounded-full bg-[var(--platinum-300)] px-3 py-1 text-xs font-medium text-[var(--jet-black-800)] whitespace-nowrap">
            {project.categoryLabel}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-1 text-[var(--jet-black-900)]">
            {project.title}
          </h1>
          <p className="text-base md:text-lg text-zinc-700 mb-4">
            {project.subtitle}
          </p>
          <div className="text-sm text-zinc-600 flex flex-wrap gap-x-4 gap-y-1">
            <span>📍 {project.location}</span>
            <span>⏱ {project.duration}</span>
          </div>
        </div>
      </section>

      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10 bg-[var(--platinum-50)] dark:bg-[var(--platinum-50)]">
        {hasGallery ? (
          <div className="w-full min-w-0 bg-[var(--platinum-100)] dark:bg-[var(--platinum-100)] rounded-lg shadow border border-zinc-200 overflow-hidden">
            <Swiper
              modules={[Pagination, Autoplay]}
              grabCursor
              slidesPerView={1}
              spaceBetween={0}
              speed={600}
              autoplay={{ delay: 4500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              className="!w-full"
              style={{ width: "100%", maxWidth: "100%" }}
            >
              {project.images.map((src, index) => (
                <SwiperSlide key={index} className="!w-full min-w-0">
                  <div className="relative w-full aspect-[4/3] min-h-[200px] sm:min-h-[280px] md:min-h-[360px] lg:min-h-[400px] bg-zinc-100">
                    <Image
                      src={getSrc(src)}
                      alt={`${project.title} – imagem ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1024px"
                      priority={index === 0}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[var(--platinum-100)] dark:bg-[var(--platinum-100)] rounded-lg shadow border border-zinc-200 overflow-hidden">
              <div className="relative w-full aspect-[4/3] min-h-[240px] bg-zinc-100">
                <Image
                  src={getSrc(project.imgAntesSrc)}
                  alt={`${project.title} – antes`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <p className="py-3 px-4 font-semibold text-[var(--jet-black-800)] border-t border-zinc-200">
                Antes
              </p>
            </div>
            <div className="bg-white dark:bg-[var(--platinum-100)] rounded-lg shadow border border-zinc-200 overflow-hidden">
              <div className="relative w-full aspect-[4/3] min-h-[240px] bg-zinc-100">
                <Image
                  src={getSrc(project.imgDepoisSrc)}
                  alt={`${project.title} – depois`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <p className="py-3 px-4 font-semibold text-[var(--jet-black-800)] border-t border-zinc-200">
                Depois
              </p>
            </div>
          </div>
        )}
      </section>

      <section className="bg-[var(--platinum-100)] dark:bg-[var(--platinum-100)]">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold mb-6 text-[var(--jet-black-900)]">
            Sobre este projeto
          </h2>
          <div className="flex gap-4">
            <div className="mt-2 h-10 w-[6px] shrink-0 rounded-full bg-[var(--deep-crimson-500)]" />
            <p className="text-zinc-700 dark:text-zinc-400 text-base md:text-lg leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
