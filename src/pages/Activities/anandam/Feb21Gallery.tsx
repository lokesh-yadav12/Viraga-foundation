import React, { useState, useEffect, useCallback } from "react";


import img1 from '../../../assets/anandam/21-02-2021/1.jpg';
import img2 from '../../../assets/anandam/21-02-2021/2.jpg';
import img3 from '../../../assets/anandam/21-02-2021/3.jpg';
import img4 from '../../../assets/anandam/21-02-2021/4.jpg';
import img5 from '../../../assets/anandam/21-02-2021/5.jpg';
import img6 from '../../../assets/anandam/21-02-2021/6.jpg';
import img7 from '../../../assets/anandam/21-02-2021/7.jpg';
import img8 from '../../../assets/anandam/21-02-2021/8.jpg';
import img9 from '../../../assets/anandam/21-02-2021/9.jpg';
import img10 from '../../../assets/anandam/21-02-2021/10.jpg';
import img11 from '../../../assets/anandam/21-02-2021/11.jpg';
import img12 from '../../../assets/anandam/21-02-2021/12.jpg';
import img13 from '../../../assets/anandam/21-02-2021/13.jpg';
import img14 from '../../../assets/anandam/21-02-2021/14.jpg';
import img15 from '../../../assets/anandam/21-02-2021/15.jpg';
import img16 from '../../../assets/anandam/21-02-2021/16.jpg';
import img17 from '../../../assets/anandam/21-02-2021/17.jpg';
import img18 from '../../../assets/anandam/21-02-2021/18.jpg';
import img19 from '../../../assets/anandam/21-02-2021/19.jpg';
import img20 from '../../../assets/anandam/21-02-2021/20.jpg';
import img21 from '../../../assets/anandam/21-02-2021/21.jpg';
import img22 from '../../../assets/anandam/21-02-2021/22.jpg';
import img23 from '../../../assets/anandam/21-02-2021/23.jpg';
import img24 from '../../../assets/anandam/21-02-2021/24.jpg';
import img25 from '../../../assets/anandam/21-02-2021/25.jpg';
import img26 from '../../../assets/anandam/21-02-2021/26.jpg';
import img27 from '../../../assets/anandam/21-02-2021/27.jpg';
import img28 from '../../../assets/anandam/21-02-2021/28.jpg';

type MediaItem = {
  id: number;
  type: "image" | "video";
  src: string;
  caption: string;
};

const galleryItems: MediaItem[] = [
  { id: 1, type: "image", src: img1, caption: "Breakfast distribution at Nirmal Hruday Bhavan" },
  { id: 2, type: "image", src: img2, caption: "Nutritious snacks served to those in need" },
  { id: 3, type: "image", src: img3, caption: "Viraga Foundation volunteers at the event" },
  { id: 4, type: "image", src: img4, caption: "Food donation programme – February 21, 2021" },
  { id: 5, type: "image", src: img5, caption: "Volunteers distributing food to the community" },
{ id: 6, type: "image", src: img6, caption: "People gathered for the food donation programme" },
{ id: 7, type: "image", src: img7, caption: "Serving meals to those in need" },
{ id: 8, type: "image", src: img8, caption: "Volunteers preparing food packets for distribution" },
{ id: 9, type: "image", src: img9, caption: "Smiles during the community service activity" },
{ id: 10, type: "image", src: img10, caption: "Volunteers working together to help the community" },
{ id: 11, type: "image", src: img11, caption: "Food packets arranged for distribution" },
{ id: 12, type: "image", src: img12, caption: "Community members receiving meals" },
{ id: 13, type: "image", src: img13, caption: "Moments from the food donation drive" },
{ id: 14, type: "image", src: img14, caption: "Volunteers coordinating the distribution process" },
{ id: 15, type: "image", src: img15, caption: "Helping hands serving the needy" },
{ id: 16, type: "image", src: img16, caption: "Food being served with care and compassion" },
{ id: 17, type: "image", src: img17, caption: "Community members gathered for the event" },
{ id: 18, type: "image", src: img18, caption: "Volunteers sharing meals with gratitude" },
{ id: 19, type: "image", src: img19, caption: "A day dedicated to service and kindness" },
{ id: 20, type: "image", src: img20, caption: "Distribution of food packets during the drive" },
{ id: 21, type: "image", src: img21, caption: "Volunteers ensuring everyone receives food" },
{ id: 22, type: "image", src: img22, caption: "Community members appreciating the initiative" },
{ id: 23, type: "image", src: img23, caption: "Moments of unity and service" },
{ id: 24, type: "image", src: img24, caption: "Volunteers standing together for a noble cause" },
{ id: 25, type: "image", src: img25, caption: "Smiles shared during the food donation programme" },
{ id: 26, type: "image", src: img26, caption: "Helping the community through collective effort" },
{ id: 27, type: "image", src: img27, caption: "Food distribution reaching those in need" },
{ id: 28, type: "image", src: img28, caption: "A successful community service initiative" },
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
              onClick={() => downloadMedia(item.src, `viraga-nirmal-hruday-${item.id}`)}
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
{/* 
        <p className="mt-3 text-center text-stone-300 text-sm italic px-4">{item.caption}</p> */}
      </div>
    </div>
  );
};

const NirmalHrudayBhavanGallery: React.FC = () => {
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
            <span className="text-gray-400 text-sm font-semibold tracking-widest">February 21, 2021</span>
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
            Food Donation at Nirmal Hruday Bhavan
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
            Vijayawada · February 2021
          </p>

          <div className="hero-divider h-px w-full mb-8" />

          {/* Body */}
          <div className="space-y-5 text-gray-600 leading-relaxed" style={{ fontSize: "1.05rem" }}>
            <p>
              On{" "}
              <span style={{ color: "#c8973a" }} className="font-medium">
                February 21, 2021
              </span>
              , Viraga Foundation, with the support of{" "}
              <strong className="text-gray-800">Srinivas from Machilipatnam</strong>, organized
              a food donation programme at{" "}
              <strong className="text-gray-800">Nirmal Hruday Bhavan</strong>, Vijayawada.
              Nutritious breakfast and snacks were distributed, bringing care and support to
              those in need.
            </p>

            <p
              className="border-l-2 pl-4 italic"
              style={{ borderColor: "#c8973a", color: "#5a5a5a" }}
            >
              Viraga Foundation believes that a warm meal is one of the simplest yet most
              powerful expressions of compassion. Through every initiative, we strive to
              nourish lives and uplift communities.
            </p>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-3 gap-4 mt-10">
            {[
              { value: "🍽️", label: "Breakfast & Snacks" },
              { value: "Feb 21", label: "Date of Event" },
              { value: "❤️", label: "Nirmal Hruday Bhavan" },
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
                        downloadMedia(item.src, `viraga-nirmal-hruday-${item.id}${item.type === "video" ? ".mp4" : ".jpg"}`);
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
          © 2021 Viraga Foundation · Food Donation Programme
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

export default NirmalHrudayBhavanGallery;