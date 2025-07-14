import React from 'react';

const TimeFrameFilter = ({ timeFrame, setTimeFrame }) => {
  const timeFrames = [
    { label: '1D', value: '1D' },
    { label: '5D', value: '5D' },
    { label: '1M', value: '1M' },
    { label: '6M', value: '6M' },
    { label: '1Y', value: '1Y' },
    { label: '5Y', value: '5Y' },
  ];

  return (
    <div className="timeframe-filter">
      {timeFrames.map((tf) => (
        <button
          key={tf.value}
          onClick={() => setTimeFrame(tf.value)}
          className={`timeframe-button ${timeFrame === tf.value ? 'active' : ''}`}
        >
          {tf.label}
        </button>
      ))}
    </div>
  );
};

export default TimeFrameFilter;