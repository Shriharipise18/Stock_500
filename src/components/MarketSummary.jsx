import React from 'react';

const MarketSummary = ({ stocks }) => {
  const gainers = stocks.filter(s => s.changePercent > 0).length;
  const losers = stocks.filter(s => s.changePercent < 0).length;
  const unchanged = stocks.filter(s => Math.abs(s.changePercent) < 0.01).length;

  const summaryItems = [
    {
      label: 'Gainers',
      value: gainers,
      className: 'gainers'
    },
    {
      label: 'Losers',
      value: losers,
      className: 'losers'
    },
    {
      label: 'Unchanged',
      value: unchanged,
      className: 'unchanged'
    }
  ];

  return (
    <div className="market-summary">
      <h2 className="summary-title">Market Summary</h2>
      <div className="summary-grid">
        {summaryItems.map((item) => (
          <div key={item.label} className={`summary-card ${item.className}`}>
            <div className={`summary-label ${item.className}`}>
              {item.label}
            </div>
            <div className={`summary-value ${item.className}`}>
              {item.value}
            </div>
            <div className="summary-percentage">
              {((item.value / stocks.length) * 100).toFixed(1)}% of stocks
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketSummary;