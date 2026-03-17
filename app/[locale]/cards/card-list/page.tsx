import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Slay the Spire 2 Card List - Complete Database of All 577+ Cards',
  description: 'Complete list of all 577+ cards in Slay the Spire 2. Search and filter by character, type, rarity, and cost. Detailed card descriptions and synergies.',
  keywords: 'slay the spire 2 card list, all cards sts2, slay the spire 2 cards database, card search sts2',
  openGraph: {
    title: 'Slay the Spire 2 Card List | All 577+ Cards',
    description: 'Search and filter through every card in the game.',
    type: 'website',
  },
};

// Sample cards for demonstration (in production, this would come from a database)
const sampleCards = [
  { name: 'Strike', character: 'All', type: 'Attack', rarity: 'Basic', cost: 1, description: 'Deal 6 damage.' },
  { name: 'Defend', character: 'All', type: 'Skill', rarity: 'Basic', cost: 1, description: 'Gain 5 Block.' },
  { name: 'Inflame', character: 'Ironclad', type: 'Power', rarity: 'Uncommon', cost: 1, description: 'Gain 2 Strength.' },
  { name: 'Limit Break', character: 'Ironclad', type: 'Skill', rarity: 'Uncommon', cost: 1, description: 'Double your Strength. Exhaust.' },
  { name: 'Catalyst', character: 'Silent', type: 'Skill', rarity: 'Rare', cost: 2, description: 'Double Poison on enemy. Exhaust.' },
  { name: 'Accuracy', character: 'Silent', type: 'Power', rarity: 'Uncommon', cost: 1, description: 'Shivs deal 4 additional damage.' },
  { name: 'Claw', character: 'Defect', type: 'Attack', rarity: 'Common', cost: 0, description: 'Deal 3 damage. Increase ALL Claw damage by 2 this combat.' },
  { name: 'Genesis', character: 'Regent', type: 'Power', rarity: 'Rare', cost: 2, description: 'At the start of your turn, gain 3 Stars.' },
  { name: 'Sovereign Blade', character: 'Regent', type: 'Attack', rarity: 'Special', cost: 2, description: 'Deal 10 damage. Retain.' },
  { name: 'End of Days', character: 'Necrobinder', type: 'Skill', rarity: 'Rare', cost: 3, description: 'Apply 29 Doom to ALL enemies. Kill enemies with Doom ≥ HP.' },
];

const filters = [
  { name: 'All Characters', value: 'all', count: '577+' },
  { name: 'Ironclad', value: 'ironclad', count: '75+' },
  { name: 'Silent', value: 'silent', count: '70+' },
  { name: 'Defect', value: 'defect', count: '65+' },
  { name: 'Regent', value: 'regent', count: '55+' },
  { name: 'Necrobinder', value: 'necrobinder', count: '50+' },
  { name: 'Colorless', value: 'colorless', count: '50+' },
];

const types = [
  { name: 'All Types', value: 'all', count: '577+' },
  { name: 'Attack', value: 'attack', count: '280+' },
  { name: 'Skill', value: 'skill', count: '220+' },
  { name: 'Power', value: 'power', count: '77+' },
  { name: 'Status', value: 'status', count: '30+' },
  { name: 'Curse', value: 'curse', count: '20+' },
];

export default function CardListPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <Link href="/cards" className="text-purple-400 hover:text-purple-300">← Back to Cards</Link>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Slay the Spire 2 Card List
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Complete database of all 577+ cards. Search, filter, and discover the perfect cards for your build.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-12">
          <h2 className="text-xl font-bold text-white mb-4">Filters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-semibold text-purple-400 mb-3">Character</h3>
              <div className="flex flex-wrap gap-2">
                {filters.map((filter) => (
                  <button
                    key={filter.value}
                    className="px-3 py-1.5 bg-purple-500/20 border border-purple-500/30 rounded-lg text-purple-300 text-sm hover:bg-purple-500/30 transition"
                  >
                    {filter.name} ({filter.count})
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-purple-400 mb-3">Type</h3>
              <div className="flex flex-wrap gap-2">
                {types.map((type) => (
                  <button
                    key={type.value}
                    className="px-3 py-1.5 bg-purple-500/20 border border-purple-500/30 rounded-lg text-purple-300 text-sm hover:bg-purple-500/30 transition"
                  >
                    {type.name} ({type.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Card List */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-12">
          <h2 className="text-xl font-bold text-white mb-6">Sample Cards</h2>
          <div className="space-y-4">
            {sampleCards.map((card) => (
              <div
                key={card.name}
                className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-purple-500/50 transition-all"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{card.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-slate-400 mb-2">
                      <span className="px-2 py-0.5 bg-purple-500/20 border border-purple-500/30 rounded text-xs">
                        {card.character}
                      </span>
                      <span className="px-2 py-0.5 bg-blue-500/20 border border-blue-500/30 rounded text-xs">
                        {card.type}
                      </span>
                      <span className={`px-2 py-0.5 rounded text-xs ${
                        card.rarity === 'Basic' ? 'bg-gray-500/20 border border-gray-500/30 text-gray-400' :
                        card.rarity === 'Common' ? 'bg-green-500/20 border border-green-500/30 text-green-400' :
                        card.rarity === 'Uncommon' ? 'bg-blue-500/20 border border-blue-500/30 text-blue-400' :
                        card.rarity === 'Rare' ? 'bg-purple-500/20 border border-purple-500/30 text-purple-400' :
                        'bg-yellow-500/20 border border-yellow-500/30 text-yellow-400'
                      }`}>
                        {card.rarity}
                      </span>
                      <span>Cost: {card.cost}</span>
                    </div>
                    <p className="text-slate-300 text-sm">{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-400 text-sm mt-6 text-center">
            Showing 10 of 577+ cards. Full database with search and advanced filters coming soon.
          </p>
        </div>

        {/* SEO Content */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">How to Use the Card Database</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-slate-300 mb-4">
              The Slay the Spire 2 card database contains all <strong className="text-purple-400">577+ cards</strong> in 
              the game, organized by character, type, and rarity. Use the filters above to find cards for your specific 
              build or to explore new synergies.
            </p>
            <h3 className="text-xl font-bold text-purple-400 mt-6 mb-3">Filter by Character</h3>
            <p className="text-slate-300 mb-4">
              Each character has a unique card pool. <Link href="/characters/ironclad" className="text-purple-400 hover:text-purple-300">The Ironclad</Link> focuses 
              on Strength and Exhaust, <Link href="/characters/silent" className="text-purple-400 hover:text-purple-300">The Silent</Link> on 
              Poison and Shivs, <Link href="/characters/defect" className="text-purple-400 hover:text-purple-300">The Defect</Link> on 
              Orbs and Focus, <Link href="/characters/regent" className="text-purple-400 hover:text-purple-300">The Regent</Link> on 
              Stars and Forge, and <Link href="/characters/necrobinder" className="text-purple-400 hover:text-purple-300">The Necrobinder</Link> on 
              Doom and Summon.
            </p>
            <h3 className="text-xl font-bold text-purple-400 mt-6 mb-3">Understanding Rarity</h3>
            <p className="text-slate-300">
              Card rarity affects drop rates and power level. <strong className="text-green-400">Common</strong> cards 
              form the backbone of most decks, <strong className="text-blue-400">Uncommon</strong> cards provide key 
              synergies, and <strong className="text-purple-400">Rare</strong> cards often define entire archetypes. 
              Plan your deck around 1-2 Rare cards maximum for consistency.
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex flex-wrap gap-4">
          <Link href="/cards" className="px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-lg text-purple-300 hover:bg-purple-600/30 transition">
            ← Cards Home
          </Link>
          <Link href="/cards/tier-list" className="px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-lg text-purple-300 hover:bg-purple-600/30 transition">
            🏆 Tier List
          </Link>
          <Link href="/builds" className="px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-lg text-purple-300 hover:bg-purple-600/30 transition">
            📚 Recommended Builds
          </Link>
        </div>
      </div>
    </div>
  );
}
