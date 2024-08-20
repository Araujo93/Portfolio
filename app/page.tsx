"use client";

import { Navbar, Hero, About, Tech, Contact } from "@/components";
import useSectionWrapper from "./hooks/useSectionWrapper";

export default function Home() {
  const { Component: AboutSection } = useSectionWrapper("about", <About />);
  const { Component: TechSection } = useSectionWrapper("", <Tech />);
  return (
    <main className="relative z-0">
      <div className=" bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      {AboutSection}
      <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10 pt-20">
        {TechSection}
      </div>
      <div className="relative z-0">
        <Contact />
        {/* <StarCanvas /> */}
      </div>
    </main>
  );
}
