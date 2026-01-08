import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-hero bg-cover bg-center text-white">
      <main className="mx-auto max-w-5xl py-32 px-8">
        <nav className="flex items-center justify-between mb-12">
          <h2 className="text-2xl font-extrabold tracking-tight">Your Name</h2>
          <div className="flex gap-4">
            <Link href="/projects" className="nav-link">Projects</Link>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
        </nav>

        <section className="backdrop-blur-sm rounded-2xl bg-white/5 p-10 shadow-lg">
          <h1 className="text-5xl font-extrabold leading-tight mb-4">Futuristic Portfolio</h1>
          <p className="text-lg text-silver-200 max-w-2xl mb-8">
            I build immersive, high-performance web experiences. Explore selected
            projects below and get in touch to collaborate.
          </p>
          <div className="flex gap-4">
            <Link href="/projects" className="btn-primary">View Projects</Link>
            <a href="#contact" className="btn-ghost">Contact Me</a>
          </div>
        </section>

      </main>
    </div>
  );
}
