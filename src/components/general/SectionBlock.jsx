/**
 * Bloc de section réutilisable : titre optionnel + conteneur centré.
 * @param {{ label?: string, title: string, children: React.ReactNode, accent?: boolean }} props
 */
export default function SectionBlock({ label, title, children, accent = false }) {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      {label && (
        <p className="text-sm uppercase tracking-widest text-indigo-400 mb-2">{label}</p>
      )}
      {title && (
        <h2 className="text-3xl font-bold text-white mb-8">{title}</h2>
      )}
      {children}
    </section>
  )
}
