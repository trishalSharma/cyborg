import { motion } from "framer-motion";

const timeline = [
  {
    year: "2026",
    title: "Advanced AI Assistants",
    desc: "The rise of intelligent systems capable of understanding and assisting human decision-making."
  },
  {
    year: "2035",
    title: "Neural Interfaces",
    desc: "Direct communication between human cognition and machine intelligence."
  },
  {
    year: "2050",
    title: "Human Augmentation",
    desc: "Cybernetic enhancements become a standard extension of human capability."
  },
  {
    year: "2065",
    title: "Synthetic Cognition",
    desc: "Artificial consciousness begins collaborating with biological intelligence."
  },
  {
    year: "2077",
    title: "Cybernetic Evolution",
    desc: "The complete integration of neural networks and human consciousness."
  }
];

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-0 w-96 h-96 bg-cyan-500/10 blur-[150px] rounded-full" />
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-purple-500/10 blur-[150px] rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-24"
        >
          <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
            Evolution Timeline
          </p>

          <h2 className="text-5xl md:text-6xl font-black">
            HUMANITY'S
            <span className="text-cyan-400"> NEXT STAGE</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Follow the journey from artificial intelligence to complete
            cybernetic integration.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-cyan-500/30" />

          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1
              }}
              className={`
                relative mb-16 flex items-center
                ${
                  index % 2 === 0
                    ? "md:justify-start"
                    : "md:justify-end"
                }
              `}
            >
              {/* Node */}
              <div
                className="
                  absolute
                  left-4
                  md:left-1/2
                  w-5
                  h-5
                  rounded-full
                  bg-cyan-400
                  shadow-[0_0_20px_rgba(0,255,255,.9)]
                  -translate-x-1/2
                  z-10
                "
              />

              {/* Card */}
              <div
                className="
                  ml-12
                  md:ml-0
                  md:w-[45%]
                  bg-white/5
                  backdrop-blur-xl
                  border
                  border-cyan-500/20
                  rounded-3xl
                  p-6
                  hover:border-cyan-400
                  hover:shadow-[0_0_30px_rgba(0,255,255,.3)]
                  transition-all
                "
              >
                <p className="text-cyan-400 text-sm mb-2">
                  {item.year}
                </p>

                <h3 className="text-2xl font-bold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}