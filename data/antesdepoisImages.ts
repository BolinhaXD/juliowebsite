export type AntesDepoisImage = {
  id: number
  imgAntesSrc: string
  imgDepoisSrc: string
  title: string
  subtitle: string
  location: string
  duration: string
  category: string
  categoryLabel: string
  description: string
  images: string[]
}

export const antesDepoisImages: AntesDepoisImage[] = [
  {
    id: 1,
    title: "Projeto Casa de Banho",
    subtitle: "Renovação de Casa de Banho – Lisboa",
    location: "Lisboa",
    duration: "3 semanas",
    imgAntesSrc: "fotos-db/antes-sala.jpg",
    imgDepoisSrc: "fotos-db/depois-sala.jpg",
    category: "casa-de-banho",
    categoryLabel: "Casa de Banho",
    description:
      "Remodelação completa de casa de banho com substituição de revestimentos, louças sanitárias, torneiras e iluminação, criando um espaço moderno e funcional.",
    images: ["fotos-db/antes-sala.jpg", "fotos-db/depois-sala.jpg", "fotos-db/antes-banho.jpg", "fotos-db/depois-banho.jpg", "fotos-db/antes-kitchen.jpg", "fotos-db/depois-kitchen.jpg"]
  },
  {
    id: 2,
    title: "Projeto Sala",
    subtitle: "Atualização de Sala de Estar – Amadora",
    location: "Amadora",
    duration: "2 semanas",
    imgAntesSrc: "fotos-db/antes-banho.jpg",
    imgDepoisSrc: "fotos-db/depois-banho.jpg",
    category: "sala",
    categoryLabel: "Sala",
    description:
      "Melhoria de sala de estar com novas pinturas, pavimento e pontos de luz, para criar um ambiente mais acolhedor e confortável.",
    images: ["fotos-db/antes-sala.jpg", "fotos-db/depois-sala.jpg", "fotos-db/antes-banho.jpg", "fotos-db/depois-banho.jpg", "fotos-db/antes-kitchen.jpg", "fotos-db/depois-kitchen.jpg"]
  },
  {
    id: 3,
    title: "Projeto Quarto",
    subtitle: "Renovação de Quarto – Odivelas",
    location: "Odivelas",
    duration: "1 semana",
    imgAntesSrc: "fotos-db/antes-kitchen.jpg",
    imgDepoisSrc: "fotos-db/depois-kitchen.jpg",
    category: "quarto",
    categoryLabel: "Quarto",
    description:
      "Atualização completa de quarto com novas cores, pavimento e iluminação, criando um espaço relaxante e funcional.",
    images: ["fotos-db/antes-sala.jpg", "fotos-db/depois-sala.jpg", "fotos-db/antes-banho.jpg", "fotos-db/depois-banho.jpg", "fotos-db/antes-kitchen.jpg", "fotos-db/depois-kitchen.jpg"]
  },
  {
    id: 4,
    title: "Projeto Cozinha",
    subtitle: "Remodelação de Cozinha – Lisboa",
    location: "Lisboa",
    duration: "4 semanas",
    imgAntesSrc: "fotos-db/antes-quarto.jpg",
    imgDepoisSrc: "fotos-db/depois-quarto.jpg",
    category: "cozinha",
    categoryLabel: "Cozinha",
    description:
      "Reconfiguração de cozinha com novos móveis, bancada, eletrodomésticos e iluminação, otimizando o espaço para o dia a dia.",
    images: ["fotos-db/antes-sala.jpg", "fotos-db/depois-sala.jpg", "fotos-db/antes-banho.jpg", "fotos-db/depois-banho.jpg", "fotos-db/antes-kitchen.jpg", "fotos-db/depois-kitchen.jpg"]
  },
  {
    id: 5,
    title: "Projeto Exterior",
    subtitle: "Melhoria de Espaço Exterior – Sintra",
    location: "Sintra",
    duration: "2 semanas",
    imgAntesSrc: "fotos-db/antes-exterior.jpg",
    imgDepoisSrc: "fotos-db/depois-exterior.jpg",
    category: "exterior",
    categoryLabel: "Exterior",
    description:
      "Intervenção em terraço com novos revestimentos, pintura e zona de estar, criando um espaço exterior mais acolhedor.",
    images: ["fotos-db/antes-sala.jpg", "fotos-db/depois-sala.jpg", "fotos-db/antes-banho.jpg", "fotos-db/depois-banho.jpg", "fotos-db/antes-kitchen.jpg", "fotos-db/depois-kitchen.jpg"]
  },
]

