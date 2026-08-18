"use client";
import { motion } from "framer-motion";
import ImageRenderer from "../ImageRenderer/ImageRenderer";

export default function LoadingScreen() {
  return (
    <div className="w-full h-screen bg-white grid place-content-center">
      <motion.div
        animate={{ y: [0, -20, 0], opacity: [1, 0.7, 1] }} // add opacity pulsing
        transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
      >
        <ImageRenderer
          src="http://localhost:1337/uploads/Logo_8891d804b6.png"
          width={200}
          height={200}
        />
      </motion.div>
    </div>
  );
}
