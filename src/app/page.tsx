import AboutSection from "@/components/AboutSection";
import ProjectSection from "@/components/ProjectSection";

export default function Home() {
  return (
    <main>
      <AboutSection />
      <hr className="my-3"/>
      <ProjectSection />
    </main>
  )
}
