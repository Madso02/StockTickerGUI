import type { LayoutLoad } from './$types';
import { stockTickerApi } from '$lib/StockTickerAPI';


export const load: LayoutLoad = async (LayoutLoadEvent) => {
    return {overviews: await stockTickerApi.overviews.get()}
}