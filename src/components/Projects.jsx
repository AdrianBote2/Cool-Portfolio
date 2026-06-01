const projects = [
  {
    title: 'AI-Powered Game Platform — LLNL Capstone',
    description:
      'Built an AI-powered game platform for Lawrence Livermore National Laboratory, working directly with a client to deliver a product that satisfied real stakeholder requirements. Used Claude Code to generate and integrate games, deployed to production via Vercel, and reached 100+ users across live demonstrations at high schools and UC Merced. Collaborated in a team environment using version control to manage the codebase and ship a working product on deadline.',
    tags: ['Claude API', 'Claude Code', 'Vercel', 'HTML', 'JavaScript', 'CSS', 'Version Control', 'Team Collaboration'],
  },
  {
    title: 'AI Fitness & Nutrition Tracker',
    description:
      'Building a full stack web application that automates calorie tracking and data collection, with AI-generated fitness and meal plans tailored to each user. Features a React and Tailwind frontend, a Python Flask backend, PostgreSQL database with SQLAlchemy, and integrates the ChatGPT API to deliver personalized recommendations through a full CRUD architecture.',
    tags: ['React', 'Tailwind', 'Python', 'Flask', 'PostgreSQL', 'SQLAlchemy', 'ChatGPT API', 'Railway', 'CRUD'],
  },
]

function Projects() {
  return (
    <section id="projects">
      <div className="max-w-4xl mx-auto px-8 py-16 flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold mb-10">Projects</h2>
        <div className="flex flex-col gap-8 w-full">
          {projects.map((project) => (
            <div key={project.title} className="bg-gray-50 rounded-xl p-8 text-left">
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full">
                    {tag}
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

export default Projects
