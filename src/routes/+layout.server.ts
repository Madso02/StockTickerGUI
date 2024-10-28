import type { LayoutServerLoad } from './$types';
import { api } from '$lib/server/apiConfigs';


export const load: LayoutServerLoad = async ({ cookies }) => {
    let apiData = await fetch(api.url + 'Overviews').then(
        (response) => {
            if(!response.ok) {
                console.error("error")
            }

            return response.json();
        },
        (reason) => {
            console.log(reason);
        }
    ).then(
        (data) => {
            return data;
        }
    )

    return {overviews: apiData};
}