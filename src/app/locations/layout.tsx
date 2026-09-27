import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Display Network Locations — Screens by Venue | Mr. Ads',
  description:
    'Digital screens in restaurants, apartment lobbies, corporate tech parks, malls, gyms, play zones and PG hostels. Explore the Mr. Ads hyperlocal display network.',
  alternates: { canonical: '/locations' },
};

export default function LocationsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
