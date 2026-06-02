const timeline = [
  "2026 - AI Assistant",
  "2035 - Neural Interface",
  "2050 - Human Augmentation",
  "2077 - Full Cyborg Era"
];

export default function Timeline() {
  return (
    <section className="py-24">
      <h2 className="text-center text-5xl mb-12">
        EVOLUTION
      </h2>

      <div className="max-w-4xl mx-auto">
        {timeline.map((item) => (
          <div
            key={item}
            className="border-l-2 border-cyan-400 pl-8 py-6"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}