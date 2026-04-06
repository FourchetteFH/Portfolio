export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/60 py-10 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-5">

        <div className="flex gap-8 text-slate-400">

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200 text-sm font-medium"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200 text-sm font-medium"
          >
            LinkedIn
          </a>

          <a
            href="mailto:tonemail@example.com"
            className="hover:text-white transition-colors duration-200 text-sm font-medium"
          >
            Contact
          </a>

        </div>

        <div className="w-12 h-px bg-violet-500/40" />

        <p className="text-slate-600 text-xs">© 2025 Florian Helg — Tous droits réservés</p>

      </div>
    </footer>
  )
}
