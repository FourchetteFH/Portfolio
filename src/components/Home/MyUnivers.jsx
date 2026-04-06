// Passions, jeux, musique, influences
import SectionBlock from '../general/SectionBlock'
import Tag from '../general/Tag'

export default function MyUnivers() {
  // TODO: remplace par tes vraies passions

  return (
    <SectionBlock label="Univers" title="Mon univers">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-left space-y-6">

        {/* Curiosité & personnalité */}
        <p className="text-slate-300 leading-relaxed">
          Je suis quelqu'un de curieux et impulsif, si quelque chose me passe par la tête, je peux y passer des heures. J'aime apprendre, me dépasser, et tenter à peu près n'importe quoi sur un coup de tête. Le revers de la médaille : je passe souvent d'une chose à l'autre sans vraiment finir ce que j'ai commencé.
        </p>

        {/* Voyages & amis */}
        <p className="text-slate-300 leading-relaxed">
          J'aime beaucoup voyager et découvrir de nouvelles cultures et personnes. J'ai trois meilleurs amis qui me ressemblent : sur un coup de tête, on peut tout faire. Comme la fois où on a décidé de partir en Andorre sans prévenir personne, on a juste pris la voiture et on est parti.
        </p>

        {/* Philosophie de vie */}
        <p className="text-slate-300 leading-relaxed">
          Généralement rien ne se passe comme prévu, mais c'est ce qui fait le charme de nos aventures. Notre mentalité, c'est de vivre à fond et de profiter de chaque instant. Cela dit, dormir dans la voiture faute d'hôtel réservé commence à devenir un peu épuisant... Mais ces moments-là, je risque pas de les oublier.
        </p>

      </div>
    </SectionBlock>
  )
}