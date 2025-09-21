'use client';

import { useState, useEffect } from 'react';

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  duration?: string;
  views?: string;
  date?: string;
}

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const videos: Video[] = [
    {
      id: 'sYQDZcauZ6c',
      title: 'Tile Installation Process',
      thumbnail: '/gallery/project_1.jpeg',
      duration: '1:25',
      views: '12K views',
      date: '2 weeks ago'
    },
    {
      id: 'mTxqa4PU6sc',
      title: 'Bathroom Renovation',
      thumbnail: '/gallery/project_4_.jpeg',
      duration: '2:10',
      views: '8.5K views',
      date: '1 month ago'
    },
    {
      id: 'SBc5pfSW9fA',
      title: 'Kitchen Backsplash Design',
      thumbnail: '/gallery/project_24_.jpeg',
      duration: '1:45',
      views: '15K views',
      date: '3 weeks ago'
    },
    {
      id: '-pXgsiOqY8M',
      title: 'Flooring Installation',
      thumbnail: '/gallery/project_5_.jpeg',
      duration: '2:30',
      views: '9.7K views',
      date: '5 days ago'
    }
  ];

  const openVideo = (videoId: string) => {
    setIsLoading(true);
    setSelectedVideo(videoId);
    setIsModalOpen(true);
    // Simulate loading time
    setTimeout(() => setIsLoading(false), 500);
  };

  const closeVideo = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedVideo(null);
    }, 300);
  };

  // Handle escape key to close modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeVideo();
      }
    };

    if (isModalOpen) {
      window.addEventListener('keydown', handleEsc);
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isModalOpen]);

  return (
    <section id="video-gallery" className="video-gallery">
      <div className="container">
        <div className="section-header">
          <h2>Video Gallery</h2>
          <p>See our work in action</p>
        </div>
        
        <div className="video-grid">
          {videos.map((video, index) => (
            <div 
              key={video.id} 
              className="video-card"
              onClick={() => openVideo(video.id)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="video-thumbnail">
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                />
                <div className="video-overlay">
                  <div className="play-button">
                    <div className="play-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </div>
                  </div>
                  <div className="video-duration">{video.duration}</div>
                </div>
              </div>
              <div className="video-info">
                <h3>{video.title}</h3>
                <div className="video-meta">
                  <span className="video-views">{video.views}</span>
                  <span className="video-date">{video.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Video Modal */}
      {isModalOpen && (
        <div className={`video-modal ${isModalOpen ? 'open' : ''}`}>
          <div className="video-modal-overlay" onClick={closeVideo}></div>
          <div className="video-modal-container">
            <div className="video-modal-header">
              <button className="close-button" onClick={closeVideo}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            
            <div className="video-modal-content">
              {isLoading ? (
                <div className="video-loading">
                  <div className="spinner"></div>
                  <p>Loading video...</p>
                </div>
              ) : selectedVideo ? (
                <div className="video-embed">
                  <iframe
                    src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&rel=0&modestbranding=1`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoGallery;