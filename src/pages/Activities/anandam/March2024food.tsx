import React from "react";

const AmodiniGirlsHomeEvent: React.FC = () => {
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
        <section className="max-w-6xl mx-auto px-6 pt-16 pb-20">

          {/* Badge + date */}
          <div className="flex sm:flex-row flex-col items-center gap-3 mb-6">
            <span
              className="text-[10px] tracking-[0.3em] uppercase font-medium px-3 py-1 rounded-full border"
              style={{ color: "orange-900", borderColor: "orange-400", background: "orange-300" }}
            >
              Viraga Foundation
            </span>
            <span className="text-gray-400 text-md font-semibold tracking-widest">March 3, 2024</span>
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
            Food Donation &amp; Book Distribution at Amodini Girls Home
          </h1>
          <p
            className="mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1rem, 2.5vw, 1.45rem)",
              fontStyle: "normal",
              color: "orange-900",
            }}
          >
            Celebrating a Birthday with Kindness · March 2024
          </p>

          <div className="hero-divider h-px w-full mb-8" />

          {/* Body */}
          <div className="space-y-5 text-gray-600 leading-relaxed" style={{ fontSize: "1.25rem" }}>
            <p>
              On{" "}
              <span style={{ color: "#c8973a" }} className="font-medium">
                March 3, 2024
              </span>
              , as part of its{" "}
              <strong className="text-gray-800">Food Donation Program</strong> and{" "}
              <strong className="text-gray-800">Education Support Initiative</strong>, Viraga
              Foundation organized a special dinner for the children at{" "}
              <strong className="text-gray-800">Amodini Girls Home</strong> to celebrate the
              birthday of{" "}
              <span className="font-semibold text-amber-600">Lohithansh Acharya</span>.
            </p>

            <p>
              Along with serving a nutritious and delicious meal, the foundation also fulfilled
              the children's educational needs by donating a wide range of books, including
              academic textbooks and competitive exam materials, based on their requests.
            </p>

            {/* Highlight card */}
            <div
              className="rounded-xl p-5 flex items-start gap-4"
              style={{ background: "#fdf8f0", border: "1px solid #e8d9b8" }}
            >
              <span style={{ fontSize: "1.6rem", lineHeight: 1 }}>🎂</span>
              <div>
                <p className="font-semibold text-gray-800" style={{ fontSize: "1.25rem" }}>
                  A Birthday Celebrated with Giving
                </p>
                <p className="text-gray-600 mt-1" style={{ fontSize: "1.2rem" }}>
                  The event was filled with joy and excitement as the children enjoyed the
                  meal and received valuable learning resources to support their education —
                  a beautiful reminder that the best birthdays are ones shared with those in need.
                </p>
              </div>
            </div>

            <p
              className="border-l-2 pl-4 "
              style={{ borderColor: "#c8973a", color: "#5a5a5a" }}
            >
              Through such initiatives, Viraga Foundation remains committed to nurturing young
              minds, promoting education, and ensuring the well-being of underprivileged children.
            </p>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-3 gap-4 mt-10">
            {[
              { value: "🍽️", label: "Special Dinner" },
              { value: "📚", label: "Books Donated" },
              { value: "Mar 3", label: "Date of Event" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-xl p-4 text-center"
                style={{ background: "#f9f9f9", border: "1px solid #e5e5e5" }}
              >
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: s.value.length > 5 ? "1.5rem" : "2.1rem",
                    color: "#c8973a",
                    fontWeight: 600,
                  }}
                >
                  {s.value}
                </div>
                <div className="text-gray-400 text-sm tracking-wider mt-0.5 uppercase">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-6 text-gray-400 text-xs tracking-widest border-t border-gray-200">
          © 2024 Viraga Foundation · Food Donation &amp; Education Support Programme
        </footer>
      </div>
    </>
  );
};

export default AmodiniGirlsHomeEvent;