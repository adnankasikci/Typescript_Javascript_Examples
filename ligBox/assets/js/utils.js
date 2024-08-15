
export function fetchDataJSON(url, method, api){
    return fetch(url,
        {
            Method: method,
            headers:{
                "X-Auth-Token": api
            }
        }
        ).then(response => response.json());
}

export function includes(word, search) {
    return word.toLowerCase().includes(search.toLowerCase());
}

export function DataFilter(results, word){
    return results.filter(response => includes(response.name,word))
}