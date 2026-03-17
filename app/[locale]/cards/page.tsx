import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Slay the Spire 2 Cards - Complete 577+ Card Database',
  description: 'Browse all 577+ cards in Slay the Spire 2. Filter by character, type, rarity, and cost. Complete card guides with synergies and strategies.',
  keywords: 'slay the spire 2 cards, card database, card tier list, best cards, rare cards',
  openGraph: {
    title: 'Slay the Spire 2 Cards | 577+ Card Database',
    description: 'Complete card database with filters and guides.',
    type: 'website',
  },
};

const cardCategories = [
  { name: 'All Cards', count: '577+', href: '/cards', emoji: '🎴' },
  { name: 'Ironclad Cards', count: '75+', href: '/cards?character=ironclad', emoji: '🛡️' },
  { name: 'Silent Cards', count: '70+', href: '/cards?character=silent', emoji: '🗡️' },
  { name: 'Defect Cards', count: '65+', href: '/cards?character=defect', emoji: '⚡' },
  { name: 'Regent Cards', count: '55+', href: '/cards?character=regent', emoji: '👑' },
  { name: 'Necrobinder Cards', count: '50+', href: '/cards?character=necrobinder', emoji: '💀' },
  { name: 'Colorless Cards', count: '50+', href: '/cards?rarity=colorless', emoji: '🌈' },
  { name: 'Curses', count: '20+', href: '/cards?type=curse', emoji: '💀' },
];

const rarityDistribution = [
  { rarity: 'Basic', count: 10, color: 'bg-gray-500', percentage: '2%' },
  { rarity: 'Starter', count: 20, color: 'bg-blue-500', percentage: '3%' },
  { rarity: 'Common', count: 350, color: 'bg-green-500', percentage: '61%' },
  { rarity: 'Uncommon', count: 150, color: 'bg-blue-400', percentage: '26%' },
  { rarity: 'Rare', count: 77, color: 'bg-purple-500', percentage: '13%' },
  { rarity: 'Ancient', count: 10, color: 'bg-yellow-500', percentage: '2%' },
  { rarity: 'Special', count: 30, color: 'bg-pink-500', percentage: '5%' },
];

export default function CardsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Slay the Spire 2 Cards Database
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Browse all 577+ cards. Filter by character, type, rarity, and cost to find the perfect cards for your build.
          </p>
        </div>

        {/* Card Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {cardCategories.map((cat) => (
            <a
              key={cat.name}
              href={cat.href}
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-purple-500/50 hover:bg-white/10 transition-all text-center"
            >
              <div className="text-4xl mb-3">{cat.emoji}</div>
              <h3 className="font-semibold text-white mb-1">{cat.name}</h3>
              <p className="text-purple-400 text-sm">{cat.count}</p>
            </a>
          ))}
        </div>

        {/* Rarity Distribution */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Card Rarity Distribution</h2>
          <div className="space-y-4">
            {rarityDistribution.map((item) => (
              <div key={item.rarity}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-300">{item.rarity}</span>
                  <span className="text-slate-400 text-sm">{item.count} cards ({item.percentage})</span>
                </div>
                <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                  <div className={`h-full ${item.color} rounded-full`} style={{ width: item.percentage }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Tips */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-white mb-6">Card Selection Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-purple-400 mb-3">Early Game (Act 1)</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• Focus on removing Strike and Defend</li>
                <li>• Pick 1-2 core cards for your build</li>
                <li>• Don't over-expand your deck</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-purple-400 mb-3">Late Game (Act 3+)</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• Maximize your scaling potential</li>
                <li>• Add finishers and burst damage</li>
                <li>• Ensure you have enough defense</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
