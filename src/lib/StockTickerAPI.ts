import type { create } from "domain";
import type { get } from "http";

export const HTTPRequestMethods = {
    GET: 'GET',
    PUT: 'PUT',
    POST: 'POST',
    DELETE: 'DELETE',
}

class StockTickerAPI {
    url: string = 'http://localhost:5251/api/';

    async fetchFromApi(path: string, method: string = HTTPRequestMethods.GET, data: any = null, headers: Headers | null = null): Promise<Response> {
        if (headers === null) {
            headers = new Headers({});
            if (method === HTTPRequestMethods.POST || method === HTTPRequestMethods.PUT) {
                headers.append('Content-Type', 'application/json')
            }
        }

        let requestUrl = this.url + path;



        let requestInit: RequestInit = {
            method: method,
            headers: headers,
        }

        if (data !== null) {
            if (method === HTTPRequestMethods.GET || method === HTTPRequestMethods.DELETE) {
                let first = true;
                for (const [key, value] of Object.entries(data)) {
                    if (first) {
                        requestUrl += '?';
                        first = false;
                    } else {
                        requestUrl += '&';
                    }
                    requestUrl += `${key}=${value}`;
                }
            } else {
                requestInit.body = typeof (data) == 'string' ? data : JSON.stringify(data);
            }
        }


        return await fetch(this.url + path, requestInit);
    }

    overviews = {
        _this: this,
        async get(id: string | number = '') {

            let response = await this._this.fetchFromApi('Overviews/' + id, HTTPRequestMethods.GET)

            if (response.ok) {
                let apiData = await response.json();
                return apiData;
            }

            throw new Error(response.statusText);
        },
        async create(data: any) {

            let response = await this._this.fetchFromApi('Overviews', HTTPRequestMethods.POST, data)

            if (response.ok) {
                let apiData = await response.json();
                return apiData;
            }

            throw new Error(response.statusText);
        },
        async update(id: string | number, data: any) {

            let response = await this._this.fetchFromApi('Overviews/' + id, HTTPRequestMethods.PUT, data)

            if (response.ok) {
                return { status: 'success' };
            }

            throw new Error(response.statusText);
        },
        async delete(id: string | number) {

            let response = await this._this.fetchFromApi('Overviews/' + id, HTTPRequestMethods.DELETE)

            if (response.ok) {
                return { status: 'success' };
            }

            throw new Error(response.statusText);
        },
    }
}

export const stockTickerApi = new StockTickerAPI();