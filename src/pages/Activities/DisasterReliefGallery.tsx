import React, { useState, useEffect, useCallback } from "react";
import img1 from '../../assets/Disaster Relief & Humanitarian Aid – Extending Hope in Crisis/1.jpg';
import img2 from '../../assets/Disaster Relief & Humanitarian Aid – Extending Hope in Crisis/2.jpg';
import img3 from '../../assets/Disaster Relief & Humanitarian Aid – Extending Hope in Crisis/5.jpg';
import img4 from '../../assets/Disaster Relief & Humanitarian Aid – Extending Hope in Crisis/11.jpg';
import vid1 from '../../assets/Disaster Relief & Humanitarian Aid – Extending Hope in Crisis/3.mp4';
import vid2 from '../../assets/Disaster Relief & Humanitarian Aid – Extending Hope in Crisis/4.mp4';
import vid3 from '../../assets/Disaster Relief & Humanitarian Aid – Extending Hope in Crisis/6.mp4';
import vid4 from '../../assets/Disaster Relief & Humanitarian Aid – Extending Hope in Crisis/8.mp4';

type MediaItem = {
  id: number;
  type: "image" | "video";
  src: string;
  thumb?: string;
  caption: string;
};

const mediaItems: MediaItem[] = [
  {
    id: 1,
    type: "image",
    src: img1,
    caption: "Distribution of provisions to affected families",
  },
  {
    id: 2,
    type: "image",
    src: img2,
    caption: "Volunteers packing essential supplies",
  },
  {
    id: 3,
    type: "image",
    src: img3,
    caption: "Sarees and clothing distributed to women",
  },
  {
    id: 4,
    type: "image",
    src: img4,
    caption: "Fresh vegetables and grains for 14 families",
  },
  {
    id: 5,
    type: "video",
    src: vid1,
    caption: "Relief distribution drive – August 31, 2024",
  },
  {
    id: 6,
    type: "video",
    src: vid2,
    caption: "Community response in Payakapuram",
  },
  {
    id: 7,
    type: "video",
    src: vid3,
    caption: "Volunteer efforts in disaster relief",
  },
  {
    id: 8,
    type: "video",
    src: vid4,
    caption: "Impact of relief measures on local communities",
  },
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
              onClick={() => downloadMedia(item.src, `viraga-relief-${item.id}`)}
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

        <p className="mt-3 text-center text-stone-300 text-sm italic px-4">
          {item.caption}
        </p>
      </div>
    </div>
  );
};

const DisasterReliefGallery: React.FC = () => {
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

  const images = mediaItems.filter((m) => m.type === "image");
  const videos = mediaItems.filter((m) => m.type === "video");

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
        <section className="max-w-5xl mx-auto px-6 pt-16 pb-12">
          <div className="flex items-center gap-3 mb-6">
            <span
              className="text-[10px] tracking-[0.3em] uppercase font-medium px-3 py-1 rounded-full border"
              style={{ color: "#c8973a", borderColor: "#c8973a55", background: "#c8973a11" }}
            >
              Viraga Foundation
            </span>
            <span className="text-gray-400 text-sm font-semibold tracking-widest">August 31, 2024</span>
          </div>

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
            Flood Relief Assistance
          </h1>
          <h2
            className="mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1rem, 2.5vw, 1.45rem)",
              fontWeight: 700,
              fontStyle: "italic",
              color: "#c8973a",
            }}
          >
            Distribution of Provisions, Clothing &amp; Vegetables
          </h2>

          <div className="hero-divider h-px w-full mb-8" />

          <div className="space-y-5 text-gray-600 leading-relaxed" style={{ fontSize: "1.05rem" }}>
            <p>
              On{" "}
              <span style={{ color: "#c8973a" }} className="font-medium">
                August 31, 2024
              </span>
              , severe floods caused by the{" "}
              <em>Budameru River</em> submerged several homes in the{" "}
              <strong className="text-gray-800">Payakapuram</strong> area, leaving
              families without basic necessities for over a week. In response, Viraga
              Foundation extended its support to{" "}
              <span className="font-semibold text-amber-600">14 affected families</span>,
              ensuring they received essential relief materials.
            </p>
            <p>
              As part of the initiative, the foundation distributed{" "}
              <span className="font-semibold text-amber-600">27 types of provisions</span>,
              including grains, pulses, cooking essentials, and fresh vegetables, along
              with sarees, lungis, t-shirts and blankets to provide comfort and warmth to
              the affected individuals. Additionally, fancy items were also distributed to
              help families regain a sense of normalcy.
            </p>
            <p
              className="border-l-2 pl-4 italic"
              style={{ borderColor: "#c8973a", color: "#5a5a5a" }}
            >
              This relief effort reflects Viraga Foundation's commitment to humanitarian
              aid, providing timely support to those impacted by natural disasters. By
              offering essential supplies and care, the foundation continues to stand with
              communities in need, fostering resilience and hope during challenging times.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-10">
            {[
              { value: "14", label: "Families Supported" },
              { value: "27", label: "Types of Provisions" },
              { value: "1", label: "Day of Action" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-xl p-4 text-center"
                style={{ background: "#f9f9f9", border: "1px solid #e5e5e5" }}
              >
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "2.2rem",
                    color: "#c8973a",
                    fontWeight: 600,
                  }}
                >
                  {s.value}
                </div>
                <div className="text-gray-400 text-xs tracking-wider mt-0.5 uppercase">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Photo Gallery ──────────────────────────── */}
        <section className="max-w-6xl mx-auto px-6 pb-10">
          <SectionTitle icon="📷" label="Photo Gallery" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
            {images.map((item) => {
              const globalIdx = mediaItems.findIndex((m) => m.id === item.id);
              return (
                <div
                  key={item.id}
                  className="gallery-card relative rounded-xl overflow-hidden cursor-pointer aspect-[4/3]"
                  style={{ background: "#f0f0f0" }}
                  onClick={() => openLightbox(globalIdx)}
                >
                  <img
                    src={item.src}
                    alt={item.caption}
                    className="w-full h-full object-cover"
                  />
                  <div className="overlay absolute inset-0 opacity-0 flex flex-col justify-end p-3"
                    style={{ background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 60%)" }}>
                    <p className="text-white text-xs leading-snug">{item.caption}</p>
                    <div className="flex gap-2 mt-2">
                      <ActionBtn label="⤢ Zoom" />
                      <ActionBtn
                        label="↓"
                        onClick={(e) => {
                          e.stopPropagation();
                          downloadMedia(item.src, `viraga-relief-${item.id}.jpg`);
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Video Gallery ──────────────────────────── */}
        <section className="max-w-6xl mx-auto px-6 pb-20">
          <SectionTitle icon="🎬" label="Video Gallery" />
          {/* Same grid + aspect ratio as photos so videos are the same small size */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
            {videos.map((item) => {
              const globalIdx = mediaItems.findIndex((m) => m.id === item.id);
              return (
                <div
                  key={item.id}
                  className="gallery-card relative rounded-xl overflow-hidden cursor-pointer aspect-[4/3]"
                  style={{ background: "#f0f0f0" }}
                  onClick={() => openLightbox(globalIdx)}
                >
                  <video
                    src={item.src}
                    className="w-full h-full object-cover"
                    muted
                    preload="metadata"
                  />
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center"
                    style={{ background: "rgba(0,0,0,0.28)" }}>
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-base"
                      style={{ background: "#c8973a", color: "#fff" }}
                    >
                      ▶
                    </div>
                  </div>
                  {/* Caption bar */}
                  <div className="overlay absolute bottom-0 left-0 right-0 opacity-0 px-3 py-2"
                    style={{ background: "linear-gradient(to top, rgba(0,0,0,0.78), transparent)" }}>
                    <p className="text-white text-xs leading-snug">{item.caption}</p>
                    <div className="flex gap-2 mt-1.5">
                      <ActionBtn label="▶ Play" />
                      <ActionBtn
                        label="↓"
                        onClick={(e) => {
                          e.stopPropagation();
                          downloadMedia(item.src, `viraga-relief-video-${item.id}.mp4`);
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-6 text-gray-400 text-xs tracking-widest border-t border-gray-200">
          © 2024 Viraga Foundation · Humanitarian Aid Initiative
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

export default DisasterReliefGallery;




// import GalleryPage from './GalleryPage';

// const mediaModules = import.meta.glob(
//     '../../assets/Disaster Relief & Humanitarian Aid – Extending Hope in Crisis/*',
//     { eager: true, query: '?url', import: 'default' }
// );

// const media = Object.values(mediaModules) as string[];

// const DisasterReliefGallery = () => (
//     <GalleryPage title="Disaster Relief & Humanitarian Aid – Extending Hope in Crisis" media={media} />
// );

// export default DisasterReliefGallery;
