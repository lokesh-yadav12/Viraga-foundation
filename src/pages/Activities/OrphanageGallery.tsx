import React, { useState, useEffect, useCallback } from "react";

import img1 from '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/1.jpeg';
import img2 from '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/2.jpeg';
import img3 from '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/3.jpeg';
import img4 from '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/4.jpeg';
import img5 from '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/5.jpeg';
import img6 from '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/6.jpeg';
import img7 from '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/7.jpeg';
import img8 from '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/8.jpeg';
import img9 from '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/9.jpeg';
import img10 from '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/10.jpeg';
import img11 from '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/11.jpeg';
import img12 from '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/12.jpeg';
import img13 from '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/13.jpeg';
import img14 from '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/14.jpeg';
import img15 from '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/15.jpeg';
import img16 from '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/16.jpeg';
import img17 from '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/17.jpeg';
import img18 from '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/18.jpeg';
import img19 from '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/19.jpeg';
import img20 from '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/20.jpeg';
import img21 from '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/21.jpeg';
import img22 from '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/22.jpeg';
import img23 from '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/23.jpeg';
import img24 from '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/24.jpeg';
import img25 from '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/25.jpeg';
import img26 from '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/26.jpeg';
import img27 from '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/27.jpeg';
import img28 from '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/28.jpeg';
import img29 from '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/29.jpeg';
import img30 from '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/30.jpeg';
import img31 from '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/31.jpeg';
import img32 from '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/32.jpeg';
import img33 from '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/33.jpeg';
import img34 from '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/34.jpeg';
import img35 from '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/35.jpeg';
import img36 from '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/36.jpeg';
import img37 from '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/37.jpeg';
import img38 from '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/38.jpeg';
import img39 from '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/39.jpeg';
import img40 from '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/40.jpeg';
import img41 from '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/41.jpeg';
import img42 from '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/42.jpeg';
import img43 from '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/43.jpeg';
import img44 from '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/44.jpeg';
import img45 from '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/45.jpeg';
import img46 from '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/46.jpeg';
import img47 from '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/47.jpeg';
import img48 from '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/48.jpeg';
import img49 from '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/49.jpeg';
import img50 from '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/50.jpeg';
import img51 from '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/51.jpeg';
import img52 from '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/52.jpeg';
import img53 from '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/53.jpeg';
import img54 from '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/54.jpeg';
import img55 from '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/55.jpeg';
import img56 from '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/56.jpeg';
import img57 from '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/57.jpeg';
import img58 from '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/58.jpeg';
import img59 from '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/59.jpeg';
import img60 from '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/60.jpeg';
import img61 from '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/61.jpeg';
import img62 from '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/62.jpeg';
import img63 from '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/63.jpeg';
import img64 from '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/64.jpeg';
import img65 from '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/65.jpeg';
import img66 from '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/66.jpeg';
import img67 from '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/67.jpeg';
import img68 from '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/68.jpeg';
import img69 from '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/69.jpeg';
import img70 from '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/70.jpeg';
import img71 from '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/71.jpeg';
import img72 from '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/72.jpeg';

type MediaItem = {
  id: number;
  type: "image" | "video";
  src: string;
  thumb?: string;
  caption: string;
};

// ── Plug in your real imports here ──────────────────────────
const mediaItems: MediaItem[] = [
  {
    id: 1,
    type: "image",
    src: img1,
    caption: "New clothes distributed to children at Mathruchaya",
  },
  {
    id: 2,
    type: "image",
    src: img2,
    caption: "Fresh fruits shared with orphan children",
  },
  {
    id: 3,
    type: "image",
    src: img3,
    caption: "Children celebrating Ugadi with new clothes",
  },
  {
    id: 4,
    type: "image",
    src: img4,
    caption: "Volunteers from Viraga Foundation at the event",
  },
  {
    id: 5,
    type: "image",
    src: img5,
    caption: "Festive smiles at Mathruchaya Organization",
  },
  {
    id: 6,
    type: "image",
    src: img6,
    caption: "Group photo with children and volunteers",
  },
   {
    id: 7,
    type: "image",
    src: img7,
    caption: "New clothes distributed to children at Mathruchaya",
  },
  {
    id: 8,
    type: "image",
    src: img8,
    caption: "Fresh fruits shared with orphan children",
  },
  {
    id: 9,
    type: "image",
    src: img9,
    caption: "Children celebrating Ugadi with new clothes",
  },
  {
    id: 10,
    type: "image",
    src: img10,
    caption: "Volunteers from Viraga Foundation at the event",
  },
  {
    id: 11,
    type: "image",
    src: img11,
    caption: "Festive smiles at Mathruchaya Organization",
  },
  {
    id: 12,
    type: "image",
    src: img12,
    caption: "Group photo with children and volunteers",
  },
   {
    id: 13,
    type: "image",
    src: img13,
    caption: "New clothes distributed to children at Mathruchaya",
  },{
  id: 14,
  type: "image",
  src: img14,
  caption: "Children enjoying activities at Mathruchaya",
},
{
  id: 15,
  type: "image",
  src: img15,
  caption: "Volunteers interacting with children",
},
{
  id: 16,
  type: "image",
  src: img16,
  caption: "Moments of joy at the orphanage",
},
{
  id: 17,
  type: "image",
  src: img17,
  caption: "Children celebrating together",
},
{
  id: 18,
  type: "image",
  src: img18,
  caption: "Sharing happiness with every child",
},
{
  id: 19,
  type: "image",
  src: img19,
  caption: "Children smiling during celebration",
},
{
  id: 20,
  type: "image",
  src: img20,
  caption: "Memorable day with Mathruchaya children",
},
{
  id: 21,
  type: "image",
  src: img21,
  caption: "Children enjoying the festive spirit",
},
{
  id: 22,
  type: "image",
  src: img22,
  caption: "Volunteers spending quality time with children",
},
{
  id: 23,
  type: "image",
  src: img23,
  caption: "Smiles that light up the day",
},
{
  id: 24,
  type: "image",
  src: img24,
  caption: "Children gathered for celebration",
},
{
  id: 25,
  type: "image",
  src: img25,
  caption: "Moments of laughter and joy",
},
{
  id: 26,
  type: "image",
  src: img26,
  caption: "A joyful day with the children",
},
{
  id: 27,
  type: "image",
  src: img27,
  caption: "Celebrating togetherness",
},
{
  id: 28,
  type: "image",
  src: img28,
  caption: "Happy faces at Mathruchaya",
},
{
  id: 29,
  type: "image",
  src: img29,
  caption: "Spreading smiles among children",
},
{
  id: 30,
  type: "image",
  src: img30,
  caption: "Special moments with children",
},
{
  id: 31,
  type: "image",
  src: img31,
  caption: "Group activities with children",
},
{
  id: 32,
  type: "image",
  src: img32,
  caption: "Children enjoying the celebration",
},
{
  id: 33,
  type: "image",
  src: img33,
  caption: "Together we create happy memories",
},
{
  id: 34,
  type: "image",
  src: img34,
  caption: "Volunteers sharing joyful moments",
},
{
  id: 35,
  type: "image",
  src: img35,
  caption: "Children smiling for the camera",
},
{
  id: 36,
  type: "image",
  src: img36,
  caption: "Celebration with the children",
},
{
  id: 37,
  type: "image",
  src: img37,
  caption: "Moments of togetherness",
},
{
  id: 38,
  type: "image",
  src: img38,
  caption: "Children enjoying the event",
},
{
  id: 39,
  type: "image",
  src: img39,
  caption: "Joyful memories captured",
},
{
  id: 40,
  type: "image",
  src: img40,
  caption: "Sharing smiles and laughter",
},
{
  id: 41,
  type: "image",
  src: img41,
  caption: "Children celebrating happily",
},
{
  id: 42,
  type: "image",
  src: img42,
  caption: "Happy gathering at Mathruchaya",
},
{
  id: 43,
  type: "image",
  src: img43,
  caption: "Volunteers and children together",
},
{
  id: 44,
  type: "image",
  src: img44,
  caption: "Moments of celebration",
},
{
  id: 45,
  type: "image",
  src: img45,
  caption: "Sharing happiness with children",
},
{
  id: 46,
  type: "image",
  src: img46,
  caption: "Memorable group photo",
},
{
  id: 47,
  type: "image",
  src: img47,
  caption: "Smiling faces everywhere",
},
{
  id: 48,
  type: "image",
  src: img48,
  caption: "Fun moments with children",
},
{
  id: 49,
  type: "image",
  src: img49,
  caption: "Children enjoying together",
},
{
  id: 50,
  type: "image",
  src: img50,
  caption: "Joyful gathering captured",
},
{
  id: 51,
  type: "image",
  src: img51,
  caption: "Sharing love and happiness",
},
{
  id: 52,
  type: "image",
  src: img52,
  caption: "Children smiling brightly",
},
{
  id: 53,
  type: "image",
  src: img53,
  caption: "Beautiful moments at the orphanage",
},
{
  id: 54,
  type: "image",
  src: img54,
  caption: "Children enjoying every moment",
},
{
  id: 55,
  type: "image",
  src: img55,
  caption: "Celebration with smiles",
},
{
  id: 56,
  type: "image",
  src: img56,
  caption: "Volunteers spreading happiness",
},
{
  id: 57,
  type: "image",
  src: img57,
  caption: "Children gathered together",
},
{
  id: 58,
  type: "image",
  src: img58,
  caption: "A joyful celebration day",
},
{
  id: 59,
  type: "image",
  src: img59,
  caption: "Memories made together",
},
{
  id: 60,
  type: "image",
  src: img60,
  caption: "Children celebrating with joy",
},
{
  id: 61,
  type: "image",
  src: img61,
  caption: "Group fun and laughter",
},
{
  id: 62,
  type: "image",
  src: img62,
  caption: "Children enjoying the day",
},
{
  id: 63,
  type: "image",
  src: img63,
  caption: "Happy faces captured",
},
{
  id: 64,
  type: "image",
  src: img64,
  caption: "Sharing special moments",
},
{
  id: 65,
  type: "image",
  src: img65,
  caption: "Children celebrating happily",
},
{
  id: 66,
  type: "image",
  src: img66,
  caption: "Joyful gathering with children",
},
{
  id: 67,
  type: "image",
  src: img67,
  caption: "Fun memories together",
},
{
  id: 68,
  type: "image",
  src: img68,
  caption: "Children smiling together",
},
{
  id: 69,
  type: "image",
  src: img69,
  caption: "Celebrating happiness",
},
{
  id: 70,
  type: "image",
  src: img70,
  caption: "Volunteers and children enjoying",
},
{
  id: 71,
  type: "image",
  src: img71,
  caption: "Happy moments captured",
},
{
  id: 72,
  type: "image",
  src: img72,
  caption: "A beautiful memory with children",
},
];
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
              onClick={() => downloadMedia(item.src, `viraga-ugadi-${item.id}`)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-400 hover:bg-amber-300 text-stone-900 text-xs font-bold transition"
              title="Download"
            >
              ↓ Download
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white text-lg transition"
              title="Close"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="relative w-full bg-stone-900 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center min-h-[280px]">
          {item.type === "image" ? (
            <img
              src={item.src}
              alt={item.caption}
              className="max-h-[72vh] w-full object-contain"
            />
          ) : (
            <video
              src={item.src}
              controls
              autoPlay
              className="max-h-[72vh] w-full object-contain"
            />
          )}

          <button
            onClick={onPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-amber-400 hover:text-stone-900 text-white flex items-center justify-center text-xl transition"
          >
            ‹
          </button>
          <button
            onClick={onNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-amber-400 hover:text-stone-900 text-white flex items-center justify-center text-xl transition"
          >
            ›
          </button>
        </div>

        {/* <p className="mt-3 text-center text-stone-300 text-sm italic px-4">
          {item.caption}
        </p> */}
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────
const UgadiCelebrationGallery: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prevItem = () =>
    setLightboxIndex((i) =>
      i !== null ? (i - 1 + mediaItems.length) % mediaItems.length : 0
    );
  const nextItem = () =>
    setLightboxIndex((i) =>
      i !== null ? (i + 1) % mediaItems.length : 0
    );

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
        .gallery-card:hover .overlay {
          opacity: 1;
        }
        .overlay { transition: opacity 0.3s ease; }

        .hero-divider {
          background: linear-gradient(90deg, transparent, #c8973a, transparent);
        }
      `}</style>

      <div
        className="min-h-screen pt-16 w-full"
        style={{
          background: "#ffffff",
          fontFamily: "'Jost', sans-serif",
          color: "#1c1c1c",
        }}
      >
        {/* ── Hero / Article Section ─────────────────── */}
        <section className="max-w-6xl mx-auto px-6 pt-16 pb-12">
          {/* Foundation badge */}
          <div className="flex sm:flex-row flex-col items-center gap-3 mb-6">
            <span
              className="text-[16px] tracking-[0.5em] uppercase font-medium px-3 py-1 rounded-full border"
              style={{ color: "amber-600", borderColor: "amber-500", background: "amber-400" }}
            >
              Viraga Foundation
            </span>
            <span className="text-gray-400 text-md font-semibold tracking-widest">March 22, 2023</span>
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
            UGADI Celebration
          </h1>
          <h2
            className="mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1rem, 2.5vw, 1.45rem)",
              fontWeight: 700,
              fontStyle: "normal",
              color: "orange-900",
            }}
          >
            Spreading Joy Through Giving
          </h2>

          {/* Decorative divider */}
          <div className="hero-divider h-px w-full mb-8" />

          {/* Body paragraphs */}
          <div className="space-y-5 text-gray-600 leading-relaxed" style={{ fontSize: "1.45rem" }}>
            <p>
              On{" "}
              <span style={{ color: "orange-900" }} className="font-medium">
                March 22, 2023
              </span>
              , in celebration of{" "}
              <strong className="text-gray-800">UGADI (Telugu Samvatsaraadi)</strong>,
              Viraga Foundation organized a special donation drive to support underprivileged
              children. As part of this initiative, the foundation distributed{" "}
              <span className="font-semibold text-amber-600">new clothes and fresh fruits</span>{" "}
              to single-parent children and orphans residing at{" "}
              <em>Mathruchaya Organization</em>.
            </p>
            <p>
              This effort aimed to bring festive joy to these children, ensuring they could
              celebrate Ugadi with happiness and dignity. By providing essential items and
              fostering a sense of belonging, Viraga Foundation remains committed to its
              mission of uplifting vulnerable communities. Through such initiatives, the
              foundation continues to spread kindness and make a meaningful impact on society.
            </p>
            <p
              className="border-l-2 pl-4 italic"
              style={{ borderColor: "#c8973a", color: "#5a5a5a" }}
            >
              This event is a part of Viraga Foundation's ongoing{" "}
              <strong style={{ color: "orange-900", fontStyle: "normal" }}>
                Food Donation Program
              </strong>
              , which focuses on nourishing lives, spreading smiles, and promoting social welfare.
            </p>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4 mt-10">
            {[
              { value: "🎊", label: "Ugadi Festival" },
              { value: "👗", label: "Clothes & Fruits" },
              { value: "🏠", label: "Mathruchaya Org" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-xl p-4 text-center"
                style={{ background: "#f9f9f9", border: "1px solid #e5e5e5" }}
              >
                <div style={{ fontSize: "2rem" }}>{s.value}</div>
                <div className="text-gray-400 text-xs tracking-wider mt-1 uppercase">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Clothes Distribution Gallery ──────────────────────────── */}
        <section className="max-w-6xl mx-auto px-6 pb-20">
          <SectionTitle icon="👗" label="Clothes Distribution" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
            {mediaItems.map((item, idx) => (
              <div
                key={item.id}
                className="gallery-card relative rounded-xl overflow-hidden cursor-pointer aspect-[4/3]"
                style={{ background: "#f0f0f0" }}
                onClick={() => openLightbox(idx)}
              >
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={item.caption}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <>
                    <video
                      src={item.src}
                      className="w-full h-full object-cover"
                      muted
                      preload="metadata"
                    />
                    <div
                      className="absolute inset-0 flex items-center justify-center"
                      style={{ background: "rgba(0,0,0,0.28)" }}
                    >
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-base"
                        style={{ background: "#c8973a", color: "#fff" }}
                      >
                        ▶
                      </div>
                    </div>
                  </>
                )}

                {/* Hover overlay */}
                <div
                  className="overlay absolute inset-0 opacity-0 flex flex-col justify-end p-3"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 60%)",
                  }}
                >
                  {/* <p className="text-white text-xs leading-snug">{item.caption}</p> */}
                  <div className="flex gap-2 mt-2">
                    <ActionBtn label={item.type === "video" ? "▶ Play" : "⤢ Zoom"} />
                    <ActionBtn
                      label="↓"
                      onClick={(e) => {
                        e.stopPropagation();
                        const ext = item.type === "video" ? ".mp4" : ".jpg";
                        downloadMedia(item.src, `viraga-ugadi-${item.id}${ext}`);
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
          © 2023 Viraga Foundation · Food Donation Program
        </footer>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          items={mediaItems}
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
    <div
      className="flex-1 h-px"
      style={{
        background: "linear-gradient(90deg, #c8973a44, transparent)",
      }}
    />
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

export default UgadiCelebrationGallery;



// import GalleryPage from './GalleryPage';

// const mediaModules = import.meta.glob(
//     '../../assets/Orphanage for Street Children–A Safe Haven for Every Child/*',
//     { eager: true, query: '?url', import: 'default' }
// );

// const media = Object.values(mediaModules) as string[];

// const OrphanageGallery = () => (
//     <GalleryPage title="Orphanage for Street Children – A Safe Haven for Every Child" media={media} />
// );

// export default OrphanageGallery;
