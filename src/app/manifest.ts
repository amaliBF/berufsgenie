import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Berufsgenie – Traumjob per Swipe',
    short_name: 'Berufsgenie',
    description:
      'Finde deinen Traumjob per Swipe-Matching. Echte Videos von Arbeitgebern, KI-Berufsfinder und Direkt-Chat.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#f59e0b',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '48x48',
        type: 'image/x-icon',
      },
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
