import React from 'react';

const MiniSparkline = ({ 
  data, 
  color, 
  width = 100, 
  height = 40 
}) => {
  if (!data || data.length < 2) return null;
  
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min;
  
  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * width;
    const y = range === 0 ? height / 2 : ((max - value) / range) * height;
    return `${x},${y}`;
  }).join(' ');
  
  return (
    <svg width={width} height={height} className="overflow-visible">
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="2"
        className="drop-shadow-sm"
        style={{ 
          filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.1))' 
        }}
      />
    </svg>
  );
};

export default MiniSparkline;