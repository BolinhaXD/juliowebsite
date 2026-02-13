"use client"

export default function Contacts() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="text-[var(--jet-black-800)] bg-[var(--jet-black-300)] dark:bg-[var(--jet-black-300)]"
    >
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 id="contact-heading" className="text-4xl font-bold mb-4">
          Contactos
        </h2>
        <p className="text-lg leading-relaxed mb-4 max-w-2xl">
          Tem um projeto em mente? Peça um orçamento sem compromisso ou tire dúvidas
          sobre os nossos serviços. A nossa equipa está pronta para o ajudar a
          transformar o seu espaço.
        </p>
        <p className="text-sm text-[var(--jet-black-600)] mb-8">
          Respondemos normalmente em menos de 24 horas em dias úteis.
        </p>

        <a
          href="mailto:info@julioremodelacoes.pt"
          className="inline-flex items-center px-6 py-3 mb-10 rounded-md bg-[var(--jet-black-800)] text-white text-base font-medium hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black focus-visible:ring-offset-[var(--jet-black-300)] transition"
        >
          Pedir orçamento por email
        </a>

        <div className="grid sm:grid-cols-2 gap-8">
          <div className="p-8 bg-white dark:bg-zinc-800 rounded-lg shadow-sm border border-zinc-200/60 dark:border-zinc-700/60">
            <h3 className="text-2xl font-semibold mb-4 text-[var(--jet-black-800)] dark:text-[var(--platinum-50)]">
              Informações de contacto
            </h3>
            <dl className="space-y-4 text-[var(--jet-black-700)] dark:text-zinc-200">
              <div className="flex gap-3">
                <dt className="font-semibold min-w-[110px]">Telefone</dt>
                <dd>
                  <a
                    href="tel:+351910000000"
                    className="font-semibold hover:text-[var(--platinum-50)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--platinum-50)] rounded-sm"
                  >
                    +351 910 000 000
                  </a>
                </dd>
              </div>
              <div className="flex gap-3">
                <dt className="font-semibold min-w-[110px]">Email</dt>
                <dd>
                  <a
                    href="mailto:info@julioremodelacoes.pt"
                    className="font-semibold hover:text-[var(--platinum-50)] break-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--platinum-50)] rounded-sm"
                  >
                    info@julioremodelacoes.pt
                  </a>
                </dd>
              </div>
              <div className="flex gap-3">
                <dt className="font-semibold min-w-[110px]">Localização</dt>
                <dd>Portugal</dd>
              </div>
            </dl>
          </div>

          <div className="p-8 bg-white dark:bg-zinc-800 rounded-lg shadow-sm border border-zinc-200/60 dark:border-zinc-700/60">
            <h3 className="text-2xl font-semibold mb-4 text-[var(--jet-black-800)] dark:text-[var(--platinum-50)]">
              Horários
            </h3>
            <ul className="space-y-3 text-[var(--jet-black-700)] dark:text-gray-300">
              <li>
                <span className="font-semibold">Segunda a Sexta:</span> 09:00 - 18:00
              </li>
              <li>
                <span className="font-semibold">Sábado:</span> 10:00 - 14:00
              </li>
              <li>
                <span className="font-semibold">Domingo:</span> Encerrado
              </li>
              <li className="pt-4 text-sm border-t border-gray-300 dark:border-zinc-700">
                Marque uma visita ao local da obra para discutir o seu projeto em
                detalhe e receber um orçamento adaptado às suas necessidades.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
