import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Mr. Ads — Request a Hyperlocal Media Plan',
  description:
    'Tell us who you need to reach, your target localities and your timeline. A senior Mr. Ads media planner responds with a customised hyperlocal media plan.',
  alternates: { canonical: '/contact' },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
