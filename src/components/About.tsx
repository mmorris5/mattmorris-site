import { Card } from 'morris-ui'

export default function About() {
  return (
    <section className="py-20 px-4 bg-slate-800/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              I'm a passionate full-stack developer with a focus on building modern, user-centric web applications.
              With over 5 years of experience in the web development space, I've had the opportunity to work on diverse projects
              ranging from startups to enterprise-level applications.
            </p>
            
            <p>
              My journey into development started with a curiosity about how things work on the web. Since then,
              I've developed a strong expertise in React, TypeScript, Node.js, and various cloud technologies.
              I'm constantly learning and staying updated with the latest industry trends.
            </p>

            <p>
              Beyond coding, I'm passionate about open source and recently published
              <span className="text-blue-400 font-semibold"> morris-ui</span>, a React component library
              designed to help developers build beautiful interfaces faster.
            </p>
          </div>

            <Card className="bg-slate-700/50">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Quick Facts</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                Full-stack JavaScript/TypeScript developer
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                5+ years of professional experience
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                Open source contributor
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                Always learning and building
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
