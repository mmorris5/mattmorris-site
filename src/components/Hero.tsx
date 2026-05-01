import { Button } from 'morris-ui'

interface HeroProps {
  setActiveSection: (section: string) => void
}

export default function Hero({ setActiveSection }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="block mb-2">Hi, I'm</span>
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
            Matt Morris
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 mb-8 leading-relaxed">
          Full-stack developer passionate about building beautiful, scalable web applications.
          <br />
          Creator of <span className="text-blue-400 font-semibold">morris-ui</span> - a modern React component library.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            onClick={() => setActiveSection('projects')}
            className="px-8 py-3"
          >
            View My Projects
          </Button>
          <Button
            onClick={() => setActiveSection('contact')}
            variant="outlined"
            className="px-8 py-3"
          >
            Get In Touch
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 mx-auto text-slate-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
