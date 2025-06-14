
import React from 'react';

const AnimatedImageColumns = () => {
  const column1Images = [
    '/lovable-uploads/609018b6-944f-40f1-bd4b-6fa6fcaf5f51.png',
    '/lovable-uploads/efb7811a-7520-4b7d-9b4e-cd97de08c8e7.png',
    '/lovable-uploads/bff583c8-5e80-4cec-ab1e-4c5c56d94016.png',
    '/lovable-uploads/f1031326-d59f-4685-bd65-3321df3a516f.png'
  ];

  const column2Images = [
    '/lovable-uploads/331d2956-ced7-4197-8892-1f629184421e.png',
    '/lovable-uploads/4c59bdd5-1445-4eb9-95d1-df176a6a23ed.png',
    '/lovable-uploads/5c56c9d7-7616-43ed-8e6b-818dc83d319a.png'
  ];

  return (
    <section className="animated-columns-section-left">
      {/* Overlapping text positioned over the animated columns */}
      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
        <div className="max-w-sm bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            Personalized care
          </h2>
          <p className="text-lg text-teal-600 font-medium">
            for better health
          </p>
        </div>
      </div>

      <div className="animated-columns-container-left">
        <div className="image-column-small column-1">
          <div className="column-track track-down">
            {/* First set of images */}
            {column1Images.map((src, index) => (
              <div key={`col1-${index}`} className="column-image-item-small">
                <img 
                  src={src} 
                  alt={`Lifestyle image ${index + 1}`}
                  className="column-image-small"
                />
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {column1Images.map((src, index) => (
              <div key={`col1-dup-${index}`} className="column-image-item-small">
                <img 
                  src={src} 
                  alt={`Lifestyle image ${index + 1}`}
                  className="column-image-small"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="image-column-small column-2">
          <div className="column-track track-up">
            {/* First set of images */}
            {column2Images.map((src, index) => (
              <div key={`col2-${index}`} className="column-image-item-small">
                <img 
                  src={src} 
                  alt={`Lifestyle image ${index + 1}`}
                  className="column-image-small"
                />
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {column2Images.map((src, index) => (
              <div key={`col2-dup-${index}`} className="column-image-item-small">
                <img 
                  src={src} 
                  alt={`Lifestyle image ${index + 1}`}
                  className="column-image-small"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedImageColumns;
