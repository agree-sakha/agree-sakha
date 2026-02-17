import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../../img/logo.png'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
  { to: '/helpdesk', label: 'Helpdesk' },
]

function desktopLinkClasses(isActive: boolean) {
  return [
    'relative rounded-button px-4 py-2 text-sm font-semibold transition-colors',
    'focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-100',
    isActive
      ? 'bg-white text-primary-700 shadow-[0_8px_18px_-12px_rgba(26,29,26,0.5)]'
      : 'text-neutral-700 hover:bg-white/75 hover:text-primary-700',
  ].join(' ')
}

function mobileLinkClasses(isActive: boolean) {
  return [
    'rounded-button px-4 py-2.5 text-base font-semibold transition-colors',
    'focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-100',
    isActive
      ? 'bg-primary-100 text-primary-700'
      : 'text-neutral-700 hover:bg-primary-100/60 hover:text-primary-700',
  ].join(' ')
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-primary-100/70 bg-neutral-100/92 backdrop-blur-xl">
      <nav className="container" aria-label="Primary navigation">
        <div className="flex h-16 items-center justify-between sm:h-20">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center gap-2 rounded-button px-1 py-1 text-primary-700 focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-100"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-primary-100 bg-white shadow-[0_8px_18px_-14px_rgba(26,29,26,0.5)] sm:h-11 sm:w-11">
              <img src={logo} alt="AGREE-SAKHA logo" className="h-[80%] w-[80%] object-contain" />
            </span>
            <span className="text-base font-extrabold tracking-tight sm:text-lg">AGREE-SAKHA</span>
          </NavLink>

          <div className="hidden items-center gap-2 md:flex">
            {navLinks.map(({ to, label }) => (
              <NavLink key={to} to={to} className={({ isActive }) => desktopLinkClasses(isActive)}>
                {({ isActive }) => (
                  <>
                    {label}
                    <span
                      aria-hidden="true"
                      className={[
                        'absolute -bottom-[1px] left-4 right-4 h-[2px] rounded-full bg-primary-500 transition-opacity',
                        isActive ? 'opacity-100' : 'opacity-0',
                      ].join(' ')}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          <button
            type="button"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((previous) => !previous)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-button text-neutral-900 transition-colors hover:bg-primary-100 focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-100 md:hidden"
          >
            <span className="sr-only">Toggle navigation</span>
            <span
              aria-hidden="true"
              className={[
                'block h-0.5 w-6 bg-neutral-900 transition-transform duration-300',
                isOpen ? 'translate-y-[6px] rotate-45' : '',
              ].join(' ')}
            />
            <span
              aria-hidden="true"
              className={[
                'my-[5px] block h-0.5 w-6 bg-neutral-900 transition-opacity duration-300',
                isOpen ? 'opacity-0' : 'opacity-100',
              ].join(' ')}
            />
            <span
              aria-hidden="true"
              className={[
                'block h-0.5 w-6 bg-neutral-900 transition-transform duration-300',
                isOpen ? '-translate-y-[6px] -rotate-45' : '',
              ].join(' ')}
            />
          </button>
        </div>

        <div
          id="mobile-navigation"
          className={[
            'overflow-hidden transition-all duration-300 md:hidden',
            isOpen ? 'max-h-80 pb-4 opacity-100' : 'max-h-0 opacity-0',
          ].join(' ')}
        >
          <div className="panel-surface mb-3 flex flex-col gap-1 border-t border-primary-100/70 p-3 pt-4">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => mobileLinkClasses(isActive)}
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}
