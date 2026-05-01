import { Badge, Card } from 'morris-ui'

export default function Skills() {
  const skillCategories = [
    {
      name: 'Frontend',
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js', 'Vite'],
    },
    {
      name: 'Backend',
      skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'GraphQL', 'REST APIs'],
    },
    {
      name: 'Tools & DevOps',
      skills: ['Git', 'Docker', 'CI/CD', 'AWS', 'Vercel', 'GitHub Actions'],
    },
    {
      name: 'Other',
      skills: ['Web Performance', 'Accessibility', 'Testing', 'UI/UX Design', 'Agile'],
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <Card key={category.name} className="bg-slate-800/50">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill}>
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
