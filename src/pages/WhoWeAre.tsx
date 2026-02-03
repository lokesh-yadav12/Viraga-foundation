import img from '../assets/whoweare.png';
const WhoWeAre = () => {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative h-[85vh]">
        <img
          src={img}
          className="h-full w-full object-cover"
          alt="Community empowerment"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center text-center">
          <div className="mx-auto max-w-6xl px-6 text-white">
            <h1 className="text-5xl font-bold mb-6">Who We Are</h1>
            <p className="text-xl max-w-3xl">
              A people-centric organization transforming compassion into
              sustainable social change.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-2xl shadow-md border-l-4 border-orange-500 mb-10">
          <p className="text-lg text-gray-800 leading-relaxed">
            Inspired by the timeless symbolism of <strong className="text-orange-600">Surya Bhagavan's seven horses</strong>,
            which represent energy, movement, and the triumph of light over darkness,
            <strong className="text-orange-600"> Viraga Foundation</strong> was born from a deep commitment to serve humanity.
          </p>
        </div>

        <div className="bg-blue-50 p-8 rounded-2xl shadow-md border-l-4 border-blue-500 mb-12">
          <p className="text-lg text-gray-800 leading-relaxed">
            We believe that meaningful change is not created through temporary aid,
            but through <strong className="text-blue-600">empowering individuals and communities</strong> with knowledge,
            resources, dignity, and opportunity. Our work is rooted in empathy,
            guided by data, and sustained through collaboration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
            <img
              src="https://images.unsplash.com/photo-1607748838605-ebcbe8f15772?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdvbWVuJTIwZW1wb3dlcm1lbnR8ZW58MHx8MHx8fDA%3D"
              className="relative rounded-xl shadow-lg"
              alt="Women empowerment"
            />
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800 border-b-4 border-orange-500 inline-block pb-2">
              Our Core Values
            </h2>
            <ul className="space-y-5 text-gray-700 text-lg mt-8">
              <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-orange-50 transition-colors">
                <span className="text-2xl">🤝</span>
                <span>Compassion with dignity and respect</span>
              </li>
              <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-green-50 transition-colors">
                <span className="text-2xl">🌱</span>
                <span>Sustainable, community-driven development</span>
              </li>
              <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors">
                <span className="text-2xl">📊</span>
                <span>Data-informed and impact-oriented action</span>
              </li>
              <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors">
                <span className="text-2xl">🧭</span>
                <span>Transparency, accountability, and ethics</span>
              </li>
              <li className="flex items-start gap-3 p-3 rounded-lg hover:bg-pink-50 transition-colors">
                <span className="text-2xl">🤍</span>
                <span>Service without discrimination</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
            <div className="relative bg-white p-10 rounded-2xl shadow-xl border border-gray-100 h-full">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h2 className="text-3xl font-semibold mb-6 text-gray-800">Our Vision</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To build an <strong className="text-blue-600">inclusive and empowered society</strong> where every individual
                has access to food, education, healthcare, skills, and the
                opportunity to live a dignified life.
              </p>
              <div className="mt-6 h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
            <div className="relative bg-white p-10 rounded-2xl shadow-xl border border-gray-100 h-full">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-3xl">🚀</span>
              </div>
              <h2 className="text-3xl font-semibold mb-6 text-gray-800">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To uplift underserved communities through <strong className="text-orange-600">seven focused initiatives</strong> that address hunger, education, health, skills, values, and crisis
                response — creating long-term social transformation.
              </p>
              <div className="mt-6 h-1 w-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;