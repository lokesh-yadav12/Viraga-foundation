import React from "react";

const BudameruFloodsFoodDonation: React.FC = () => {
  return (
    <>
      <style>{`
        .hero-divider { background: linear-gradient(90deg, transparent, #c8973a, transparent); }
      `}</style>

      <div className="min-h-screen pt-16 w-full" style={{ background: "#ffffff", color: "#1c1c1c" }}>
        <section className="max-w-6xl mx-auto px-6 pt-16 pb-12">

          {/* Badge + date */}
          <div className="flex sm:flex-row flex-col items-center gap-3 mb-6">
            <span
              className="text-base font-medium text-center px-3 py-1 rounded-full border tracking-[0.5em] uppercase"
              style={{ color: "#92400e", borderColor: "#92400e", background: "#c8973a11" }}
            >
              Viraga Foundation
            </span>
            <span className="text-gray-600 text-base font-semibold tracking-widest">August – September 2024</span>
          </div>

          {/* H1 Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-amber-700 leading-tight mb-2">
            Food Donation during Budameru Floods
          </h1>

          {/* H2 Subtitle */}
          <h2 className="text-lg font-bold text-orange-600 mb-6">
            Payakapuram, Vijayawada · August – September 2024
          </h2>

          <div className="hero-divider h-px w-full mb-8" />

          {/* Body */}
          <div className="space-y-5 text-gray-900 text-base sm:text-lg leading-relaxed">
            <p>
              On{" "}
              <span className="font-semibold text-orange-700">August 31, 2024</span>,
              as part of its{" "}
              <strong className="text-amber-900">Food Donation Programme</strong>, Viraga
              Foundation responded swiftly to the crisis caused by severe floods from the{" "}
              <em>Budameru River</em>, which submerged several homes in the{" "}
              <strong className="text-amber-900">Payakapuram</strong> area, leaving families
              without basic necessities for over a week.
            </p>

            <p>
              In response, Viraga Foundation extended its support by serving food for{" "}
              <span className="font-semibold text-orange-700">3 consecutive days</span>, feeding{" "}
              <span className="font-semibold text-orange-700">100 people daily</span>, reaching a
              total of{" "}
              <span className="font-semibold text-orange-700">300 people over three days</span> —
              ensuring affected families had access to nourishing meals during their most
              difficult time.
            </p>

            {/* Impact highlight card */}
            <div
              className="rounded-xl p-5 flex items-start gap-4"
              style={{ background: "#fdf8f0", border: "1px solid #e8d9b8" }}
            >
              {/* <span style={{ fontSize: "1.6rem", lineHeight: 1 }}>🌊</span> */}
              <div>
                <p className="font-semibold text-amber-800 text-base sm:text-lg">
                  Flood Relief – Food Support
                </p>
                <p className="text-gray-900 mt-1 text-base sm:text-lg">
                  When floodwaters took away everything, Viraga Foundation ensured that no
                  family in Payakapuram went to sleep hungry. Daily hot meals were served
                  with care and compassion throughout the relief period.
                </p>
              </div>
            </div>

            <p className="border-l-2 pl-4 text-lg font-medium text-gray-700" style={{ borderColor: "#c8973a" }}>
              Viraga Foundation stands firmly beside communities in crisis, turning compassion
              into action and ensuring that the most vulnerable receive the care and nourishment
              they deserve.
            </p>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-3 gap-4 mt-10">
            {[
              { value: "300", label: "People Fed" },
              { value: "3",   label: "Days of Service" },
              { value: "100", label: "Meals Per Day" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-xl sm:p-4 px-2 py-4 text-center"
                style={{ background: "#f9f9f9", border: "1px solid #e5e5e5" }}
              >
                <div className="text-xl sm:text-2xl font-bold text-amber-700">{s.value}</div>
                <div className="text-sm sm:text-base text-amber-800 tracking-wider mt-1 uppercase">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-6 text-base text-amber-900 tracking-widest border-t border-gray-200">
          © 2024 Viraga Foundation · Food Donation Programme
        </footer>
      </div>
    </>
  );
};

export default BudameruFloodsFoodDonation;