import type { PageLoad } from './$types';
import { stockTickerApi } from '$lib/StockTickerAPI';


export const load: PageLoad = async ({ params }) => {
    let data = await stockTickerApi.overviews.get(params.id);

    return {
        overview: {
            name: data.name,
            description: data.description,
            originalValues: {
                name: data.name,
                description: data.description
            }
        },
    }
}


