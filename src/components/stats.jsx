import { motion } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  {
    value: 98.7,
    suffix: "%",
    label: "Neural Synchronization",
    icon: "🧠",
  },
  {
    value: 12,
    suffix: "M+",
    label: "Connected Minds",
    icon: "🌐",
  },
  {
    value: 0.01,
    suffix: "ms",
    label: "Response Time",
    icon: "⚡",
  },
  {
    value: 99.99,
    suffix: "%",
    label: "Security Rating",
    icon: "🔒",
  },
];

export default function Stats() {
  return (
    <section
      id="stats"
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 blur-[150px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 blur-[150px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
            System Analytics
          </p>

          <h2 className="text-5xl md:text-6xl font-black">
            PERFORMANCE
            <span className="text-cyan-400"> METRICS</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6">
            Real-time data from the world's most advanced cybernetic
            intelligence network.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                y: -8,
              }}
              className="
                group
                relative
                backdrop-blur-xl
                bg-white/5
                border
                border-cyan-500/20
                rounded-3xl
                p-8
                text-center
                overflow-hidden
                transition-all
                duration-500
                hover:border-cyan-400
                hover:shadow-[0_0_40px_rgba(0,255,255,0.4)]
              "
            >
              {/* Hover Glow */}
              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-500
                  bg-gradient-to-br
                  from-cyan-500/10
                  via-transparent
                  to-purple-500/10
                "
              />

              {/* Icon */}
              <div className="text-5xl mb-4">
                {stat.icon}
              </div>

              {/* Counter */}
              <h3 className="text-5xl font-black text-cyan-400 mb-3">
                <CountUp
                  end={stat.value}
                  duration={3}
                  decimals={
                    stat.value % 1 !== 0
                      ? stat.value.toString().split(".")[1].length
                      : 0
                  }
                />
                {stat.suffix}
              </h3>

              {/* Label */}
              <p className="text-gray-300 font-medium">
                {stat.label}
              </p>

              {/* Bottom Accent */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  h-1
                  w-0
                  bg-cyan-400
                  group-hover:w-full
                  transition-all
                  duration-500
                "
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}