import { motion } from "framer-motion";

const WhatWeDo = () => {
  return (
    <div className="bg-gray-50">
      {/* HERO */}
      <section className="relative h-[80vh] overflow-hidden">
        <motion.img
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3"
          className="h-full w-full object-cover"
          alt="Health workers"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center">
          <div className="mx-auto max-w-6xl px-6 text-white">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl font-bold mb-6"
            >
              What We Do
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl max-w-3xl"
            >
              Seven initiatives designed to create holistic and lasting impact.
            </motion.p>
          </div>
        </div>
      </section>

      {/* INITIATIVES */}
      <section className="max-w-6xl mx-auto px-6 py-20 space-y-20">
        {[
          {
            title: "Food Donation – Narayana Seva",
            img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
            desc:
              "Hunger weakens not only the body but also hope. Through Narayana Seva, we ensure that no one sleeps hungry.",
            points: [
              "Nutritious meals for children, elderly, and daily wage workers",
              "Community kitchens and food distribution drives",
              "Emergency food support during crises",
              "Focus on hygiene, nutrition, and dignity",
            ],
          },
          {
            title: "Scholarship & Educational Guidance",
            img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
            desc:
              "Education is the most powerful tool for social mobility and empowerment.",
            points: [
              "Financial scholarships for deserving students",
              "Mentorship and academic guidance",
              "Career counseling and future planning",
              "Support for higher education access",
            ],
          },
          {
            title: "Health Awareness & Medical Support",
            img: "https://images.unsplash.com/photo-1584515933487-779824d29309",
            desc:
              "Preventive healthcare and awareness save lives.",
            points: [
              "Health awareness camps and sessions",
              "Guidance to government healthcare schemes",
              "Promoting preventive and wellness practices",
              "Connecting communities with medical resources",
            ],
          },
          {
            title: "Skill Development & Career Guidance",
            img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
            desc:
              "Economic independence is key to long-term empowerment.",
            points: [
              "Skill training aligned with job market needs",
              "Career and employability guidance",
              "Entrepreneurship awareness programs",
              "Livelihood generation support",
            ],
          },
          {
            title: "Teachings of Great Leaders",
            img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
            desc:
              "Values shape societies. Wisdom shapes generations.",
            points: [
              "Teachings of Swami Vivekananda",
              "Value-based education programs",
              "Youth leadership development",
              "Promoting ethics and social responsibility",
            ],
          },
          {
            title: "Disaster Relief & Humanitarian Aid",
            img: "https://images.unsplash.com/photo-1509099836639-18ba1795216d",
            desc:
              "In moments of crisis, timely support saves lives.",
            points: [
              "Emergency food, shelter, and medical aid",
              "Rehabilitation and recovery support",
              "Long-term community rebuilding",
              "Disaster preparedness initiatives",
            ],
          },
        ].map((item, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`grid md:grid-cols-2 gap-10 items-center ${
                isEven ? "" : "md:grid-flow-dense"
              }`}
            >
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className={isEven ? "" : "md:col-start-2"}
              >
                <div className="overflow-hidden rounded-xl shadow-lg">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    src={item.img}
                    className="w-full"
                    alt={item.title}
                  />
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? 60 : -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className={isEven ? "" : "md:col-start-1 md:row-start-1"}
              >
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                  className="text-3xl font-semibold mb-4"
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                  className="text-lg text-gray-700 mb-4"
                >
                  {item.desc}
                </motion.p>
                <motion.ul
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                  className="list-disc list-inside space-y-2 text-gray-700"
                >
                  {item.points.map((p, i) => (
                    <motion.li
                      key={p}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: 0.7 + i * 0.1,
                        ease: "easeOut",
                      }}
                    >
                      {p}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </motion.div>
          );
        })}
      </section>
    </div>
  );
};

export default WhatWeDo;