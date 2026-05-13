import ScrollyCanvas from '@/components/ScrollyCanvas';
import Arsenal from '@/components/Arsenal';
import Services from '@/components/Services';
import Experience from '@/components/Experience';
import Certifications from '@/components/Certifications';
import Projects from '@/components/Projects';
import FooterCTA from '@/components/FooterCTA';

export default function Home() {
  return (
    <main className="bg-[#050505] min-h-screen text-white pt-24 md:pt-0 scroll-smooth">
      <div id="home" className="relative">
        <ScrollyCanvas />
      </div>
      
      <Arsenal />
      <Services />
      <Experience />
      <Certifications />
      <Projects />
      <FooterCTA />
    </main>
  );
}
