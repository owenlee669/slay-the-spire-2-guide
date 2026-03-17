import { Metadata } from 'next';
import Link from 'next/link';
import { LOCALES } from '@/i18n/routing';

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: 'Slay the Spire 2 Wiki - Complete Guide, Cards, Characters & Builds',
  description: 'The most comprehensive Slay the Spire 2 Wiki. 577+ cards, 24 relics, 63 potions. Complete character guides for Ironclad, Silent, Defect, Regent, and Necrobinder.',
  keywords: 'slay the spire 2, slay the spire 2 wiki, slay the spire 2 guide, slay the spire 2 characters, slay the spire 2 cards, 杀戮尖塔 2',
  openGraph: {
    title: 'Slay the Spire 2 Wiki - Complete Guide',
    description: '577+ cards, 24 relics, 63 potions. Complete character guides and builds.',
    type: 'website',
    url: 'https://slaythespire2.info',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Slay the Spire 2 Wiki',
      },
    ],
  },
  alternates: {
    canonical: 'https://slaythespire2.info',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-24 text-center">
        <h1 className="text-5xl font-bold text-white sm:text-7xl mb-6">
          Slay the Spire 2 Wiki
        </h1>
        <p className="mx-auto max-w-3xl text-xl text-slate-300 mb-12">
          The most comprehensive guide to Slay the Spire 2. 
          Master all 5 characters, discover 577+ cards, and conquer the Spire with expert builds and strategies.
        </p>

        {/* Quick Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <Link
            href="/characters"
            className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-purple-500/50 hover:bg-white/10 transition-all"
          >
            <div className="text-3xl mb-2">⚔️</div>
            <div className="text-lg font-bold text-white mb-1">Characters</div>
            <div className="text-slate-400 text-sm">5 Playable Heroes</div>
          </Link>
          <Link
            href="/cards"
            className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-purple-500/50 hover:bg-white/10 transition-all"
          >
            <div className="text-3xl mb-2">🎴</div>
            <div className="text-lg font-bold text-white mb-1">Cards</div>
            <div className="text-slate-400 text-sm">577+ Cards</div>
          </Link>
          <Link
            href="/builds"
            className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-purple-500/50 hover:bg-white/10 transition-all"
          >
            <div className="text-3xl mb-2">📚</div>
            <div className="text-lg font-bold text-white mb-1">Builds</div>
            <div className="text-slate-400 text-sm">11 Recommended</div>
          </Link>
          <Link
            href="/stats"
            className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-purple-500/50 hover:bg-white/10 transition-all"
          >
            <div className="text-3xl mb-2">📊</div>
            <div className="text-lg font-bold text-white mb-1">Stats</div>
            <div className="text-slate-400 text-sm">Player Data</div>
          </Link>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="text-3xl font-bold text-purple-400 mb-2">577+</div>
            <div className="text-slate-400 text-sm">Total Cards</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="text-3xl font-bold text-purple-400 mb-2">24</div>
            <div className="text-slate-400 text-sm">Relics</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="text-3xl font-bold text-purple-400 mb-2">63</div>
            <div className="text-slate-400 text-sm">Potions</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="text-3xl font-bold text-purple-400 mb-2">5</div>
            <div className="text-slate-400 text-sm">Characters</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="text-3xl font-bold text-purple-400 mb-2">139</div>
            <div className="text-slate-400 text-sm">Enemies</div>
          </div>
        </div>

        {/* Characters Preview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Playable Characters</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <Link href="/characters/regent" className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 hover:bg-white/10 transition-all">
              <div className="text-5xl mb-4">👑</div>
              <h3 className="text-xl font-bold text-white mb-2">The Regent</h3>
              <p className="text-slate-400 text-sm">Stars & Forge</p>
            </Link>
            <Link href="/characters/ironclad" className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 hover:bg-white/10 transition-all">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-white mb-2">The Ironclad</h3>
              <p className="text-slate-400 text-sm">Strength & Defense</p>
            </Link>
            <Link href="/characters/silent" className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 hover:bg-white/10 transition-all">
              <div className="text-5xl mb-4">🗡️</div>
              <h3 className="text-xl font-bold text-white mb-2">The Silent</h3>
              <p className="text-slate-400 text-sm">Poison & Shivs</p>
            </Link>
            <Link href="/characters/defect" className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 hover:bg-white/10 transition-all">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-2">The Defect</h3>
              <p className="text-slate-400 text-sm">Orbs & Focus</p>
            </Link>
            <Link href="/characters/necrobinder" className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 hover:bg-white/10 transition-all">
              <div className="text-5xl mb-4">💀</div>
              <h3 className="text-xl font-bold text-white mb-2">The Necrobinder</h3>
              <p className="text-slate-400 text-sm">Doom & Souls</p>
            </Link>
          </div>
        </div>

        {/* SEO Content Section */}
        <div className="text-left bg-white/5 border border-white/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">About Slay the Spire 2</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-slate-300 mb-4">
              Slay the Spire 2 is the highly anticipated sequel to the critically acclaimed roguelike deck-building game. 
              With <strong className="text-purple-400">5 playable characters</strong>, <strong className="text-purple-400">577+ cards</strong>, 
              and countless build possibilities, STS2 offers endless replayability for both newcomers and veterans.
            </p>
            <p className="text-slate-300 mb-4">
              This wiki provides comprehensive guides for all characters including 
              <Link href="/characters/regent" className="text-purple-400 hover:text-purple-300 ml-1">The Regent</Link>, 
              <Link href="/characters/ironclad" className="text-purple-400 hover:text-purple-300 ml-1">The Ironclad</Link>, 
              <Link href="/characters/silent" className="text-purple-400 hover:text-purple-300 ml-1">The Silent</Link>, 
              <Link href="/characters/defect" className="text-purple-400 hover:text-purple-300 ml-1">The Defect</Link>, and 
              <Link href="/characters/necrobinder" className="text-purple-400 hover:text-purple-300 ml-1">The Necrobinder</Link>.
            </p>
            <p className="text-slate-300">
              Whether you're looking for <Link href="/cards" className="text-purple-400 hover:text-purple-300">card databases</Link>, 
              <Link href="/builds" className="text-purple-400 hover:text-purple-300">recommended builds</Link>, or 
              <Link href="/stats" className="text-purple-400 hover:text-purple-300">player statistics</Link>, 
              you'll find everything you need to conquer the Spire.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 border-t border-white/10">
        <div className="text-center text-slate-500 text-sm">
          <p>© 2025 Slay the Spire 2 Wiki. All game content belongs to Mega Crit Games.</p>
        </div>
      </footer>
    </div>
  );
}
