function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto px-8 py-16 flex flex-col items-center text-center">
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Adrian Botello</h1>
        <p className="text-lg text-gray-600 mb-8">
          Passionate software engineer building technology that solves real problems, from AI in education to fitness automation.
        </p>
        <a href="#projects" className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
          View My Work
        </a>
      </div>
    </section>
  )
}

export default Hero
