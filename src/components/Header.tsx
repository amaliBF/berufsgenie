'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Compass, Menu, X } from 'lucide-react';
import PortalSwitcher from './PortalSwitcher';

const navLinks = [
  { href: '/stellen', label: 'Stellen' },
  { href: '/firmen', label: 'Firmen' },
  { href: '/jobs', label: 'Stellenangebote' },
  { href: '/branchen', label: 'Branchen' },
  { href: '/fuer-jobsuchende', label: 'Für Jobsuchende' },
  { href: '/app', label: 'App' },
  { href: '/berufsfinder', label: 'Berufsfinder' },
  { href: '/fuer-arbeitgeber', label: 'Für Arbeitgeber' },
  { href: '/ratgeber', label: 'Ratgeber' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Magazine accent bar */}
      <div className="magazine-bar fixed top-0 w-full z-[60]" />

      <nav className="fixed top-1 w-full bg-[#FFFBF5]/95 backdrop-blur-md z-50 border-b border-amber-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                <Compass className="h-5 w-5 text-white" />
              </div>
              <span className="font-extrabold text-lg tracking-tight">
                <span className="text-stone-900">Berufs</span>
                <span className="gradient-text-warm">genie</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-stone-600 hover:text-amber-700 hover:bg-amber-50 px-3 py-2 rounded-lg transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <PortalSwitcher currentPortal="beruf" />
              <Link
                href="https://dashboard.genieportal.de/login"
                className="text-sm font-medium text-stone-600 hover:text-stone-900 px-3 py-2"
              >
                Login
              </Link>
              <Link
                href="https://dashboard.genieportal.de/register"
                className="rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 px-5 py-2 text-sm font-semibold text-white hover:from-amber-400 hover:to-orange-500 transition-all shadow-sm hover:shadow-md"
              >
                Kostenlos starten
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-stone-600 hover:text-stone-900"
              aria-label="Menü öffnen"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-[#FFFBF5] border-t border-amber-100 shadow-lg">
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm text-stone-700 hover:text-amber-700 hover:bg-amber-50 px-3 py-2.5 rounded-lg transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <hr className="my-2 border-amber-100" />
              <div className="px-3 py-1.5 text-xs font-semibold text-gray-400 uppercase tracking-wider">Portale</div>
              {[
                { name: 'Ausbildungsgenie', domain: 'ausbildungsgenie.de' },
                { name: 'Praktikumsgenie', domain: 'praktikumsgenie.de' },
                { name: 'Minijobgenie', domain: 'minijobgenie.de' },
                { name: 'Werkstudentengenie', domain: 'werkstudentengenie.de' },
              ].map((p) => (
                <a
                  key={p.domain}
                  href={`https://${p.domain}`}
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm text-stone-700 hover:text-amber-700 hover:bg-amber-50 px-3 py-2 rounded-lg transition-colors"
                >
                  {p.name}
                </a>
              ))}
              <hr className="my-2 border-amber-100" />
              <Link
                href="https://dashboard.genieportal.de/login"
                onClick={() => setMobileOpen(false)}
                className="block text-sm text-stone-600 px-3 py-2.5 font-medium"
              >
                Login
              </Link>
              <Link
                href="https://dashboard.genieportal.de/register"
                onClick={() => setMobileOpen(false)}
                className="block text-center rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 px-5 py-2.5 text-sm font-semibold text-white mt-2"
              >
                Kostenlos starten
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
