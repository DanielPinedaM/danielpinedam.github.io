import Contact from "@/components/contact/Contact";
import Experience from "@/components/experience/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProfessionalProfile from "@/components/ProfessionalProfile";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";

const App = () => (
  <div className="mx-auto max-w-480 font-normal leading-[1.2]">
    <Header />

    <main className="mt-12.5">
      <div className="mx-auto max-w-[min(90dvw,83.25rem)]">
        <ProfessionalProfile />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>

    <Footer />
  </div>
);

export default App;
