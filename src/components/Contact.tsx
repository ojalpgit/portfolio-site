"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { personal } from "@/lib/data";

const links = [
  { label: "Email", value: personal.email, href: `mailto:${personal.email}` },
  { label: "LinkedIn", value: "linkedin.com/in/ojal-prasad", href: personal.linkedin },
  { label: "GitHub", value: "github.com/ojalpgit", href: personal.github },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Send failed");
      setSent(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 5000);
    } catch {
      setError(true);
      setTimeout(() => setError(false), 4000);
    } finally {
      setSending(false);
    }
  };

  const inputClass = "w-full px-4 py-3 rounded-xl bg-[#0a0a0a] border border-[#1e1e1e] text-white placeholder:text-[#333] text-sm font-[var(--font-outfit)] focus:outline-none focus:border-[#4d96ff]/50 transition-colors";

  return (
    <SectionWrapper id="contact" label="Contact" title="Get" titleItalic="In Touch">
      <div ref={ref} className="grid lg:grid-cols-[1fr_300px] gap-10 items-start">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="card p-6 sm:p-8 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-semibold tracking-[0.15em] uppercase text-[#444] mb-2">Name</label>
              <input type="text" required placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} />
            </div>
            <div>
              <label className="block text-[10px] font-semibold tracking-[0.15em] uppercase text-[#444] mb-2">Email</label>
              <input type="email" required placeholder="your@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} />
            </div>
          </div>
          <div>
            <label className="block text-[10px] font-semibold tracking-[0.15em] uppercase text-[#444] mb-2">Message</label>
            <textarea required rows={5} placeholder="What's on your mind?" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${inputClass} resize-none`} />
          </div>
          <button type="submit" disabled={sending || sent} className="btn-pill btn-pill-filled w-full justify-center py-3 disabled:opacity-60">
            {sent ? "Message sent ✓" : sending ? "Sending..." : error ? "Failed — try again" : "Send Message"}
          </button>
          {error && <p className="text-red-400 text-xs text-center">Something went wrong. Please email me directly at ojalprasad@gmail.com</p>}
        </motion.form>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="space-y-3"
        >
          <p className="text-[#444] text-sm leading-relaxed mb-5">
            Open to collaborations, research, and new opportunities. Reach out anytime.
          </p>
          {links.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-xl border border-[#1e1e1e] hover:border-[#2a2a2a] bg-[#0a0a0a] hover:bg-[#0f0f0f] group transition-all">
              <div>
                <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#333] mb-0.5">{link.label}</p>
                <p className="text-sm text-[#666] group-hover:text-white transition-colors">{link.value}</p>
              </div>
              <svg className="text-[#2a2a2a] group-hover:text-[#4d96ff] transition-colors" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </a>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
