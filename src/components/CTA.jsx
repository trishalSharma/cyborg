import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative py-40 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-175 bg-cyan-500/10 blur-[180px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 blur-[150px] rounded-full" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-cyan-400 uppercase tracking-[0.3em] mb-6"
        >
          Final Transmission
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-black leading-tight"
        >
          JOIN THE
          <span className="text-cyan-400"> EVOLUTION</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto mt-8"
        >
          Humanity has reached its next stage. Connect your mind,
          enhance your capabilities and become part of the world's
          first cybernetic intelligence network.
        </motion.p>

        {/* Status Card */}
        <div className="mt-12 inline-block">
          <div className="bg-white/5 backdrop-blur-xl border border-cyan-500/20 rounded-3xl px-8 py-6">
            <div className="flex items-center gap-3 justify-center">
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
              <span className="text-cyan-400">
                Neural Network Online
              </span>
            </div>

            <p className="text-gray-400 mt-3">
              12,000,000+ Connected Minds
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-5 mt-12">
          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              px-10
              py-5
              rounded-full
              bg-cyan-500
              text-black
              font-bold
              text-lg
              hover:shadow-[0_0_50px_rgba(0,255,255,.8)]
              transition-all
            "
          >
            Become Enhanced
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              px-10
              py-5
              rounded-full
              border
              border-cyan-500
              text-white
              font-bold
              text-lg
              hover:bg-cyan-500/10
              hover:shadow-[0_0_20px_rgba(0,255,255,.4)]
              transition-all
            "
          >
            Request Access
          </motion.button>
        </div>

        {/* Footer Text */}
        <p className="text-gray-500 mt-12 text-sm">
          CYBER-X • The Future Begins Now
        </p>
      </div>
    </section>
  );
}