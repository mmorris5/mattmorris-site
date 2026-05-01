import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Alert, Button, Card, TextInput } from 'morris-ui'

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(false)
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { from_name: name, from_email: email, message },
        EMAILJS_PUBLIC_KEY,
      )
      setSubmitted(true)
      setName('')
      setEmail('')
      setMessage('')
      setTimeout(() => setSubmitted(false), 5000)
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Get In Touch</h2>
        <p className="text-slate-500 text-center mb-12">
          Have a project in mind? Let's talk. I'm always open to new opportunities.
        </p>

        {submitted && (
          <Alert variant="success" title="Message Sent!" closeable onClose={() => setSubmitted(false)} className="mb-8">
            Thanks for reaching out — I'll get back to you soon.
          </Alert>
        )}

        {error && (
          <Alert variant="danger" title="Something went wrong" closeable onClose={() => setError(false)} className="mb-8">
            Failed to send your message. Please try again or email me directly.
          </Alert>
        )}

        <Card variant="glass" className="p-8 mb-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <TextInput
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
            />
            <TextInput
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              required
            />
            <div>
              <label className="block text-sm font-medium mb-1 text-slate-700">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about your project or idea..."
                required
                rows={6}
                className="w-full px-4 py-2 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none"
              />
            </div>

            <Button type="submit" variant="primary" size="lg" className="w-full" disabled={loading}>
              {loading ? 'Sending…' : 'Send Message'}
            </Button>
          </form>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Email',
              value: 'matt.m.morris2@gmail.com',
              href: 'mailto:matt.m.morris2@gmail.com',
              icon: (
                <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
                  <path fill="#EA4335" d="M1.5 6.75A2.25 2.25 0 0 1 3.75 4.5h16.5a2.25 2.25 0 0 1 2.25 2.25v.35L12 13.65 1.5 7.1v-.35Z" />
                  <path fill="#34A853" d="M1.5 9.52V17.25A2.25 2.25 0 0 0 3.75 19.5h3.8V11.9L1.5 9.52Z" />
                  <path fill="#4285F4" d="M22.5 9.52V17.25a2.25 2.25 0 0 1-2.25 2.25h-3.8V11.9l6.05-2.38Z" />
                  <path fill="#FBBC04" d="M7.55 19.5h8.9V11.9L12 14.85 7.55 11.9v7.6Z" />
                </svg>
              ),
            },
            {
              title: 'GitHub',
              value: 'github.com/mmorris5',
              href: 'https://github.com/mmorris5',
              icon: (
                <svg viewBox="0 0 16 16" className="w-5 h-5" fill="currentColor" aria-hidden="true">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8Z" />
                </svg>
              ),
            },
            {
              title: 'LinkedIn',
              value: 'linkedin.com/in/matt-morris2',
              href: 'https://linkedin.com/in/matt-morris2',
              icon: (
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#0A66C2" aria-hidden="true">
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95v5.67H9.32V9h3.42v1.56h.05c.48-.9 1.64-1.86 3.38-1.86 3.62 0 4.29 2.38 4.29 5.47v6.28ZM5.3 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.08 20.45H3.52V9h3.56v11.45Z" />
                </svg>
              ),
            },
          ].map((c) => (
            <Card key={c.title} className="relative p-6 text-center">
              <h3 className="font-bold mb-2 flex items-center justify-center gap-2">
                {c.icon}
                {c.title}
              </h3>
              <p className="text-slate-500 text-sm">Click to open</p>
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0"
                aria-label={`Open ${c.title}`}
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
