
import React from 'react';

const MovingImages = () => {
  const healthBadges = [
    '/lovable-uploads/8eb52ab7-72fd-4820-8396-d3d1fcc59294.png', // 121/80 mmHg
    '/lovable-uploads/bcbb76a7-b167-4289-8fd1-c1502db3d297.png', // 62 days
    '/lovable-uploads/d25046bb-5e88-48e7-bd8c-cd47e1335878.png', // 8 hours
    '/lovable-uploads/f172f719-d10b-46e4-b3ff-0aa78b4a552a.png', // 121/80 mmHg
    '/lovable-uploads/5ef4f85f-2998-4fe8-bd08-008941c8fa0a.png', // 32 minutes
    '/lovable-uploads/f2d12df7-bbc3-4938-aa93-afc0d31dc94c.png'  // Feeling better
  ];

  return (
    <section className="moving-images-section">
      {/* Moving images container */}
      <div className="moving-images-container">
        <div className="image-scroll">
          <div className="image-track">
            <div className="image-item">
              <img 
                src="/lovable-uploads/338528a6-c1df-4957-838b-dcec25988de9.png" 
                alt="Active lifestyle" 
                className="scroll-image"
              />
              <div className="health-badge-image">
                <img 
                  src={healthBadges[0]} 
                  alt="Health metric badge" 
                  className="badge-overlay"
                />
              </div>
            </div>
            
            <div className="image-item">
              <img 
                src="/lovable-uploads/fb431187-677a-40a7-a7db-f524802309f5.png" 
                alt="Healthy cooking" 
                className="scroll-image"
              />
              <div className="health-badge-image">
                <img 
                  src={healthBadges[1]} 
                  alt="Health metric badge" 
                  className="badge-overlay"
                />
              </div>
            </div>
            
            <div className="image-item">
              <img 
                src="/lovable-uploads/d79a029a-1226-48f4-970d-1b2b16098be6.png" 
                alt="Yoga and wellness" 
                className="scroll-image"
              />
              <div className="health-badge-image">
                <img 
                  src={healthBadges[2]} 
                  alt="Health metric badge" 
                  className="badge-overlay"
                />
              </div>
            </div>
            
            <div className="image-item">
              <img 
                src="/lovable-uploads/215f1a5a-f6c7-4ceb-a257-a379bc1489e8.png" 
                alt="Restorative sleep" 
                className="scroll-image"
              />
              <div className="health-badge-image">
                <img 
                  src={healthBadges[3]} 
                  alt="Health metric badge" 
                  className="badge-overlay"
                />
              </div>
            </div>
            
            <div className="image-item">
              <img 
                src="/lovable-uploads/78e1de12-0600-409b-81e8-0b2a8d43b27a.png" 
                alt="Mindfulness" 
                className="scroll-image"
              />
              <div className="health-badge-image">
                <img 
                  src={healthBadges[4]} 
                  alt="Health metric badge" 
                  className="badge-overlay"
                />
              </div>
            </div>
            
            <div className="image-item">
              <img 
                src="/lovable-uploads/0de58169-6385-4c99-bf61-a382f47be59e.png" 
                alt="Social connection" 
                className="scroll-image"
              />
              <div className="health-badge-image">
                <img 
                  src={healthBadges[5]} 
                  alt="Health metric badge" 
                  className="badge-overlay"
                />
              </div>
            </div>

            {/* Duplicate images for seamless loop */}
            <div className="image-item">
              <img 
                src="/lovable-uploads/338528a6-c1df-4957-838b-dcec25988de9.png" 
                alt="Active lifestyle" 
                className="scroll-image"
              />
              <div className="health-badge-image">
                <img 
                  src={healthBadges[0]} 
                  alt="Health metric badge" 
                  className="badge-overlay"
                />
              </div>
            </div>
            
            <div className="image-item">
              <img 
                src="/lovable-uploads/fb431187-677a-40a7-a7db-f524802309f5.png" 
                alt="Healthy cooking" 
                className="scroll-image"
              />
              <div className="health-badge-image">
                <img 
                  src={healthBadges[1]} 
                  alt="Health metric badge" 
                  className="badge-overlay"
                />
              </div>
            </div>
            
            <div className="image-item">
              <img 
                src="/lovable-uploads/d79a029a-1226-48f4-970d-1b2b16098be6.png" 
                alt="Yoga and wellness" 
                className="scroll-image"
              />
              <div className="health-badge-image">
                <img 
                  src={healthBadges[2]} 
                  alt="Health metric badge" 
                  className="badge-overlay"
                />
              </div>
            </div>
            
            <div className="image-item">
              <img 
                src="/lovable-uploads/215f1a5a-f6c7-4ceb-a257-a379bc1489e8.png" 
                alt="Restorative sleep" 
                className="scroll-image"
              />
              <div className="health-badge-image">
                <img 
                  src={healthBadges[3]} 
                  alt="Health metric badge" 
                  className="badge-overlay"
                />
              </div>
            </div>
            
            <div className="image-item">
              <img 
                src="/lovable-uploads/78e1de12-0600-409b-81e8-0b2a8d43b27a.png" 
                alt="Mindfulness" 
                className="scroll-image"
              />
              <div className="health-badge-image">
                <img 
                  src={healthBadges[4]} 
                  alt="Health metric badge" 
                  className="badge-overlay"
                />
              </div>
            </div>
            
            <div className="image-item">
              <img 
                src="/lovable-uploads/0de58169-6385-4c99-bf61-a382f47be59e.png" 
                alt="Social connection" 
                className="scroll-image"
              />
              <div className="health-badge-image">
                <img 
                  src={healthBadges[5]} 
                  alt="Health metric badge" 
                  className="badge-overlay"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovingImages;
