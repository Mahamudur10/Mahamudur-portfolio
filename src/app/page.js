import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Education />
      <WorkExperience />
      <Projects />
      <Contact />
    </div>
  );
}
