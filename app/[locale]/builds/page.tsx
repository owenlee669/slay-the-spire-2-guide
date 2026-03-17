import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Slay the Spire 2 Builds - 11 Recommended Deck Builds',
  description: '11 recommended deck builds for all characters. From beginner-friendly to advanced Ascension 20 strategies.',
  keywords: 'slay the spire 2 builds, deck builds, character builds, ascension builds, beginner builds',
  openGraph: {
    title: 'Slay the Spire 2 Builds | Recommended Decks',
    description: '11 proven builds for all characters.',
    type: 'website',
  },
};

const builds = [
  {
    character: 'Ironclad',
    name: 'Strength Scaling',
    difficulty: 'Beginner',
    description: 'Stack Strength to make every Attack card deal massive damage. The Ironclad signature build.',
    keyCards: ['Inflame', 'Limit Break', 'Demon Form', 'Heavy Blade'],
    relics: ['Brimstone', 'Charon\'s Ashes', 'Burning Blood'],
  },
  {
    character: 'Ironclad',
    name: 'Exhaust Engine',
    difficulty: 'Intermediate',
    description: 'Exhaust cards to trigger powerful synergies. Feel No Pain generates Block, Dark Embrace draws cards.',
    keyCards: ['Feel No Pain', 'Dark Embrace', 'Barricade', 'Corruption'],
    relics: ['Dead Branch', 'Ice Cream', 'Medical Kit'],
  },
  {
    character: 'Silent',
    name: 'Shiv Storm',
    difficulty: 'Intermediate',
    description: 'Generate massive amounts of Shivs each turn. Combined with Accuracy and Kunai/Shuriken.',
    keyCards: ['Accuracy', 'Footwork', 'Blade Dance', 'Infinite Blades'],
    relics: ['Kunai', 'Shuriken', 'Letter Opener'],
  },
  {
    character: 'Silent',
    name: 'Poison Alchemist',
    difficulty: 'Advanced',
    description: 'Stack Poison to deal increasing damage each turn. Catalyst triples Poison stacks.',
    keyCards: ['Catalyst', 'Deadly Poison', 'Noxious Fumes', 'Corpse Explosion'],
    relics: ['Snecko Eye', 'Orichalcum', 'Violet Lotus'],
  },
  {
    character: 'Defect',
    name: 'Claw Machine',
    difficulty: 'Beginner',
    description: 'Claw costs 0 Energy and increases ALL Claw damage. Combined with 0-cost card synergies.',
    keyCards: ['Claw', 'Coolheaded', 'Recycle', 'Biased Cognition'],
    relics: ['Snecko Eye', 'Runic Capacitor', 'Self-Forming Clay'],
  },
  {
    character: 'Defect',
    name: 'Frost Focus',
    difficulty: 'Intermediate',
    description: 'Fill Orb slots with Frost Orbs and stack Focus for massive passive Block.',
    keyCards: ['Defragment', 'Cold Snap', 'Glacier', 'Loop'],
    relics: ['Frozen Core', 'Runic Capacitor', 'Calipers'],
  },
  {
    character: 'Necrobinder',
    name: 'Doom Execution',
    difficulty: 'Advanced',
    description: 'Stack Doom on enemies until it reaches their HP, instantly executing them.',
    keyCards: ['End of Days', 'Time\'s Up', 'No Escape', 'Deathbringer'],
    relics: ['Bound Phylactery', 'Phylactery Unbound', 'Snecko Eye'],
  },
  {
    character: 'Necrobinder',
    name: 'Osty Pet',
    difficulty: 'Intermediate',
    description: 'Focus on buffing Osty as your primary damage dealer and shield.',
    keyCards: ['Protector', 'Squeeze', 'Necro Mastery', 'Friendship'],
    relics: ['Bound Phylactery', 'Meat on the Bone', 'Runic Pyramid'],
  },
  {
    character: 'Regent',
    name: 'Stars Engine',
    difficulty: 'Advanced',
    description: 'Generate and spend Stars to fuel powerful abilities. Excellent AoE and scaling.',
    keyCards: ['Genesis', 'Orbit', 'The Sealed Throne', 'Royal Gamble'],
    relics: ['Divine Right', 'Divine Destiny', 'Ice Cream'],
  },
  {
    character: 'Regent',
    name: 'Sovereign Blade Forge',
    difficulty: 'Intermediate',
    description: 'Play Forge cards to create and upgrade the Sovereign Blade.',
    keyCards: ['Sovereign Blade', 'Furnace', 'Refine Blade', 'Hammer Time'],
    relics: ['Divine Right', 'The Smith', 'Tool of the Trade'],
  },
  {
    character: 'All',
    name: 'Hybrid Builds',
    difficulty: 'Advanced',
    description: 'Mix mechanics from multiple characters for unique synergies.',
    keyCards: ['Varies', 'Based on', 'Character', 'Combination'],
    relics: ['Depends on build path'],
  },
];

export default function BuildsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Slay the Spire 2 Deck Builds
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            11 recommended builds for all characters. From beginner-friendly strategies to advanced Ascension 20 tactics.
          </p>
        </div>

        {/* Builds Grid */}
        <div className="space-y-6">
          {builds.map((build, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">{build.name}</h2>
                  <p className="text-purple-400">{build.character}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs ${
                  build.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                  build.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-red-500/20 text-red-400'
                }`}>
                  {build.difficulty}
                </span>
              </div>
              
              <p className="text-slate-300 mb-4">{build.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-purple-400 mb-2">Key Cards</h3>
                  <div className="flex flex-wrap gap-2">
                    {build.keyCards.map((card) => (
                      <span key={card} className="px-2 py-1 bg-purple-500/20 border border-purple-500/30 rounded text-xs text-purple-300">
                        {card}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-purple-400 mb-2">Recommended Relics</h3>
                  <div className="flex flex-wrap gap-2">
                    {build.relics.map((relic) => (
                      <span key={relic} className="px-2 py-1 bg-yellow-500/20 border border-yellow-500/30 rounded text-xs text-yellow-300">
                        {relic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
