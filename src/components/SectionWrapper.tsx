"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SectionWrapperProps {
  id: string;
  label: string;
  title: string;
  titleItalic?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export default function SectionWrapper({
  id, label, title, titleItalic, subtitle, children, className = "",
}: SectionWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id={id} className={`py-28 px-6 ${className}`}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <p className="section-label mb-4">{label}</p>
          <h2 className="serif text-4xl sm:text-5xl text-white leading-tight tracking-[-0.02em]">
            {title}
            {titleItalic && (
              <> <em style={{ fontStyle: "italic" }} className="serif-italic">{titleItalic}</em></>
            )}
          </h2>
          {subtitle && <p className="text-[#555] text-base mt-3 max-w-lg">{subtitle}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
