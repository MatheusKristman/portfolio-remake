"use client";

import { AnimatePresence, motion } from "framer-motion";

import { pageTransitionAnimation } from "@/constants/framer-motion/page-transition-animation";
import useTransitionStore from "@/stores/transition-store";
import { useEffect } from "react";

export function TransitionAnimation({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      key="transition"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransitionAnimation}
    >
      {children}
    </motion.div>
  );
}
