import { motion } from "framer-motion";

export default function OpportunitiesPage({ darkMode }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className={`
        min-h-screen transition-colors duration-500

        ${darkMode
          ? "bg-black text-white"
          : "bg-white text-black"}
      `}
    >

      {/* HERO */}

      <section className="px-6 md:px-12 pt-32 pb-24">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <p className={`
              uppercase tracking-[4px] text-sm mb-5

              ${darkMode
                ? "text-gray-400"
                : "text-gray-600"}
            `}>
              Career Opportunities
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Discover Better
              <br />
              Opportunities
              <br />
              For Growth
            </h1>

            <p className={`
              mt-8 text-lg leading-relaxed max-w-xl

              ${darkMode
                ? "text-gray-300"
                : "text-gray-700"}
            `}>
              Narender Digitals helps professionals,
              freelancers, and businesses connect
              with valuable opportunities and trusted
              professional collaborations.
            </p>

          </div>

          <div>

            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400&auto=format&fit=crop"
              className="rounded-[35px] shadow-2xl w-full"
            />

          </div>

        </div>

      </section>

      {/* CARDS */}

      <section className="px-6 md:px-12 pb-24">

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">

          {[
            [
              "Freelance Opportunities",
              "Helping individuals discover trusted freelance and professional collaborations."
            ],
            [
              "Agency Connections",
              "Supporting communication between agencies, freelancers, and businesses."
            ],
            [
              "Career Growth",
              "Creating valuable opportunities that support long-term professional success."
            ],
          ].map((item, index) => (

            <div
              key={index}
              className={`
                rounded-3xl p-8 border

                ${darkMode
                  ? "bg-white/5 border-white/10"
                  : "bg-black/5 border-black/10"}
              `}
            >

              <h3 className="text-2xl font-semibold mb-4">
                {item[0]}
              </h3>

              <p className={`
                leading-relaxed

                ${darkMode
                  ? "text-gray-400"
                  : "text-gray-600"}
              `}>
                {item[1]}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* STORY */}

      <section className="px-6 md:px-12 pb-28">

        <div className="max-w-5xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-10">
            Why Opportunities Matter
          </h2>

          <div className={`
            space-y-8 text-lg leading-relaxed

            ${darkMode
              ? "text-gray-300"
              : "text-gray-700"}
          `}>

            <p>
              Better opportunities help professionals
              improve their skills, build stronger
              connections, and grow their careers.
            </p>

            <p>
              Narender Digitals focuses on helping
              individuals and businesses discover
              meaningful collaborations and valuable
              professional opportunities.
            </p>

            <p>
              Through trusted communication and
              modern networking strategies, new
              possibilities become easier to discover
              and build upon.
            </p>

          </div>

        </div>

      </section>

      {/* FINAL CTA */}

      <section className="px-6 md:px-12 pb-28">

        <div className={`
          max-w-6xl mx-auto rounded-[35px] overflow-hidden border

          ${darkMode
            ? "bg-white/5 border-white/10"
            : "bg-black/5 border-black/10"}
        `}>

          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop"
            className="w-full h-[260px] md:h-[380px] object-cover"
          />

          <div className="p-8 md:p-14 text-center">

            <p className={`
              uppercase tracking-[4px] text-sm mb-5

              ${darkMode
                ? "text-gray-400"
                : "text-gray-600"}
            `}>
              Connected With FTA Freelancers
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Building Better Professional Futures
            </h2>

            <p className={`
              mt-6 text-lg leading-relaxed max-w-3xl mx-auto

              ${darkMode
                ? "text-gray-300"
                : "text-gray-700"}
            `}>
              Narender Digitals works alongside trusted
              professional collaborations connected with
              FTA Freelancers to help people discover
              opportunities and long-term growth.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">

              <a
                href="https://freelancetechacademy.com/"
                target="_blank"
                className={`
                  px-7 py-3 rounded-full font-medium transition duration-300 hover:-translate-y-1

                  ${darkMode
                    ? "bg-white text-black"
                    : "bg-black text-white"}
                `}
              >
                Visit FTA
              </a>

              <a
                href="/"
                className={`
                  px-7 py-3 rounded-full border transition duration-300 hover:-translate-y-1

                  ${darkMode
                    ? "border-white/20 hover:bg-white hover:text-black"
                    : "border-black/20 hover:bg-black hover:text-white"}
                `}
              >
                Back To Home
              </a>

            </div>

          </div>

        </div>

      </section>

    </motion.main>
  );
}