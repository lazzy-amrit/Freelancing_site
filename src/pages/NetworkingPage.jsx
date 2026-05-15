import { motion } from "framer-motion";

export default function NetworkingPage({ darkMode }) {
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
              Professional Networking
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Building Strong
              <br />
              Professional
              <br />
              Connections
            </h1>

            <p className={`
              mt-8 text-lg leading-relaxed max-w-xl

              ${darkMode
                ? "text-gray-300"
                : "text-gray-700"}
            `}>
              Narender Digitals helps freelancers,
              professionals, and businesses connect
              through trusted communication, digital
              networking, and meaningful collaborations.
            </p>

          </div>

          <div>

            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop"
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
              "Professional Reach",
              "Helping people connect with valuable professional networks and collaborations."
            ],
            [
              "Trusted Communication",
              "Building strong communication between professionals, freelancers, and agencies."
            ],
            [
              "Growth Opportunities",
              "Supporting long-term growth through trusted professional relationships."
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
            Why Networking Matters
          </h2>

          <div className={`
            space-y-8 text-lg leading-relaxed

            ${darkMode
              ? "text-gray-300"
              : "text-gray-700"}
          `}>

            <p>
              Professional networking creates valuable
              opportunities for freelancers, agencies,
              and growing businesses by building trusted
              relationships and communication systems.
            </p>

            <p>
              Narender Digitals focuses on helping
              individuals connect with meaningful
              collaborations that support professional
              development and digital growth.
            </p>

            <p>
              Through trusted networking and modern
              outreach strategies, better opportunities
              and stronger professional connections
              become possible.
            </p>

          </div>

        </div>

      </section>

      {/* FINAL CTA */}

      <section className="px-6 md:px-12 pb-28">

        <div
          className={`
            max-w-6xl mx-auto rounded-[35px] overflow-hidden border

            ${darkMode
              ? "bg-white/5 border-white/10"
              : "bg-black/5 border-black/10"}
          `}
        >

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
              Helping People Build Better Connections
            </h2>

            <p className={`
              mt-6 text-lg leading-relaxed max-w-3xl mx-auto

              ${darkMode
                ? "text-gray-300"
                : "text-gray-700"}
            `}>
              Narender Digitals works alongside trusted
              professional collaborations connected with
              FTA Freelancers to help individuals and
              businesses discover valuable opportunities
              and long-term growth.
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