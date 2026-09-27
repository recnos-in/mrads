import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hyperlocal Advertising Pricing — Build a Media Plan | Mr. Ads',
  description:
    'Configure screens, transit routes and distribution volume to see what hyperlocal advertising costs, then request a detailed line-item media plan from Mr. Ads.',
  alternates: { canonical: '/pricing' },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
