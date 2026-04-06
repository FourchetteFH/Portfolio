import SectionBlock from '../general/SectionBlock'

export default function SoftSkill() {
  // TODO: remplace par tes vraies soft skills
  const traits = [
    { emoji: '🧠', label: 'Curiosité', desc: 'Toujours en train d\'explorer de nouvelles technologies.' },
    { emoji: '🎯', label: 'Rigueur',   desc: 'J\'aime comprendre les choses en profondeur avant de passer à la suite.' },
    { emoji: '🤝', label: 'Esprit d\'équipe', desc: 'Je collabore facilement et j\'apprends des autres.' },
    { emoji: '🔥', label: 'Motivation', desc: 'Je suis passionné par ce que je fais et ça se voit.' },
  ]

  return (
    <SectionBlock label="Savoir-être" title="Mes soft skills">
      <div className="grid sm:grid-cols-2 gap-4">
        {traits.map(({ emoji, label, desc }) => (
          <div key={label} className="bg-slate-900 border border-slate-800 hover:border-violet-500/40 rounded-2xl p-6 transition-colors duration-200">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">{emoji}</span>
              <h3 className="text-white font-semibold">{label}</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </SectionBlock>
  )
}
