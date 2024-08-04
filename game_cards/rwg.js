import {fetchJson, includes} from './utils.js'

export class RWG {

    constructor(apiUrl){

        // Url uzunluğu 0 sa anlamındadır.
        if(!apiUrl.length){
            throw new Error("URL Doldurulması zorunludur!")
        }

        this.apiUrl = apiUrl;
    }

    async fetchData() {
        const { results, next, previous } = await fetchJson(this.apiUrl);
        return { results, next, previous };
    }

}