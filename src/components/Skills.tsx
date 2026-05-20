"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { skills } from "@/lib/data";

const categories = [
  { label: "Languages",            icon: "{ }", items: skills.languages },
  { label: "Frameworks",           icon: "⚡",   items: skills.frameworks },
  { label: "AI / ML",              icon: "🧠",   items: skills.aiMl },
  { label: "Cloud & DevOps",       icon: "☁",   items: skills.cloud },
  { label: "Tools",                icon: "🛠",   items: skills.tools },
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper id="skills" label="Skills" title="Technical" titleItalic="Stack">
      <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="card p-5"
          >
            <div className="flex items-center gap-2.5 mb-4">
              <span className="text-base">{cat.icon}</span>
              <h3 className="text-[#888] text-xs font-semibold uppercase tracking-[0.1em]">{cat.label}</h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {cat.items.map((item, j) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.3, delay: i * 0.07 + j * 0.03 }}
                  className="tag"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
