import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Slay the Spire 2 Characters - Complete Character Guides',
  description: 'Complete guides for all 5 Slay the Spire 2 characters: Ironclad, Silent, Defect, Regent, and Necrobinder. Cards, builds, and strategies.',
  keywords: 'slay the spire 2 characters, ironclad, silent, defect, regent, necrobinder, character guide',
  openGraph: {
    title: 'Slay the Spire 2 Characters | Complete Guides',
    description: 'Master all 5 characters with our comprehensive guides.',
    type: 'website',
  },
};

const characters = [
  {
    slug: 'ironclad',
    name: 'The Ironclad',
    emoji: '🛡️',
    type: 'Strength & Defense',
    description: 'A powerful warrior who sold his soul to harness demonic energies. Specializes in Strength-based attacks and Block generation.',
    difficulty: 'Beginner',
    cards: 75,
  },
  {
    slug: 'silent',
    name: 'The Silent',
    emoji: '🗡️',
    type: 'Poison & Shivs',
    description: 'A deadly huntress from the foglands. Relies on Poison, Shivs, and careful card manipulation.',
    difficulty: 'Intermediate',
    cards: 70,
  },
  {
    slug: 'defect',
    name: 'The Defect',
    emoji: '⚡',
    type: 'Orbs & Focus',
    description: 'A malfunctioning combat automaton that has gained sentience. Harnesses Orbs to deal damage and gain Block.',
    difficulty: 'Advanced',
    cards: 65,
  },
  {
    slug: 'regent',
    name: 'The Regent',
    emoji: '👑',
    type: 'Stars & Forge',
    description: 'A deposed ruler who commands loyal subjects. Summons minions and uses royal decrees.',
    difficulty: 'Advanced',
    cards: 55,
  },
  {
    slug: 'necrobinder',
    name: 'The Necrobinder',
    emoji: '💀',
    type: 'Doom & Souls',
    description: 'A mysterious practitioner of forbidden soul magic. Binds defeated spirits to their will.',
    difficulty: 'Intermediate',
    cards: 50,
  },
];

export default function CharactersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Slay the Spire 2 Characters
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Master all 5 playable characters. Each offers unique mechanics, playstyles, and strategies for conquering the Spire.
          </p>
        </div>

        {/* Character Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {characters.map((char) => (
            <a
              key={char.slug}
              href={`/characters/${char.slug}`}
              className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 hover:bg-white/10 transition-all"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition">{char.emoji}</div>
              <h2 className="text-2xl font-bold text-white mb-2">{char.name}</h2>
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-1 bg-purple-500/20 border border-purple-500/30 rounded text-xs text-purple-300">
                  {char.type}
                </span>
                <span className={`px-2 py-1 rounded text-xs ${
                  char.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                  char.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-red-500/20 text-red-400'
                }`}>
                  {char.difficulty}
                </span>
              </div>
              <p className="text-slate-400 mb-4">{char.description}</p>
              <div className="text-sm text-slate-500">{char.cards} unique cards</div>
            </a>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-white mb-6">Character Database</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-white/5 rounded-xl p-4">
              <div className="text-3xl font-bold text-purple-400 mb-1">5</div>
              <div className="text-slate-400 text-sm">Characters</div>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <div className="text-3xl font-bold text-purple-400 mb-1">315+</div>
              <div className="text-slate-400 text-sm">Character Cards</div>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <div className="text-3xl font-bold text-purple-400 mb-1">5</div>
              <div className="text-slate-400 text-sm">Difficulty Levels</div>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <div className="text-3xl font-bold text-purple-400 mb-1">2025</div>
              <div className="text-slate-400 text-sm">Last Updated</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
