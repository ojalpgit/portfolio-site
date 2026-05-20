"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "./SectionWrapper";
import { research } from "@/lib/data";

export default function Research() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper id="research" label="Research" title="Academic" titleItalic="Work">
      <div ref={ref} className="space-y-4">
        {research.map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }} className="card p-6 sm:p-7 group">
            <div className="flex flex-col sm:flex-row gap-5">
              {item.photo && (
                <div className="flex-shrink-0 w-full sm:w-36 h-28 rounded-xl overflow-hidden bg-[#0d0d0d] relative">
                  <Image src={item.photo} alt={item.title} fill className="object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
                </div>
              )}
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4 mb-1.5">
                  <h3 className="text-white font-semibold text-sm group-hover:text-[#4d96ff] transition-colors">{item.title}</h3>
                  {item.link && <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-xs text-[#4d96ff] hover:text-white transition-colors flex-shrink-0 font-medium">Read →</a>}
                </div>
                <p className="text-[#444] text-xs mb-3">{item.venue} · {item.date}</p>
                <p className="text-[#555] text-sm leading-relaxed mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }} className="rounded-xl border border-dashed border-[#1e1e1e] p-6">
          <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-[#333] mb-2">Research Interests</p>
          <p className="text-[#555] text-sm leading-relaxed">
            LLM alignment · efficient inference · interpretability · <span className="text-[#888]">reliable AI systems</span> ·
            NeurIPS · ICML · ICLR · ACL
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
