const links = [
  {
    label: 'GitHub',
    href: 'https://github.com/AdrianBote2',
    display: 'github.com/AdrianBote2',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/abotello2',
    display: 'linkedin.com/in/abotello2',
  },
  {
    label: 'Email',
    href: 'mailto:Adrianbotello1234@gmail.com',
    display: 'Adrianbotello1234@gmail.com',
  },
]

function Contact() {
  return (
    <section id="contact">
      <div className="max-w-4xl mx-auto px-8 py-16 flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="text-gray-600 mb-10">Feel free to reach out, I'm open to opportunities.</p>
        <div className="flex flex-col gap-4 w-full max-w-sm">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center bg-gray-50 px-6 py-4 rounded-xl hover:bg-gray-100"
            >
              <span className="font-semibold">{link.label}</span>
              <span className="text-gray-500 text-sm">{link.display}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
