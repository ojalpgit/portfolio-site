"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
}

export default function ClickableImage({ src, alt, fill, width, height, className, sizes }: Props) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  const imageProps = fill
    ? { fill: true as const, sizes: sizes ?? "100vw" }
    : { width: width ?? 800, height: height ?? 600 };

  return (
    <>
      <div className="cursor-zoom-in" onClick={() => setOpen(true)}>
        <Image src={src} alt={alt} className={className} {...imageProps} />
      </div>

      {mounted && createPortal(
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[999] flex items-center justify-center bg-black/92 p-4 sm:p-8"
              onClick={close}
            >
              <motion.div
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.92, opacity: 0 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex flex-col items-center max-w-5xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  onClick={close}
                  className="absolute -top-10 right-0 w-8 h-8 flex items-center justify-center text-[#888] hover:text-white transition-colors text-lg"
                  aria-label="Close"
                >
                  ✕
                </button>

                {/* Full image */}
                <img
                  src={src}
                  alt={alt}
                  className="max-w-full max-h-[82vh] object-contain rounded-lg shadow-2xl"
                />

                {/* Caption */}
                {alt && (
                  <p className="mt-4 text-[#555] text-sm text-center">{alt}</p>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
