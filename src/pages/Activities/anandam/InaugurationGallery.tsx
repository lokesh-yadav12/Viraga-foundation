import React, { useState, useEffect, useCallback } from "react";

import img1 from '../../../assets/anandam/inauguration/1.jpg';
import img2 from '../../../assets/anandam/inauguration/2.jpg';
import img3 from '../../../assets/anandam/inauguration/3.jpg';
import img4 from '../../../assets/anandam/inauguration/4.jpg';
import img5 from '../../../assets/anandam/inauguration/5.jpg';
import img6 from '../../../assets/anandam/inauguration/6.jpg';
import img7 from '../../../assets/anandam/inauguration/7.jpg';
import img8 from '../../../assets/anandam/inauguration/8.jpg';
import img9 from '../../../assets/anandam/inauguration/9.jpg';
import img10 from '../../../assets/anandam/inauguration/10.jpg';
import img11 from '../../../assets/anandam/inauguration/11.jpg';
import img12 from '../../../assets/anandam/inauguration/12.jpg';
import img13 from '../../../assets/anandam/inauguration/13.jpg';
import img14 from '../../../assets/anandam/inauguration/14.jpg';
import img15 from '../../../assets/anandam/inauguration/15.jpg';
//import img16 from '../../../assets/anandam/inauguration/16.jpg';
//import img17 from '../../../assets/anandam/inauguration/17.jpg';
import img18 from '../../../assets/anandam/inauguration/18.jpg';
//import img19 from '../../../assets/anandam/inauguration/19.jpg';
import img20 from '../../../assets/anandam/inauguration/20.jpg';
//import img21 from '../../../assets/anandam/inauguration/21.jpg';
import img22 from '../../../assets/anandam/inauguration/22.jpg';
// import img23 from '../../../assets/anandam/inauguration/23.jpg';
// import img24 from '../../../assets/anandam/inauguration/24.jpg';
// import img25 from '../../../assets/anandam/inauguration/25.jpg';
// import img26 from '../../../assets/anandam/inauguration/26.jpg';
// import img27 from '../../../assets/anandam/inauguration/27.jpg';
import img28 from '../../../assets/anandam/inauguration/28.jpg';
import img29 from '../../../assets/anandam/inauguration/29.jpg';
import img30 from '../../../assets/anandam/inauguration/30.jpg';
import img31 from '../../../assets/anandam/inauguration/31.jpg';
import img32 from '../../../assets/anandam/inauguration/32.jpg';
// import img33 from '../../../assets/anandam/inauguration/33.jpg';
// import img34 from '../../../assets/anandam/inauguration/34.jpg';
// import img35 from '../../../assets/anandam/inauguration/35.jpg';
// import img36 from '../../../assets/anandam/inauguration/36.jpg';
// import img37 from '../../../assets/anandam/inauguration/37.jpg';
// import img38 from '../../../assets/anandam/inauguration/38.jpg';
import img39 from '../../../assets/anandam/inauguration/39.jpg';
import img40 from '../../../assets/anandam/inauguration/40.jpg';
import img41 from '../../../assets/anandam/inauguration/41.jpg';
import img42 from '../../../assets/anandam/inauguration/42.jpg';
import img43 from '../../../assets/anandam/inauguration/43.jpg';
import img44 from '../../../assets/anandam/inauguration/44.jpg';
import img45 from '../../../assets/anandam/inauguration/45.jpg';
import img46 from '../../../assets/anandam/inauguration/46.jpg';

type MediaItem = {
  id: number;
  type: "image" | "video";
  src: string;
  caption: string;
};

// ── Plug real imports into src below ──
const inceptionItems: MediaItem[] = [
  { id: 1, type: "image", src: img1, caption: "Inauguration ceremony – November 25, 2020" },
  { id: 2, type: "image", src: img2, caption: "Swami Hridananadji Maharaj inaugurating the foundation" },
  { id: 3, type: "image", src: img3, caption: "Founding members of Viraga Foundation" },
  { id: 4, type: "image", src: img4, caption: "The beginning of a mission to uplift humanity" },
  { id: 5, type: "image", src: img5, caption: "Guests attending the inauguration ceremony" },
{ id: 6, type: "image", src: img6, caption: "Lighting the ceremonial lamp during inauguration" },
{ id: 7, type: "image", src: img7, caption: "Spiritual blessings at the inauguration event" },
{ id: 8, type: "image", src: img8, caption: "Volunteers gathering for the inauguration program" },
{ id: 9, type: "image", src: img9, caption: "Moments from the inauguration celebration" },
{ id: 10, type: "image", src: img10, caption: "Community members attending the foundation launch" },
{ id: 11, type: "image", src: img11, caption: "Leaders sharing the vision of the foundation" },
{ id: 12, type: "image", src: img12, caption: "Memorable moments captured during the inauguration" },
{ id: 13, type: "image", src: img13, caption: "Guests interacting during the inaugural event" },
{ id: 14, type: "image", src: img14, caption: "Celebrating the start of a meaningful journey" },
{ id: 15, type: "image", src: img15, caption: "A day of inspiration and new beginnings" },
//{ id: 16, type: "image", src: img16, caption: "Honoring the vision behind the foundation" },
//{ id: 17, type: "image", src: img17, caption: "Ceremony marking the official opening" },
{ id: 18, type: "image", src: img18, caption: "Distinguished guests at the inauguration stage" },
//{ id: 19, type: "image", src: img19, caption: "A moment of unity and purpose" },
{ id: 20, type: "image", src: img20, caption: "Volunteers and supporters gathered together" },
//{ id: 21, type: "image", src: img21, caption: "Sharing the vision for social change" },
{ id: 22, type: "image", src: img22, caption: "A proud milestone for the organization" },
// { id: 23, type: "image", src: img23, caption: "Blessings and prayers during the ceremony" },
// { id: 24, type: "image", src: img24, caption: "Guests celebrating the launch of the foundation" },
// { id: 25, type: "image", src: img25, caption: "Community members supporting the mission" },
// { id: 26, type: "image", src: img26, caption: "Inspiring speeches during the inaugural event" },
// { id: 27, type: "image", src: img27, caption: "Moments of reflection and gratitude" },
{ id: 28, type: "image", src: img28, caption: "The beginning of a journey toward service" },
{ id: 29, type: "image", src: img29, caption: "Guests sharing smiles and inspiration" },
{ id: 30, type: "image", src: img30, caption: "The spirit of unity during the inauguration" },
{ id: 31, type: "image", src: img31, caption: "Supporters gathered to celebrate the launch" },
{ id: 32, type: "image", src: img32, caption: "A memorable day for the organization" },
// { id: 33, type: "image", src: img33, caption: "Celebrating compassion and service" },
// { id: 34, type: "image", src: img34, caption: "Volunteers capturing memorable moments" },
// { id: 35, type: "image", src: img35, caption: "A vision to uplift communities begins" },
// { id: 36, type: "image", src: img36, caption: "Together for a better tomorrow" },
// { id: 37, type: "image", src: img37, caption: "Moments of celebration and hope" },
// { id: 38, type: "image", src: img38, caption: "Guests gathered for a historic moment" },
{ id: 39, type: "image", src: img39, caption: "The foundation's mission introduced to the public" },
{ id: 40, type: "image", src: img40, caption: "Celebrating a new chapter of service" },
{ id: 41, type: "image", src: img41, caption: "Leaders and volunteers united for the cause" },
{ id: 42, type: "image", src: img42, caption: "A joyful gathering during the inauguration" },
{ id: 43, type: "image", src: img43, caption: "Memories from the historic opening day" },
{ id: 44, type: "image", src: img44, caption: "Guests sharing inspiration and hope" },
{ id: 45, type: "image", src: img45, caption: "Unity and dedication during the launch event" },
{ id: 46, type: "image", src: img46, caption: "The beginning of a lifelong mission of service" },
];

// ─────────────────────────────────────────────
// Download helper
// ─────────────────────────────────────────────
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

// ─────────────────────────────────────────────
// Lightbox
// ─────────────────────────────────────────────
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
              onClick={() => downloadMedia(item.src, `viraga-inception-${item.id}`)}
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

// ─────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────
const FoundationInceptionGallery: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevItem = () =>
    setLightboxIndex((i) => (i !== null ? (i - 1 + inceptionItems.length) % inceptionItems.length : 0));
  const nextItem = () =>
    setLightboxIndex((i) => (i !== null ? (i + 1) % inceptionItems.length : 0));

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
        className="min-h-screen py-12 w-full"
        style={{ background: "#ffffff", fontFamily: "'Jost', sans-serif", color: "#1c1c1c" }}
      >
        {/* ── Article Section ── */}
        <section className="max-w-6xl mx-auto px-6 pt-16 pb-12">

          {/* Badge + date */}
          <div className="flex items-center gap-3 mb-6">
            <span
              className="text-[10px] tracking-[0.3em] uppercase font-medium px-3 py-1 rounded-full border"
              style={{ color: "#c8973a", borderColor: "#c8973a55", background: "#c8973a11" }}
            >
              Viraga Foundation
            </span>
            <span className="text-gray-400 text-sm font-semibold tracking-widest">November 25, 2020</span>
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
            Foundation Inception
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
            The Beginning of a Mission to Serve Humanity
          </p>

          <div className="hero-divider h-px w-full mb-8" />

          {/* Body */}
          <div className="space-y-5 text-gray-600 leading-relaxed" style={{ fontSize: "1.05rem" }}>
            <p>
              Viraga Foundation was established on{" "}
              <span style={{ color: "#c8973a" }} className="font-medium">
                November 25, 2020
              </span>
              , inspired by the teachings of{" "}
              <strong className="text-gray-800">Swami Vivekananda</strong>. A group of dedicated
              individuals came together with a vision to serve humanity with compassion.
            </p>
            <p>
              The foundation was inaugurated by{" "}
              <strong className="text-gray-800">Swami Hridananadji Maharaj</strong>, Secretary of{" "}
              <em>Ramakrishna Mission, Vijayawada</em>, marking the beginning of our mission to
              uplift and support those in need.
            </p>

            {/* Vivekananda quote card */}
            <div
              className="rounded-xl p-6 mt-2"
              style={{ background: "#fdf8f0", border: "1px solid #e8d9b8" }}
            >
              <p
                className="italic text-center"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(1.05rem, 2vw, 1.25rem)",
                  color: "#7a5c28",
                  lineHeight: 1.7,
                }}
              >
                "The best way to find yourself is to lose yourself in the service of others."
              </p>
              <p
                className="text-center mt-3 text-xs tracking-widest uppercase"
                style={{ color: "#c8973a" }}
              >
                — Swami Vivekananda
              </p>
            </div>
          </div>

          {/* Milestone cards */}
          <div className="grid grid-cols-3 gap-2 mt-10">
            {[
              { value: "2020", label: "Year Founded" },
              { value: "Nov 25", label: "Inception Date" },
              { value: "🙏", label: "Inspired by Swami Vivekananda" },
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

        {/* ── Inauguration Gallery ── */}
        <section className="max-w-6xl mx-auto px-6 pb-20">
          <SectionTitle icon="🪔" label="Inauguration – Photos" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
            {inceptionItems.map((item, idx) => (
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
                        downloadMedia(item.src, `viraga-inception-${item.id}${item.type === "video" ? ".mp4" : ".jpg"}`);
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
          © 2020 Viraga Foundation · Est. November 25, 2020
        </footer>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          items={inceptionItems}
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

export default FoundationInceptionGallery;

// import GalleryPage from '../GalleryPage';

// const mediaModules = import.meta.glob(
//     '../../../assets/anandam/inauguration/*',
//     { eager: true, query: '?url', import: 'default' }
// );
// const media = Object.values(mediaModules) as string[];

// const InaugurationGallery = () => (
//     <GalleryPage title="Anandam – Inauguration" media={media} />
// );
// export default InaugurationGallery;
