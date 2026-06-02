import { useEffect, useState } from "react";

export default function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 10);

        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => onFinish(), 500);
          return 100;
        }

        return next;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-[#050816] flex flex-col justify-center items-center z-50">
      <h1 className="text-cyan-400 text-4xl font-bold animate-pulse">
        INITIALIZING NEURAL NETWORK
      </h1>

      <div className="w-96 h-2 bg-white/10 mt-8 rounded-full overflow-hidden">
        <div
          className="h-full bg-cyan-400 transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="mt-4 text-cyan-300">{progress}%</p>
    </div>
  );
}