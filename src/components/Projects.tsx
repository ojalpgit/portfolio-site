"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "./SectionWrapper";
import { projects } from "@/lib/data";

function GitHubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [showAll, setShowAll] = useState(false);

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <SectionWrapper id="projects" label="Projects" title="Things" titleItalic="I've Built" subtitle="Research, systems, and full-stack engineering.">
      <div ref={ref}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {featured.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
              className="card group overflow-hidden flex flex-col"
            >
              {/* Image area */}
              <div className="relative h-40 bg-[#0d0d0d] overflow-hidden">
                {project.photo ? (
                  <Image src={project.photo} alt={project.title} fill className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-bold serif text-[#1a1a1a] select-none">{project.title[0]}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-[#0f0f0f]/60" />
                {/* Links on hover */}
                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="w-7 h-7 flex items-center justify-center rounded-lg bg-black/70 text-[#888] hover:text-white transition-colors">
                      <GitHubIcon />
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer"
                      className="w-7 h-7 flex items-center justify-center rounded-lg bg-black/70 text-[#888] hover:text-white transition-colors">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    </a>
                  )}
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-white font-semibold text-sm mb-2 group-hover:text-[#4d96ff] transition-colors">{project.title}</h3>
                <p className="text-[#555] text-xs leading-relaxed mb-4 flex-1">{project.description}</p>
                {project.impact && (
                  <p className="text-[#4d96ff] text-[11px] font-medium mb-3">{project.impact}</p>
                )}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => <span key={t} className="tag text-[10px] px-2 py-0.5">{t}</span>)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {showAll && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                {rest.map((project, i) => (
                  <motion.div key={project.title} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: i * 0.07 }} className="card p-5 group">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-white text-sm font-semibold group-hover:text-[#4d96ff] transition-colors">{project.title}</h3>
                      {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-[#444] hover:text-white transition-colors"><GitHubIcon /></a>}
                    </div>
                    <p className="text-[#555] text-xs leading-relaxed mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => <span key={t} className="tag text-[10px] px-1.5 py-0.5">{t}</span>)}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {rest.length > 0 && (
          <div className="text-center pt-2">
            <button onClick={() => setShowAll(!showAll)} className="btn-pill text-sm px-5 py-2.5">
              {showAll ? "Show less" : `Show ${rest.length} more`}
              <motion.svg animate={{ rotate: showAll ? 180 : 0 }} width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9" />
              </motion.svg>
            </button>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
