// Inspirations, valeurs, œuvres qui m'ont marqué
import SectionBlock from '../general/SectionBlock'
import Tag from '../general/Tag'

export default function Inspirations() {
  // TODO: remplace par tes vraies inspirations
  const items = [
    { type: 'Jeu', title: 'Nom du jeu', impact: 'M\'a appris la logique et la persévérance.', emoji: '🎮' },
    { type: 'Musique', title: 'Artiste / album', impact: 'M\'accompagne dans les longues sessions de code.', emoji: '🎵' },
    { type: 'Livre', title: 'Titre du livre', impact: 'A changé ma façon de voir les problèmes.', emoji: '📚' },
  ]

  return (
    <SectionBlock label="Sources" title="Ce qui m'inspire">
      <div className="grid sm:grid-cols-3 gap-4">
        {items.map(({ type, title, impact, emoji }) => (
          <div key={title} className="bg-slate-900 border border-slate-800 hover:border-violet-500/40 rounded-2xl p-5 flex flex-col gap-3 transition-colors duration-200">
            <div className="flex items-center justify-between">
              <span className="text-3xl">{emoji}</span>
              <Tag variant="outline">{type}</Tag>
            </div>
            <h3 className="text-white font-semibold">{title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{impact}</p>
          </div>
        ))}
      </div>
    </SectionBlock>
  )
}
