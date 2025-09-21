'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  title: string;
}

const SlidingGallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const galleryRef = useRef<HTMLDivElement>(null);
  
  // Gallery items data
  const galleryItems: GalleryItem[] = [
    { id: 1, src: '/gallery/project_1.jpeg', alt: 'Project 1', title: 'Tile Installation' },
    { id: 2, src: '/gallery/project_2.jpeg', alt: 'Project 2', title: 'Flooring Project' },
    { id: 3, src: '/gallery/project_3_.jpeg', alt: 'Project 3', title: 'Kitchen Tiling' },
    { id: 4, src: '/gallery/project_4_.jpeg', alt: 'Project 4', title: 'Bathroom Renovation' },
    { id: 5, src: '/gallery/project_5_.jpeg', alt: 'Project 5', title: 'Living Room Flooring' },
    { id: 6, src: '/gallery/project_6_.jpeg', alt: 'Project 6', title: 'Commercial Tiling' },
    { id: 7, src: '/gallery/project_7_.jpeg', alt: 'Project 7', title: 'Tile Pattern' },
    { id: 8, src: '/gallery/project_8_.jpeg', alt: 'Project 8', title: 'Floor Installation' },
    { id: 9, src: '/gallery/project_9_.jpeg', alt: 'Project 9', title: 'Modern Design' },
    { id: 10, src: '/gallery/project_10_.jpeg', alt: 'Project 10', title: 'Tile Work' },
    { id: 11, src: '/gallery/project_11_.jpeg', alt: 'Project 11', title: 'Residential Flooring' },
    { id: 12, src: '/gallery/project_12_.jpeg', alt: 'Project 12', title: 'Custom Design' },
    { id: 13, src: '/gallery/project_13_.jpeg', alt: 'Project 13', title: 'Stone Tiles' },
    { id: 14, src: '/gallery/project_14_.jpeg', alt: 'Project 14', title: 'Elegant Finish' },
    { id: 15, src: '/gallery/project_15_.jpeg', alt: 'Project 15', title: 'Professional Work' },
    { id: 16, src: '/gallery/project_16_.jpeg', alt: 'Project 16', title: 'Quality Craftsmanship' },
    { id: 17, src: '/gallery/project_17_.jpeg', alt: 'Project 17', title: 'Premium Materials' },
    { id: 18, src: '/gallery/project_18_.jpeg', alt: 'Project 18', title: 'Beautiful Finish' },
    { id: 19, src: '/gallery/project_20_.jpeg', alt: 'Project 20', title: 'Tile Detail' },
    { id: 20, src: '/gallery/project_21_.jpeg', alt: 'Project 21', title: 'Expert Installation' },
    { id: 21, src: '/gallery/project_22_.jpeg', alt: 'Project 22', title: 'Creative Design' },
    { id: 22, src: '/gallery/project_22_1_.jpeg', alt: 'Project 22 Variation', title: 'Creative Design' },
    { id: 23, src: '/gallery/project_23_.jpeg', alt: 'Project 23', title: 'Stylish Flooring' },
    { id: 24, src: '/gallery/project_24_.jpeg', alt: 'Project 24', title: 'Modern Kitchen' },
    { id: 25, src: '/gallery/project_25_.jpeg', alt: 'Project 25', title: 'Tile Pattern' },
    { id: 26, src: '/gallery/project_26_.jpeg', alt: 'Project 26', title: 'Beautiful Tilework' },
    { id: 27, src: '/gallery/project_26_1_.jpeg', alt: 'Project 26 Variation', title: 'Beautiful Tilework' },
    { id: 28, src: '/gallery/carpet.d8a5a5003f9930fb5d8c.jpeg', alt: 'Carpet', title: 'Carpet Installation' },
    { id: 29, src: '/gallery/hardwood.485296570ffc2d9c3593.jpeg', alt: 'Hardwood', title: 'Hardwood Flooring' },
    { id: 30, src: '/gallery/laminate.1503e1a6d4c0ea1f734f.jpeg', alt: 'Laminate', title: 'Laminate Flooring' },
    { id: 31, src: '/gallery/vinyl.939e25da767409079704.png', alt: 'Vinyl', title: 'Vinyl Flooring' },
    { id: 32, src: '/gallery/floor3.b3992e0285552e5998f7.png', alt: 'Floor', title: 'Floor Design' },
    { id: 33, src: '/gallery/floor2.ac635d6bd708359d0ff0.jpeg', alt: 'Floor', title: 'Floor Installation' },
    { id: 34, src: '/gallery/floor2.ac635d6bd708359d0ff0_1_.jpeg', alt: 'Floor Variation', title: 'Floor Installation' },
    { id: 35, src: '/gallery/tile.1a263f22709719661247.jpeg', alt: 'Tile', title: 'Tile Selection' },
    { id: 36, src: '/gallery/inst.d27fe870eea8474758f8.jpeg', alt: 'Installation', title: 'Professional Installation' },
    { id: 37, src: '/gallery/repair.719090d37d27a55f24e5.jpeg', alt: 'Repair', title: 'Floor Repair' },
    { id: 38, src: '/gallery/maintain.9f7aba9c42f3e910420e.jpeg', alt: 'Maintenance', title: 'Floor Maintenance' },
    { id: 39, src: '/gallery/about.fa02b2acd2db7158f525.jpeg', alt: 'About', title: 'About Our Work' },
    { id: 40, src: '/gallery/fllor3.9bac4e3de0bda139d5da.jpeg', alt: 'Floor', title: 'Floor Project' },
    { id: 41, src: '/gallery/hq2.jpeg', alt: 'HQ Project', title: 'High Quality Work' },
    { id: 42, src: '/gallery/hq2_1_.jpeg', alt: 'HQ Project Variation', title: 'High Quality Work' },
    { id: 43, src: '/gallery/floor.438b77f5991f4e9e6dd5.png', alt: 'Floor', title: 'Floor Design' },
  ];

  // Auto slide functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, currentSlide]);

  const nextSlide = () => {
    setDirection('right');
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1));
      setIsTransitioning(false);
    }, 300);
  };

  const prevSlide = () => {
    setDirection('left');
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
      setIsTransitioning(false);
    }, 300);
  };

  const goToSlide = (index: number) => {
    if (index !== currentSlide) {
      setDirection(index > currentSlide ? 'right' : 'left');
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setIsTransitioning(false);
      }, 300);
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  // Pause autoplay on hover
  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  return (
    <div className="sliding-gallery">
      <div 
        className="gallery-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={galleryRef}
      >
        {/* Gallery Navigation Arrows */}
        <button 
          className="gallery-nav prev" 
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        
        <button 
          className="gallery-nav next" 
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>

        {/* Gallery Slides */}
        <div className="slides-container">
          <div 
            className={`slides-wrapper ${isTransitioning ? `slide-${direction}` : ''}`}
          >
            {galleryItems.map((item, index) => (
              <div 
                key={item.id} 
                className={`slide ${index === currentSlide ? 'active' : ''}`}
              >
                <div className="slide-content">
                  <Image 
                    src={item.src} 
                    alt={item.alt} 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index === 0}
                  />
                  <div className="slide-overlay">
                    <h3>{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery Indicators */}
        <div className="gallery-indicators">
          {galleryItems.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Gallery Counter */}
        <div className="gallery-counter">
          <span>{String(currentSlide + 1).padStart(2, '0')}</span>
          <span className="separator">/</span>
          <span>{String(galleryItems.length).padStart(2, '0')}</span>
        </div>

        {/* Play/Pause Button */}
        <button 
          className="play-pause-btn"
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
        >
          {isAutoPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="6" y="4" width="4" height="16"></rect>
              <rect x="14" y="4" width="4" height="16"></rect>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          )}
        </button>
      </div>

      {/* Thumbnails */}
      <div className="gallery-thumbnails">
        {galleryItems.slice(0, 10).map((item, index) => (
          <button
            key={item.id}
            className={`thumbnail ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`View slide ${index + 1}`}
          >
            <Image 
              src={item.src} 
              alt={item.alt} 
              width={80}
              height={60}
            />
          </button>
        ))}
        {galleryItems.length > 10 && (
          <div className="thumbnail more">
            +{galleryItems.length - 10}
          </div>
        )}
      </div>
    </div>
  );
};

export default SlidingGallery;