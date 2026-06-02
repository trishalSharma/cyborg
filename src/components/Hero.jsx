import { motion } from "framer-motion";
import CyborgModel from "./CyborgModel";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-10">
      <div className="grid md:grid-cols-2 gap-10 w-full">

        <div>
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-7xl font-black"
          >
            HUMAN
            <span className="text-cyan-400">
              {" "}ENHANCEMENT
            </span>
          </motion.h1>

          <p className="text-gray-300 mt-6 text-xl">
            Enter the next era of cybernetic evolution.
          </p>

          <button className="mt-8 bg-cyan-500 px-8 py-4 rounded-full">
            Initialize System
          </button>
        </div>

        <CyborgModel />

      </div>
    </section>
  );
}