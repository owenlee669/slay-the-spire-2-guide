import { Metadata } from 'next';
import Link from 'next/link';
import { LOCALES } from '@/i18n/routing';

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: 'Slay the Spire 2 Cards - Complete 577+ Card Database & Tier List',
  description: 'Browse all 577+ cards in Slay the Spire 2. Filter by character, type, rarity, and cost. Complete card guides with synergies, strategies, and tier rankings.',
  keywords: 'slay the spire 2 cards, slay the spire 2 card database, slay the spire 2 card list, slay the spire 2 card tier list, best cards sts2',
  openGraph: {
    title: 'Slay the Spire 2 Cards | 577+ Card Database',
    description: 'Complete card database with filters, tier lists, and strategy guides.',
    type: 'website',
  },
};

const cardCategories = [
  { name: 'All Cards', count: '577+', href: '/cards/card-list', emoji: '🎴', description: 'Browse every card in the game' },
  { name: 'Tier List', count: 'Ranked', href: '/cards/tier-list', emoji: '🏆', description: 'Community-voted rankings' },
  { name: 'Ironclad', count: '75+', href: '/cards?character=ironclad', emoji: '🛡️', description: 'Strength & Defense cards' },
  { name: 'Silent', count: '70+', href: '/cards?character=silent', emoji: '🗡️', description: 'Poison & Shiv cards' },
  { name: 'Defect', count: '65+', href: '/cards?character=defect', emoji: '⚡', description: 'Orb & Focus cards' },
  { name: 'Regent', count: '55+', href: '/cards?character=regent', emoji: '👑', description: 'Stars & Forge cards' },
  { name: 'Necrobinder', count: '50+', href: '/cards?character=necrobinder', emoji: '💀', description: 'Doom & Soul cards' },
  { name: 'Colorless', count: '50+', href: '/cards?rarity=colorless', emoji: '🌈', description: 'Universal cards' },
];

const rarityBreakdown = [
  { rarity: 'Basic', count: 10, percentage: '2%', color: 'from-gray-400 to-gray-600' },
  { rarity: 'Starter', count: 20, percentage: '3%', color: 'from-blue-400 to-blue-600' },
  { rarity: 'Common', count: 350, percentage: '61%', color: 'from-green-400 to-green-600' },
  { rarity: 'Uncommon', count: 150, percentage: '26%', color: 'from-blue-400 to-blue-500' },
  { rarity: 'Rare', count: 77, percentage: '13%', color: 'from-purple-400 to-purple-600' },
  { rarity: 'Ancient', count: 10, percentage: '2%', color: 'from-yellow-400 to-yellow-600' },
  { rarity: 'Special', count: 30, percentage: '5%', color: 'from-pink-400 to-pink-600' },
];

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

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

        {/* Card Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {cardCategories.map((cat) => (
            <Link
              key={cat.name}
              href={cat.href}
              className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 hover:bg-white/10 transition-all"
            >
              <div className="text-4xl mb-3">{cat.emoji}</div>
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-purple-400 transition">
                {cat.name}
              </h3>
              <p className="text-purple-400 text-sm mb-2">{cat.count}</p>
              <p className="text-slate-400 text-xs">{cat.description}</p>
            </Link>
          ))}
        </div>

        {/* Rarity Distribution */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Card Rarity Distribution</h2>
          <div className="space-y-4">
            {rarityBreakdown.map((item) => (
              <div key={item.rarity}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-300">{item.rarity}</span>
                  <span className="text-slate-400 text-sm">{item.count} cards ({item.percentage})</span>
                </div>
                <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                  <div className={`h-full bg-gradient-to-r ${item.color} rounded-full`} style={{ width: item.percentage }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Tips */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Card Selection Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-purple-400 mb-3">🎯 Early Game (Act 1)</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• Focus on removing Strike and Defend</li>
                <li>• Pick 1-2 core cards for your build</li>
                <li>• Don't over-expand your deck (15-20 cards ideal)</li>
                <li>• Prioritize damage and Block sources</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-purple-400 mb-3">⚡ Mid Game (Act 2)</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• Add scaling cards (Strength, Poison, Focus)</li>
                <li>• Look for key synergies</li>
                <li>• Prioritize relics that complement your build</li>
                <li>• Start removing weak cards</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-purple-400 mb-3">🔥 Late Game (Act 3+)</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• Maximize your scaling potential</li>
                <li>• Add finishers and burst damage</li>
                <li>• Ensure you have enough defense</li>
                <li>• Quality over quantity (10-15 cards ideal)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* SEO Content */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">About Slay the Spire 2 Cards</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-slate-300 mb-4">
              Slay the Spire 2 features <strong className="text-purple-400">577+ unique cards</strong> across 5 characters, 
              each with distinct mechanics and playstyles. Understanding card synergies, rarity distribution, and 
              character-specific strategies is essential for climbing Ascension levels.
            </p>
            <p className="text-slate-300 mb-4">
              Cards are divided into several categories: <strong>Attack</strong> (deal damage), 
              <strong>Skill</strong> (provide Block or utility), <strong>Power</strong> (permanent buffs), 
              and special types like <strong>Status</strong> and <strong>Curse</strong> cards.
            </p>
            <h3 className="text-xl font-bold text-purple-400 mt-6 mb-3">Card Rarity System</h3>
            <p className="text-slate-300 mb-4">
              Understanding rarity is crucial for deck building. <strong className="text-green-400">Common</strong> cards 
              (61% of the pool) form the backbone of most decks. <strong className="text-blue-400">Uncommon</strong> cards 
              (26%) provide key synergies, while <strong className="text-purple-400">Rare</strong> cards (13%) 
              often define entire archetypes.
            </p>
            <p className="text-slate-300">
              For detailed card lists with filters and search functionality, visit our 
              <Link href="/cards/card-list" className="text-purple-400 hover:text-purple-300 ml-1">Card List</Link> page, 
              or check the <Link href="/cards/tier-list" className="text-purple-400 hover:text-purple-300 ml-1">Tier List</Link> for 
              community-voted rankings.
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex flex-wrap gap-4">
          <Link href="/cards/card-list" className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
            🎴 Browse All Cards
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
