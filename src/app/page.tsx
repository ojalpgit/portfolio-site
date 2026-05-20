import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Leadership from "@/components/Leadership";
import BlogPreview from "@/components/BlogPreview";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <div className="h-px bg-[#111]" />
        <About />
        <div className="h-px bg-[#111]" />
        <Experience />
        <div className="h-px bg-[#111]" />
        <Leadership />
        <div className="h-px bg-[#111]" />
        <BlogPreview />
        <div className="h-px bg-[#111]" />
        <Skills />
        <div className="h-px bg-[#111]" />
        <Education />
        <div className="h-px bg-[#111]" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
