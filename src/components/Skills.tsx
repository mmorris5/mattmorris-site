import { Badge, Card } from 'morris-ui'

const skillCategories = [
  {
    category: 'Frontend',
    badge: 'primary' as const,
    skills: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Vite', 'HTML/CSS'],
  },
  {
    category: 'Backend',
    badge: 'secondary' as const,
    skills: ['Java', 'Spring Boot', 'Express.js', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL'],
  },
  {
    category: 'Tools & DevOps',
    badge: 'accent' as const,
    skills: ['Git', 'Docker', 'AWS', 'Azure', 'CI/CD', 'Figma'],
  },
  {
    category: 'Soft Skills',
    badge: 'success' as const,
    skills: ['Problem Solving', 'Communication', 'Mentoring', 'Code Review', 'Agile', 'Leadership'],
  },
]

const experience = [
  {
    role: 'Associate Software Engineer',
    company: 'U.S. Bank',
    period: '2023 – Present',
    description:
      'Working on a React-based wealth management platform, where I’ve taken on UI ownership and contribute to the overall architecture and user experience. Build and maintain scalable frontend features, collaborate across teams, and help drive product decisions in a production environment.',
  },
  {
    role: 'Frontend Developer',
    company: 'U-In, Incorporated',
    period: '2024 – Present',
    description:
      'Contributing to a marketplace platform for local activities, focused on building the user interface and core user flows. Worked on responsive design, user onboarding, and features that connect merchants with customers in a real-world product setting.',
  },
  {
    role: 'Software Engineer',
    company: 'Union Bank',
    period: '2021 – 2023',
    description:
      'Started in a backend-focused role working with Java and Spring Boot to build and maintain internal banking services. Gained experience with APIs, enterprise systems, and production-level code before transitioning into more frontend-focused work.',
  },
]

export default function Skills() {
  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Skills & Expertise</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((cat) => (
            <Card key={cat.category} className="p-6">
              <h3 className="text-2xl font-bold mb-4">{cat.category}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <Badge key={skill} variant={cat.badge}>
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <h3 className="text-3xl font-bold mb-8 text-center">Experience</h3>
        <div className="space-y-6 max-w-2xl mx-auto">
          {experience.map((exp) => (
            <Card key={exp.role} className="p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                <div>
                  <h4 className="text-xl font-bold">{exp.role}</h4>
                  <p className="text-slate-500">{exp.company}</p>
                </div>
                <Badge variant="secondary">{exp.period}</Badge>
              </div>
              <p className="text-slate-500 text-sm mt-2">{exp.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
