"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { personal } from "@/lib/data";

const navItems = [
  {
    id: "home",
    href: "#home",
    label: "Home",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    id: "about",
    href: "#about",
    label: "About",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    id: "experience",
    href: "#experience",
    label: "Experience",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
      </svg>
    ),
  },
  {
    id: "leadership",
    href: "#leadership",
    label: "Activities",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    id: "skills",
    href: "#skills",
    label: "Skills",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    id: "education",
    href: "#education",
    label: "Education",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    id: "contact",
    href: "#contact",
    label: "Contact",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

const journalItem = {
  label: "Journal",
  href: "/blog",
  icon: (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  ),
};

const socialItems = [
  {
    label: "LinkedIn",
    href: personal.linkedin,
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: personal.github,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const observersRef = useRef<IntersectionObserver[]>([]);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    observersRef.current.forEach((o) => o.disconnect());
    observersRef.current = [];

    const ids = [...navItems.map((n) => n.id).filter((id) => id !== "home"), "experience", "research", "skills", "education", "leadership", "journal"];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observersRef.current.push(obs);
    });

    const handleTop = () => { if (window.scrollY < 80) setActiveSection("home"); };
    window.addEventListener("scroll", handleTop, { passive: true });
    return () => {
      observersRef.current.forEach((o) => o.disconnect());
      window.removeEventListener("scroll", handleTop);
    };
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    if (href === "#home") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop: centered floating pill */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-5 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-1 px-2 py-2 rounded-full border border-[#1e1e1e] bg-[#0f0f0f]/90 backdrop-blur-xl shadow-xl shadow-black/50"
      >
        {/* Nav icons */}
        {navItems.map((item) => {
          const isActive = isHomePage && activeSection === item.id;
          const cls = `relative w-9 h-9 flex items-center justify-center rounded-full transition-all duration-200 ${
            isActive ? "bg-white/10 text-white" : "text-[#555] hover:text-white hover:bg-white/[0.06]"
          }`;
          return isHomePage ? (
            <button key={item.id} onClick={() => scrollTo(item.href)} title={item.label} className={cls}>
              {item.icon}
              {isActive && (
                <motion.span layoutId="nav-active" className="absolute inset-0 rounded-full bg-white/10" transition={{ type: "spring", stiffness: 400, damping: 35 }} />
              )}
            </button>
          ) : (
            <Link key={item.id} href={item.id === "home" ? "/" : `/#${item.id}`} title={item.label} className={cls}>
              {item.icon}
            </Link>
          );
        })}

        {/* Divider */}
        <div className="w-px h-5 bg-[#222] mx-1" />

        {/* Journal */}
        <a
          href={journalItem.href}
          title={journalItem.label}
          className="w-9 h-9 flex items-center justify-center rounded-full text-[#555] hover:text-white hover:bg-white/[0.06] transition-all duration-200"
        >
          {journalItem.icon}
        </a>

        {/* Divider */}
        <div className="w-px h-5 bg-[#222] mx-1" />

        {/* Social icons */}
        {socialItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            title={item.label}
            className="w-9 h-9 flex items-center justify-center rounded-full text-[#555] hover:text-white hover:bg-white/[0.06] transition-all duration-200"
          >
            {item.icon}
          </a>
        ))}

        {/* Divider */}
        <div className="w-px h-5 bg-[#222] mx-1" />

        {/* Resume link */}
        <a
          href={personal.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Resume"
          className="w-9 h-9 flex items-center justify-center rounded-full text-[#555] hover:text-[#4d96ff] hover:bg-[#4d96ff]/10 transition-all duration-200"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
            <polyline points="14 2 14 8 20 8" />
          </svg>
        </a>
      </motion.nav>

      {/* Mobile: top bar */}
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 inset-x-0 z-50 md:hidden flex items-center justify-between px-5 h-14 bg-[#080808]/95 backdrop-blur-xl border-b border-[#1e1e1e]"
      >
        <span className="text-sm font-semibold text-white">
          Ojal<span className="text-[#4d96ff]">.</span>
        </span>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="w-8 h-8 flex flex-col items-center justify-center gap-1.5"
          aria-label="Menu"
        >
          <motion.span animate={mobileOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }} className="block w-5 h-px bg-white origin-center" transition={{ duration: 0.2 }} />
          <motion.span animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }} className="block w-5 h-px bg-white" transition={{ duration: 0.2 }} />
          <motion.span animate={mobileOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }} className="block w-5 h-px bg-white origin-center" transition={{ duration: 0.2 }} />
        </button>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-14 inset-x-0 z-40 md:hidden bg-[#0a0a0a] border-b border-[#1e1e1e] px-5 py-4 flex flex-col gap-1"
          >
            {navItems.map((item) =>
              isHomePage ? (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.href)}
                  className="flex items-center gap-3 px-3 py-3 rounded-xl text-[#888] hover:text-white hover:bg-white/[0.04] text-sm font-medium transition-colors"
                >
                  {item.icon}
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.id}
                  href={item.id === "home" ? "/" : `/#${item.id}`}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-3 py-3 rounded-xl text-[#888] hover:text-white hover:bg-white/[0.04] text-sm font-medium transition-colors"
                >
                  {item.icon}
                  {item.label}
                </Link>
              )
            )}
            <a
              href={journalItem.href}
              className="flex items-center gap-3 px-3 py-3 rounded-xl text-[#888] hover:text-white hover:bg-white/[0.04] text-sm font-medium transition-colors"
            >
              {journalItem.icon}
              {journalItem.label}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
