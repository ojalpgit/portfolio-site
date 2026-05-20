"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import ClickableImage from "./ClickableImage";
import { experience } from "@/lib/data";

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper id="experience" label="Experience" title="Where" titleItalic="I've Worked">
      <div ref={ref} className="space-y-4">
        {experience.map((job, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="card p-6 sm:p-7 group"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">
              <div>
                <h3 className="text-white font-semibold text-base mb-0.5">{job.role}</h3>
                <p className="text-[#4d96ff] text-sm font-medium">{job.company}</p>
                <p className="text-[#444] text-xs mt-1">{job.location}</p>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <span className="text-[#444] text-xs font-medium whitespace-nowrap">{job.dates}</span>
                {job.photo && (
                  <div className="w-10 h-10 rounded-lg overflow-hidden border border-[#1e1e1e] hover:border-[#4d96ff]/40 transition-colors flex-shrink-0">
                    <ClickableImage src={job.photo} alt={job.company} width={40} height={40} className="object-cover w-full h-full" />
                  </div>
                )}
              </div>
            </div>

            <ul className="space-y-2 mb-5">
              {job.description.map((point, j) => (
                <li key={j} className="flex gap-3 text-sm text-[#555] leading-relaxed">
                  <span className="text-[#4d96ff] mt-[5px] flex-shrink-0 text-xs">▸</span>
                  {point}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {job.tech.map((t) => <span key={t} className="tag">{t}</span>)}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
