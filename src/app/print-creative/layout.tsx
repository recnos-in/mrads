import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Print & Creative Design Services | Mr. Ads',
  description:
    'Production-ready standees, posters, packaging and social artwork designed for each medium, so every placement stays visually consistent. Creative by Mr. Ads.',
  alternates: { canonical: '/print-creative' },
};

export default function PrintCreativeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
