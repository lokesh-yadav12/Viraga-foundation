import React from "react";

const AmodiniGirlsHomeEvent: React.FC = () => {
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
            <span className="text-gray-600 text-base font-semibold tracking-widest">March 3, 2024</span>
          </div>

          {/* H1 Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-amber-700 leading-tight mb-2">
            Food Donation &amp; Book Distribution at Amodini Girls Home
          </h1>

          {/* H2 Subtitle */}
          <h2 className="text-lg font-bold text-orange-600 mb-6">
            Celebrating a Birthday with Kindness · March 2024
          </h2>

          <div className="hero-divider h-px w-full mb-8" />

          {/* Body */}
          <div className="space-y-5 text-gray-900 text-base sm:text-lg leading-relaxed">
            <p>
              On{" "}
              <span className="font-semibold text-orange-700">March 3, 2024</span>,
              as part of its{" "}
              <strong className="text-amber-900">Food Donation Program</strong> and{" "}
              <strong className="text-amber-900">Education Support Initiative</strong>, Viraga
              Foundation organized a special dinner for the children at{" "}
              <strong className="text-amber-900">Amodini Girls Home</strong> to celebrate the
              birthday of{" "}
              <span className="font-semibold text-orange-700">Lohithansh Acharya</span>.
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
              {/* <span style={{ fontSize: "1.6rem", lineHeight: 1 }}>🎂</span> */}
              <div>
                <p className="font-semibold text-amber-800 text-base sm:text-lg">
                  A Birthday Celebrated with Giving
                </p>
                <p className="text-gray-900 mt-1 text-base sm:text-lg">
                  The event was filled with joy and excitement as the children enjoyed the
                  meal and received valuable learning resources to support their education —
                  a beautiful reminder that the best birthdays are ones shared with those in need.
                </p>
              </div>
            </div>

            <p className="border-l-2 pl-4 text-lg font-medium text-gray-700" style={{ borderColor: "#c8973a" }}>
              Through such initiatives, Viraga Foundation remains committed to nurturing young
              minds, promoting education, and ensuring the well-being of underprivileged children.
            </p>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-10">
            {[
              { value: "🍽️",  label: "Special Dinner" },
              { value: "📚",  label: "Books Donated" },
              { value: "Mar 3", label: "Date of Event" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-xl sm:px-4 px-2 py-4 text-center"
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
          © 2024 Viraga Foundation · Food Donation &amp; Education Support Programme
        </footer>
      </div>
    </>
  );
};

export default AmodiniGirlsHomeEvent;