"use client";

import { motion } from "framer-motion";

interface AnimatedHeadlineProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  as?: "h1" | "h2";
  baseDelay?: number;
}

export default function AnimatedHeadline({
  text,
  className,
  style,
  as: Tag = "h1",
  baseDelay = 0.08,
}: AnimatedHeadlineProps) {
  const words = text.split(" ");

  return (
    <Tag className={className} style={style}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 22, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            delay: baseDelay + i * 0.065,
            type: "spring",
            stiffness: 65,
            damping: 18,
          }}
          style={{ display: "inline-block", marginRight: "0.28em" }}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
}
