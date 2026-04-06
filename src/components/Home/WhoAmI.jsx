import SectionBlock from '../general/SectionBlock'

export default function WhoAmI() {
  return (
    <SectionBlock label="À propos" title="Qui suis-je ?">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-left space-y-4">
        <p className="text-slate-300 leading-relaxed">
          Je m'appelle Florian Helg, je suis développeur web fullstack en formation.
        </p>
        <p className="text-slate-300 leading-relaxed">
          J'adore le développement et tout ce qui est énigmatique ou stratégique.
        </p>
        <p className="text-slate-300 leading-relaxed">
          Je suis également un grand fan de jeux vidéo et de musique.
        </p>
      </div>
    </SectionBlock>
  )
}