'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Compass, Menu, X, CircleUser, Building2, ArrowRight, Orbit } from 'lucide-react';
import { UserMenu, useAuth } from '@/lib/genie-auth';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { href: '/stellen', label: 'Stellen' },
  { href: '/firmen', label: 'Firmen' },
  { href: '/fuer-jobsuchende', label: 'Für Jobsuchende' },
  { href: '/berufsfinder', label: 'Berufsfinder' },
  { href: '/ratgeber', label: 'Ratgeber' },
  { href: '/fuer-arbeitgeber', label: 'Für Arbeitgeber' },
  { href: '/app', label: 'App' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { isLoggedIn, isLoading } = useAuth();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <>
      {/* Magazine accent bar */}
      <div className="magazine-bar fixed top-0 w-full z-[60]" />

      <nav aria-label="Hauptnavigation" className="fixed top-1 w-full bg-[#FFFBF5]/95 dark:bg-gray-950/95 backdrop-blur-md z-50 border-b border-amber-100 dark:border-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                <Compass className="h-5 w-5 text-white" />
              </div>
              <span className="font-extrabold text-lg tracking-tight">
                <span className="text-stone-900 dark:text-white">Berufs</span>
                <span className="gradient-text-warm">genie</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-stone-600 dark:text-gray-300 hover:text-amber-700 dark:hover:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-950 px-3 py-2 rounded-lg transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop: User/Company area */}
            <div className="hidden lg:flex items-center gap-3">
              <ThemeToggle />
              {!isLoading && isLoggedIn ? (
                <UserMenu />
              ) : (
                <div ref={dropdownRef} className="relative">
                  <button
                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 text-white hover:from-amber-400 hover:to-orange-500 transition-all shadow-sm hover:shadow-md"
                    aria-label="Anmelden"
                  >
                    <CircleUser className="h-6 w-6" />
                  </button>

                  {userMenuOpen && (
                    <div className="absolute right-0 top-12 z-50 w-72 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl overflow-hidden">
                      {/* User section */}
                      <div className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Orbit className="h-5 w-5 text-emerald-600" />
                          <span className="text-sm font-semibold text-gray-900 dark:text-white">Dein Genie-Account</span>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">Ein Account für alle 5 Jobportale — kostenlos.</p>
                        <div className="flex gap-2">
                          <a
                            href="https://mein.genieportal.de/login"
                            onClick={() => setUserMenuOpen(false)}
                            className="flex-1 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-center"
                          >
                            Anmelden
                          </a>
                          <a
                            href="https://mein.genieportal.de/register"
                            onClick={() => setUserMenuOpen(false)}
                            className="flex-1 rounded-lg px-3 py-2 text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 transition-all text-center"
                          >
                            Registrieren
                          </a>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="border-t border-gray-100 dark:border-gray-700" />

                      {/* Company section */}
                      <div className="p-4 bg-gray-50 dark:bg-gray-800/50">
                        <div className="flex items-center gap-2 mb-2">
                          <Building2 className="h-5 w-5 text-orange-600" />
                          <span className="text-sm font-semibold text-gray-900 dark:text-white">Für Unternehmen</span>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">Stellenanzeigen schalten und passende Bewerber finden.</p>
                        <a
                          href="https://dashboard.genieportal.de"
                          onClick={() => setUserMenuOpen(false)}
                          className="flex items-center justify-center gap-2 w-full rounded-lg px-3 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 transition-all shadow-sm"
                        >
                          Zum Arbeitgeber-Portal
                          <ArrowRight className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-stone-600 dark:text-gray-300 hover:text-stone-900 dark:hover:text-white"
              aria-label="Menü öffnen"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-[#FFFBF5] dark:bg-gray-950 border-t border-amber-100 dark:border-gray-800 shadow-lg">
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm text-stone-700 dark:text-gray-300 hover:text-amber-700 dark:hover:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-950 px-3 py-2.5 rounded-lg transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}

              <hr className="my-3 border-amber-100" />

              {/* Mobile: User section */}
              {!isLoading && isLoggedIn ? (
                <div className="px-3 py-2">
                  <UserMenu />
                </div>
              ) : (
                <>
                  <div className="px-3 py-1.5">
                    <div className="flex items-center gap-2 mb-2">
                      <Orbit className="h-4 w-4 text-emerald-600" />
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Dein Genie-Account</span>
                    </div>
                    <p className="text-xs text-gray-400 mb-2">Ein Account für alle 5 Jobportale</p>
                    <div className="flex gap-2">
                      <a
                        href="https://mein.genieportal.de/login"
                        onClick={() => setMobileOpen(false)}
                        className="flex-1 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 border border-gray-200 hover:bg-gray-50 transition-colors text-center"
                      >
                        Anmelden
                      </a>
                      <a
                        href="https://mein.genieportal.de/register"
                        onClick={() => setMobileOpen(false)}
                        className="flex-1 rounded-lg px-3 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 text-center"
                      >
                        Registrieren
                      </a>
                    </div>
                  </div>
                </>
              )}

              <hr className="my-3 border-amber-100" />

              {/* Mobile: Company section */}
              <div className="px-3 py-1.5">
                <div className="flex items-center gap-2 mb-2">
                  <Building2 className="h-4 w-4 text-orange-600" />
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Für Unternehmen</span>
                </div>
                <a
                  href="https://dashboard.genieportal.de"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full rounded-lg px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-orange-600 to-red-600 shadow-sm"
                >
                  Zum Arbeitgeber-Portal
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
