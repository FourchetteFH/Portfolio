/**
 * Bloc de section réutilisable : titre optionnel + conteneur centré.
 * @param {{ label?: string, title: string, children: React.ReactNode, accent?: boolean }} props
 */
export default function SectionBlock({ label, title, children, accent = false }) {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Étiquette optionnelle au-dessus du titre */}
        {label && (
          <span className="inline-block text-violet-400 text-xs font-semibold tracking-widest uppercase mb-3">
            {label}
          </span>
        )}

        {/* Titre de section */}
        <h2 className={`text-3xl font-bold mb-10 ${accent ? 'text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400' : 'text-white'}`}>
          {title}
        </h2>

        {children}
      </div>
    </section>
  )
}
