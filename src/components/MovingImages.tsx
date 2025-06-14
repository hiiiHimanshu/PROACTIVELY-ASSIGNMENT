
import React from 'react';

const MovingImages = () => {
  const healthMetrics = [
    { icon: '💙', value: '121/80', unit: 'mmHg', color: 'bg-blue-500' },
    { icon: '📅', value: '62', unit: 'days', color: 'bg-gray-500' },
    { icon: '🌙', value: '8', unit: 'hours', color: 'bg-green-500' },
    { icon: '💙', value: '121/80', unit: 'mmHg', color: 'bg-blue-500' },
    { icon: '❤️', value: '32', unit: 'minutes', color: 'bg-red-500' },
    { icon: '❤️', value: 'Feeling', unit: 'better', color: 'bg-red-500' }
  ];

  const imageTexts = [
    { title: "Book an appointment with", subtitle: "lifestyle medicine experts" },
    { title: "Optimize your lifestyle", subtitle: "and reverse chronic diseases" },
    { title: "Evidence-based", subtitle: "wellness approach" },
    { title: "Personalized care", subtitle: "for better health" },
    { title: "Transform your", subtitle: "daily habits" },
    { title: "Expert guidance", subtitle: "every step" }
  ];

  return (
    <section className="moving-images-section">
      <div className="moving-images-container">
        <div className="image-scroll">
          <div className="image-track">
            <div className="image-item">
              <img 
                src="/lovable-uploads/338528a6-c1df-4957-838b-dcec25988de9.png" 
                alt="Active lifestyle" 
                className="scroll-image"
              />
              <div className="image-text-overlay">
                <h3 className="overlay-title">{imageTexts[0].title}</h3>
                <p className="overlay-subtitle">{imageTexts[0].subtitle}</p>
              </div>
              <div className={`health-badge ${healthMetrics[0].color}`}>
                <span className="badge-icon">{healthMetrics[0].icon}</span>
                <div className="badge-text">
                  <span className="badge-value">{healthMetrics[0].value}</span>
                  <span className="badge-unit">{healthMetrics[0].unit}</span>
                </div>
              </div>
            </div>
            
            <div className="image-item">
              <img 
                src="/lovable-uploads/fb431187-677a-40a7-a7db-f524802309f5.png" 
                alt="Healthy cooking" 
                className="scroll-image"
              />
              <div className="image-text-overlay">
                <h3 className="overlay-title">{imageTexts[1].title}</h3>
                <p className="overlay-subtitle">{imageTexts[1].subtitle}</p>
              </div>
              <div className={`health-badge ${healthMetrics[1].color}`}>
                <span className="badge-icon">{healthMetrics[1].icon}</span>
                <div className="badge-text">
                  <span className="badge-value">{healthMetrics[1].value}</span>
                  <span className="badge-unit">{healthMetrics[1].unit}</span>
                </div>
              </div>
            </div>
            
            <div className="image-item">
              <img 
                src="/lovable-uploads/d79a029a-1226-48f4-970d-1b2b16098be6.png" 
                alt="Yoga and wellness" 
                className="scroll-image"
              />
              <div className="image-text-overlay">
                <h3 className="overlay-title">{imageTexts[2].title}</h3>
                <p className="overlay-subtitle">{imageTexts[2].subtitle}</p>
              </div>
              <div className={`health-badge ${healthMetrics[2].color}`}>
                <span className="badge-icon">{healthMetrics[2].icon}</span>
                <div className="badge-text">
                  <span className="badge-value">{healthMetrics[2].value}</span>
                  <span className="badge-unit">{healthMetrics[2].unit}</span>
                </div>
              </div>
            </div>
            
            <div className="image-item">
              <img 
                src="/lovable-uploads/215f1a5a-f6c7-4ceb-a257-a379bc1489e8.png" 
                alt="Restorative sleep" 
                className="scroll-image"
              />
              <div className="image-text-overlay">
                <h3 className="overlay-title">{imageTexts[3].title}</h3>
                <p className="overlay-subtitle">{imageTexts[3].subtitle}</p>
              </div>
              <div className={`health-badge ${healthMetrics[3].color}`}>
                <span className="badge-icon">{healthMetrics[3].icon}</span>
                <div className="badge-text">
                  <span className="badge-value">{healthMetrics[3].value}</span>
                  <span className="badge-unit">{healthMetrics[3].unit}</span>
                </div>
              </div>
            </div>
            
            <div className="image-item">
              <img 
                src="/lovable-uploads/78e1de12-0600-409b-81e8-0b2a8d43b27a.png" 
                alt="Mindfulness" 
                className="scroll-image"
              />
              <div className="image-text-overlay">
                <h3 className="overlay-title">{imageTexts[4].title}</h3>
                <p className="overlay-subtitle">{imageTexts[4].subtitle}</p>
              </div>
              <div className={`health-badge ${healthMetrics[4].color}`}>
                <span className="badge-icon">{healthMetrics[4].icon}</span>
                <div className="badge-text">
                  <span className="badge-value">{healthMetrics[4].value}</span>
                  <span className="badge-unit">{healthMetrics[4].unit}</span>
                </div>
              </div>
            </div>
            
            <div className="image-item">
              <img 
                src="/lovable-uploads/0de58169-6385-4c99-bf61-a382f47be59e.png" 
                alt="Social connection" 
                className="scroll-image"
              />
              <div className="image-text-overlay">
                <h3 className="overlay-title">{imageTexts[5].title}</h3>
                <p className="overlay-subtitle">{imageTexts[5].subtitle}</p>
              </div>
              <div className={`health-badge ${healthMetrics[5].color}`}>
                <span className="badge-icon">{healthMetrics[5].icon}</span>
                <div className="badge-text">
                  <span className="badge-value">{healthMetrics[5].value}</span>
                  <span className="badge-unit">{healthMetrics[5].unit}</span>
                </div>
              </div>
            </div>

            {/* Duplicate images for seamless loop */}
            <div className="image-item">
              <img 
                src="/lovable-uploads/338528a6-c1df-4957-838b-dcec25988de9.png" 
                alt="Active lifestyle" 
                className="scroll-image"
              />
              <div className="image-text-overlay">
                <h3 className="overlay-title">{imageTexts[0].title}</h3>
                <p className="overlay-subtitle">{imageTexts[0].subtitle}</p>
              </div>
              <div className={`health-badge ${healthMetrics[0].color}`}>
                <span className="badge-icon">{healthMetrics[0].icon}</span>
                <div className="badge-text">
                  <span className="badge-value">{healthMetrics[0].value}</span>
                  <span className="badge-unit">{healthMetrics[0].unit}</span>
                </div>
              </div>
            </div>
            
            <div className="image-item">
              <img 
                src="/lovable-uploads/fb431187-677a-40a7-a7db-f524802309f5.png" 
                alt="Healthy cooking" 
                className="scroll-image"
              />
              <div className="image-text-overlay">
                <h3 className="overlay-title">{imageTexts[1].title}</h3>
                <p className="overlay-subtitle">{imageTexts[1].subtitle}</p>
              </div>
              <div className={`health-badge ${healthMetrics[1].color}`}>
                <span className="badge-icon">{healthMetrics[1].icon}</span>
                <div className="badge-text">
                  <span className="badge-value">{healthMetrics[1].value}</span>
                  <span className="badge-unit">{healthMetrics[1].unit}</span>
                </div>
              </div>
            </div>
            
            <div className="image-item">
              <img 
                src="/lovable-uploads/d79a029a-1226-48f4-970d-1b2b16098be6.png" 
                alt="Yoga and wellness" 
                className="scroll-image"
              />
              <div className="image-text-overlay">
                <h3 className="overlay-title">{imageTexts[2].title}</h3>
                <p className="overlay-subtitle">{imageTexts[2].subtitle}</p>
              </div>
              <div className={`health-badge ${healthMetrics[2].color}`}>
                <span className="badge-icon">{healthMetrics[2].icon}</span>
                <div className="badge-text">
                  <span className="badge-value">{healthMetrics[2].value}</span>
                  <span className="badge-unit">{healthMetrics[2].unit}</span>
                </div>
              </div>
            </div>
            
            <div className="image-item">
              <img 
                src="/lovable-uploads/215f1a5a-f6c7-4ceb-a257-a379bc1489e8.png" 
                alt="Restorative sleep" 
                className="scroll-image"
              />
              <div className="image-text-overlay">
                <h3 className="overlay-title">{imageTexts[3].title}</h3>
                <p className="overlay-subtitle">{imageTexts[3].subtitle}</p>
              </div>
              <div className={`health-badge ${healthMetrics[3].color}`}>
                <span className="badge-icon">{healthMetrics[3].icon}</span>
                <div className="badge-text">
                  <span className="badge-value">{healthMetrics[3].value}</span>
                  <span className="badge-unit">{healthMetrics[3].unit}</span>
                </div>
              </div>
            </div>
            
            <div className="image-item">
              <img 
                src="/lovable-uploads/78e1de12-0600-409b-81e8-0b2a8d43b27a.png" 
                alt="Mindfulness" 
                className="scroll-image"
              />
              <div className="image-text-overlay">
                <h3 className="overlay-title">{imageTexts[4].title}</h3>
                <p className="overlay-subtitle">{imageTexts[4].subtitle}</p>
              </div>
              <div className={`health-badge ${healthMetrics[4].color}`}>
                <span className="badge-icon">{healthMetrics[4].icon}</span>
                <div className="badge-text">
                  <span className="badge-value">{healthMetrics[4].value}</span>
                  <span className="badge-unit">{healthMetrics[4].unit}</span>
                </div>
              </div>
            </div>
            
            <div className="image-item">
              <img 
                src="/lovable-uploads/0de58169-6385-4c99-bf61-a382f47be59e.png" 
                alt="Social connection" 
                className="scroll-image"
              />
              <div className="image-text-overlay">
                <h3 className="overlay-title">{imageTexts[5].title}</h3>
                <p className="overlay-subtitle">{imageTexts[5].subtitle}</p>
              </div>
              <div className={`health-badge ${healthMetrics[5].color}`}>
                <span className="badge-icon">{healthMetrics[5].icon}</span>
                <div className="badge-text">
                  <span className="badge-value">{healthMetrics[5].value}</span>
                  <span className="badge-unit">{healthMetrics[5].unit}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovingImages;
