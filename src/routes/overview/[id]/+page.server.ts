import type { PageServerLoad, Actions } from './$types';
import { api } from '$lib/server/apiConfigs';


export const load: PageServerLoad = async ({ params }) => {
    let apiData = await fetch(api.url + 'Overviews/' + params.id).then(
        (response) => {
            if (!response.ok) {
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

    return { overview: apiData };
}

export const actions = {
    update: async ({ cookies, request }) => {
        let formData = await request.formData();
        let updateResponse = await fetch(api.url + 'Overviews/' + formData.get('id'), {
            method: "PUT",
            body: {
                id: formData.get('id'),
                name: formData.get('name'),
                description: formData.get('description'),
                items: null,
            },
            headers: {
                "Content-Type": "application/json",
            },
        })

        updateResponse = await updateResponse.json();
        console.log(updateResponse);

        return { updateResponse };
    },
    delete: async ({ cookies, request }) => {
        return "test";
    }
} satisfies Actions;
