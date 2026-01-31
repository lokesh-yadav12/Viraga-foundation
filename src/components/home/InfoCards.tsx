import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Who we are",
    description:
      "We support the public health system by implementing innovative maternal and child health solutions designed for scale.",
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d",
    bg: "bg-[#1E3F6E]",
    link: "/who-we-are",
  },
  {
    title: "What we do",
    description:
      "We use data, and partner with health workers to identify and manage risk, improve capacities, and elevate the quality of care at the last mile.",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3",
    bg: "bg-[#A53A0A]",
    link: "/what-we-do",
  },
  {
    title: "Where we work",
    description:
      "We work across India's most challenging geographies, largely with marginalized communities.",
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d",
    bg: "bg-[#E39A2E]",
    link: "/where-we-work",
  },
];

const InfoCards = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-12 bg-gray-200">
      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-500 text-center mb-8 sm:mb-12 lg:mb-16"
      >
        Get to Know about us
      </motion.h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`${card.bg} rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-full min-h-[450px] sm:min-h-[500px]`}
          >
            {/* Image */}
            <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow p-6 sm:p-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
                {card.title}
              </h3>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 flex-grow">
                {card.description}
              </p>

              {/* Button */}
              <Link
                to={card.link}
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 text-sm sm:text-base w-full sm:w-auto"
              >
                Know More
                <span className="text-lg">→</span>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default InfoCards;