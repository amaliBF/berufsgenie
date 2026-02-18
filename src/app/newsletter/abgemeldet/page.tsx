import type { Metadata } from 'next';
import Link from 'next/link';
import { MailX, Home, Bell } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Newsletter abgemeldet | Berufsgenie',
  description: 'Du wurdest erfolgreich vom Newsletter abgemeldet.',
  robots: { index: false },
};

export default function NewsletterAbgemeldetPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-2xl px-4 py-20 sm:px-6 lg:px-8">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
              <MailX className="h-10 w-10 text-gray-400" />
            </div>
          </div>

          {/* Heading */}
          <h1 className="mt-8 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Schade, dass du gehst!
          </h1>
          <p className="mt-4 text-center text-lg text-gray-600">
            Du wurdest erfolgreich von unserem Newsletter abgemeldet und erhältst
            keine weiteren E-Mails von uns. Falls du es dir anders überlegst, kannst
            du dich jederzeit erneut anmelden.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
            >
              <Home className="h-4 w-4" />
              Zur Startseite
            </Link>
            <Link
              href="/#app-notify"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-600 to-orange-600 px-6 py-3 text-sm font-medium text-white shadow-sm transition-all hover:from-amber-700 hover:to-orange-700 hover:shadow-md"
            >
              <Bell className="h-4 w-4" />
              Erneut anmelden
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
