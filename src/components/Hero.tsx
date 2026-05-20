import { Avatar, Button } from 'morris-ui'

interface HeroProps {
  setActiveSection: (section: string) => void
}

export default function Hero({ setActiveSection }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-3xl mx-auto">
        <div className="mb-8 flex justify-center">
          <Avatar
            src="/images/776304.jpeg"
            alt="Matt Morris"
            size="xl"
            variant="circular"
            className="w-36 h-36 md:w-44 md:h-44"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="block mb-2 text-slate-900">Hi, I'm</span>
          <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-500 bg-clip-text text-transparent">
            Matt Morris
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
          Full-stack developer building performant, scalable apps across the entire stack.          <br />
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="primary"
            size="lg"
            onClick={() => setActiveSection('projects')}
          >
            View My Projects
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => setActiveSection('contact')}
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  )
}
