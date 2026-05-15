import {
  FiYoutube,
  FiPhone,
  FiMessageCircle,
} from "react-icons/fi";

export default function Contact({ darkMode }) {
  return (
    <section
      className={`
        py-28 px-6 md:px-12 transition-colors duration-500

        ${darkMode
          ? "bg-black text-white"
          : "bg-white text-black"}
      `}
    >

      <div className="max-w-7xl mx-auto">

        {/* TOP */}

        <div className="text-center max-w-3xl mx-auto mb-20">

          <p
            className={`
              uppercase tracking-[4px] text-sm mb-5

              ${darkMode
                ? "text-gray-400"
                : "text-gray-600"}
            `}
          >
            For More Details
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Let’s Build Better
            <br />
            Opportunities Together
          </h2>

          <p
            className={`
              mt-6 text-lg leading-relaxed

              ${darkMode
                ? "text-gray-400"
                : "text-gray-600"}
            `}
          >
            Connect with Narender Digitals through YouTube,
            WhatsApp, or direct communication for professional
            networking, collaborations, and growth opportunities.
          </p>

        </div>

        {/* BUTTONS */}

        <div className="flex flex-wrap justify-center gap-5 mb-20">

          <a
            href="https://www.youtube.com/@Narinderkaur-j4x"
            target="_blank"
            className={`
              px-8 py-4 rounded-full border flex items-center gap-3 transition duration-300 hover:-translate-y-1

              ${darkMode
                ? "bg-white/5 border-white/10 hover:bg-white hover:text-black"
                : "bg-black/5 border-black/10 hover:bg-black hover:text-white"}
            `}
          >
            <FiYoutube className="text-xl" />
            YouTube
          </a>

          <a
            href="#"
            className={`
              px-8 py-4 rounded-full border flex items-center gap-3 transition duration-300 hover:-translate-y-1

              ${darkMode
                ? "bg-white/5 border-white/10 hover:bg-white hover:text-black"
                : "bg-black/5 border-black/10 hover:bg-black hover:text-white"}
            `}
          >
            <FiMessageCircle className="text-xl" />
            WhatsApp
          </a>

          <a
            href="#"
            className={`
              px-8 py-4 rounded-full border flex items-center gap-3 transition duration-300 hover:-translate-y-1

              ${darkMode
                ? "bg-white/5 border-white/10 hover:bg-white hover:text-black"
                : "bg-black/5 border-black/10 hover:bg-black hover:text-white"}
            `}
          >
            <FiPhone className="text-xl" />
            Mobile No.
          </a>

        </div>

        {/* DETAILS */}

        <div
          className={`
            rounded-[35px] p-8 md:p-12 border mb-16

            ${darkMode
              ? "bg-white/5 border-white/10"
              : "bg-black/5 border-black/10"}
          `}
        >

          <h3 className="text-3xl font-bold mb-8">
            Contact Details
          </h3>

          <div
            className={`
              space-y-6 text-lg leading-relaxed

              ${darkMode
                ? "text-gray-300"
                : "text-gray-700"}
            `}
          >

            <div>
              <p className="font-semibold mb-1">
                YouTube Channel
              </p>

              <a
                href="https://www.youtube.com/@Narinderkaur-j4x"
                target="_blank"
                className="underline break-all"
              >
                youtube.com/@Narinderkaur-j4x
              </a>
            </div>

            <div>
              <p className="font-semibold mb-1">
                WhatsApp
              </p>

              <p>
                +34 722344019
              </p>
            </div>

            <div>
              <p className="font-semibold mb-1">
                Mobile Number
              </p>

              <p>
                +34 722344019
              </p>
            </div>

          </div>

        </div>

        {/* REVIEWS */}

        <div className="grid md:grid-cols-2 gap-8">

          {/* REVIEW 1 */}

          <div
            className={`
              rounded-[30px] p-8 border

              ${darkMode
                ? "bg-white/5 border-white/10"
                : "bg-black/5 border-black/10"}
            `}
          >

            <p
              className={`
                text-lg leading-relaxed italic

                ${darkMode
                  ? "text-gray-300"
                  : "text-gray-700"}
              `}
            >
              “Professional communication and very supportive
              throughout the process. Great experience working
              together and building valuable connections.”
            </p>

            <div className="mt-6">
              <h4 className="font-semibold text-xl">
                Aman Sharma
              </h4>

              <p
                className={`
                  mt-1

                  ${darkMode
                    ? "text-gray-400"
                    : "text-gray-600"}
                `}
              >
                Freelancer
              </p>
            </div>

          </div>

          {/* REVIEW 2 */}

          <div
            className={`
              rounded-[30px] p-8 border

              ${darkMode
                ? "bg-white/5 border-white/10"
                : "bg-black/5 border-black/10"}
            `}
          >

            <p
              className={`
                text-lg leading-relaxed italic

                ${darkMode
                  ? "text-gray-300"
                  : "text-gray-700"}
              `}
            >
              “Narender Digitals helped us connect with
              the right opportunities and maintain smooth
              professional communication.”
            </p>

            <div className="mt-6">
              <h4 className="font-semibold text-xl">
                Priya Verma
              </h4>

              <p
                className={`
                  mt-1

                  ${darkMode
                    ? "text-gray-400"
                    : "text-gray-600"}
                `}
              >
                Agency Collaboration
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}