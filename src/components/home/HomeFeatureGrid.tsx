"use client";

import { motion } from "framer-motion";
import {
  homeFeatureCards,
  springTransition,
} from "@/components/home/home-page-constants";

export default function HomeFeatureGrid() {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-3 gap-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...springTransition, delay: 0.1 }}
    >
      {homeFeatureCards.map(({ icon: Icon, title, desc }) => (
        <div
          key={title}
          className="p-5 rounded-lg border border-border bg-card form-container space-y-3"
        >
          <Icon className="w-5 h-5 text-foreground" />
          <h3 className="text-sm font-semibold text-foreground">{title}</h3>
          <p className="text-xs text-muted-foreground">{desc}</p>
        </div>
      ))}
    </motion.div>
  );
}
