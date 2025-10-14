"use client"

import { useState } from "react"
import WaitlistWelcomeEmail from "@/emails/waitlist-welcome"

export default function EmailPreviewPage() {
  const [email, setEmail] = useState("user@example.com")

  return (
    <div className="min-h-screen bg-neutral-950 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-emerald-400 mb-4 font-mono">Email Preview</h1>
          <div className="flex gap-4 items-center">
            <label className="text-neutral-400 font-mono text-sm">Test Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2 text-neutral-200 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="user@example.com"
            />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
          <WaitlistWelcomeEmail email={email} />
        </div>

        <div className="mt-8 p-4 bg-neutral-900 border border-neutral-800 rounded-lg">
          <p className="text-neutral-400 font-mono text-sm">
            Preview URL: <span className="text-emerald-400">/email-preview</span>
          </p>
          <p className="text-neutral-500 font-mono text-xs mt-2">
            This page lets you preview the email template with different email addresses.
          </p>
        </div>
      </div>
    </div>
  )
}
