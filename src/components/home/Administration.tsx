type Member = {
  name: string;
  role: string;
  image: string;
  description: string;
};

const members: Member[] = [
  {
    name: "Ch Appa Rao",
    role: "President",
    image: "../../assets/image.png",
    description:
      "The President presides over all meetings of the General Body, Executive Committee, and Special Committees of the Foundation, exercising overall control of all affairs of VIRAGA FOUNDATION.",
  },
  {
    name: "Naga Lakshmi Bhavani Gunturu",
    role: "Associate President",
    image: "/admin/naga-lakshmi.jpg",
    description:
      "The Associate President performs functions delegated by the President or entrusted by the Executive Committee.",
  },
  {
    name: "J. Ramachrandra Rao",
    role: "Vice President",
    image: "/admin/ramachandra-rao.jpg",
    description:
      "The Vice President performs functions delegated by the President or entrusted by the Executive Committee.",
  },
  {
    name: "Sitaram Raju Uppalapati",
    role: "Secretary",
    image: "/admin/sitaram-raju.jpg",
    description:
      "The Secretary manages the administration of the Foundation, conducts meetings, executes documents, issues notices, and ensures implementation of resolutions passed by the General Body and Executive Committee.",
  },
  {
    name: "Rajesh Alahari",
    role: "Joint Secretary – I",
    image: "/admin/rajesh-alahari.jpg",
    description:
      "Assists the Secretary in the discharge of duties and performs the responsibilities of the Secretary in their absence.",
  },
  {
    name: "Durga Rao Vinayaka",
    role: "Joint Secretary – II",
    image: "/admin/durga-rao.jpg",
    description:
      "Assists the Secretary and Joint Secretary–I and performs their duties when entrusted or in their absence.",
  },
  {
    name: "Bala Subrahmanyam Bonumaddi",
    role: "Treasurer",
    image: "/admin/bala-subrahmanyam.jpg",
    description:
      "Maintains financial records, prepares annual accounts, ensures auditing, and presents financial statements at the General Body Meetings.",
  },
  {
    name: "Veereswar Nadimpalli",
    role: "Executive Committee Member",
    image: "/admin/veereswar.jpg",
    description:
      "Performs responsibilities delegated by the President, Secretary, and Associate President.",
  },
  {
    name: "Soma Sekhara Sita Rambabu Anumala",
    role: "Executive Committee Member",
    image: "../../assets/image.png",
    description:
      "Performs responsibilities delegated by the President, Secretary, and Associate President.",
  },
];

const Administration = () => {
  return (
    <div className="bg-gray-50">
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[60vh] w-full">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="Administration Team"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center">
          <div className="mx-auto max-w-6xl px-6 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Administration
            </h1>
            <p className="max-w-3xl text-lg md:text-xl leading-relaxed">
              Meet the dedicated leadership and executive members guiding
              VIRAGA FOUNDATION with integrity, responsibility, and service.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTENT SECTION ================= */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          {/* Cards Grid */}
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
            {members.map((member) => (
              <div
                key={member.name}
                className="group flex flex-col sm:flex-row gap-6 rounded-2xl bg-white p-6 shadow-md hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="flex justify-center sm:justify-start">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-28 w-28 rounded-full object-cover border-4 border-gray-100 group-hover:border-blue-600 transition"
                  />
                </div>

                {/* Content */}
                <div className="text-center sm:text-left">
                  <h2 className="text-xl font-semibold text-gray-900">
                    {member.name}
                  </h2>
                  <p className="mb-3 text-sm font-medium text-blue-700">
                    {member.role}
                  </p>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Administration;
