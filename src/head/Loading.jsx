// Loading.js
import React from 'react';
import './loading.css';

const Loading = () => {
  return (
    <div className="loading-spinner">
      <div className="loading-shell">
        <span className='loading-blob'></span>
        <span className='loading-blob'></span>
        <span className='loading-blob'></span>
        <span className='loading-blob'></span>
      </div>
    </div>
  );
};

export default Loading;