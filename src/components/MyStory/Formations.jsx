// Formations, diplômes, certifications
import SectionBlock from '../general/SectionBlock'
import Tag from '../general/Tag'

export default function Formations() {
  // TODO: remplace par tes vraies formations
  const formations = [
    {
      period: '2024 — présent',
      title: 'Formation développeur web fullstack',
      institution: 'Nom de l\'école / organisme',
      tags: ['React', 'TypeScript', 'AdonisJS'],
    },
    {
      period: '2020 — 2023',
      title: 'Baccalauréat',
      institution: 'Nom du lycée',
      tags: ['Informatique', 'Maths'],
    },
  ]

  return (
    <SectionBlock label="Éducation" title="Mes formations">
      <div className="flex flex-col gap-4">
        {formations.map((f, i) => (
          <div key={i} className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <span className="text-violet-400 text-xs font-semibold tracking-widest uppercase">{f.period}</span>
            <h3 className="text-white font-semibold text-lg mt-1">{f.title}</h3>
            <p className="text-slate-500 text-sm mb-3">{f.institution}</p>
            <div className="flex flex-wrap gap-2">
              {f.tags.map(tag => <Tag key={tag} variant="violet">{tag}</Tag>)}
            </div>
          </div>
        ))}
      </div>
    </SectionBlock>
  )
}