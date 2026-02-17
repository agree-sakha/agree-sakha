import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'

interface ContactFormFields {
  name: string
  email: string
  subject: string
  message: string
  _gotcha: string
}

type SubmissionStatus = 'idle' | 'loading' | 'success' | 'error'

const initialFormState: ContactFormFields = {
  name: '',
  email: '',
  subject: '',
  message: '',
  _gotcha: '',
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormFields>(initialFormState)
  const [status, setStatus] = useState<SubmissionStatus>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('loading')
    setStatusMessage('Sending your message...')

    try {
      const response = await fetch('https://formspree.io/f/xaqdjpej', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const payload: { errors?: Array<{ message?: string }> } = await response
          .json()
          .catch(() => ({}))
        const errorText = payload.errors?.[0]?.message ?? 'Unable to submit right now. Please try again.'
        throw new Error(errorText)
      }

      setFormData(initialFormState)
      setStatus('success')
      setStatusMessage('Thanks. Your message has been sent successfully.')
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unable to submit right now. Please try again.'
      setStatus('error')
      setStatusMessage(message)
    }
  }

  function handleFieldChange(
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target
    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }))

    if (status === 'success' || status === 'error') {
      setStatus('idle')
      setStatusMessage('')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="panel-surface p-5 sm:p-7 lg:p-8"
      noValidate
    >
      <div className="space-y-4 sm:space-y-5">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-semibold text-neutral-900">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={formData.name}
            onChange={handleFieldChange}
            className="w-full rounded-button border border-primary-100 bg-white px-4 py-3 text-base text-neutral-900 placeholder:text-neutral-700/70 focus-visible:border-primary-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-semibold text-neutral-900">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={formData.email}
            onChange={handleFieldChange}
            className="w-full rounded-button border border-primary-100 bg-white px-4 py-3 text-base text-neutral-900 placeholder:text-neutral-700/70 focus-visible:border-primary-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="subject" className="mb-1 block text-sm font-semibold text-neutral-900">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            value={formData.subject}
            onChange={handleFieldChange}
            className="w-full rounded-button border border-primary-100 bg-white px-4 py-3 text-base text-neutral-900 placeholder:text-neutral-700/70 focus-visible:border-primary-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            placeholder="How can we support you?"
          />
        </div>

        <div>
          <label htmlFor="message" className="mb-1 block text-sm font-semibold text-neutral-900">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            value={formData.message}
            onChange={handleFieldChange}
            className="w-full rounded-button border border-primary-100 bg-white px-4 py-3 text-base text-neutral-900 placeholder:text-neutral-700/70 focus-visible:border-primary-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            placeholder="Share your farming goals, pain points, or partnership idea."
          />
        </div>

        <div className="hidden" aria-hidden="true">
          <label htmlFor="gotcha">Leave this field empty</label>
          <input
            id="gotcha"
            name="_gotcha"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={formData._gotcha}
            onChange={handleFieldChange}
          />
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="inline-flex min-h-12 w-full items-center justify-center rounded-button bg-primary-700 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-primary-500 disabled:cursor-not-allowed disabled:opacity-75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:w-auto"
        >
          {status === 'loading' ? 'Sending...' : 'Send Message'}
        </button>

        <p
          aria-live="polite"
          className={[
            'min-h-6 text-sm font-medium leading-6',
            status === 'success'
              ? 'text-success-500'
              : status === 'error'
                ? 'text-error-500'
                : 'text-neutral-700',
          ].join(' ')}
        >
          {statusMessage}
        </p>
      </div>
    </form>
  )
}
