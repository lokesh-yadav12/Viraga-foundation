import React, { useState, useEffect, useCallback } from "react";

import img1 from '../../assets/prize1.jpeg';
import img2 from '../../assets/prize2.jpeg';
import img3 from '../../assets/prize3.jpeg';
import img4 from '../../assets/prize4.jpeg';
import img5 from '../../assets/prize5.jpeg';
import img6 from '../../assets/prize6.jpeg';
import img7 from '../../assets/prize7.jpeg';
import img8 from '../../assets/prize8.jpeg';
import img9 from '../../assets/closing1.jpeg';
import img10 from '../../assets/closing2.jpeg';
import img11 from '../../assets/closing3.jpeg';
import img12 from '../../assets/closing4.jpeg';
import img13 from '../../assets/closing5.jpeg';
import img14 from '../../assets/closing6.jpeg';
import img15 from '../../assets/closing7.jpeg';
import img16 from '../../assets/closing8.jpeg';

import b4img1 from '../../assets/closing1.jpeg';
import b4img2 from '../../assets/closing2.jpeg';
import b4img3 from '../../assets/closing3.jpeg';
import b4img4 from '../../assets/closing4.jpeg';
import b4img5 from '../../assets/closing5.jpeg';
import b4img6 from '../../assets/closing6.jpeg';
import b4img7 from '../../assets/closing7.jpeg';
import b4img8 from '../../assets/closing8.jpeg';
import b4img9 from '../../assets/closing9.jpeg';
import b4img10 from '../../assets/closing10.jpeg';
import b4img11 from '../../assets/closing11.jpeg';
import b4img12 from '../../assets/closing12.jpeg';
import b4img13 from '../../assets/closing13.jpeg';
import b4img14 from '../../assets/closing14.jpeg';
import b4img15 from '../../assets/closing15.jpeg';
import b4img16 from '../../assets/closing16.jpeg';
import b4img17 from '../../assets/closing17.jpeg';
import b4img18 from '../../assets/closing18.jpeg';
import b4img19 from '../../assets/closing19.jpeg';
import b4img20 from '../../assets/closing20.jpeg';

import b5img1 from '../../assets/guest1.jpeg';
import b5img2 from '../../assets/guest2.jpeg';
import b5img3 from '../../assets/guest3.jpeg';
import b5img4 from '../../assets/guest4.jpeg';
import b5img5 from '../../assets/guest5.jpeg';
import b5img6 from '../../assets/guest6.jpeg';
import b5img7 from '../../assets/guest7.jpeg';
import b5img8 from '../../assets/guest8.jpeg';
import b5img9 from '../../assets/guest9.jpeg';
import b5img10 from '../../assets/guest10.jpeg';
import b5img11 from '../../assets/guest11.jpeg';
import b5img12 from '../../assets/guest12.jpeg';
import b5img13 from '../../assets/guest13.jpeg';
import b5img14 from '../../assets/guest14.jpeg';
import b5img15 from '../../assets/guest15.jpeg';
import b5img16 from '../../assets/guest16.jpeg';
import b5img17 from '../../assets/guest17.jpeg';
import b5img18 from '../../assets/guest18.jpeg';
import b5img19 from '../../assets/guest19.jpeg';
import b5img20 from '../../assets/guest19.jpeg';

import b6img1 from '../../assets/class1.jpeg';
import b6img2 from '../../assets/class2.jpeg';
import b6img3 from '../../assets/class3.jpeg';
import b6img4 from '../../assets/class4.jpeg';
import b6img5 from '../../assets/class5.jpeg';
import b6img6 from '../../assets/class6.jpeg';
import b6img7 from '../../assets/class7.jpeg';
import b6img8 from '../../assets/class8.jpeg';
import b6img9 from '../../assets/class9.jpeg';
import b6img10 from '../../assets/class10.jpeg';
import b6img11 from '../../assets/class11.jpeg';
import b6img12 from '../../assets/class12.jpeg';
import b6img13 from '../../assets/class13.jpeg';
import b6img14 from '../../assets/class14.jpeg';
import b6img15 from '../../assets/class15.jpeg';
import b6img16 from '../../assets/class16.jpeg';
import b6img17 from '../../assets/class17.jpeg';
import b6img18 from '../../assets/class18.jpeg';
import b6img19 from '../../assets/class19.jpeg';
import b6img20 from '../../assets/class20.jpeg';

import b7img1 from '../../assets/l1.png';
import b7img2 from '../../assets/l2.png';
import b7img3 from '../../assets/l3.png';
import b7img4 from '../../assets/l4.png';
import b7img5 from '../../assets/l5.png';
import b7img6 from '../../assets/l6.png';
import b7img7 from '../../assets/l7.png';
import b7img8 from '../../assets/l8.png';
import b7img9 from '../../assets/l9.png';
import b7img10 from '../../assets/l10.png';
import b7img11 from '../../assets/l11.png';
import b7img12 from '../../assets/l12.png';
import b7img13 from '../../assets/l13.png';
import b7img14 from '../../assets/l14.png';
import b7img15 from '../../assets/p6.png';
import b7img16 from '../../assets/p7.png';
import b7img17 from '../../assets/p8.png';
import b7img18 from '../../assets/p9.png';
import b7img19 from '../../assets/p10.png';
import b7img20 from '../../assets/p11.png';

type MediaItem = {
  id: number;
  type: "image" | "video";
  src: string;
  caption: string;
};

const mathItems: MediaItem[] = [
  { id: 1, type: "image", src: img1, caption: "Distribution of Mathematics Handbooks to students" },
  { id: 2, type: "image", src: img2, caption: "MTG & Viraga Foundation collaboration" },
  { id: 3, type: "image", src: img3, caption: "Students receiving customized handbooks" },
  { id: 4, type: "image", src: img4, caption: "Viraga Foundation cover on Math Handbook" },
];

const notebookItems: MediaItem[] = [
  { id: 1, type: "image", src: img5, caption: "1,000 customized notebooks ready for distribution" },
  { id: 2, type: "image", src: img6, caption: "Students receiving notebooks at government school" },
  { id: 3, type: "image", src: img7, caption: "Viraga Foundation branded 170-page notebooks" },
  { id: 4, type: "image", src: img8, caption: "Happy students with their new study materials" },
];

const jnvItems: MediaItem[] = [
  { id: 1,  type: "image", src: img9,  caption: "Structured training for 5th standard students" },
  { id: 2,  type: "image", src: img10, caption: "Students preparing for JNV Entrance Exam" },
  { id: 3,  type: "image", src: img11, caption: "Problem-solving sessions at Viraga Foundation" },
  { id: 4,  type: "image", src: img12, caption: "Students appearing for JNV Exam – Dec 13, 2025" },
  { id: 5,  type: "image", src: img13, caption: "Structured training for 5th standard students" },
  { id: 6,  type: "image", src: img14, caption: "Students preparing for JNV Entrance Exam" },
  { id: 7,  type: "image", src: img15, caption: "Problem-solving sessions at Viraga Foundation" },
  { id: 8,  type: "image", src: img16, caption: "Students appearing for JNV Exam – Dec 13, 2025" },
];

const block4Items: MediaItem[] = [
  { id: 1,  type: "image", src: b4img1,  caption: "Photo 1" },
  { id: 2,  type: "image", src: b4img2,  caption: "Photo 2" },
  { id: 3,  type: "image", src: b4img3,  caption: "Photo 3" },
  { id: 4,  type: "image", src: b4img4,  caption: "Photo 4" },
  { id: 5,  type: "image", src: b4img5,  caption: "Photo 5" },
  { id: 6,  type: "image", src: b4img6,  caption: "Photo 6" },
  { id: 7,  type: "image", src: b4img7,  caption: "Photo 7" },
  { id: 8,  type: "image", src: b4img8,  caption: "Photo 8" },
  { id: 9,  type: "image", src: b4img9,  caption: "Photo 9" },
  { id: 10, type: "image", src: b4img10, caption: "Photo 10" },
  { id: 11, type: "image", src: b4img11, caption: "Photo 11" },
  { id: 12, type: "image", src: b4img12, caption: "Photo 12" },
  { id: 13, type: "image", src: b4img13, caption: "Photo 13" },
  { id: 14, type: "image", src: b4img14, caption: "Photo 14" },
  { id: 15, type: "image", src: b4img15, caption: "Photo 15" },
  { id: 16, type: "image", src: b4img16, caption: "Photo 16" },
  { id: 17, type: "image", src: b4img17, caption: "Photo 17" },
  { id: 18, type: "image", src: b4img18, caption: "Photo 18" },
  { id: 19, type: "image", src: b4img19, caption: "Photo 19" },
  { id: 20, type: "image", src: b4img20, caption: "Photo 20" },
];

const block5Items: MediaItem[] = [
  { id: 1,  type: "image", src: b5img1,  caption: "Photo 1" },
  { id: 2,  type: "image", src: b5img2,  caption: "Photo 2" },
  { id: 3,  type: "image", src: b5img3,  caption: "Photo 3" },
  { id: 4,  type: "image", src: b5img4,  caption: "Photo 4" },
  { id: 5,  type: "image", src: b5img5,  caption: "Photo 5" },
  { id: 6,  type: "image", src: b5img6,  caption: "Photo 6" },
  { id: 7,  type: "image", src: b5img7,  caption: "Photo 7" },
  { id: 8,  type: "image", src: b5img8,  caption: "Photo 8" },
  { id: 9,  type: "image", src: b5img9,  caption: "Photo 9" },
  { id: 10, type: "image", src: b5img10, caption: "Photo 10" },
  { id: 11, type: "image", src: b5img11, caption: "Photo 11" },
  { id: 12, type: "image", src: b5img12, caption: "Photo 12" },
  { id: 13, type: "image", src: b5img13, caption: "Photo 13" },
  { id: 14, type: "image", src: b5img14, caption: "Photo 14" },
  { id: 15, type: "image", src: b5img15, caption: "Photo 15" },
  { id: 16, type: "image", src: b5img16, caption: "Photo 16" },
  { id: 17, type: "image", src: b5img17, caption: "Photo 17" },
  { id: 18, type: "image", src: b5img18, caption: "Photo 18" },
  { id: 19, type: "image", src: b5img19, caption: "Photo 19" },
  { id: 20, type: "image", src: b5img20, caption: "Photo 20" },
];

const block6Items: MediaItem[] = [
  { id: 1,  type: "image", src: b6img1,  caption: "Photo 1" },
  { id: 2,  type: "image", src: b6img2,  caption: "Photo 2" },
  { id: 3,  type: "image", src: b6img3,  caption: "Photo 3" },
  { id: 4,  type: "image", src: b6img4,  caption: "Photo 4" },
  { id: 5,  type: "image", src: b6img5,  caption: "Photo 5" },
  { id: 6,  type: "image", src: b6img6,  caption: "Photo 6" },
  { id: 7,  type: "image", src: b6img7,  caption: "Photo 7" },
  { id: 8,  type: "image", src: b6img8,  caption: "Photo 8" },
  { id: 9,  type: "image", src: b6img9,  caption: "Photo 9" },
  { id: 10, type: "image", src: b6img10, caption: "Photo 10" },
  { id: 11, type: "image", src: b6img11, caption: "Photo 11" },
  { id: 12, type: "image", src: b6img12, caption: "Photo 12" },
  { id: 13, type: "image", src: b6img13, caption: "Photo 13" },
  { id: 14, type: "image", src: b6img14, caption: "Photo 14" },
  { id: 15, type: "image", src: b6img15, caption: "Photo 15" },
  { id: 16, type: "image", src: b6img16, caption: "Photo 16" },
  { id: 17, type: "image", src: b6img17, caption: "Photo 17" },
  { id: 18, type: "image", src: b6img18, caption: "Photo 18" },
  { id: 19, type: "image", src: b6img19, caption: "Photo 19" },
  { id: 20, type: "image", src: b6img20, caption: "Photo 20" },
];

const block7Items: MediaItem[] = [
  { id: 1,  type: "image", src: b7img1,  caption: "Photo 1" },
  { id: 2,  type: "image", src: b7img2,  caption: "Photo 2" },
  { id: 3,  type: "image", src: b7img3,  caption: "Photo 3" },
  { id: 4,  type: "image", src: b7img4,  caption: "Photo 4" },
  { id: 5,  type: "image", src: b7img5,  caption: "Photo 5" },
  { id: 6,  type: "image", src: b7img6,  caption: "Photo 6" },
  { id: 7,  type: "image", src: b7img7,  caption: "Photo 7" },
  { id: 8,  type: "image", src: b7img8,  caption: "Photo 8" },
  { id: 9,  type: "image", src: b7img9,  caption: "Photo 9" },
  { id: 10, type: "image", src: b7img10, caption: "Photo 10" },
  { id: 11, type: "image", src: b7img11, caption: "Photo 11" },
  { id: 12, type: "image", src: b7img12, caption: "Photo 12" },
  { id: 13, type: "image", src: b7img13, caption: "Photo 13" },
  { id: 14, type: "image", src: b7img14, caption: "Photo 14" },
  { id: 15, type: "image", src: b7img15, caption: "Photo 15" },
  { id: 16, type: "image", src: b7img16, caption: "Photo 16" },
  { id: 17, type: "image", src: b7img17, caption: "Photo 17" },
  { id: 18, type: "image", src: b7img18, caption: "Photo 18" },
  { id: 19, type: "image", src: b7img19, caption: "Photo 19" },
  { id: 20, type: "image", src: b7img20, caption: "Photo 20" },
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
          {/* Counter: font-semibold text-sm → from About lightbox, kept as-is (UI element) */}
          <span className="text-amber-400 font-semibold text-sm tracking-widest uppercase">
            {index + 1} / {items.length}
          </span>
          <div className="flex gap-3">
            <button
              onClick={() => downloadMedia(item.src, `viraga-edu-${item.id}`)}
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
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────
// Reusable Gallery Grid
// ─────────────────────────────────────────────
const GalleryGrid: React.FC<{
  items: MediaItem[];
  onOpen: (i: number) => void;
  prefix: string;
}> = ({ items, onOpen, prefix }) => (
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
    {items.map((item, idx) => (
      <div
        key={`${item.id}-${idx}`}
        className="gallery-card relative rounded-xl overflow-hidden cursor-pointer aspect-[4/3]"
        style={{ background: "#f0f0f0" }}
        onClick={() => onOpen(idx)}
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
          <div className="flex gap-2 mt-2">
            <ActionBtn label={item.type === "video" ? "▶ Play" : "⤢ Zoom"} />
            <ActionBtn
              label="↓"
              onClick={(e) => {
                e.stopPropagation();
                downloadMedia(item.src, `${prefix}-${item.id}${item.type === "video" ? ".mp4" : ".jpg"}`);
              }}
            />
          </div>
        </div>
      </div>
    ))}
  </div>
);

// ─────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────
const EducationInitiativesGallery: React.FC = () => {
  const [mathLb,     setMathLb]     = useState<number | null>(null);
  const [notebookLb, setNotebookLb] = useState<number | null>(null);
  const [jnvLb,      setJnvLb]      = useState<number | null>(null);
  const [block4Lb,   setBlock4Lb]   = useState<number | null>(null);
  const [block5Lb,   setBlock5Lb]   = useState<number | null>(null);
  const [block6Lb,   setBlock6Lb]   = useState<number | null>(null);
  const [block7Lb,   setBlock7Lb]   = useState<number | null>(null);

  const prev = (items: MediaItem[], set: React.Dispatch<React.SetStateAction<number | null>>) => () =>
    set((i) => (i !== null ? (i - 1 + items.length) % items.length : 0));
  const next = (items: MediaItem[], set: React.Dispatch<React.SetStateAction<number | null>>) => () =>
    set((i) => (i !== null ? (i + 1) % items.length : 0));

  return (
    <>
      <style>{`
        .gallery-card { transition: transform 0.35s cubic-bezier(.22,.68,0,1.3), box-shadow 0.3s ease; }
        .gallery-card:hover { transform: translateY(-6px) scale(1.02); box-shadow: 0 20px 48px rgba(0,0,0,0.15); }
        .gallery-card:hover .overlay { opacity: 1; }
        .overlay { transition: opacity 0.3s ease; }
        .hero-divider { background: linear-gradient(90deg, transparent, #c8973a, transparent); }
        .soft-divider { background: linear-gradient(90deg, transparent, #e0e0e0, transparent); }
      `}</style>

      <div className="min-h-screen pt-16 w-full" style={{ background: "#ffffff", color: "#1c1c1c" }}>

        {/* ── Page Header ── */}
        <div className="max-w-6xl mx-auto px-6 pt-16 pb-2">
          <div className="flex sm:flex-row flex-col items-center gap-3 mb-5">
            {/*
              FROM: text-[16px] tracking-[0.3em] font-medium
              TO:   text-base font-medium (About body base size)
            */}
            <span
              className="text-base font-medium px-3 py-1 rounded-full border tracking-[0.3em] uppercase"
              style={{ color: "#92400e", borderColor: "#92400e", background: "#c8973a11" }}
            >
              Viraga Foundation
            </span>
            {/*
              FROM: text-md font-semibold
              TO:   text-base font-semibold
            */}
            <span className="text-gray-600 text-base font-semibold tracking-widest">Education Initiatives</span>
          </div>

          {/*
            Page H1 — FROM: clamp(1.7rem, 4.5vw, 2.8rem) fontWeight:700
            TO: text-4xl sm:text-5xl lg:text-6xl font-bold text-amber-800
          */}
          <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-amber-700 leading-tight mb-2">
            Scholarship Assistance &amp; Guidance
          </h1>

          {/*
            Page subtitle — FROM: clamp(1rem, 2.2vw, 1.3rem) fontStyle:normal
            TO: text-lg font-bold italic text-orange-700
          */}
          <p className="text-lg font-bold  text-orange-600 mt-1 mb-6">
            Empowering Dreams Through Education
          </p>
          <div className="hero-divider h-px w-full" />
        </div>

        {/* ════ SECTION 1 — MATHEMATICS HANDBOOKS ════ */}
        <section className="max-w-6xl mx-auto px-6 pt-14 pb-4">
          <EventBadge label="Distribution Drive" />

          {/*
            Section H2 — FROM: clamp(1.5rem, 3.5vw, 2.3rem) fontWeight:600
            TO: text-4xl sm:text-5xl font-bold text-amber-700 leading-tight
          */}
          <h2 className="text-3xl sm:text-4xl font-bold text-amber-700 leading-tight">
            Distribution of Mathematics Handbooks
          </h2>

          {/*
            Section subtitle — FROM: clamp(0.95rem, 2vw, 1.25rem) fontStyle:normal
            TO: text-lg font-bold italic text-orange-700
          */}
          <p className="text-lg font-bold  text-orange-600 mt-1 mb-6">
            Supporting Needy Students in Government Schools
          </p>
          <div className="hero-divider h-px w-full mb-8" />

          {/*
            Body — FROM: fontSize:"1.25rem" text-gray-600
            TO: text-base sm:text-lg leading-relaxed text-amber-900
          */}
          <div className="space-y-5 text-gray-800 text-base sm:text-lg leading-relaxed">
            <p>
              As part of its commitment to promoting education, Viraga Foundation, in collaboration with{" "}
              <strong className="text-amber-700">MTG Learning Media Private Limited</strong> (content provided by MTG), is distributing{" "}
              {/* Inline highlight — FROM: font-semibold text-amber-500 → TO: font-semibold text-orange-700 */}
              <span className="font-semibold text-orange-700">100 Mathematics Handbooks</span> to needy students studying in government schools.
            </p>
            <p>
              This specially designed handbook contains all essential mathematical formulas from{" "}
              <strong className="text-amber-900">Class VI to Class XII</strong>, serving as a quick reference guide to help students strengthen
              their understanding of the subject and enhance their academic performance. Each book has been customized with a{" "}
              <em>VIRAGA Foundation cover</em>, making it a personalized resource for students.
            </p>

            {/*
              Info box — FROM: fontSize:"0.95rem" text-gray-700
              TO: text-base sm:text-lg text-amber-900
            */}
            <div className="rounded-xl p-5 space-y-2" style={{ background: "#fdf8f0", border: "1px solid #e8d9b8" }}>
              <p className="text-amber-900 font-semibold mb-3 text-base sm:text-lg">
                By providing these handbooks, the foundation aims to:
              </p>
              {[
                "Support students in their academic journey",
                "Boost their confidence in mathematics",
                "Help them prepare for competitive exams and future studies",
              ].map((goal) => (
                <div key={goal} className="flex items-start gap-2 text-amber-900 text-base sm:text-lg">
                  <span style={{ color: "#c8973a", marginTop: "1px" }}>✔</span>
                  <span>{goal}</span>
                </div>
              ))}
            </div>

            {/*
              Block quote — FROM: italic fontSize inherited, color:#5a5a5a
              TO: text-lg font-medium italic text-orange-700 (matches About italic quote)
            */}
            <p className="border-l-2 pl-4 text-lg font-medium  text-orange-700" style={{ borderColor: "#c8973a" }}>
              Through such efforts, Viraga Foundation, in partnership with MTG Learning Media Private Limited, continues to inspire, uplift, and
              make education accessible, helping students shape a brighter and more promising future.
            </p>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 pt-6 pb-14">
          <SectionTitle icon="📚" label="Handbook Distribution – Photos" />
          <GalleryGrid items={mathItems} onOpen={(i) => setMathLb(i)} prefix="viraga-math" />
        </section>

        <div className="soft-divider h-px max-w-5xl mx-auto" />

        {/* ════ SECTION 2 — CUSTOMIZED NOTEBOOKS ════ */}
        <section className="max-w-6xl mx-auto px-6 pt-14 pb-4">
          <EventBadge label="Education Support" />

          <h2 className="text-3xl sm:text-4xl font-bold text-amber-700 leading-tight">
            Distribution of Customized Notebooks
          </h2>
          <p className="text-lg font-bold  text-orange-600 mt-1 mb-6">
            to Needy Students
          </p>
          <div className="hero-divider h-px w-full mb-8" />

          <div className="space-y-5 text-gray-900 text-base sm:text-lg leading-relaxed">
            <p>
              As part of its commitment to supporting education, Viraga Foundation has ordered{" "}
              <span className="font-semibold text-orange-700">1,000 customized 170-page notebooks</span>{" "}
              with a Viraga Foundation cover for distribution to needy students in government schools.
            </p>
            <p>
              This initiative aims to provide essential study materials, helping students focus on their education without basic resource
              constraints. By ensuring access to these notebooks, Viraga Foundation continues to empower young learners and promote equal
              learning opportunities.
            </p>
            <p className="border-l-2 pl-4 text-lg font-medium  text-gray-700" style={{ borderColor: "#c8973a" }}>
              Through such efforts, the foundation remains dedicated to uplifting underprivileged students and fostering a brighter future through education.
            </p>
          </div>

          {/* Milestone cards */}
          <div className="grid grid-cols-3 gap-4 mt-10">
            {[
              { value: "1,000", label: "Notebooks Ordered" },
              { value: "170",   label: "Pages Each" },
              { value: "🎓",   label: "Govt. Schools" },
            ].map((s) => (
              <div key={s.label} className="rounded-xl sm:p-4 p-2 text-center" style={{ background: "#f9f9f9", border: "1px solid #e5e5e5" }}>
                {/*
                  Milestone value — FROM: clamp fontSize 2.2rem fontWeight:600
                  TO: text-4xl font-bold text-amber-700
                */}
                <div className="text-xl sm:text-2xl font-bold text-amber-700">{s.value}</div>
                {/*
                  Milestone label — FROM: text-xs text-gray-400
                  TO: text-base text-amber-900
                */}
                <div className="text-sm text-amber-700 tracking-wider mt-0.5 uppercase">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 pt-6 pb-14">
          <SectionTitle icon="📓" label="Notebook Distribution – Photos" />
          <GalleryGrid items={notebookItems} onOpen={(i) => setNotebookLb(i)} prefix="viraga-notebook" />
        </section>

        <div className="soft-divider h-px max-w-5xl mx-auto" />

        {/* ════ SECTION 3 — VIBRANT FUTURES / JNV ════ */}
        <section className="max-w-5xl mx-auto px-6 pt-14 pb-4">
          <EventBadge label="Flagship Programme" />

          <h2 className="text-3xl sm:text-4xl font-bold text-amber-700 leading-tight">
            Vibrant Futures – Transforming Lives
          </h2>
          <p className="text-lg font-bold  text-orange-600 mt-1 mb-6">
            JNV Entrance Examination Preparation Programme
          </p>
          <div className="hero-divider h-px w-full mb-8" />

          <div className="space-y-5 text-gray-900 text-base sm:text-lg leading-relaxed">
            <p>
              As part of its flagship educational initiative,{" "}
              <>Scholarship Assistance &amp; Guidance – Empowering Dreams Through Education</>, VIRAGA FOUNDATION launched the{" "}
              <strong className="text-amber-900">"Vibrant Futures – Transforming Lives"</strong> programme to create equal learning opportunities
              for children from government primary schools.
            </p>
            <p>
              Under this programme, a structured and focused training initiative was conducted for{" "}
              <span className="font-semibold text-orange-700">5th standard students</span> studying in Government Primary Schools, aimed at
              preparing them for the highly competitive{" "}
              <strong className="text-amber-900">Jawahar Navodaya Vidyalaya (JNV) Entrance Examination</strong>.
            </p>
            <p>
              The programme was designed to strengthen core academic foundations, enhance problem-solving skills, and build confidence among
              students who otherwise have limited access to quality coaching and guidance.
            </p>

            {/* Milestone card */}
            <div className="rounded-xl p-5 flex items-start gap-4" style={{ background: "#fdf8f0", border: "1px solid #e8d9b8" }}>
              <span style={{ fontSize: "1.8rem", lineHeight: 1 }}>🏆</span>
              <div>
                {/*
                  Card title — FROM: fontSize:"0.95rem" font-semibold
                  TO: text-base sm:text-lg font-semibold text-amber-800
                */}
                <p className="font-semibold text-amber-800 text-base sm:text-lg">Examination Milestone</p>
                {/*
                  Card body — FROM: fontSize:"0.92rem"
                  TO: text-base sm:text-lg text-amber-900
                */}
                <p className="text-gray-900 mt-1 text-base sm:text-lg">
                  The training culminated in students appearing for the JNV Entrance Examination conducted on{" "}
                  <span className="font-semibold text-orange-700">13 December 2025</span>, marking an important milestone in their educational journey.
                </p>
              </div>
            </div>

            <p className="border-l-2 pl-4 text-lg font-medium  text-gray-800" style={{ borderColor: "#c8973a" }}>
              Through the Vibrant Futures – Transforming Lives initiative, VIRAGA FOUNDATION continues its commitment to empowering young minds,
              bridging educational disparities, and enabling deserving children to realize their full potential through education.
            </p>
          </div>
        </section>

        {/* <section className="max-w-6xl mx-auto px-6 pt-6 pb-14">
          <SectionTitle icon="🏫" label="Vibrant Futures – Photos" />
          <GalleryGrid items={jnvItems} onOpen={(i) => setJnvLb(i)} prefix="viraga-jnv" />
        </section> */}

        <div className="soft-divider h-px max-w-5xl mx-auto" />

        {/* ════ SECTION 6 ════ */}
        {/* <section className="max-w-6xl mx-auto px-6 pt-14 pb-14">
          <SectionTitle icon="🖼️" label="V F T L Registration, Class & Exam Pics" />
          <GalleryGrid items={block6Items} onOpen={(i) => setBlock6Lb(i)} prefix="viraga-block6" />
        </section>
        <div className="soft-divider h-px max-w-5xl mx-auto" /> */}

        {/* ════ SECTION 5 ════ */}
        {/* <section className="max-w-6xl mx-auto px-6 pt-14 pb-14">
          <SectionTitle icon="🖼️" label="V F T L Guest Lectures" />
          <GalleryGrid items={block5Items} onOpen={(i) => setBlock5Lb(i)} prefix="viraga-block5" />
        </section>
        <div className="soft-divider h-px max-w-5xl mx-auto" /> */}

        {/* ════ SECTION 4 ════ */}
        {/* <section className="max-w-6xl mx-auto px-6 pt-14 pb-14">
          <SectionTitle icon="🖼️" label="V F T L Closing Ceremony" />
          <GalleryGrid items={block4Items} onOpen={(i) => setBlock4Lb(i)} prefix="viraga-block4" />
        </section> */}

        <div className="soft-divider h-px max-w-5xl mx-auto" />

        {/* ════ SECTION 7 ════ */}
        {/* <section className="max-w-6xl mx-auto px-6 pt-14 pb-20">
          <SectionTitle icon="🖼️" label="V F T L Food Donation" />
          <GalleryGrid items={block7Items} onOpen={(i) => setBlock7Lb(i)} prefix="viraga-block7" />
        </section> */}

        {/*
          Footer — FROM: text-xs text-gray-400
          TO: text-base text-amber-900
        */}
        <footer className="text-center py-6 text-base text-amber-900 tracking-widest border-t border-gray-200">
          © 2025 Viraga Foundation · Scholarship Assistance &amp; Guidance Programme
        </footer>
      </div>

      {/* ── Lightboxes ── */}
      {mathLb !== null && (
        <Lightbox items={mathItems} index={mathLb} onClose={() => setMathLb(null)}
          onPrev={prev(mathItems, setMathLb)} onNext={next(mathItems, setMathLb)} />
      )}
      {notebookLb !== null && (
        <Lightbox items={notebookItems} index={notebookLb} onClose={() => setNotebookLb(null)}
          onPrev={prev(notebookItems, setNotebookLb)} onNext={next(notebookItems, setNotebookLb)} />
      )}
      {jnvLb !== null && (
        <Lightbox items={jnvItems} index={jnvLb} onClose={() => setJnvLb(null)}
          onPrev={prev(jnvItems, setJnvLb)} onNext={next(jnvItems, setJnvLb)} />
      )}
      {block4Lb !== null && (
        <Lightbox items={block4Items} index={block4Lb} onClose={() => setBlock4Lb(null)}
          onPrev={prev(block4Items, setBlock4Lb)} onNext={next(block4Items, setBlock4Lb)} />
      )}
      {block5Lb !== null && (
        <Lightbox items={block5Items} index={block5Lb} onClose={() => setBlock5Lb(null)}
          onPrev={prev(block5Items, setBlock5Lb)} onNext={next(block5Items, setBlock5Lb)} />
      )}
      {block6Lb !== null && (
        <Lightbox items={block6Items} index={block6Lb} onClose={() => setBlock6Lb(null)}
          onPrev={prev(block6Items, setBlock6Lb)} onNext={next(block6Items, setBlock6Lb)} />
      )}
      {block7Lb !== null && (
        <Lightbox items={block7Items} index={block7Lb} onClose={() => setBlock7Lb(null)}
          onPrev={prev(block7Items, setBlock7Lb)} onNext={next(block7Items, setBlock7Lb)} />
      )}
    </>
  );
};

// ─── Small helpers ────────────────────────────

/*
  EventBadge — FROM: text-[10px] tracking-[0.25em] font-medium
  TO: text-base font-medium (About body base)
*/
const EventBadge: React.FC<{ label: string }> = ({ label }) => (
  <span
    className="inline-block text-base font-medium px-3 py-1 rounded-full border mb-3 tracking-[0.25em] uppercase"
    style={{ color: "#92400e", borderColor: "#92400e55", background: "#c8973a11" }}
  >
    {label}
  </span>
);

/*
  SectionTitle H3 — FROM: fontSize:"1.55rem" fontWeight:600
  TO: text-4xl font-bold text-amber-800
*/
const SectionTitle: React.FC<{ icon: string; label: string }> = ({ icon, label }) => (
  <div className="flex items-center gap-3">
    <span className="text-xl">{icon}</span>
    <h3 className="text-4xl font-bold text-amber-700">
      {label}
    </h3>
    <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, #c8973a44, transparent)" }} />
  </div>
);

/*
  ActionBtn — FROM: text-[11px] font-medium
  TO: text-base font-bold (About CTA button)
*/
const ActionBtn: React.FC<{ label: string; onClick?: (e: React.MouseEvent) => void }> = ({ label, onClick }) => (
  <button
    onClick={onClick}
    className="text-base font-bold px-2 py-0.5 rounded-full transition hover:opacity-80"
    style={{ background: "#c8973a", color: "#fff" }}
  >
    {label}
  </button>
);

export default EducationInitiativesGallery;