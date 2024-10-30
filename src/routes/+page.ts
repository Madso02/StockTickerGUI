import type { PageLoad } from './$types';
import { stockTickerApi } from '$lib/StockTickerAPI';


export const load: PageLoad = async () => {
    return {overviews: await stockTickerApi.overviews.get()}
}