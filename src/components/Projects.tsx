import { Card, Badge } from 'morris-ui'

export default function Projects() {
  const projects = [
    {
      title: 'Morris UI',
      description: 'A comprehensive React component library with TypeScript support, designed for developers who want to ship beautiful UIs faster.',
      tags: ['React', 'TypeScript', 'npm', 'Components'],
      link: 'https://www.npmjs.com/package/morris-ui',
      featured: true,
    },
    {
      title: 'Portfolio Website',
      description: 'This very website! Built with React, TypeScript, Tailwind CSS, and morris-ui components.',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      link: '#',
    },
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with real-time inventory management and payment integration.',
      tags: ['Next.js', 'PostgreSQL', 'Stripe', 'AWS'],
      link: '#',
    },
    {
      title: 'Analytics Dashboard',
      description: 'Interactive analytics dashboard with real-time data visualization and advanced filtering capabilities.',
      tags: ['React', 'D3.js', 'Node.js', 'MongoDB'],
      link: '#',
    },
  ]

  return (
    <section className="py-20 px-4 bg-slate-800/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card
              key={project.title}
              className={`group transition-all ${
                project.featured
                  ? 'md:col-span-2 lg:col-span-1 bg-gradient-to-br from-slate-700 to-slate-800 border-blue-500/50 hover:border-blue-400'
                  : 'bg-slate-700/50 border-slate-700 hover:border-cyan-400'
              }`}
            >
              <a href={project.link}>
                <h3 className="text-xl font-semibold mb-3 text-blue-400 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag}>
                      {tag}
                    </Badge>
                  ))}
                  </div>
                <div className="mt-4 flex items-center text-cyan-400 font-semibold">
                  View Project
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
