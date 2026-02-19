import SectionHeader from '../components/common/SectionHeader'

const values = [
  {
    title: 'Farmer-Centric Design',
    description: 'We build products that are practical for real field conditions and daily operations.',
  },
  {
    title: 'Data Integrity',
    description: 'Our recommendations are grounded in transparent models and measurable outcomes.',
  },
  {
    title: 'Sustainable Growth',
    description: 'We support practices that increase productivity while preserving long-term soil health.',
  },
  {
    title: 'Collaborative Innovation',
    description: 'We partner with agri-ecosystem stakeholders to deliver scalable and meaningful impact.',
  },
]

const companyLinkedinUrl = 'https://www.linkedin.com/company/agrisakha'
const companyInstagramUrl =
  'https://www.instagram.com/agrisakha_innovations?igsh=MTdybnV4Z2E4YTJ0bQ=='

const teamMembers = [
  {
    name: 'Niranjan',
    role: 'Founder & COO',
    image:
      'https://media.licdn.com/dms/image/v2/D5603AQEBD8C0eXtS9A/profile-displayphoto-crop_800_800/B56ZoLtpVOIsAI-/0/1761133109162?e=1772668800&v=beta&t=b3hSlZdGKlkIpsrpZZhi9YmYmxh8ppSQeQz0d1Rv6ow',
    bio: 'Leads vision, partnerships, and strategy for AI-driven agricultural transformation.',
    focus: 'Leadership, Ecosystem Growth',
    linkedin: 'https://www.linkedin.com/in/niranjanmd/',
    phoneLabel: '+91 73539 57307',
    phoneHref: 'tel:+917353957307',
  },
  {
    name: 'Aditya',
    role: 'Co-Founder & CTO',
    image:
      'https://media.licdn.com/dms/image/v2/D5603AQH0A2awUri_jg/profile-displayphoto-shrink_400_400/B56ZOA8rrGG4Ak-/0/1733035222100?e=1772668800&v=beta&t=VNDHwJL9jCnuHh9k0Nkmxy8MjO7HNkhSni43202QhTg',
    bio: 'Drives technical architecture, product engineering, and AI delivery workflows.',
    focus: 'Technology, AI Platform',
    linkedin: 'https://www.linkedin.com/in/ozone170/',
    phoneLabel: '+91 8217076246',
    phoneHref: 'tel:+918217076246',
  },
]

export default function AboutPage() {
  return (
    <div className="container space-y-12 sm:space-y-14">
      <section className="panel-surface p-6 sm:p-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
          About AGRI-SAKHA Innovations
        </h1>
        <p className="mt-4 max-w-3xl text-base text-neutral-700 sm:text-lg">
          AGRI-SAKHA Innovations builds AI-enabled agriculture solutions that help farming
          communities and agri-businesses make better decisions with confidence.
        </p>
      </section>

      <section>
        <SectionHeader
          eyebrow="Introduction"
          title="Purpose-Built Intelligence for Agriculture"
          description="We focus on delivering grounded insights that move from data to real operational value."
        />
        <div className="panel-surface p-5 sm:p-7">
          <p className="text-sm leading-relaxed text-neutral-700 sm:text-base">
            Our work combines agronomy context, machine learning, and field realities. Every
            engagement is shaped around practical deployment so teams can adopt insights quickly and
            improve measurable outcomes across crops, resources, and risk.
          </p>
        </div>
      </section>

      <section>
        <SectionHeader
          eyebrow="Mission And Vision"
          title="What Drives Us"
          description="Our mission and vision guide every product, partnership, and implementation."
        />
        <div className="grid gap-5 md:grid-cols-2">
          <article className="panel-surface p-5 sm:p-6">
            <h3 className="text-lg font-bold text-neutral-900 sm:text-xl">Mission</h3>
            <p className="mt-3 text-neutral-700">
              Enable farmers and agri-enterprises to act on reliable AI insights that improve
              productivity and reduce uncertainty.
            </p>
          </article>
          <article className="panel-surface p-5 sm:p-6">
            <h3 className="text-lg font-bold text-neutral-900 sm:text-xl">Vision</h3>
            <p className="mt-3 text-neutral-700">
              Build a future where every farm decision is informed, sustainable, and resilient through
              accessible technology.
            </p>
          </article>
        </div>
      </section>

      <section>
        <SectionHeader
          eyebrow="Core Values"
          title="Principles Behind Our Work"
          description="These values shape how we design, deliver, and collaborate."
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {values.map((value) => (
            <article key={value.title} className="panel-surface p-5 sm:p-6">
              <h3 className="text-lg font-bold text-neutral-900 sm:text-xl">{value.title}</h3>
              <p className="mt-3 text-neutral-700">{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <SectionHeader
          eyebrow="Team"
          title="People Behind AGRI-SAKHA"
          description="We are focused on building a high-impact team with deep domain expertise."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {teamMembers.map((member) => (
            <article key={member.name} className="panel-surface p-5 sm:p-6">
              <div className="flex items-center gap-4">
                <img
                  src={member.image}
                  alt={`${member.name} profile`}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="h-14 w-14 rounded-full border border-primary-100 object-cover"
                />
                <div>
                  <h3 className="text-lg font-bold text-neutral-900">{member.name}</h3>
                  <p className="text-sm font-semibold text-primary-700">{member.role}</p>
                </div>
              </div>
              <p className="mt-4 text-neutral-700">{member.bio}</p>
              <p className="mt-3 text-sm text-neutral-700">
                <span className="font-semibold text-neutral-900">Focus:</span> {member.focus}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex text-sm font-semibold text-primary-700 transition-colors hover:text-primary-500 focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  View on LinkedIn
                </a>
                <a
                  href={member.phoneHref}
                  className="inline-flex text-sm font-semibold text-primary-700 transition-colors hover:text-primary-500 focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  {member.phoneLabel}
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap items-center gap-4 text-sm">
          <a
            href={companyLinkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex font-semibold text-primary-700 transition-colors hover:text-primary-500 focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-100"
          >
            Company LinkedIn
          </a>
          <a
            href={companyInstagramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex font-semibold text-primary-700 transition-colors hover:text-primary-500 focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-100"
          >
            Company Instagram
          </a>
        </div>
      </section>
    </div>
  )
}
