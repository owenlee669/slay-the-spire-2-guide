import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Slay the Spire 2 Wiki - Complete Guide, Cards, Characters & Builds',
  description: 'The most comprehensive Slay the Spire 2 Wiki. 577+ cards, 24 relics, 63 potions. Characters: The Ironclad, The Silent, The Defect, The Regent, The Necrobinder. Guides, builds, tier lists and more.',
  keywords: 'Slay the Spire 2, STS2, Wiki, guide, cards, relics, characters, 杀戮尖塔 2, 攻略，卡牌，遗物',
  openGraph: {
    title: 'Slay the Spire 2 Wiki | Complete Guide',
    description: '577+ cards, 24 relics, 63 potions. Complete character guides, builds, and tier lists.',
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
  twitter: {
    card: 'summary_large_image',
    title: 'Slay the Spire 2 Wiki',
    description: '577+ cards, 24 relics, 63 potions. Complete character guides, builds, and tier lists.',
    images: ['/images/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://slaythespire2.info',
    languages: {
      'en': 'https://slaythespire2.info/en',
      'zh': 'https://slaythespire2.info/zh',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
