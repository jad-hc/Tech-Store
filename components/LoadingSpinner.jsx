// components/LoadingSpinner.js
import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="loader-center">
      <div className="loader-flex">
        <div className="loader-main">
          <div className="loader"></div>
        </div>
        <div><p className="loader-p">Loading...</p></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
