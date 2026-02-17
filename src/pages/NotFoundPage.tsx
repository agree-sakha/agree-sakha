import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="container">
      <section className="panel-surface flex min-h-[55vh] flex-col items-center justify-center p-6 text-center sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-700 sm:text-sm">
          Page Not Found
        </p>
        <h1 className="mt-3 text-6xl font-extrabold leading-none text-neutral-900 sm:text-8xl">404</h1>
        <p className="mt-4 max-w-xl text-base text-neutral-700 sm:text-lg">
          The page you requested does not exist or may have moved to a new location.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex min-h-11 w-full items-center justify-center rounded-button bg-primary-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-100 sm:w-auto"
        >
          Return Home
        </Link>
      </section>
    </div>
  )
}
