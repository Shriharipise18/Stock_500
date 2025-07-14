import React, { useState, useEffect } from 'react';
import { RefreshCw } from 'lucide-react';
import { sp500Companies } from '../data/sp500Companies.js';
import { apiService } from '../services/apiService.js';
import { generateMockData } from '../utils/stockUtils.js';
import TimeFrameFilter from './TimeFrameFilter.jsx';
import SearchBar from './SearchBar.jsx';
import ApiStatusIndicator from './ApiStatusIndicator.jsx';
import StockTable from './StockTable.jsx';
import MarketSummary from './MarketSummary.jsx';
import LoadingState from './LoadingState.jsx';

const Dashboard = () => {
  const [timeFrame, setTimeFrame] = useState('1D');
  const [searchTerm, setSearchTerm] = useState('');
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const [isUsingApi, setIsUsingApi] = useState(false);
  const [apiError, setApiError] = useState(null);

  // Fetch data from API or generate mock data
  const fetchStockData = async (currentTimeFrame = timeFrame) => {
    console.log('=== Starting fetchStockData ===');
    setLoading(true);
    setApiError(null);
    
    const stockData = [];
    let usingApi = false;
    let apiErrorOccurred = false;
    
    // Check if we have a valid API key
    const hasApiKey = apiService.hasValidApiKey();
    console.log('Has valid API key:', hasApiKey);
    
    if (hasApiKey) {
      // Try to fetch from API (limit to first 10 companies to avoid rate limits)
      const limitedCompanies = sp500Companies.slice(0, 10);
      console.log('Attempting to fetch from API for', limitedCompanies.length, 'companies');
      
      try {
        for (const company of limitedCompanies) {
          console.log('Fetching data for:', company.symbol);
          const apiData = await apiService.fetchFromAlphaVantage(company.symbol);
          console.log('API response for', company.symbol, ':', apiData);
          
          if (apiData) {
            const historyData = await apiService.fetchHistoricalData(company.symbol, currentTimeFrame);
            stockData.push({
              ...company,
              ...apiData,
              history: historyData
            });
            usingApi = true;
            console.log('Successfully got API data for:', company.symbol);
          } else {
            // Fallback to mock data for this stock
            console.log('API failed for', company.symbol, '- using mock data');
            const mockData = generateMockData(company, currentTimeFrame);
            stockData.push(mockData);
            apiErrorOccurred = true;
          }
          
          // Add delay to respect rate limits
          await new Promise(resolve => setTimeout(resolve, 200));
        }
      } catch (error) {
        console.error('API fetch error:', error);
        console.log('Setting API error:', error.message);
        apiErrorOccurred = true;
        setApiError(error instanceof Error ? error.message : 'API connection failed');
      }
    }
    
    console.log('Final stock data length:', stockData.length);
    console.log('Using API:', usingApi, 'API Error Occurred:', apiErrorOccurred);
    
    // If no API data or API failed, use mock data for all companies
    if (stockData.length === 0) {
      sp500Companies.forEach(company => {
        const mockData = generateMockData(company, currentTimeFrame);
        stockData.push(mockData);
      });
      if (hasApiKey) {
        setApiError('API unavailable - using mock data');
      }
    }
    
    setStocks(stockData);
    setIsUsingApi(usingApi && !apiErrorOccurred);
    console.log('Final isUsingApi state:', usingApi && !apiErrorOccurred);
    setLoading(false);
    setLastUpdate(new Date());
  };

  // Initial data fetch and periodic updates
  useEffect(() => {
    fetchStockData(timeFrame);
    
    // Update every 30 seconds (be mindful of API rate limits)
    const interval = setInterval(() => fetchStockData(timeFrame), 30000);
    
    return () => clearInterval(interval);
  }, [timeFrame]);

  // Manual refresh
  const handleRefresh = () => {
    fetchStockData();
  };

  // Filter stocks based on search
  const filteredStocks = stocks.filter(stock => 
    stock.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    stock.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort stocks by change percentage (descending)
  const sortedStocks = [...filteredStocks].sort((a, b) => b.changePercent - a.changePercent);

  if (loading) {
    return <LoadingState />;
  }

  return (
    <div className="dashboard">
      <div className="dashboard-container">
        <div className="dashboard-header">
          <h1 className="dashboard-title">S&P 500 Stock Dashboard</h1>
          <p className="dashboard-subtitle">Real-time stock performance and analytics</p>
          <div className="dashboard-meta">
            <div className="last-updated">
              Last updated: {lastUpdate.toLocaleTimeString()}
            </div>
            <ApiStatusIndicator isUsingApi={isUsingApi} apiError={apiError} />
          </div>
        </div>

        <div className="main-card">
          <div className="controls">
            <div className="controls-left">
              <TimeFrameFilter timeFrame={timeFrame} setTimeFrame={setTimeFrame} />
              <button
                onClick={handleRefresh}
                className="refresh-button"
              >
                <RefreshCw className="h-4 w-4" />
                Refresh
              </button>
              <div className="stock-count">
                Showing {filteredStocks.length} stocks
              </div>
            </div>
            <div className="controls-right">
              <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>
          </div>

          <StockTable stocks={sortedStocks} timeFrame={timeFrame} />
        </div>

        <MarketSummary stocks={sortedStocks} />
      </div>
    </div>
  );
};

export default Dashboard;