import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

export function useRevelarScroll(offset = ["start end", "start 30%"]) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset });
  const opacidad = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return { ref, style: { "--revelar": opacidad } };
}