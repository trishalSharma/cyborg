import { motion } from "framer-motion";

const features = [
  {
    icon: "🧠",
    title: "Neural Processing",
    desc: "AI-powered cognitive enhancement for faster decision making and advanced problem solving."
  },
  {
    icon: "👁️",
    title: "Cybernetic Vision",
    desc: "Enhanced visual intelligence with real-time object recognition and environmental analysis."
  },
  {
    icon: "🔒",
    title: "Quantum Security",
    desc: "Next-generation encryption protocols built to withstand future computational threats."
  },
  {
    icon: "⚡",
    title: "AI Integration",
    desc: "Seamlessly connect human intelligence with adaptive machine learning systems."
  },
  {
    icon: "💾",
    title: "Memory Expansion",
    desc: "Access vast knowledge repositories instantly through neural synchronization."
  },
  {
    icon: "🤖",
    title: "Autonomous Learning",
    desc: "Continuously evolving intelligence capable of adapting to new challenges."
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
            Capabilities
          </p>

          <h2 className="text-5xl md:text-6xl font-black">
            CYBERNETIC
            <span className="text-cyan-400"> FEATURES</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Unlock the next stage of human evolution through advanced
            neural technology, AI augmentation, and cybernetic intelligence.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
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
              <div
                className="
                  w-16
                  h-16
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  text-3xl
                  bg-cyan-500/10
                  border
                  border-cyan-400/20
                  mb-6
                "
              >
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed">
                {feature.desc}
              </p>

              {/* Bottom Accent Line */}
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