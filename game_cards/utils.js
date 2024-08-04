
//Bu fonksiyon, bir URL'yi alır ve bu URL'den JSON formatında veri döndürür

export function fetchJson(url) {
    return fetch(url).then(response => response.json());
}


//includes("Hello World", "world") çağrısı, "Hello World" dizgesinde "world" kelimesinin olup olmadığını kontrol eder

export function includes(searchIn, searchFor){
    return searchIn.toLowerCase().includes(searchFor.toLowerCase)
}