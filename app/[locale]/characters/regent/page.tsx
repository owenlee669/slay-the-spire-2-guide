import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The Regent Guide - Slay the Spire 2 Character Build & Strategy',
  description: 'Complete guide for The Regent in Slay the Spire 2. Learn Stars & Forge mechanics, best cards, recommended builds, and winning strategies for all Ascension levels.',
  keywords: 'slay the spire 2 regent, regent guide, regent build, slay the spire 2 stars, slay the spire 2 forge, regent best cards',
  openGraph: {
    title: 'The Regent Guide | Slay the Spire 2',
    description: 'Master The Regent with our comprehensive guide covering Stars, Forge, and minion strategies.',
    type: 'website',
  },
};

export default function RegentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <Link href="/characters" className="text-purple-400 hover:text-purple-300">← Back to Characters</Link>
        </nav>

        {/* Hero */}
        <div className="flex items-center gap-6 mb-12">
          <div className="text-8xl">👑</div>
          <div>
            <h1 className="text-5xl font-bold text-white mb-2">The Regent</h1>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300">
                Stars & Forge
              </span>
              <span className="px-3 py-1 bg-red-500/20 border border-red-500/30 rounded-full text-red-400">
                Advanced
              </span>
            </div>
          </div>
        </div>

        {/* Overview */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Character Overview</h2>
          <p className="text-slate-300 mb-4">
            The Regent is a deposed ruler who commands loyal subjects even in exile. This advanced character 
            introduces two unique mechanics: <strong className="text-purple-400">Stars</strong> (a resource system) 
            and <strong className="text-purple-400">Forge</strong> (permanent card upgrades).
          </p>
          <p className="text-slate-300">
            Master the Regent requires careful resource management and long-term planning. 
            Your goal is to build a Star engine that generates enough resources to fuel powerful abilities 
            while using Forge to create and upgrade the legendary Sovereign Blade weapon.
          </p>
        </div>

        {/* Key Mechanics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">⭐ Stars Mechanic</h3>
            <p className="text-slate-300 mb-4">
              Stars are The Regent's unique resource, generated at the start of each turn and through 
              specific cards. Spend Stars to activate powerful abilities and summon minions.
            </p>
            <ul className="text-slate-300 space-y-2">
              <li>• Gain 3 Stars at the start of each turn</li>
              <li>• Cards can generate additional Stars</li>
              <li>• Spend Stars to summon minions and activate abilities</li>
              <li>• Unused Stars are lost at the end of turn</li>
            </ul>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">⚒️ Forge Mechanic</h3>
            <p className="text-slate-300 mb-4">
              Forge allows you to permanently upgrade cards during combat. The signature Forge target 
              is Sovereign Blade, a powerful 2-cost weapon that grows stronger throughout the run.
            </p>
            <ul className="text-slate-300 space-y-2">
              <li>• Forge cards to create permanent upgrades</li>
              <li>• Sovereign Blade is the primary Forge target</li>
              <li>• Upgraded cards gain Retain and enhanced effects</li>
              <li>• Forge synergizes with Star generation</li>
            </ul>
          </div>
        </div>

        {/* Best Cards */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Best Cards for The Regent</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold text-purple-400 mb-3">Star Generation</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• <strong>Genesis</strong> - Gain Stars at start of turn</li>
                <li>• <strong>Orbit</strong> - Convert card plays into Stars</li>
                <li>• <strong>Hidden Cache</strong> - Gain Stars over multiple turns</li>
                <li>• <strong>Royal Gamble</strong> - High-risk Star generation</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-purple-400 mb-3">Forge Targets</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• <strong>Sovereign Blade</strong> - Primary Forge weapon</li>
                <li>• <strong>Furnace</strong> - Passive Star generation</li>
                <li>• <strong>Refine Blade</strong> - Early game Forge option</li>
                <li>• <strong>Hammer Time</strong> - Amplifies Forge effects</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Recommended Build */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Recommended Build: Stars Engine</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-slate-300 mb-4">
              The Stars Engine build focuses on generating massive amounts of Stars each turn to fuel 
              powerful abilities and minion summons. This is The Regent's signature archetype.
            </p>
            <h3 className="text-xl font-bold text-purple-400 mt-6 mb-3">Core Strategy</h3>
            <ul className="text-slate-300 space-y-2 mb-4">
              <li>1. Prioritize Star generation cards early (Genesis, Orbit)</li>
              <li>2. Build around Sovereign Blade as your primary damage source</li>
              <li>3. Use Forge cards to upgrade key pieces</li>
              <li>4. Add minion cards to benefit from Star spending</li>
              <li>5. Include card draw to maintain consistency</li>
            </ul>
            <h3 className="text-xl font-bold text-purple-400 mt-6 mb-3">Key Relics</h3>
            <ul className="text-slate-300 space-y-2">
              <li>• <strong>Divine Right</strong> - Start with 3 Stars each combat</li>
              <li>• <strong>Divine Destiny</strong> - Start with 6 Stars each combat</li>
              <li>• <strong>Ice Cream</strong> - Preserve unused Stars</li>
              <li>• <strong>The Smith</strong> - Free Forge opportunities</li>
            </ul>
          </div>
        </div>

        {/* SEO Content */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">The Regent Strategy Guide</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-slate-300 mb-4">
              The Regent is one of the most complex characters in Slay the Spire 2, offering deep strategic 
              gameplay through the Stars and Forge mechanics. Success with The Regent requires understanding 
              resource management, timing, and long-term planning.
            </p>
            <h3 className="text-xl font-bold text-purple-400 mt-6 mb-3">Early Game (Act 1)</h3>
            <p className="text-slate-300 mb-4">
              Focus on acquiring Star generation cards and a reliable damage source. Sovereign Blade should 
              be your priority pickup if available. Don't over-invest in minions early—they become powerful 
              later but are weak without Star support.
            </p>
            <h3 className="text-xl font-bold text-purple-400 mt-6 mb-3">Mid Game (Act 2)</h3>
            <p className="text-slate-300 mb-4">
              Start building your Star engine. Look for Genesis, Orbit, and other cards that generate multiple 
              Stars per turn. Begin using Forge to upgrade Sovereign Blade and other key cards.
            </p>
            <h3 className="text-xl font-bold text-purple-400 mt-6 mb-3">Late Game (Act 3)</h3>
            <p className="text-slate-300">
              Your Star engine should now generate 10+ Stars per turn. Use this to summon powerful minions 
              and activate game-ending abilities. A well-built Regent can achieve infinite combos with the 
              right card combinations.
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex flex-wrap gap-4">
          <Link href="/characters" className="px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-lg text-purple-300 hover:bg-purple-600/30 transition">
            ← All Characters
          </Link>
          <Link href="/builds" className="px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-lg text-purple-300 hover:bg-purple-600/30 transition">
            📚 View Builds
          </Link>
          <Link href="/cards" className="px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-lg text-purple-300 hover:bg-purple-600/30 transition">
            🎴 Card Database
          </Link>
        </div>
      </div>
    </div>
  );
}
