import { Navbar } from "./layout/Navbar";
import { About } from "./sections/About";
import { Projects } from "./sections/Projects";
import { Experience } from "./sections/Experience";
import { Testimonials } from "./sections/Testimonials";
import { Contact } from "./sections/Contact";
import { Hero } from "./sections/Hero";

function App() {


    return (
      <div className="min-h h-screen overflow-h">
        <Navbar />
        {/* Page layout: ensure About, Projects, Experience, Contacts are imported */}
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Testimonials />
          <Contact />
        </main>
      </div>
    )
  }




export default App
