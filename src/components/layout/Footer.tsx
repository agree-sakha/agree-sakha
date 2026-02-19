import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
  { to: '/helpdesk', label: 'Helpdesk' },
]

const companyLinkedinUrl = 'https://www.linkedin.com/company/agrisakha'
const companyInstagramUrl =
  'https://www.instagram.com/agrisakha_innovations?igsh=MTdybnV4Z2E4YTJ0bQ=='

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-16 border-t border-primary-500/35 bg-neutral-900 text-primary-100">
      <div className="container py-10 sm:py-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <h2 className="text-2xl font-bold text-white">AGRI-SAKHA Innovations</h2>
            <p className="mt-3 max-w-md text-sm text-primary-100/90">
              Precision agriculture powered by responsible AI, built to support farmers with practical
              field intelligence.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Quick Links</h3>
            <ul className="mt-3 grid grid-cols-2 gap-2">
              {links.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className="inline-flex rounded-button px-2 py-1 text-sm text-primary-100/90 transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900"
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Connect</h3>
            <p className="mt-3 text-sm text-primary-100/90">agrisakhainnovatiovations@gmail.com</p>
            <a
              href={companyLinkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex rounded-button px-2 py-1 text-sm font-semibold text-primary-100 transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900"
            >
              LinkedIn Updates
            </a>
            <a
              href={companyInstagramUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex rounded-button px-2 py-1 text-sm font-semibold text-primary-100 transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900"
            >
              Instagram Updates
            </a>
            <a
              href="tel:+917353957307"
              className="mt-2 inline-flex rounded-button px-2 py-1 text-sm text-primary-100/90 transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900"
            >
              Niranjan: +91 73539 57307
            </a>
            <a
              href="tel:+918217076246"
              className="mt-2 inline-flex rounded-button px-2 py-1 text-sm text-primary-100/90 transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900"
            >
              Aditya: +91 8217076246
            </a>
          </div>
        </div>

        <p className="mt-8 border-t border-primary-500/40 pt-6 text-sm text-primary-100/80">
          © {currentYear} AGRI-SAKHA Innovations. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
