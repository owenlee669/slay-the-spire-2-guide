import { Metadata } from 'next';
import Link from 'next/link';
import { LOCALES } from '@/i18n/routing';

export const metadata: Metadata = {
  title: 'Slay the Spire 2 Characters - Complete Character Guides & Builds',
  description: 'Complete guides for all 5 Slay the Spire 2 characters: The Regent, The Ironclad, The Silent, The Defect, and The Necrobinder. Learn their unique mechanics, best cards, and winning strategies.',
  keywords: 'slay the spire 2 characters, slay the spire 2 regent, slay the spire 2 ironclad, slay the spire 2 silent, slay the spire 2 defect, slay the spire 2 necrobinder',
  openGraph: {
    title: 'Slay the Spire 2 Characters | Complete Guides',
    description: 'Master all 5 characters with comprehensive guides, builds, and strategies.',
    type: 'website',
  },
};

const characters = [
  {
    slug: 'regent',
    name: 'The Regent',
    emoji: '👑',
    type: 'Stars & Forge',
    difficulty: 'Advanced',
    description: 'A deposed ruler who commands loyal subjects even in exile. The Regent summons minions and uses royal decrees to control the battlefield. Master the Stars resource and Forge mechanics to create unstoppable combinations.',
    cards: 55,
    playstyle: 'Summon-based with Star resource management',
    bestFor: 'Players who enjoy complex resource management and minion armies',
  },
  {
    slug: 'ironclad',
    name: 'The Ironclad',
    emoji: '🛡️',
    type: 'Strength & Defense',
    difficulty: 'Beginner',
    description: 'A powerful warrior who sold his soul to harness demonic energies. The Ironclad specializes in Strength-based attacks and Block generation. Perfect for beginners learning the game.',
    cards: 75,
    playstyle: 'Strength scaling and exhaust synergies',
    bestFor: 'Beginners and players who prefer straightforward aggressive strategies',
  },
  {
    slug: 'silent',
    name: 'The Silent',
    emoji: '🗡️',
    type: 'Poison & Shivs',
    difficulty: 'Intermediate',
    description: 'A deadly huntress from the foglands. The Silent relies on Poison, Shivs, and careful card manipulation to dismantle enemies over time.',
    cards: 70,
    playstyle: 'Damage-over-time and discard synergies',
    bestFor: 'Players who enjoy strategic planning and combo execution',
  },
  {
    slug: 'defect',
    name: 'The Defect',
    emoji: '⚡',
    type: 'Orbs & Focus',
    difficulty: 'Advanced',
    description: 'A malfunctioning combat automaton that has gained sentience. The Defect harnesses Orbs to deal damage, gain Block, and generate Energy through Focus scaling.',
    cards: 65,
    playstyle: 'Orb management and passive effects',
    bestFor: 'Players who enjoy complex mechanics and late-game scaling',
  },
  {
    slug: 'necrobinder',
    name: 'The Necrobinder',
    emoji: '💀',
    type: 'Doom & Souls',
    difficulty: 'Intermediate',
    description: 'A mysterious practitioner of forbidden soul magic. The Necrobinder binds defeated spirits to their will, using Doom to execute enemies and Summon to command undead minions.',
    cards: 50,
    playstyle: 'Doom stacking and Summon mechanics',
    bestFor: 'Players who enjoy high-risk, high-reward strategies',
  },
];

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

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
            <Link
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
            </Link>
          ))}
        </div>

        {/* SEO Content Section */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Character Selection Guide</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-slate-300 mb-4">
              Choosing the right character in Slay the Spire 2 is crucial for your success. Each character offers 
              a completely different playstyle with unique mechanics that fundamentally change how you approach each run.
            </p>
            <h3 className="text-xl font-bold text-purple-400 mt-6 mb-3">For Beginners</h3>
            <p className="text-slate-300 mb-4">
              If you're new to Slay the Spire 2, start with <Link href="/characters/ironclad" className="text-purple-400 hover:text-purple-300">The Ironclad</Link>. 
              His straightforward Strength scaling and defensive capabilities make him the most forgiving character for learning the game's mechanics.
            </p>
            <h3 className="text-xl font-bold text-purple-400 mt-6 mb-3">For Experienced Players</h3>
            <p className="text-slate-300 mb-4">
              Veterans seeking new challenges should try <Link href="/characters/regent" className="text-purple-400 hover:text-purple-300">The Regent</Link> or 
              <Link href="/characters/defect" className="text-purple-400 hover:text-purple-300 ml-1">The Defect</Link>. 
              Both characters offer complex resource management systems that reward deep strategic thinking.
            </p>
            <h3 className="text-xl font-bold text-purple-400 mt-6 mb-3">Character Mechanics Overview</h3>
            <ul className="text-slate-300 space-y-2 mb-4">
              <li>• <strong>The Regent:</strong> Stars resource + Forge system for permanent upgrades</li>
              <li>• <strong>The Ironclad:</strong> Strength scaling + Exhaust synergies</li>
              <li>• <strong>The Silent:</strong> Poison DoT + Shiv generation + Discard synergies</li>
              <li>• <strong>The Defect:</strong> Orb management + Focus scaling</li>
              <li>• <strong>The Necrobinder:</strong> Doom execution + Summon mechanics</li>
            </ul>
            <p className="text-slate-300">
              For detailed guides on each character, including recommended builds, key cards, and relic synergies, 
              visit the individual character pages linked above.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 bg-white/5 border border-white/10 rounded-2xl p-6">
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
