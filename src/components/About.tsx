import { Avatar, Card } from 'morris-ui'

export default function About() {
  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">About Me</h2>

        <Card variant="glass" className="p-8 mb-10">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <Avatar
              src="/images/776304.jpeg"
              alt="Matt Morris"
              size="xl"
              variant="circular"
            />
            <div className="flex-1 space-y-4">
              <p className="text-slate-600 leading-relaxed">
                I'm a full-stack software engineer currently working on a React-based wealth management platform where I've taken on UI ownership and help shape the entire product architecture and how the platform evolves.
              </p>
              <p className="text-slate-600 leading-relaxed">
                I enjoy building applications that deal with real-world data and user workflows — recently working on projects like a stock screening platform with configurable technical indicators and a marketplace app for local activities.
              </p>
              <p className="text-slate-600 leading-relaxed">
                I'm comfortable building full-stack applications with React, Node.js, Spring Boot, and modern web tooling. I'm passionate about solving problems across the entire stack—from backend architecture and databases to frontend performance and user experience.
              </p>
            </div>
          </div>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'Frontend', desc: 'Developing modern, responsive UIs using React, TypeScript, and Next.js. Focused on performance, reusable components, and creating intuitive user experiences.' },
            { title: 'Backend', desc: 'Building backend services with Spring Boot and Express, working with PostgreSQL and MongoDB to support data-driven applications and API integrations.' },
            { title: 'Tools', desc: 'Leveraging tools like Git, Docker, and AWS for development and deployment, along with Jenkins & Gitlab for CI/CD and Figma for collaborating on UI/UX.' },
          ].map((item) => (
            <Card key={item.title} className="p-6">
              <h3 className="font-bold text-lg mb-2 text-blue-600">{item.title}</h3>
              <p className="text-slate-500 text-sm">{item.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
