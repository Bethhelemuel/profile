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
    <section>3</section> 
    <section>4</section>
    <section>5</section>
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
