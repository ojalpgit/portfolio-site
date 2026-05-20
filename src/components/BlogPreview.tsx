"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import SectionWrapper from "./SectionWrapper";
import { blogPosts } from "@/lib/blog";

export default function BlogPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const preview = blogPosts.slice(0, 3);

  return (
    <SectionWrapper id="journal" label="Journal" title="Recent" titleItalic="Reflections">
      <div ref={ref} className="space-y-4">
        {preview.map((post, i) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link href={`/blog/${post.slug}`} className="block group">
              <article className="card overflow-hidden flex gap-0 flex-col sm:flex-row hover:border-[#2a2a2a] transition-colors">
                {post.coverImage && (
                  <div className="relative w-full sm:w-44 h-36 sm:h-auto flex-shrink-0 overflow-hidden">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-5 flex flex-col justify-between gap-3 flex-1">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="tag text-[10px]">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-white text-base font-semibold leading-snug mb-1 group-hover:text-[#4d96ff] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-[#555] text-sm leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#444] text-xs">{post.date}</span>
                    <span className="text-[#4d96ff] text-xs font-medium group-hover:translate-x-1 transition-transform inline-block">
                      Read →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-8 text-center"
      >
        <Link href="/blog" className="btn-pill text-sm">
          All posts →
        </Link>
      </motion.div>
    </SectionWrapper>
  );
}
