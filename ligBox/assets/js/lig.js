import { fetchDataJSON, DataFilter } from "./utils.js";

export class Lig {

    constructor(LigAPI, LigAPI_Key){

        if(!LigAPI || LigAPI.length == 0) {
            throw new Error("Url doldurulması gerekir!");
            if(!LigAPI_Key || LigAPI_Key.length == 0){
                throw new Error("API Key doldurulması gerekir!");
            }
        }

        this.LigAPI = LigAPI;
        this.LigAPI_Key = LigAPI_Key;

    }

    async fetchData(){
        const Data = await fetchDataJSON(this.LigAPI, "GET" , this.LigAPI_Key).then()
        return Data;
    }

    async searchLig(keyword){

        const { competitions: LigResult } = await this.fetchData();

        if(!keyword || keyword.length == 0){
            throw new Error("Arama yapmak için bir karakter gerekir!");
        }

        const filteredResult = DataFilter(LigResult, keyword);

        return filteredResult;

    }

}