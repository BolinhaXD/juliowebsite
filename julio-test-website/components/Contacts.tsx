"use client"



export default () =>{
    return (
        <section id="contact" className="text-[var(--jet-black-800)] bg-[var(--jet-black-300)] dark:bg-[var(--jet-black-300)]">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-4xl font-bold mb-6">Contactos</h2>
          <p className="text-lg leading-relaxed mb-12">
            Tem um projeto em mente? Gostaria de receber um orçamento ou tirar dúvidas sobre os nossos serviços? Entre em contacto connosco. A nossa equipa está pronta para o ajudar a transformar o seu espaço.
          </p>
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="p-8 bg-white dark:bg-zinc-800 rounded-lg shadow text-[var(--jet-black-400)]">
              <h3 className="text-2xl font-semibold mb-4 text-[var(--platinum-50)]">Informações de Contacto</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="font-semibold min-w-[100px]">Telefone:</span>
                  <a href="tel:+351910000000" className="hover:text-[var(--platinum-50)]">+351 910 000 000</a>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold min-w-[100px]">Email:</span>
                  <a href="mailto:info@julioremodelacoes.pt" className="hover:text-[var(--platinum-50)]">info@julioremodelacoes.pt</a>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold min-w-[100px]">Localização:</span>
                  <span className="hover:text-[var(--platinum-50)]">Portugal</span>
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
    )
}
