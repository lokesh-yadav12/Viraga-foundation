import React from "react";

const BudameruFloodsFoodDonation: React.FC = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Jost:wght@300;400;500&display=swap');
        .hero-divider { background: linear-gradient(90deg, transparent, #c8973a, transparent); }
      `}</style>

      <div
        className="min-h-screen pt-16 w-full"
        style={{ background: "#ffffff", fontFamily: "'Jost', sans-serif", color: "#1c1c1c" }}
      >
        <section className="max-w-5xl mx-auto px-6 pt-16 pb-20">

          {/* Badge + date */}
          <div className="flex items-center gap-3 mb-6">
            <span
              className="text-[10px] tracking-[0.3em] uppercase font-medium px-3 py-1 rounded-full border"
              style={{ color: "#c8973a", borderColor: "#c8973a55", background: "#c8973a11" }}
            >
              Viraga Foundation
            </span>
            <span className="text-gray-400 text-sm font-semibold tracking-widest">August – September 2024</span>
          </div>

          {/* Title */}
          <h1
            className="leading-tight mb-2"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1.8rem, 5vw, 3rem)",
              fontWeight: 600,
              color: "#1a1a1a",
              letterSpacing: "-0.01em",
            }}
          >
            Food Donation during Budameru Floods
          </h1>
          <p
            className="mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1rem, 2.5vw, 1.45rem)",
              fontStyle: "italic",
              color: "#c8973a",
            }}
          >
            Payakapuram, Vijayawada · August – September 2024
          </p>

          <div className="hero-divider h-px w-full mb-8" />

          {/* Body */}
          <div className="space-y-5 text-gray-600 leading-relaxed" style={{ fontSize: "1.05rem" }}>
            <p>
              On{" "}
              <span style={{ color: "#c8973a" }} className="font-medium">
                August 31, 2024
              </span>
              , as part of its{" "}
              <strong className="text-gray-800">Food Donation Programme</strong>, Viraga
              Foundation responded swiftly to the crisis caused by severe floods from the{" "}
              <em>Budameru River</em>, which submerged several homes in the{" "}
              <strong className="text-gray-800">Payakapuram</strong> area, leaving families
              without basic necessities for over a week.
            </p>

            <p>
              In response, Viraga Foundation extended its support by serving food for{" "}
              <span className="font-semibold text-amber-600">3 consecutive days</span>, feeding{" "}
              <span className="font-semibold text-amber-600">100 people daily</span>, reaching a
              total of{" "}
              <span className="font-semibold text-amber-600">300 people over three days</span> —
              ensuring affected families had access to nourishing meals during their most
              difficult time.
            </p>

            {/* Impact highlight card */}
            <div
              className="rounded-xl p-5 flex items-start gap-4"
              style={{ background: "#fdf8f0", border: "1px solid #e8d9b8" }}
            >
              <span style={{ fontSize: "1.6rem", lineHeight: 1 }}>🌊</span>
              <div>
                <p className="font-semibold text-gray-800" style={{ fontSize: "0.95rem" }}>
                  Flood Relief – Food Support
                </p>
                <p className="text-gray-600 mt-1" style={{ fontSize: "0.93rem" }}>
                  When floodwaters took away everything, Viraga Foundation ensured that no
                  family in Payakapuram went to sleep hungry. Daily hot meals were served
                  with care and compassion throughout the relief period.
                </p>
              </div>
            </div>

            <p
              className="border-l-2 pl-4 italic"
              style={{ borderColor: "#c8973a", color: "#5a5a5a" }}
            >
              Viraga Foundation stands firmly beside communities in crisis, turning compassion
              into action and ensuring that the most vulnerable receive the care and nourishment
              they deserve.
            </p>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-3 gap-4 mt-10">
            {[
              { value: "300", label: "People Fed" },
              { value: "3", label: "Days of Service" },
              { value: "100", label: "Meals Per Day" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-xl p-4 text-center"
                style={{ background: "#f9f9f9", border: "1px solid #e5e5e5" }}
              >
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "2.1rem",
                    color: "#c8973a",
                    fontWeight: 600,
                  }}
                >
                  {s.value}
                </div>
                <div className="text-gray-400 text-xs tracking-wider mt-0.5 uppercase">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-6 text-gray-400 text-xs tracking-widest border-t border-gray-200">
          © 2024 Viraga Foundation · Food Donation Programme
        </footer>
      </div>
    </>
  );
};

export default BudameruFloodsFoodDonation;