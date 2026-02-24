import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import image1 from '../../assets/logoup.png'
import image2 from '../../assets/cele1.png'
import image3 from '../../assets/do1.png'
const cards = [
  {
    title: "Who we are",
    description:
      "We support the public health system by implementing innovative maternal and child health solutions designed for scale.",
    image: image1,
    bg: "bg-blue-500",
    link: "/who-we-are",
  },
  {
    title: "What we do",
    description:
      "We use data, and partner with health workers to identify and manage risk, improve capacities, and elevate the quality of care at the last mile.",
    image: image2,
    bg: "bg-orange-600",
    link: "/what-we-do",
  },
  {
    title: "Where we work",
    description:
      "We work across India's most challenging geographies, largely with marginalized communities.",
    image: image3,
    bg: "bg-yellow-500",
    link: "/where-we-work",
  },
];

const InfoCards = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-gray-50 via-white to-orange-50 overflow-hidden">
      {/* Header with stagger animation */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-8 sm:mb-12 lg:mb-16"
      >
        <motion.h2
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.8, 
            ease: [0.25, 0.46, 0.45, 0.94],
            type: "spring",
            stiffness: 100
          }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-600 mb-4"
        >
          Get to Know about Viraga
        </motion.h2>
        
        {/* Decorative underline */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent max-w-md mx-auto"
        />
      </motion.div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60, rotateX: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ 
              duration: 0.7, 
              delay: index * 0.15,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            whileHover={{ 
              y: -12,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            className="perspective-1000"
          >
            <div className={`${card.bg} rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col min-h-[400px] sm:min-h-[400px] relative group`}>
              {/* Shine effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out z-10 pointer-events-none"
                style={{ transform: 'skewX(-20deg)' }}
              />

              {/* Image with parallax-like effect */}
              <motion.div 
                className="relative h-40 sm:h-48 lg:h-56 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <motion.img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.2 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  whileHover={{ scale: 1.15 }}
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>

              {/* Content */}
              <div className="flex flex-col flex-grow p-6 sm:p-8 relative">
                {/* Animated background circles */}
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <motion.h3 
                  className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3 relative z-10"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
                >
                  {card.title}
                </motion.h3>
                
                <motion.p 
                  className="text-white/90 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 flex-grow relative z-10"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.4, duration: 0.5 }}
                >
                  {card.description}
                </motion.p>

                {/* Button with advanced animations */}
                <Link
                  to={card.link}
                  className="relative z-10 w-full sm:w-auto"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.5, duration: 0.5 }}
                    className="group/button inline-flex items-center justify-center gap-2 bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 text-sm sm:text-base w-full sm:w-auto overflow-hidden relative"
                  >
                    {/* Button background animation */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-orange-100 to-yellow-100"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    <span className="relative z-10">Know More</span>
                    <motion.div
                      className="relative z-10"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </motion.div>
                </Link>
              </div>

              {/* Corner accent */}
              <motion.div
                className="absolute bottom-0 right-0 w-24 h-24 bg-white/10"
                style={{ 
                  clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
                }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.6, duration: 0.5 }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-orange-200/30 rounded-full blur-xl"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 bg-blue-200/30 rounded-full blur-xl"
        animate={{
          y: [0, 20, 0],
          x: [0, -10, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default InfoCards;