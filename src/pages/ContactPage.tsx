import ContactForm from '../components/common/ContactForm'

const linkedinUrl = 'https://www.linkedin.com/company/agrisakha/posts/?feedView=all'

export default function ContactPage() {
  return (
    <div className="container space-y-8 sm:space-y-10">
      <section className="panel-surface p-6 sm:p-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
          Contact AGREE-SAKHA Innovations
        </h1>
        <p className="mt-4 max-w-3xl text-base text-neutral-700 sm:text-lg">
          Share your agriculture challenge, support need, or partnership interest. We will respond
          with the next practical step.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_1.15fr]">
        <aside className="panel-surface p-6 sm:p-8">
          <h2 className="text-xl font-bold text-neutral-900 sm:text-2xl">Reach Us</h2>
          <p className="mt-3 text-neutral-700">
            We collaborate with farmers, agri-enterprises, and institutions across planning, pilot,
            and scale stages.
          </p>

          <dl className="mt-8 space-y-5">
            <div>
              <dt className="text-sm font-semibold uppercase tracking-wide text-primary-700">Email</dt>
              <dd className="mt-1 text-base text-neutral-900">
                agreesakhainnovatiovations@gmail.com
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold uppercase tracking-wide text-primary-700">Response Time</dt>
              <dd className="mt-1 text-base text-neutral-900">Within 1-2 business days</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold uppercase tracking-wide text-primary-700">Focus Areas</dt>
              <dd className="mt-1 text-base text-neutral-900 sm:max-w-sm">
                Crop analytics, yield forecasting, decision support, and digital extension.
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold uppercase tracking-wide text-primary-700">LinkedIn</dt>
              <dd className="mt-1">
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-base font-semibold text-primary-700 transition-colors hover:text-primary-500 focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  Follow AGREE-SAKHA on LinkedIn
                </a>
              </dd>
            </div>
          </dl>
        </aside>

        <div>
          <ContactForm />
        </div>
      </section>
    </div>
  )
}
