// export const API_CONFIG = {
//   ALPHA_VANTAGE: {
//     baseUrl: import.meta.env.VITE_ALPHA_BASE_URL,
//     apiKey: import.meta.env.VITE_ALPHA_KEY,
//   },
//   YAHOO_FINANCE: {
//     baseUrl: import.meta.env.VITE_YAHOO_BASE_URL,
//   },
//   POLYGON: {
//     baseUrl: import.meta.env.VITE_POLYGON_BASE_URL,
//     apiKey: import.meta.env.VITE_POLYGON_KEY,
//   }
// };
export const API_CONFIG = {
  ALPHA_VANTAGE: {
    baseUrl: "https://www.alphavantage.co/query",
    apiKey: "D6GKE8F3SXA63WDO",
  },
  YAHOO_FINANCE: {
    baseUrl: "p2z_6rKeGCWLV0K38LxBXKdX8iDr8Hdu", // Note: This looks more like an API key than a base URL
  },
  POLYGON: {
    baseUrl: "https://api.polygon.io/v2",
    apiKey: "p2z_6rKeGCWLV0K38LxBXKdX8iDr8Hdu",
  }
};