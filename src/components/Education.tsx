"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { education } from "@/lib/data";

export default function Education() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper id="education" label="Education" title="Academic" titleItalic="Background">
      <div ref={ref} className="space-y-4">
        {education.map((edu, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }} className="card p-6 sm:p-7">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
              <div>
                <h3 className="text-white font-semibold text-base mb-0.5">{edu.school}</h3>
                <p className="text-[#4d96ff] text-sm font-medium">{edu.degree}</p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-[#444] text-xs font-medium">{edu.dates}</p>
                {edu.gpa && <p className="text-[#888] text-sm font-semibold mt-0.5">GPA {edu.gpa}</p>}
              </div>
            </div>
            <div className="h-px bg-[#1a1a1a] mb-5" />
            <ul className="space-y-2">
              {edu.highlights.map((h, j) => (
                <li key={j} className="flex gap-3 text-sm text-[#555] leading-relaxed">
                  <span className="text-[#4d96ff] mt-[5px] flex-shrink-0 text-xs">▸</span>
                  {h}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
