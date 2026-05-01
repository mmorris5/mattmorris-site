import { Badge, Button, Card } from 'morris-ui'

interface ProjectsProps {
  setActiveSection: (section: string) => void
}

const projects = [
  {
    title: 'morris-ui',
    description: 'A modern React component library built with TypeScript and Tailwind CSS. Designed for developers who value simplicity and customization.',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    variant: 'accent' as const,
    link: 'https://github.com/mmorris5/morris-ui',
  },
  {
    title: 'This Website!',
    description: 'Personal portfolio showcasing projects and skills. Built with React, Vite, and morris-ui components.',
    tags: ['React', 'Vite', 'morris-ui'],
    variant: 'primary' as const,
    link: 'https://github.com/mmorris5/mattmorris-site',
  },
  {
    title: 'Win Now',
    description: 'AI-powered dynasty fantasy football assistant that analyzes trades, rosters, league settings, and team timelines to deliver smarter, context-aware recommendations.',
    tags: ['React', 'Vite', 'Next.js', 'Gemini API'],
    variant: 'secondary' as const,
    link: 'https://github.com/mmorris5/win-now',
  },
  {
    title: 'Algo Trading',
    description: 'A Python backtesting and live paper-trading framework for long-only equity strategies using Interactive Brokers.',
    tags: ['Python', 'Pandas', 'Backtesting', 'Parquet'],
    variant: 'success' as const,
    link: 'https://github.com/mmorris5/algo-trading',
  },
]

export default function Projects({}: ProjectsProps) {
  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Personal Projects</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project) => (
            <Card key={project.title} className="p-6 flex flex-col">
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-slate-500 mb-4 flex-1">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant={project.variant}>
                    {tag}
                  </Badge>
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(project.link, '_blank')}
              >
                View Project
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="secondary" size="lg" onClick={() => window.open('https://github.com/mmorris5', '_blank')}>
            <span className="flex items-center gap-2">
              <svg height="20" width="20" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>
              Check Out My GitHub
            </span>
          </Button>
        </div>
      </div>
    </section>
  )
}
