"use client";

import { useState } from "react";
import { brand } from "@/lib/content";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const company = String(data.get("company") || "");
    const message = String(data.get("message") || "");

    // No backend required: hand the message off to the user's mail client.
    const subject = encodeURIComponent(`New project enquiry — ${name || "Kinetiq"}`);
    const bodyLines = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company}`,
      "",
      message,
    ].join("\n");
    window.location.href = `mailto:${brand.email}?subject=${subject}&body=${encodeURIComponent(
      bodyLines
    )}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="form-success">
        <span className="eyebrow">Message ready</span>
        <h3 style={{ fontSize: 26, margin: "16px 0 12px" }}>Thanks — almost there.</h3>
        <p style={{ color: "var(--muted)" }}>
          Your email client should have opened with the details filled in. If it
          didn&apos;t, reach us directly at{" "}
          <a href={`mailto:${brand.email}`} style={{ color: "var(--accent)" }}>
            {brand.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" placeholder="Jane Doe" required />
      </div>
      <div className="field">
        <label htmlFor="email">Work email</label>
        <input id="email" name="email" type="email" placeholder="jane@company.com" required />
      </div>
      <div className="field">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" placeholder="Company Inc." />
      </div>
      <div className="field">
        <label htmlFor="message">What are you building?</label>
        <textarea
          id="message"
          name="message"
          placeholder="Tell us about the goal, the timeline, and where you're stuck."
          required
        />
      </div>
      <button type="submit" className="btn btn--solid" style={{ width: "100%", justifyContent: "center" }}>
        Send enquiry <span className="arrow">→</span>
      </button>
    </form>
  );
}
