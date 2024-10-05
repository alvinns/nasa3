import React, { useState } from 'react';
import './ExoplanetCard.css';

const ExoplanetCard = ({ planet, onSearch, onLike, isLiked }) => {
  const [currentView, setCurrentView] = useState('main');

  // Use the planet's image URL directly from the planet object
  const imageUrl = planet.image; // Dynamically set image URL based on the planet passed

  return (
    <div className="exoplanet-card">
      {currentView === 'main' && (
        <div className="main-view">
          <div className="card-header">
            <p className="discovering-text">Now discovering...</p>
            <button className={`like-button ${isLiked ? 'liked' : ''}`} onClick={() => onLike(planet.name)}>
              {isLiked ? '❤️' : '🤍'}
            </button>
          </div>
          <h2 className="planet-name">{planet.name}</h2>
          <p className="planet-info">{planet.distance} lightyears • {planet.airPercentage}% air</p>
          <div className="planet-image-container">
            <img 
              src={imageUrl} // Use the image URL directly here
              alt={planet.name} 
              className="planet-image" 
            />
            <div className="image-dots">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="dot" />
              ))}
            </div>
          </div>
          <div className="button-container">
            <button 
              onClick={() => setCurrentView('details')}
              className="visit-button"
            >
              <span className="visit-text">Visit Planet</span>
              <span className="visit-icon">🚀</span>
            </button>

            {/* New 360-degree button */}
            <a 
              href={planet.threeDLink}  // Dynamically use the 3D link for each planet
              target="_blank" 
              rel="noopener noreferrer" 
              className="degree-button"
            >
              <span className="degree-text">360° View</span>
              <span className="degree-icon">🔄</span>
            </a>
          </div>
        </div>
      )}

      {currentView === 'details' && (
        <div className="details-view">
          <div className="card-header">
            <button onClick={() => setCurrentView('main')} className="back-button">
              <span className="back-icon">←</span>
              <span className="back-text">Back to Overview</span>
            </button>
            <button className={`like-button ${isLiked ? 'liked' : ''}`} onClick={() => onLike(planet.name)}>
              {isLiked ? '❤️' : '🤍'}
            </button>
          </div>
          <h2 className="planet-name">{planet.name}</h2>
          <p className="planet-description">{planet.description}</p>
          <div className="planet-image-container">
            <img 
              src={imageUrl} // Use the image URL directly here as well
              alt={planet.name} 
              className="planet-image" 
            />
            <img src={planet.detailImage} alt="Detail" className="detail-image" />
          </div>
          <div className="planet-details">
            <div className="detail-row">
              <span className="detail-label">Distance</span>
              <span className="detail-value">{planet.distance} Lightyears away</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Water presence</span>
              <span className="detail-value">{planet.waterPresence}</span>
            </div>
          </div>
        </div>
      )}

      <div className="card-footer">
        <button className="icon-button">🌟</button>
        <button className={`icon-button ${isLiked ? 'liked' : ''}`} onClick={() => onLike(planet.name)}>
          {isLiked ? '❤️' : '🤍'}
        </button>
        <button className="icon-button" onClick={onSearch}>🔍</button>
        <button className="icon-button">👤</button>
      </div>
    </div>
  );
};

export default ExoplanetCard;
