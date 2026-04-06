// Façon de penser, apprendre, façon de travailler, résoudre
import SectionBlock from '../general/SectionBlock'

export default function HowIThink() {
  // TODO: remplace par ta vraie façon de penser
  const blocks = [
    { emoji: '🔍', title: 'J\'analyse avant d\'agir', desc: 'Je prends le temps de comprendre un problème avant de coder.' },
    { emoji: '🧱', title: 'Je construis par briques', desc: 'Je décompose les problèmes complexes en parties simples.' },
    { emoji: '📖', title: 'J\'apprends en faisant', desc: 'La pratique est ma meilleure façon d\'acquérir des compétences.' },
    { emoji: '🔄', title: 'J\'itère', desc: 'Je n\'ai pas peur de recommencer si c\'est nécessaire.' },
  ]

  return (
    <SectionBlock label="Méthode" title="Comment je pense et travaille">
      <div className="grid sm:grid-cols-2 gap-4">
        {blocks.map(({ emoji, title, desc }) => (
          <div key={title} className="bg-slate-900 border border-slate-800 hover:border-violet-500/40 rounded-2xl p-6 transition-colors duration-200">
            <span className="text-3xl mb-3 block">{emoji}</span>
            <h3 className="text-white font-semibold mb-2">{title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </SectionBlock>
  )
}