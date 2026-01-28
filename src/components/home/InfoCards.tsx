import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Who we are",
    description:
      "We support the public health system by implementing innovative maternal and child health solutions designed for scale.",
    image:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d",
    bg: "bg-[#1E3F6E]",
    link: "/who-we-are",
  },
  {
    title: "What we do",
    description:
      "We use data, and partner with health workers to identify and manage risk, improve capacities, and elevate the quality of care at the last mile.",
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3",
    bg: "bg-[#A53A0A]",
    link: "/what-we-do",
  },
  {
    title: "Where we work",
    description:
      "We work across India's most challenging geographies, largely with marginalized communities.",
    image:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d",
    bg: "bg-[#E39A2E]",
    link: "/where-we-work",
  },
];

const InfoCards = () => {
  return (
    <div className="bg-white py-2 max-h-screen">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-black text-center text-5xl font-bold py-10"
        >
          Get to Know about us
        </motion.h1>
    <div className="grid gap-2 md:grid-cols-3 bg-white px-6">
      {cards.map((card, index) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ 
            duration: 0.7, 
            delay: index * 0.2,
            ease: "easeOut"
          }}
          whileHover={{ y: -10 }}
          className="overflow-hidden rounded-md shadow-lg"
        >
          {/* Image */}
          <div className="h-52 overflow-hidden">
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              src={card.image}
              alt={card.title}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Content */}
          <div className={`${card.bg} p-6 text-white h-[250px] flex flex-col`}>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2 + 0.2,
                ease: "easeOut"
              }}
              className="mb-3 text-2xl font-semibold"
            >
              {card.title}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2 + 0.3,
                ease: "easeOut"
              }}
              className="mb-3 text-sm leading-relaxed"
            >
              {card.description}
            </motion.p>

            {/* Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.2 + 0.4,
                ease: "easeOut"
              }}
              className="mt-auto"
            >
              <Link
                to={card.link}
                className="inline-flex w-fit items-center gap-2 text-white rounded border border-white px-4 py-2 text-sm hover:bg-white hover:text-black transition"
              >
                Know More <motion.span
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  →
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
    </div>
  );
};

export default InfoCards;