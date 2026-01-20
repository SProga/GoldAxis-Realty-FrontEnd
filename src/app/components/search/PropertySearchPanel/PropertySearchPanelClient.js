"use client";
import PropertySearchPanel from "./PropertySearchPanel";
import { motion } from "framer-motion";
import { useAppStore } from "@/app/lib/stores/useAppStore";

export default function PropertySearchPanelClient() {
  const parishData = useAppStore((s) => s.parishData);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="m-[-100px]"
    >
      <PropertySearchPanel parishData={parishData.data} />
    </motion.div>
  );
}
