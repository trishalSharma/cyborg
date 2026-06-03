import { motion } from "framer-motion";

const stats = [
  {
    value: "98.7%",
    label: "Neural Synchronization",
    icon: "🧠",
  },
  {
    value: "12M+",
    label: "Connected Minds",
    icon: "🌐",
  },
  {
    value: "0.01ms",
    label: "Response Time",
    icon: "⚡",
  },
  {
    value: "99.99%",
    label: "Security Rating",
    icon: "🔒",
  },
];

export default function Stats() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-5xl font-black mb-16">
          PERFORMANCE
          <span className="text-cyan-400"> METRICS</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.05,
              }}
              className="
                bg-white/5
                backdrop-blur-xl
                border
                border-cyan-500/20
                rounded-3xl
                p-8
                text-center
                hover:shadow-[0_0_30px_rgba(0,255,255,.4)]
              "
            >
              <div className="text-5xl mb-4">
                {stat.icon}
              </div>

              <h3 className="text-5xl font-black text-cyan-400 mb-3">
                {stat.value}
              </h3>

              <p className="text-gray-300">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}