"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function AboutReveal({ children, className, delay = 0, direction = "up" }) {
  const reduceMotion = useReducedMotion();
  const offset = direction === "left" ? { x: -24 } : direction === "right" ? { x: 24 } : { y: 22 };

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: reduceMotion ? 0 : 0.65, delay: reduceMotion ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
