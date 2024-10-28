import type { LayoutServerLoad } from './$types';


export const load: LayoutServerLoad = async ({ cookies }) => {
    let apiData = await fetch('http://localhost:5251/api/Overviews').then(
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