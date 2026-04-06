export default function Header() {
  return (
    <header className="relative bg-slate-950 text-white flex flex-col items-center justify-center px-6 py-20 text-center overflow-hidden">

      {/* Glow d'ambiance en arrière-plan */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-600/10 rounded-full blur-3xl" />
      </div>

      {/* Photo de profil */}
      <div className="relative w-32 h-32 rounded-full mb-6 ring-2 ring-violet-500 ring-offset-4 ring-offset-slate-950 shadow-[0_0_30px_rgba(139,92,246,0.4)]">
        <img
          src="src/assets/photoflo.jpg"
          alt="Florian Helg"
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      {/* Nom */}
      <h1 className="text-5xl font-bold tracking-tight mb-2 text-white">
        Florian Helg
      </h1>

      {/* Titre */}
      <p className="text-violet-400 font-semibold text-lg mb-4 tracking-wide">
        Développeur web fullstack en formation
      </p>

      {/* Accroche */}
      <p className="text-slate-400 max-w-lg text-base leading-relaxed">
        Je m'appelle Florian Helg, je suis développeur web fullstack en formation.
      </p>

    </header>
  )
}
