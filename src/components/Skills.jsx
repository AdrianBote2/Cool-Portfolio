const skills = [
  {
    category: 'Languages',
    items: ['JavaScript', 'Python', 'HTML', 'CSS', 'SQL'],
  },
  {
    category: 'Frameworks & Libraries',
    items: ['React', 'Tailwind', 'Flask', 'SQLAlchemy'],
  },
  {
    category: 'Tools & Platforms',
    items: ['Git', 'Vercel', 'Railway', 'PostgreSQL', 'Claude Code', 'Claude API', 'ChatGPT API'],
  },
  {
    category: 'Testing',
    items: ['pytest', 'Jest', 'Playwright', 'Cypress', 'Postman'],
  },
]

function Skills() {
  return (
    <section id="skills">
      <div className="max-w-4xl mx-auto px-8 py-16 flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold mb-10">Skills</h2>
        <div className="flex flex-col gap-8 w-full text-left">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="text-lg font-semibold mb-3">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span key={skill} className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
