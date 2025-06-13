
import React from 'react';

const MovingImages = () => {
  return (
    <section className="moving-images-section">
      <div className="moving-images-container">
        <div className="image-scroll">
          <div className="image-track">
            <img 
              src="/lovable-uploads/338528a6-c1df-4957-838b-dcec25988de9.png" 
              alt="Active lifestyle" 
              className="scroll-image"
            />
            <img 
              src="/lovable-uploads/fb431187-677a-40a7-a7db-f524802309f5.png" 
              alt="Healthy cooking" 
              className="scroll-image"
            />
            <img 
              src="/lovable-uploads/d79a029a-1226-48f4-970d-1b2b16098be6.png" 
              alt="Yoga and wellness" 
              className="scroll-image"
            />
            <img 
              src="/lovable-uploads/215f1a5a-f6c7-4ceb-a257-a379bc1489e8.png" 
              alt="Restorative sleep" 
              className="scroll-image"
            />
            <img 
              src="/lovable-uploads/78e1de12-0600-409b-81e8-0b2a8d43b27a.png" 
              alt="Mindfulness" 
              className="scroll-image"
            />
            <img 
              src="/lovable-uploads/0de58169-6385-4c99-bf61-a382f47be59e.png" 
              alt="Social connection" 
              className="scroll-image"
            />
            {/* Duplicate images for seamless loop */}
            <img 
              src="/lovable-uploads/338528a6-c1df-4957-838b-dcec25988de9.png" 
              alt="Active lifestyle" 
              className="scroll-image"
            />
            <img 
              src="/lovable-uploads/fb431187-677a-40a7-a7db-f524802309f5.png" 
              alt="Healthy cooking" 
              className="scroll-image"
            />
            <img 
              src="/lovable-uploads/d79a029a-1226-48f4-970d-1b2b16098be6.png" 
              alt="Yoga and wellness" 
              className="scroll-image"
            />
            <img 
              src="/lovable-uploads/215f1a5a-f6c7-4ceb-a257-a379bc1489e8.png" 
              alt="Restorative sleep" 
              className="scroll-image"
            />
            <img 
              src="/lovable-uploads/78e1de12-0600-409b-81e8-0b2a8d43b27a.png" 
              alt="Mindfulness" 
              className="scroll-image"
            />
            <img 
              src="/lovable-uploads/0de58169-6385-4c99-bf61-a382f47be59e.png" 
              alt="Social connection" 
              className="scroll-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovingImages;
