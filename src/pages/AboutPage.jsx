export default function AboutPage({ darkMode }) {
  return (
    <main
      className={`
        min-h-screen px-6 md:px-12 py-24 transition-all duration-500

        ${darkMode
          ? "bg-black text-white"
          : "bg-white text-black"}
      `}
    >

      <div className="max-w-5xl mx-auto">

        <p className={`
          uppercase tracking-[4px] text-sm mb-6

          ${darkMode
            ? "text-gray-400"
            : "text-gray-600"}
        `}>
          About Narender Digitals
        </p>

        <h1 className="text-5xl font-bold leading-tight mb-10">
          Building Professional Connections
          Through Trusted Digital Networking
        </h1>

        <img
          src="https://picsum.photos/1200/500"
          className="w-full rounded-3xl mb-10"
        />

        <div className={`
          space-y-8 text-lg leading-relaxed

          ${darkMode
            ? "text-gray-300"
            : "text-gray-700"}
        `}>

          <p>
            Narender Digitals focuses on helping
            professionals, freelancers, agencies,
            and growing businesses connect through
            meaningful networking and opportunity-focused
            collaborations.
          </p>

          <p>
            By working alongside trusted agency networks
            and digital outreach systems, we help create
            valuable connections that support professional
            growth and long-term development.
          </p>

          <p>
            Our approach is centered around communication,
            trust, and helping people discover the right
            opportunities based on their goals and skills.
          </p>

        </div>

      </div>

    </main>
  );
}