"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import ClickableImage from "./ClickableImage";
import { personal } from "@/lib/data";

const facts = [
  { label: "University", value: "UW-Madison" },
  { label: "Major", value: "Computer Science" },
  { label: "Graduation", value: "May 2028" },
  { label: "Location", value: "Madison, WI" },
];

const paragraphs = [
  `I'm a sophomore studying Computer Science at UW-Madison, where I spend my time at the intersection of AI research and software engineering. I've worked as a Computational GenAI Research Intern under Prof. Yiqiao Zhong, exploring reinforcement learning and how intelligent agents reason through formal logic — and I'm currently a Research Fellow at Algoverse, building ML pipelines and applying uncertainty quantification to make predictions more reliable.`,
  `Beyond research, I work at UW-Madison's Division of Information Technology, helping students, faculty, and staff solve technical problems. I find that this keeps me grounded — good technology is only useful if real people can actually use it.`,
  `I'm also deeply invested in building community. I founded Cursor at UW-Madison and serve as Co-president, and I run biweekly networking lunches as an officer at WACM to support women and gender minorities in computing. I believe the best CS communities are the ones that lift everyone up.`,
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <SectionWrapper id="about" label="About" title="Who" titleItalic="I Am">
      <div ref={ref} className="grid lg:grid-cols-[1fr_260px] gap-12 items-start">
        <div className="space-y-5">
          {paragraphs.map((para, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-[#666] text-base leading-[1.9]"
            >
              {para}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="card overflow-hidden"
        >
          {/* Headshot — fixed height crops to face + shoulders */}
          <div className="relative h-52 w-full overflow-hidden">
            <ClickableImage
              src="/images/headshot.jpg"
              alt="Ojal Prasad"
              fill
              className="object-cover object-[50%_25%]"
              sizes="260px"
            />
          </div>

          {/* Name strip */}
          <div className="px-5 py-3 border-b border-[#1a1a1a]">
            <p className="text-white font-semibold text-sm">Ojal Prasad</p>
            <p className="text-[#4d96ff] text-xs mt-0.5">CS &amp; Data Science · UW-Madison</p>
          </div>

          {/* Facts */}
          <div className="p-5 space-y-3">
            {facts.map((fact) => (
              <div key={fact.label} className="flex justify-between items-baseline gap-3">
                <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#444] flex-shrink-0">{fact.label}</p>
                <p className="text-xs text-white font-medium text-right">{fact.value}</p>
              </div>
            ))}
            <div className="pt-2 border-t border-[#1a1a1a]">
              <a href={`mailto:${personal.email}`} className="text-sm text-[#4d96ff] hover:text-white transition-colors font-medium">
                Say hello →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
