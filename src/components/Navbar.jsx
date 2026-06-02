import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 backdrop-blur-md bg-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between">
        <h1 className="text-cyan-400 font-bold text-2xl">
          CYBER-X
        </h1>

        <button className="bg-cyan-500 px-5 py-2 rounded-full">
          Join Now
        </button>
      </div>
    </motion.nav>
  );
}