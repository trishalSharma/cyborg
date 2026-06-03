import { motion } from "framer-motion";
import CyborgModel from "./CyborgModel";

export default function Hero() {
return (
<section className="relative min-h-screen flex items-center pt-28 px-6 overflow-hidden">
{/* Background Glow */}
<div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/20 blur-[150px] rounded-full" />
<div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 blur-[150px] rounded-full" />
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
    
    {/* LEFT SIDE */}
    <div>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-cyan-400 uppercase tracking-[0.3em] mb-6"
      >
        &gt; INITIALIZING CYBERNETIC INTERFACE...
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-4xl lg:text-6xl font-black leading-[1.05]"
      >
        THE FUTURE IS
        <br />
        <span className="text-cyan-400">
          NO LONGER
        </span>
        <br />
        HUMAN
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-gray-400 text-lg mt-8 max-w-xl leading-relaxed"
      >
        Experience the next generation of intelligence through
        cybernetic enhancement, neural synchronization and
        artificial cognition.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="flex flex-wrap gap-4 mt-10"
      >
        <button
          className="
            px-8 py-4
            rounded-full
            bg-cyan-500
            text-black
            font-bold
            transition-all
            hover:scale-105
            hover:shadow-[0_0_40px_rgba(0,255,255,.8)]
          "
        >
          Initialize System
        </button>

        <button
          className="
            px-8 py-4
            rounded-full
            border
            border-cyan-500
            hover:bg-cyan-500/10
            hover:shadow-[0_0_20px_rgba(0,255,255,.4)]
            transition-all
          "
        >
          Watch Demo
        </button>
      </motion.div>

      {/* Status Panel */}
      <div className="mt-12 bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 max-w-md">
        <p className="text-cyan-400 text-sm mb-2">
          SYSTEM STATUS
        </p>

        <div className="space-y-2 text-gray-300">
          <p>● Neural Link: ACTIVE</p>
          <p>● Security: QUANTUM</p>
          <p>● AI Core: ONLINE</p>
          <p>● Latency: 0.01ms</p>
        </div>
      </div>
    </div>

    {/* RIGHT SIDE */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{ duration: 1 }}
      className="relative flex justify-center items-center self-start pt-20"
    >
      
      {/* Ring 1 */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
        className="absolute w-95 h-95 rounded-full border border-cyan-400/30"
      />

      {/* Ring 2 */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "linear",
        }}
        className="absolute w-75 h-75 rounded-full border border-cyan-400/50"
      />

      {/* Core */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
        className="
          relative
          w-55
          h-55
          rounded-full
          bg-cyan-400/20
          backdrop-blur-xl
          border
          border-cyan-400
          shadow-[0_0_80px_rgba(0,255,255,.8)]
        "
      />

      {/* Floating Card */}
      <div className="absolute top-0 left-0 bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-4">
        <p className="text-cyan-400 text-sm">Neural Sync</p>
        <h4 className="font-bold">98.7%</h4>
      </div>

      <div className="absolute bottom-0 right-0 bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-4">
        <p className="text-cyan-400 text-sm">AI Core</p>
        <h4 className="font-bold">ONLINE</h4>
      </div>
    </motion.div>
  </div>
</section>
);
}