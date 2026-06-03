import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Spotlight() {
  const [position, setPosition] = useState({
    x: -1000,
    y: -1000,
  });

  useEffect(() => {
    let animationFrame;

    const handleMove = (e) => {
      cancelAnimationFrame(animationFrame);

      animationFrame = requestAnimationFrame(() => {
        setPosition({
          x: e.clientX,
          y: e.clientY,
        });
      });
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      {/* Main Spotlight */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-0"
        animate={{
          background: `radial-gradient(
            350px circle at ${position.x}px ${position.y}px,
            rgba(0,255,255,0.12),
            transparent 70%
          )`,
        }}
        transition={{
          type: "tween",
          ease: "linear",
          duration: 0.08,
        }}
      />

      {/* Secondary Glow */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-0"
        animate={{
          background: `radial-gradient(
            150px circle at ${position.x}px ${position.y}px,
            rgba(0,255,255,0.08),
            transparent 80%
          )`,
        }}
        transition={{
          type: "tween",
          ease: "linear",
          duration: 0.08,
        }}
      />
    </>
  );
}