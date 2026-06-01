"use client";

import { useState, useRef } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<{
    text: string;
    error: boolean;
  } | null>(null);

  const refs = {
    fname: useRef<HTMLInputElement>(null),
    lname: useRef<HTMLInputElement>(null),
    email: useRef<HTMLInputElement>(null),
    phone: useRef<HTMLInputElement>(null),
    topic: useRef<HTMLSelectElement>(null),
    message: useRef<HTMLTextAreaElement>(null),
  };

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const required = [refs.fname, refs.lname, refs.email, refs.message] as const;
    let ok = true;
    required.forEach((r) => {
      if (!r.current?.value.trim()) {
        ok = false;
        if (r.current) r.current.style.borderColor = "#C0392B";
      } else {
        if (r.current) r.current.style.borderColor = "";
      }
    });
    if (!ok) {
      setStatus({ text: "Please complete the required fields.", error: true });
      return;
    }
    setStatus({
      text: "Thank you — your message has been received. (Prototype: connect a form handler or email service to deliver it.)",
      error: false,
    });
    (e.target as HTMLFormElement).reset();
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <div className="field">
          <label htmlFor="fname">First name *</label>
          <input type="text" id="fname" ref={refs.fname} required />
        </div>
        <div className="field">
          <label htmlFor="lname">Last name *</label>
          <input type="text" id="lname" ref={refs.lname} required />
        </div>
      </div>
      <div className="form-row">
        <div className="field">
          <label htmlFor="email">Email *</label>
          <input type="email" id="email" ref={refs.email} required />
        </div>
        <div className="field">
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" ref={refs.phone} />
        </div>
      </div>
      <div className="field">
        <label htmlFor="topic">I&apos;m reaching out about</label>
        <select id="topic" ref={refs.topic}>
          <option>General enquiry</option>
          <option>Volunteering</option>
          <option>Partnership</option>
          <option>Donations &amp; fundraising</option>
          <option>Media &amp; press</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="message">Message *</label>
        <textarea
          id="message"
          ref={refs.message}
          required
          placeholder="How can we help?"
        />
      </div>
      <button
        className="btn btn-primary btn-lg"
        type="submit"
        style={{ justifyContent: "center" }}
      >
        Send message
      </button>
      {status && (
        <p
          className={`form-msg${status.error ? " error" : ""}`}
          role="status"
        >
          {status.text}
        </p>
      )}
    </form>
  );
}
