import { motion } from "framer-motion";

const EducationProgrammeSection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          
          {/* IMAGE SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7"
              alt="Education programme"
              className="rounded-2xl shadow-2xl"
            />

            {/* Floating Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              viewport={{ once: true }}
              className="absolute left-6 top-6 max-w-xs text-xl sm:text-4xl font-extrabold uppercase leading-tight text-white drop-shadow-lg"
            >
              Vibrant Futures <br /> Transforming Lives
            </motion.h2>
          </motion.div>

          {/* CONTENT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6 text-3xl font-bold text-blue-900">
              Points on Education Programme
            </h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-lg leading-relaxed text-gray-700"
            >
              We are initiating an education-based programme focused on
              enhancing learning opportunities and empowering students through
              equitable access to high-quality education, regardless of their
              socio-economic backgrounds.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-4 text-lg leading-relaxed text-gray-700"
            >
              Our initiative aspires to build a brighter future by fostering an
              inclusive learning environment that nurtures talent, encourages
              creativity, and instills a lifelong love for knowledge.
            </motion.p>

            {/* POINTS */}
            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
              className="mt-8 space-y-4"
            >
              {[
                "Equitable access to quality education",
                "Support for underprivileged students",
                "Holistic learning beyond academics",
                "Creativity, innovation, and critical thinking",
                "Mentorship and long-term guidance",
              ].map((point) => (
                <motion.li
                  key={point}
                  variants={{
                    hidden: { opacity: 0, x: 30 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                  className="flex items-start gap-3 text-lg text-gray-800"
                >
                  <span className="mt-1 h-3 w-3 rounded-full bg-blue-700"></span>
                  {point}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>

      {/* Decorative Gradient */}
      {/* <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-100 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 -bottom-40 h-[500px] w-[500px] rounded-full bg-orange-100 blur-3xl" /> */}
    </section>
  );
};

export default EducationProgrammeSection;
