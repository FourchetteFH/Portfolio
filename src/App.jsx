export default function App() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 p-8 bg-slate-950 text-white">

      {/* Nom */}
      <h1 className="text-5xl font-bold">Florian Helg</h1>

      {/* Tagline */}
      <p className="text-slate-400 text-lg">Développeur web en formation 🚀</p>

      {/* Compétences */}
      <div className="flex gap-3 flex-wrap justify-center">
        {['React', 'TypeScript', 'Tailwind', 'AdonisJS'].map(skill => (
          <span key={skill} className="bg-slate-800 px-3 py-1 rounded-full text-sm">
            {skill}
          </span>
        ))}
      </div>

      {/* Liens */}
      <div className="flex gap-4 mt-4">
        <a href="https://github.com/" className="underline text-slate-300 hover:text-white">
          GitHub
        </a>
        <a href="mailto:tonemail@example.com" className="underline text-slate-300 hover:text-white">
          Contact
        </a>
      </div>

    </main>
  )
}
