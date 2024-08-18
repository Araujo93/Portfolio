"use client";

// components
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Tech from "@/components/Tech";

export default function Home() {
  return (
    <main className="relative z-0 snap-mandotory snap-y">
      <div>
        <Navbar />

        <Hero />
      </div>

      <div className="bg-about bg-cover bg-center bg-no-repeat">
        <About />
      </div>
      <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
        <Tech />
      </div>
    </main>
  );
}
