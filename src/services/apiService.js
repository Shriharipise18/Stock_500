import { API_CONFIG } from '../config/apiConfig.js';

class ApiService {
  // Fetch stock data from Alpha Vantage
  async fetchFromAlphaVantage(symbol) {
    // If no valid API key, return null immediately
    if (!this.hasValidApiKey()) {
      return null;
    }
    
    const url = `${API_CONFIG.ALPHA_VANTAGE.baseUrl}?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_CONFIG.ALPHA_VANTAGE.apiKey}`;
    
    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      // Check for API error messages
      if (data['Error Message']) {
        throw new Error(data['Error Message']);
      }
      
      if (data['Note']) {
        throw new Error('API rate limit exceeded');
      }
      
      if (data['Global Quote'] && Object.keys(data['Global Quote']).length > 0) {
        const quote = data['Global Quote'];
        return {
          symbol: quote['01. symbol'],
          price: parseFloat(quote['05. price']),
          change: parseFloat(quote['09. change']),
          changePercent: parseFloat(quote['10. change percent'].replace('%', '')),
          volume: parseInt(quote['06. volume']),
          lastUpdated: quote['07. latest trading day']
        };
      }
      
      // If we get here, the API response was empty or invalid
      return null;
    } catch (error) {
      console.warn(`API fetch failed for ${symbol}:`, error.message);
      return null;
    }
  }

  // Fetch from Yahoo Finance API (free alternative)
  async fetchFromYahoo(symbol) {
    const url = `${API_CONFIG.YAHOO_FINANCE.baseUrl}/${symbol}`;
    
    try {
      const response = await fetch(url);
      const data = await response.json();
      
      if (data.price) {
        return {
          symbol: data.symbol,
          price: data.price,
          change: data.change,
          changePercent: data.changePercent,
          volume: data.volume,
          lastUpdated: new Date().toISOString().split('T')[0]
        };
      }
      throw new Error('Invalid API response');
    } catch (error) {
      console.error(`Error fetching ${symbol}:`, error);
      return null;
    }
  }

  // Fetch historical data for sparklines
  async fetchHistoricalData(symbol, timeFrame = '1D') {
    // This would fetch historical data for sparklines
    // For now, we'll generate mock data but keep the structure for real API
    const points = timeFrame === '1D' ? 24 : 
                   timeFrame === '5D' ? 20 : 
                   timeFrame === '1M' ? 30 : 
                   timeFrame === '6M' ? 24 : 
                   timeFrame === '1Y' ? 52 : 60;

    const basePrice = Math.random() * 500 + 50;
    const history = [basePrice];
    
    for (let i = 1; i < points; i++) {
      const change = (Math.random() - 0.5) * 0.08 * basePrice;
      history.push(Math.max(10, history[i-1] + change));
    }
    
    return history;
  }

  // Check if API key is configured
  hasValidApiKey() {
    console.log('Checking API key:', API_CONFIG.ALPHA_VANTAGE.apiKey);
    console.log('Is valid:', API_CONFIG.ALPHA_VANTAGE.apiKey && API_CONFIG.ALPHA_VANTAGE.apiKey !== 'YOUR_API_KEY_HERE');
    return API_CONFIG.ALPHA_VANTAGE.apiKey && 
           API_CONFIG.ALPHA_VANTAGE.apiKey !== 'YOUR_API_KEY_HERE';
  }
}

export const apiService = new ApiService();