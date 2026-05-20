"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import ClickableImage from "./ClickableImage";
import { leadership } from "@/lib/data";

export default function Leadership() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper id="leadership" label="Leadership" title="Activities &" titleItalic="Involvement">
      <div ref={ref} className="grid sm:grid-cols-2 gap-4">
        {leadership.map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }} className="card group overflow-hidden">
            {item.photo && (
              <div className="relative h-36 bg-[#0d0d0d] overflow-hidden">
                <ClickableImage src={item.photo} alt={item.org} fill className="object-cover opacity-50 group-hover:opacity-70 group-hover:scale-[1.03] transition-all duration-500" sizes="(max-width: 640px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-[#080808]/50 pointer-events-none" />
              </div>
            )}
            <div className="p-5">
              <div className="flex items-start justify-between gap-2 mb-1">
                <h3 className="text-white font-semibold text-sm">{item.org}</h3>
                <span className="text-[#333] text-xs flex-shrink-0">{item.dates}</span>
              </div>
              <p className="text-[#4d96ff] text-xs font-medium mb-3">{item.role}</p>
              <p className="text-[#555] text-sm leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
