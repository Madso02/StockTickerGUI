import type { PageServerLoad } from './$types';


export const load: PageServerLoad = async ({ params }) => {
    let apiData = await fetch('http://localhost:5251/api/Overviews/'+ params.id).then(
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

    return {overview: apiData};
}