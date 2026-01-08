import { projects } from '../../../data/projects'

export default function ProjectDetail({ params }) {
  const id = params.id
  const project = projects.find(p => p.id === id)
  if (!project) return <div className="min-h-screen p-24">Project not found</div>

  return (
    <div className="min-h-screen bg-hero bg-cover bg-center text-white py-24">
      <main className="mx-auto max-w-4xl px-8">
        <h1 className="text-4xl font-extrabold">{project.title}</h1>
        <p className="mt-6 text-lg text-silver-200">{project.description}</p>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="card">
            <h4 className="font-semibold">Overview</h4>
            <p className="mt-2 text-silver-200">Detailed writeup coming soon.</p>
          </div>
          <div className="card">
            <h4 className="font-semibold">Technologies</h4>
            <div className="mt-2 flex gap-2 flex-wrap">
              {project.tags.map(t => <span key={t} className="text-xs px-2 py-1 rounded bg-white/5">{t}</span>)}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
