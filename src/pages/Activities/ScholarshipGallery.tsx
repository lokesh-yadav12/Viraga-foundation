// import React, { useState, useEffect, useCallback } from "react";

// import img1 from '../../assets/prize1.jpeg';
// import img2 from '../../assets/prize2.jpeg';
// import img3 from '../../assets/prize3.jpeg';
// import img4 from '../../assets/prize4.jpeg';
// import img5 from '../../assets/prize5.jpeg';
// import img6 from '../../assets/prize6.jpeg';
// import img7 from '../../assets/prize7.jpeg';
// import img8 from '../../assets/prize8.jpeg';
// import img9 from '../../assets/closing1.jpeg';
// import img10 from '../../assets/closing2.jpeg';
// import img11 from '../../assets/closing3.jpeg';
// import img12 from '../../assets/closing4.jpeg';
// import img13 from '../../assets/closing5.jpeg';
// import img14 from '../../assets/closing6.jpeg';
// import img15 from '../../assets/closing7.jpeg';
// import img16 from '../../assets/closing8.jpeg';
// import img17 from '../../assets/closing9.jpeg';
// import img18 from '../../assets/closing10.jpeg';
// import img19 from '../../assets/closing11.jpeg';
// import img20 from '../../assets/closing12.jpeg';
// import img21 from '../../assets/closing13.jpeg';
// import img22 from '../../assets/closing14.jpeg';
// type MediaItem = {
//   id: number;
//   type: "image" | "video";
//   src: string;
//   caption: string;
// };

// // ── Plug real imports into src below ──
// const mathItems: MediaItem[] = [
//   { id: 1, type: "image", src: img1, caption: "Distribution of Mathematics Handbooks to students" },
//   { id: 2, type: "image", src: img2, caption: "MTG & Viraga Foundation collaboration" },
//   { id: 3, type: "image", src: img3, caption: "Students receiving customized handbooks" },
//   { id: 4, type: "image", src: img4, caption: "Viraga Foundation cover on Math Handbook" },
// ];

// const notebookItems: MediaItem[] = [
//   { id: 1, type: "image", src: img5, caption: "1,000 customized notebooks ready for distribution" },
//   { id: 2, type: "image", src: img6, caption: "Students receiving notebooks at government school" },
//   { id: 3, type: "image", src: img7, caption: "Viraga Foundation branded 170-page notebooks" },
//   { id: 4, type: "image", src: img8, caption: "Happy students with their new study materials" },
// ];

// const jnvItems: MediaItem[] = [
//   { id: 1, type: "image", src: img9, caption: "Structured training for 5th standard students" },
//   { id: 2, type: "image", src: img10, caption: "Students preparing for JNV Entrance Exam" },
//   { id: 3, type: "image", src: img11, caption: "Problem-solving sessions at Viraga Foundation" },
//   { id: 4, type: "image", src: img12, caption: "Students appearing for JNV Exam – Dec 13, 2025" },
//   { id: 1, type: "image", src: img13, caption: "Structured training for 5th standard students" },
//   { id: 2, type: "image", src: img14, caption: "Students preparing for JNV Entrance Exam" },
//   { id: 3, type: "image", src: img15, caption: "Problem-solving sessions at Viraga Foundation" },
//   { id: 4, type: "image", src: img16, caption: "Students appearing for JNV Exam – Dec 13, 2025" },
//   { id: 1, type: "image", src: img17, caption: "Structured training for 5th standard students" },
//   { id: 2, type: "image", src: img18, caption: "Students preparing for JNV Entrance Exam" },
//   { id: 3, type: "image", src: img19, caption: "Problem-solving sessions at Viraga Foundation" },
//   { id: 4, type: "image", src: img20, caption: "Students appearing for JNV Exam – Dec 13, 2025" },
//   { id: 1, type: "image", src: img21, caption: "Structured training for 5th standard students" },
//   { id: 2, type: "image", src: img22, caption: "Students preparing for JNV Entrance Exam" },

// ];

// // ─────────────────────────────────────────────
// // Download helper
// // ─────────────────────────────────────────────
// const downloadMedia = async (src: string, filename: string) => {
//   try {
//     const res = await fetch(src, { mode: "cors" });
//     const blob = await res.blob();
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = filename;
//     a.click();
//     URL.revokeObjectURL(url);
//   } catch {
//     window.open(src, "_blank");
//   }
// };

// // ─────────────────────────────────────────────
// // Lightbox
// // ─────────────────────────────────────────────
// const Lightbox: React.FC<{
//   items: MediaItem[];
//   index: number;
//   onClose: () => void;
//   onPrev: () => void;
//   onNext: () => void;
// }> = ({ items, index, onClose, onPrev, onNext }) => {
//   const item = items[index];

//   const handleKey = useCallback(
//     (e: KeyboardEvent) => {
//       if (e.key === "Escape") onClose();
//       if (e.key === "ArrowLeft") onPrev();
//       if (e.key === "ArrowRight") onNext();
//     },
//     [onClose, onPrev, onNext]
//   );

//   useEffect(() => {
//     window.addEventListener("keydown", handleKey);
//     document.body.style.overflow = "hidden";
//     return () => {
//       window.removeEventListener("keydown", handleKey);
//       document.body.style.overflow = "";
//     };
//   }, [handleKey]);

//   return (
//     <div
//       className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
//       onClick={onClose}
//     >
//       <div
//         className="relative flex flex-col items-center max-w-5xl w-full mx-4"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="flex items-center justify-between w-full mb-3 px-1">
//           <span className="text-amber-400 font-semibold text-sm tracking-widest uppercase">
//             {index + 1} / {items.length}
//           </span>
//           <div className="flex gap-3">
//             <button
//               onClick={() => downloadMedia(item.src, `viraga-edu-${item.id}`)}
//               className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-400 hover:bg-amber-300 text-stone-900 text-xs font-bold transition"
//             >
//               ↓ Download
//             </button>
//             <button
//               onClick={onClose}
//               className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white text-lg transition"
//             >
//               ✕
//             </button>
//           </div>
//         </div>

//         <div className="relative w-full bg-stone-900 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center min-h-[280px]">
//           {item.type === "image" ? (
//             <img src={item.src} alt={item.caption} className="max-h-[72vh] w-full object-contain" />
//           ) : (
//             <video src={item.src} controls autoPlay className="max-h-[72vh] w-full object-contain" />
//           )}
//           <button
//             onClick={onPrev}
//             className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-amber-400 hover:text-stone-900 text-white flex items-center justify-center text-xl transition"
//           >‹</button>
//           <button
//             onClick={onNext}
//             className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-amber-400 hover:text-stone-900 text-white flex items-center justify-center text-xl transition"
//           >›</button>
//         </div>

//         {/* <p className="mt-3 text-center text-stone-300 text-sm italic px-4">{item.caption}</p> */}
//       </div>
//     </div>
//   );
// };

// // ─────────────────────────────────────────────
// // Reusable Gallery Grid
// // ─────────────────────────────────────────────
// const GalleryGrid: React.FC<{
//   items: MediaItem[];
//   onOpen: (i: number) => void;
//   prefix: string;
// }> = ({ items, onOpen, prefix }) => (
//   <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
//     {items.map((item, idx) => (
//       <div
//         key={item.id}
//         className="gallery-card relative rounded-xl overflow-hidden cursor-pointer aspect-[4/3]"
//         style={{ background: "#f0f0f0" }}
//         onClick={() => onOpen(idx)}
//       >
//         {item.type === "image" ? (
//           <img src={item.src} alt={item.caption} className="w-full h-full object-cover" />
//         ) : (
//           <>
//             <video src={item.src} className="w-full h-full object-cover" muted preload="metadata" />
//             <div className="absolute inset-0 flex items-center justify-center" style={{ background: "rgba(0,0,0,0.28)" }}>
//               <div className="w-10 h-10 rounded-full flex items-center justify-center text-base" style={{ background: "#c8973a", color: "#fff" }}>▶</div>
//             </div>
//           </>
//         )}
//         <div
//           className="overlay absolute inset-0 opacity-0 flex flex-col justify-end p-3"
//           style={{ background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 60%)" }}
//         >
//           {/* <p className="text-white text-xs leading-snug">{item.caption}</p> */}
//           <div className="flex gap-2 mt-2">
//             <ActionBtn label={item.type === "video" ? "▶ Play" : "⤢ Zoom"} />
//             <ActionBtn
//               label="↓"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 downloadMedia(item.src, `${prefix}-${item.id}${item.type === "video" ? ".mp4" : ".jpg"}`);
//               }}
//             />
//           </div>
//         </div>
//       </div>
//     ))}
//   </div>
// );

// // ─────────────────────────────────────────────
// // Main Component
// // ─────────────────────────────────────────────
// const EducationInitiativesGallery: React.FC = () => {
//   const [mathLb, setMathLb] = useState<number | null>(null);
//   const [notebookLb, setNotebookLb] = useState<number | null>(null);
//   const [jnvLb, setJnvLb] = useState<number | null>(null);

//   const prev = (items: MediaItem[], set: React.Dispatch<React.SetStateAction<number | null>>) => () =>
//     set((i) => (i !== null ? (i - 1 + items.length) % items.length : 0));
//   const next = (items: MediaItem[], set: React.Dispatch<React.SetStateAction<number | null>>) => () =>
//     set((i) => (i !== null ? (i + 1) % items.length : 0));

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Jost:wght@300;400;500&display=swap');

//         .gallery-card {
//           transition: transform 0.35s cubic-bezier(.22,.68,0,1.3), box-shadow 0.3s ease;
//         }
//         .gallery-card:hover {
//           transform: translateY(-6px) scale(1.02);
//           box-shadow: 0 20px 48px rgba(0,0,0,0.15);
//         }
//         .gallery-card:hover .overlay { opacity: 1; }
//         .overlay { transition: opacity 0.3s ease; }
//         .hero-divider { background: linear-gradient(90deg, transparent, #c8973a, transparent); }
//         .soft-divider { background: linear-gradient(90deg, transparent, #e0e0e0, transparent); }
//       `}</style>

//       <div
//         className="min-h-screen pt-16 w-full"
//         style={{ background: "#ffffff", fontFamily: "'Jost', sans-serif", color: "#1c1c1c" }}
//       >
//         {/* ── Page Header ── */}
//         <div className="max-w-5xl mx-auto px-6 pt-16 pb-2">
//           <div className="flex sm:flex-row flex-col items-center gap-3 mb-5">
//             <span
//               className="text-[10px] tracking-[0.3em] uppercase font-medium px-3 py-1 rounded-full border"
//               style={{ color: "#c8973a", borderColor: "#c8973a55", background: "#c8973a11" }}
//             >
//               Viraga Foundation
//             </span>
//             <span className="text-gray-400 text-sm font-semibold tracking-widest">Education Initiatives</span>
//           </div>
//           <h1
//             style={{
//               fontFamily: "'Cormorant Garamond', serif",
//               fontSize: "clamp(1.7rem, 4.5vw, 2.8rem)",
//               fontWeight: 700,
//               color: "#1a1a1a",
//               letterSpacing: "-0.01em",
//               lineHeight: 1.2,
//             }}
//           >
//             Scholarship Assistance &amp; Guidance
//           </h1>
//           <p
//             className="mt-1 mb-6"
//             style={{
//               fontFamily: "'Cormorant Garamond', serif",
//               fontSize: "clamp(1rem, 2.2vw, 1.3rem)",
//               fontStyle: "italic",
//               color: "#c8973a",
//             }}
//           >
//             Empowering Dreams Through Education
//           </p>
//           <div className="hero-divider h-px w-full" />
//         </div>

//         {/* ════════════════════════════════════════
//             SECTION 1 — MATHEMATICS HANDBOOKS
//         ════════════════════════════════════════ */}
//         <section className="max-w-5xl mx-auto px-6 pt-14 pb-4">
//           <EventBadge label="Distribution Drive" />

//           <h2
//             style={{
//               fontFamily: "'Cormorant Garamond', serif",
//               fontSize: "clamp(1.5rem, 3.5vw, 2.3rem)",
//               fontWeight: 600,
//               color: "#1a1a1a",
//               lineHeight: 1.25,
//             }}
//           >
//             Distribution of Mathematics Handbooks
//           </h2>
//           <p
//             className="mt-1 mb-6"
//             style={{
//               fontFamily: "'Cormorant Garamond', serif",
//               fontSize: "clamp(0.95rem, 2vw, 1.25rem)",
//               fontStyle: "italic",
//               color: "#c8973a",
//             }}
//           >
//             Supporting Needy Students in Government Schools
//           </p>
//           <div className="hero-divider h-px w-full mb-8" />

//           <div className="space-y-5 text-gray-600 leading-relaxed" style={{ fontSize: "1.05rem" }}>
//             <p>
//               As part of its commitment to promoting education, Viraga Foundation, in collaboration
//               with{" "}
//               <strong className="text-gray-800">MTG Learning Media Private Limited</strong>{" "}
//               (content provided by MTG), is distributing{" "}
//               <span className="font-semibold text-amber-600">100 Mathematics Handbooks</span> to
//               needy students studying in government schools.
//             </p>
//             <p>
//               This specially designed handbook contains all essential mathematical formulas from{" "}
//               <strong className="text-gray-800">Class VI to Class XII</strong>, serving as a quick
//               reference guide to help students strengthen their understanding of the subject and
//               enhance their academic performance. Each book has been customized with a{" "}
//               <em>VIRAGA Foundation cover</em>, making it a personalized resource for students.
//             </p>

//             <div
//               className="rounded-xl p-5 space-y-2"
//               style={{ background: "#fdf8f0", border: "1px solid #e8d9b8" }}
//             >
//               <p className="text-gray-700 font-medium mb-3" style={{ fontSize: "0.95rem" }}>
//                 By providing these handbooks, the foundation aims to:
//               </p>
//               {[
//                 "Support students in their academic journey",
//                 "Boost their confidence in mathematics",
//                 "Help them prepare for competitive exams and future studies",
//               ].map((goal) => (
//                 <div key={goal} className="flex items-start gap-2 text-gray-600" style={{ fontSize: "0.95rem" }}>
//                   <span style={{ color: "#c8973a", marginTop: "1px" }}>✔</span>
//                   <span>{goal}</span>
//                 </div>
//               ))}
//             </div>

//             <p className="border-l-2 pl-4 italic" style={{ borderColor: "#c8973a", color: "#5a5a5a" }}>
//               Through such efforts, Viraga Foundation, in partnership with MTG Learning Media
//               Private Limited, continues to inspire, uplift, and make education accessible, helping
//               students shape a brighter and more promising future.
//             </p>
//           </div>
//         </section>

//         <section className="max-w-6xl mx-auto px-6 pt-6 pb-14">
//           <SectionTitle icon="📚" label="Handbook Distribution – Photos" />
//           <GalleryGrid items={mathItems} onOpen={(i) => setMathLb(i)} prefix="viraga-math" />
//         </section>

//         <div className="soft-divider h-px max-w-5xl mx-auto" />

//         {/* ════════════════════════════════════════
//             SECTION 2 — CUSTOMIZED NOTEBOOKS
//         ════════════════════════════════════════ */}
//         <section className="max-w-5xl mx-auto px-6 pt-14 pb-4">
//           <EventBadge label="Education Support" />

//           <h2
//             style={{
//               fontFamily: "'Cormorant Garamond', serif",
//               fontSize: "clamp(1.5rem, 3.5vw, 2.3rem)",
//               fontWeight: 600,
//               color: "#1a1a1a",
//               lineHeight: 1.25,
//             }}
//           >
//             Distribution of Customized Notebooks
//           </h2>
//           <p
//             className="mt-1 mb-6"
//             style={{
//               fontFamily: "'Cormorant Garamond', serif",
//               fontSize: "clamp(0.95rem, 2vw, 1.25rem)",
//               fontStyle: "italic",
//               color: "#c8973a",
//             }}
//           >
//             to Needy Students
//           </p>
//           <div className="hero-divider h-px w-full mb-8" />

//           <div className="space-y-5 text-gray-600 leading-relaxed" style={{ fontSize: "1.05rem" }}>
//             <p>
//               As part of its commitment to supporting education, Viraga Foundation has ordered{" "}
//               <span className="font-semibold text-amber-600">1,000 customized 170-page notebooks</span>{" "}
//               with a Viraga Foundation cover for distribution to needy students in government schools.
//             </p>
//             <p>
//               This initiative aims to provide essential study materials, helping students focus on
//               their education without basic resource constraints. By ensuring access to these
//               notebooks, Viraga Foundation continues to empower young learners and promote equal
//               learning opportunities.
//             </p>
//             <p className="border-l-2 pl-4 italic" style={{ borderColor: "#c8973a", color: "#5a5a5a" }}>
//               Through such efforts, the foundation remains dedicated to uplifting underprivileged
//               students and fostering a brighter future through education.
//             </p>
//           </div>

//           <div className="grid grid-cols-3 gap-4 mt-10">
//             {[
//               { value: "1,000", label: "Notebooks Ordered" },
//               { value: "170", label: "Pages Each" },
//               { value: "🎓", label: "Govt. Schools" },
//             ].map((s) => (
//               <div
//                 key={s.label}
//                 className="rounded-xl p-4 text-center"
//                 style={{ background: "#f9f9f9", border: "1px solid #e5e5e5" }}
//               >
//                 <div
//                   style={{
//                     fontFamily: "'Cormorant Garamond', serif",
//                     fontSize: s.value.length > 4 ? "1.6rem" : "2.2rem",
//                     color: "#c8973a",
//                     fontWeight: 600,
//                   }}
//                 >
//                   {s.value}
//                 </div>
//                 <div className="text-gray-400 text-xs tracking-wider mt-0.5 uppercase">{s.label}</div>
//               </div>
//             ))}
//           </div>
//         </section>

//         <section className="max-w-6xl mx-auto px-6 pt-6 pb-14">
//           <SectionTitle icon="📓" label="Notebook Distribution – Photos" />
//           <GalleryGrid items={notebookItems} onOpen={(i) => setNotebookLb(i)} prefix="viraga-notebook" />
//         </section>

//         <div className="soft-divider h-px max-w-5xl mx-auto" />

//         {/* ════════════════════════════════════════
//             SECTION 3 — VIBRANT FUTURES / JNV
//         ════════════════════════════════════════ */}
//         <section className="max-w-5xl mx-auto px-6 pt-14 pb-4">
//           <EventBadge label="Flagship Programme" />

//           <h2
//             style={{
//               fontFamily: "'Cormorant Garamond', serif",
//               fontSize: "clamp(1.5rem, 3.5vw, 2.3rem)",
//               fontWeight: 600,
//               color: "#1a1a1a",
//               lineHeight: 1.25,
//             }}
//           >
//             Vibrant Futures – Transforming Lives
//           </h2>
//           <p
//             className="mt-1 mb-6"
//             style={{
//               fontFamily: "'Cormorant Garamond', serif",
//               fontSize: "clamp(0.95rem, 2vw, 1.25rem)",
//               fontStyle: "italic",
//               color: "#c8973a",
//             }}
//           >
//             JNV Entrance Examination Preparation Programme
//           </p>
//           <div className="hero-divider h-px w-full mb-8" />

//           <div className="space-y-5 text-gray-600 leading-relaxed" style={{ fontSize: "1.05rem" }}>
//             <p>
//               As part of its flagship educational initiative,{" "}
//               <em>Scholarship Assistance &amp; Guidance – Empowering Dreams Through Education</em>,
//               VIRAGA FOUNDATION launched the{" "}
//               <strong className="text-gray-800">"Vibrant Futures – Transforming Lives"</strong>{" "}
//               programme to create equal learning opportunities for children from government primary
//               schools.
//             </p>
//             <p>
//               Under this programme, a structured and focused training initiative was conducted for{" "}
//               <span className="font-semibold text-amber-600">5th standard students</span> studying
//               in Government Primary Schools, aimed at preparing them for the highly competitive{" "}
//               <strong className="text-gray-800">
//                 Jawahar Navodaya Vidyalaya (JNV) Entrance Examination
//               </strong>
//               .
//             </p>
//             <p>
//               The programme was designed to strengthen core academic foundations, enhance
//               problem-solving skills, and build confidence among students who otherwise have limited
//               access to quality coaching and guidance. Special emphasis was placed on nurturing
//               talent, discipline, and exam-oriented preparation in a supportive learning environment.
//             </p>

//             <div
//               className="rounded-xl p-5 flex items-start gap-4"
//               style={{ background: "#fdf8f0", border: "1px solid #e8d9b8" }}
//             >
//               <span style={{ fontSize: "1.8rem", lineHeight: 1 }}>🏆</span>
//               <div>
//                 <p className="font-semibold text-gray-800" style={{ fontSize: "0.95rem" }}>
//                   Examination Milestone
//                 </p>
//                 <p className="text-gray-600 mt-1" style={{ fontSize: "0.92rem" }}>
//                   The training culminated in students appearing for the JNV Entrance Examination
//                   conducted on{" "}
//                   <span style={{ color: "#c8973a" }} className="font-semibold">
//                     13 December 2025
//                   </span>
//                   , marking an important milestone in their educational journey.
//                 </p>
//               </div>
//             </div>

//             <p className="border-l-2 pl-4 italic" style={{ borderColor: "#c8973a", color: "#5a5a5a" }}>
//               Through the Vibrant Futures – Transforming Lives initiative, VIRAGA FOUNDATION
//               continues its commitment to empowering young minds, bridging educational disparities,
//               and enabling deserving children to realize their full potential through education.
//             </p>
//           </div>
//         </section>

//         <section className="max-w-6xl mx-auto px-6 pt-6 pb-20">
//           <SectionTitle icon="🏫" label="Vibrant Futures – Photos" />
//           <GalleryGrid items={jnvItems} onOpen={(i) => setJnvLb(i)} prefix="viraga-jnv" />
//         </section>

//         {/* Footer */}
//         <footer className="text-center py-6 text-gray-400 text-xs tracking-widest border-t border-gray-200">
//           © 2025 Viraga Foundation · Scholarship Assistance &amp; Guidance Programme
//         </footer>
//       </div>

//       {/* Lightboxes — scoped to each section */}
//       {mathLb !== null && (
//         <Lightbox items={mathItems} index={mathLb}
//           onClose={() => setMathLb(null)}
//           onPrev={prev(mathItems, setMathLb)}
//           onNext={next(mathItems, setMathLb)}
//         />
//       )}
//       {notebookLb !== null && (
//         <Lightbox items={notebookItems} index={notebookLb}
//           onClose={() => setNotebookLb(null)}
//           onPrev={prev(notebookItems, setNotebookLb)}
//           onNext={next(notebookItems, setNotebookLb)}
//         />
//       )}
//       {jnvLb !== null && (
//         <Lightbox items={jnvItems} index={jnvLb}
//           onClose={() => setJnvLb(null)}
//           onPrev={prev(jnvItems, setJnvLb)}
//           onNext={next(jnvItems, setJnvLb)}
//         />
//       )}
//     </>
//   );
// };

// // ─── Small helpers ────────────────────────────
// const EventBadge: React.FC<{ label: string }> = ({ label }) => (
//   <span
//     className="inline-block text-[10px] tracking-[0.25em] uppercase font-medium px-3 py-1 rounded-full border mb-3"
//     style={{ color: "#c8973a", borderColor: "#c8973a55", background: "#c8973a11" }}
//   >
//     {label}
//   </span>
// );

// const SectionTitle: React.FC<{ icon: string; label: string }> = ({ icon, label }) => (
//   <div className="flex items-center gap-3">
//     <span className="text-xl">{icon}</span>
//     <h3
//       style={{
//         fontFamily: "'Cormorant Garamond', serif",
//         fontSize: "1.55rem",
//         color: "#1a1a1a",
//         fontWeight: 600,
//       }}
//     >
//       {label}
//     </h3>
//     <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, #c8973a44, transparent)" }} />
//   </div>
// );

// const ActionBtn: React.FC<{
//   label: string;
//   onClick?: (e: React.MouseEvent) => void;
// }> = ({ label, onClick }) => (
//   <button
//     onClick={onClick}
//     className="text-[11px] font-medium px-2 py-0.5 rounded-full transition hover:opacity-80"
//     style={{ background: "#c8973a", color: "#fff" }}
//   >
//     {label}
//   </button>
// );

// export default EducationInitiativesGallery;











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
// import img17 from '../../assets/closing9.jpeg';
// import img18 from '../../assets/closing10.jpeg';
// import img19 from '../../assets/closing11.jpeg';
// import img20 from '../../assets/closing12.jpeg';
// import img21 from '../../assets/closing13.jpeg';
// import img22 from '../../assets/closing14.jpeg';

// ── BLOCK 4: replace paths with your actual image paths ──
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
// import b4img21 from '../../assets/closing21.jpeg';
// import b4img22 from '../../assets/closing22.jpeg';
// import b4img23 from '../../assets/closing23.jpeg';
// import b4img24 from '../../assets/closing24.jpeg';
// import b4img25 from '../../assets/closing25.jpeg';

// ── BLOCK 5 ──
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

// ── BLOCK 6 ──
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

// ── BLOCK 7 ──
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
  // { id: 9,  type: "image", src: img17, caption: "Structured training for 5th standard students" },
  // { id: 10, type: "image", src: img18, caption: "Students preparing for JNV Entrance Exam" },
  // { id: 11, type: "image", src: img19, caption: "Problem-solving sessions at Viraga Foundation" },
  // { id: 12, type: "image", src: img20, caption: "Students appearing for JNV Exam – Dec 13, 2025" },
  // { id: 13, type: "image", src: img21, caption: "Structured training for 5th standard students" },
  // { id: 14, type: "image", src: img22, caption: "Students preparing for JNV Entrance Exam" },
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
          <span className="text-amber-400 font-semibold text-sm tracking-widest uppercase">
            {index + 1} / {items.length}
          </span>
          <div className="flex gap-3">
            <button
              onClick={() => downloadMedia(item.src, `viraga-edu-${item.id}`)}
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
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Jost:wght@300;400;500&display=swap');
        .gallery-card { transition: transform 0.35s cubic-bezier(.22,.68,0,1.3), box-shadow 0.3s ease; }
        .gallery-card:hover { transform: translateY(-6px) scale(1.02); box-shadow: 0 20px 48px rgba(0,0,0,0.15); }
        .gallery-card:hover .overlay { opacity: 1; }
        .overlay { transition: opacity 0.3s ease; }
        .hero-divider { background: linear-gradient(90deg, transparent, #c8973a, transparent); }
        .soft-divider { background: linear-gradient(90deg, transparent, #e0e0e0, transparent); }
      `}</style>

      <div className="min-h-screen pt-16 w-full" style={{ background: "#ffffff", fontFamily: "'Jost', sans-serif", color: "#1c1c1c" }}>

        {/* ── Page Header ── */}
        <div className="max-w-6xl mx-auto px-6 pt-16 pb-2">
          <div className="flex sm:flex-row flex-col items-center gap-3 mb-5">
            <span className="text-[16px] tracking-[0.3em] uppercase font-medium px-3 py-1 rounded-full border" style={{ color: "orange-700", borderColor: "orange-800", background: "" }}>
              Viraga Foundation
            </span>
            <span className="text-gray-400 text-md font-semibold tracking-widest">Education Initiatives</span>
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.7rem, 4.5vw, 2.8rem)", fontWeight: 700, color: "#1a1a1a", letterSpacing: "-0.01em", lineHeight: 1.2 }}>
            Scholarship Assistance &amp; Guidance
          </h1>
          <p className="mt-1 mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1rem, 2.2vw, 1.3rem)", fontStyle: "normal", color: "orange-500" }}>
            Empowering Dreams Through Education
          </p>
          <div className="hero-divider h-px w-full" />
        </div>

        {/* ════ SECTION 1 — MATHEMATICS HANDBOOKS ════ */}
        <section className="max-w-6xl mx-auto px-6 pt-14 pb-4">
          <EventBadge label="Distribution Drive" />
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.5rem, 3.5vw, 2.3rem)", fontWeight: 600, color: "#1a1a1a", lineHeight: 1.25 }}>
            Distribution of Mathematics Handbooks
          </h2>
          <p className="mt-1 mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(0.95rem, 2vw, 1.25rem)", fontStyle: "normal", color: "orange-700" }}>
            Supporting Needy Students in Government Schools
          </p>
          <div className="hero-divider h-px w-full mb-8" />
          <div className="space-y-5 text-gray-600 leading-relaxed" style={{ fontSize: "1.05rem" }}>
            <p>
              As part of its commitment to promoting education, Viraga Foundation, in collaboration with{" "}
              <strong className="text-gray-800">MTG Learning Media Private Limited</strong> (content provided by MTG), is distributing{" "}
              <span className="font-semibold text-amber-500">100 Mathematics Handbooks</span> to needy students studying in government schools.
            </p>
            <p>
              This specially designed handbook contains all essential mathematical formulas from{" "}
              <strong className="text-gray-800">Class VI to Class XII</strong>, serving as a quick reference guide to help students strengthen
              their understanding of the subject and enhance their academic performance. Each book has been customized with a{" "}
              <em>VIRAGA Foundation cover</em>, making it a personalized resource for students.
            </p>
            <div className="rounded-xl p-5 space-y-2" style={{ background: "#fdf8f0", border: "1px solid #e8d9b8" }}>
              <p className="text-gray-700 font-medium mb-3" style={{ fontSize: "0.95rem" }}>By providing these handbooks, the foundation aims to:</p>
              {["Support students in their academic journey", "Boost their confidence in mathematics", "Help them prepare for competitive exams and future studies"].map((goal) => (
                <div key={goal} className="flex items-start gap-2 text-gray-600" style={{ fontSize: "0.95rem" }}>
                  <span style={{ color: "#c8973a", marginTop: "1px" }}>✔</span><span>{goal}</span>
                </div>
              ))}
            </div>
            <p className="border-l-2 pl-4 italic" style={{ borderColor: "#c8973a", color: "#5a5a5a" }}>
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
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.5rem, 3.5vw, 2.3rem)", fontWeight: 600, color: "#1a1a1a", lineHeight: 1.25 }}>
            Distribution of Customized Notebooks
          </h2>
          <p className="mt-1 mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(0.95rem, 2vw, 1.25rem)", fontStyle: "normal", color: "orange-700" }}>
            to Needy Students
          </p>
          <div className="hero-divider h-px w-full mb-8" />
          <div className="space-y-5 text-gray-600 leading-relaxed" style={{ fontSize: "1.05rem" }}>
            <p>
              As part of its commitment to supporting education, Viraga Foundation has ordered{" "}
              <span className="font-semibold text-amber-600">1,000 customized 170-page notebooks</span>{" "}
              with a Viraga Foundation cover for distribution to needy students in government schools.
            </p>
            <p>
              This initiative aims to provide essential study materials, helping students focus on their education without basic resource
              constraints. By ensuring access to these notebooks, Viraga Foundation continues to empower young learners and promote equal
              learning opportunities.
            </p>
            <p className="border-l-2 pl-4 italic" style={{ borderColor: "#c8973a", color: "#5a5a5a" }}>
              Through such efforts, the foundation remains dedicated to uplifting underprivileged students and fostering a brighter future through education.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-10">
            {[{ value: "1,000", label: "Notebooks Ordered" }, { value: "170", label: "Pages Each" }, { value: "🎓", label: "Govt. Schools" }].map((s) => (
              <div key={s.label} className="rounded-xl p-4 text-center" style={{ background: "#f9f9f9", border: "1px solid #e5e5e5" }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: s.value.length > 4 ? "1.6rem" : "2.2rem", color: "#c8973a", fontWeight: 600 }}>{s.value}</div>
                <div className="text-gray-400 text-xs tracking-wider mt-0.5 uppercase">{s.label}</div>
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
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.5rem, 3.5vw, 2.3rem)", fontWeight: 600, color: "#1a1a1a", lineHeight: 1.25 }}>
            Vibrant Futures – Transforming Lives
          </h2>
          <p className="mt-1 mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(0.95rem, 2vw, 1.25rem)", fontStyle: "italic", color: "#c8973a" }}>
            JNV Entrance Examination Preparation Programme
          </p>
          <div className="hero-divider h-px w-full mb-8" />
          <div className="space-y-5 text-gray-600 leading-relaxed" style={{ fontSize: "1.05rem" }}>
            <p>
              As part of its flagship educational initiative,{" "}
              <em>Scholarship Assistance &amp; Guidance – Empowering Dreams Through Education</em>, VIRAGA FOUNDATION launched the{" "}
              <strong className="text-gray-800">"Vibrant Futures – Transforming Lives"</strong> programme to create equal learning opportunities
              for children from government primary schools.
            </p>
            <p>
              Under this programme, a structured and focused training initiative was conducted for{" "}
              <span className="font-semibold text-amber-600">5th standard students</span> studying in Government Primary Schools, aimed at
              preparing them for the highly competitive{" "}
              <strong className="text-gray-800">Jawahar Navodaya Vidyalaya (JNV) Entrance Examination</strong>.
            </p>
            <p>
              The programme was designed to strengthen core academic foundations, enhance problem-solving skills, and build confidence among
              students who otherwise have limited access to quality coaching and guidance.
            </p>
            <div className="rounded-xl p-5 flex items-start gap-4" style={{ background: "#fdf8f0", border: "1px solid #e8d9b8" }}>
              <span style={{ fontSize: "1.8rem", lineHeight: 1 }}>🏆</span>
              <div>
                <p className="font-semibold text-gray-800" style={{ fontSize: "0.95rem" }}>Examination Milestone</p>
                <p className="text-gray-600 mt-1" style={{ fontSize: "0.92rem" }}>
                  The training culminated in students appearing for the JNV Entrance Examination conducted on{" "}
                  <span style={{ color: "#c8973a" }} className="font-semibold">13 December 2025</span>, marking an important milestone in their educational journey.
                </p>
              </div>
            </div>
            <p className="border-l-2 pl-4 italic" style={{ borderColor: "#c8973a", color: "#5a5a5a" }}>
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

       

        {/* ════ SECTION 6 — update label below ════ */}
        {/* <section className="max-w-6xl mx-auto px-6 pt-14 pb-14">
          <SectionTitle icon="🖼️" label="V F T L Registration, Class & Exam Pics" />
          <GalleryGrid items={block6Items} onOpen={(i) => setBlock6Lb(i)} prefix="viraga-block6" />
        </section>
        
        <div className="soft-divider h-px max-w-5xl mx-auto" /> */}

             {/* ════ SECTION 5 — update label below ════ */}
        {/* <section className="max-w-6xl mx-auto px-6 pt-14 pb-14">
          <SectionTitle icon="🖼️" label="V F T L Guest Lectures" />
          <GalleryGrid items={block5Items} onOpen={(i) => setBlock5Lb(i)} prefix="viraga-block5" />
        </section>

        <div className="soft-divider h-px max-w-5xl mx-auto" /> */}

        {/* ════ SECTION 4 — update label below ════ */}
        {/* <section className="max-w-6xl mx-auto px-6 pt-14 pb-14">
          <SectionTitle icon="🖼️" label="V F T L Closing Ceremony" />
          <GalleryGrid items={block4Items} onOpen={(i) => setBlock4Lb(i)} prefix="viraga-block4" />
        </section> */}

        <div className="soft-divider h-px max-w-5xl mx-auto" />

        {/* ════ SECTION 7 — update label below ════ */}
        {/* <section className="max-w-6xl mx-auto px-6 pt-14 pb-20">
          <SectionTitle icon="🖼️" label="V F T L Food Donation" />
          <GalleryGrid items={block7Items} onOpen={(i) => setBlock7Lb(i)} prefix="viraga-block7" />
        </section> */}

        {/* Footer */}
        <footer className="text-center py-6 text-gray-400 text-xs tracking-widest border-t border-gray-200">
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
const EventBadge: React.FC<{ label: string }> = ({ label }) => (
  <span className="inline-block text-[16px] tracking-[0.25em] uppercase font-medium px-3 py-1 rounded-full border mb-3"
    style={{ color: "orange-800", borderColor: "orange-600", background: "orange-400" }}>
    {label}
  </span>
);

const SectionTitle: React.FC<{ icon: string; label: string }> = ({ icon, label }) => (
  <div className="flex items-center gap-3">
    <span className="text-xl">{icon}</span>
    <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.55rem", color: "#1a1a1a", fontWeight: 600 }}>
      {label}
    </h3>
    <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, #c8973a44, transparent)" }} />
  </div>
);

const ActionBtn: React.FC<{ label: string; onClick?: (e: React.MouseEvent) => void }> = ({ label, onClick }) => (
  <button onClick={onClick}
    className="text-[11px] font-medium px-2 py-0.5 rounded-full transition hover:opacity-80"
    style={{ background: "orange-500", color: "#fff" }}>
    {label}
  </button>
);

export default EducationInitiativesGallery;