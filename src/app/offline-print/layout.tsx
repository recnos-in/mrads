import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Offline & Print Distribution — Flyers and Inserts | Mr. Ads',
  description:
    'Supervised flyer and insert distribution into metro stations, gated societies, malls and local markets. Area-level print reach planned and audited by Mr. Ads.',
  alternates: { canonical: '/offline-print' },
};

export default function OfflinePrintLayout({ children }: { children: React.ReactNode }) {
  return children;
}
