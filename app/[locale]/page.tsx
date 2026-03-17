import Link from "next/link";
import { Metadata } from "next";
import { useTranslation } from "@/i18n";

export const metadata: Metadata = {
  title: "Slay the Spire 2 Wiki - Complete Guide, Cards, Characters & Builds",
  description: "The most comprehensive Slay the Spire 2 Wiki. 577+ cards, 24 relics, 63 potions. Characters: The Ironclad, The Silent, The Defect, The Regent, The Necrobinder. Guides, builds, tier lists and more.",
  keywords: "Slay the Spire 2, STS2, Wiki, guide, cards, relics, characters, 杀戮尖塔 2, 攻略，卡牌，遗物",
  openGraph: {
    title: "Slay the Spire 2 Wiki | Complete Guide",
    description: "577+ cards, 24 relics, 63 potions. Complete character guides, builds, and tier lists.",
    type: "website",
  },
};

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const { t } = await useTranslation(locale, "common");

  const characters = [
    { name: "Ironclad", emoji: "🛡️", type: "Strength & Defense", href: "/characters/ironclad" },
    { name: "Silent", emoji: "🗡️", type: "Poison & Shivs", href: "/characters/silent" },
    { name: "Defect", emoji: "⚡", type: "Orbs & Focus", href: "/characters/defect" },
    { name: "Regent", emoji: "👑", type: "Stars & Forge", href: "/characters/regent" },
    { name: "Necrobinder", emoji: "💀", type: "Doom & Souls", href: "/characters/necrobinder" },
  ];

  const stats = [
    { label: "Cards", value: "577+", href: "/cards" },
    { label: "Relics", value: "24", href: "/relics" },
    { label: "Potions", value: "63", href: "/potions" },
    { label: "Enemies", value: "139", href: "/enemies" },
    { label: "Events", value: "24", href: "/events" },
    { label: "Builds", value: "11", href: "/builds" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-24 text-center">
        <h1 className="text-5xl font-bold text-white sm:text-7xl mb-6">
          Slay the Spire 2 Wiki
        </h1>
        <p className="mx-auto max-w-3xl text-xl text-slate-300 mb-12">
          The most comprehensive guide to Slay the Spire 2. 
          Master all 5 characters, discover 577+ cards, and conquer the Spire with our expert builds and strategies.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {stats.map((stat) => (
            <Link
              key={stat.label}
              href={stat.href}
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-purple-500/50 hover:bg-white/10 transition-all"
            >
              <div className="text-3xl font-bold text-purple-400 mb-2">{stat.value}</div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </Link>
          ))}
        </div>

        {/* Characters Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Playable Characters</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {characters.map((char) => (
              <Link
                key={char.name}
                href={char.href}
                className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 hover:bg-white/10 transition-all"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition">{char.emoji}</div>
                <h3 className="text-xl font-bold text-white mb-2">{char.name}</h3>
                <p className="text-slate-400 text-sm">{char.type}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="/builds"
            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 hover:bg-white/10 transition-all"
          >
            <div className="text-3xl mb-4">📚</div>
            <h3 className="text-xl font-bold text-white mb-2">Deck Builds</h3>
            <p className="text-slate-400">11 recommended builds for all characters</p>
          </Link>
          <Link
            href="/guides"
            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 hover:bg-white/10 transition-all"
          >
            <div className="text-3xl mb-4">📖</div>
            <h3 className="text-xl font-bold text-white mb-2">Strategy Guides</h3>
            <p className="text-slate-400">24 guides from beginner to advanced</p>
          </Link>
          <Link
            href="/tier-list"
            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 hover:bg-white/10 transition-all"
          >
            <div className="text-3xl mb-4">🏆</div>
            <h3 className="text-xl font-bold text-white mb-2">Tier List</h3>
            <p className="text-slate-400">Community-voted rankings</p>
          </Link>
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
