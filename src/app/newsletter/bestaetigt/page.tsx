import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Search, BookOpen, Compass } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Newsletter bestätigt | Berufsgenie',
  description: 'Deine E-Mail-Adresse wurde erfolgreich bestätigt.',
  robots: { index: false },
};

const ctas = [
  {
    title: 'Stellen entdecken',
    description: 'Finde aktuelle Jobangebote in deiner Region.',
    href: '/stellen',
    icon: Search,
  },
  {
    title: 'Berufe entdecken',
    description: 'Erfahre alles über verschiedene Berufsbilder.',
    href: '/berufe',
    icon: BookOpen,
  },
  {
    title: 'Ratgeber lesen',
    description: 'Tipps und Tricks rund um Karriere und Bewerbung.',
    href: '/ratgeber',
    icon: Compass,
  },
];

export default function NewsletterBestaetigtPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
        <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          {/* Success Icon */}
          <div className="flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">
              <CheckCircle className="h-10 w-10 text-emerald-600" />
            </div>
          </div>

          {/* Heading */}
          <h1 className="mt-8 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Danke! Du bist dabei.
          </h1>
          <p className="mt-4 text-center text-lg text-gray-600">
            Deine E-Mail-Adresse wurde erfolgreich bestätigt. Du erhältst ab sofort
            unseren Newsletter mit den besten Karriere-Tipps und neuen Stellenangeboten.
          </p>

          {/* CTA Cards */}
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {ctas.map((cta) => (
              <Link
                key={cta.href}
                href={cta.href}
                className="group rounded-xl border border-gray-200 bg-white p-6 text-center transition-all hover:border-amber-300 hover:shadow-lg"
              >
                <div className="flex justify-center">
                  <cta.icon className="h-8 w-8 text-amber-600 transition-colors group-hover:text-amber-700" />
                </div>
                <h2 className="mt-4 text-lg font-semibold text-gray-900">
                  {cta.title}
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  {cta.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
