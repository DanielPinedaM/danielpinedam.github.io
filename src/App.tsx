import Contact from '@/components/contact/Contact';
import Experience from '@/components/experience/Experience';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ProfessionalProfile from '@/components/ProfessionalProfile';
import Projects from '@/components/projects/Projects';
import Skills from '@/components/skills/Skills';

const App = () => (
  <div className="mx-auto max-w-[1920px] bg-day font-extralight leading-[1.2] dark:bg-night">
    <Header />

    <main className="mt-[3.125rem]">
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
