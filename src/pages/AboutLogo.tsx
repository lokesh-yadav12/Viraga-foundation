import { motion } from "framer-motion";
import img1 from '../assets/viraganew.png'
import bgpic from '../assets/ourlogo.png'
const AboutLogo = () => {
  return (
    <div className="bg-white">
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[70vh] md:h-[90vh] overflow-hidden">
        <img
          src={bgpic}
          alt="Service and spirituality"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="mx-auto max-w-6xl px-4 sm:px-6 text-gray-900"
          >
            {/* <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              VIRAGA FOUNDATION Logo
            </h1>
            <p className="text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed">
              A Symbol of Karma Yoga, Dharma, and Selfless Service
            </p> */}
          </motion.div>
        </div>
      </section>

      {/* ================= LOGO SECTION ================= */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 sm:p-8 md:p-8 rounded-3xl shadow-xl text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-900">
            The Meaning Behind Our Logo
          </h2>

          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            src={img1}
            alt="Viraga Foundation Logo"
            className="mx-auto w-48 sm:w-60 md:w-68 mb-1 sm:mb-1 drop-shadow-2xl"
          />

          <p className="text-base sm:text-lg leading-relaxed text-gray-700 max-w-3xl mx-auto">
            The <strong className="text-orange-600">VIRAGA FOUNDATION</strong> logo represents Dharma
            (righteous duty), Seva (selfless service), and Karma (action with
            devotion), deeply rooted in the eternal wisdom of the Bhagavad Gita.
          </p>
        </motion.div>
      </section>

      {/* ================= CONTENT SECTION ================= */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-10 md:space-y-14">

          {/* Vivekananda Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
            <div className="relative bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl sm:text-3xl">🔶</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                  Swami Vivekananda's Image – The Embodiment of Karma Yoga
                </h3>
              </div>
              
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                Swami Vivekananda symbolizes selfless action and dedication to
                humanity, reflecting Lord Krishna's teaching:
              </p>

              <div className="bg-blue-50 p-4 sm:p-6 rounded-xl border-l-4 border-blue-600 mb-4 sm:mb-6">
                <blockquote className="italic text-gray-900 text-base sm:text-lg mb-3 leading-relaxed">
                  బుద్ధియుక్తో జహాతీహ ఉభే సుకృతదుష్కృతే । <br />
                  తస్మాద్యోగాయ యుజ్యస్వ యోగః కర్మసు కౌశలమ్ (2:50)
                </blockquote>

                <p className="font-semibold text-gray-900 text-base sm:text-lg">
                  "Yoga is excellence in action."
                </p>
              </div>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                The foundation follows this path by serving society without
                selfish motives, dedicating every action to the welfare of
                humanity.
              </p>
            </div>
          </motion.div>

          {/* Hands Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
            <div className="relative bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl sm:text-3xl">🤲</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                  Protective Hands – Service as Worship
                </h3>
              </div>
              
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                The open hands symbolize Seva — offering help without expecting
                rewards, as taught by Lord Krishna:
              </p>

              <div className="bg-green-50 p-4 sm:p-6 rounded-xl border-l-4 border-green-600 mb-4 sm:mb-6">
                <blockquote className="italic text-gray-900 text-base sm:text-lg mb-3 leading-relaxed">
                  కర్మణ్యేవాధికారస్తే మా ఫలేషు కదాచన । <br />
                  మా కర్మఫలహేతుర్భూః మా తే సంగోఽస్త్వకర్మణి (2:47)
                </blockquote>

                <p className="font-semibold text-gray-900 text-base sm:text-lg">
                  "You have the right to perform your duty, but not to the fruits of
                  your actions."
                </p>
              </div>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                This reflects our commitment to feeding the hungry, educating the
                underprivileged, and providing shelter to the needy.
              </p>
            </div>
          </motion.div>

          {/* Arch Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
            <div className="relative bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl sm:text-3xl">⭕</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                  Circular Arch – The Eternal Cycle of Karma & Dharma
                </h3>
              </div>
              
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                The arch signifies balance, righteousness, and divine purpose,
                aligning with Krishna's promise:
              </p>

              <div className="bg-orange-50 p-4 sm:p-6 rounded-xl border-l-4 border-orange-600 mb-4 sm:mb-6">
                <blockquote className="italic text-gray-900 text-base sm:text-lg mb-3 leading-relaxed">
                  పరిత్రాణాయ సాధూనాం వినాశాయ చ దుష్కృతామ్ । <br />
                  ధర్మసంస్థాపనార్థాయ సంభవామి యుగే యుగే (4:8)
                </blockquote>

                <p className="font-semibold text-gray-900 text-base sm:text-lg">
                  "To protect righteousness, destroy evil, and establish Dharma, I
                  manifest in every age."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Closing Card */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
            <div className="relative bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <span className="text-3xl sm:text-4xl">🙏</span>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-900">
                Committed to Karma Yoga – Selfless Service to Humanity
              </h3>

              <div className="bg-purple-50 p-4 sm:p-6 rounded-xl mb-4 sm:mb-6 max-w-3xl mx-auto">
                <blockquote className="italic text-base sm:text-lg text-gray-900 mb-3 leading-relaxed">
                  సన్నియమ్యేంద్రియగ్రామం సర్వత్ర సమబుద్ధయః । <br />
                  తే ప్రాప్నువంతి మామేవ సర్వభూతహితే రతాః (12:4)
                </blockquote>

                <p className="font-semibold text-base sm:text-lg text-gray-900">
                  "Those who work for the welfare of all beings are dear to Me."
                </p>
              </div>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
                With Karma as its foundation, <strong className="text-purple-600">VIRAGA FOUNDATION</strong> serves not for rewards, but for the well-being of all.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutLogo;