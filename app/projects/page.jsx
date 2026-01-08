import Link from 'next/link'
import { projects } from '../../data/projects'

export default function Projects() {
  return (
    <div className="min-h-screen bg-hero bg-cover bg-center text-white py-24">
      <main className="mx-auto max-w-5xl px-8">
        <h1 className="text-4xl font-extrabold mb-8">Selected Projects</h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map(p => (
            <Link key={p.id} href={`/projects/${p.id}`} className="card">
              <h3 className="text-2xl font-bold">{p.title}</h3>
              <p className="text-silver-200 mt-2">{p.description}</p>
              <div className="mt-4 flex gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-xs px-2 py-1 rounded bg-white/5">{t}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
