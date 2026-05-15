import { FiMoon, FiSun } from "react-icons/fi";

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className={`
      w-full border-b px-8 py-5 flex justify-between items-center fixed top-0 z-50 backdrop-blur-md transition-all duration-300

      ${darkMode
        ? "bg-black/30 border-white/10 text-white"
        : "bg-white/30 border-black/10 text-black"}
    `}>

      <h1 className="text-xl font-semibold tracking-wide">
        Narender Digitals
      </h1>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`
          p-2 rounded-full border transition hover:scale-105

          ${darkMode
            ? "border-white/20"
            : "border-black/20"}
        `}
      >
        {darkMode ? <FiSun /> : <FiMoon />}
      </button>

    </nav>
  );
}