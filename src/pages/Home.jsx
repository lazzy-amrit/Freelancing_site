import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import CTA from "../components/CTA";
import Contact from "../components/Contact";
import Services from "../components/Services";

export default function Home({ darkMode, setDarkMode }) {
  return (
    <main
      className={`
        transition-all duration-500 min-h-screen

        ${darkMode
          ? "bg-black text-white"
          : "bg-white text-black"}
      `}
    >

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Hero darkMode={darkMode} />
      <Services darkMode={darkMode} />

      <About darkMode={darkMode} />

      <CTA darkMode={darkMode} />

      <Contact darkMode={darkMode} />

    </main>
  );
}