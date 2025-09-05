import { PageTransition } from "@components";
import { AboutSection, ContactForm } from "@ui";

export const AboutPage = () => (
  <PageTransition>
    <main className="page">
      <AboutSection />
      <ContactForm />
    </main>
  </PageTransition>
);
