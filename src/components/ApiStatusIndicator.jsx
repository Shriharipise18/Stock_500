import React from 'react';
import { AlertCircle } from 'lucide-react';

const ApiStatusIndicator = ({ isUsingApi, apiError }) => {
  console.log('ApiStatusIndicator - isUsingApi:', isUsingApi, 'apiError:', apiError);
  
  if (apiError) {
    return (
      <div className="api-status error">
        <AlertCircle className="change-icon" />
        API Error - Using mock data
      </div>
    );
  }
  
  if (isUsingApi) {
    return (
      <div className="api-status live">
        <div className="status-dot live"></div>
        Live API data
      </div>
    );
  }
  
  return (
    <div className="api-status mock">
      <div className="status-dot mock"></div>
      Mock data (add API key for live data)
    </div>
  );
};

export default ApiStatusIndicator;