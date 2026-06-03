import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const messages = [
  "Initializing Neural Network...",
  "Connecting AI Core...",
  "Loading Cybernetic Systems...",
  "Synchronizing Memory Matrix...",
  "Activating Quantum Security...",
  "Launching Interface..."
];

export default function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 8) + 2;

        if (next >= 100) {
          clearInterval(timer);

          setTimeout(() => {
            onFinish();
          }, 800);

          return 100;
        }

        return next;
      });
    }, 120);

    return () => clearInterval(timer);
  }, [onFinish]);

  useEffect(() => {
    const textTimer = setInterval(() => {
      setMessageIndex((prev) =>
        prev === messages.length - 1 ? 0 : prev + 1
      );
    }, 800);

    return () => clearInterval(textTimer);
  }, []);

  return (
    <div className="fixed inset-0 bg-[#050816] flex items-center justify-center z-9999 overflow-hidden">
      
      {/* Glow Background */}
      <div className="absolute w-125 h-125 bg-cyan-500/10 rounded-full blur-[180px]" />

      {/* Grid */}
      <div
        className="
          absolute
          inset-0
          opacity-20
          bg-[linear-gradient(rgba(0,255,255,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,.15)_1px,transparent_1px)]
          bg-size-[40px_40px]
        "
      />

      <div className="relative z-10 text-center max-w-xl px-6">
        
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="
            text-5xl
            md:text-6xl
            font-black
            text-cyan-400
            mb-4
          "
          style={{
            textShadow: "0 0 25px rgba(0,255,255,.8)",
          }}
        >
          CYBER-X
        </motion.h1>

        <motion.p
          key={messageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-gray-300 mb-10 h-6"
        >
          {messages[messageIndex]}
        </motion.p>

        {/* Progress Bar */}
        <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden border border-cyan-500/20">
          <motion.div
            className="h-full bg-cyan-400"
            animate={{
              width: `${progress}%`,
            }}
            transition={{
              duration: 0.2,
            }}
          />
        </div>

        <div className="flex justify-between mt-3 text-sm text-gray-400">
          <span>System Boot</span>
          <span>{progress}%</span>
        </div>

        {/* Status */}
        <div className="mt-10 bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-5">
          <div className="flex justify-between text-sm mb-2">
            <span>Neural Link</span>
            <span className="text-green-400">ONLINE</span>
          </div>

          <div className="flex justify-between text-sm mb-2">
            <span>AI Core</span>
            <span className="text-green-400">ACTIVE</span>
          </div>

          <div className="flex justify-between text-sm">
            <span>Quantum Security</span>
            <span className="text-green-400">ENABLED</span>
          </div>
        </div>
      </div>
    </div>
  );
}