import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, EducationTimeline, Hero, Navbar, Tech, StarsCanvas } from "./components";
import ProjectsSection from "./components/home/projects";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <ProjectsSection/>
        {/* <Works /> */}
        <section id="education">
          <EducationTimeline />
        </section>
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
