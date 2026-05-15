export default function About({ darkMode }) {
  return (
    <section
      className={`
        py-32 px-8 border-t transition-all duration-500

        ${darkMode
          ? "border-white/10"
          : "border-black/10"}
      `}
    >

      <div className="max-w-5xl mx-auto text-center">

        <p className={`
          uppercase tracking-[4px] text-sm mb-6

          ${darkMode
            ? "text-gray-500"
            : "text-gray-600"}
        `}>
          What We Do
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
          Helping professionals and agencies
          build valuable connections.
        </h2>

        <p className={`
          mt-8 leading-relaxed max-w-3xl mx-auto

          ${darkMode
            ? "text-gray-400"
            : "text-gray-600"}
        `}>
          Narender Digitals works alongside trusted networks and
          professional collaborations to connect individuals,
          freelancers, and opportunities through modern digital
          communication and outreach.
        </p>

      </div>

    </section>
  );
}