"use client"

import React, { useState } from "react"

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    // Simulate send
    await new Promise((r) => setTimeout(r, 900))
    setSubmitting(false)
    setSubmitted(true)
    setName("")
    setEmail("")
    setMessage("")
  }

  return (
    <main className="px-4 sm:px-6 md:px-10 mt-10 max-w-7xl mx-auto">
      {/* Top contact cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="border rounded-lg p-6 text-center shadow-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto mb-3 h-10 w-10 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3 8.5v7A2.5 2.5 0 0 0 5.5 18h13A2.5 2.5 0 0 0 21 15.5v-7M3 8.5L12 13l9-4.5"
            />
          </svg>
          <h4 className="font-semibold mb-1">Email</h4>
          <p className="text-sm text-slate-600">hello@heyreviews.com</p>
        </div>

        <div className="border rounded-lg p-6 text-center shadow-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto mb-3 h-10 w-10 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2M7 7a4 4 0 1 1 8 0v1H7V7z"
            />
          </svg>
          <h4 className="font-semibold mb-1">Address</h4>
          <p className="text-sm text-slate-600">3891 Ranchview Dr, Richardson, Texas</p>
        </div>

        <div className="border rounded-lg p-6 text-center shadow-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto mb-3 h-10 w-10 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3 5a2 2 0 0 1 2-2h1.6a2 2 0 0 1 1.9 1.4l.4 1.6a2 2 0 0 1-.45 1.8L6.6 9.6a12.04 12.04 0 0 0 5.8 5.8l1.6-1.2a2 2 0 0 1 1.8-.45l1.6.4A2 2 0 0 1 21 17.4V19a2 2 0 0 1-2 2h-1C9.2 21 3 14.8 3 6V5z"
            />
          </svg>
          <h4 className="font-semibold mb-1">Phone</h4>
          <p className="text-sm text-slate-600">+1 123 456 7890</p>
        </div>
      </div>

      <h2 className="text-3xl font-extrabold text-center mb-8">Contact Information</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <section>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Your Name"
                className="w-full rounded-md border px-4 py-3 text-sm focus:outline-none focus:ring-4 focus:ring-primary/20"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">E-mail</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your E-mail"
                className="w-full rounded-md border px-4 py-3 text-sm focus:outline-none focus:ring-4 focus:ring-primary/20"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter Your Message"
                rows={6}
                className="w-full rounded-md border px-4 py-3 text-sm focus:outline-none focus:ring-4 focus:ring-primary/20"
                required
              />
            </div>

            <div>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-medium text-white hover:opacity-95 disabled:opacity-60"
                disabled={submitting}
              >
                {submitting ? "Sending..." : submitted ? "Sent — Thank you" : "Submit"}
              </button>
            </div>
          </form>

          {submitted && (
            <p className="mt-4 text-sm text-green-700">Thanks — your message has been received.</p>
          )}
        </section>

        <div className="w-full rounded-lg overflow-hidden border">
          {/* Google Maps embed - replace coordinates as needed */}
         <div className="w-full rounded-lg overflow-hidden border">
  <iframe
    title="Karachi location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28939.444142647775!2d66.9905019!3d24.8607343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33eaaa64b9d4b%3A0x4e8d7d6d02e47c5c!2sKarachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1694000000000!5m2!1sen!2s"
    width="100%"
    height="100%"
    className="min-h-[260px] w-full border-0"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>

        </div>
      </div>
    </main>
  )
}
