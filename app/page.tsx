"use client";

import {
  Navbar,
  Hero,
  About,
  Tech,
  Contact,
  Projects,
  StarsCanvas,
} from "@/components";

export default function Home() {
  return (
    <main className="relative z-0">
      <div className=" bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10 pt-20">
        <Tech />
      </div>
      <Projects />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </main>
  );
}
