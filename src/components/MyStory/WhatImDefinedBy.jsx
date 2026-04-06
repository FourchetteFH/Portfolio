// 3-5 traits de caractère avec anecdotes
import SectionBlock from '../general/SectionBlock'

export default function WhatImDefinedBy() {
  // TODO: remplace par tes vrais traits et anecdotes
  const traits = [
    {
      trait: 'Curieux',
      anecdote: 'Je peux passer des heures à comprendre comment quelque chose fonctionne, juste pour le savoir.',
      emoji: '🔭',
    },
    {
      trait: 'Persévérant',
      anecdote: 'Les bugs ne m\'effraient pas — chaque erreur est une occasion d\'apprendre.',
      emoji: '💪',
    },
    {
      trait: 'Créatif',
      anecdote: 'J\'aime trouver des solutions originales là où d\'autres cherchent le chemin évident.',
      emoji: '🎨',
    },
  ]

  return (
    <SectionBlock label="Caractère" title="Ce qui me définit">
      <div className="flex flex-col gap-4">
        {traits.map(({ trait, anecdote, emoji }) => (
          <div key={trait} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex gap-5 items-start">
            <span className="text-3xl shrink-0">{emoji}</span>
            <div>
              <h3 className="text-white font-semibold text-lg mb-1">{trait}</h3>
              <p className="text-slate-400 text-sm leading-relaxed italic">"{anecdote}"</p>
            </div>
          </div>
        ))}
      </div>
    </SectionBlock>
  )
}