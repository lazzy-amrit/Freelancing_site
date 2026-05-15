import {
  FiUsers,
  FiDollarSign,
  FiBriefcase,
} from "react-icons/fi";

import { Link } from "react-router-dom";

export default function Services({ darkMode }) {
  const services = [
    {
      icon: <FiUsers />,
      title: "Professional Networking",
      desc: "Helping people connect with agencies, clients, and trusted professional opportunities through strong communication and digital outreach.",
      link: "/networking",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    },

    {
      icon: <FiBriefcase />,
      title: "Career Opportunities",
      desc: "Supporting freelancers and professionals in discovering valuable work opportunities and meaningful business collaborations.",
      link: "/opportunities",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
    },

    {
      icon: <FiDollarSign />,
      title: "Digital Growth",
      desc: "Helping individuals and businesses grow their digital presence through trusted networking and modern communication strategies.",
      link: "/growth",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <section
      id="about"
      className={`
        py-28 px-6 md:px-12 transition-all duration-500

        ${darkMode
          ? "bg-black text-white"
          : "bg-white text-black"}
      `}
    >

      <div className="max-w-7xl mx-auto">

        {/* TOP */}

        <div className="text-center max-w-3xl mx-auto mb-16">

          <p
            className={`
              uppercase tracking-[4px] text-sm mb-5

              ${darkMode
                ? "text-gray-400"
                : "text-gray-600"}
            `}
          >
            What We Do
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Helping People Build Better Opportunities
          </h2>

          <p
            className={`
              mt-6 text-lg leading-relaxed

              ${darkMode
                ? "text-gray-400"
                : "text-gray-600"}
            `}
          >
            Narender Digitals works with trusted
            professional networks and agency collaborations
            to help individuals, freelancers, and businesses
            connect with the right opportunities.
          </p>

        </div>

        {/* CARDS */}

        <div className="grid md:grid-cols-3 gap-7">

          {services.map((service, index) => (
            <Link
              to={service.link}
              key={index}
              className={`
                rounded-3xl overflow-hidden border transition-all duration-500 hover:-translate-y-2 group

                ${darkMode
                  ? "bg-white/5 border-white/10"
                  : "bg-black/5 border-black/10"}
              `}
            >

              {/* IMAGE */}

              <div className="overflow-hidden">

                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[240px] object-cover group-hover:scale-105 transition duration-500"
                />

              </div>

              {/* CONTENT */}

              <div className="p-6">

                <div className="text-3xl mb-4">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  {service.title}
                </h3>

                <p
                  className={`
                    leading-relaxed

                    ${darkMode
                      ? "text-gray-400"
                      : "text-gray-600"}
                  `}
                >
                  {service.desc}
                </p>

                <div className="mt-6 font-medium">
                  Learn More →
                </div>

              </div>

            </Link>
          ))}

        </div>

      </div>

    </section>
  );
}