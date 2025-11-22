import { PageTransition } from "@components";
import { AboutSection, ContactForm } from "@ui";

export const AboutPage = () => (
  <PageTransition>
    <>
      <AboutSection />
      <ContactForm />
    </>
  </PageTransition>
);
