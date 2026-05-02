import { useState } from 'react'
import { Button, HamburgerMenu } from 'morris-ui'
import Hero from './components/Hero.tsx'
import About from './components/About.tsx'
import Projects from './components/Projects.tsx'
import Skills from './components/Skills.tsx'
import Contact from './components/Contact.tsx'

type Section = 'home' | 'about' | 'projects' | 'skills' | 'contact'

const sections: { label: string; id: Section }[] = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contact', id: 'contact' },
]

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('home')

  const navItems = sections.map((s) => ({
    label: s.label,
    href: `#${s.id}`,
  }))

  const branding = (
    <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
      Matt Morris
    </span>
  )

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-slate-200 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Branding (desktop) */}
          <span className="hidden md:inline text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Matt Morris
          </span>

          {/* Desktop nav buttons */}
          <div className="hidden md:flex gap-2">
            {sections.map((s) => (
              <Button
                key={s.id}
                variant={activeSection === s.id ? 'primary' : 'ghost'}
                size="sm"
                onClick={() => setActiveSection(s.id)}
              >
                {s.label}
              </Button>
            ))}
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden">
            <HamburgerMenu
              items={navItems}
              branding={branding}
              onItemClick={(item) => {
                const sectionId = item.href.replace('#', '') as Section
                setActiveSection(sectionId)
              }}
            />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        {activeSection === 'home' && <Hero setActiveSection={(s) => setActiveSection(s as Section)} />}
        {activeSection === 'about' && <About />}
        {activeSection === 'projects' && <Projects setActiveSection={(s) => setActiveSection(s as Section)} />}
        {activeSection === 'skills' && <Skills />}
        {activeSection === 'contact' && <Contact />}
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-8 mt-20">
        <div className="max-w-6xl mx-auto px-4 text-center text-slate-500">
          <p>© 2026 Matt Morris · Built with React &amp; morris-ui</p>
        </div>
      </footer>
    </div>
  )
}
