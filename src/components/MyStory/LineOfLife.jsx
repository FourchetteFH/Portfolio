// Timeline enfance --> maintenant
import SectionBlock from '../general/SectionBlock'

export default function LineOfLife() {
  // TODO: remplace par tes vraies étapes de vie
  const events = [
    { year: '2005', label: 'Naissance de la curiosité', desc: 'Premier contact avec l\'informatique.' },
    { year: '2020', label: 'Lycée',  desc: 'Découverte du développement web.' },
    { year: '2024', label: 'Formation dev web', desc: 'Début de la formation fullstack.' },
    { year: '2025', label: 'Aujourd\'hui', desc: 'Construction de ce portfolio.' },
  ]

  return (
    <SectionBlock label="Parcours" title="Ma ligne de vie">
      <div className="relative pl-6 border-l-2 border-slate-800 flex flex-col gap-8">
        {events.map(({ year, label, desc }) => (
          <div key={year} className="relative">
            {/* Dot */}
            <div className="absolute -left-[1.45rem] top-1 w-3 h-3 rounded-full bg-violet-500 ring-4 ring-slate-950" />
            <span className="text-violet-400 text-xs font-semibold tracking-widest uppercase">{year}</span>
            <h3 className="text-white font-semibold mt-1">{label}</h3>
            <p className="text-slate-400 text-sm mt-0.5 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </SectionBlock>
  )
}