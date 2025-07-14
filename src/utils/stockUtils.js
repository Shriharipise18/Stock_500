export const generateMockData = (company, timeFrame) => {
  const history = [];
  const points = timeFrame === '1D' ? 24 : 
                 timeFrame === '5D' ? 20 : 
                 timeFrame === '1M' ? 30 : 
                 timeFrame === '6M' ? 24 : 
                 timeFrame === '1Y' ? 52 : 60;

  const basePrice = Math.random() * 500 + 50;
  history.push(basePrice);
  
  for (let i = 1; i < points; i++) {
    const change = (Math.random() - 0.5) * 0.08 * basePrice;
    history.push(Math.max(10, history[i-1] + change));
  }
  
  const price = history[history.length - 1];
  const changePercent = ((price - basePrice) / basePrice) * 100;
  
  return {
    ...company,
    price,
    changePercent,
    history,
    volume: Math.floor(Math.random() * 10000000),
    lastUpdated: new Date().toISOString().split('T')[0]
  };
};

export const formatPercent = (value) => {
  const num = parseFloat(value.toString());
  return `${num > 0 ? '+' : ''}${num.toFixed(2)}%`;
};

export const getColor = (value) => {
  const num = parseFloat(value.toString());
  return num > 0 ? 'text-green-600' : 'text-red-600';
};

export const getBgColor = (value) => {
  const num = parseFloat(value.toString());
  return num > 0 ? 'bg-green-50' : 'bg-red-50';
};

export const formatPrice = (price) => {
  return `$${price.toFixed(2)}`;
};

export const formatVolume = (volume) => {
  if (volume >= 1000000) {
    return `${(volume / 1000000).toFixed(1)}M`;
  } else if (volume >= 1000) {
    return `${(volume / 1000).toFixed(1)}K`;
  }
  return volume.toString();
};