import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Github from "@/components/Github";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (<>
    <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-[100] focus:rounded focus:bg-primary focus:px-3 focus:py-2">Skip to content</a>
    <Navbar />
    <main id="main"><Hero /><About /><Skills /><Projects /><Experience /><Certifications /><Github /><Contact /></main>
    <Footer />
  </>);
}
