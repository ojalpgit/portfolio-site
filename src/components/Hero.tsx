"use client";

import { motion } from "framer-motion";
import { personal } from "@/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const scrollToContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 text-center">

      {/* Orb glow — bottom center, like the reference */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[380px] rounded-[50%] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 100%, rgba(77,150,255,0.12) 0%, rgba(77,150,255,0.04) 45%, transparent 70%)",
          filter: "blur(1px)",
        }}
      />
      {/* Orb sphere shape */}
      <div
        className="absolute bottom-[-60px] left-1/2 -translate-x-1/2 w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{
          border: "1px solid rgba(77,150,255,0.08)",
          boxShadow: "inset 0 -40px 80px rgba(77,150,255,0.05), 0 0 80px rgba(77,150,255,0.04)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto pt-20">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#1e1e1e] bg-[#0f0f0f] text-sm text-[#888] mb-10"
        >
          Learning. Building. Improving.
        </motion.div>

        {/* Main heading — Instrument Serif, mixing regular + italic */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.2 }}
          className="serif text-[clamp(2.8rem,7vw,5.5rem)] leading-[1.08] tracking-[-0.02em] text-white mb-6"
        >
          Code. Research.{" "}
          <br className="hidden sm:block" />
          Community.{" "}
          <em className="serif-italic not-italic" style={{ fontStyle: "italic" }}>
            Repeat.
          </em>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.35 }}
          className="text-[#888] text-lg font-light mb-10 max-w-lg mx-auto"
        >
          Hey, I&apos;m {personal.name}, a SWE &amp; AI/ML Engineer
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <button onClick={scrollToContact} className="btn-pill btn-pill-filled">
            <span>👋</span> Let&apos;s Connect
          </button>
        </motion.div>
      </div>
    </section>
  );
}
