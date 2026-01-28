import React, { useState, useEffect } from 'react';

interface MediaItem {
  id: number;
  type: 'image' | 'video';
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

const ImageGallery: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Sample data - replace with your actual images and videos later
  const mediaItems: MediaItem[] = [
    {
      id: 1,
      type: 'image',
      src: 'https://via.placeholder.com/1920x600/8B5CF6/FFFFFF?text=2024-2025',
      alt: 'Lavender field with 2024-2025 text',
      title: '2024-2025',
    },
    {
      id: 2,
      type: 'video',
      src: 'https://www.w3schools.com/html/mov_bbb.mp4',
      alt: 'Food Distribution Provisions',
      title: 'Food Distribution Provisions Cloths - 15-09-2024',
      description: 'Flood Relief Assistance – Distribution of Provisions, Clothing & Vegetables by Viraga Foundation',
    },
    {
      id: 3,
      type: 'image',
      src: 'https://via.placeholder.com/800x600/6366F1/FFFFFF?text=Mathematics+Handbook',
      alt: 'Distribution of Mathematics Handbooks',
      title: 'Distribution of Mathematics Handbooks',
      description: 'Supporting Needy Students in Government Schools',
    },
    {
      id: 4,
      type: 'image',
      src: 'https://via.placeholder.com/800x600/8B5CF6/FFFFFF?text=Community+Event',
      alt: 'Community event photos',
      title: 'Community Outreach',
    },
    {
      id: 5,
      type: 'image',
      src: 'https://via.placeholder.com/800x600/A855F7/FFFFFF?text=Relief+Distribution',
      alt: 'Relief distribution event',
      title: 'Relief Distribution',
    },
  ];

  const openFullscreen = (index: number) => {
    setSelectedIndex(index);
  };

  const closeFullscreen = () => {
    setSelectedIndex(null);
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % mediaItems.length);
    }
  };

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        selectedIndex === 0 ? mediaItems.length - 1 : selectedIndex - 1
      );
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;

      switch (e.key) {
        case 'Escape':
          closeFullscreen();
          break;
        case 'ArrowRight':
          goToNext();
          break;
        case 'ArrowLeft':
          goToPrevious();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  // Prevent body scroll when fullscreen is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedIndex]);

  return (
    <div className="w-full min-h-screen bg-gray-50 p-4 md:p-8">
      {/* Header */}
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-2">
          Viraga Foundation Gallery
        </h1>
        <p className="text-lg md:text-xl text-gray-500">2024-2025</p>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {mediaItems.map((item, index) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white aspect-[4/3]"
            onClick={() => openFullscreen(index)}
          >
            {item.type === 'image' ? (
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="relative w-full h-full">
                <video src={item.src} className="w-full h-full object-cover pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-black/60 rounded-full flex items-center justify-center group-hover:bg-black/80 transition-colors">
                  <svg
                    className="w-10 h-10 text-white ml-1"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            )}
            
            {/* Overlay with title */}
            {item.title && (
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-semibold text-sm md:text-base">
                  {item.title}
                </h3>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Fullscreen Viewer */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center animate-in fade-in duration-300">
          {/* Close Button */}
          <button
            onClick={closeFullscreen}
            aria-label="Close"
            className="absolute top-4 right-4 md:top-8 md:right-8 w-12 h-12 md:w-14 md:h-14 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <svg
              className="w-8 h-8 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            aria-label="Previous"
            className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <svg
              className="w-8 h-8 md:w-10 md:h-10 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Media Container */}
          <div className="flex flex-col items-center gap-4 md:gap-6 max-w-[90%] max-h-[90vh] px-4">
            {mediaItems[selectedIndex].type === 'image' ? (
              <img
                src={mediaItems[selectedIndex].src}
                alt={mediaItems[selectedIndex].alt}
                className="max-w-full max-h-[70vh] md:max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
            ) : (
              <video
                src={mediaItems[selectedIndex].src}
                controls
                autoPlay
                className="max-w-full max-h-[70vh] md:max-h-[80vh] rounded-lg shadow-2xl"
              />
            )}

            {/* Media Info */}
            {mediaItems[selectedIndex].title && (
              <div className="text-center text-white max-w-3xl px-4">
                <h2 className="text-xl md:text-2xl font-semibold mb-2">
                  {mediaItems[selectedIndex].title}
                </h2>
                {mediaItems[selectedIndex].description && (
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                    {mediaItems[selectedIndex].description}
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Next Button */}
          <button
            onClick={goToNext}
            aria-label="Next"
            className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors z-10 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <svg
              className="w-8 h-8 md:w-10 md:h-10 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-medium">
            {selectedIndex + 1} / {mediaItems.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;