import React, { useState, useEffect, useCallback } from "react";

import img1 from '../../../assets/anandam/12-3-2023/1.jpg';

type MediaItem = {
  id: number;
  type: "image" | "video";
  src: string;
  caption: string;
};

const galleryItems: MediaItem[] = [
  { id: 1, type: "image", src: img1, caption: "Self-prepared nutritious meals for 100 individuals" },
//   { id: 2, type: "image", src: "https://placehold.co/900x600/fdf8f0/a07830?text=Food+Donation+2", caption: "Volunteers preparing food with care and dedication" },
//   { id: 3, type: "image", src: "https://placehold.co/900x600/fdf8f0/a07830?text=Food+Donation+3", caption: "Distribution of wholesome meals to the community" },
//   { id: 4, type: "image", src: "https://placehold.co/900x600/fdf8f0/a07830?text=Food+Donation+4", caption: "Viraga Foundation Food Donation Programme – March 12, 2023" },
];

const downloadMedia = async (src: string, filename: string) => {
  try {
    const res = await fetch(src, { mode: "cors" });
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  } catch {
    window.open(src, "_blank");
  }
};

const Lightbox: React.FC<{
  items: MediaItem[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}> = ({ items, index, onClose, onPrev, onNext }) => {
  const item = items[index];

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative flex flex-col items-center max-w-5xl w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between w-full mb-3 px-1">
          <span className="text-amber-400 font-semibold text-sm tracking-widest uppercase">
            {index + 1} / {items.length}
          </span>
          <div className="flex gap-3">
            <button
              onClick={() => downloadMedia(item.src, `viraga-food-mar2023-${item.id}`)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-400 hover:bg-amber-300 text-stone-900 text-xs font-bold transition"
            >
              ↓ Download
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white text-lg transition"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="relative w-full bg-stone-900 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center min-h-[280px]">
          {item.type === "image" ? (
            <img src={item.src} alt={item.caption} className="max-h-[72vh] w-full object-contain" />
          ) : (
            <video src={item.src} controls autoPlay className="max-h-[72vh] w-full object-contain" />
          )}
          <button
            onClick={onPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-amber-400 hover:text-stone-900 text-white flex items-center justify-center text-xl transition"
          >‹</button>
          <button
            onClick={onNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-amber-400 hover:text-stone-900 text-white flex items-center justify-center text-xl transition"
          >›</button>
        </div>

        {/* <p className="mt-3 text-center text-stone-300 text-sm italic px-4">{item.caption}</p> */}
      </div>
    </div>
  );
};

const FoodDonationMarch2023Gallery: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevItem = () =>
    setLightboxIndex((i) => (i !== null ? (i - 1 + galleryItems.length) % galleryItems.length : 0));
  const nextItem = () =>
    setLightboxIndex((i) => (i !== null ? (i + 1) % galleryItems.length : 0));

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Jost:wght@300;400;500&display=swap');

        .gallery-card {
          transition: transform 0.35s cubic-bezier(.22,.68,0,1.3), box-shadow 0.3s ease;
        }
        .gallery-card:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 20px 48px rgba(0,0,0,0.15);
        }
        .gallery-card:hover .overlay { opacity: 1; }
        .overlay { transition: opacity 0.3s ease; }
        .hero-divider { background: linear-gradient(90deg, transparent, #c8973a, transparent); }
      `}</style>

      <div
        className="min-h-screen pt-16 w-full"
        style={{ background: "#ffffff", fontFamily: "'Jost', sans-serif", color: "#1c1c1c" }}
      >
        {/* ── Article Section ── */}
        <section className="max-w-5xl mx-auto px-6 pt-16 pb-12">

          {/* Badge + date */}
          <div className="flex items-center gap-3 mb-6">
            <span
              className="text-[10px] tracking-[0.3em] uppercase font-medium px-3 py-1 rounded-full border"
              style={{ color: "#c8973a", borderColor: "#c8973a55", background: "#c8973a11" }}
            >
              Viraga Foundation
            </span>
            <span className="text-gray-400 text-sm font-semibold tracking-widest">March 12, 2023</span>
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
            Food Donation Programme
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
            Nourishing 100 Lives · March 2023
          </p>

          <div className="hero-divider h-px w-full mb-8" />

          {/* Body */}
          <div className="space-y-5 text-gray-600 leading-relaxed" style={{ fontSize: "1.05rem" }}>
            <p>
              On{" "}
              <span style={{ color: "#c8973a" }} className="font-medium">
                March 12, 2023
              </span>
              , as part of the Food Donation Program, the Viraga Foundation successfully
              prepared and distributed nutritious meals to{" "}
              <span className="font-semibold text-amber-600">100 needy individuals</span>.
              The food was self-prepared with care and dedication, ensuring quality and hygiene.
            </p>
            <p>
              This initiative aimed to support underprivileged communities by providing them
              with wholesome meals, reinforcing the foundation's commitment to{" "}
              <strong className="text-gray-800">eradicating hunger</strong> and promoting
              social welfare.
            </p>

            <p
              className="border-l-2 pl-4 italic"
              style={{ borderColor: "#c8973a", color: "#5a5a5a" }}
            >
              Through such efforts, Viraga Foundation continues to make a positive impact,
              fostering a spirit of compassion and community service.
            </p>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-3 gap-4 mt-10">
            {[
              { value: "100", label: "Meals Distributed" },
              { value: "🍲", label: "Self-Prepared Food" },
              { value: "Mar 12", label: "Date of Event" },
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
                <div className="text-gray-400 text-xs tracking-wider mt-0.5 uppercase">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Gallery ── */}
        <section className="max-w-6xl mx-auto px-6 pb-20">
          <SectionTitle icon="🍱" label="Food Distribution – Photos" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
            {galleryItems.map((item, idx) => (
              <div
                key={item.id}
                className="gallery-card relative rounded-xl overflow-hidden cursor-pointer aspect-[4/3]"
                style={{ background: "#f0f0f0" }}
                onClick={() => openLightbox(idx)}
              >
                {item.type === "image" ? (
                  <img src={item.src} alt={item.caption} className="w-full h-full object-cover" />
                ) : (
                  <>
                    <video src={item.src} className="w-full h-full object-cover" muted preload="metadata" />
                    <div className="absolute inset-0 flex items-center justify-center" style={{ background: "rgba(0,0,0,0.28)" }}>
                      <div className="w-10 h-10 rounded-full flex items-center justify-center text-base" style={{ background: "#c8973a", color: "#fff" }}>▶</div>
                    </div>
                  </>
                )}
                <div
                  className="overlay absolute inset-0 opacity-0 flex flex-col justify-end p-3"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 60%)" }}
                >
                  {/* <p className="text-white text-xs leading-snug">{item.caption}</p> */}
                  <div className="flex gap-2 mt-2">
                    <ActionBtn label={item.type === "video" ? "▶ Play" : "⤢ Zoom"} />
                    <ActionBtn
                      label="↓"
                      onClick={(e) => {
                        e.stopPropagation();
                        downloadMedia(item.src, `viraga-food-mar2023-${item.id}${item.type === "video" ? ".mp4" : ".jpg"}`);
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-6 text-gray-400 text-xs tracking-widest border-t border-gray-200">
          © 2023 Viraga Foundation · Food Donation Programme
        </footer>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          items={galleryItems}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevItem}
          onNext={nextItem}
        />
      )}
    </>
  );
};

// ─── Small helpers ────────────────────────────
const SectionTitle: React.FC<{ icon: string; label: string }> = ({ icon, label }) => (
  <div className="flex items-center gap-3">
    <span className="text-xl">{icon}</span>
    <h3
      style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "1.55rem",
        color: "#1a1a1a",
        fontWeight: 600,
      }}
    >
      {label}
    </h3>
    <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, #c8973a44, transparent)" }} />
  </div>
);

const ActionBtn: React.FC<{
  label: string;
  onClick?: (e: React.MouseEvent) => void;
}> = ({ label, onClick }) => (
  <button
    onClick={onClick}
    className="text-[11px] font-medium px-2 py-0.5 rounded-full transition hover:opacity-80"
    style={{ background: "#c8973a", color: "#fff" }}
  >
    {label}
  </button>
);

export default FoodDonationMarch2023Gallery;