interface Sentiment {
    symbol: string;
    year: number;
    month: number;
    change: number;
    mspr: number;
}

interface ApiSentiment {
    data: Array<Sentiment>;
    symbol: string;
}

export { Sentiment, ApiSentiment };