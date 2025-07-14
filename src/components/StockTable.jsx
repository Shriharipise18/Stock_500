import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { formatPercent, getColor, getBgColor, formatPrice } from '../utils/stockUtils.js';
import MiniSparkline from './MiniSparkline.jsx';

const StockTable = ({ stocks, timeFrame }) => {
  return (
    <div className="table-container">
      <table className="stock-table">
        <thead className="table-header">
          <tr>
            <th>Company</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>Change ({timeFrame})</th>
            <th>Trend</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {stocks.map((stock) => (
            <tr 
              key={stock.symbol} 
              className={`table-row ${
                stock.changePercent > 0 
                  ? 'positive' 
                  : stock.changePercent < 0 
                    ? 'negative' 
                    : 'neutral'
              }`}
            >
              <td className="table-cell">
                <div className="company-info">
                  <div className="company-avatar">
                    <span>{stock.symbol.charAt(0)}</span>
                  </div>
                  <div className="company-details">
                    <div className="company-name">{stock.name}</div>
                    <div className="company-sector">{stock.sector}</div>
                  </div>
                </div>
              </td>
              <td className="table-cell">
                <span className="symbol-badge">
                  {stock.symbol}
                </span>
              </td>
              <td className="table-cell price">
                {formatPrice(stock.price)}
              </td>
              <td className="table-cell">
                <div className="change-container">
                  {stock.changePercent > 0 ? (
                    <TrendingUp className={`change-icon change-positive`} />
                  ) : (
                    <TrendingDown className={`change-icon change-negative`} />
                  )}
                  <span className={`change-value ${stock.changePercent > 0 ? 'change-positive' : 'change-negative'}`}>
                    {formatPercent(stock.changePercent)}
                  </span>
                </div>
              </td>
              <td className="table-cell">
                <div className="sparkline-container">
                  <MiniSparkline 
                    data={stock.history} 
                    color={stock.changePercent > 0 ? '#059669' : '#dc2626'} 
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockTable;