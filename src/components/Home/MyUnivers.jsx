// Passions, jeux, musique, influences
import SectionBlock from '../general/SectionBlock'
import Tag from '../general/Tag'

export default function MyUnivers() {
  // TODO: remplace par tes vraies passions
  const passions = [
    { emoji: '🎮', label: 'Jeux vidéo' },
    { emoji: '🎵', label: 'Musique' },
    { emoji: '🧩', label: 'Énigmes & stratégie' },
    { emoji: '💻', label: 'Développement' },
  ]

  return (
    <SectionBlock label="Univers" title="Mon univers">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {passions.map(({ emoji, label }) => (
          <div
            key={label}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col items-center gap-3 hover:border-violet-500/40 transition-colors duration-200"
          >
            <span className="text-4xl">{emoji}</span>
            <Tag variant="violet">{label}</Tag>
          </div>
        ))}
      </div>
    </SectionBlock>
  )
}