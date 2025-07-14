import React from 'react';

const LoadingState = () => {
  return (
    <div className="loading-container">
      <div className="loading-content">
        <div className="loading-pulse">
          <div className="loading-title"></div>
          <div className="loading-card">
            <div className="loading-controls">
              <div className="loading-control"></div>
              <div className="loading-control"></div>
            </div>
            <div className="loading-rows">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="loading-row"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingState;