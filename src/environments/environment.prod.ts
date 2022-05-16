export const environment = {
  production: true,
  routes: {
    enableTracing: false,
    useHash: false
  },
  api: {
    baseUrl: "https://finnhub.io/api/v1/",
    token: "bu4f8kn48v6uehqi3cqg",
    endpoint: {
      quote: "quote",
      symbolLookup: "search",
      insiderSentiment: "stock/insider-sentiment"
    }
  }
};
