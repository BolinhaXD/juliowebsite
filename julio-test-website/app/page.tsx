import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-50">
      
      {/* Navbar */}
      <header className="w-full bg-[rgb(255,255,255)] shadow-sm">
        <nav className="max-w-5xl mx-auto flex items-center justify-between py-6">
          {/* <div className="text-2xl font-bold">MySite</div> */}
          <Link href="/">
            <Image
              src="/logo2.png"
              alt="My Logo"
              width={220}
              height={100}
            />
          </Link>
          <div className="flex gap-6">
            <a href="/about" className="hover:text-[rgb(0,168,232)] text-[rgb(196,33,50)] text-4xl font-bold">Sobre</a>
            <a href="#services" className="hover:text-[rgb(0,168,232)] text-[rgb(196,33,50)] text-4xl font-bold">Serviços</a>
            <a href="#contact" className="hover:text-[rgb(0,168,232)] text-[rgb(196,33,50)] text-4xl font-bold">Contacto</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center flex-1 p-16 text-center sm:text-left px-6 max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          Welcome to My Informational Site
        </h1>
        <p className="max-w-xl text-lg mb-8">
          This is a clean template built with Next.js and Tailwind. Use it to share information about your business, project, or services.
        </p>
        <a
          href="#contact"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Get in Touch
        </a>
        <div className="grid sm:grid-cols-3 gap-8 my-4">
          <div className="p-6 bg-white dark:bg-zinc-800 rounded-lg shado  w">
            <h3 className="text-xl font-semibold mb-2">Mission</h3>
            <p>Explain your mission or purpose in a few sentences.</p>
          </div>
          <div className="p-6 bg-white dark:bg-zinc-800 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Coisas</h3>
            <p>Explain your mission or purpose in a few sentences.</p>
          </div>
          <div className="p-6 bg-white dark:bg-zinc-800 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Vision</h3>
            <p>Describe your vision or goals clearly to your audience.</p>
          </div>
        </div>
      </main>

      {/* Content Section */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">About Us</h2>
        <p className="text-lg leading-relaxed mb-6">
          Here you can describe your website, company, or project. Keep it concise and clear. Tailwind makes styling responsive and easy.
        </p>
        <div className="grid sm:grid-cols-2 gap-8">
          <div className="p-6 bg-white dark:bg-zinc-800 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Mission</h3>
            <p>Explain your mission or purpose in a few sentences.</p>
          </div>
          <div className="p-6 bg-white dark:bg-zinc-800 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Vision</h3>
            <p>Describe your vision or goals clearly to your audience.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-white dark:bg-black border-t border-zinc-200 dark:border-zinc-700 py-6 mt-auto">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center px-6">
          <p>&copy; {new Date().getFullYear()} MySite. All rights reserved.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <a href="#" className="hover:text-blue-600">Twitter</a>
            <a href="#" className="hover:text-blue-600">LinkedIn</a>
            <a href="#" className="hover:text-blue-600">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
