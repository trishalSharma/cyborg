import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-32 text-center">

      <motion.h2
        animate={{
          textShadow: [
            "0 0 10px cyan",
            "0 0 30px cyan",
            "0 0 10px cyan"
          ]
        }}
        transition={{
          repeat: Infinity,
          duration: 2
        }}
        className="text-6xl font-bold"
      >
        JOIN THE EVOLUTION
      </motion.h2>

      <button className="mt-10 bg-cyan-500 px-10 py-4 rounded-full">
        Become Enhanced
      </button>

    </section>
  );
}