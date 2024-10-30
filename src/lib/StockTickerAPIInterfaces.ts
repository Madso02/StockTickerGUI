export interface StockTickerAPIOverview {
    id: number;
    name: string;
    description: string;
    overviewStockTickerItems: StockTickerAPIOverviewTickerItem[];
}

export interface StockTickerAPIOverviewTickerItem {
    id: number;
    count: number;
    alias: string;
    uri: string;
    overviewId: number;
}