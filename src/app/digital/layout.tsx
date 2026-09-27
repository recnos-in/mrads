import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Website, Development & AI Solutions | Mr. Ads',
  description:
    'Websites, e-commerce, automation and AI built to convert the local demand your offline campaign creates. Pair media with digital infrastructure from Mr. Ads.',
  alternates: { canonical: '/digital' },
};

export default function DigitalLayout({ children }: { children: React.ReactNode }) {
  return children;
}
