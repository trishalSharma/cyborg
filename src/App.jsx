import { useState } from "react";

import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Features from "./components/Features";
import Timeline from "./components/Timeline";
import CTA from "./components/CTA";

function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return (
      <Loader
        onFinish={() => setLoading(false)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Timeline />
      <CTA />
    </div>
  );
}

export default App;