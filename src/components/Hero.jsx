import { motion } from "framer-motion";
import {
  FiUsers,
  FiBriefcase,
  FiTrendingUp,
} from "react-icons/fi";

export default function Hero({ darkMode }) {
  return (
    <section
      className={`
        min-h-screen flex items-center justify-center px-6 md:px-12 pt-28 pb-20 transition-all duration-500

        ${darkMode
          ? "bg-black text-white"
          : "bg-white text-black"}
      `}
    >

      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className={`
            uppercase tracking-[4px] text-sm mb-5 font-medium

            ${darkMode
              ? "text-gray-400"
              : "text-gray-600"}
          `}>
            Narender Digitals
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Connecting People
            <br />
            With Better
            <br />
            Opportunities
          </h1>

          <p className={`
            mt-7 text-lg leading-relaxed max-w-xl

            ${darkMode
              ? "text-gray-300"
              : "text-gray-700"}
          `}>
            Narender Digitals helps connect professionals,
            freelancers, agencies, and clients through
            trusted networking and digital outreach.

            <br />
            <br />

            Our goal is to build valuable professional
            connections that help individuals grow and
            businesses find the right people.
          </p>

          {/* BUTTONS */}

          <div className="mt-10 flex gap-4 flex-wrap">

            <a
              href="#about"
              className={`
                px-6 py-3 rounded-full font-medium transition duration-300

                ${darkMode
                  ? "bg-white text-black hover:scale-105"
                  : "bg-black text-white hover:scale-105"}
              `}
            >
              Explore More
            </a>

            <a
              href="https://freelancetechacademy.com/"
              target="_blank"
              className={`
                px-6 py-3 rounded-full border transition duration-300

                ${darkMode
                  ? "border-white/20 hover:bg-white hover:text-black"
                  : "border-black/20 hover:bg-black hover:text-white"}
              `}
            >
              Visit FTA
            </a>

          </div>

        </motion.div>

        {/* RIGHT SIDE */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="grid gap-5"
        >

          {/* CARD 1 */}

          <div className={`
            p-6 rounded-3xl border transition-all duration-500

            ${darkMode
              ? "bg-white/5 border-white/10"
              : "bg-black/5 border-black/10"}
          `}>

            <FiUsers className="text-3xl mb-4" />

            <h3 className="text-2xl font-semibold mb-3">
              Professional Networking
            </h3>

            <p className={`
              leading-relaxed

              ${darkMode
                ? "text-gray-400"
                : "text-gray-600"}
            `}>
              Helping individuals and agencies connect
              through trusted professional relationships
              and digital communication.
            </p>

          </div>

          {/* CARD 2 */}

          <div className={`
            p-6 rounded-3xl border transition-all duration-500

            ${darkMode
              ? "bg-white/5 border-white/10"
              : "bg-black/5 border-black/10"}
          `}>

            <FiBriefcase className="text-3xl mb-4" />

            <h3 className="text-2xl font-semibold mb-3">
              Career & Client Opportunities
            </h3>

            <p className={`
              leading-relaxed

              ${darkMode
                ? "text-gray-400"
                : "text-gray-600"}
            `}>
              Supporting professionals and businesses
              by helping them discover valuable
              opportunities and collaborations.
            </p>

          </div>

          {/* CARD 3 */}

          <div className={`
            p-6 rounded-3xl border transition-all duration-500

            ${darkMode
              ? "bg-white/5 border-white/10"
              : "bg-black/5 border-black/10"}
          `}>

            <FiTrendingUp className="text-3xl mb-4" />

            <h3 className="text-2xl font-semibold mb-3">
              Digital Growth
            </h3>

            <p className={`
              leading-relaxed

              ${darkMode
                ? "text-gray-400"
                : "text-gray-600"}
            `}>
              Building modern digital presence and
              meaningful outreach strategies for
              long-term professional growth.
            </p>

          </div>

        </motion.div>

      </div>

    </section>
  );
}