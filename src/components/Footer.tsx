"use client";

import { personal } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-[#111]">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-[#333]">© {new Date().getFullYear()} {personal.name}</p>
        <p className="text-xs text-[#222]">Next.js · TypeScript · Tailwind · Framer Motion</p>
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-xs text-[#333] hover:text-[#4d96ff] transition-colors">
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}
