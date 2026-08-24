import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ProfessionalProfile from '@/components/ProfessionalProfile';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';

const App = () => (
  /* contenedor padre de toda la pagina web */
  <div className="mx-auto max-w-[1920px] bg-day font-extralight leading-[1.2] dark:bg-night">
    <Header />

    <main className="mt-[3.125rem]">
      {/* centrar el contenido principal de la pagina web (Responsive) */}
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
