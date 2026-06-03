import { motion } from "framer-motion";

export default function Navbar() {
return (
<motion.nav
initial={{ y: -80, opacity: 0 }}
animate={{ y: 0, opacity: 1 }}
transition={{ duration: 0.6 }}
className="
fixed
top-0
left-0
w-full
z-50
backdrop-blur-xl
bg-[#050816]/70
border-b
border-cyan-500/10
"
>
<div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
<motion.h1
whileHover={{ scale: 1.05 }}
className="
text-cyan-400
font-black
text-3xl
tracking-wider
cursor-pointer
"
style={{
textShadow: "0 0 12px rgba(0,255,255,.5)",
}}
>
CYBER-X
</motion.h1>
    <div className="hidden md:flex items-center gap-8 text-gray-300">
      <a
        href="#stats"
        className="hover:text-cyan-400 transition-colors"
      >
        Analytics
      </a>

      <a
        href="#features"
        className="hover:text-cyan-400 transition-colors"
      >
        Features
      </a>

      <a
        href="#timeline"
        className="hover:text-cyan-400 transition-colors"
      >
        Evolution
      </a>
    </div>

    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="
        px-6
        py-3
        rounded-full
        bg-cyan-500
        text-black
        font-bold
        transition-all
        duration-300
        hover:shadow-[0_0_30px_rgba(0,255,255,.8)]
      "
    >
      Join Now
    </motion.button>
  </div>
</motion.nav>
);
}