import { Link } from 'react-router-dom'
import SectionHeader from '../components/common/SectionHeader'
import heroBackground from '../../img/hero-bg.jpg'

const services = [
  {
    title: 'Crop Health Intelligence',
    description:
      'Satellite imagery, soil data, and weather signals combined into real-time crop health dashboards.',
  },
  {
    title: 'Yield Forecasting',
    description:
      'AI forecasting models identify production trends early so farmers can plan labor, storage, and market timing.',
  },
  {
    title: 'Input Optimization',
    description:
      'Prescription recommendations improve fertilizer and irrigation efficiency while reducing operational waste.',
  },
  {
    title: 'Risk Alerts',
    description:
      'Actionable notifications for drought, disease pressure, and nutrient stress before losses become severe.',
  },
]

const processSteps = [
  {
    step: 'Step 1: Data Collection',
    detail:
      'We aggregate farm, weather, crop, and satellite data to build a contextual view of each agricultural zone.',
  },
  {
    step: 'Step 2: AI Analysis',
    detail:
      'Machine learning models detect anomalies, forecast outcomes, and prioritize decision points for stakeholders.',
  },
  {
    step: 'Step 3: Actionable Insights',
    detail:
      'Insights are translated into clear operational actions that teams can implement quickly on the ground.',
  },
]

export default function HomePage() {
  return (
    <div className="container space-y-14 sm:space-y-16 lg:space-y-20">
      <section
        className="hero-glow relative overflow-hidden bg-cover bg-center px-5 py-10 text-primary-100 sm:px-10 sm:py-14 lg:px-14 lg:py-16"
        style={{
          backgroundImage: `linear-gradient(120deg, rgba(31, 106, 58, 0.9), rgba(31, 106, 58, 0.7)), url(${heroBackground})`,
        }}
      >
        <div className="absolute -left-16 top-12 h-40 w-40 rounded-full bg-white/20 blur-3xl sm:h-56 sm:w-56" />
        <div className="absolute -right-20 bottom-0 h-48 w-48 rounded-full bg-primary-100/70 blur-3xl sm:h-64 sm:w-64" />

        <div className="relative grid gap-10 lg:grid-cols-[1.3fr_0.8fr] lg:items-end">
          <div className="max-w-3xl">
            <p className="status-chip">AI For Sustainable Agriculture</p>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              Data-Driven Farm Decisions That Improve Yield, Resilience, and Profitability
            </h1>
            <p className="mt-4 text-base leading-relaxed text-primary-100/95 sm:text-lg">
              AGRI-SAKHA Innovations helps agricultural teams transform raw data into practical
              recommendations, enabling faster decisions across crop health, inputs, and operational
              risk.
            </p>
            <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap">
              <Link
                to="/contact"
                className="inline-flex min-h-11 w-full items-center justify-center rounded-button bg-white px-5 py-3 text-sm font-semibold text-primary-700 transition-colors hover:bg-primary-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-700 sm:w-auto"
              >
                Contact Us
              </Link>
              <Link
                to="/about"
                className="inline-flex min-h-11 w-full items-center justify-center rounded-button border border-primary-100/60 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-700 sm:w-auto"
              >
                Learn About Us
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 text-neutral-900 sm:max-w-sm lg:ml-auto">
            <article className="rounded-card bg-white/90 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-700">Coverage</p>
              <p className="mt-2 text-2xl font-extrabold">Multi-Region</p>
            </article>
            <article className="rounded-card bg-white/90 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-700">Insights</p>
              <p className="mt-2 text-2xl font-extrabold">Real-Time</p>
            </article>
            <article className="col-span-2 rounded-card bg-white/90 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-700">Outcomes</p>
              <p className="mt-2 text-lg font-semibold">
                Better input efficiency, early risk alerts, and stronger planning confidence.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section>
        <SectionHeader
          eyebrow="What We Do"
          title="Practical AI Services for Modern Agriculture"
          description="We provide implementation-focused solutions for farmers, agri-businesses, and ecosystem partners."
        />
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
          {services.map((service) => (
            <article key={service.title} className="panel-surface p-5 sm:p-6">
              <span className="status-chip">{service.title.split(' ')[0]}</span>
              <h3 className="mt-3 text-lg font-bold text-neutral-900 sm:text-xl">{service.title}</h3>
              <p className="mt-2 text-sm text-neutral-700 sm:text-base">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <SectionHeader
          eyebrow="How We Work"
          title="Our Three-Step Delivery Framework"
          description="From field signals to recommendations, every stage is designed for clarity and action."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {processSteps.map((item, index) => (
            <article key={item.step} className="panel-surface p-5 sm:p-6">
              <p className="status-chip">0{index + 1}</p>
              <h3 className="mt-3 text-lg font-bold text-neutral-900 sm:text-xl">{item.step}</h3>
              <p className="mt-2 text-sm text-neutral-700 sm:text-base">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden rounded-card border border-primary-500/20 bg-primary-100 px-5 py-8 shadow-elevated sm:px-8 sm:py-10 lg:px-10">
        <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-white/20 blur-2xl" />
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative max-w-2xl">
            <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl lg:text-4xl">
              Ready to make every field decision more precise?
            </h2>
            <p className="mt-3 text-base text-neutral-900/90 sm:text-lg">
              Tell us your current challenge and our team will design a focused AI support path.
            </p>
          </div>
          <Link
            to="/contact"
            className="relative inline-flex min-h-11 w-full items-center justify-center rounded-button bg-primary-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-primary-100 sm:w-fit"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  )
}
