import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Slay the Spire 2 Tier List - Community Rankings',
  description: 'Community-voted tier list for Slay the Spire 2 cards, relics, and characters. Find the best cards for your builds.',
  keywords: 'slay the spire 2 tier list, card tier list, relic tier list, best cards, community rankings',
  openGraph: {
    title: 'Slay the Spire 2 Tier List | Community Rankings',
    description: 'Community-voted rankings for cards, relics, and characters.',
    type: 'website',
  },
};

const tierListData = {
  cards: [
    { tier: 'S', cards: ['Inflame', 'Limit Break', 'Catalyst', 'Accuracy', 'Claw', 'Genesis', 'End of Days'] },
    { tier: 'A', cards: ['Demon Form', 'Footwork', 'Defragment', 'Sovereign Blade', 'Time\'s Up', 'Orbit'] },
    { tier: 'B', cards: ['Heavy Blade', 'Deadly Poison', 'Cold Snap', 'Furnace', 'No Escape', 'The Sealed Throne'] },
    { tier: 'C', cards: ['Strike', 'Defend', 'Zap', 'Strike (Regent)', 'Strike (Necrobinder)'] },
  ],
  relics: [
    { tier: 'S', relics: ['Burning Blood', 'Ring of the Snake', 'Cracked Core', 'Divine Right', 'Bound Phylactery'] },
    { tier: 'A', relics: ['Black Blood', 'Ring of the Drake', 'Infused Core', 'Divine Destiny', 'Phylactery Unbound'] },
    { tier: 'B', relics: ['Akabeko', 'Anchor', 'Bag of Marbles', 'Vajra', 'Ornamental Fan'] },
  ],
};

export default function TierListPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Slay the Spire 2 Tier List
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Community-voted rankings for cards and relics. Updated regularly based on win rates and community feedback.
          </p>
        </div>

        {/* Card Tier List */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Card Tier List</h2>
          <div className="space-y-4">
            {tierListData.cards.map((tier) => (
              <div key={tier.tier} className="flex flex-col sm:flex-row gap-4">
                <div className={`w-full sm:w-24 h-24 rounded-xl bg-gradient-to-br ${
                  tier.tier === 'S' ? 'from-yellow-400 to-yellow-600' :
                  tier.tier === 'A' ? 'from-green-400 to-green-600' :
                  tier.tier === 'B' ? 'from-blue-400 to-blue-600' :
                  'from-gray-400 to-gray-600'
                } flex items-center justify-center text-4xl font-bold text-white shadow-lg`}>
                  {tier.tier}
                </div>
                <div className="flex-1 bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="flex flex-wrap gap-2">
                    {tier.cards.map((card) => (
                      <span
                        key={card}
                        className="px-3 py-1.5 bg-purple-500/20 border border-purple-500/30 rounded-lg text-purple-300 text-sm"
                      >
                        {card}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Relic Tier List */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Relic Tier List</h2>
          <div className="space-y-4">
            {tierListData.relics.map((tier) => (
              <div key={tier.tier} className="flex flex-col sm:flex-row gap-4">
                <div className={`w-full sm:w-24 h-24 rounded-xl bg-gradient-to-br ${
                  tier.tier === 'S' ? 'from-yellow-400 to-yellow-600' :
                  tier.tier === 'A' ? 'from-green-400 to-green-600' :
                  'from-blue-400 to-blue-600'
                } flex items-center justify-center text-4xl font-bold text-white shadow-lg`}>
                  {tier.tier}
                </div>
                <div className="flex-1 bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="flex flex-wrap gap-2">
                    {tier.relics.map((relic) => (
                      <span
                        key={relic}
                        className="px-3 py-1.5 bg-yellow-500/20 border border-yellow-500/30 rounded-lg text-yellow-300 text-sm"
                      >
                        {relic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Methodology */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-white mb-4">Ranking Methodology</h2>
          <ul className="space-y-2 text-slate-300">
            <li>• <strong>Win Rate:</strong> Consistency across multiple runs</li>
            <li>• <strong>Scaling:</strong> Late-game power and Ascension 20 viability</li>
            <li>• <strong>Flexibility:</strong> Adaptability to different relics and card pools</li>
            <li>• <strong>Early Game:</strong> Survivability in Acts 1-2</li>
            <li>• <strong>Community Votes:</strong> Based on player feedback and usage rates</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
