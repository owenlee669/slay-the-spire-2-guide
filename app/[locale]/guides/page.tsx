import { Metadata } from 'next';
import { LOCALES } from '@/i18n/routing';

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: 'Slay the Spire 2 Guides - Beginner to Ascension 20 Strategy',
  description: '24 comprehensive strategy guides for Slay the Spire 2. From beginner basics to advanced Ascension 20 tactics.',
  keywords: 'slay the spire 2 guides, beginner guide, ascension guide, strategy guide, gameplay guide',
  openGraph: {
    title: 'Slay the Spire 2 Guides | Strategy & Tips',
    description: '24 guides from beginner to Ascension 20.',
    type: 'website',
  },
};

const guides = [
  {
    category: 'Beginner Guides',
    icon: '🎯',
    items: [
      { title: 'Beginner\'s Guide', desc: 'Everything you need to know for your first runs', href: '/guides/beginners-guide', time: '15 min' },
      { title: 'Game Controls & UI', desc: 'Learn the interface and keyboard shortcuts', href: '/guides/controls', time: '5 min' },
      { title: 'First 10 Runs', desc: 'What to focus on in your first 10 runs', href: '/guides/first-runs', time: '10 min' },
    ],
  },
  {
    category: 'Character Guides',
    icon: '⚔️',
    items: [
      { title: 'Ironclad Guide', desc: 'Master Strength and Exhaust mechanics', href: '/guides/ironclad', time: '20 min' },
      { title: 'Silent Guide', desc: 'Poison, Shivs, and discard synergies', href: '/guides/silent', time: '20 min' },
      { title: 'Defect Guide', desc: 'Orbs, Focus, and status cards', href: '/guides/defect', time: '20 min' },
      { title: 'Regent Guide', desc: 'Stars and Forge mechanics', href: '/guides/regent', time: '20 min' },
      { title: 'Necrobinder Guide', desc: 'Doom, Souls, and Summon strategies', href: '/guides/necrobinder', time: '20 min' },
    ],
  },
  {
    category: 'Advanced Guides',
    icon: '🏆',
    items: [
      { title: 'Ascension Guide', desc: 'Climb from A1 to A20', href: '/guides/ascension', time: '30 min' },
      { title: 'Card Selection', desc: 'When to pick, skip, and remove cards', href: '/guides/card-selection', time: '15 min' },
      { title: 'Relic Priorities', desc: 'Best relics for each character', href: '/guides/relics', time: '25 min' },
    ],
  },
  {
    category: 'Mechanics Guides',
    icon: '📖',
    items: [
      { title: 'Doom Mechanic', desc: 'How Doom stacking works', href: '/guides/doom', time: '10 min' },
      { title: 'Sly Mechanic', desc: 'Master discard combos', href: '/guides/sly', time: '10 min' },
      { title: 'Enchantments', desc: 'Permanent card modifiers', href: '/guides/enchantments', time: '15 min' },
      { title: 'Act Boons', desc: 'All boon choices explained', href: '/guides/act-boons', time: '15 min' },
    ],
  },
];

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Slay the Spire 2 Strategy Guides
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            24 comprehensive guides from beginner basics to advanced Ascension 20 tactics.
          </p>
        </div>

        {/* Guides by Category */}
        <div className="space-y-12">
          {guides.map((section) => (
            <section key={section.category}>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{section.icon}</span>
                <h2 className="text-2xl font-bold text-white">{section.category}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.items.map((guide) => (
                  <a
                    key={guide.title}
                    href={guide.href}
                    className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 hover:bg-white/10 transition-all"
                  >
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition">
                      {guide.title}
                    </h3>
                    <p className="text-slate-400 text-sm mb-3">{guide.desc}</p>
                    <span className="text-slate-500 text-xs">{guide.time} read</span>
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
