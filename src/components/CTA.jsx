import { Link } from "react-router-dom";

export default function CTA({ darkMode }) {
  return (
    <section
      className={`
        py-24 px-6 md:px-12 transition-all duration-500

        ${darkMode
          ? "bg-black text-white"
          : "bg-white text-black"}
      `}
    >

      <div
        className={`
          max-w-5xl mx-auto rounded-[40px] p-10 md:p-16 border text-center transition-all duration-500

          ${darkMode
            ? "bg-white/5 border-white/10"
            : "bg-black/5 border-black/10"}
        `}
      >

        <p
          className={`
            uppercase tracking-[4px] text-sm mb-5

            ${darkMode
              ? "text-gray-400"
              : "text-gray-600"}
          `}
        >
          Learn More
        </p>

        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Discover More About
          <br />
          Narender Digitals
        </h2>

        <p
          className={`
            mt-6 text-lg leading-relaxed max-w-3xl mx-auto

            ${darkMode
              ? "text-gray-400"
              : "text-gray-600"}
          `}
        >
          Learn more about our professional networking,
          digital outreach, opportunity-focused approach,
          and how we help individuals and businesses
          build meaningful professional connections.
        </p>

        <div className="mt-10">

          <Link
            to="/about"
            className={`
              inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium transition duration-300 hover:scale-105

              ${darkMode
                ? "bg-white text-black"
                : "bg-black text-white"}
            `}
          >
            Know More →
          </Link>

        </div>

      </div>

    </section>
  );
}