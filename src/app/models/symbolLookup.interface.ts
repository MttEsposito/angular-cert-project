interface SymbolLookup {
    description: string;
    displaySymbol: string;
    symbol: string;
    type: string;
}

interface ApiSymbolLookup {
    count: number;
    result: Array<SymbolLookup>;
}

export { SymbolLookup, ApiSymbolLookup };