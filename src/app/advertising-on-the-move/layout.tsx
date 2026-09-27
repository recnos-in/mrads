import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Advertising on the Move — Transit & Fleet Branding | Mr. Ads',
  description:
    'Auto, cab, bus and mobile van branding that carries your brand through neighbourhood lanes and commercial corridors. Plan an on-the-move campaign with Mr. Ads.',
  alternates: { canonical: '/advertising-on-the-move' },
};

export default function AdvertisingOnTheMoveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
