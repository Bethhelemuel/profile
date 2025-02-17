// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import TechStack from "./teck-stack";
import Skills from "./skills";
import Projects from "./projects";
import Resume from "./resume";
import Testimonial from "./testimonial";
import PopularClients from "./popular-clients";
import ContactForm from "./contact-form";
import Timeline from "./Timeline";
import Certifications from "./Certifications";


export default function Portfolio() {
  return (
    <>
      <Navbar />

      <main>
  <article>
    <section>
      <Hero/>
    </section>
    <section>
    <TechStack />
    </section> 
    <section>
      <Timeline/>
    </section> 
    <section>
    <Projects/>
    </section>
    <section>
      <Certifications/>
    </section>
  </article>
</main>  

      {/* <Hero />
      <Clients />
      <Skills />
      <Projects />
      <Resume />
      <Testimonial />
      <PopularClients />
      <ContactForm /> 
      <Footer />*/}
    </>
  );
}
