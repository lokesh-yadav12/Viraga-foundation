import { motion } from "framer-motion";
import img from '../assets/p5.png';
import ing1 from '../assets/contact.png'
const WhereWeWork = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative h-[85vh] overflow-hidden">
        <motion.img
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={img}
          className="h-full w-full object-cover"
          alt="Rural India"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center">
          <div className="max-w-6xl mx-auto px-6 text-white text-center">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl font-bold mb-4"
            >
              Where We Work
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl max-w-3xl"
            >
              Serving communities where access, awareness, and opportunity are limited.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lg text-gray-700 mb-6 leading-relaxed"
          >
            Viraga Foundation operates across India's most underserved and
            challenging geographies, focusing on regions where social,
            economic, and healthcare disparities are most pronounced.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="text-lg text-gray-700 mb-6 leading-relaxed"
          >
            Our work is deeply rooted in community engagement, collaboration
            with local stakeholders, and culturally sensitive implementation.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="space-y-3 text-gray-700 text-lg"
          >
            {[
              "🏘 Remote rural villages",
              "🏙 Urban slums and informal settlements",
              "🧕 Women, children, and elderly populations",
              "👩‍🌾 Daily wage workers and low-income families",
              "🌾 Agricultural and migration-affected regions",
            ].map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.5 + i * 0.1,
                  ease: "easeOut",
                }}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="overflow-hidden rounded-xl shadow-lg"
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            src={ing1}
            className="w-full"
            alt="Community outreach"
          />
        </motion.div>
      </section>

      {/* Impact Areas - New Card Section */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-3xl font-semibold mb-10 text-center"
        >
          Our Focus Areas
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "🌍",
              title: "Geographic Reach",
              desc: "Operating across multiple states, reaching the most marginalized communities in rural and urban settings.",
            },
            {
              icon: "👥",
              title: "Community-Centric",
              desc: "Working hand-in-hand with local leaders, volunteers, and beneficiaries to ensure culturally appropriate solutions.",
            },
            {
              icon: "🎯",
              title: "Targeted Impact",
              desc: "Focusing on vulnerable groups including women, children, elderly, and economically disadvantaged populations.",
            },
          ].map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition border border-gray-100"
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2 + 0.2,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{
                  scale: 1.2,
                  rotate: 10,
                  transition: { duration: 0.3 },
                }}
                className="text-5xl mb-4"
              >
                {card.icon}
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2 + 0.3,
                  ease: "easeOut",
                }}
                className="text-xl font-semibold mb-3 text-gray-900"
              >
                {card.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2 + 0.4,
                  ease: "easeOut",
                }}
                className="text-gray-700 leading-relaxed"
              >
                {card.desc}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Approach */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-3xl font-semibold mb-6"
          >
            Our Approach
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lg text-gray-700 leading-relaxed mb-4"
          >
            We believe real impact happens at the grassroots. Our teams work
            closely with communities to understand their challenges, co-create
            solutions, and ensure long-term sustainability.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="text-lg text-gray-700 leading-relaxed"
          >
            By partnering with local volunteers, educators, healthcare workers,
            and institutions, we ensure that our efforts are inclusive,
            effective, and scalable.
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default WhereWeWork;