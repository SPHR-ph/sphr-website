import {
  AboutSection,
  ServiceSection,
  CustomerSection,
  ProjectSection, 
  ContactSection
} from "@components";

export default function Home() {
  return (
  <main className="border-b border-gray-100">
      <AboutSection />
      <ServiceSection />
      <ProjectSection />
      <CustomerSection />
      <ContactSection />
    </main>
  );
}
