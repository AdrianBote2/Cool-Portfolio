const links = ['About', 'Projects', 'Skills', 'Contact']

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 border-b border-gray-300 sticky top-0 bg-white z-50">
      <span className="font-bold text-lg">{"<Adrian Botello/>"}</span>
      <ul className="flex gap-10 list-none">
        {links.map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`} className="text-gray-600 hover:text-black">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
