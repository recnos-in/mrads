import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hyperlocal Advertising Solutions — One Media Partner | Mr. Ads',
  description:
    'Indoor screens, moving transit, doorstep print distribution, studio creative and web solutions combined under one hyperlocal campaign partner. See the Mr. Ads network.',
  alternates: { canonical: '/solutions' },
};

export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
