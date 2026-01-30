import React, { useState } from 'react';
import bgpic from '../../assets/bgpic.jpg'
import do1 from '../../assets/do1.png';
import do2 from '../../assets/do2.png';
import do3 from '../../assets/do3.png';
import do4 from '../../assets/do4.png';
import do5 from '../../assets/do5.png';
import do6 from '../../assets/do6.png';
import do7 from '../../assets/do7.png';
interface ImageData {
  src: string;
  alt: string;
}

const Year2023: React.FC = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const images: ImageData[] = [
    {
      src: do1,
      alt: 'Orphanage Image 1',
    },
    {
      src: do2,
      alt: 'Orphanage Image 2',
    },
    {
      src: do3,
      alt: 'Orphanage Image 3',
    },
    {
      src: do4,
      alt: 'Orphanage Image 4',
    },
    {
      src: do5,
      alt: 'Orphanage Image 5',
    },
    {
      src: do6,
      alt: 'Orphanage Image 6',
    },
     {
      src: do7,
      alt: 'Orphanage Image 7',
    },
  ];

  const openLightbox = (index: number): void => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = (): void => {
    setIsLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const changeImage = (direction: number): void => {
    let newIndex = currentImageIndex + direction;

    if (newIndex < 0) {
      newIndex = images.length - 1;
    } else if (newIndex >= images.length) {
      newIndex = 0;
    }

    setCurrentImageIndex(newIndex);
  };

  React.useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;

      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        changeImage(-1);
      } else if (e.key === 'ArrowRight') {
        changeImage(1);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isLightboxOpen, currentImageIndex]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <div
        className="relative h-[70vh] sm:h-[80vh] flex items-center justify-center overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url('${bgpic}')`,
        }}
      >
        {/* <div className="absolute inset-0 bg-gradient-to-r from-pink-400/60 via-purple-400/60 to-pink-300/60"></div> */}
        <h1 className="relative text-4xl md:text-7xl font-bold text-white tracking-tight drop-shadow-2xl">
          2023-2024
        </h1>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Food Donation Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Food Donation Drive at Ferry Orphanage –
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-8">
            {/* Main Image */}
            <div
              className="relative overflow-hidden rounded-lg cursor-pointer group shadow-lg hover:shadow-2xl transition-all duration-300"
              onClick={() => openLightbox(0)}
            >
              <img
                src={images[0].src}
                alt={images[0].alt}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
            </div>

            {/* Text Content */}
            <div className="space-y-4 text-gray-700">
              <p className="text-justify leading-relaxed">
                On <span className="font-semibold text-gray-900">May 2, 2023</span>, as part of the{' '}
                <span className="font-semibold text-gray-900">Food Donation Program</span>,{' '}
                <span className="font-semibold text-gray-900">Viraga Foundation</span> organized a{' '}
                <span className="font-semibold text-gray-900">special meal distribution drive</span>{' '}
                at an{' '}
                <span className="font-semibold text-gray-900">
                  orphanage home in Ferry, Ibrahimpatnam
                </span>
                . This initiative was conducted in{' '}
                <span className="font-semibold text-gray-900">
                  loving memory of Munagala Seetamahalakshmi
                </span>
                , grandmother of <span className="font-semibold text-gray-900">Munagala Gopinadh</span>
                .
              </p>
            </div>
          </div>

          {/* Bottom Text */}
          <div className="space-y-4 text-gray-700 mb-8">
            <p className="text-justify leading-relaxed">
              To honour her memory, the foundation{' '}
              <span className="font-semibold text-gray-900">
                prepared and served nutritious meals
              </span>{' '}
              to the students, ensuring they received wholesome and healthy food. This act of
              kindness not only provided nourishment but also{' '}
              <span className="font-semibold text-gray-900">
                symbolized love, care, and the spirit of giving
              </span>
              .
            </p>

            <p className="text-justify leading-relaxed">
              Viraga Foundation remains dedicated to its mission of{' '}
              <span className="font-semibold text-gray-900">
                supporting the needy through regular food donation initiatives
              </span>
              , spreading joy, and making a positive impact on society. Through such efforts, the
              foundation continues to{' '}
              <span className="font-semibold text-gray-900">
                uplift underprivileged communities and foster a culture of compassion and generosity
              </span>
              .
            </p>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg cursor-pointer group shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-72 object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Lightbox */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            className="absolute top-5 right-5 w-12 h-12 rounded-full border-2 border-white bg-white/20 hover:bg-white/30 text-white text-3xl flex items-center justify-center transition-all duration-300 z-50"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            ×
          </button>

          {/* Previous Button */}
          <button
            className="absolute left-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-2 border-white bg-white/20 hover:bg-white/30 text-white text-2xl flex items-center justify-center transition-all duration-300"
            onClick={(e) => {
              e.stopPropagation();
              changeImage(-1);
            }}
            aria-label="Previous image"
          >
            ‹
          </button>

          {/* Image */}
          <div
            className="relative max-w-[90%] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>

          {/* Next Button */}
          <button
            className="absolute right-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-2 border-white bg-white/20 hover:bg-white/30 text-white text-2xl flex items-center justify-center transition-all duration-300"
            onClick={(e) => {
              e.stopPropagation();
              changeImage(1);
            }}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
};

export default Year2023;