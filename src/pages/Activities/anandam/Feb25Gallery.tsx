import React, { useState, useEffect, useCallback } from "react";

import img1 from '../../../assets/anandam/25-02-2021/1.jpg';
import img2 from '../../../assets/anandam/25-02-2021/2.jpg';
import img3 from '../../../assets/anandam/25-02-2021/3.jpg';
import img4 from '../../../assets/anandam/25-02-2021/4.jpg';
import img5 from '../../../assets/anandam/25-02-2021/5.jpg';
import img6 from '../../../assets/anandam/25-02-2021/6.jpg';
import img7 from '../../../assets/anandam/25-02-2021/7.jpg';
import img8 from '../../../assets/anandam/25-02-2021/8.jpg';
import img9 from '../../../assets/anandam/25-02-2021/9.jpg';
import img10 from '../../../assets/anandam/25-02-2021/10.jpg';
import img11 from '../../../assets/anandam/25-02-2021/11.jpg';
import img12 from '../../../assets/anandam/25-02-2021/12.jpg';
import img13 from '../../../assets/anandam/25-02-2021/13.jpg';
import img14 from '../../../assets/anandam/25-02-2021/14.jpg';
import img15 from '../../../assets/anandam/25-02-2021/15.jpg';
import img16 from '../../../assets/anandam/25-02-2021/16.jpg';
import img17 from '../../../assets/anandam/25-02-2021/17.jpg';
import img18 from '../../../assets/anandam/25-02-2021/18.jpg';
import img19 from '../../../assets/anandam/25-02-2021/19.jpg';
// import img20 from '../../../assets/anandam/25-02-2021/20.jpg';
// import img21 from '../../../assets/anandam/25-02-2021/21.jpg';
// import img22 from '../../../assets/anandam/25-02-2021/22.jpg';
// import img23 from '../../../assets/anandam/25-02-2021/23.jpg';
// import img24 from '../../../assets/anandam/25-02-2021/24.jpg';
// import img25 from '../../../assets/anandam/25-02-2021/25.jpg';
// import img26 from '../../../assets/anandam/25-02-2021/26.jpg';
// import img27 from '../../../assets/anandam/25-02-2021/27.jpg';
// import img28 from '../../../assets/anandam/25-02-2021/28.jpg';

type MediaItem = {
  id: number;
  type: "image" | "video";
  src: string;
  caption: string;
};

const galleryItems: MediaItem[] = [
  { id: 1,  type: "image", src: img1,  caption: "Breakfast served to elderly residents" },
  { id: 2,  type: "image", src: img2,  caption: "Nutritious lunch distribution at Tanmayi Old Age Home" },
  { id: 3,  type: "image", src: img3,  caption: "Volunteers with elderly residents – February 25, 2021" },
  { id: 4,  type: "image", src: img4,  caption: "B. Ramesh Kumar & B. Madhavi supporting the initiative" },
  { id: 5,  type: "image", src: img5,  caption: "Community members participating in the initiative" },
  { id: 6,  type: "image", src: img6,  caption: "Volunteers organizing supplies for distribution" },
  { id: 7,  type: "image", src: img7,  caption: "Helping hands working together for a noble cause" },
  { id: 8,  type: "image", src: img8,  caption: "Volunteers preparing items for community support" },
  { id: 9,  type: "image", src: img9,  caption: "Moments from the community service event" },
  { id: 10, type: "image", src: img10, caption: "Volunteers coordinating the distribution drive" },
  { id: 11, type: "image", src: img11, caption: "Community members receiving support and care" },
  { id: 12, type: "image", src: img12, caption: "A day dedicated to service and compassion" },
  { id: 13, type: "image", src: img13, caption: "Volunteers sharing smiles with the community" },
  { id: 14, type: "image", src: img14, caption: "Teamwork during the community outreach programme" },
  { id: 15, type: "image", src: img15, caption: "Supplies arranged for distribution to beneficiaries" },
  { id: 16, type: "image", src: img16, caption: "Community gathering during the service event" },
  { id: 17, type: "image", src: img17, caption: "Volunteers ensuring smooth distribution" },
  { id: 18, type: "image", src: img18, caption: "Moments of unity and generosity" },
  { id: 19, type: "image", src: img19, caption: "Volunteers working together to help others" },
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
              onClick={() => downloadMedia(item.src, `viraga-tanmayi-${item.id}`)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-400 hover:bg-amber-300 text-stone-900 font-bold text-xs transition"
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

const TanmayiOldAgeHomeGallery: React.FC = () => {
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

      <div className="min-h-screen pt-16 w-full" style={{ background: "#ffffff", color: "#1c1c1c" }}>

        {/* ── Article Section ── */}
        <section className="max-w-6xl mx-auto px-6 pt-16 pb-12">

          {/* Badge + date */}
          <div className="flex sm:flex-row flex-col items-center gap-3 mb-6">
            <span
              className="text-base font-medium text-center px-3 py-1 rounded-full border tracking-[0.5em] uppercase"
              style={{ color: "#92400e", borderColor: "#92400e", background: "#c8973a11" }}
            >
              Viraga Foundation
            </span>
            <span className="text-gray-600 text-base font-semibold tracking-widest">February 25, 2021</span>
          </div>

          {/* H1 Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-amber-700 leading-tight mb-2">
            Food Donation at Tanmayi Old Age Home
          </h1>

          {/* H2 Subtitle */}
          <h2 className="text-lg font-bold text-orange-600 mb-6">
            Vijayawada · February 2021
          </h2>

          <div className="hero-divider h-px w-full mb-8" />

          {/* Body */}
          <div className="space-y-5 text-gray-900 text-base sm:text-lg leading-relaxed">
            <p>
              On{" "}
              <span className="font-semibold text-orange-700">February 25, 2021</span>,
              Viraga Foundation, with the support of{" "}
              <strong className="text-amber-900">B. Ramesh Kumar &amp; B. Madhavi</strong>,
              organized a food donation programme at{" "}
              <strong className="text-amber-900">Tanmayi Old Age Home</strong>, Vijayawada.
              Nutritious breakfast and lunch were provided, offering care and support to the
              elderly residents.
            </p>

            <p className="border-l-2 pl-4 text-lg font-medium text-gray-700" style={{ borderColor: "#c8973a" }}>
              Caring for our elders is not just a duty — it is an honour. Viraga Foundation
              remains committed to ensuring that every individual, regardless of age, feels
              seen, valued, and nourished.
            </p>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-10">
            {[
              { value: "🍳",    label: "Breakfast & Lunch" },
              { value: "Feb 25", label: "Date of Event" },
              { value: "🏠",    label: "Old Age Home" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-xl px-2 py-4 sm:px-4 text-center"
                style={{ background: "#f9f9f9", border: "1px solid #e5e5e5" }}
              >
                <div className="text-xl sm:text-2xl font-bold text-amber-700">{s.value}</div>
                <div className="text-sm sm:text-base text-amber-800 tracking-wider mt-1 lowercase sm:uppercase">{s.label}</div>
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
                        downloadMedia(item.src, `viraga-tanmayi-${item.id}${item.type === "video" ? ".mp4" : ".jpg"}`);
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-6 text-base text-amber-900 tracking-widest border-t border-gray-200">
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
    <h3 className="text-3xl sm:text-4xl font-bold text-amber-700">{label}</h3>
    <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, #c8973a44, transparent)" }} />
  </div>
);

const ActionBtn: React.FC<{
  label: string;
  onClick?: (e: React.MouseEvent) => void;
}> = ({ label, onClick }) => (
  <button
    onClick={onClick}
    className="text-base font-bold px-2 py-0.5 rounded-full transition hover:opacity-80"
    style={{ background: "#c8973a", color: "#fff" }}
  >
    {label}
  </button>
);

export default TanmayiOldAgeHomeGallery;